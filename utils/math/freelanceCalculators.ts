import type {
  FilingStatus,
  HourlyRateConfig,
  HourlyRateResult,
  MarginInputPayload,
  MarginResult,
  TargetHourlyRateConfig,
  TaxBreakdownResult,
  TaxInputPayload,
} from "../../types/financial";

interface TaxBracket {
  limit: number;
  rate: number;
}

const SOCIAL_SECURITY_WAGE_BASE_2024 = 168_600;
const ADDITIONAL_MEDICARE_THRESHOLD: Record<FilingStatus, number> = {
  single: 200_000,
  married: 250_000,
};

const FEDERAL_BRACKETS_2024: Record<FilingStatus, readonly TaxBracket[]> = {
  married: [
    { limit: 23_200, rate: 0.1 },
    { limit: 94_300, rate: 0.12 },
    { limit: 201_050, rate: 0.22 },
    { limit: 383_900, rate: 0.24 },
    { limit: 487_450, rate: 0.32 },
    { limit: 731_200, rate: 0.35 },
    { limit: Infinity, rate: 0.37 },
  ],
  single: [
    { limit: 11_600, rate: 0.1 },
    { limit: 47_150, rate: 0.12 },
    { limit: 100_525, rate: 0.22 },
    { limit: 191_950, rate: 0.24 },
    { limit: 243_725, rate: 0.32 },
    { limit: 609_350, rate: 0.35 },
    { limit: Infinity, rate: 0.37 },
  ],
};

function nonNegative(value: number): number {
  return Number.isFinite(value) ? Math.max(0, value) : 0;
}

function calculateFederalTax(taxableIncome: number, filingStatus: FilingStatus): number {
  const income = nonNegative(taxableIncome);
  let tax = 0;
  let previousLimit = 0;

  for (const bracket of FEDERAL_BRACKETS_2024[filingStatus]) {
    const taxableAmountInBracket = Math.max(
      0,
      Math.min(income, bracket.limit) - previousLimit,
    );
    tax += taxableAmountInBracket * bracket.rate;
    previousLimit = bracket.limit;

    if (income <= bracket.limit) break;
  }

  return tax;
}

export function estimateSelfEmploymentTax(
  payload: TaxInputPayload,
): TaxBreakdownResult {
  const grossIncome = nonNegative(payload.grossIncome);
  const businessExpenses = nonNegative(payload.businessExpenses);
  const netProfit = grossIncome - businessExpenses;
  const taxableBaseSE = Math.max(0, netProfit) * 0.9235;

  const w2SocialSecurityWages = nonNegative(payload.w2SocialSecurityWages ?? 0);
  const w2MedicareWages = nonNegative(payload.w2MedicareWages ?? 0);
  const remainingSocialSecurityBase = Math.max(
    0,
    SOCIAL_SECURITY_WAGE_BASE_2024 - w2SocialSecurityWages,
  );

  const socialSecurityTax = Math.min(
    taxableBaseSE,
    remainingSocialSecurityBase,
  ) * 0.124;
  const medicareTax = taxableBaseSE * 0.029;
  const selfEmploymentTax = socialSecurityTax + medicareTax;
  const additionalMedicareTax = Math.max(
    0,
    w2MedicareWages +
      taxableBaseSE -
      ADDITIONAL_MEDICARE_THRESHOLD[payload.filingStatus],
  ) * 0.009;

  const standardDeduction = payload.filingStatus === "married" ? 29_200 : 14_600;
  const deductibleHalfSETax = selfEmploymentTax * 0.5;
  const qbiEligibleIncome = Math.max(0, netProfit - deductibleHalfSETax);
  const taxableIncomeBeforeQBI = Math.max(
    0,
    qbiEligibleIncome - standardDeduction,
  );

  // Assumes an eligible QBI business and no capital gains or high-income QBI limits.
  const qbiDeduction = Math.min(
    qbiEligibleIncome * 0.2,
    taxableIncomeBeforeQBI * 0.2,
  );
  const taxableIncomeFed = taxableIncomeBeforeQBI - qbiDeduction;
  const estimatedFederalTax = calculateFederalTax(
    taxableIncomeFed,
    payload.filingStatus,
  );
  const stateTaxRate = Math.min(1, nonNegative(payload.stateTaxRate));
  const estimatedStateTax = Math.max(0, netProfit) * stateTaxRate;
  const totalTax =
    selfEmploymentTax +
    additionalMedicareTax +
    estimatedFederalTax +
    estimatedStateTax;

  return {
    netProfit,
    taxableBaseSE,
    selfEmploymentTax,
    additionalMedicareTax,
    standardDeduction,
    qbiDeduction,
    taxableIncomeFed,
    estimatedFederalTax,
    estimatedStateTax,
    totalTax,
    netAfterTaxes: netProfit - totalTax,
  };
}

