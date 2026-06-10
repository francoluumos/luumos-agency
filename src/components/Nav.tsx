import { useTranslation } from 'react-i18next'
import { Spark, Chevron } from './icons'
import wordmark from '../assets/luumos-wordmark-black.png'
import './Nav.css'

export default function Nav() {
  const { t } = useTranslation()
  const links = [
    { label: t('nav.services'), menu: true },
    { label: t('nav.how') },
    { label: t('nav.work') },
    { label: t('nav.resources'), menu: true },
    { label: t('nav.about') },
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
            <a key={l.label} className="nav__link" href="#">
              {l.label}
              {l.menu && <Chevron className="nav__chev" />}
            </a>
          ))}
        </nav>

        <div className="nav__actions">
          <a className="nav__cta" href="#">
            {t('nav.cta')}
          </a>
        </div>
      </div>
    </header>
  )
}
