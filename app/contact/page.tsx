"use client";

import Link from "next/link";
import { useState } from "react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "calculator-feedback",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen px-4 py-12 sm:px-6">
      <div className="mx-auto max-w-3xl space-y-10">
        
        {/* Header */}
        <div className="border-b border-white/10 pb-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3.5 py-1 text-xs font-semibold text-cyan-300">
            <span>Support & Inquiries</span>
          </div>
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Contact Our Team
          </h1>
          <p className="mt-3 text-base text-slate-300 leading-relaxed">
            Have questions about our calculation models, feedback on the user interface, or suggestions for additional niche calculators? We would love to hear from you.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          
          {/* Contact Details Card */}
          <div className="rounded-3xl border border-white/10 bg-slate-900/80 p-6 space-y-6 md:col-span-1">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Direct Inquiries</span>
              <p className="mt-2 text-sm font-semibold text-white">support@freelancecalcsuite.online</p>
            </div>

            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Response Time</span>
              <p className="mt-1 text-xs text-slate-300 leading-relaxed">
                Our editorial and technical team typically replies within <strong>24 to 48 business hours</strong>.
              </p>
            </div>

            <div className="border-t border-white/10 pt-4">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Quick Links</span>
              <ul className="mt-2 space-y-1.5 text-xs text-cyan-400">
                <li><Link href="/about" className="hover:underline">Calculation Methodology</Link></li>
                <li><Link href="/guides/quarterly-estimated-taxes" className="hover:underline">Quarterly Tax Guide</Link></li>
                <li><Link href="/privacy" className="hover:underline">Privacy Policy</Link></li>
              </ul>
            </div>
          </div>

          {/* Contact Form Card */}
          <div className="rounded-3xl border border-white/10 bg-slate-900/80 p-6 sm:p-8 md:col-span-2">
            {submitted ? (
              <div className="rounded-2xl border border-emerald-500/30 bg-emerald-950/30 p-8 text-center space-y-3">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-white">Thank You for Your Feedback!</h3>
                <p className="text-xs text-slate-300 max-w-sm mx-auto">
                  Your message has been received. If your inquiry requires a response, our support team will reach out to <strong>{formData.email}</strong> shortly.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({ name: "", email: "", subject: "calculator-feedback", message: "" });
                  }}
                  className="mt-4 inline-block rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold text-slate-200 hover:bg-white/10"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="contact-name" className="block text-xs font-semibold uppercase tracking-wider text-slate-300">
                    Your Name
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Jane Doe"
                    className="mt-1.5 w-full rounded-xl border border-slate-700 bg-slate-950 px-3.5 py-2.5 text-sm text-slate-100 placeholder:text-slate-600 focus:border-cyan-400 focus:outline-none focus:ring-4 focus:ring-cyan-400/10"
                  />
                </div>

                <div>
                  <label htmlFor="contact-email" className="block text-xs font-semibold uppercase tracking-wider text-slate-300">
                    Email Address
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="jane@example.com"
                    className="mt-1.5 w-full rounded-xl border border-slate-700 bg-slate-950 px-3.5 py-2.5 text-sm text-slate-100 placeholder:text-slate-600 focus:border-cyan-400 focus:outline-none focus:ring-4 focus:ring-cyan-400/10"
                  />
                </div>

                <div>
                  <label htmlFor="contact-subject" className="block text-xs font-semibold uppercase tracking-wider text-slate-300">
                    Topic / Category
                  </label>
                  <select
                    id="contact-subject"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="mt-1.5 w-full rounded-xl border border-slate-700 bg-slate-950 px-3.5 py-2.5 text-sm text-slate-100 focus:border-cyan-400 focus:outline-none focus:ring-4 focus:ring-cyan-400/10"
                  >
                    <option value="calculator-feedback">Calculator Feedback & Bug Report</option>
                    <option value="tax-methodology">Tax Formula & Methodology Question</option>
                    <option value="feature-request">Request a New Niche or State Calculator</option>
                    <option value="partnership">Partnership or Editorial Inquiry</option>
                    <option value="general">General Support</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="contact-message" className="block text-xs font-semibold uppercase tracking-wider text-slate-300">
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="How can we help you?"
                    className="mt-1.5 w-full rounded-xl border border-slate-700 bg-slate-950 px-3.5 py-2.5 text-sm text-slate-100 placeholder:text-slate-600 focus:border-cyan-400 focus:outline-none focus:ring-4 focus:ring-cyan-400/10"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full rounded-xl bg-cyan-400 py-3 text-xs font-bold text-slate-950 hover:bg-cyan-300 transition-colors shadow-lg shadow-cyan-950/50"
                >
                  Submit Inquiry &rarr;
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </div>
  );
}
