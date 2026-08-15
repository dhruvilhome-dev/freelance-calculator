import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Terms of Service | Freelance Tax Calculator Suite',
  description: 'Terms and conditions governing the use of our freelance financial calculators.',
  alternates: {
    canonical: 'https://www.freelancecalcsuite.online/terms',
  },
};

export default function TermsPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-12 text-slate-300">
      <Link 
        href="/" 
        className="inline-flex items-center gap-2 mb-8 text-xs font-semibold text-cyan-400 no-underline hover:text-cyan-300 transition-colors"
      >
        <span>&larr;</span> Back to Calculator
      </Link>
      
      <div className="border-b border-white/10 pb-6 mb-8">
        <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Terms of Service</h1>
        <p className="mt-2 text-xs text-slate-400">Last updated: August 15, 2026</p>
      </div>

      <div className="space-y-8 text-sm leading-relaxed">
        <section className="space-y-3">
          <h2 className="text-xl font-bold text-white">1. Acceptance of Terms</h2>
          <p>
            By accessing or using this web application (the &quot;Service&quot;), you agree to be bound by these 
            Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, 
            you are prohibited from using or accessing this site.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-white">2. Intellectual Property Rights</h2>
          <p>
            The source code, user interface designs, mathematical logic workflows, branding, and text content contained 
            within this application are the intellectual property of the operators and are protected by applicable 
            copyright and trademark laws.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-white">3. Permitted & Prohibited Uses</h2>
          <p>You are granted a limited license to access and use the Service for personal or professional calculation purposes. You agree NOT to:</p>
          <ul className="list-disc pl-5 space-y-1.5 text-xs text-slate-400">
            <li>Scrape, reverse engineer, or extract software code from the Service without prior written authorization.</li>
            <li>Attempt to interfere with the network infrastructure, server responsiveness, or ad serving mechanisms.</li>
            <li>Automate queries or submit artificial traffic requests to manipulate ad impression volumes.</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-white">4. Service Modifications & Availability</h2>
          <p>
            We reserve the right to modify, update, or discontinue any aspect of the Service (including specific 
            calculators or programmatic routes) at any time without prior notice. We do not guarantee uninterrupted 
            uptime or bug-free operation.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-white">5. Governing Law</h2>
          <p>
            These Terms shall be governed and construed in accordance with applicable laws, without regard to its 
            conflict of law provisions.
          </p>
        </section>
      </div>
    </main>
  );
}