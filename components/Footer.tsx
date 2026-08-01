import Link from "next/link";

export function Footer() {
  return (
    <footer className="w-full border-t border-white/10 bg-slate-950/80 py-10 text-slate-400 backdrop-blur">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-4 sm:flex-row sm:px-6">
        
        {/* Brand & Copyright */}
        <div className="flex flex-col items-center gap-2 sm:items-start">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-cyan-400 shadow-sm shadow-cyan-400/50" />
            <span className="text-sm font-bold tracking-tight text-white">
              Freelance Tax Suite
            </span>
          </div>
          <p className="text-xs text-slate-500">
            © {new Date().getFullYear()} All rights reserved. Calculations are estimates only.
          </p>
        </div>

        {/* AdSense Required Legal Pages */}
        <div className="flex flex-wrap items-center justify-center gap-6 text-xs font-semibold text-slate-400">
          <Link 
            href="/privacy" 
            className="transition-colors hover:text-cyan-300 focus:outline-none focus:ring-2 focus:ring-cyan-400/20"
          >
            Privacy Policy
          </Link>
          <Link 
            href="/terms" 
            className="transition-colors hover:text-cyan-300 focus:outline-none focus:ring-2 focus:ring-cyan-400/20"
          >
            Terms of Service
          </Link>
          <Link 
            href="/disclaimer" 
            className="transition-colors hover:text-cyan-300 focus:outline-none focus:ring-2 focus:ring-cyan-400/20"
          >
            Financial Disclaimer
          </Link>
        </div>

      </div>
    </footer>
  );
}