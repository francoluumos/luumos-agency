import { useTranslation } from 'react-i18next'
import { Cog, Sparkles, Workflow, ArrowRight } from './icons'
import { useReveal } from '../hooks/useReveal'
import './Sections.css'

const ICONS = [Cog, Sparkles, Workflow]

export default function Services() {
  const { t } = useTranslation()
  const items = t('services.items', { returnObjects: true }) as unknown as { title: string; desc: string }[]
  const headRef = useReveal<HTMLDivElement>()
  const gridRef = useReveal<HTMLDivElement>()

  return (
    <section className="section" id="services">
      <div className="section__head reveal" ref={headRef}>
        <span className="sec-eyebrow">{t('services.eyebrow')}</span>
        <h2 className="section__title">{t('services.title')}</h2>
        <p className="section__sub">{t('services.sub')}</p>
      </div>

      <div className="svc reveal-stagger" ref={gridRef}>
        {items.map((s, i) => {
          const Icon = ICONS[i] ?? Cog
          return (
            <article className="svc__item" key={s.title}>
              <div className="svc__icon">
                <Icon />
              </div>
              <h3 className="svc__title">{s.title}</h3>
              <p className="svc__desc">{s.desc}</p>
              <a className="svc__link" href="#">
                {t('services.learn')} <ArrowRight />
              </a>
            </article>
          )
        })}
      </div>
    </section>
  )
}
