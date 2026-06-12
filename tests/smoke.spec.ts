import { test, expect } from '@playwright/test'

// Every key route mounts with a non-empty #root and no uncaught JS errors —
// the guard against white-page crashes (e.g. a t() outside a component).
const routes = ['/', '/de', '/en', '/de/impressum', '/de/agb', '/de/datenschutz', '/en/datenschutz']

for (const route of routes) {
  test(`mounts ${route} cleanly`, async ({ page }) => {
    const errors: string[] = []
    page.on('pageerror', (e) => errors.push(String(e)))

    await page.goto(route)

    await expect(page.locator('#root')).not.toBeEmpty()
    expect(errors, `uncaught errors on ${route}:\n${errors.join('\n')}`).toEqual([])
  })
}
