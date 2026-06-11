import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Chevron } from './icons'
import { useReveal } from '../hooks/useReveal'
import './FAQ.css'

type QA = { q: string; a: string }

export default function FAQ() {
  const { t } = useTranslation()
  const items = t('faq.items', { returnObjects: true }) as unknown as QA[]
  const [open, setOpen] = useState<number | null>(0)
  const headRef = useReveal<HTMLDivElement>()
  const listRef = useReveal<HTMLDivElement>()

  // FAQPage structured data — boosts AI-search citations + Google rich results.
  // Built from the same Q&A so it always matches the visible (and crawlable) text.
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((it) => ({
      '@type': 'Question',
      name: it.q,
      acceptedAnswer: { '@type': 'Answer', text: it.a },
    })),
  }

  return (
    <section className="section faq" id="faq">
      <div className="section__head reveal" ref={headRef}>
        <span className="sec-eyebrow">{t('faq.eyebrow')}</span>
        <h2 className="section__title">{t('faq.title')}</h2>
        <p className="section__sub">{t('faq.sub')}</p>
      </div>

      <div className="faq__list reveal-stagger" ref={listRef}>
        {items.map((it, i) => {
          const isOpen = open === i
          return (
            <div className={`faq__item${isOpen ? ' is-open' : ''}`} key={it.q}>
              <h3 className="faq__q-row">
                <button
                  type="button"
                  className="faq__q"
                  aria-expanded={isOpen}
                  onClick={() => setOpen(isOpen ? null : i)}
                >
                  <span>{it.q}</span>
                  <Chevron className="faq__chev" />
                </button>
              </h3>
              {/* Answer stays in the DOM (collapsed via grid-rows) so it’s always crawlable. */}
              <div className="faq__a">
                <div className="faq__a-inner">
                  <p>{it.a}</p>
                </div>
              </div>
            </div>
          )
        })}
      </div>

      <script
        type="application/ld+json"
        // Trusted i18n content; escape `<` so no answer can break out of </script>.
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema).replace(/</g, '\\u003c') }}
      />
    </section>
  )
}
