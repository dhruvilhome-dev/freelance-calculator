import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4 py-16 sm:px-6">
      <div className="mx-auto max-w-md text-center space-y-6">
        <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-cyan-400/10 border border-cyan-400/20 text-2xl font-black text-cyan-400">
          404
        </div>
        <h1 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
          Page Not Found
        </h1>
        <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
          The calculation model or guide you are looking for doesn&apos;t exist or has moved. Explore our main tools below.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
          <Link
            href="/"
            className="w-full sm:w-auto rounded-xl bg-cyan-400 px-5 py-2.5 text-xs font-bold text-slate-950 hover:bg-cyan-300 transition-colors"
          >
            Launch Tax Calculator &rarr;
          </Link>
          <Link
            href="/guides"
            className="w-full sm:w-auto rounded-xl border border-white/10 bg-white/5 px-5 py-2.5 text-xs font-semibold text-slate-300 hover:bg-white/10 transition-colors"
          >
            Browse Guides
          </Link>
        </div>
      </div>
    </div>
  );
}
