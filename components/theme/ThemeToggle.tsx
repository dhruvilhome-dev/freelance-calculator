"use client";

import { useEffect, useSyncExternalStore } from "react";

type ThemePreference = "light" | "dark" | "system";

const STORAGE_KEY = "freelance-calculator-theme";
const THEME_CHANGE_EVENT = "freelance-calculator-theme-change";

function getPreference(): ThemePreference {
  const savedPreference = window.localStorage.getItem(STORAGE_KEY);
  return savedPreference === "light" || savedPreference === "dark" || savedPreference === "system"
    ? savedPreference
    : "system";
}

function subscribeToThemePreference(onStoreChange: () => void): () => void {
  window.addEventListener(THEME_CHANGE_EVENT, onStoreChange);
  return () => window.removeEventListener(THEME_CHANGE_EVENT, onStoreChange);
}

function resolveTheme(preference: ThemePreference): "light" | "dark" {
  if (preference !== "system") return preference;

  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

function applyTheme(preference: ThemePreference): void {
  const resolvedTheme = resolveTheme(preference);
  document.documentElement.dataset.theme = resolvedTheme;
  document.documentElement.dataset.themePreference = preference;
  document.documentElement.style.colorScheme = resolvedTheme;
}

export default function ThemeToggle() {
  const preference = useSyncExternalStore(
    subscribeToThemePreference,
    getPreference,
    () => "system",
  );

  useEffect(() => {
    applyTheme(getPreference());

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleSystemThemeChange = () => {
      if (document.documentElement.dataset.themePreference === "system") {
        applyTheme("system");
      }
    };

    mediaQuery.addEventListener("change", handleSystemThemeChange);
    return () => mediaQuery.removeEventListener("change", handleSystemThemeChange);
  }, []);

  const updatePreference = (nextPreference: ThemePreference) => {
    window.localStorage.setItem(STORAGE_KEY, nextPreference);
    applyTheme(nextPreference);
    window.dispatchEvent(new Event(THEME_CHANGE_EVENT));
  };

  return (
    <div className="theme-toggle fixed bottom-4 right-4 z-50 flex items-center gap-1 rounded-2xl border p-1.5 shadow-xl backdrop-blur sm:bottom-6 sm:right-6" role="group" aria-label="Color theme">
      {(["light", "system", "dark"] as const).map((option) => (
        <button
          key={option}
          aria-pressed={preference === option}
          className={`rounded-xl px-3 py-2 text-xs font-bold capitalize transition ${
            preference === option ? "theme-toggle-active" : "theme-toggle-option"
          }`}
          type="button"
          onClick={() => updatePreference(option)}
        >
          {option}
        </button>
      ))}
    </div>
  );
}
