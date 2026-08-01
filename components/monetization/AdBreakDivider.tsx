export default function AdBreakDivider() {
  return (
    <div className="my-10 flex w-full justify-center">
      {/* 
        Strict dimensions for Leaderboard ad to prevent CLS.
        Mobile: 320x50 | Desktop: 728x90
      */}
      <div 
        className="ad-slot relative flex items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-slate-800/80 shadow-xl shadow-slate-950/20
                   min-w-[320px] min-h-[50px] w-[320px] h-[50px]
                   md:min-w-[728px] md:min-h-[90px] md:w-[728px] md:h-[90px]"
      >
        {/* Skeleton State */}
        <div className="absolute inset-0 animate-pulse bg-slate-700/40" />
        
        <span className="relative z-0 text-xs font-medium uppercase tracking-[0.18em] text-slate-500">
          Advertisement
        </span>

        {/* AdSense Container */}
        <div className="absolute inset-0 z-10 flex items-center justify-center" id="ad-break-divider-slot">
            {/* 
              <ins className="adsbygoogle hidden md:inline-block"
                   style={{ display: 'inline-block', width: '728px', height: '90px' }}
                   data-ad-client="ca-pub-XXXXXX"
                   data-ad-slot="XXXXXX"></ins>
              <ins className="adsbygoogle inline-block md:hidden"
                   style={{ display: 'inline-block', width: '320px', height: '50px' }}
                   data-ad-client="ca-pub-XXXXXX"
                   data-ad-slot="XXXXXX"></ins>
            */}
        </div>
      </div>
    </div>
  );
}
