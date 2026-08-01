function calculateFederalTax(taxableIncome, filingStatus) {
  if (taxableIncome <= 0) return 0;
  const brackets = filingStatus === "married" 
    ? [
        { limit: 23200, rate: 0.10 },
        { limit: 94300, rate: 0.12 },
        { limit: 201050, rate: 0.22 },
        { limit: 383900, rate: 0.24 },
        { limit: 487450, rate: 0.32 },
        { limit: 731200, rate: 0.35 },
        { limit: Infinity, rate: 0.37 },
      ]
    : [
        { limit: 11600, rate: 0.10 },
        { limit: 47150, rate: 0.12 },
        { limit: 100525, rate: 0.22 },
        { limit: 191950, rate: 0.24 },
        { limit: 243725, rate: 0.32 },
        { limit: 609350, rate: 0.35 },
        { limit: Infinity, rate: 0.37 },
      ];

  let tax = 0;
  let previousLimit = 0;

  for (const bracket of brackets) {
    if (taxableIncome > previousLimit) {
      const taxableAmountInBracket = Math.min(taxableIncome - previousLimit, bracket.limit - previousLimit);
      tax += taxableAmountInBracket * bracket.rate;
      previousLimit = bracket.limit;
    } else {
      break;
    }
  }
  return tax;
}

function estimateSelfEmploymentTax(payload) {
  const netProfit = Math.max(0, payload.grossIncome - payload.businessExpenses);
  const taxableBaseSE = netProfit * 0.9235;
  const selfEmploymentTax = taxableBaseSE * 0.153; 
  const standardDeduction = payload.filingStatus === "married" ? 29200 : 14600;
  const adjustedNetProfit = Math.max(0, netProfit - (selfEmploymentTax * 0.5));
  const qbiDeduction = adjustedNetProfit * 0.20; 
  const taxableIncomeFed = Math.max(0, adjustedNetProfit - standardDeduction - qbiDeduction);
  const estimatedFederalTax = calculateFederalTax(taxableIncomeFed, payload.filingStatus);
  const estimatedStateTax = netProfit * (payload.stateTaxRate || 0);
  
  const totalTax = selfEmploymentTax + estimatedFederalTax + estimatedStateTax;
  const netAfterTaxes = netProfit - totalTax;

  return { netProfit, taxableBaseSE, selfEmploymentTax, standardDeduction, qbiDeduction, taxableIncomeFed, estimatedFederalTax, estimatedStateTax, totalTax, netAfterTaxes };
}

console.log("--- Progressive Tax Verification ---");
console.log("Single, $150k Revenue, $30k Expenses, 8% State Tax:");
console.log(estimateSelfEmploymentTax({ grossIncome: 150000, businessExpenses: 30000, filingStatus: "single", stateTaxRate: 0.08 }));

console.log("\nMarried, $300k Revenue, $50k Expenses, 0% State Tax:");
console.log(estimateSelfEmploymentTax({ grossIncome: 300000, businessExpenses: 50000, filingStatus: "married", stateTaxRate: 0 }));
