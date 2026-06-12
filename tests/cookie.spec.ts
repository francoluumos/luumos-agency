import { test, expect } from '@playwright/test'

// No cookie suppression here — these specs exercise the banner itself.

test('banner shows on first visit and Accept persists consent', async ({ page }) => {
  await page.goto('/de')
  const banner = page.locator('.cookie')
  await expect(banner).toBeVisible()

  await banner.locator('.cookie__btn--primary').click() // Akzeptieren
  await expect(banner).toBeHidden()
  expect(await page.evaluate(() => localStorage.getItem('luumos_consent'))).toBe('granted')
})

test('Decline keeps analytics off (consent = denied)', async ({ page }) => {
  await page.goto('/de')
  const banner = page.locator('.cookie')
  await expect(banner).toBeVisible()

  await banner.locator('.cookie__btn--ghost').click() // Ablehnen
  await expect(banner).toBeHidden()
  expect(await page.evaluate(() => localStorage.getItem('luumos_consent'))).toBe('denied')
})

test('banner links to the Datenschutz page', async ({ page }) => {
  await page.goto('/de')
  await expect(page.locator('.cookie__link')).toHaveAttribute('href', '/de/datenschutz')
})
