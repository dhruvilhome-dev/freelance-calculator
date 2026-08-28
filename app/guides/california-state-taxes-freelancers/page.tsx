import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "California Freelance Taxes: FTB Estimated Payments, SDI & AB5 Guide (2025–2026)",
  description: "Complete guide to California state taxes for 1099 freelancers — FTB estimated tax deadlines, CA income tax brackets up to 13.3%, SDI obligations, and the AB5 independent contractor test.",
  alternates: {
    canonical: "https://www.freelancecalcsuite.online/guides/california-state-taxes-freelancers",
  },
};

export default function CaliforniaFreelanceTaxesGuidePage() {
  const articleLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "California Freelance Taxes: FTB Estimated Payments, SDI & AB5 Guide",
    description: "In-depth operational tax guide for California freelancers, contractors, and solo LLCs covering Franchise Tax Board brackets, quarterly 540-ES deadlines, AB5 worker classification, and state tax optimization.",
    author: {
      "@type": "Organization",
      name: "Freelance Tax Suite Editorial Team",
    },
    publisher: {
      "@type": "Organization",
      name: "Freelance Tax Suite",
    },
    datePublished: "2024-07-10T08:00:00+00:00",
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
        name: "California Freelance Taxes",
        item: "https://www.freelancecalcsuite.online/guides/california-state-taxes-freelancers",
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
          <span className="text-slate-200">California Freelance Taxes</span>
        </nav>

        {/* Hero Title */}
        <header className="border-b border-white/10 pb-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-amber-400/20 bg-amber-400/10 px-3.5 py-1 text-xs font-semibold text-amber-300">
            <span>State Tax Jurisdictions</span>
          </div>
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            California Freelance Taxes: FTB, SDI &amp; AB5 Compliance Guide (2025–2026)
          </h1>
          <div className="mt-4 flex items-center gap-4 text-xs text-slate-400">
            <span>By Freelance Tax Suite Editorial Team</span>
            <span>&bull;</span>
            <span>CA Franchise Tax Board (FTB) &amp; EDD</span>
            <span>&bull;</span>
            <span>11 min read</span>
          </div>
        </header>

        {/* Content Body */}
        <div className="mt-10 space-y-10 text-slate-300 leading-relaxed text-sm sm:text-base">
          <section className="space-y-4">
            <h2 className="text-xl font-bold text-white sm:text-2xl">
              Navigating America&apos;s Most Complex State Freelance Tax Environment
            </h2>
            <p>
              Operating as an independent contractor, solo consultant, or creative freelancer in California requires navigating the most stringent tax and employment classification rules in the nation. With top progressive state income tax brackets reaching <strong>13.3%</strong> (including the 1% Mental Health Services Tax for income over $1,000,000) and strict worker classification under <strong>Assembly Bill 5 (AB5)</strong>, California freelancers face a unique financial landscape.
            </p>
            <p>
              When combining federal Self-Employment Tax (15.3%), progressive Federal Income Tax brackets (up to 37%), and California FTB state taxes, high-earning California freelancers can easily see effective combined tax burdens between <strong>38% and 45%</strong> of their net profit.
            </p>
          </section>

          {/* Section 1: FTB Brackets */}
          <section className="rounded-3xl border border-white/10 bg-slate-900/80 p-6 sm:p-8 space-y-4">
            <h3 className="text-lg font-bold text-amber-300">1. California FTB Progressive Tax Brackets (2025–2026)</h3>
            <p className="text-xs sm:text-sm text-slate-300">
              California taxes personal income through nine progressive marginal tiers for single filers:
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs pt-2">
              <div className="bg-slate-950/60 p-3 rounded-xl border border-white/10">
                <span className="text-slate-400">1.00%</span>
                <p className="font-bold text-white mt-1">$0 – $10,756</p>
              </div>
              <div className="bg-slate-950/60 p-3 rounded-xl border border-white/10">
                <span className="text-slate-400">2.00%</span>
                <p className="font-bold text-white mt-1">$10,757 – $25,499</p>
              </div>
              <div className="bg-slate-950/60 p-3 rounded-xl border border-white/10">
                <span className="text-slate-400">4.00%</span>
                <p className="font-bold text-white mt-1">$25,500 – $40,245</p>
              </div>
              <div className="bg-slate-950/60 p-3 rounded-xl border border-white/10">
                <span className="text-slate-400">6.00%</span>
                <p className="font-bold text-white mt-1">$40,246 – $55,866</p>
              </div>
              <div className="bg-slate-950/60 p-3 rounded-xl border border-white/10">
                <span className="text-amber-400">8.00%</span>
                <p className="font-bold text-white mt-1">$55,867 – $70,606</p>
              </div>
              <div className="bg-slate-950/60 p-3 rounded-xl border border-white/10">
                <span className="text-amber-400 font-bold">9.30%</span>
                <p className="font-bold text-amber-300 mt-1">$70,607 – $360,659</p>
              </div>
              <div className="bg-slate-950/60 p-3 rounded-xl border border-white/10">
                <span className="text-rose-400 font-bold">10.30%</span>
                <p className="font-bold text-white mt-1">$360,660 – $432,787</p>
              </div>
              <div className="bg-slate-950/60 p-3 rounded-xl border border-white/10">
                <span className="text-rose-400 font-bold">11.30%</span>
                <p className="font-bold text-white mt-1">$432,788 – $721,314</p>
              </div>
              <div className="bg-slate-950/60 p-3 rounded-xl border border-white/10">
                <span className="text-rose-400 font-bold">12.3% – 13.3%</span>
                <p className="font-bold text-rose-300 mt-1">$721,315+ ($1M+)</p>
              </div>
            </div>
            <p className="text-[11px] text-slate-400 italic mt-2">
              Note: Most full-time California solo contractors earning between $80k and $250k fall squarely in the <strong>9.3% marginal bracket</strong>.
            </p>
          </section>

          {/* Section 2: CA Estimated Taxes */}
          <section className="rounded-3xl border border-white/10 bg-slate-900/80 p-6 sm:p-8 space-y-4">
            <h3 className="text-lg font-bold text-white">2. California FTB Estimated Quarterly Taxes (Form 540-ES)</h3>
            <p className="text-xs sm:text-sm text-slate-300">
              Just like the federal IRS, the California Franchise Tax Board (FTB) requires estimated tax installments if you expect to owe <strong>$500 or more in CA state tax</strong> ($250 if married filing separately).
            </p>
            <div className="rounded-2xl border border-amber-500/20 bg-amber-950/20 p-4 text-xs text-amber-200">
              <strong>⚠️ California&apos;s Unequal Installment Percentages:</strong> While the IRS splits quarterly payments evenly (25% each quarter), California requires:
              <ul className="mt-2 space-y-1 pl-4 list-disc text-slate-300">
                <li><strong>Q1 (April 15):</strong> 30% of total estimated annual state tax</li>
                <li><strong>Q2 (June 15):</strong> 40% of total estimated annual state tax</li>
                <li><strong>Q3 (September 15):</strong> 0% (No payment required in Q3!)</li>
                <li><strong>Q4 (January 15):</strong> 30% of total estimated annual state tax</li>
              </ul>
            </div>
            <p className="text-xs text-slate-300">
              Payments can be made electronically with zero processing fees directly via <strong>FTB Web Pay (ftb.ca.gov)</strong>.
            </p>
          </section>

          {/* Section 3: Assembly Bill 5 (AB5) and the ABC Test */}
          <section className="space-y-4">
            <h2 className="text-xl font-bold text-white sm:text-2xl">
              3. California Assembly Bill 5 (AB5) &amp; The ABC Worker Classification Test
            </h2>
            <p className="text-sm text-slate-300 leading-relaxed">
              Under California Labor Code §2775 (AB5), workers are legally presumed to be employees rather than independent contractors unless the hiring business proves all three prongs of the <strong>ABC Test</strong>:
            </p>
            <div className="space-y-3">
              <div className="rounded-2xl border border-white/10 bg-slate-900/60 p-4">
                <span className="font-bold text-white text-xs block">Prong A: Free from Control</span>
                <p className="text-xs text-slate-400 mt-1">The worker is free from the control and direction of the hiring entity in connection with the performance of the work, both under contract and in fact.</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-slate-900/60 p-4">
                <span className="font-bold text-white text-xs block">Prong B: Work Outside Usual Course of Business</span>
                <p className="text-xs text-slate-400 mt-1">The worker performs tasks that are outside the usual course of the hiring entity&apos;s core business operations.</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-slate-900/60 p-4">
                <span className="font-bold text-white text-xs block">Prong C: Customarily Engaged in an Established Trade</span>
                <p className="text-xs text-slate-400 mt-1">The worker is customarily engaged in an independently established trade, occupation, or business of the same nature as the work performed.</p>
              </div>
            </div>
            <p className="text-xs text-slate-400">
              <strong>Professional Services Exemptions (AB 2257):</strong> Many knowledge workers—including freelance writers, graphic designers, software engineers, photographers, marketing specialists, and fine artists—qualify for statutory exemptions from the ABC test, returning instead to the flexible, multi-factor <em>Borello</em> classification standard.
            </p>
          </section>

          {/* Section 4: Worked Example */}
          <section className="rounded-3xl border border-amber-500/20 bg-gradient-to-b from-slate-900 to-slate-950 p-6 sm:p-8 space-y-4">
            <h3 className="text-lg font-bold text-amber-300">Worked Financial Model: Bay Area Full-Stack Engineer</h3>
            <p className="text-xs sm:text-sm text-slate-300">
              Consider a software developer residing in San Francisco generating <strong>$150,000 gross revenue</strong> with <strong>$20,000 in legitimate business deductions</strong> ($130,000 net profit):
            </p>
            <div className="rounded-2xl bg-slate-950/80 p-5 font-mono text-xs space-y-2 text-slate-300 border border-white/10">
              <p className="text-white font-bold">1. Gross Business Revenue: $150,000</p>
              <p>• Deductible Overhead (Hardware, Software, Home Office): -$20,000</p>
              <p>• Net Schedule C Profit: <strong className="text-cyan-300">$130,000</strong></p>
              <div className="my-2 border-t border-white/10" />
              <p className="text-slate-300 font-bold">2. Federal Tax Liabilities:</p>
              <p>• Self-Employment Tax (SECA 15.3%): $18,377</p>
              <p>• Federal Income Tax (after QBI &amp; Standard Deduction): ~$13,620</p>
              <div className="my-2 border-t border-white/10" />
              <p className="text-amber-300 font-bold">3. California State Tax Liabilities:</p>
              <p>• CA FTB Income Tax (graduated up to 9.3%): ~$8,450</p>
              <p>• CA Annual LLC Franchise Tax (if operating as LLC): $800</p>
              <div className="my-2 border-t border-white/10" />
              <p className="text-rose-400 font-bold">Total Combined Tax Obligation: $41,247 (31.7% effective tax on net profit)</p>
              <p className="text-emerald-400 font-bold">Net Annual Take-Home Pay: $88,753</p>
            </div>
          </section>

          {/* Bottom Action */}
          <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <p className="font-bold text-white text-base">Explore the dedicated California Freelance Calculator</p>
              <p className="text-xs text-slate-400">Pre-configured with California FTB state tax brackets and specific rate modeling.</p>
            </div>
            <Link
              href="/calculator/california-freelance"
              className="rounded-xl bg-amber-400 px-5 py-2.5 text-xs font-bold text-slate-950 hover:bg-amber-300 transition-colors"
            >
              Open California Calculator &rarr;
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
