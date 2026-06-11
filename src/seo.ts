import { SUPPORTED, type Lang } from './i18n'

/** Public site origin — used for canonical + hreflang + OG links. */
const ORIGIN = 'https://luumos.ch'

const META: Record<Lang, { title: string; description: string; ogLocale: string }> = {
  de: {
    title: 'Luumos — KI-Automatisierung für Schweizer Unternehmen',
    description:
      'Schweizer Beratung für KI-Automatisierung & Prozessautomatisierung: Wir automatisieren Geschäftsprozesse und bauen massgeschneiderte KI-Agenten – für KMU und anspruchsvolle Dienstleistungsteams.',
    ogLocale: 'de_CH',
  },
  en: {
    title: 'Luumos — AI & automation for your operations',
    description:
      'Luumos is a Swiss AI & automation consultancy. We connect the tools you already run, automate the busywork between them, and build custom AI agents.',
    ogLocale: 'en_US',
  },
}

function upsertLink(key: string, attrs: Record<string, string>) {
  let el = document.head.querySelector<HTMLLinkElement>(`link[data-seo="${key}"]`)
  if (!el) {
    el = document.createElement('link')
    el.dataset.seo = key
    document.head.appendChild(el)
  }
  for (const [k, v] of Object.entries(attrs)) el.setAttribute(k, v)
}

/** Update (or create) a meta tag in place by its name/property — avoids duplicates. */
function setMeta(attr: 'name' | 'property', key: string, content: string) {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(attr, key)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

/** Set <html lang>, title, description, canonical, hreflang and OG/Twitter for the active locale. */
export function applyLocaleHead(lang: Lang) {
  const m = META[lang]
  document.documentElement.lang = lang
  document.title = m.title

  setMeta('name', 'description', m.description)
  setMeta('property', 'og:title', m.title)
  setMeta('property', 'og:description', m.description)
  setMeta('property', 'og:url', `${ORIGIN}/${lang}`)
  setMeta('property', 'og:locale', m.ogLocale)
  setMeta('name', 'twitter:title', m.title)
  setMeta('name', 'twitter:description', m.description)

  upsertLink('canonical', { rel: 'canonical', href: `${ORIGIN}/${lang}` })
  for (const l of SUPPORTED) {
    upsertLink(`alt-${l}`, { rel: 'alternate', hreflang: l, href: `${ORIGIN}/${l}` })
  }
  upsertLink('alt-default', { rel: 'alternate', hreflang: 'x-default', href: `${ORIGIN}/de` })
}