function getWorkCapacity(
  billableHoursPerWeek: number,
  weeksOff: number,
): Pick<HourlyRateResult, "totalWorkWeeks" | "totalBillableHours"> {
  const totalWorkWeeks = Math.max(0, 52 - nonNegative(weeksOff));
  const totalBillableHours = totalWorkWeeks * nonNegative(billableHoursPerWeek);

  return { totalWorkWeeks, totalBillableHours };
}

export function calculateHourlyRate(
  config: HourlyRateConfig,
): HourlyRateResult {
  const requiredGrossRevenue =
    nonNegative(config.targetNetSalary) +
    nonNegative(config.estimatedTaxes) +
    nonNegative(config.annualOverhead);
  const { totalWorkWeeks, totalBillableHours } = getWorkCapacity(
    config.billableHoursPerWeek,
    config.weeksOff,
  );

  return {
    requiredGrossRevenue,
    totalWorkWeeks,
    totalBillableHours,
    minimumHourlyRate:
      totalBillableHours > 0
        ? requiredGrossRevenue / totalBillableHours
        : null,
  };
}

export function calculateTargetHourlyRate(
  config: TargetHourlyRateConfig,
): HourlyRateResult {
  const targetNetSalary = nonNegative(config.targetNetSalary);
  const annualOverhead = nonNegative(config.annualOverhead);
  const { totalWorkWeeks, totalBillableHours } = getWorkCapacity(
    config.billableHoursPerWeek,
    config.weeksOff,
  );

  if (totalBillableHours === 0) {
    return {
      requiredGrossRevenue: 0,
      totalWorkWeeks,
      totalBillableHours,
      minimumHourlyRate: null,
    };
  }

  const netAfterTaxesAt = (grossIncome: number): number =>
    estimateSelfEmploymentTax({
      grossIncome,
      businessExpenses: annualOverhead,
      filingStatus: config.filingStatus,
      stateTaxRate: config.stateTaxRate,
      w2SocialSecurityWages: config.w2SocialSecurityWages,
      w2MedicareWages: config.w2MedicareWages,
    }).netAfterTaxes;

  let lowerBound = annualOverhead;
  let upperBound = Math.max(annualOverhead + targetNetSalary * 2 + 1, 1);

  while (netAfterTaxesAt(upperBound) < targetNetSalary) {
    upperBound *= 2;
  }

  for (let iteration = 0; iteration < 60; iteration += 1) {
    const midpoint = (lowerBound + upperBound) / 2;
    if (netAfterTaxesAt(midpoint) < targetNetSalary) {
      lowerBound = midpoint;
    } else {
      upperBound = midpoint;
    }
  }

  return {
    requiredGrossRevenue: upperBound,
    totalWorkWeeks,
    totalBillableHours,
    minimumHourlyRate: upperBound / totalBillableHours,
  };
}

export function estimateProjectMargin(
  payload: MarginInputPayload,
): MarginResult {
  const revenue = nonNegative(payload.projectFee);
  const directCosts = nonNegative(payload.directCosts);
  const grossMarginAmount = revenue - directCosts;

  return {
    grossMarginAmount,
    grossMarginPercentage:
      revenue > 0 ? (grossMarginAmount / revenue) * 100 : null,
  };
}
