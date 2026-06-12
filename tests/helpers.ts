import { type Page } from '@playwright/test'

/** Pre-set a consent choice so the cookie banner doesn't show (call before goto). */
export async function suppressCookieBanner(page: Page) {
  await page.addInitScript(() => {
    try {
      localStorage.setItem('luumos_consent', 'denied')
    } catch {
      /* storage blocked — banner will show, harmless for most specs */
    }
  })
}

/** The single source of truth for the booking URL (mirrors COMPANY.bookingUrl). */
export const BOOKING_URL = 'https://calendar.app.google/wTazZbmi7SjdYbux8'
