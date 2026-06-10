import { SUPPORTED, type Lang } from './i18n'

/** Public site origin — used for canonical + hreflang links. */
const ORIGIN = 'https://luumos.io'

function upsertLink(key: string, attrs: Record<string, string>) {
  let el = document.head.querySelector<HTMLLinkElement>(`link[data-seo="${key}"]`)
  if (!el) {
    el = document.createElement('link')
    el.dataset.seo = key
    document.head.appendChild(el)
  }
  for (const [k, v] of Object.entries(attrs)) el.setAttribute(k, v)
}

/** Set <html lang>, canonical, and hreflang alternates for the active locale. */
export function applyLocaleHead(lang: Lang) {
  document.documentElement.lang = lang
  upsertLink('canonical', { rel: 'canonical', href: `${ORIGIN}/${lang}` })
  for (const l of SUPPORTED) {
    upsertLink(`alt-${l}`, { rel: 'alternate', hreflang: l, href: `${ORIGIN}/${l}` })
  }
  upsertLink('alt-default', { rel: 'alternate', hreflang: 'x-default', href: `${ORIGIN}/de` })
}
