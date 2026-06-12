import { test, expect } from '@playwright/test'
import { suppressCookieBanner } from './helpers'

test.beforeEach(async ({ page }) => {
  await suppressCookieBanner(page)
})

test('accordion: one item open at a time', async ({ page }) => {
  await page.goto('/de')
  const items = page.getByTestId('faq-q')
  await expect(items.first()).toHaveAttribute('aria-expanded', 'true') // first open by default

  const second = items.nth(1)
  await second.click()
  await expect(second).toHaveAttribute('aria-expanded', 'true')
  await expect(items.first()).toHaveAttribute('aria-expanded', 'false')

  await second.click() // toggle closed
  await expect(second).toHaveAttribute('aria-expanded', 'false')
})

test('FAQPage structured data is present', async ({ page }) => {
  await page.goto('/de')
  const blocks = await page.locator('script[type="application/ld+json"]').allTextContents()
  expect(blocks.some((t) => t.includes('"FAQPage"'))).toBeTruthy()
})
