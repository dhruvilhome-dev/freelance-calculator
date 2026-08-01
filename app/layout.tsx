import type { Metadata } from "next";
import "./globals.css";
import { Footer } from "../components/Footer";
import ThemeToggle from "../components/theme/ThemeToggle";

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
  title: "Freelance Tax & Hourly Rate Calculator Suite",
  description: "A focused tax, hourly rate, and project margin calculator for freelancers.",
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
      <body className="flex min-h-screen flex-col antialiased bg-[var(--background)] text-[var(--foreground)]">
        <main className="flex-1 py-8 px-4 sm:px-6">
          {children}
        </main>
        <Footer />
        <ThemeToggle />
      </body>
    </html>
  );
}
