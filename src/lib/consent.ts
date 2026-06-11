import { enableAnalytics } from './analytics'

export type Consent = 'granted' | 'denied'

const KEY = 'luumos_consent'
export const CONSENT_EVENT = 'luumos:consent'

export function getConsent(): Consent | null {
  try {
    const v = localStorage.getItem(KEY)
    return v === 'granted' || v === 'denied' ? v : null
  } catch {
    return null
  }
}

export function setConsent(value: Consent): void {
  try {
    localStorage.setItem(KEY, value)
  } catch {
    /* storage blocked — keep the in-memory choice for this session */
  }
  if (value === 'granted') void enableAnalytics()
  window.dispatchEvent(new CustomEvent(CONSENT_EVENT, { detail: value }))
}

/** Clear the stored choice so the banner shows again (for a "manage cookies" link). */
export function resetConsent(): void {
  try {
    localStorage.removeItem(KEY)
  } catch {
    /* ignore */
  }
  window.dispatchEvent(new CustomEvent(CONSENT_EVENT, { detail: null }))
}
