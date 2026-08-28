import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Freelance Tax & Financial Guides | Expert Insights for 1099 Contractors",
  description: "Comprehensive, in-depth financial guides covering freelance quarterly estimated taxes, Schedule C deductions, 1099 vs W2 rate modeling, and self-employment tax strategies.",
  alternates: {
    canonical: "https://www.freelancecalcsuite.online/guides",
  },
  openGraph: {
    title: "Freelance Tax & Financial Guides",
    description: "Expert tax planning and pricing strategy guides for US freelancers, contractors, and consultants.",
    url: "https://www.freelancecalcsuite.online/guides",
    type: "website",
  },
};

export default function GuidesPage() {
  const guides = [
    {
      slug: "quarterly-estimated-taxes",
      title: "The Complete Guide to Quarterly Estimated Taxes (IRS Form 1040-ES)",
      description: "Master the 4 annual IRS payment deadlines, safe harbor rules to avoid underpayment penalties, and step-by-step payment methods via IRS Direct Pay.",
      category: "Tax Compliance",
      readTime: "9 min read",
      badgeColor: "bg-cyan-400/10 text-cyan-300 border-cyan-400/20",
    },
    {
      slug: "freelance-tax-deductions",
      title: "The Ultimate Schedule C Tax Deductions Checklist for Freelancers",
      description: "Discover every legitimate tax write-off: home office deductions, Section 179 hardware expensing, self-employed health insurance, and retirement plans.",
      category: "Tax Deductions",
      readTime: "12 min read",
      badgeColor: "bg-emerald-400/10 text-emerald-300 border-emerald-400/20",
    },
    {
      slug: "1099-vs-w2-tax-difference",
      title: "1099 Contractor vs W-2 Employee: Tax Rates & True Rate Multiplier",
      description: "Understand the financial gap between employee salary and contractor revenue, factoring in SECA 15.3%, health coverage, PTO, and overhead gross-up.",
      category: "Pricing & Strategy",
      readTime: "10 min read",
      badgeColor: "bg-violet-400/10 text-violet-300 border-violet-400/20",
    },
    {
      slug: "self-employed-retirement-plans",
      title: "Self-Employed Retirement Plans: SEP-IRA, Solo 401(k) & SIMPLE IRA",
      description: "Compare contribution limits, tax deductions, and setup requirements for the three major self-employed retirement vehicles for 1099 contractors in 2025–2026.",
      category: "Retirement Planning",
      readTime: "10 min read",
      badgeColor: "bg-blue-400/10 text-blue-300 border-blue-400/20",
    },
    {
      slug: "home-office-deduction-rules",
      title: "Home Office Deduction Rules for Freelancers (IRC §280A Complete Guide)",
      description: "The IRS regular and exclusive use test explained, simplified vs actual expense method compared with a worked example, and how to file on Form 8829.",
      category: "Tax Deductions",
      readTime: "9 min read",
      badgeColor: "bg-emerald-400/10 text-emerald-300 border-emerald-400/20",
    },
    {
      slug: "freelance-health-insurance-deduction",
      title: "Self-Employed Health Insurance Deduction: The Complete Freelancer Guide",
      description: "How to deduct 100% of health, dental, and vision premiums above-the-line on Form 1040 — eligibility rules, ACA marketplace interaction, and worked tax savings example.",
      category: "Tax Deductions",
      readTime: "9 min read",
      badgeColor: "bg-emerald-400/10 text-emerald-300 border-emerald-400/20",
    },
    {
      slug: "california-state-taxes-freelancers",
      title: "California Freelance Taxes: FTB, SDI & AB5 Guide (2025–2026)",
      description: "FTB estimated tax deadlines, California income tax brackets up to 13.3%, SDI obligations, and the AB5 independent contractor test for CA freelancers.",
      category: "State Taxes",
      readTime: "11 min read",
      badgeColor: "bg-amber-400/10 text-amber-300 border-amber-400/20",
    },
    {
      slug: "s-corp-election-freelancers",
      title: "S-Corp Election for Freelancers: When It Saves You Money on SE Tax",
      description: "The salary vs distribution split strategy, the income threshold where S-Corp savings justify admin costs, and the Form 2553 election deadline explained.",
      category: "Business Structure",
      readTime: "11 min read",
      badgeColor: "bg-rose-400/10 text-rose-300 border-rose-400/20",
    },
  ];

  return (
    <div className="min-h-screen px-4 py-12 sm:px-6">
      <div className="mx-auto max-w-5xl">
        
        {/* Header */}
        <div className="border-b border-white/10 pb-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3.5 py-1 text-xs font-semibold text-cyan-300">
            <span>Knowledge Hub</span>
          </div>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Freelance Tax & Financial Guides
          </h1>
          <p className="mt-3 text-base text-slate-300 max-w-3xl leading-relaxed">
            In-depth, actionable financial resources designed to help independent contractors, consultants, and solo practitioners navigate IRS regulations, maximize tax savings, and build profitable businesses.
          </p>
        </div>

        {/* Guides Grid */}
        <div className="mt-10 grid grid-cols-1 gap-8">
          {guides.map((guide) => (
            <article
              key={guide.slug}
              className="group relative flex flex-col justify-between rounded-3xl border border-white/10 bg-slate-900/70 p-6 sm:p-8 hover:border-cyan-400/50 hover:bg-slate-900 transition-all backdrop-blur-sm"
            >
              <div>
                <div className="flex items-center gap-3">
                  <span className={`rounded-full border px-3 py-0.5 text-xs font-semibold ${guide.badgeColor}`}>
                    {guide.category}
                  </span>
                  <span className="text-xs text-slate-400">{guide.readTime}</span>
                </div>
                <h2 className="mt-4 text-xl font-bold text-white group-hover:text-cyan-300 transition-colors sm:text-2xl">
                  <Link href={`/guides/${guide.slug}`}>
                    <span className="absolute inset-0" />
                    {guide.title}
                  </Link>
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-slate-300">
                  {guide.description}
                </p>
              </div>

              <div className="mt-6 flex items-center gap-2 text-xs font-semibold text-cyan-400">
                <span>Read complete guide</span>
                <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
              </div>
            </article>
          ))}
        </div>

        {/* Explore Calculators Banner */}
        <div className="mt-16 rounded-3xl border border-white/10 bg-gradient-to-r from-cyan-950/40 via-slate-900 to-blue-950/40 p-8 sm:p-10 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-xl font-bold text-white">Need to calculate your specific tax numbers?</h3>
            <p className="mt-1 text-xs text-slate-300">
              Use our interactive calculators to model take-home pay, federal & state taxes, and required hourly rates.
            </p>
          </div>
          <Link
            href="/"
            className="shrink-0 rounded-2xl bg-cyan-400 px-6 py-3 text-xs font-bold text-slate-950 shadow-lg hover:bg-cyan-300 transition-colors"
          >
            Launch Calculator &rarr;
          </Link>
        </div>

      </div>
    </div>
  );
}
