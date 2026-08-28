import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Self-Employed Health Insurance Deduction: The Complete Freelancer Guide (2025–2026)",
  description: "How freelancers and 1099 contractors can deduct 100% of health, dental, and vision insurance premiums on Form 1040 — eligibility rules, limitations, and impact on AGI.",
  alternates: {
    canonical: "https://www.freelancecalcsuite.online/guides/freelance-health-insurance-deduction",
  },
};

export default function FreelanceHealthInsuranceGuidePage() {
  const articleLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Self-Employed Health Insurance Deduction: The Complete Freelancer Guide",
    description: "In-depth guide to deducting 100% of medical, dental, and vision health insurance premiums above-the-line on Form 1040 Schedule 1 for self-employed professionals.",
    author: {
      "@type": "Organization",
      name: "Freelance Tax Suite Editorial Team",
    },
    publisher: {
      "@type": "Organization",
      name: "Freelance Tax Suite",
    },
    datePublished: "2024-06-01T08:00:00+00:00",
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
        name: "Health Insurance Deduction",
        item: "https://www.freelancecalcsuite.online/guides/freelance-health-insurance-deduction",
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
          <Link href="/" className="hover:text-cyan-300 transition-colors">
            Home
          </Link>
          <span>/</span>
          <Link href="/guides" className="hover:text-cyan-300 transition-colors">
            Guides
          </Link>
          <span>/</span>
          <span className="text-slate-200">Health Insurance Deduction</span>
        </nav>

        {/* Hero Title */}
        <header className="border-b border-white/10 pb-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3.5 py-1 text-xs font-semibold text-emerald-300">
            <span>Healthcare &amp; Tax Deductions</span>
          </div>
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Self-Employed Health Insurance Deduction: 100% Write-Off Guide (2025–2026)
          </h1>
          <div className="mt-4 flex items-center gap-4 text-xs text-slate-400">
            <span>By Freelance Tax Suite Editorial Team</span>
            <span>&bull;</span>
            <span>IRS IRC §162(l) &amp; Form 1040 Schedule 1</span>
            <span>&bull;</span>
            <span>9 min read</span>
          </div>
        </header>

        {/* Content Body */}
        <div className="mt-10 space-y-10 text-slate-300 leading-relaxed text-sm sm:text-base">
          <section className="space-y-4">
            <h2 className="text-xl font-bold text-white sm:text-2xl">
              Tackling Healthcare Costs as an Independent Professional
            </h2>
            <p>
              When leaving a corporate W-2 position to start freelancing, the cost of health insurance is often one of the most substantial monthly overhead expenses. The average unsubsidized individual health plan on state or federal ACA Marketplaces ranges between <strong>$450 and $700 per month</strong> ($5,400 to $8,400 annually), with family plans easily surpassing $1,500 monthly.
            </p>
            <p>
              Fortunately, <strong>Internal Revenue Code (IRC) Section 162(l)</strong> provides a specialized tax benefit known as the <strong>Self-Employed Health Insurance Deduction</strong>. This allows qualifying freelancers, contractors, partners, and S-Corp shareholders to deduct up to <strong>100% of their medical, dental, and qualifying long-term care insurance premiums</strong> directly from their taxable gross income.
            </p>
          </section>

          {/* Section 1: Above-the-Line Mechanics */}
          <section className="rounded-3xl border border-white/10 bg-slate-900/80 p-6 sm:p-8 space-y-4">
            <h3 className="text-lg font-bold text-cyan-300">Why an &ldquo;Above-the-Line&rdquo; Deduction Is So Valuable</h3>
            <p className="text-xs sm:text-sm text-slate-300">
              Unlike typical medical expense deductions—which require itemizing on Schedule A and only provide tax savings if medical costs exceed 7.5% of your Adjusted Gross Income (AGI)—the Self-Employed Health Insurance Deduction is claimed on <strong>IRS Form 1040 Schedule 1, Line 17</strong> as an <strong>above-the-line adjustment</strong>.
            </p>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 pt-2 text-xs">
              <div className="rounded-2xl border border-white/10 bg-slate-950/60 p-4 space-y-2">
                <span className="font-bold text-white block">You Still Get the Standard Deduction</span>
                <p className="text-slate-400">
                  Because this is an adjustment to gross income, you can claim 100% of your insurance premiums AND still take the full Standard Deduction ($15,000 Single / $30,000 Married Jointly in 2025–2026).
                </p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-slate-950/60 p-4 space-y-2">
                <span className="font-bold text-white block">Lowers Your Base AGI</span>
                <p className="text-slate-400">
                  Lowering your AGI can increase your eligibility for other income-sensitive tax credits, student loan interest deductions, and child tax credits.
                </p>
              </div>
            </div>
          </section>

          {/* Section 2: Eligibility Rules */}
          <section className="space-y-4">
            <h2 className="text-xl font-bold text-white sm:text-2xl">
              The 2 Essential Eligibility Rules (IRC §162(l))
            </h2>
            <div className="space-y-4">
              <div className="rounded-2xl border border-emerald-500/20 bg-slate-900/80 p-5 space-y-2">
                <span className="text-sm font-bold text-emerald-300">Rule 1: Net Profit Requirement</span>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  The health insurance deduction is capped at the <strong>net profit generated by your self-employment business</strong>. If your Schedule C net profit is $6,000 and your annual health insurance premiums are $8,000, your maximum deduction for the year is limited to $6,000 (the remaining $2,000 may only be claimed on Schedule A if itemizing).
                </p>
              </div>

              <div className="rounded-2xl border border-amber-500/20 bg-slate-900/80 p-5 space-y-2">
                <span className="text-sm font-bold text-amber-300">Rule 2: The Employer Subsidized Plan Disqualification</span>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  You cannot claim this deduction for any calendar month in which you (or your spouse) were <strong>eligible to participate in an employer-sponsored subsidized health plan</strong>. Even if you chose not to enroll in your spouse&apos;s company health insurance because the monthly contribution was high, mere eligibility disqualifies you from claiming the deduction for those months.
                </p>
              </div>
            </div>
          </section>

          {/* Section 3: What Qualifies */}
          <section className="rounded-3xl border border-white/10 bg-slate-900/80 p-6 sm:p-8 space-y-4">
            <h3 className="text-lg font-bold text-white">What Premiums Can Be Deducted?</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              <div className="space-y-2">
                <strong className="text-emerald-400 block">✓ Fully Deductible Premiums:</strong>
                <ul className="space-y-1 text-slate-300 list-disc pl-4">
                  <li>Comprehensive medical insurance plans (ACA Marketplace or private off-exchange)</li>
                  <li>Dental and orthodontia insurance policies</li>
                  <li>Vision care insurance</li>
                  <li>Medicare Part B and Part D premiums for self-employed seniors</li>
                  <li>Coverage for your spouse, tax dependents, and children under age 27</li>
                </ul>
              </div>
              <div className="space-y-2">
                <strong className="text-rose-400 block">✗ Ineligible Expenses:</strong>
                <ul className="space-y-1 text-slate-300 list-disc pl-4">
                  <li>Life insurance premiums</li>
                  <li>Disability income insurance premiums</li>
                  <li>Premiums paid with pre-tax dollars (e.g. from an HSA distribution)</li>
                  <li>Portion of ACA Marketplace premiums covered by Advance Premium Tax Credits (APTC subsidies)</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Section 4: Worked Example */}
          <section className="rounded-3xl border border-cyan-500/20 bg-gradient-to-b from-slate-900 to-slate-950 p-6 sm:p-8 space-y-4">
            <h3 className="text-lg font-bold text-cyan-300">Worked Tax Calculation: Single Freelance Copywriter</h3>
            <p className="text-xs sm:text-sm text-slate-300">
              A copywriter generates <strong>$95,000 in net Schedule C profit</strong> and pays <strong>$550/month ($6,600/year)</strong> in qualified ACA health and dental insurance premiums:
            </p>
            <div className="rounded-2xl bg-slate-950/80 p-5 font-mono text-xs space-y-2 text-slate-300 border border-white/10">
              <p className="text-cyan-300 font-bold">Tax Breakdown Without Deduction:</p>
              <p>• Net Schedule C Profit: $95,000</p>
              <p>• Deductible Half SE Tax (IRC §164(f)): -$6,712</p>
              <p>• Standard Deduction (2025–2026): -$15,000</p>
              <p>• Taxable Federal Income: $73,288</p>
              <p>• Federal Income Tax (22% marginal tier): ~$10,810</p>
              <div className="my-3 border-t border-white/10" />
              <p className="text-emerald-300 font-bold">Tax Breakdown With Section 162(l) Deduction:</p>
              <p>• Health Insurance Adjustment (Schedule 1, Line 17): -$6,600</p>
              <p>• Adjusted Taxable Federal Income: $66,688</p>
              <p>• Federal Income Tax: ~$9,358</p>
              <p className="text-emerald-400 font-bold mt-2">Net Cash Tax Savings: $1,452 in Federal Tax + State Tax Savings (e.g. ~$400+ in CA/NY)</p>
            </div>
          </section>

          {/* Bottom Action */}
          <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <p className="font-bold text-white text-base">Calculate your freelance tax liabilities</p>
              <p className="text-xs text-slate-400">Estimate your progressive income tax tiers and hourly rate with precision.</p>
            </div>
            <Link
              href="/"
              className="rounded-xl bg-cyan-400 px-5 py-2.5 text-xs font-bold text-slate-950 hover:bg-cyan-300 transition-colors"
            >
              Open Tax Calculator &rarr;
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
