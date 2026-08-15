import Link from "next/link";

export default function SidebarAdSlot() {
  return (
    <div className="w-full space-y-6">
      {/* 2025-2026 Tax Deadlines Card */}
      <div className="rounded-3xl border border-white/10 bg-slate-900/80 p-6 space-y-4 shadow-xl backdrop-blur-sm">
        <div className="flex items-center gap-2">
          <span className="flex h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />
          <h3 className="text-xs font-bold uppercase tracking-wider text-slate-300">
            2025–2026 Tax Deadlines
          </h3>
        </div>
        
        <p className="text-xs text-slate-400 leading-relaxed">
          IRS Form 1040-ES quarterly estimated payments must be remitted on these statutory dates:
        </p>

        <ul className="space-y-2.5 text-xs text-slate-300">
          <li className="flex items-center justify-between border-b border-white/5 pb-2">
            <span className="text-slate-400">Q1 (Jan 1 – Mar 31)</span>
            <strong className="text-cyan-300">Apr 15, 2026</strong>
          </li>
          <li className="flex items-center justify-between border-b border-white/5 pb-2">
            <span className="text-slate-400">Q2 (Apr 1 – May 31)</span>
            <strong className="text-cyan-300">Jun 15, 2026</strong>
          </li>
          <li className="flex items-center justify-between border-b border-white/5 pb-2">
            <span className="text-slate-400">Q3 (Jun 1 – Aug 31)</span>
            <strong className="text-cyan-300">Sep 15, 2026</strong>
          </li>
          <li className="flex items-center justify-between">
            <span className="text-slate-400">Q4 (Sep 1 – Dec 31)</span>
            <strong className="text-cyan-300">Jan 15, 2027</strong>
          </li>
        </ul>

        <Link
          href="/guides/quarterly-estimated-taxes"
          className="mt-2 block w-full rounded-xl border border-cyan-400/20 bg-cyan-400/10 py-2.5 text-center text-xs font-semibold text-cyan-300 hover:bg-cyan-400/20 transition-all"
        >
          View Full 1040-ES Guide &rarr;
        </Link>
      </div>

      {/* Tax Strategy Quick Tips */}
      <div className="rounded-3xl border border-white/10 bg-slate-900/80 p-6 space-y-3 shadow-xl backdrop-blur-sm">
        <h3 className="text-xs font-bold uppercase tracking-wider text-slate-300">
          💡 Tax Strategy Checklist
        </h3>
        <ul className="space-y-2 text-xs text-slate-400">
          <li>• <strong>Section 179:</strong> Expense 100% of equipment in Year 1.</li>
          <li>• <strong>Mileage:</strong> 70¢/mile standard IRS rate for 2025–2026.</li>
          <li>• <strong>Health Insurance:</strong> 100% deduction for solo workers.</li>
          <li>• <strong>Retirement:</strong> Shelter up to $70,000 in a Solo 401(k).</li>
        </ul>
        <Link
          href="/guides/freelance-tax-deductions"
          className="inline-block text-xs font-semibold text-cyan-400 hover:underline pt-1"
        >
          Explore Top Write-Offs &rarr;
        </Link>
      </div>
    </div>
  );
}
