import TaxCalculatorSuite from '@/components/calculators/TaxCalculatorSuite';
import AdBreakDivider from '@/components/monetization/AdBreakDivider';
import SidebarAdSlot from '@/components/monetization/SidebarAdSlot';

export default function Home() {
  return (
    <main className="min-h-screen px-4 py-8 sm:px-6 sm:py-12">
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
