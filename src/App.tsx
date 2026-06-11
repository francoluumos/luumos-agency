import { useEffect } from 'react'
import { Routes, Route, Navigate, Outlet, useParams, useLocation } from 'react-router-dom'
import i18n, { isLang, type Lang } from './i18n'
import { applyLocaleHead } from './seo'
import Nav from './components/Nav'
import Footer from './components/Footer'
import Home from './components/Home'
import LegalPage from './components/LegalPage'
import CookieConsent from './components/CookieConsent'

function LocaleLayout() {
  const { lang } = useParams()
  const { pathname } = useLocation()
  const valid = isLang(lang)

  useEffect(() => {
    if (!valid) return
    const l = lang as Lang
    if (i18n.language !== l) i18n.changeLanguage(l)
    applyLocaleHead(l)
  }, [lang, valid])

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  if (!valid) return <Navigate to="/de" replace />

  return (
    <>
      <Nav />
      <main>
        <Outlet />
      </main>
      <Footer />
      <CookieConsent />
    </>
  )
}

function RootRedirect() {
  const detected = i18n.resolvedLanguage
  const target: Lang = isLang(detected) ? detected : 'de'
  return <Navigate to={`/${target}`} replace />
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<RootRedirect />} />
      <Route path="/:lang" element={<LocaleLayout />}>
        <Route index element={<Home />} />
        <Route path="impressum" element={<LegalPage slug="impressum" />} />
        <Route path="agb" element={<LegalPage slug="agb" />} />
        <Route path="datenschutz" element={<LegalPage slug="datenschutz" />} />
        <Route path="*" element={<Navigate to="." replace />} />
      </Route>
      <Route path="*" element={<RootRedirect />} />
    </Routes>
  )
}
