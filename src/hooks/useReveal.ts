import { useEffect, useRef } from 'react'

/**
 * Reveal-on-scroll: returns a ref; once the element scrolls into view it gets
 * `data-inview="true"` (one-shot). Pair with the `.reveal` / `.reveal-stagger`
 * CSS, which animates opacity + transform only. Honors prefers-reduced-motion
 * via the global guard in index.css.
 */
export function useReveal<T extends HTMLElement = HTMLDivElement>(options?: IntersectionObserverInit) {
  const ref = useRef<T>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    // No observer (SSR/old browsers) → show immediately, never hide content.
    if (typeof IntersectionObserver === 'undefined') {
      el.dataset.inview = 'true'
      return
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.dataset.inview = 'true'
          io.disconnect()
        }
      },
      { rootMargin: '0px 0px -12% 0px', threshold: 0.12, ...options },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  return ref
}
