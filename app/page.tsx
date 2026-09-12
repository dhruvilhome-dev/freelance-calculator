import type { Metadata } from "next";
import Link from "next/link";
import TaxCalculatorSuite from "../components/calculators/TaxCalculatorSuite";
import AdBreakDivider from "../components/monetization/AdBreakDivider";
import SidebarAdSlot from "../components/monetization/SidebarAdSlot";

export const metadata: Metadata = {
  title: "Freelance Tax & Hourly Rate Calculator Suite | Free 1099 Tax Estimator",
  description: "Calculate your 2025–2026 self-employment taxes, federal & state tax liabilities, minimum billable hourly rate, and project profit margins in one interactive suite.",
  alternates: {
    canonical: "https://www.freelancecalcsuite.online",
  },
};

export default function Home() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How much should a freelancer set aside for taxes in the US?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "As a rule of thumb, US freelancers should set aside 25% to 35% of their net freelance income for taxes. This covers the 15.3% Self-Employment Tax (Social Security and Medicare), federal income tax brackets, and any applicable state or local income taxes."
        }
      },
      {
        "@type": "Question",
        "name": "What is the self-employment tax rate (SECA) for 2025–2026?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The self-employment tax rate is 15.3%, consisting of 12.4% for Social Security (applied up to the $176,100 wage base limit in 2025–2026) and 2.9% for Medicare (with no wage cap). Net earnings are multiplied by 92.35% before applying this tax, and you can deduct 50% of your self-employment tax from your gross income for federal income tax purposes."
        }
      },
      {
        "@type": "Question",
        "name": "How is the minimum freelance hourly rate calculated?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The minimum hourly rate is calculated by grossing up your desired annual take-home pay to account for estimated self-employment and income taxes, plus deductible annual business overhead, and dividing that total required gross revenue by your actual annual billable hours (billable hours per week multiplied by weeks worked)."
        }
      },
      {
        "@type": "Question",
        "name": "How does the Section 199A Qualified Business Income (QBI) deduction work?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The QBI deduction allows eligible pass-through entities and sole proprietors to deduct up to 20% of their qualified business net income from their taxable income, reducing the overall federal income tax burden for qualifying freelancers."
        }
      },
      {
        "@type": "Question",
        "name": "When are quarterly estimated taxes due for freelancers?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "IRS Form 1040-ES quarterly estimated taxes are typically due on April 15 (Q1), June 15 (Q2), September 15 (Q3), and January 15 of the following year (Q4). If a due date falls on a weekend or legal holiday, the deadline moves to the next business day."
        }
      }
    ]
  };

  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Freelance Tax & Hourly Rate Calculator Suite",
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "All",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "author": {
      "@type": "Person",
      "name": "Dhruvil Patel",
      "jobTitle": "Founder & Lead Software Engineer"
    },
    "description": "Comprehensive financial modeling suite for 1099 contractors, solo professionals, and freelancers to estimate tax exposure, calculate hourly rates, and check project margins."
  };

  return (
    <div className="min-h-screen px-4 py-8 sm:px-6 sm:py-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
      />

      {/* Main Interactive Tool Section */}
      <div className="mx-auto flex w-full max-w-[1440px] flex-col gap-8 xl:flex-row xl:items-start">
        <div className="flex-1">
          <TaxCalculatorSuite />
          <AdBreakDivider />
        </div>
        <aside className="hidden shrink-0 xl:block">
          <SidebarAdSlot />
        </aside>
      </div>

      {/* Comprehensive Editorial & Educational Publisher Content */}
      <div className="mx-auto mt-16 max-w-5xl space-y-16 text-slate-300">
        
        {/* Intro Guide */}
        <section className="rounded-3xl border border-white/10 bg-slate-900/60 p-8 sm:p-10 backdrop-blur-sm">
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3.5 py-1 text-xs font-semibold text-cyan-300">
            <span>Essential Freelance Finance</span>
          </div>
          <h2 className="mt-4 text-2xl font-bold tracking-tight text-white sm:text-3xl">
            Mastering Freelance Taxes & Sustainable Pricing in 2025–2026
          </h2>
          <p className="mt-4 leading-relaxed text-slate-300">
            Transitioning from traditional W-2 employment to independent 1099 contracting or freelance consulting unlocks unprecedented freedom, but it shifts the full burden of financial management onto your shoulders. Unlike traditional employees who have taxes automatically withheld by payroll departments, independent workers must forecast quarterly liabilities, fund self-employment taxes, absorb overhead, and price client engagements to protect their bottom line.
          </p>
          <p className="mt-4 leading-relaxed text-slate-300">
            Undercharging is the most frequent reason solo businesses struggle. Many freelancers make the mistake of simply dividing their target salary by 2,000 annual hours, neglecting the reality of non-billable administrative time, business overhead, and the extra 7.65% employer-side payroll tax burden. This comprehensive guide and calculator suite provides the mathematical clarity you need to price with authority.
          </p>
        </section>

        {/* The 3 Core Pillars of Freelance Taxes */}
        <section className="space-y-6">
          <div className="border-b border-white/10 pb-4">
            <h2 className="text-xl font-bold tracking-tight text-white sm:text-2xl">
              The Three Pillars of Freelance Taxation
            </h2>
            <p className="mt-1 text-sm text-slate-400">
              Understanding how your gross revenue is taxed at the federal, self-employment, and state levels.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            
            {/* Pillar 1 */}
            <div className="rounded-2xl border border-white/10 bg-slate-900/80 p-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-400/10 text-cyan-400 font-bold text-lg mb-4">
                1
              </div>
              <h3 className="text-lg font-bold text-white">Self-Employment Tax (SECA)</h3>
              <p className="mt-2 text-xs leading-relaxed text-slate-400">
                Under the Self-Employment Contributions Act (IRC §1401), self-employed individuals pay both the employee and employer portions of FICA:
              </p>
              <ul className="mt-3 space-y-1.5 text-xs text-slate-300">
                <li className="flex items-center gap-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
                  <strong>12.4% Social Security</strong> (capped at $176,100 for 2025–2026)
                </li>
                <li className="flex items-center gap-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
                  <strong>2.9% Medicare</strong> (no income cap)
                </li>
                <li className="flex items-center gap-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
                  <strong>0.9% Additional Medicare</strong> above $200k (Single) / $250k (Married)
                </li>
              </ul>
              <p className="mt-3 text-[11px] text-slate-400 italic">
                Note: SE tax is calculated on 92.35% of net profit, and 50% is deductible on Form 1040.
              </p>
            </div>

            {/* Pillar 2 */}
            <div className="rounded-2xl border border-white/10 bg-slate-900/80 p-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-400/10 text-cyan-400 font-bold text-lg mb-4">
                2
              </div>
              <h3 className="text-lg font-bold text-white">Federal Income Tax</h3>
              <p className="mt-2 text-xs leading-relaxed text-slate-400">
                Federal income tax is calculated on progressive brackets after subtracting legitimate business expenses, half of your SE tax, and your Standard Deduction:
              </p>
              <ul className="mt-3 space-y-1.5 text-xs text-slate-300">
                <li className="flex items-center gap-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
                  <strong>Standard Deduction:</strong> $14,600 (Single) / $29,200 (Married)
                </li>
                <li className="flex items-center gap-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
                  <strong>Brackets:</strong> 10%, 12%, 22%, 24%, 32%, 35%, 37%
                </li>
                <li className="flex items-center gap-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
                  <strong>Graduated Rates:</strong> Only dollars in higher brackets are taxed at higher rates.
                </li>
              </ul>
              <p className="mt-3 text-[11px] text-slate-400 italic">
                Our calculator models progressive marginal brackets rather than a flat estimated percentage.
              </p>
            </div>

            {/* Pillar 3 */}
            <div className="rounded-2xl border border-white/10 bg-slate-900/80 p-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-400/10 text-cyan-400 font-bold text-lg mb-4">
                3
              </div>
              <h3 className="text-lg font-bold text-white">QBI Deduction & State Taxes</h3>
              <p className="mt-2 text-xs leading-relaxed text-slate-400">
                Key tax relief provisions and jurisdictional obligations that materially adjust your take-home:
              </p>
              <ul className="mt-3 space-y-1.5 text-xs text-slate-300">
                <li className="flex items-center gap-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
                  <strong>Section 199A QBI:</strong> Up to 20% deduction on qualified business net income.
                </li>
                <li className="flex items-center gap-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
                  <strong>State Income Tax:</strong> Ranges from 0% (TX, FL, WA) to up to 13.3% (CA).
                </li>
                <li className="flex items-center gap-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
                  <strong>Local City Taxes:</strong> NYC, Philadelphia, or SF gross receipts taxes.
                </li>
              </ul>
              <p className="mt-3 text-[11px] text-slate-400 italic">
                Eligible sole proprietors and single-member LLCs benefit directly from the Section 199A QBI deduction.
              </p>
            </div>

          </div>
        </section>

        {/* How to Price Services */}
        <section className="rounded-3xl border border-white/10 bg-slate-900/80 p-8 sm:p-10">
          <h2 className="text-xl font-bold tracking-tight text-white sm:text-2xl">
            The Mathematical Formula for Setting Your Hourly Rate
          </h2>
          <p className="mt-3 leading-relaxed text-slate-300">
            Many freelancers ask: <em>&ldquo;If I want to make $100,000 a year, shouldn&apos;t I charge $50/hr?&rdquo;</em> (Assuming 2,000 hours per year). 
            <strong> The answer is an emphatic NO.</strong>
          </p>
          <div className="my-6 rounded-2xl border border-cyan-500/20 bg-cyan-950/30 p-6">
            <h4 className="text-sm font-bold uppercase tracking-wider text-cyan-300">The Realistic Freelance Capacity Reality</h4>
            <p className="mt-2 text-sm text-slate-300">
              A full-time freelancer cannot bill 40 hours per week. Between client acquisition, pitching, administration, bookkeeping, invoicing, professional development, and paid time off (holidays, vacation, sick days), most sustainable solo practitioners average <strong>25 to 32 billable hours per week</strong> across <strong>46 to 48 working weeks per year</strong>.
            </p>
            <div className="mt-4 rounded-xl bg-slate-950/80 p-4 font-mono text-xs text-cyan-300">
              Required Gross Revenue = Target Net Take-Home + Estimated Taxes + Annual Overhead<br />
              Total Billable Hours = Weekly Billable Hours &times; Annual Work Weeks<br />
              Target Minimum Hourly Rate = Required Gross Revenue / Total Billable Hours
            </div>
          </div>
          <p className="leading-relaxed text-slate-300">
            For example, to take home a net $80,000 with $15,000 in overhead, a single filer in an average state needs roughly $124,000 in gross revenue. If you work 30 billable hours/week for 48 weeks (1,440 billable hours), your minimum floor rate is <strong>$86.11 per hour</strong>—nearly 72% higher than the naive $50/hr calculation!
          </p>
        </section>

        {/* Top 10 Schedule C Tax Write-Offs */}
        <section className="space-y-6">
          <div className="border-b border-white/10 pb-4">
            <h2 className="text-xl font-bold tracking-tight text-white sm:text-2xl">
              Top 10 Tax Deductions & Write-Offs for Freelancers
            </h2>
            <p className="mt-1 text-sm text-slate-400">
              Legitimate business expenses reduce your net profit on IRS Schedule C, directly lowering both your Self-Employment Tax and Federal Income Tax liabilities.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            
            <div className="rounded-2xl border border-white/10 bg-slate-900/60 p-5">
              <h3 className="font-bold text-white text-base">1. Home Office Deduction</h3>
              <p className="mt-1.5 text-xs text-slate-400">
                Deduct a dedicated, regularly used area of your home. Use the simplified method ($5/sq ft up to 300 sq ft = $1,500) or actual expenses (pro-rated rent, utilities, insurance, maintenance).
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-slate-900/60 p-5">
              <h3 className="font-bold text-white text-base">2. Hardware & Electronics</h3>
              <p className="mt-1.5 text-xs text-slate-400">
                Computers, monitors, tablets, external drives, ergonomic chairs, and cameras used for your business can be fully expensed in the purchase year using Section 179 or de minimis safe harbor.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-slate-900/60 p-5">
              <h3 className="font-bold text-white text-base">3. Software & SaaS Subscriptions</h3>
              <p className="mt-1.5 text-xs text-slate-400">
                Adobe Creative Cloud, GitHub, Figma, Google Workspace, web hosting, accounting software (QuickBooks/Xero), CRM tools, and AI developer subscriptions are 100% deductible.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-slate-900/60 p-5">
              <h3 className="font-bold text-white text-base">4. Self-Employed Health Insurance</h3>
              <p className="mt-1.5 text-xs text-slate-400">
                If you are not eligible for a spouse&apos;s employer-subsidized health plan, 100% of your medical, dental, and qualifying vision insurance premiums can be deducted above-the-line on Form 1040.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-slate-900/60 p-5">
              <h3 className="font-bold text-white text-base">5. Internet & Mobile Phone</h3>
              <p className="mt-1.5 text-xs text-slate-400">
                The business percentage of your home high-speed internet connection and your mobile phone monthly service plan is fully deductible.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-slate-900/60 p-5">
              <h3 className="font-bold text-white text-base">6. Professional Development & Courses</h3>
              <p className="mt-1.5 text-xs text-slate-400">
                Conferences, technical certifications, educational workshops, design books, and industry association memberships that maintain or improve existing professional skills.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-slate-900/60 p-5">
              <h3 className="font-bold text-white text-base">7. Subcontractors & Freelance Help</h3>
              <p className="mt-1.5 text-xs text-slate-400">
                Payments made to virtual assistants, copy editors, specialist developers, or design contractors. (Remember to collect Form W-9 and file Form 1099-NEC for payments over $600).
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-slate-900/60 p-5">
              <h3 className="font-bold text-white text-base">8. Legal & Accounting Fees</h3>
              <p className="mt-1.5 text-xs text-slate-400">
                Fees paid to your Certified Public Accountant (CPA), bookkeeper, contract attorney, and trademark or business registration expenses are deductible Schedule C overhead.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-slate-900/60 p-5">
              <h3 className="font-bold text-white text-base">9. Business Travel & Client Meals</h3>
              <p className="mt-1.5 text-xs text-slate-400">
                Flights, lodging, and rideshares for verified client meetings or business conferences. Qualifying business meals with clients or collaborators are generally 50% deductible.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-slate-900/60 p-5">
              <h3 className="font-bold text-white text-base">10. Solo 401(k) & SEP IRA Contributions</h3>
              <p className="mt-1.5 text-xs text-slate-400">
                Self-employed retirement vehicles allow you to shelter significant pre-tax income—up to $70,000 in 2025–2026 for SEP IRAs or Solo 401(k)s, significantly lowering current-year tax liabilities.
              </p>
            </div>

          </div>
        </section>

        {/* Quarterly Estimated Taxes Breakdown */}
        <section className="rounded-3xl border border-white/10 bg-slate-900/80 p-8 sm:p-10">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-6">
            <div>
              <h2 className="text-xl font-bold tracking-tight text-white sm:text-2xl">
                Quarterly Estimated Tax Schedule (IRS Form 1040-ES)
              </h2>
              <p className="mt-1 text-sm text-slate-400">
                The US tax system is pay-as-you-earn. Freelancers expecting to owe $1,000+ in annual tax must make 4 quarterly installment payments.
              </p>
            </div>
            <Link 
              href="/guides/quarterly-estimated-taxes"
              className="inline-flex items-center text-xs font-semibold text-cyan-300 hover:text-cyan-200"
            >
              Read full quarterly guide &rarr;
            </Link>
          </div>

          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-2xl border border-white/10 bg-slate-950/60 p-4">
              <span className="text-xs font-bold text-cyan-400 uppercase tracking-wider">Quarter 1</span>
              <h4 className="mt-1 text-lg font-bold text-white">April 15</h4>
              <p className="mt-1 text-xs text-slate-400">Covers income earned Jan 1 – Mar 31.</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-slate-950/60 p-4">
              <span className="text-xs font-bold text-cyan-400 uppercase tracking-wider">Quarter 2</span>
              <h4 className="mt-1 text-lg font-bold text-white">June 15</h4>
              <p className="mt-1 text-xs text-slate-400">Covers income earned Apr 1 – May 31.</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-slate-950/60 p-4">
              <span className="text-xs font-bold text-cyan-400 uppercase tracking-wider">Quarter 3</span>
              <h4 className="mt-1 text-lg font-bold text-white">September 15</h4>
              <p className="mt-1 text-xs text-slate-400">Covers income earned Jun 1 – Aug 31.</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-slate-950/60 p-4">
              <span className="text-xs font-bold text-cyan-400 uppercase tracking-wider">Quarter 4</span>
              <h4 className="mt-1 text-lg font-bold text-white">January 15 (Next Yr)</h4>
              <p className="mt-1 text-xs text-slate-400">Covers income earned Sep 1 – Dec 31.</p>
            </div>
          </div>

          <div className="mt-6 rounded-xl border border-emerald-500/20 bg-emerald-950/20 p-4 text-xs text-emerald-300">
            <strong>Safe Harbor Protection:</strong> To avoid IRS underpayment penalties (Form 2210), pay at least 90% of your current tax year&apos;s liability OR 100% of your prior year&apos;s tax liability (110% if your prior Adjusted Gross Income was over $150,000).
          </div>
        </section>

        {/* Niche Calculators Hub */}
        <section id="calculators" className="space-y-6 scroll-mt-24">
          <div className="border-b border-white/10 pb-4">
            <h2 className="text-xl font-bold tracking-tight text-white sm:text-2xl">
              Specialized Calculators by Role & Region
            </h2>
            <p className="mt-1 text-sm text-slate-400">
              Select your specific profession or tax residency for customized rate benchmarks and tailored tax planning.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            
            <Link href="/calculator/software-engineer" className="group rounded-2xl border border-white/10 bg-slate-900/70 p-5 hover:border-cyan-400/50 hover:bg-slate-900 transition-all">
              <h3 className="font-bold text-white group-hover:text-cyan-300 transition-colors">Software Engineer Calculator</h3>
              <p className="mt-2 text-xs text-slate-400 leading-relaxed">
                Tailored for backend, frontend, full-stack, DevOps, and cloud contractors. Models retainers, high-end equipment write-offs, and 1099 vs W-2 contracting rates.
              </p>
              <span className="mt-4 inline-block text-xs font-semibold text-cyan-400 group-hover:translate-x-1 transition-transform">&rarr; Explore Developer Rates</span>
            </Link>

            <Link href="/calculator/graphic-designer" className="group rounded-2xl border border-white/10 bg-slate-900/70 p-5 hover:border-cyan-400/50 hover:bg-slate-900 transition-all">
              <h3 className="font-bold text-white group-hover:text-cyan-300 transition-colors">Graphic Designer Calculator</h3>
              <p className="mt-2 text-xs text-slate-400 leading-relaxed">
                Engineered for visual artists, brand identity designers, and UI/UX specialists. Factoring in creative software subscriptions, font licenses, and asset overhead.
              </p>
              <span className="mt-4 inline-block text-xs font-semibold text-cyan-400 group-hover:translate-x-1 transition-transform">&rarr; Explore Creative Rates</span>
            </Link>

            <Link href="/calculator/consultant" className="group rounded-2xl border border-white/10 bg-slate-900/70 p-5 hover:border-cyan-400/50 hover:bg-slate-900 transition-all">
              <h3 className="font-bold text-white group-hover:text-cyan-300 transition-colors">Management Consultant Calculator</h3>
              <p className="mt-2 text-xs text-slate-400 leading-relaxed">
                Designed for strategy advisors, fractional executives, and operations consultants. Optimizes advisory retainers, travel expenses, and day rate models.
              </p>
              <span className="mt-4 inline-block text-xs font-semibold text-cyan-400 group-hover:translate-x-1 transition-transform">&rarr; Explore Consultant Rates</span>
            </Link>

            <Link href="/calculator/copywriter" className="group rounded-2xl border border-white/10 bg-slate-900/70 p-5 hover:border-cyan-400/50 hover:bg-slate-900 transition-all">
              <h3 className="font-bold text-white group-hover:text-cyan-300 transition-colors">Copywriter & Content Strategist</h3>
              <p className="mt-2 text-xs text-slate-400 leading-relaxed">
                Built for conversion copywriters, technical writers, and content marketers. Compare per-word, per-project, and monthly editorial retainer models.
              </p>
              <span className="mt-4 inline-block text-xs font-semibold text-cyan-400 group-hover:translate-x-1 transition-transform">&rarr; Explore Copywriter Rates</span>
            </Link>

            <Link href="/calculator/california-freelance" className="group rounded-2xl border border-amber-500/20 bg-slate-900/70 p-5 hover:border-amber-400/50 hover:bg-slate-900 transition-all">
              <h3 className="font-bold text-amber-200 group-hover:text-amber-300 transition-colors">California Freelance Tax Suite</h3>
              <p className="mt-2 text-xs text-slate-400 leading-relaxed">
                Configured with California Franchise Tax Board (FTB) brackets up to 13.3%, State Disability Insurance (SDI) rules, and local municipal rate planning.
              </p>
              <span className="mt-4 inline-block text-xs font-semibold text-amber-400 group-hover:translate-x-1 transition-transform">&rarr; California Tax Model</span>
            </Link>

            <Link href="/calculator/texas-freelance" className="group rounded-2xl border border-amber-500/20 bg-slate-900/70 p-5 hover:border-amber-400/50 hover:bg-slate-900 transition-all">
              <h3 className="font-bold text-amber-200 group-hover:text-amber-300 transition-colors">Texas Freelance Tax Suite</h3>
              <p className="mt-2 text-xs text-slate-400 leading-relaxed">
                Optimized for 0% Texas state personal income tax, Texas Franchise Tax thresholds, and regional cost-of-living rate calibration for solo businesses.
              </p>
              <span className="mt-4 inline-block text-xs font-semibold text-amber-400 group-hover:translate-x-1 transition-transform">&rarr; Texas Tax Model</span>
            </Link>

          </div>
        </section>

        {/* Frequently Asked Questions */}
        <section className="rounded-3xl border border-white/10 bg-slate-900/80 p-8 sm:p-10">
          <h2 className="text-xl font-bold tracking-tight text-white sm:text-2xl">
            Frequently Asked Questions (FAQ)
          </h2>
          <p className="mt-1 text-sm text-slate-400">
            Answers to common questions regarding freelance self-employment taxes, hourly pricing, and IRS compliance.
          </p>

          <div className="mt-8 space-y-6">
            
            <div className="border-b border-white/10 pb-5">
              <h3 className="text-base font-semibold text-white">How much should I set aside from every client invoice for taxes?</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-400">
                Most financial professionals recommend transferring <strong>25% to 35%</strong> of every client payment into a dedicated business tax savings account. If you reside in a state with high income tax rates (like California, New York, or New Jersey), aim for 30% to 35%. In states with no income tax (like Texas, Florida, Washington, or Nevada), 25% to 28% is generally sufficient.
              </p>
            </div>

            <div className="border-b border-white/10 pb-5">
              <h3 className="text-base font-semibold text-white">What is the difference between Gross Revenue and Net Profit?</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-400">
                <strong>Gross Revenue</strong> is the total amount invoiced and collected from clients before any expenses are subtracted. <strong>Net Profit</strong> (calculated on IRS Schedule C, Line 31) is Gross Revenue minus ordinary and necessary business expenses (software, equipment, travel, advertising, subcontractor fees). Your Self-Employment Tax and income tax are calculated on your <em>Net Profit</em>, not gross revenue.
              </p>
            </div>

            <div className="border-b border-white/10 pb-5">
              <h3 className="text-base font-semibold text-white">What is the 2025–2026 Social Security wage base cap for freelancers?</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-400">
                For the 2025–2026 tax years, the Social Security wage limit is <strong>$176,100</strong>. Once your combined net self-employment earnings and any W-2 employment wages exceed $176,100, you no longer pay the 12.4% Social Security tax portion on dollars above this threshold. However, the 2.9% Medicare tax continues indefinitely on all earnings.
              </p>
            </div>

            <div className="border-b border-white/10 pb-5">
              <h3 className="text-base font-semibold text-white">How does the 20% Qualified Business Income (QBI) deduction work?</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-400">
                Enacted under the Tax Cuts and Jobs Act (IRC Section 199A), the QBI deduction enables eligible sole proprietors, LLC owners, and S-Corp shareholders to deduct up to <strong>20% of their net qualified business income</strong> directly from their taxable federal income. This significantly reduces effective tax rates for independent professionals.
              </p>
            </div>

            <div className="border-b border-white/10 pb-5">
              <h3 className="text-base font-semibold text-white">Why is my freelance hourly rate so much higher than my previous W-2 salary?</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-400">
                As a freelance business owner, you must personally fund: (1) the 7.65% employer-side payroll tax, (2) your own health, dental, and vision insurance premiums, (3) retirement contributions with no employer 401(k) match, (4) unpaid holidays, vacations, and sick days, (5) software licenses, computer hardware, and marketing, and (6) 20% to 40% non-billable administrative time. A $100,000 W-2 salary requires an equivalent freelance revenue of roughly $130,000 to $145,000.
              </p>
            </div>

            <div>
              <h3 className="text-base font-semibold text-white">What happens if I miss a quarterly estimated tax deadline?</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-400">
                If you underpay or pay late, the IRS calculates an underpayment penalty under IRC Section 6654 based on the prevailing federal short-term interest rate plus 3 percentage points. You can avoid penalties by meeting safe harbor requirements: paying 100% of your prior year&apos;s total tax (110% for high earners) or 90% of your current year&apos;s total liability in four equal installments.
              </p>
            </div>

          </div>
        </section>

      </div>
    </div>
  );
}
