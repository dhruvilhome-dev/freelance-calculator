export default function SidebarAdSlot() {
  return (
    <div className="my-4 flex w-full justify-center">
      {/* 
        Strict dimensions for 300x600 Half Page (Large Skyscraper) ad to prevent CLS.
      */}
      <div 
        className="ad-slot relative flex items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-slate-800/80 shadow-xl shadow-slate-950/20
                   min-w-[300px] min-h-[600px] w-[300px] h-[600px]"
      >
        {/* Skeleton State */}
        <div className="absolute inset-0 animate-pulse bg-slate-700/40" />

        <span className="relative z-0 text-xs font-medium uppercase tracking-[0.18em] text-slate-500">
          Advertisement
        </span>

        {/* AdSense Container */}
        <div className="absolute inset-0 z-10 flex items-center justify-center" id="sidebar-ad-slot">
            {/* 
              <ins className="adsbygoogle"
                   style={{ display: 'inline-block', width: '300px', height: '600px' }}
                   data-ad-client="ca-pub-XXXXXX"
                   data-ad-slot="XXXXXX"></ins>
            */}
        </div>
      </div>
    </div>
  );
}
