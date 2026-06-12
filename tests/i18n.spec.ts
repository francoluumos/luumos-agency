import { test, expect } from '@playwright/test'
import { suppressCookieBanner } from './helpers'

test.beforeEach(async ({ page }) => {
  await suppressCookieBanner(page)
})

test('German is the default and <html lang> reflects it', async ({ page }) => {
  await page.goto('/de')
  await expect(page.locator('html')).toHaveAttribute('lang', 'de')
  await expect(page.locator('.nav__cta')).toHaveText('Beratung buchen')
})

test('footer language switch flips DE → EN', async ({ page }) => {
  await page.goto('/de')
  await page.locator('.lang__opt', { hasText: 'EN' }).click()
  await expect(page).toHaveURL(/\/en$/)
  await expect(page.locator('html')).toHaveAttribute('lang', 'en')
  await expect(page.locator('.nav__cta')).toHaveText('Book a consult')
})
