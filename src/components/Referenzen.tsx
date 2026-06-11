import { useEffect, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Stethoscope, Building, Activity, Compass, Briefcase, Check, ArrowRight } from './icons'
import { useReveal } from '../hooks/useReveal'
import './Referenzen.css'

type Industry = { name: string; blurb: string; examples: string[] }

// Icons in the same order as the trust banner / i18n industries array.
const INDUSTRY_ICONS = [Stethoscope, Building, Activity, Compass, Briefcase]

export default function Referenzen() {
  const { t } = useTranslation()
  const items = t('referenzen.industries', { returnObjects: true }) as unknown as Industry[]
  const trackRef = useRef<HTMLDivElement>(null)
  const [active, setActive] = useState(0)
  const headRef = useReveal<HTMLDivElement>()

  // Center card i in the viewport (wraps around → "circular").
  const goTo = (i: number) => {
    const track = trackRef.current
    if (!track) return
    const n = items.length
    const idx = ((i % n) + n) % n
    const card = track.children[idx] as HTMLElement | undefined
    if (!card) return
    const left = card.offsetLeft - (track.clientWidth - card.clientWidth) / 2
    track.scrollTo({ left, behavior: 'smooth' })
  }

  // Track which card is centered as the user swipes/scrolls.
  useEffect(() => {
    const track = trackRef.current
    if (!track) return
    let raf = 0
    const onScroll = () => {
      cancelAnimationFrame(raf)
      raf = requestAnimationFrame(() => {
        const center = track.scrollLeft + track.clientWidth / 2
        let best = 0
        let bestDist = Infinity
        Array.from(track.children).forEach((c, i) => {
          const el = c as HTMLElement
          const cc = el.offsetLeft + el.clientWidth / 2
          const d = Math.abs(cc - center)
          if (d < bestDist) {
            bestDist = d
            best = i
          }
        })
        setActive(best)
      })
    }
    track.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      track.removeEventListener('scroll', onScroll)
      cancelAnimationFrame(raf)
    }
  }, [items.length])

  return (
    <section className="section refs" id="referenzen">
      <div className="section__head reveal" ref={headRef}>
        <span className="sec-eyebrow">{t('referenzen.eyebrow')}</span>
        <h2 className="section__title">{t('referenzen.title')}</h2>
        <p className="section__sub">{t('referenzen.sub')}</p>
      </div>

      <div className="refs__carousel">
        <div className="refs__track" ref={trackRef}>
          {items.map((ind, i) => {
            const Icon = INDUSTRY_ICONS[i] ?? Briefcase
            return (
              <article className={`refs__card${i === active ? ' is-active' : ''}`} key={ind.name}>
                <div className="refs__card-badge">
                  <Icon />
                </div>
                <h3 className="refs__card-name">{ind.name}</h3>
                <p className="refs__card-blurb">{ind.blurb}</p>
                <ul className="refs__card-list">
                  {ind.examples.map((ex) => (
                    <li key={ex}>
                      <Check className="refs__card-check" />
                      <span>{ex}</span>
                    </li>
                  ))}
                </ul>
              </article>
            )
          })}
        </div>
      </div>

      <div className="refs__controls">
        <button
          type="button"
          className="refs__nav refs__nav--prev"
          onClick={() => goTo(active - 1)}
          aria-label={t('referenzen.prev')}
        >
          <ArrowRight />
        </button>

        <div className="refs__dots" role="tablist" aria-label={t('referenzen.title')}>
          {items.map((ind, i) => (
            <button
              type="button"
              key={ind.name}
              className={`refs__dot${i === active ? ' is-active' : ''}`}
              onClick={() => goTo(i)}
              role="tab"
              aria-selected={i === active}
              aria-label={ind.name}
            />
          ))}
        </div>

        <button
          type="button"
          className="refs__nav refs__nav--next"
          onClick={() => goTo(active + 1)}
          aria-label={t('referenzen.next')}
        >
          <ArrowRight />
        </button>
      </div>
    </section>
  )
}
