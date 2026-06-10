import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import { en } from './locales/en'
import { de } from './locales/de'

export const SUPPORTED = ['de', 'en'] as const
export type Lang = (typeof SUPPORTED)[number]

export function isLang(x: string | undefined): x is Lang {
  return !!x && (SUPPORTED as readonly string[]).includes(x)
}

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      de: { translation: de },
    },
    fallbackLng: 'de',
    supportedLngs: SUPPORTED as unknown as string[],
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage'],
    },
    interpolation: { escapeValue: false },
  })

export default i18n
