import { useTranslation } from 'react-i18next'
import './Sections.css'

export default function TrustBar() {
  const { t } = useTranslation()
  const items = t('trust.items', { returnObjects: true }) as unknown as string[]

  return (
    <section className="trust" aria-label="Industries served">
      <div className="trust__inner">
        <span className="trust__label">{t('trust.label')}</span>
        <div className="trust__items">
          {items.map((i) => (
            <span key={i} className="trust__item">
              {i}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
