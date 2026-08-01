"use client";

import { memo, useMemo, useState } from "react";
import type { ChangeEvent } from "react";
import type {
  FilingStatus,
  MarginResult,
  TaxBreakdownResult,
  TaxInputPayload,
} from "../../types/financial";
import {
  calculateTargetHourlyRate,
  estimateProjectMargin,
  estimateSelfEmploymentTax,
} from "../../utils/math/freelanceCalculators";

interface SliderInputProps {
  label: string;
  description?: string;
  value: number;
  min: number;
  max: number;
  step: number;
  prefix?: string;
  suffix?: string;
  onChange: (value: number) => void;
}

const currency = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 0,
});

const compactCurrency = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  notation: "compact",
  maximumFractionDigits: 1,
});

function clamp(value: number, min: number, max: number): number {
  return Math.min(max, Math.max(min, value));
}

const SliderInput = memo(function SliderInput({
  label,
  description,
  value,
  min,
  max,
  step,
  prefix,
  suffix,
  onChange,
}: SliderInputProps) {
  const updateFromInput = (event: ChangeEvent<HTMLInputElement>) => {
    const nextValue = Number(event.target.value);
    onChange(Number.isFinite(nextValue) ? clamp(nextValue, min, max) : min);
  };

  return (
    <div className="space-y-3">
      <div className="flex items-end justify-between gap-4">
        <div>
          <label className="block text-sm font-semibold text-slate-100">
            {label}
          </label>
          {description ? (
            <p className="mt-1 text-xs text-slate-400">{description}</p>
          ) : null}
        </div>
        <div className="relative shrink-0">
          {prefix ? (
            <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-sm font-semibold text-slate-400">
              {prefix}
            </span>
          ) : null}
          <input
            aria-label={label}
            className={`theme-input h-10 w-28 rounded-xl border border-slate-700 bg-slate-950 px-3 text-right text-sm font-semibold text-slate-100 outline-none transition focus:border-cyan-400 focus:ring-4 focus:ring-cyan-400/10 ${prefix ? "pl-7" : ""} ${suffix ? "pr-9" : ""}`}
            inputMode="decimal"
            min={min}
            max={max}
            step={step}
            type="number"
            value={value}
            onChange={updateFromInput}
          />
          {suffix ? (
            <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-xs font-semibold text-slate-400">
              {suffix}
            </span>
          ) : null}
        </div>
      </div>
      <input
        aria-label={`${label} slider`}
        className="finance-range theme-range h-1.5 w-full cursor-pointer appearance-none rounded-full bg-slate-700"
        min={min}
        max={max}
        step={step}
        type="range"
        value={value}
        onChange={updateFromInput}
      />
      <div className="flex justify-between text-xs font-medium text-slate-500">
        <span>
          {prefix}
          {min.toLocaleString()}
          {suffix ? ` ${suffix}` : ""}
        </span>
        <span>
          {prefix}
          {max.toLocaleString()}
          {suffix ? ` ${suffix}` : ""}
        </span>
      </div>
    </div>
  );
});

function MetricCard({
  label,
  value,
  tone = "default",
}: {
  label: string;
  value: string;
  tone?: "default" | "positive" | "negative";
}) {
  const valueColor = {
    default: "text-white",
    positive: "text-emerald-400",
    negative: "text-rose-400",
  }[tone];

  return (
    <div className="theme-metric rounded-2xl border border-white/10 bg-white/[0.045] p-4">
      <p className="text-xs font-medium text-slate-400">{label}</p>
      <p className={`mt-2 text-2xl font-bold tracking-tight ${valueColor}`}>
        {value}
      </p>
    </div>
  );
}

function TaxLine({ label, value }: { label: string; value: number }) {
  return (
    <div className="flex items-center justify-between gap-4 text-sm">
      <span className="text-slate-400">{label}</span>
      <span className="font-semibold tabular-nums text-slate-100">
        {currency.format(value)}
      </span>
    </div>
  );
}

