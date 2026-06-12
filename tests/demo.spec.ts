import { test, expect } from '@playwright/test'
import { HomePage } from './pages/HomePage'

test('"Live ansehen" opens the player modal and closes on Escape', async ({ page }) => {
  const home = new HomePage(page)
  await home.goto('de')

  await home.demoButton().click()
  const modal = home.demoModal()
  await expect(modal).toBeVisible()

  // the explainer iframe is wired to the (locale-aware) motion player
  await expect(modal.locator('iframe')).toHaveAttribute('src', /motion\.html\?lang=de/)

  await page.keyboard.press('Escape')
  await expect(modal).toBeHidden()
})

test('the modal closes on backdrop click', async ({ page }) => {
  const home = new HomePage(page)
  await home.goto('de')
  await home.demoButton().click()
  await expect(home.demoModal()).toBeVisible()

  // click the overlay (top-left corner, away from the panel)
  await home.demoModal().click({ position: { x: 5, y: 5 } })
  await expect(home.demoModal()).toBeHidden()
})
