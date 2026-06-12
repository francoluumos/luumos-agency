import { type Page, type Locator } from '@playwright/test'
import { suppressCookieBanner } from '../helpers'

/** Page object for the marketing home page (`/de` | `/en`). */
export class HomePage {
  readonly page: Page

  constructor(page: Page) {
    this.page = page
  }

  /** Navigate to the home page; suppresses the cookie banner unless { cookie: true }. */
  async goto(lang: 'de' | 'en' = 'de', opts: { cookie?: boolean } = {}) {
    if (!opts.cookie) await suppressCookieBanner(this.page)
    await this.page.goto(`/${lang}`)
  }

  demoButton(): Locator {
    return this.page.getByTestId('demo-open')
  }
  demoModal(): Locator {
    return this.page.getByTestId('demo-modal')
  }
  refCards(): Locator {
    return this.page.getByTestId('ref-card')
  }
  refNext(): Locator {
    return this.page.getByTestId('ref-next')
  }
  faqQuestions(): Locator {
    return this.page.getByTestId('faq-q')
  }
  langOption(code: 'DE' | 'EN'): Locator {
    return this.page.locator('.lang__opt', { hasText: code })
  }
}
