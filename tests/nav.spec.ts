import { test, expect } from '@playwright/test'
import { suppressCookieBanner, BOOKING_URL } from './helpers'

test.beforeEach(async ({ page }) => {
  await suppressCookieBanner(page)
})

test('booking CTAs link to the Google booking URL (new tab)', async ({ page }) => {
  await page.goto('/de')
  const cta = page.locator('.nav__cta')
  await expect(cta).toHaveAttribute('href', BOOKING_URL)
  await expect(cta).toHaveAttribute('target', '_blank')
  await expect(cta).toHaveAttribute('rel', /noopener/)
})

// Header nav links are hidden on mobile (≤900px) — desktop only.
test.describe('header anchors', () => {
  test.skip(({ isMobile }) => !!isMobile, 'nav links are hidden on mobile')

  test('point to in-page sections', async ({ page }) => {
    await page.goto('/de')
    const hrefs = await page
      .locator('.nav__links a')
      .evaluateAll((els) => els.map((e) => e.getAttribute('href')))
    expect(hrefs).toContain('#services')
    expect(hrefs).toContain('#how')
    expect(hrefs).toContain('#referenzen')
  })

  test('clicking one scrolls the section into view', async ({ page }) => {
    await page.goto('/de')
    await page.locator('.nav__links a[href="#referenzen"]').click()
    await expect(page).toHaveURL(/#referenzen$/)
    await expect(page.locator('#referenzen')).toBeInViewport()
  })
})
