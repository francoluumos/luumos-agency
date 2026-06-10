import { useTranslation } from 'react-i18next'
import { Spark } from './icons'
import './Sections.css'

export default function CTA() {
  const { t } = useTranslation()

  return (
    <section className="cta">
      <div className="cta__panel">
        <Spark className="cta__spark" gradientId="cta-spark" />
        <h2 className="cta__title">{t('cta.title')}</h2>
        <p className="cta__sub">{t('cta.sub')}</p>
        <a className="cta__btn" href="#">
          {t('cta.button')}
        </a>
        <p className="cta__note">{t('cta.note')}</p>
      </div>
    </section>
  )
}
