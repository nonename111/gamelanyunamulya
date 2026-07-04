"use client";

import * as React from "react";

import type { Language } from "@/lib/utils";

interface LanguageContextValue {
  language: Language;
  toggleLanguage: () => void;
}

const LanguageContext = React.createContext<LanguageContextValue | undefined>(
  undefined
);

export function LanguageProvider({
  children
}: {
  children: React.ReactNode;
}) {
  const [language, setLanguage] = React.useState<Language>("id");

  const toggleLanguage = React.useCallback(() => {
    setLanguage((current) => (current === "id" ? "en" : "id"));
  }, []);

  const value = React.useMemo(
    () => ({
      language,
      toggleLanguage
    }),
    [language, toggleLanguage]
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = React.useContext(LanguageContext);

  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }

  return context;
}
