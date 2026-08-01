import type { Metadata } from "next";
import TaxCalculatorSuite from "../../../components/calculators/TaxCalculatorSuite";
import AdBreakDivider from "../../../components/monetization/AdBreakDivider";
import SidebarAdSlot from "../../../components/monetization/SidebarAdSlot";

interface CalculatorNichePageProps {
  params: Promise<{ niche: string }>;
}

function formatNiche(niche: string): string {
  return niche
    .split("-")
    .filter(Boolean)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

export async function generateMetadata({
  params,
}: CalculatorNichePageProps): Promise<Metadata> {
  const { niche } = await params;
  const nicheTitle = formatNiche(niche);

  return {
    title: `${nicheTitle} Freelance Tax & Hourly Rate Calculator`,
    description: `Calculate your hourly rate, project margin, and estimated self-employment taxes as a ${nicheTitle}.`,
    openGraph: {
      title: `${nicheTitle} Freelance Calculator`,
      description: `Tax, hourly-rate, and margin planning for ${nicheTitle}s.`,
      url: `https://example.com/calculator/${niche}`,
      type: "website",
    },
  };
}

export default async function CalculatorNichePage({
  params,
}: CalculatorNichePageProps) {
  const { niche } = await params;
  const nicheTitle = formatNiche(niche);
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: `${nicheTitle} Freelance Calculator Suite`,
    applicationCategory: "BusinessApplication",
    operatingSystem: "All",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    description: `Free financial planning calculators for ${nicheTitle}s.`,
  };

  return (
    <main className="min-h-screen px-4 py-8 sm:px-6 sm:py-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="mx-auto mb-8 w-full max-w-[1440px]">
        <p className="text-sm font-semibold text-cyan-300">Built for independent professionals</p>
        <h1 className="page-title mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
          {nicheTitle} financial planning
        </h1>
      </div>
      <div className="mx-auto flex w-full max-w-[1440px] flex-col gap-8 xl:flex-row xl:items-start">
        <div className="flex-1">
          <TaxCalculatorSuite />
          <AdBreakDivider />
        </div>
        <aside className="hidden shrink-0 xl:block">
          <SidebarAdSlot />
        </aside>
      </div>
    </main>
  );
}
