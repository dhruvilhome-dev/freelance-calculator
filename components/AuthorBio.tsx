import Link from "next/link";

interface AuthorBioProps {
  lastUpdated?: string;
  irsCitations?: string;
}

export default function AuthorBio({
  lastUpdated = "2025–2026 Tax Year",
  irsCitations = "IRS Rev. Proc. 2024-40, IRC §1401, §199A & §162",
}: AuthorBioProps) {
  return (
    <aside
      aria-label="Editorial and Author Information"
      className="my-8 rounded-3xl border border-cyan-500/20 bg-gradient-to-b from-slate-900/90 to-slate-950/95 p-6 sm:p-7 shadow-xl backdrop-blur-md"
    >
      <div className="flex flex-col sm:flex-row items-start gap-5">
        {/* Author Avatar / Monogram */}
        <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-400 to-blue-600 text-xl font-black text-slate-950 shadow-md shadow-cyan-500/25">
          DP
        </div>

        <div className="space-y-3 flex-1">
          {/* Header & Badges */}
          <div className="flex flex-wrap items-center justify-between gap-2">
            <div>
              <div className="flex items-center gap-2">
                <h4 className="text-base font-bold text-white">Dhruvil Patel</h4>
                <span className="rounded-full bg-cyan-400/10 border border-cyan-400/30 px-2.5 py-0.5 text-[10px] font-semibold text-cyan-300">
                  Lead Modeling Engineer
                </span>
              </div>
              <p className="text-xs text-slate-400 mt-0.5">
                Reviewed &amp; Fact-Checked by Tax Compliance &amp; Financial Research Analysts
              </p>
            </div>

            <div className="flex items-center gap-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 text-[11px] font-medium text-emerald-400">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>Verified for {lastUpdated}</span>
            </div>
          </div>

          {/* Bio text */}
          <p className="text-xs leading-relaxed text-slate-300">
            Dhruvil is a software engineer and solo business strategist with extensive experience designing algorithmic financial engines and tax estimators for independent contractors. All formulas, deduction safe harbors, and self-employment tax schedules published on Freelance Calc Suite are verified directly against official IRS publications and statutory Internal Revenue Codes.
          </p>

          {/* Statutory verification notes */}
          <div className="flex flex-wrap items-center justify-between gap-3 border-t border-white/10 pt-3 text-[11px] text-slate-400">
            <span className="flex items-center gap-1.5">
              <span className="text-cyan-400 font-semibold">Statutory Basis:</span>
              <span>{irsCitations}</span>
            </span>
            <Link
              href="/about"
              className="font-semibold text-cyan-300 hover:text-cyan-200 transition-colors"
            >
              Our Editorial &amp; Review Standards &rarr;
            </Link>
          </div>
        </div>
      </div>
    </aside>
  );
}
