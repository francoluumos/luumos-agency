import { useEffect } from 'react'
import './DemoModal.css'

type Props = { open: boolean; onClose: () => void; lang: string }

export default function DemoModal({ open, onClose, lang }: Props) {
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

  if (!open) return null

  return (
    <div className="demo" role="dialog" aria-modal="true" onClick={onClose}>
      <div className="demo__panel" onClick={(e) => e.stopPropagation()}>
        <button className="demo__close" type="button" onClick={onClose} aria-label="Schliessen">
          ✕
        </button>
        <div className="demo__frame">
          {/* The animated explainer lives in public/motion.html; ?lang follows the site locale. */}
          <iframe src={`/motion.html?lang=${lang}`} title="Luumos — live ansehen" allow="autoplay" loading="eager" />
        </div>
      </div>
    </div>
  )
}
