import { test, expect } from '@playwright/test'
import { HomePage } from './pages/HomePage'

test('carousel renders one card per industry', async ({ page }) => {
  const home = new HomePage(page)
  await home.goto('de')
  await expect(home.refCards()).toHaveCount(5)
})

// The arrow buttons are hidden on mobile (swipe there) — desktop only.
test.describe('arrow navigation', () => {
  test.skip(({ isMobile }) => !!isMobile, 'arrows hidden on mobile (touch-swipe)')

  test('next advances the active card', async ({ page }) => {
    const home = new HomePage(page)
    await home.goto('de')
    const activeName = page.locator('.refs__card.is-active .refs__card-name')
    const before = (await activeName.textContent())?.trim() ?? ''

    await home.refNext().click()

    await expect
      .poll(async () => (await activeName.textContent())?.trim() ?? '')
      .not.toBe(before)
  })
})
