export type FilingStatus = "single" | "married";

export interface TaxInputPayload {
  grossIncome: number;
  businessExpenses: number;
  filingStatus: FilingStatus;
  stateTaxRate: number;
  /** Social Security wages from employment; used to reduce the remaining SS wage base. */
  w2SocialSecurityWages?: number;
  /** Medicare wages from employment; used for the Additional Medicare Tax estimate. */
  w2MedicareWages?: number;
}

export interface TaxBreakdownResult {
  /** Can be negative when deductible expenses exceed revenue. */
  netProfit: number;
  taxableBaseSE: number;
  selfEmploymentTax: number;
  additionalMedicareTax: number;
  standardDeduction: number;
  qbiDeduction: number;
  taxableIncomeFed: number;
  estimatedFederalTax: number;
  estimatedStateTax: number;
  totalTax: number;
  netAfterTaxes: number;
}

export interface HourlyRateConfig {
  /** Desired annual take-home pay after taxes. */
  targetNetSalary: number;
  /** Annual tax estimate, when using a manually supplied estimate. */
  estimatedTaxes: number;
  annualOverhead: number;
  /** Hours available to invoice after admin, sales, and delivery overhead. */
  billableHoursPerWeek: number;
  weeksOff: number;
}

export interface TargetHourlyRateConfig {
  targetNetSalary: number;
  annualOverhead: number;
  billableHoursPerWeek: number;
  weeksOff: number;
  filingStatus: FilingStatus;
  stateTaxRate: number;
  w2SocialSecurityWages?: number;
  w2MedicareWages?: number;
}

export interface HourlyRateResult {
  requiredGrossRevenue: number;
  totalWorkWeeks: number;
  totalBillableHours: number;
  /** Null means there are no billable hours available. */
  minimumHourlyRate: number | null;
}

export interface MarginInputPayload {
  projectFee: number;
  directCosts: number;
}

export interface MarginResult {
  grossMarginAmount: number;
  /** Null when revenue is zero because a percentage would be undefined. */
  grossMarginPercentage: number | null;
}
