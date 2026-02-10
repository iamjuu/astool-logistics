"use client";

import { createContext, useContext, useState, useEffect, useCallback } from "react";

const LANG_KEY = "astool-lang";
const defaultLang = "en";

const LanguageContext = createContext({
  language: defaultLang,
  setLanguage: () => {},
  t: (key) => key,
  dir: "ltr",
});

function getNested(obj, path) {
  return path.split(".").reduce((acc, part) => acc?.[part], obj);
}

export function LanguageProvider({ children }) {
  const [language, setLanguageState] = useState(defaultLang);
  const [translations, setTranslations] = useState({});

  useEffect(() => {
    const stored = typeof window !== "undefined" ? localStorage.getItem(LANG_KEY) : null;
    if (stored && ["en", "ar", "fr", "hi"].includes(stored)) {
      setLanguageState(stored);
    }
  }, []);

  useEffect(() => {
    let cancelled = false;
    async function load() {
      try {
        const mod = await import(`@/locales/${language}.json`);
        if (!cancelled) setTranslations(mod.default || mod);
      } catch {
        if (!cancelled) setTranslations({});
      }
    }
    load();
    return () => { cancelled = true; };
  }, [language]);

  const setLanguage = useCallback((lang) => {
    if (!["en", "ar", "fr", "hi"].includes(lang)) return;
    setLanguageState(lang);
    if (typeof window !== "undefined") {
      localStorage.setItem(LANG_KEY, lang);
      document.documentElement.lang = lang === "ar" ? "ar" : lang === "fr" ? "fr" : lang === "hi" ? "hi" : "en";
      document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
    }
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;
    document.documentElement.lang = language === "ar" ? "ar" : language === "fr" ? "fr" : language === "hi" ? "hi" : "en";
    document.documentElement.dir = language === "ar" ? "rtl" : "ltr";
  }, [language]);

  const t = useCallback(
    (key) => {
      const value = getNested(translations, key);
      return value != null ? value : key;
    },
    [translations]
  );

  const dir = language === "ar" ? "rtl" : "ltr";

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, dir }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
}
