import { useTranslation } from 'react-i18next'
import FlowDiagram from './FlowDiagram'
import { COMPANY } from '../legal/company'
import './Hero.css'

export default function Hero() {
  const { t } = useTranslation()

  return (
    <section className="hero">
      <div className="hero__bg" aria-hidden />
      <div className="hero__inner">
        <a className="hero__eyebrow" href="#">
          <span className="hero__eyebrow-dot" />
          {t('hero.eyebrow')}
          <span className="hero__eyebrow-arrow">→</span>
        </a>

        <h1 className="hero__title">
          {t('hero.titleLead')} <span className="u-gradient-text">{t('hero.titleAccent')}</span>
        </h1>

        <p className="hero__sub">{t('hero.sub')}</p>

        <div className="hero__actions">
          <a className="hero__cta" href={COMPANY.bookingUrl} target="_blank" rel="noopener noreferrer">
            {t('hero.cta')}
          </a>
          <a className="hero__demo" href="#">
            <span className="hero__demo-play">▶</span>
            {t('hero.demo')}
          </a>
        </div>

        <FlowDiagram />
      </div>
    </section>
  )
}
