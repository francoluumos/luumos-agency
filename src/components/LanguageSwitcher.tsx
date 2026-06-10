import { Link, useParams } from 'react-router-dom'
import { SUPPORTED } from '../i18n'
import './LanguageSwitcher.css'

export default function LanguageSwitcher() {
  const { lang } = useParams()
  return (
    <div className="lang" role="group" aria-label="Language">
      {SUPPORTED.map((l) => (
        <Link
          key={l}
          to={`/${l}`}
          className={`lang__opt${l === lang ? ' is-active' : ''}`}
          aria-current={l === lang ? 'true' : undefined}
        >
          {l.toUpperCase()}
        </Link>
      ))}
    </div>
  )
}
