"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full border-b border-white/10 bg-slate-950/85 backdrop-blur-md transition-colors">
      <div className="mx-auto flex max-w-[1440px] items-center justify-between px-4 py-3.5 sm:px-6">
        
        {/* Brand Logo */}
        <Link 
          href="/" 
          className="group flex items-center gap-2.5 text-decoration-none focus:outline-none"
        >
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-400 to-blue-600 shadow-md shadow-cyan-500/20 group-hover:scale-105 transition-transform">
            <svg 
              className="h-5 w-5 text-slate-950" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
              strokeWidth="2.5"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
            </svg>
          </div>
          <div className="flex flex-col">
            <span className="text-base font-bold tracking-tight text-white group-hover:text-cyan-300 transition-colors">
              Freelance Calc Suite
            </span>
            <span className="text-[10px] font-medium uppercase tracking-wider text-slate-400">
              Tax & Rate Intelligence
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-6 text-sm font-semibold text-slate-300 md:flex">
          <Link 
            href="/" 
            className="hover:text-cyan-300 transition-colors py-1 focus:outline-none"
          >
            Calculator
          </Link>
          <div className="relative group">
            <button 
              type="button"
              className="flex items-center gap-1 hover:text-cyan-300 transition-colors py-1 focus:outline-none"
            >
              <span>Niche Calculators</span>
              <svg className="h-3.5 w-3.5 text-slate-400 group-hover:text-cyan-300 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div className="invisible absolute left-0 top-full mt-2 w-56 rounded-2xl border border-white/10 bg-slate-900/95 p-2 shadow-2xl backdrop-blur-md opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-150 z-50">
              <Link href="/calculator/software-engineer" className="block rounded-xl px-3 py-2 text-xs font-medium text-slate-300 hover:bg-white/5 hover:text-cyan-300">Software Engineers</Link>
              <Link href="/calculator/graphic-designer" className="block rounded-xl px-3 py-2 text-xs font-medium text-slate-300 hover:bg-white/5 hover:text-cyan-300">Graphic Designers</Link>
              <Link href="/calculator/consultant" className="block rounded-xl px-3 py-2 text-xs font-medium text-slate-300 hover:bg-white/5 hover:text-cyan-300">Consultants</Link>
              <Link href="/calculator/copywriter" className="block rounded-xl px-3 py-2 text-xs font-medium text-slate-300 hover:bg-white/5 hover:text-cyan-300">Copywriters</Link>
              <Link href="/calculator/digital-marketer" className="block rounded-xl px-3 py-2 text-xs font-medium text-slate-300 hover:bg-white/5 hover:text-cyan-300">Digital Marketers</Link>
              <div className="my-1 border-t border-white/10" />
              <Link href="/calculator/california-freelance" className="block rounded-xl px-3 py-2 text-xs font-medium text-amber-300/90 hover:bg-white/5 hover:text-amber-200">California Freelancers</Link>
              <Link href="/calculator/texas-freelance" className="block rounded-xl px-3 py-2 text-xs font-medium text-amber-300/90 hover:bg-white/5 hover:text-amber-200">Texas Freelancers</Link>
            </div>
          </div>
          <Link 
            href="/guides" 
            className="hover:text-cyan-300 transition-colors py-1 focus:outline-none"
          >
            Guides & Articles
          </Link>
          <Link 
            href="/about" 
            className="hover:text-cyan-300 transition-colors py-1 focus:outline-none"
          >
            Methodology & About
          </Link>
          <Link 
            href="/contact" 
            className="hover:text-cyan-300 transition-colors py-1 focus:outline-none"
          >
            Contact
          </Link>
        </nav>

        {/* Action Button */}
        <div className="hidden items-center gap-3 sm:flex">
          <Link
            href="/guides/quarterly-estimated-taxes"
            className="rounded-xl border border-cyan-400/30 bg-cyan-500/10 px-3.5 py-1.5 text-xs font-semibold text-cyan-300 hover:bg-cyan-500/20 transition-all focus:outline-none focus:ring-2 focus:ring-cyan-400/20"
          >
            2025–2026 Tax Deadlines
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-slate-300 hover:bg-white/10 md:hidden"
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? (
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {mobileMenuOpen && (
        <div className="border-b border-white/10 bg-slate-950 px-4 py-4 md:hidden">
          <nav className="flex flex-col gap-3 text-sm font-semibold text-slate-300">
            <Link 
              href="/" 
              onClick={() => setMobileMenuOpen(false)}
              className="rounded-lg px-3 py-2 hover:bg-white/5 hover:text-cyan-300"
            >
              Tax & Rate Calculator
            </Link>
            <Link 
              href="/guides" 
              onClick={() => setMobileMenuOpen(false)}
              className="rounded-lg px-3 py-2 hover:bg-white/5 hover:text-cyan-300"
            >
              Freelance Tax Guides
            </Link>
            <div className="px-3 py-1 text-xs font-bold uppercase tracking-wider text-slate-500">
              Niche Calculators
            </div>
            <div className="grid grid-cols-2 gap-1 pl-2">
              <Link 
                href="/calculator/software-engineer" 
                onClick={() => setMobileMenuOpen(false)}
                className="rounded-lg px-2 py-1.5 text-xs text-slate-400 hover:text-cyan-300"
              >
                Software Engineer
              </Link>
              <Link 
                href="/calculator/graphic-designer" 
                onClick={() => setMobileMenuOpen(false)}
                className="rounded-lg px-2 py-1.5 text-xs text-slate-400 hover:text-cyan-300"
              >
                Graphic Designer
              </Link>
              <Link 
                href="/calculator/consultant" 
                onClick={() => setMobileMenuOpen(false)}
                className="rounded-lg px-2 py-1.5 text-xs text-slate-400 hover:text-cyan-300"
              >
                Consultant
              </Link>
              <Link 
                href="/calculator/copywriter" 
                onClick={() => setMobileMenuOpen(false)}
                className="rounded-lg px-2 py-1.5 text-xs text-slate-400 hover:text-cyan-300"
              >
                Copywriter
              </Link>
              <Link 
                href="/calculator/digital-marketer" 
                onClick={() => setMobileMenuOpen(false)}
                className="rounded-lg px-2 py-1.5 text-xs text-slate-400 hover:text-cyan-300"
              >
                Digital Marketer
              </Link>
              <Link 
                href="/calculator/california-freelance" 
                onClick={() => setMobileMenuOpen(false)}
                className="rounded-lg px-2 py-1.5 text-xs text-amber-300/80 hover:text-amber-200"
              >
                California Freelance
              </Link>
              <Link 
                href="/calculator/texas-freelance" 
                onClick={() => setMobileMenuOpen(false)}
                className="rounded-lg px-2 py-1.5 text-xs text-amber-300/80 hover:text-amber-200"
              >
                Texas Freelance
              </Link>
            </div>
            <div className="my-1 border-t border-white/10" />
            <Link 
              href="/about" 
              onClick={() => setMobileMenuOpen(false)}
              className="rounded-lg px-3 py-2 hover:bg-white/5 hover:text-cyan-300"
            >
              About & Methodology
            </Link>
            <Link 
              href="/contact" 
              onClick={() => setMobileMenuOpen(false)}
              className="rounded-lg px-3 py-2 hover:bg-white/5 hover:text-cyan-300"
            >
              Contact Support
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
