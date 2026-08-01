import assert from "node:assert/strict";
import {
  calculateTargetHourlyRate,
  estimateProjectMargin,
  estimateSelfEmploymentTax,
} from "./utils/math/freelanceCalculators";

function approximatelyEqual(actual: number, expected: number, tolerance = 0.01): void {
  assert.ok(
    Math.abs(actual - expected) <= tolerance,
    `Expected ${actual} to be within ${tolerance} of ${expected}`,
  );
}

const zeroIncome = estimateSelfEmploymentTax({
  grossIncome: 0,
  businessExpenses: 0,
  filingStatus: "single",
  stateTaxRate: 0,
});
assert.equal(zeroIncome.totalTax, 0);
assert.equal(zeroIncome.netAfterTaxes, 0);

const netLoss = estimateSelfEmploymentTax({
  grossIncome: 0,
  businessExpenses: 500,
  filingStatus: "single",
  stateTaxRate: 0,
});
assert.equal(netLoss.netProfit, -500);
assert.equal(netLoss.totalTax, 0);
assert.equal(netLoss.netAfterTaxes, -500);

const highIncome = estimateSelfEmploymentTax({
  grossIncome: 300_000,
  businessExpenses: 50_000,
  filingStatus: "single",
  stateTaxRate: 0,
});
approximatelyEqual(highIncome.taxableBaseSE, 230_875);
approximatelyEqual(highIncome.selfEmploymentTax, 27_601.775);
approximatelyEqual(highIncome.additionalMedicareTax, 277.875);

const targetRate = calculateTargetHourlyRate({
  targetNetSalary: 80_000,
  annualOverhead: 20_000,
  billableHoursPerWeek: 30,
  weeksOff: 4,
  filingStatus: "single",
  stateTaxRate: 0,
});
assert.notEqual(targetRate.minimumHourlyRate, null);
assert.ok(targetRate.requiredGrossRevenue > 100_000);

const zeroCapacityRate = calculateTargetHourlyRate({
  targetNetSalary: 80_000,
  annualOverhead: 20_000,
  billableHoursPerWeek: 0,
  weeksOff: 4,
  filingStatus: "single",
  stateTaxRate: 0,
});
assert.equal(zeroCapacityRate.minimumHourlyRate, null);

const lossMargin = estimateProjectMargin({ projectFee: 1_000, directCosts: 1_500 });
assert.equal(lossMargin.grossMarginAmount, -500);
assert.equal(lossMargin.grossMarginPercentage, -50);
assert.equal(
  estimateProjectMargin({ projectFee: 0, directCosts: 500 }).grossMarginPercentage,
  null,
);

console.log("Calculator verification passed.");
