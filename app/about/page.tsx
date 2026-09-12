import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Us & Calculation Methodology | Freelance Tax Suite",
  description: "Learn about the mission, editorial standards, and exact mathematical and IRS tax formulas powering the Freelance Tax & Hourly Rate Calculator Suite.",
  alternates: {
    canonical: "https://www.freelancecalcsuite.online/about",
  },
};

export default function AboutPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: "About Us & Calculation Methodology",
    url: "https://www.freelancecalcsuite.online/about",
    description: "Mission, mathematical calculation methodology, and editorial standards of Freelance Tax Suite.",
    mainEntity: {
      "@type": "Person",
      name: "Dhruvil Patel",
      jobTitle: "Founder & Lead Software Engineer",
      worksFor: {
        "@type": "Organization",
        name: "Freelance Tax Suite",
        url: "https://www.freelancecalcsuite.online",
      },
    },
  };

  return (
    <div className="min-h-screen px-4 py-12 sm:px-6">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="mx-auto max-w-4xl space-y-12">
        
        {/* Header */}
        <div className="border-b border-white/10 pb-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3.5 py-1 text-xs font-semibold text-cyan-300">
            <span>Transparency & Standards</span>
          </div>
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            About Us & Calculation Methodology
          </h1>
          <p className="mt-3 text-base text-slate-300 leading-relaxed">
            Freelance Tax Suite is an independent financial modeling platform engineered to eliminate pricing guesswork and tax surprises for freelancers, contractors, and solo entrepreneurs.
          </p>
        </div>

        {/* Mission Section */}
        <section className="space-y-4">
          <h2 className="text-xl font-bold text-white sm:text-2xl">Our Mission</h2>
          <p className="text-slate-300 leading-relaxed">
            The independent workforce is one of the fastest-growing segments of the global economy. Yet, most financial software is designed for traditional corporate employees or complex multi-employee enterprises. Solo professionals are frequently left navigating convoluted IRS tax instructions, opaque self-employment payroll requirements, and simplistic hourly rate rules of thumb that leave them undercharging by 30% or more.
          </p>
          <p className="text-slate-300 leading-relaxed">
            Our mission is to provide <strong>100% free, mathematically rigorous, privacy-respecting financial tools</strong> that empower independent workers to price their services with authority, forecast their true tax obligations, and build sustainable solo careers.
          </p>
        </section>

        {/* Mathematical & IRS Tax Methodology */}
        <section className="rounded-3xl border border-white/10 bg-slate-900/80 p-6 sm:p-8 space-y-6">
          <div className="border-b border-white/10 pb-4">
            <h2 className="text-xl font-bold text-white sm:text-2xl">Calculation Methodology & Tax Engine</h2>
            <p className="mt-1 text-xs text-slate-400">
              How our calculator computes self-employment taxes, federal brackets, QBI deductions, and required hourly rates.
            </p>
          </div>

          <div className="space-y-6 text-xs sm:text-sm text-slate-300">
            
            {/* Step 1: Net Profit */}
            <div>
              <h3 className="text-base font-bold text-cyan-300">1. Net Business Profit (Schedule C, Line 31)</h3>
              <p className="mt-1 leading-relaxed text-slate-400">
                Formula: <code className="text-cyan-200">Net Profit = Gross Revenue − Deductible Business Overhead</code>
              </p>
              <p className="mt-1 leading-relaxed">
                Taxes are never calculated on gross revenue. All legitimate overhead entered into the calculator (software, equipment, home office, insurance) is deducted first.
              </p>
            </div>

            {/* Step 2: SECA */}
            <div>
              <h3 className="text-base font-bold text-cyan-300">2. Self-Employment Tax (IRC §1401 & SECA)</h3>
              <p className="mt-1 leading-relaxed text-slate-400">
                Formula: <code className="text-cyan-200">Taxable SE Base = Net Profit &times; 0.9235</code>
              </p>
              <p className="mt-1 leading-relaxed">
                Per IRS Schedule SE, you only pay self-employment tax on 92.35% of your net profit.
              </p>
              <ul className="mt-2 space-y-1 text-xs text-slate-400 list-disc pl-5">
                <li><strong>Social Security Tax:</strong> 12.4% on taxable base up to the statutory 2025–2026 wage limit of <strong>$176,100</strong>.</li>
                <li><strong>Medicare Tax:</strong> 2.9% on all taxable base earnings with no upper dollar limit.</li>
                <li><strong>Additional Medicare Tax:</strong> 0.9% on self-employment earnings exceeding $200,000 (Single) or $250,000 (Married Filing Jointly).</li>
              </ul>
            </div>

            {/* Step 3: Federal Income Tax */}
            <div>
              <h3 className="text-base font-bold text-cyan-300">3. Federal Income Tax & Deductions</h3>
              <p className="mt-1 leading-relaxed">
                Before applying progressive federal income tax brackets, the engine applies statutory adjustments:
              </p>
              <ul className="mt-2 space-y-1 text-xs text-slate-400 list-disc pl-5">
                <li><strong>Deductible Half of SE Tax (IRC §164(f)):</strong> 50% of your total self-employment tax is subtracted above-the-line from gross income.</li>
                <li><strong>Standard Deduction (2025–2026):</strong> $15,000 for single filers; $30,000 for married couples filing jointly.</li>
                <li><strong>Section 199A QBI Deduction:</strong> Up to a 20% deduction on qualified business net income for eligible pass-through entities.</li>
                <li><strong>Progressive Brackets:</strong> Taxable federal income is processed through graduated marginal tiers (10%, 12%, 22%, 24%, 32%, 35%, 37%).</li>
              </ul>
            </div>

            {/* Step 4: Hourly Rate Solver */}
            <div>
              <h3 className="text-base font-bold text-cyan-300">4. Target Hourly Rate Iterative Solver</h3>
              <p className="mt-1 leading-relaxed">
                Unlike primitive calculators that use flat percentage guesses, our rate engine uses a binary search iterative convergence algorithm. It precisely gross-ups your desired net take-home salary, adding exact progressive tax liabilities and deductible overhead, and divides by your available billable capacity (<code className="text-cyan-200">Billable Hours/Wk &times; Annual Work Weeks</code>) to determine your true minimum hourly floor rate.
              </p>
            </div>

          </div>
        </section>

        {/* Editorial Standards & Sources */}
        <section className="space-y-4">
          <h2 className="text-xl font-bold text-white sm:text-2xl">Editorial Standards & IRS Sources</h2>
          <p className="text-slate-300 leading-relaxed">
            All educational content, tax bracket constants, and deduction thresholds published on Freelance Tax Suite are reviewed against official documentation published by the Internal Revenue Service (IRS) and the US Department of the Treasury, including:
          </p>
          <ul className="space-y-1.5 text-xs sm:text-sm text-slate-400 list-disc pl-5">
            <li><strong>IRS Publication 505:</strong> Tax Withholding and Estimated Tax</li>
            <li><strong>IRS Publication 535:</strong> Business Expenses</li>
            <li><strong>IRS Publication 334:</strong> Tax Guide for Small Business</li>
            <li><strong>Internal Revenue Code (IRC):</strong> Sections 162, 164, 199A, 1401, 1402, and 6654</li>
            <li><strong>California Franchise Tax Board (FTB):</strong> Publication 1060 & Form 540 Instructions</li>
            <li><strong>Texas Comptroller of Public Accounts:</strong> Franchise Tax Guidelines</li>
          </ul>
        </section>

        {/* Author & Founder E-E-A-T Section */}
        <section className="rounded-3xl border border-cyan-500/20 bg-gradient-to-b from-slate-900 to-slate-950 p-6 sm:p-8 space-y-6">
          <div className="border-b border-white/10 pb-4">
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-0.5 text-xs font-semibold text-cyan-300">
              <span>Editorial Leadership &amp; Authorship</span>
            </div>
            <h2 className="mt-3 text-xl font-bold tracking-tight text-white sm:text-2xl">
              Meet the Creator &amp; Financial Modeling Team
            </h2>
            <p className="mt-1 text-xs text-slate-400">
              Transparent authorship and continuous research backing every formula and article on Freelance Tax Suite.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-start gap-6">
            <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-400 to-blue-600 text-2xl font-black text-slate-950 shadow-lg shadow-cyan-500/20">
              DP
            </div>
            <div className="space-y-3">
              <div>
                <h3 className="text-lg font-bold text-white">Dhruvil Patel</h3>
                <p className="text-xs font-medium text-cyan-300">
                  Founder, Lead Software Engineer &amp; Financial Modeling Specialist
                </p>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Dhruvil is a full-stack engineer and independent contractor who built Freelance Tax Suite after experiencing first-hand the lack of accurate, privacy-first tax modeling software for solo professionals. Combining modern algorithmic iterative solvers with direct IRS statutory rules (IRC §1401, §199A, §164), he created this platform to give freelancers mathematical clarity and confidence when quoting client rates and forecasting quarterly taxes.
              </p>
              <div className="flex flex-wrap items-center gap-4 text-xs text-slate-400 pt-1">
                <span>📍 Remote / Global</span>
                <span>•</span>
                <span>✉️ support@freelancecalcsuite.online</span>
                <span>•</span>
                <span className="text-emerald-400">✓ Actively maintained for 2025–2026 tax provisions</span>
              </div>
            </div>
          </div>
        </section>

        {/* Privacy Commitment */}
        <section className="rounded-3xl border border-white/10 bg-slate-900/60 p-6 sm:p-8 space-y-3">
          <h2 className="text-lg font-bold text-white">Client-Side Privacy Architecture</h2>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            We believe your financial data belongs to you. All slider inputs, revenue figures, and calculation metrics are processed 100% locally in your web browser using client-side JavaScript. We do not store, log, or transmit your individual calculations to backend servers.
          </p>
        </section>

        {/* Back Link */}
        <div className="border-t border-white/10 pt-6 flex justify-between items-center text-xs">
          <Link href="/" className="text-cyan-400 hover:text-cyan-300 font-semibold">&larr; Return to Calculator Suite</Link>
          <Link href="/contact" className="text-slate-400 hover:text-white font-semibold">Have questions? Contact our team &rarr;</Link>
        </div>

      </div>
    </div>
  );
}
