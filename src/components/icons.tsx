import type { SVGProps } from 'react'

type IconProps = SVGProps<SVGSVGElement>

/* ---- Luumos spark mark (official geometry, blue gradient) ---- */
export function Spark({ gradientId = 'lx-spark', ...props }: IconProps & { gradientId?: string }) {
  return (
    <svg viewBox="25 10 180 180" fill="none" aria-hidden {...props}>
      <defs>
        <linearGradient id={gradientId} x1="185" y1="35" x2="45" y2="165" gradientUnits="userSpaceOnUse">
          <stop stopColor="#38BDF8" />
          <stop offset="0.55" stopColor="#2563EB" />
          <stop offset="1" stopColor="#1E40AF" />
        </linearGradient>
      </defs>
      <g fill={`url(#${gradientId})`}>
        <rect x="100" y="14" width="30" height="68" rx="15" transform="rotate(30 115 100)" />
        <rect x="100" y="14" width="30" height="68" rx="15" transform="rotate(90 115 100)" />
        <rect x="100" y="14" width="30" height="68" rx="15" transform="rotate(150 115 100)" />
        <rect x="100" y="14" width="30" height="68" rx="15" transform="rotate(210 115 100)" />
        <rect x="100" y="14" width="30" height="68" rx="15" transform="rotate(270 115 100)" />
        <rect x="100" y="14" width="30" height="68" rx="15" transform="rotate(330 115 100)" />
      </g>
    </svg>
  )
}

export function Chevron(props: IconProps) {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden {...props}>
      <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

/* ---- Monoline tool glyphs (currentColor) ---- */
const base: IconProps = { viewBox: '0 0 24 24', fill: 'none', 'aria-hidden': true }
const stroke = {
  stroke: 'currentColor',
  strokeWidth: 1.7,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
}

export function Calendar(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <rect x="3.5" y="5" width="17" height="15" rx="2.5" {...stroke} />
      <path d="M3.5 9.5h17M8 3.5v3M16 3.5v3" {...stroke} />
      <circle cx="8.5" cy="14" r="1.1" fill="currentColor" />
      <circle cx="12.5" cy="14" r="1.1" fill="currentColor" />
    </svg>
  )
}

export function Mail(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <rect x="3" y="5.5" width="18" height="13" rx="2.5" {...stroke} />
      <path d="M4 7.5l8 5.5 8-5.5" {...stroke} />
    </svg>
  )
}

export function Phone(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path
        d="M6.5 3.5h3l1.4 4-2 1.3a11.5 11.5 0 0 0 5 5l1.3-2 4 1.4v3a2 2 0 0 1-2.1 2A15.5 15.5 0 0 1 4.5 5.6a2 2 0 0 1 2-2.1Z"
        {...stroke}
      />
    </svg>
  )
}

export function LinkedIn(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <rect x="3.5" y="3.5" width="17" height="17" rx="3.5" {...stroke} />
      <path d="M8 10.4v6M8 7.5v.01M11.6 16.4v-6M11.6 13c0-1.5 1-2.6 2.5-2.6S16.5 11.5 16.5 13v3.4" {...stroke} />
    </svg>
  )
}

/* ---- Filled glyphs (solid, currentColor) — used in the footer contact column ---- */
export function CalendarFill(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
      <path d="M7 2.5a1 1 0 0 1 1 1V4h8v-.5a1 1 0 1 1 2 0V4h.5A2.5 2.5 0 0 1 21 6.5V8H3V6.5A2.5 2.5 0 0 1 5.5 4H6v-.5a1 1 0 0 1 1-1Z" />
      <path d="M3 9.5h18v8a2.5 2.5 0 0 1-2.5 2.5h-13A2.5 2.5 0 0 1 3 17.5v-8Z" />
      <circle cx="8.4" cy="13.4" r="1.15" fill="var(--surface)" />
      <circle cx="12" cy="13.4" r="1.15" fill="var(--surface)" />
      <circle cx="15.6" cy="13.4" r="1.15" fill="var(--surface)" />
    </svg>
  )
}

export function MailFill(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
      <path d="M3 7.2a2.5 2.5 0 0 1 2.5-2.5h13A2.5 2.5 0 0 1 21 7.2v.25l-9 5.1-9-5.1V7.2Z" />
      <path d="M21 9.55V16.8a2.5 2.5 0 0 1-2.5 2.5h-13A2.5 2.5 0 0 1 3 16.8V9.55l8.5 4.82a1 1 0 0 0 1 0L21 9.55Z" />
    </svg>
  )
}

export function PhoneFill(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
      <path d="M6.6 3h2.9a1 1 0 0 1 .98.79l.86 3.55a1 1 0 0 1-.5 1.12l-1.66.92a12 12 0 0 0 5.34 5.34l.92-1.66a1 1 0 0 1 1.12-.5l3.55.86a1 1 0 0 1 .79.98v2.9a2 2 0 0 1-2.12 2A16.5 16.5 0 0 1 4.6 5.12 2 2 0 0 1 6.6 3Z" />
    </svg>
  )
}

