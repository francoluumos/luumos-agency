import { defineConfig, devices } from '@playwright/test'

// Luumos agency-site end-to-end tests. Runs against a local production preview
// (no password gate, no network deps) by default — set BASE_URL to point
// elsewhere (e.g. gated staging with BASIC_AUTH="user:pass"). Multi-browser
// incl. mobile. HTML report + traces document each run. See TESTING.md.
//
// luumos-agency's E2E preview port is 4181 (pinned in vite.config.ts, strictPort).
// Each project owns a distinct port — see the port registry in TESTING.md.
const BASE_URL = process.env.BASE_URL || 'http://localhost:4181'

export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 1 : 0,
  workers: process.env.CI ? 2 : undefined,
  reporter: [['html', { open: 'never' }], ['list'], ['json', { outputFile: 'test-results/results.json' }]],
  timeout: 30_000,
  expect: { timeout: 7_000 },

  use: {
    baseURL: BASE_URL,
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
    // For gated environments (staging), set BASIC_AUTH="user:pass".
    httpCredentials: process.env.BASIC_AUTH
      ? { username: process.env.BASIC_AUTH.split(':')[0], password: process.env.BASIC_AUTH.split(':').slice(1).join(':') }
      : undefined,
  },

  // Public marketing site — no auth, so every spec runs across every browser.
  projects: [
    { name: 'chromium', use: { ...devices['Desktop Chrome'] } },
    { name: 'firefox', use: { ...devices['Desktop Firefox'] } },
    { name: 'webkit', use: { ...devices['Desktop Safari'] } },
    { name: 'mobile-chrome', use: { ...devices['Pixel 7'] } },
    { name: 'mobile-safari', use: { ...devices['iPhone 14'] } },
  ],

  // Build once + serve the production bundle locally. Reused if already running.
  webServer: process.env.BASE_URL
    ? undefined
    : {
        command: 'npm run build && npm run preview',
        url: 'http://localhost:4181',
        timeout: 180_000,
        reuseExistingServer: !process.env.CI,
      },
})
