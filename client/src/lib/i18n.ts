// Bilingual i18n configuration for Arabic and English
export type Language = 'ar' | 'en';

export const languages: Language[] = ['ar', 'en'];

export const defaultLanguage: Language = 'en';

export function getLanguageFromPath(path: string): Language {
  const segments = path.split('/').filter(Boolean);
  const firstSegment = segments[0];
  
  if (firstSegment === 'ar' || firstSegment === 'en') {
    return firstSegment as Language;
  }
  
  return defaultLanguage;
}

export function getPathWithoutLanguage(path: string): string {
  const segments = path.split('/').filter(Boolean);
  const firstSegment = segments[0];
  
  if (firstSegment === 'ar' || firstSegment === 'en') {
    return '/' + segments.slice(1).join('/');
  }
  
  return path;
}

export function getLocalizedPath(path: string, lang: Language): string {
  const pathWithoutLang = getPathWithoutLanguage(path);
  return `/${lang}${pathWithoutLang}`;
}

export function isRTL(lang: Language): boolean {
  return lang === 'ar';
}
