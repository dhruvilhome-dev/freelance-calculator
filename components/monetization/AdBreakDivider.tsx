import Link from "next/link";

export default function AdBreakDivider() {
  return (
    <div className="my-8 rounded-2xl border border-white/10 bg-slate-900/60 p-4 sm:p-5 flex flex-col sm:flex-row items-center justify-between gap-4 backdrop-blur-sm">
      <div className="flex items-center gap-3">
        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-cyan-400/10 text-cyan-400 font-bold">
          📚
        </div>
        <div>
          <h4 className="text-sm font-bold text-white">Need help finding your exact write-offs?</h4>
          <p className="text-xs text-slate-400">Review our verified Schedule C checklist covering home office, vehicle, and health insurance.</p>
        </div>
      </div>
      <Link
        href="/guides/freelance-tax-deductions"
        className="shrink-0 rounded-xl bg-white/5 border border-white/10 px-4 py-2 text-xs font-semibold text-slate-200 hover:bg-white/10 hover:text-white transition-all"
      >
        Read Tax Checklist &rarr;
      </Link>
    </div>
  );
}
