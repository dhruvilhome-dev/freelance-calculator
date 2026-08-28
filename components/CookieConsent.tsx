"use client";

import { useState, useEffect } from "react";
import Script from "next/script";

const CONSENT_KEY = "fcs-cookie-consent";

type ConsentState = "granted" | "denied" | null;

export default function CookieConsent() {
  const [consent, setConsent] = useState<ConsentState>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(CONSENT_KEY) as ConsentState | null;
    if (stored === "granted" || stored === "denied") {
      setConsent(stored);
    } else {
      // Show banner after a short delay so it doesn't flash on first paint
      const t = setTimeout(() => setVisible(true), 800);
      return () => clearTimeout(t);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem(CONSENT_KEY, "granted");
    setConsent("granted");
    setVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem(CONSENT_KEY, "denied");
    setConsent("denied");
    setVisible(false);
  };

  return (
    <>
      {/* Load AdSense only after explicit user consent */}
      {consent === "granted" && (
        <Script
          async
          src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${process.env.NEXT_PUBLIC_ADSENSE_CLIENT_ID || "ca-pub-7576250688959009"}`}
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
      )}

      {/* Cookie Banner */}
      {visible && (
        <div
          role="dialog"
          aria-modal="false"
          aria-label="Cookie consent"
          className="fixed bottom-0 left-0 right-0 z-50 border-t border-white/10 bg-slate-950/95 backdrop-blur-md px-4 py-5 shadow-2xl"
        >
          <div className="mx-auto flex max-w-5xl flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="space-y-1.5 flex-1">
              <p className="text-xs font-bold text-white">
                We use cookies to personalise ads and analyse traffic
              </p>
              <p className="text-[11px] leading-relaxed text-slate-400 max-w-2xl">
                This site uses Google AdSense, which may use cookies and web
                beacons to serve personalised advertisements based on your
                browsing history. By clicking{" "}
                <strong className="text-slate-200">&ldquo;Accept&rdquo;</strong>{" "}
                you consent to this use. You can opt out of personalised ads at
                any time via{" "}
                <a
                  href="https://adssettings.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-400 underline hover:text-cyan-300"
                >
                  Google&apos;s Ad Settings
                </a>
                . See our{" "}
                <a href="/privacy" className="text-cyan-400 underline hover:text-cyan-300">
                  Privacy Policy
                </a>{" "}
                for full details.
              </p>
            </div>
            <div className="flex shrink-0 items-center gap-3">
              <button
                type="button"
                onClick={handleDecline}
                className="rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold text-slate-300 hover:bg-white/10 transition-colors"
              >
                Decline
              </button>
              <button
                type="button"
                onClick={handleAccept}
                className="rounded-xl bg-cyan-400 px-5 py-2 text-xs font-bold text-slate-950 hover:bg-cyan-300 transition-colors shadow-lg shadow-cyan-950/40"
              >
                Accept All Cookies
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
