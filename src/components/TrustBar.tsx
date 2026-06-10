import { useTranslation } from 'react-i18next'
import { useReveal } from '../hooks/useReveal'
import './Sections.css'

export default function TrustBar() {
  const { t } = useTranslation()
  const items = t('trust.items', { returnObjects: true }) as unknown as string[]
  const ref = useReveal<HTMLDivElement>()

  const track = (dup = false) => (
    <div className="trust__track" {...(dup ? { 'aria-hidden': true } : {})}>
      {items.map((i) => (
        <span key={i} className="trust__item">
          {i}
        </span>
      ))}
    </div>
  )

  return (
    <section className="trust" aria-label="Industries served">
      <div className="trust__inner reveal" ref={ref}>
        <span className="trust__label">{t('trust.label')}</span>
        {/* Desktop: tracks collapse (display:contents) into one centered wrap.
            Mobile: both tracks form a seamless right→left marquee. */}
        <div className="trust__items">
          {track()}
          {track(true)}
        </div>
      </div>
    </section>
  )
}
