import { useTranslation } from 'react-i18next'
import { Link, useParams } from 'react-router-dom'
import { isLang } from '../i18n'
import { LEGAL, type LegalDoc } from '../legal/content'
import './LegalPage.css'

export default function LegalPage({ slug }: { slug: LegalDoc['slug'] }) {
  const { t, i18n } = useTranslation()
  const { lang } = useParams()
  const l = isLang(lang) ? lang : (i18n.language as 'de' | 'en')
  const doc = LEGAL[l]?.[slug] ?? LEGAL.de[slug]

  return (
    <article className="legal">
      <div className="legal__inner">
        <Link className="legal__back" to={`/${l}`}>
          ← {t('legal.back')}
        </Link>
        <h1 className="legal__title">{doc.title}</h1>
        <p className="legal__updated">
          {t('legal.updated')}: {doc.updated}
        </p>
        {doc.intro && <p className="legal__intro">{doc.intro}</p>}

        {doc.sections.map((s) => (
          <section className="legal__section" key={s.h}>
            <h2 className="legal__h">{s.h}</h2>
            {s.p.map((para, i) => (
              <p className="legal__p" key={i}>
                {para}
              </p>
            ))}
          </section>
        ))}

        <p className="legal__note">{t('legal.note')}</p>
      </div>
    </article>
  )
}