export function LinkedInFill(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
      <rect x="3" y="3" width="18" height="18" rx="4" />
      <path
        fill="var(--surface)"
        d="M8 10.2H6.1V17H8v-6.8Zm-.95-3.1a1.1 1.1 0 1 0 0 2.2 1.1 1.1 0 0 0 0-2.2ZM17.9 17v-3.9c0-1.9-1.02-2.78-2.38-2.78-1.1 0-1.59.6-1.86 1.03V10.2h-1.9V17h1.9v-3.55c0-.93.66-1.38 1.27-1.38.6 0 1.07.42 1.07 1.35V17h1.8Z"
      />
    </svg>
  )
}

export function Sheet(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <rect x="4" y="3.5" width="16" height="17" rx="2.5" {...stroke} />
      <path d="M4 9h16M4 14.5h16M9.5 9v11.5" {...stroke} />
    </svg>
  )
}

export function Doc(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M6 3.5h7l5 5v12a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V4.5a1 1 0 0 1 1-1Z" {...stroke} />
      <path d="M13 3.5V8.5h5M8.5 13h7M8.5 16.5h7" {...stroke} />
    </svg>
  )
}

export function Video(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <rect x="3" y="6" width="12.5" height="12" rx="2.5" {...stroke} />
      <path d="M15.5 10l5-2.5v9l-5-2.5" {...stroke} />
    </svg>
  )
}

export function Chat(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M4 6.5A2.5 2.5 0 0 1 6.5 4h11A2.5 2.5 0 0 1 20 6.5v7a2.5 2.5 0 0 1-2.5 2.5H9l-4 3.5v-3.5H6.5" {...stroke} />
      <path d="M8 9h8M8 12h5" {...stroke} />
    </svg>
  )
}

export function Tasks(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <rect x="4" y="4" width="16" height="16" rx="3" {...stroke} />
      <path d="M8 12l2.5 2.5L16 9" {...stroke} />
    </svg>
  )
}

export function Database(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <ellipse cx="12" cy="6" rx="7" ry="2.8" {...stroke} />
      <path d="M5 6v12c0 1.5 3.1 2.8 7 2.8s7-1.3 7-2.8V6M5 12c0 1.5 3.1 2.8 7 2.8s7-1.3 7-2.8" {...stroke} />
    </svg>
  )
}

export function Bolt(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M13 3 5 13h6l-1 8 8-10h-6l1-8Z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" fill="currentColor" fillOpacity="0.12" />
    </svg>
  )
}

/* ---- Industry glyphs (monoline) — Referenzen carousel ---- */
export function Stethoscope(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M5.5 3.5V7a4 4 0 0 0 8 0V3.5" {...stroke} />
      <path d="M9.5 11v2.4a5.5 5.5 0 0 0 11 0v-1.1" {...stroke} />
      <circle cx="20.5" cy="10.4" r="1.9" {...stroke} />
    </svg>
  )
}
export function Building(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <rect x="5" y="3.5" width="14" height="17" rx="1.6" {...stroke} />
      <path d="M9 8h2M13 8h2M9 12h2M13 12h2M9.5 20v-3h5v3" {...stroke} />
    </svg>
  )
}
export function Activity(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M3 12.5h4l2-6 4 12 2.2-6H21" {...stroke} />
    </svg>
  )
}
export function Compass(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <circle cx="12" cy="12" r="8.5" {...stroke} />
      <path d="M15.6 8.4l-2.1 5.1-5.1 2.1 2.1-5.1 5.1-2.1Z" {...stroke} />
    </svg>
  )
}
export function Briefcase(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <rect x="3.5" y="7" width="17" height="12.5" rx="2.5" {...stroke} />
      <path d="M8.5 7V5.6A1.6 1.6 0 0 1 10.1 4h3.8a1.6 1.6 0 0 1 1.6 1.6V7M3.5 12.2h17" {...stroke} />
    </svg>
  )
}

export function ArrowRight(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M5 12h13M13 6l6 6-6 6" {...stroke} />
    </svg>
  )
}

export function Check(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M5 12.5l4.2 4.2L19 7" {...stroke} />
    </svg>
  )
}

export function Cog(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <circle cx="12" cy="12" r="3.2" {...stroke} />
      <path
        d="M12 2.8v2.4M12 18.8v2.4M21.2 12h-2.4M5.2 12H2.8M18.5 5.5l-1.7 1.7M7.2 16.8l-1.7 1.7M18.5 18.5l-1.7-1.7M7.2 7.2 5.5 5.5"
        {...stroke}
      />
    </svg>
  )
}

export function Sparkles(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M12 4l1.6 4.4L18 10l-4.4 1.6L12 16l-1.6-4.4L6 10l4.4-1.6L12 4Z" {...stroke} fill="currentColor" fillOpacity="0.1" />
      <path d="M18.5 14.5l.7 1.9 1.9.7-1.9.7-.7 1.9-.7-1.9-1.9-.7 1.9-.7.7-1.9Z" {...stroke} />
    </svg>
  )
}

export function Workflow(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <rect x="3.5" y="4" width="6" height="5" rx="1.5" {...stroke} />
      <rect x="14.5" y="15" width="6" height="5" rx="1.5" {...stroke} />
      <path d="M6.5 9v4.5a2 2 0 0 0 2 2h6" {...stroke} />
    </svg>
  )
}
