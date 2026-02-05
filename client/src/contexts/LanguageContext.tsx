import React, { createContext, useContext, useEffect, useState } from 'react';
import { useLocation } from 'wouter';
import { Language, getLanguageFromPath, isRTL } from '@/lib/i18n';
import { getTranslations, Translations } from '@/lib/translations';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Translations;
  isRTL: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [location] = useLocation();
  const [language, setLanguageState] = useState<Language>(() => getLanguageFromPath(location));
  const [t, setT] = useState<Translations>(() => getTranslations(language));

  useEffect(() => {
    const newLang = getLanguageFromPath(location);
    setLanguageState(newLang);
    setT(getTranslations(newLang));
    
    // Update document direction and lang attribute
    document.documentElement.dir = isRTL(newLang) ? 'rtl' : 'ltr';
    document.documentElement.lang = newLang;
  }, [location]);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    setT(getTranslations(lang));
    document.documentElement.dir = isRTL(lang) ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, isRTL: isRTL(language) }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
