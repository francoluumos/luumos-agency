import { useTranslation } from 'react-i18next'
import { Link, useParams } from 'react-router-dom'
import { Spark, CalendarFill, MailFill, PhoneFill, LinkedInFill } from './icons'
import LanguageSwitcher from './LanguageSwitcher'
import { isLang } from '../i18n'
import { COMPANY } from '../legal/company'
import wordmark from '../assets/luumos-wordmark-black-transparent.png'
import './Sections.css'

type ColLink = { href: string; external?: boolean }

// Per-row config for the Kontakt column, in link order: book / email / phone / LinkedIn.
// Labels come from i18n; icon + href live here.
const contactRows: { Icon: typeof CalendarFill; resolve: (label: string) => ColLink }[] = [
  { Icon: CalendarFill, resolve: () => ({ href: COMPANY.bookingUrl, external: true }) },
  { Icon: MailFill, resolve: (l) => ({ href: `mailto:${l}` }) },
  { Icon: PhoneFill, resolve: () => ({ href: COMPANY.phoneHref }) },
  { Icon: LinkedInFill, resolve: () => ({ href: COMPANY.linkedinUrl, external: true }) },
]

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

  const companyIdx = 1 // Unternehmen / Company — legal links live here
  const contactIdx = cols.length - 1 // Kontakt / Get in touch — iconed contact links

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

        {cols.map((c, ci) => (
          <div className="footer__col" key={c.h}>
            <h4>{c.h}</h4>

            {ci === contactIdx
              ? c.links.map((link, li) => {
                  const row = contactRows[li] ?? contactRows[0]
                  const { href, external } = row.resolve(link)
                  const Icon = row.Icon
                  return (
                    <a
                      className="footer__link footer__link--icon"
                      key={link}
                      href={href}
                      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                    >
                      <Icon className="footer__link-icon" />
                      <span>{link}</span>
                    </a>
                  )
                })
              : c.links.map((link) => (
                  <a key={link} href="#">
                    {link}
                  </a>
                ))}

            {ci === companyIdx &&
              legal.map((item) => (
                <Link key={item.to} to={`/${l}/${item.to}`}>
                  {item.label}
                </Link>
              ))}
          </div>
        ))}
      </div>

      <div className="footer__bottom">
        <span>{t('footer.rights')}</span>
        <LanguageSwitcher />
      </div>
    </footer>
  )
}
