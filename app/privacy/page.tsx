import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Privacy Policy | Freelance Tax Calculator Suite',
  description: 'Learn how we collect, process, and protect your data on our web application.',
};

export default function PrivacyPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-12 prose dark:prose-invert">
      <Link 
        href="/" 
        className="inline-flex items-center gap-2 mb-8 text-sm font-semibold text-cyan-400 no-underline hover:text-cyan-300 transition-colors"
      >
        <span>&larr;</span> Back to Calculator
      </Link>
      <h1>Privacy Policy</h1>
      <p className="text-sm text-gray-500">Last updated: August 1, 2026</p>

      <h2>1. Client-Side Data Processing</h2>
      <p>
        We prioritize your financial privacy. All monetary figures, revenue numbers, expense inputs, and hours 
        entered into our calculators are processed locally within your web browser using client-side 
        JavaScript. We do not transmit, store, or save your sensitive financial calculation data on external 
        servers or backend databases.
      </p>

      <h2>2. Third-Party Advertising & Cookies</h2>
      <p>
        This website uses Google AdSense and third-party advertising partners to serve ads when you visit our 
        web application. These companies may use cookies, web beacons, and similar tracking technologies 
        to collect non-personally identifiable information (such as your IP address, browser type, and click 
        patterns) to serve tailored advertisements based on your visits to this and other sites.
      </p>
      <ul>
        <li>
          Third-party vendors, including Google, use cookies to serve ads based on a user&apos;s prior visits 
          to your website or other websites.
        </li>
        <li>
          Google&apos;s use of advertising cookies enables it and its partners to serve ads to users based on 
          their visit to your sites and/or other sites on the Internet.
        </li>
        <li>
          Users may opt out of personalized advertising by visiting Google&apos;s Ads Settings page or 
          aboutads.info.
        </li>
      </ul>

      <h2>3. Analytics</h2>
      <p>
        We may use privacy-focused analytics tools to measure website traffic, page view volumes, and performance 
        metrics. This aggregate technical data helps us improve user interface layouts, page load speeds, and 
        Core Web Vitals.
      </p>

      <h2>4. Changes to This Privacy Policy</h2>
      <p>
        We reserve the right to update or modify this Privacy Policy at any time. Any changes will be posted 
        directly on this page with an updated timestamp.
      </p>
    </main>
  );
}