export default function TaxCalculatorSuite() {
  const [grossRevenue, setGrossRevenue] = useState(120_000);
  const [expenses, setExpenses] = useState(20_000);
  const [desiredTakeHome, setDesiredTakeHome] = useState(80_000);
  const [billableHours, setBillableHours] = useState(30);
  const [weeksWorked, setWeeksWorked] = useState(48);
  const [filingStatus, setFilingStatus] = useState<FilingStatus>("single");
  const [stateTaxRate, setStateTaxRate] = useState(0);
  const [projectFee, setProjectFee] = useState(5_000);
  const [directCosts, setDirectCosts] = useState(1_500);

  const taxPayload: TaxInputPayload = useMemo(
    () => ({
      grossIncome: grossRevenue,
      businessExpenses: expenses,
      filingStatus,
      stateTaxRate,
    }),
    [expenses, filingStatus, grossRevenue, stateTaxRate],
  );

  const taxBreakdown: TaxBreakdownResult = useMemo(
    () => estimateSelfEmploymentTax(taxPayload),
    [taxPayload],
  );

  const hourlyRateResult = useMemo(
    () =>
      calculateTargetHourlyRate({
        targetNetSalary: desiredTakeHome,
        annualOverhead: expenses,
        billableHoursPerWeek: billableHours,
        weeksOff: 52 - weeksWorked,
        filingStatus,
        stateTaxRate,
      }),
    [
      billableHours,
      desiredTakeHome,
      expenses,
      filingStatus,
      stateTaxRate,
      weeksWorked,
    ],
  );

  const projectMargin: MarginResult = useMemo(
    () => estimateProjectMargin({ projectFee, directCosts }),
    [directCosts, projectFee],
  );

  const availableBillableHours = billableHours * weeksWorked;
  const currentEffectiveRate =
    availableBillableHours > 0 ? grossRevenue / availableBillableHours : null;
  const grossRevenueForBar = Math.max(grossRevenue, 1);
  const takeHomePercent = Math.max(
    0,
    Math.min(100, (taxBreakdown.netAfterTaxes / grossRevenueForBar) * 100),
  );
  const taxPercent = Math.max(
    0,
    Math.min(100, (taxBreakdown.totalTax / grossRevenueForBar) * 100),
  );
  const expensePercent = Math.max(
    0,
    Math.min(100, (expenses / grossRevenueForBar) * 100),
  );
  const netTone = taxBreakdown.netProfit >= 0 ? "positive" : "negative";
  const marginTone =
    projectMargin.grossMarginAmount >= 0 ? "positive" : "negative";

  return (
    <section className="calculator-shell mx-auto w-full max-w-6xl">
      <div className="mb-8 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
        <div>
          <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-xs font-semibold text-cyan-300">
            <span className="h-1.5 w-1.5 rounded-full bg-cyan-300" />
            2024 U.S. freelance estimator
          </div>
          <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Know your number. Price with confidence.
          </h1>
          <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-400 sm:text-base">
            Model take-home pay, tax exposure, billable capacity, and project
            margin in one focused workspace.
          </p>
        </div>
        <div className="theme-stat rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-slate-300">
          <span className="block text-xs font-medium uppercase tracking-[0.12em] text-slate-500">
            Available billable time
          </span>
          <strong className="mt-1 block text-lg text-white">
            {availableBillableHours.toLocaleString()} hrs / year
          </strong>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-[minmax(0,1.25fr)_minmax(320px,0.75fr)]">
        <div className="space-y-6">
          <div className="theme-card rounded-3xl border border-white/10 bg-slate-900/80 p-5 shadow-2xl shadow-slate-950/30 backdrop-blur sm:p-7">
            <div className="flex flex-col justify-between gap-4 border-b border-white/10 pb-6 sm:flex-row sm:items-center">
              <div>
                <h2 className="text-lg font-bold text-white">
                  Income & tax profile
                </h2>
                <p className="mt-1 text-sm text-slate-400">
                  A high-level estimate, not a filed tax return.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-3 sm:flex">
                <select
                  aria-label="Filing status"
                  className="theme-input h-10 appearance-none pr-8 rounded-xl border border-slate-700 bg-slate-950 px-3 text-sm font-semibold text-slate-200 outline-none transition focus:border-cyan-400 focus:ring-4 focus:ring-cyan-400/10"
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%2394a3b8'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`,
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "right 0.75rem center",
                    backgroundSize: "1rem",
                  }}
                  value={filingStatus}
                  onChange={(event) =>
                    setFilingStatus(event.target.value as FilingStatus)
                  }
                >
                  <option value="single">Single</option>
                  <option value="married">Married jointly</option>
                </select>
                <select
                  aria-label="State tax rate"
                  className="theme-input h-10 appearance-none pr-10 rounded-xl border border-slate-700 bg-slate-950 px-3 text-sm font-semibold text-slate-200 outline-none transition focus:border-cyan-400 focus:ring-4 focus:ring-cyan-400/10"
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%2394a3b8'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`,
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "right 0.75rem center",
                    backgroundSize: "1rem",
                  }}
                  value={stateTaxRate}
                  onChange={(event) =>
                    setStateTaxRate(Number(event.target.value))
                  }
                >
                  <option value={0}>No state tax</option>
                  <option value={0.05}>Estimated state · 5%</option>
                  <option value={0.08}>Estimated state · 8%</option>
                </select>
              </div>
            </div>

            <div className="mt-7 space-y-8">
              <SliderInput
                label="Annual gross revenue"
                value={grossRevenue}
                min={0}
                max={500_000}
                step={1_000}
                prefix="$"
                onChange={setGrossRevenue}
              />
              <SliderInput
                label="Deductible business expenses"
                description="Software, insurance, contractors, and other annual overhead."
                value={expenses}
                min={0}
                max={200_000}
                step={500}
                prefix="$"
                onChange={setExpenses}
              />
            </div>
          </div>

          <div className="theme-card rounded-3xl border border-white/10 bg-slate-900/80 p-5 shadow-xl shadow-slate-950/20 sm:p-7">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h2 className="text-lg font-bold text-white">Rate planner</h2>
                <p className="mt-1 text-sm text-slate-400">
                  Set the take-home goal; taxes and overhead are grossed up
                  automatically.
                </p>
              </div>
              <span className="rounded-full bg-violet-400/10 px-3 py-1 text-xs font-semibold text-violet-300">
                Goal based
              </span>
            </div>
            <div className="mt-7 space-y-8">
              <SliderInput
                label="Desired annual take-home"
                value={desiredTakeHome}
                min={0}
                max={300_000}
                step={1_000}
                prefix="$"
                onChange={setDesiredTakeHome}
              />
              <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
                <SliderInput
                  label="Billable hours per week"
                  description="After sales and admin time."
                  value={billableHours}
                  min={0}
                  max={80}
                  step={1}
                  suffix="hrs"
                  onChange={setBillableHours}
                />
                <SliderInput
                  label="Weeks worked per year"
                  description="Vacation and planned time off excluded."
                  value={weeksWorked}
                  min={0}
                  max={52}
                  step={1}
                  suffix="wks"
                  onChange={setWeeksWorked}
                />
              </div>
            </div>
          </div>

          <div className="theme-card rounded-3xl border border-white/10 bg-slate-900/80 p-5 shadow-xl shadow-slate-950/20 sm:p-7">
            <div className="flex items-center justify-between gap-4">
              <div>
                <h2 className="text-lg font-bold text-white">
                  Project margin check
                </h2>
                <p className="mt-1 text-sm text-slate-400">
                  Gross margin = (revenue − direct costs) / revenue.
                </p>
              </div>
              <span
                className={`rounded-full px-3 py-1 text-xs font-semibold ${marginTone === "positive" ? "bg-emerald-400/10 text-emerald-300" : "bg-rose-400/10 text-rose-300"}`}
              >
                {projectMargin.grossMarginPercentage === null
                  ? "No revenue"
                  : `${projectMargin.grossMarginPercentage.toFixed(1)}% margin`}
              </span>
            </div>
            <div className="mt-7 grid grid-cols-1 gap-8 sm:grid-cols-2">
              <SliderInput
                label="Project fee"
                value={projectFee}
                min={0}
                max={50_000}
                step={250}
                prefix="$"
                onChange={setProjectFee}
              />
              <SliderInput
                label="Direct project costs"
                description="Contractors, materials, or project-specific tools."
                value={directCosts}
                min={0}
                max={50_000}
                step={250}
                prefix="$"
                onChange={setDirectCosts}
              />
            </div>
          </div>
        </div>

        <aside className="lg:sticky lg:top-6 lg:self-start">
          <div className="theme-summary overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-slate-800 to-slate-950 p-5 shadow-2xl shadow-slate-950/40 sm:p-6">
            <p className="text-sm font-semibold text-slate-300">
              Your financial snapshot
            </p>

            <div className="mt-5 rounded-2xl bg-gradient-to-br from-cyan-400 to-blue-600 p-5 text-slate-950 shadow-lg shadow-cyan-950/40">
              <span className="text-xs font-bold uppercase tracking-[0.12em] text-slate-900/70">
                Recommended minimum rate
              </span>
              <div className="mt-2 flex items-end gap-2">
                <span className="text-5xl font-black tracking-tight">
                  {hourlyRateResult.minimumHourlyRate === null
                    ? "—"
                    : currency.format(hourlyRateResult.minimumHourlyRate)}
                </span>
                <span className="mb-1.5 text-sm font-bold text-slate-900/70">
                  / hr
                </span>
              </div>
              <p className="mt-3 text-xs font-medium leading-5 text-slate-900/75">
                Revenue needed:{" "}
                {compactCurrency.format(hourlyRateResult.requiredGrossRevenue)}{" "}
                to reach your take-home goal.
              </p>
            </div>

            <div className="mt-4 grid grid-cols-2 gap-3">
              <MetricCard
                label="Net profit"
                value={currency.format(taxBreakdown.netProfit)}
                tone={netTone}
              />
              <MetricCard
                label="Effective rate"
                value={
                  currentEffectiveRate === null
                    ? "—"
                    : currency.format(currentEffectiveRate)
                }
              />
            </div>

            <div className="theme-metric mt-4 rounded-2xl border border-white/10 bg-white/[0.045] p-4">
              <div className="flex items-end justify-between gap-4">
                <p className="text-xs font-medium text-slate-400">
                  Estimated annual tax
                </p>
                <p className="text-2xl font-bold tracking-tight text-rose-400">
                  {currency.format(taxBreakdown.totalTax)}
                </p>
              </div>
              <div className="mt-4 space-y-3 border-t border-white/10 pt-4">
                <TaxLine
                  label="Self-employment tax"
                  value={taxBreakdown.selfEmploymentTax}
                />
                {taxBreakdown.additionalMedicareTax > 0 ? (
                  <TaxLine
                    label="Additional Medicare"
                    value={taxBreakdown.additionalMedicareTax}
                  />
                ) : null}
                <TaxLine
                  label="Federal income tax"
                  value={taxBreakdown.estimatedFederalTax}
                />
                {stateTaxRate > 0 ? (
                  <TaxLine
                    label="Estimated state tax"
                    value={taxBreakdown.estimatedStateTax}
                  />
                ) : null}
              </div>
            </div>

            <div className="theme-metric mt-4 rounded-2xl border border-white/10 bg-white/[0.03] p-4">
              <div className="flex h-2 overflow-hidden rounded-full bg-slate-700">
                <div
                  className="bg-emerald-400"
                  style={{ width: `${takeHomePercent}%` }}
                />
                <div
                  className="bg-rose-400"
                  style={{ width: `${taxPercent}%` }}
                />
                <div
                  className="bg-slate-400"
                  style={{ width: `${expensePercent}%` }}
                />
              </div>
              <div className="mt-3 flex flex-wrap gap-x-3 gap-y-1 text-xs font-medium text-slate-400">
                <span>
                  <i className="mr-1 inline-block h-2 w-2 rounded-full bg-emerald-400" />
                  Take-home
                </span>
                <span>
                  <i className="mr-1 inline-block h-2 w-2 rounded-full bg-rose-400" />
                  Tax
                </span>
                <span>
                  <i className="mr-1 inline-block h-2 w-2 rounded-full bg-slate-400" />
                  Expenses
                </span>
              </div>
            </div>

            <p className="mt-5 text-xs leading-5 text-slate-500">
              Uses 2024 federal brackets and a simplified QBI estimate. It
              excludes credits, itemized deductions, capital gains, and
              high-income QBI limitations.
            </p>
          </div>
        </aside>
      </div>
    </section>
  );
}
