import type { Metadata } from "next";
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
  authors: [{ name: "Freelance Tax Suite Editorial Team" }],
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeBootstrapScript }} />
      </head>
      <body className="flex min-h-screen flex-col antialiased bg-[var(--background)] text-[var(--foreground)] selection:bg-cyan-500/20 selection:text-cyan-200">
        <Header />
        <main className="flex-1 page-content">
          {children}
        </main>
        <Footer />
        <ThemeToggle />
        {/* Cookie consent banner — AdSense script loads inside this component only after user grants consent */}
        <CookieConsent />
      </body>
    </html>
  );
}