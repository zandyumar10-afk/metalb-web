"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { dict, type Dict, type Lang, LANGS } from "@/lib/i18n";

type I18nContextValue = {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: Dict;
};

const I18nContext = createContext<I18nContextValue | null>(null);

const STORAGE_KEY = "metalab-lang";

export function I18nProvider({ children }: { children: React.ReactNode }) {
  // Server and first client render share the same default ("id") — no
  // hydration mismatch. After mount we read localStorage and re-render if
  // a stored preference differs.
  const [lang, setLangState] = useState<Lang>("id");

  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY) as Lang | null;
      if (stored && LANGS.includes(stored)) setLangState(stored);
    } catch {
      /* ignore */
    }
  }, []);

  useEffect(() => {
    if (typeof document !== "undefined") {
      document.documentElement.lang = lang;
    }
  }, [lang]);

  const setLang = useCallback((l: Lang) => {
    setLangState(l);
    try {
      localStorage.setItem(STORAGE_KEY, l);
    } catch {
      /* ignore */
    }
  }, []);

  const value = useMemo<I18nContextValue>(
    () => ({ lang, setLang, t: dict[lang] }),
    [lang, setLang],
  );

  return (
    <I18nContext.Provider value={value}>{children}</I18nContext.Provider>
  );
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used within I18nProvider");
  return ctx;
}

export function useT() {
  return useI18n().t;
}

export function useLang() {
  return useI18n().lang;
}
