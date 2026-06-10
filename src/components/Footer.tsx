import { useTranslation } from 'react-i18next'
import { Link, useParams } from 'react-router-dom'
import { Spark } from './icons'
import LanguageSwitcher from './LanguageSwitcher'
import { isLang } from '../i18n'
import wordmark from '../assets/luumos-wordmark-black.png'
import './Sections.css'

function hrefFor(label: string): string {
  if (label.includes('@')) return `mailto:${label}`
  if (/^\+?[0-9 ]{6,}$/.test(label)) return `tel:${label.replace(/\s+/g, '')}`
  return '#'
}

export default function Footer() {
  const { t, i18n } = useTranslation()
  const { lang } = useParams()
  const l = isLang(lang) ? lang : (i18n.language as 'de' | 'en')
  const cols = t('footer.cols', { returnObjects: true }) as unknown as { h: string; links: string[] }[]

  const legal = [
    { to: 'impressum', label: t('footer.imprint') },
    { to: 'agb', label: t('footer.agb') },
    { to: 'datenschutz', label: t('footer.privacy') },
  ]

  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__brand">
          <div className="footer__brand-row">
            <Spark className="footer__spark" gradientId="footer-spark" />
            <img className="footer__wordmark" src={wordmark} alt="Luumos" />
          </div>
          <p className="footer__tagline">{t('footer.tagline')}</p>
        </div>

        {cols.map((c) => (
          <div className="footer__col" key={c.h}>
            <h4>{c.h}</h4>
            {c.links.map((link) => (
              <a key={link} href={hrefFor(link)}>
                {link}
              </a>
            ))}
          </div>
        ))}
      </div>

      <div className="footer__bottom">
        <span>{t('footer.rights')}</span>
        <div className="footer__bottom-right">
          <LanguageSwitcher />
          <div className="footer__legal">
            {legal.map((item) => (
              <Link key={item.to} to={`/${l}/${item.to}`}>
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
