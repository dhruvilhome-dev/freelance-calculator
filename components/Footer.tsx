import Link from "next/link";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-white/10 bg-slate-950/90 pt-12 pb-8 text-slate-400 backdrop-blur-md">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5">
          
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-400 to-blue-600 shadow-md shadow-cyan-500/20">
                <svg className="h-4 w-4 text-slate-950" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <span className="text-base font-bold tracking-tight text-white">
                Freelance Calc Suite
              </span>
            </div>
            <p className="text-xs leading-relaxed text-slate-400 max-w-sm">
              An open, transparent financial modeling suite designed to help freelancers, contractors, and solo practitioners calculate self-employment taxes, target sustainable hourly rates, and optimize project margins.
            </p>
            <div className="flex items-center gap-2 text-xs text-slate-500">
              <span className="h-2 w-2 rounded-full bg-emerald-400 inline-block animate-pulse" />
              <span>Updated for 2025–2026 IRS Tax Provisions</span>
            </div>
          </div>

          {/* Calculators Col */}
          <div className="space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-200">
              Calculators & Tools
            </h3>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/" className="text-slate-400 hover:text-cyan-300 transition-colors">
                  Freelance Tax Calculator
                </Link>
              </li>
              <li>
                <Link href="/calculator/software-engineer" className="text-slate-400 hover:text-cyan-300 transition-colors">
                  Software Engineer Calculator
                </Link>
              </li>
              <li>
                <Link href="/calculator/graphic-designer" className="text-slate-400 hover:text-cyan-300 transition-colors">
                  Graphic Designer Calculator
                </Link>
              </li>
              <li>
                <Link href="/calculator/consultant" className="text-slate-400 hover:text-cyan-300 transition-colors">
                  Consultant Rate Calculator
                </Link>
              </li>
              <li>
                <Link href="/calculator/california-freelance" className="text-slate-400 hover:text-cyan-300 transition-colors">
                  California Freelance Tax
                </Link>
              </li>
              <li>
                <Link href="/calculator/texas-freelance" className="text-slate-400 hover:text-cyan-300 transition-colors">
                  Texas Freelance Tax
                </Link>
              </li>
            </ul>
          </div>

          {/* Educational Guides Col */}
          <div className="space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-200">
              Tax & Rate Guides
            </h3>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/guides" className="text-slate-400 hover:text-cyan-300 transition-colors">
                  All Financial Guides
                </Link>
              </li>
              <li>
                <Link href="/guides/quarterly-estimated-taxes" className="text-slate-400 hover:text-cyan-300 transition-colors">
                  Quarterly Taxes (1040-ES)
                </Link>
              </li>
              <li>
                <Link href="/guides/freelance-tax-deductions" className="text-slate-400 hover:text-cyan-300 transition-colors">
                  Top Schedule C Deductions
                </Link>
              </li>
              <li>
                <Link href="/guides/1099-vs-w2-tax-difference" className="text-slate-400 hover:text-cyan-300 transition-colors">
                  1099 vs W-2 Tax Differences
                </Link>
              </li>
            </ul>
          </div>

          {/* Trust & Legal Col */}
          <div className="space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-200">
              Trust & Legal
            </h3>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/about" className="text-slate-400 hover:text-cyan-300 transition-colors">
                  About & Methodology
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-slate-400 hover:text-cyan-300 transition-colors">
                  Contact Support
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-slate-400 hover:text-cyan-300 transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-slate-400 hover:text-cyan-300 transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/disclaimer" className="text-slate-400 hover:text-cyan-300 transition-colors">
                  Financial Disclaimer
                </Link>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-10 border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            © {currentYear} Freelance Calc Suite. All calculations are mathematical models for estimation and planning purposes only.
          </p>
          <p className="text-[11px] text-slate-600">
            Compliant with Google AdSense Publisher Policies & IRS Publication Standards.
          </p>
        </div>

      </div>
    </footer>
  );
}