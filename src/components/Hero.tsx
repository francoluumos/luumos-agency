import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useParams } from 'react-router-dom'
import FlowDiagram from './FlowDiagram'
import DemoModal from './DemoModal'
import { COMPANY } from '../legal/company'
import { isLang } from '../i18n'
import './Hero.css'

export default function Hero() {
  const { t, i18n } = useTranslation()
  const { lang } = useParams()
  const l = isLang(lang) ? lang : (i18n.language as 'de' | 'en')
  const [demoOpen, setDemoOpen] = useState(false)

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
          <button className="hero__demo" type="button" data-testid="demo-open" onClick={() => setDemoOpen(true)}>
            <span className="hero__demo-play">▶</span>
            {t('hero.demo')}
          </button>
        </div>

        <FlowDiagram />
      </div>

      <DemoModal open={demoOpen} onClose={() => setDemoOpen(false)} lang={l} />
    </section>
  )
}
