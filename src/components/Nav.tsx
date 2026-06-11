import { useTranslation } from 'react-i18next'
import { Spark } from './icons'
import { COMPANY } from '../legal/company'
import wordmark from '../assets/luumos-wordmark-black-transparent.png'
import './Nav.css'

export default function Nav() {
  const { t } = useTranslation()
  // Anchor links to in-page sections (Über uns → "what we do", etc.)
  const links = [
    { label: t('nav.about'), href: '#services' },
    { label: t('nav.how'), href: '#how' },
    { label: t('nav.work'), href: '#referenzen' },
  ]

  return (
    <header className="nav">
      <div className="nav__inner">
        <a className="nav__brand" href="/" aria-label="Luumos home">
          <Spark className="nav__spark" gradientId="nav-spark" />
          <img className="nav__wordmark" src={wordmark} alt="Luumos" />
        </a>

        <nav className="nav__links" aria-label="Primary">
          {links.map((l) => (
            <a key={l.label} className="nav__link" href={l.href}>
              {l.label}
            </a>
          ))}
        </nav>

        <div className="nav__actions">
          <a className="nav__cta" href={COMPANY.bookingUrl} target="_blank" rel="noopener noreferrer">
            {t('nav.cta')}
          </a>
        </div>
      </div>
    </header>
  )
}
