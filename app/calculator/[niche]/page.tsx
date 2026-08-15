import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import TaxCalculatorSuite from "../../../components/calculators/TaxCalculatorSuite";
import AdBreakDivider from "../../../components/monetization/AdBreakDivider";
import SidebarAdSlot from "../../../components/monetization/SidebarAdSlot";
import { NICHE_DATA } from "../../../utils/data/nicheData";

interface CalculatorNichePageProps {
  params: Promise<{ niche: string }>;
}

export async function generateStaticParams() {
  return Object.keys(NICHE_DATA).map((niche) => ({
    niche,
  }));
}

export async function generateMetadata({
  params,
}: CalculatorNichePageProps): Promise<Metadata> {
  const { niche } = await params;
  const data = NICHE_DATA[niche];

  if (!data) {
    return {
      title: "Freelance Calculator | Freelance Calc Suite",
    };
  }

  return {
    title: `${data.headline} | Freelance Calc Suite`,
    description: data.metaDescription,
    alternates: {
      canonical: `https://www.freelancecalcsuite.online/calculator/${niche}`,
    },
    openGraph: {
      title: `${data.title} Tax & Hourly Rate Calculator`,
      description: data.metaDescription,
      url: `https://www.freelancecalcsuite.online/calculator/${niche}`,
      type: "website",
    },
  };
}

