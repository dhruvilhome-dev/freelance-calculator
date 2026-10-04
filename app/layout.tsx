import type { Metadata } from "next";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import Header from "../components/Header";
import { Footer } from "../components/Footer";
import ThemeToggle from "../components/theme/ThemeToggle";
import CookieConsent from "../components/CookieConsent";

const themeBootstrapScript = `
  (() => {
    const storageKey = "freelance-calculator-theme";
    const savedPreference = localStorage.getItem(storageKey);
    const preference = ["light", "dark", "system"].includes(savedPreference) ? savedPreference : "system";
    const theme = preference === "system"
      ? (matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light")
      : preference;
    document.documentElement.dataset.theme = theme;
    document.documentElement.dataset.themePreference = preference;
    document.documentElement.style.colorScheme = theme;
  })();
`;

export const metadata: Metadata = {
  title: {
    default: "Freelance Tax & Hourly Rate Calculator Suite | Financial Planning for Independent Contractors",
    template: "%s | Freelance Tax Calculator Suite",
  },
  description: "Calculate your estimated 1099 self-employment tax, federal income brackets, state tax, required billable hourly rate, and project margins with precision.",
  metadataBase: new URL("https://www.freelancecalcsuite.online"),
  keywords: [
    "freelance tax calculator",
    "1099 self employment tax calculator",
    "hourly rate calculator",
    "freelance pricing formula",
    "schedule C write offs",
    "quarterly estimated taxes 1040-ES",
    "freelance project margin",
  ],
  authors: [{ name: "Dhruvil Patel, Lead Developer & Financial Modeling Specialist" }],
  openGraph: {
    title: "Freelance Tax & Hourly Rate Calculator Suite",
    description: "Free tax estimation, hourly rate modeling, and project margin planning for US freelancers and contractors.",
    url: "https://www.freelancecalcsuite.online",
    siteName: "Freelance Tax Suite",
    locale: "en_US",
    type: "website",
  },
  other: {
    "google-adsense-account": "ca-pub-7576250688959009",
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Freelance Tax Suite",
  url: "https://www.freelancecalcsuite.online",
  logo: "https://www.freelancecalcsuite.online/icon.png",
  description:
    "Independent financial modeling platform providing tax calculations, hourly rate modeling, and Schedule C planning tools for 1099 freelancers.",
  founder: {
    "@type": "Person",
    name: "Dhruvil Patel",
    jobTitle: "Founder & Lead Software Engineer",
    url: "https://www.freelancecalcsuite.online/about",
  },
  contactPoint: {
    "@type": "ContactPoint",
    email: "support@freelancecalcsuite.online",
    contactType: "customer support",
  },
  sameAs: [
    "https://github.com/dhruvilhome-dev/freelance-calculator",
  ],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Freelance Tax Suite",
  url: "https://www.freelancecalcsuite.online",
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: "https://www.freelancecalcsuite.online/guides?q={search_term_string}",
    },
    "query-input": "required name=search_term_string",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeBootstrapScript }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        {/* Google AdSense official script tag for automated review verification */}
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7576250688959009"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
      </head>
      <body className="flex min-h-screen flex-col antialiased bg-[var(--background)] text-[var(--foreground)] selection:bg-cyan-500/20 selection:text-cyan-200">
        <Header />
        <main className="flex-1 page-content">
          {children}
        </main>
        <Footer />
        <ThemeToggle />
        {/* Cookie consent banner — user privacy & essential compliance */}
        <CookieConsent />
        {/* Vercel Web Analytics */}
        <Analytics />
      </body>
    </html>
  );
}