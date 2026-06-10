import { useTranslation } from 'react-i18next'
import './Sections.css'

export default function HowItWorks() {
  const { t } = useTranslation()
  const steps = t('how.steps', { returnObjects: true }) as unknown as { n: string; title: string; desc: string }[]

  return (
    <section className="section" id="how">
      <div className="section__head">
        <span className="sec-eyebrow">{t('how.eyebrow')}</span>
        <h2 className="section__title">{t('how.title')}</h2>
        <p className="section__sub">{t('how.sub')}</p>
      </div>

      <ol className="how__steps">
        {steps.map((s) => (
          <li className="how__step" key={s.n}>
            <span className="how__num">
              <span className="u-gradient-text">{s.n}</span>
            </span>
            <h3 className="how__step-title">{s.title}</h3>
            <p className="how__step-desc">{s.desc}</p>
          </li>
        ))}
      </ol>
    </section>
  )
}