export default async function CalculatorNichePage({
  params,
}: CalculatorNichePageProps) {
  const { niche } = await params;
  const data = NICHE_DATA[niche];

  if (!data) {
    notFound();
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: `${data.title} Freelance Calculator Suite`,
    applicationCategory: "BusinessApplication",
    operatingSystem: "All",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    description: data.metaDescription,
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
        name: "Calculators",
        item: "https://www.freelancecalcsuite.online",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: `${data.title} Calculator`,
        item: `https://www.freelancecalcsuite.online/calculator/${niche}`,
      },
    ],
  };

  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: data.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <div className="min-h-screen px-4 py-8 sm:px-6 sm:py-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
      />

      {/* Breadcrumb Navigation */}
      <nav className="mx-auto mb-6 flex w-full max-w-[1440px] items-center gap-2 text-xs font-semibold text-slate-400">
        <Link href="/" className="hover:text-cyan-300 transition-colors">
          Home
        </Link>
        <span>/</span>
        <Link href="/" className="hover:text-cyan-300 transition-colors">
          Calculators
        </Link>
        <span>/</span>
        <span className="text-slate-200">{data.title}</span>
      </nav>

      {/* Page Hero Title */}
      <div className="mx-auto mb-8 w-full max-w-[1440px]">
        <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-xs font-semibold text-cyan-300">
          <span className="h-1.5 w-1.5 rounded-full bg-cyan-300" />
          {data.heroBadge}
        </div>
        <h1 className="page-title mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
          {data.headline}
        </h1>
        <p className="mt-3 max-w-3xl text-sm leading-relaxed text-slate-300 sm:text-base">
          {data.overview}
        </p>
      </div>

      {/* Interactive Calculator Section (Pre-configured with niche defaults) */}
      <div className="mx-auto flex w-full max-w-[1440px] flex-col gap-8 xl:flex-row xl:items-start">
        <div className="flex-1">
          <TaxCalculatorSuite
            initialGrossRevenue={data.calculatorDefaults.initialGrossRevenue}
            initialExpenses={data.calculatorDefaults.initialExpenses}
            initialDesiredTakeHome={data.calculatorDefaults.initialDesiredTakeHome}
            initialBillableHours={data.calculatorDefaults.initialBillableHours}
            initialWeeksWorked={data.calculatorDefaults.initialWeeksWorked}
            initialStateTaxRate={data.calculatorDefaults.initialStateTaxRate}
            initialProjectFee={data.calculatorDefaults.initialProjectFee}
            initialDirectCosts={data.calculatorDefaults.initialDirectCosts}
          />
          <AdBreakDivider />
        </div>
        <aside className="hidden shrink-0 xl:block">
          <SidebarAdSlot />
        </aside>
      </div>

      {/* Substantive Niche-Specific Editorial Content */}
      <div className="mx-auto mt-16 max-w-5xl space-y-16 text-slate-300">
        
        {/* Industry Benchmarks Section */}
        <section className="rounded-3xl border border-white/10 bg-slate-900/80 p-8 sm:p-10">
          <div className="border-b border-white/10 pb-4">
            <h2 className="text-xl font-bold tracking-tight text-white sm:text-2xl">
              {data.title} Rate Benchmarks (2025–2026 Market Data)
            </h2>
            <p className="mt-1 text-sm text-slate-400">
              Industry rate distribution across experience tiers for independent contractors and solo practitioners.
            </p>
          </div>

          <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-4">
            <div className="rounded-2xl border border-white/10 bg-slate-950/60 p-4 text-center">
              <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Entry Level</span>
              <p className="mt-2 text-lg font-bold text-white">{data.benchmarks.entry}</p>
              <span className="mt-1 block text-[11px] text-slate-500">1–2 yrs experience</span>
            </div>
            <div className="rounded-2xl border border-white/10 bg-slate-950/60 p-4 text-center">
              <span className="text-xs font-semibold text-cyan-400 uppercase tracking-wider">Mid-Level</span>
              <p className="mt-2 text-lg font-bold text-cyan-300">{data.benchmarks.mid}</p>
              <span className="mt-1 block text-[11px] text-slate-500">3–5 yrs experience</span>
            </div>
            <div className="rounded-2xl border border-white/10 bg-slate-950/60 p-4 text-center">
              <span className="text-xs font-semibold text-emerald-400 uppercase tracking-wider">Senior Level</span>
              <p className="mt-2 text-lg font-bold text-emerald-300">{data.benchmarks.senior}</p>
              <span className="mt-1 block text-[11px] text-slate-500">6–10 yrs experience</span>
            </div>
            <div className="rounded-2xl border border-white/10 bg-slate-950/60 p-4 text-center">
              <span className="text-xs font-semibold text-violet-400 uppercase tracking-wider">Specialist / Expert</span>
              <p className="mt-2 text-lg font-bold text-violet-300">{data.benchmarks.expert}</p>
              <span className="mt-1 block text-[11px] text-slate-500">10+ yrs / High Niche</span>
            </div>
          </div>

          <div className="mt-6 rounded-xl border border-white/10 bg-slate-950/40 p-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs">
            <span className="text-slate-400">Typical Full-Time Annual Gross Revenue Range:</span>
            <strong className="text-sm font-bold text-white">{data.benchmarks.typicalAnnualGross}</strong>
          </div>
        </section>

        {/* Niche Specific Deductions */}
        <section className="space-y-6">
          <div className="border-b border-white/10 pb-4">
            <h2 className="text-xl font-bold tracking-tight text-white sm:text-2xl">
              Common Tax Deductions for {data.title}s
            </h2>
            <p className="mt-1 text-sm text-slate-400">
              Maximize your Schedule C write-offs by tracking all legitimate business overhead.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {data.deductions.map((deduction, idx) => (
              <div key={idx} className="rounded-2xl border border-white/10 bg-slate-900/60 p-5">
                <h3 className="font-bold text-white text-base">{deduction.title}</h3>
                <p className="mt-2 text-xs leading-relaxed text-slate-400">
                  {deduction.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Strategic Pricing Models */}
        <section className="rounded-3xl border border-white/10 bg-slate-900/80 p-8 sm:p-10">
          <div className="border-b border-white/10 pb-4">
            <h2 className="text-xl font-bold tracking-tight text-white sm:text-2xl">
              Optimal Pricing Strategies for {data.title}s
            </h2>
            <p className="mt-1 text-sm text-slate-400">
              Aligning your billing model with client expectations and project scope.
            </p>
          </div>

          <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-3">
            {data.pricingStrategies.map((strat, idx) => (
              <div key={idx} className="flex flex-col justify-between rounded-2xl border border-white/10 bg-slate-950/60 p-6">
                <div>
                  <h3 className="text-base font-bold text-white">{strat.model}</h3>
                  <p className="mt-2 text-xs leading-relaxed text-slate-400">
                    {strat.description}
                  </p>
                </div>
                <div className="mt-4 border-t border-white/10 pt-3">
                  <span className="block text-[10px] font-bold uppercase tracking-wider text-cyan-400">Best Suited For</span>
                  <p className="mt-1 text-xs text-slate-300">{strat.bestFor}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Comprehensive Case Study */}
        <section className="rounded-3xl border border-cyan-500/20 bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 p-8 sm:p-10">
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-xs font-semibold text-cyan-300">
            <span>Realistic Financial Breakdown</span>
          </div>
          <h2 className="mt-4 text-xl font-bold tracking-tight text-white sm:text-2xl">
            {data.caseStudy.title}
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-slate-300">
            {data.caseStudy.scenario}
          </p>

          <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
            <div className="rounded-xl border border-white/10 bg-slate-950/80 p-3 text-center">
              <span className="text-[11px] font-medium text-slate-400">Gross Revenue</span>
              <p className="mt-1 font-bold text-white text-sm">{data.caseStudy.grossRevenue}</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-slate-950/80 p-3 text-center">
              <span className="text-[11px] font-medium text-slate-400">Expenses</span>
              <p className="mt-1 font-bold text-rose-300 text-sm">{data.caseStudy.expenses}</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-slate-950/80 p-3 text-center">
              <span className="text-[11px] font-medium text-slate-400">Net Profit</span>
              <p className="mt-1 font-bold text-emerald-300 text-sm">{data.caseStudy.netProfit}</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-slate-950/80 p-3 text-center">
              <span className="text-[11px] font-medium text-slate-400">SECA Tax (15.3%)</span>
              <p className="mt-1 font-bold text-slate-200 text-sm">{data.caseStudy.seTax}</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-slate-950/80 p-3 text-center">
              <span className="text-[11px] font-medium text-slate-400">Federal Tax</span>
              <p className="mt-1 font-bold text-slate-200 text-sm">{data.caseStudy.fedTax}</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-slate-950/80 p-3 text-center">
              <span className="text-[11px] font-medium text-slate-400">Net Take-Home</span>
              <p className="mt-1 font-bold text-cyan-300 text-sm">{data.caseStudy.netTakeHome}</p>
            </div>
          </div>

          <div className="mt-6 rounded-2xl border border-white/10 bg-slate-950/80 p-5">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Required Floor Billing Rate</span>
              <strong className="text-base font-bold text-cyan-300">{data.caseStudy.effectiveRate}</strong>
            </div>
            <p className="mt-3 text-xs leading-relaxed text-slate-300 border-t border-white/10 pt-3">
              <strong>Key Takeaway:</strong> {data.caseStudy.keyTakeaway}
            </p>
          </div>
        </section>

        {/* Tax Nuances & Compliance */}
        <section className="space-y-4">
          <h2 className="text-xl font-bold tracking-tight text-white sm:text-2xl">
            Tax & Legal Nuances for {data.title}s
          </h2>
          <div className="rounded-2xl border border-white/10 bg-slate-900/60 p-6 space-y-3">
            {data.taxNuances.map((nuance, idx) => (
              <div key={idx} className="flex items-start gap-3 text-xs leading-relaxed text-slate-300">
                <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-cyan-400" />
                <span>{nuance}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Niche FAQ */}
        <section className="rounded-3xl border border-white/10 bg-slate-900/80 p-8 sm:p-10">
          <h2 className="text-xl font-bold tracking-tight text-white sm:text-2xl">
            Frequently Asked Questions for {data.title}s
          </h2>
          <div className="mt-6 space-y-5">
            {data.faqs.map((faq, idx) => (
              <div key={idx} className="border-b border-white/10 pb-4">
                <h3 className="text-sm font-semibold text-white">{faq.question}</h3>
                <p className="mt-2 text-xs leading-relaxed text-slate-400">{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Related Calculators Links */}
        <section className="border-t border-white/10 pt-8">
          <h3 className="text-sm font-bold uppercase tracking-wider text-slate-400 mb-4">
            Explore Other Professional Calculators
          </h3>
          <div className="flex flex-wrap gap-2 text-xs font-semibold">
            {Object.values(NICHE_DATA)
              .filter((item) => item.slug !== data.slug)
              .map((item) => (
                <Link
                  key={item.slug}
                  href={`/calculator/${item.slug}`}
                  className="rounded-xl border border-white/10 bg-slate-900/60 px-3.5 py-2 text-slate-300 hover:border-cyan-400/40 hover:text-cyan-300 transition-colors"
                >
                  {item.title} Calculator &rarr;
                </Link>
              ))}
          </div>
        </section>

      </div>
    </div>
  );
}
