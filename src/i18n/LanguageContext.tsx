import { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { translations, type Lang } from './translations';

type Ctx = {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: typeof translations.ja;
};

const LanguageContext = createContext<Ctx | null>(null);

const STORAGE_KEY = 'miyakosoba.lang';

function detectInitial(): Lang {
  if (typeof window === 'undefined') return 'ja';
  const stored = window.localStorage.getItem(STORAGE_KEY);
  if (stored === 'ja' || stored === 'en') return stored;
  const nav = window.navigator.language?.toLowerCase() ?? '';
  return nav.startsWith('en') ? 'en' : 'ja';
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(detectInitial);

  useEffect(() => {
    document.documentElement.lang = lang;
    window.localStorage.setItem(STORAGE_KEY, lang);
  }, [lang]);

  const setLang = (l: Lang) => setLangState(l);

  return (
    <LanguageContext.Provider value={{ lang, setLang, t: translations[lang] }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useT() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useT must be used inside LanguageProvider');
  return ctx;
}
