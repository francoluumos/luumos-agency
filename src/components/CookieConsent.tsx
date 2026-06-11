import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { getConsent, setConsent, CONSENT_EVENT, type Consent } from '../lib/consent'
import { enableAnalytics } from '../lib/analytics'
import { isLang } from '../i18n'
import './CookieConsent.css'

export default function CookieConsent() {
  const { t, i18n } = useTranslation()
  const { lang } = useParams()
  const l = isLang(lang) ? lang : (i18n.language as 'de' | 'en')
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const c = getConsent()
    if (c === 'granted') void enableAnalytics()
    if (c === null) setOpen(true)
    // Re-open if the choice is cleared elsewhere (e.g. a "manage cookies" link).
    const onChange = (e: Event) => {
      const detail = (e as CustomEvent).detail as Consent | null
      setOpen(detail === null)
    }
    window.addEventListener(CONSENT_EVENT, onChange)
    return () => window.removeEventListener(CONSENT_EVENT, onChange)
  }, [])

  const choose = (value: Consent) => {
    setConsent(value)
    setOpen(false)
  }

  if (!open) return null

  return (
    <div className="cookie" role="dialog" aria-label={t('cookie.aria')}>
      <p className="cookie__text">
        {t('cookie.text')}{' '}
        <Link className="cookie__link" to={`/${l}/datenschutz`}>
          {t('cookie.policy')}
        </Link>
      </p>
      <div className="cookie__actions">
        <button type="button" className="cookie__btn cookie__btn--ghost" onClick={() => choose('denied')}>
          {t('cookie.decline')}
        </button>
        <button type="button" className="cookie__btn cookie__btn--primary" onClick={() => choose('granted')}>
          {t('cookie.accept')}
        </button>
      </div>
    </div>
  )
}
