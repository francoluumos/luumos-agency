import { useEffect, useMemo, useRef } from 'react'
import './DemoModal.css'

type Props = { open: boolean; onClose: () => void; lang: string }

export default function DemoModal({ open, onClose, lang }: Props) {
  // Fresh token each open → the player HTML is never served stale.
  const bust = useMemo(() => (open ? Date.now() : 0), [open])
  const frameRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', onKey)
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = prev
    }
  }, [open, onClose])

  // The iframe is a fixed 1280x720; scale it (cover) to the measured 16:9 frame.
  // Doing the scale here (real DOM measurement) avoids the iframe-`window` sizing
  // quirks that caused letterboxing when the scaling lived inside the iframe.
  useEffect(() => {
    if (!open) return
    const frame = frameRef.current
    if (!frame) return
    const apply = () => {
      const s = Math.max(frame.clientWidth / 1280, frame.clientHeight / 720)
      frame.style.setProperty('--s', String(s))
    }
    apply()
    const ro = new ResizeObserver(apply)
    ro.observe(frame)
    return () => ro.disconnect()
  }, [open])

  if (!open) return null

  return (
    <div className="demo" role="dialog" aria-modal="true" data-testid="demo-modal" onClick={onClose}>
      <div className="demo__panel" onClick={(e) => e.stopPropagation()}>
        <button className="demo__close" type="button" onClick={onClose} aria-label="Schliessen">
          ✕
        </button>
        <div className="demo__frame" ref={frameRef}>
          {/* fixed 1280x720; the frame's --s scales it to cover. ?lang follows locale, &t busts cache. */}
          <iframe
            className="demo__iframe"
            src={`/motion.html?lang=${lang}&t=${bust}`}
            title="Luumos — live ansehen"
            allow="autoplay"
            loading="eager"
          />
        </div>
      </div>
    </div>
  )
}
