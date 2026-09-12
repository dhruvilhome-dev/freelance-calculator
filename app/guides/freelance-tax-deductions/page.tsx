import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "The Ultimate Freelance Tax Deductions Checklist: Schedule C Write-Offs",
  description: "Maximize your freelance tax write-offs: complete Schedule C guide covering home office rules, Section 179 equipment expensing, health insurance, and travel.",
  alternates: {
    canonical: "https://www.freelancecalcsuite.online/guides/freelance-tax-deductions",
  },
};

export default function TaxDeductionsGuidePage() {
  const articleLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "The Ultimate Freelance Tax Deductions Checklist: Schedule C Write-Offs",
    description: "In-depth guide to maximizing tax deductions and reducing net taxable profit on IRS Form 1040 Schedule C for freelancers and 1099 contractors.",
    author: {
      "@type": "Person",
      name: "Dhruvil Patel",
      jobTitle: "Founder & Lead Financial Modeling Engineer",
      url: "https://www.freelancecalcsuite.online/about",
    },
    publisher: {
      "@type": "Organization",
      name: "Freelance Tax Suite",
    },
    datePublished: "2024-02-10T08:00:00+00:00",
    dateModified: "2026-01-15T08:00:00+00:00",
  };

  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://www.freelancecalcsuite.online",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Guides",
        item: "https://www.freelancecalcsuite.online/guides",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Schedule C Tax Deductions Checklist",
        item: "https://www.freelancecalcsuite.online/guides/freelance-tax-deductions",
      },
    ],
  };

  return (
    <div className="min-h-screen px-4 py-12 sm:px-6">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />
      <div className="mx-auto max-w-4xl">
        
        {/* Navigation Breadcrumb */}
        <nav className="mb-8 flex items-center gap-2 text-xs font-semibold text-slate-400">
          <Link href="/" className="hover:text-cyan-300 transition-colors">Home</Link>
          <span>/</span>
          <Link href="/guides" className="hover:text-cyan-300 transition-colors">Guides</Link>
          <span>/</span>
          <span className="text-slate-200">Tax Deductions Checklist</span>
        </nav>

        {/* Hero Title */}
        <header className="border-b border-white/10 pb-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3.5 py-1 text-xs font-semibold text-emerald-300">
            <span>Tax Optimization & Write-Offs</span>
          </div>
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            The Ultimate Schedule C Tax Deductions Checklist for Freelancers
          </h1>
          <div className="mt-4 flex items-center gap-4 text-xs text-slate-400">
            <span className="text-slate-300 font-medium">By Dhruvil Patel</span>
            <span>&bull;</span>
            <span>Reviewed by Tax Suite Editorial</span>
            <span>&bull;</span>
            <span>IRS IRC §162 Compliance</span>
            <span>&bull;</span>
            <span>12 min read</span>
          </div>
        </header>

        {/* Content Body */}
        <div className="mt-10 space-y-10 text-slate-300 leading-relaxed text-sm sm:text-base">
          
          <section className="space-y-4">
            <h2 className="text-xl font-bold text-white sm:text-2xl">What Counts as a Deductible Business Expense?</h2>
            <p>
              Under <strong>Internal Revenue Code (IRC) Section 162</strong>, self-employed individuals and independent contractors can deduct any business expense that is both <strong>&ldquo;ordinary&rdquo;</strong> (common and accepted in your trade or industry) and <strong>&ldquo;necessary&rdquo;</strong> (helpful and appropriate for your business).
            </p>
            <p>
              Every dollar you deduct reduces your <strong>Net Profit</strong> on IRS Schedule C. Because your 15.3% Self-Employment Tax (SECA) and your progressive Federal Income Tax are calculated exclusively on your net profit, a $1,000 legitimate tax deduction can save an average freelancer between <strong>$250 and $450 in direct tax payments</strong>.
            </p>
          </section>

          {/* Deductions Deep-Dive */}
          <section className="space-y-6">
            <h2 className="text-xl font-bold text-white sm:text-2xl">Comprehensive Deduction Categories</h2>

            {/* 1. Home Office */}
            <div className="rounded-3xl border border-white/10 bg-slate-900/80 p-6 sm:p-8 space-y-3">
              <h3 className="text-lg font-bold text-cyan-300">1. Home Office Deduction (IRC §280A)</h3>
              <p className="text-xs sm:text-sm text-slate-300">
                To qualify, your workspace must be used <strong>exclusively and regularly</strong> as your principal place of business. There are two calculation methods:
              </p>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 pt-2">
                <div className="rounded-2xl border border-white/10 bg-slate-950/60 p-4">
                  <span className="font-bold text-white text-xs block">Simplified Option</span>
                  <p className="mt-1 text-xs text-slate-400">
                    Deduct a flat $5 per square foot of dedicated office space, up to a maximum of 300 square feet ($1,500 max annual deduction). Requires minimal recordkeeping.
                  </p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-slate-950/60 p-4">
                  <span className="font-bold text-white text-xs block">Actual Expense Option</span>
                  <p className="mt-1 text-xs text-slate-400">
                    Calculate your office square footage as a percentage of total home area. Deduct that exact percentage of rent, mortgage interest, property taxes, homeowners insurance, electricity, heating, and home repairs.
                  </p>
                </div>
              </div>
            </div>

            {/* 2. Hardware & Tech */}
            <div className="rounded-3xl border border-white/10 bg-slate-900/80 p-6 sm:p-8 space-y-3">
              <h3 className="text-lg font-bold text-cyan-300">2. Technology, Computers & Section 179 Expensing</h3>
              <p className="text-xs sm:text-sm text-slate-300">
                Laptops, desktop workstations, secondary 4K monitors, external backup SSDs, iPads, cameras, microphones, and office furniture (standing desks, ergonomic Herman Miller chairs) can be 100% written off in the year of purchase rather than depreciated over 5 to 7 years using the <strong>Section 179 election</strong> or the <strong>De Minimis Safe Harbor</strong> (for tangible property under $2,500 per invoice).
              </p>
            </div>

            {/* 3. Software & SaaS */}
            <div className="rounded-3xl border border-white/10 bg-slate-900/80 p-6 sm:p-8 space-y-3">
              <h3 className="text-lg font-bold text-cyan-300">3. Software, Cloud Subscriptions & Web Hosting</h3>
              <p className="text-xs sm:text-sm text-slate-300">
                100% of your recurring SaaS subscriptions used for business operations are fully deductible:
              </p>
              <ul className="grid grid-cols-2 gap-2 text-xs text-slate-400 pt-2">
                <li>&bull; Adobe Creative Cloud / Figma</li>
                <li>&bull; GitHub / Vercel / AWS Hosting</li>
                <li>&bull; QuickBooks / Xero Accounting</li>
                <li>&bull; Notion / Slack / Zoom Pro</li>
                <li>&bull; Google Workspace / Office 365</li>
                <li>&bull; ChatGPT Plus / AI Coding Assistants</li>
              </ul>
            </div>

            {/* 4. Health Insurance */}
            <div className="rounded-3xl border border-white/10 bg-slate-900/80 p-6 sm:p-8 space-y-3">
              <h3 className="text-lg font-bold text-cyan-300">4. Self-Employed Health Insurance Deduction (Form 1040 Schedule 1)</h3>
              <p className="text-xs sm:text-sm text-slate-300">
                If you are self-employed with net business profit and neither you nor your spouse was eligible to participate in an employer-subsidized health plan, you can deduct <strong>100% of your medical, dental, and qualified long-term care insurance premiums</strong> for yourself, your spouse, and your dependents. This is an &ldquo;above-the-line&rdquo; adjustment to income that lowers your Adjusted Gross Income (AGI).
              </p>
            </div>

            {/* 5. Business Mileage */}
            <div className="rounded-3xl border border-white/10 bg-slate-900/80 p-6 sm:p-8 space-y-3">
              <h3 className="text-lg font-bold text-cyan-300">5. Vehicle & Business Mileage</h3>
              <p className="text-xs sm:text-sm text-slate-300">
                Driving to meet clients, travel between client project sites, purchase equipment, or visit the post office for business is deductible. For 2025–2026, the IRS standard mileage rate is <strong>70 cents per mile</strong>. Maintain an automatic GPS mileage log (using apps like MileIQ) detailing date, destination, business purpose, and total miles.
              </p>
            </div>

            {/* 6. Retirement Accounts */}
            <div className="rounded-3xl border border-white/10 bg-slate-900/80 p-6 sm:p-8 space-y-3">
              <h3 className="text-lg font-bold text-cyan-300">6. Solo 401(k) & SEP IRA Contributions</h3>
              <p className="text-xs sm:text-sm text-slate-300">
                Self-employed retirement accounts offer the highest tax shelter available to independent workers:
              </p>
              <ul className="space-y-2 text-xs text-slate-300 pt-2">
                <li>&bull; <strong>Solo 401(k):</strong> Contribute up to $23,500 as employee elective deferral PLUS up to 20% of net self-employment earnings as employer profit sharing, up to a $70,000 limit in 2025–2026.</li>
                <li>&bull; <strong>SEP IRA:</strong> Contribute up to 20% of net self-employment income (capped at $70,000). Highly flexible with no annual filing requirements until account values exceed $250,000.</li>
              </ul>
            </div>

          </section>

          {/* Recordkeeping Tips */}
          <section className="rounded-3xl border border-amber-500/20 bg-amber-950/20 p-6 sm:p-8 space-y-3">
            <h2 className="text-xl font-bold text-amber-300">IRS Audit Defense & Recordkeeping Rules</h2>
            <p className="text-xs sm:text-sm text-slate-300">
              The IRS requires you to keep supporting documentary evidence (digital receipts, bank statements, client invoices, credit card slips, mileage logs) for at least <strong>3 years</strong> from the date you filed your tax return.
            </p>
            <p className="text-xs text-slate-400">
              <strong>Pro Tip:</strong> Never mix business and personal finances. Open a dedicated business checking account and credit card exclusively for all freelance revenue and deductible expenses.
            </p>
          </section>

          {/* Bottom Callout */}
          <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <p className="font-bold text-white text-base">Model your deductible expenses now</p>
              <p className="text-xs text-slate-400">See how tracking expenses lowers your total self-employment tax bill.</p>
            </div>
            <Link
              href="/"
              className="rounded-xl bg-cyan-400 px-5 py-2.5 text-xs font-bold text-slate-950 hover:bg-cyan-300 transition-colors"
            >
              Test Expenses in Calculator &rarr;
            </Link>
          </div>

        </div>

      </div>
    </div>
  );
}
