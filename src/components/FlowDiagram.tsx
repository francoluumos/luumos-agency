import type { CSSProperties } from 'react'
import { useTranslation, Trans } from 'react-i18next'
import { Spark, Calendar, Mail, Sheet, Doc, Video, Chat, Tasks, Database, Bolt } from './icons'
import './FlowDiagram.css'

/* Fixed coordinate stage (1080 x 480) so SVG paths + HTML tiles align exactly. */
const INPUTS = [
  { Icon: Calendar, x: 70, y: 150, path: 'M98,150 C190,150 208,260 300,260' },
  { Icon: Mail, x: 70, y: 260, path: 'M98,260 H300' },
  { Icon: Sheet, x: 70, y: 370, path: 'M98,370 C190,370 208,260 300,260' },
]

const SPINE = [
  { path: 'M300,260 H484', dir: 'in' as const },
  { path: 'M596,260 H780', dir: 'out' as const },
]

const OUTPUTS = [
  { Icon: Doc, x: 1014, y: 90, path: 'M780,260 C876,260 892,90 986,90' },
  { Icon: Video, x: 1014, y: 175, path: 'M780,260 C876,260 892,175 986,175' },
  { Icon: Chat, x: 1014, y: 260, path: 'M780,260 H986' },
  { Icon: Tasks, x: 1014, y: 345, path: 'M780,260 C876,260 892,345 986,345' },
  { Icon: Database, x: 1014, y: 430, path: 'M780,260 C876,260 892,430 986,430' },
]

/* Travelling pulses live INSIDE the svg (animateMotion) so they ride the wires in
   viewBox coordinates and scale correctly at every width — including mobile. */
const PULSES = [
  ...INPUTS.map((s, i) => ({ path: s.path, kind: 'in', dur: 1.9, begin: i * 0.5 })),
  ...SPINE.map((s, i) => ({ path: s.path, kind: s.dir, dur: 2.4, begin: 0.4 + i * 0.4 })),
  ...OUTPUTS.map((s, i) => ({ path: s.path, kind: 'out', dur: 1.9, begin: 0.9 + i * 0.32 })),
]

const tileStyle = (x: number, y: number, delay: number) =>
  ({
    left: `${(x / 1080) * 100}%`,
    top: `${(y / 480) * 100}%`,
    animationDelay: `${delay}s`,
  }) as CSSProperties

export default function FlowDiagram() {
  const { t } = useTranslation()
  return (
    <div className="flow" role="img" aria-label={t('flow.aria')}>
      {/* prompt pill */}
      <div className="flow__prompt">
        <span className="flow__prompt-plus">+</span>
        <span>
          <Trans i18nKey="flow.prompt" components={{ em: <em /> }} />
        </span>
      </div>

      <div className="flow__stage">
        {/* connectors */}
        <svg className="flow__svg" viewBox="0 0 1080 480" fill="none" preserveAspectRatio="none">
          <defs>
            <linearGradient id="flow-grad" x1="0" y1="0" x2="1080" y2="0" gradientUnits="userSpaceOnUse">
              <stop offset="0" stopColor="#1E40AF" />
              <stop offset="0.5" stopColor="#2563EB" />
              <stop offset="1" stopColor="#38BDF8" />
            </linearGradient>
          </defs>

          {[...INPUTS, ...SPINE, ...OUTPUTS].map((s, i) => (
            <g key={i}>
              <path d={s.path} className="flow__wire" />
              <path d={s.path} className="flow__wire-live" />
            </g>
          ))}

          {/* travelling pulses — ride the wires, scale with the viewBox */}
          {PULSES.map((p, i) => (
            <circle key={`pulse${i}`} r="4" className={`flow__pulse flow__pulse--${p.kind}`} opacity="0">
              <animateMotion dur={`${p.dur}s`} begin={`${p.begin}s`} repeatCount="indefinite" path={p.path} />
              <animate
                attributeName="opacity"
                dur={`${p.dur}s`}
                begin={`${p.begin}s`}
                repeatCount="indefinite"
                values="0;1;1;0"
                keyTimes="0;0.12;0.88;1"
              />
            </circle>
          ))}
        </svg>

        {/* junction nodes — html so they stay circular regardless of svg stretch */}
        <span className="flow__node-dot" style={tileStyle(300, 260, 0)} />
        <span className="flow__node-dot" style={tileStyle(780, 260, 0)} />

        {/* input tiles */}
        {INPUTS.map((t, i) => (
          <div key={`in${i}`} className="flow__tile flow__tile--in" style={tileStyle(t.x, t.y, 0.05 * i)}>
            <t.Icon className="flow__tile-icon" />
          </div>
        ))}

        {/* core */}
        <div className="flow__core" style={tileStyle(540, 260, 0)}>
          <span className="flow__core-ring" />
          <span className="flow__core-ring flow__core-ring--2" />
          <span className="flow__core-disc">
            <Spark className="flow__core-spark" gradientId="core-spark" />
          </span>
          <span className="flow__core-chip">
            <Bolt className="flow__core-chip-bolt" />
            {t('flow.chip')}
          </span>
        </div>

        {/* output tiles */}
        {OUTPUTS.map((t, i) => (
          <div key={`out${i}`} className="flow__tile flow__tile--out" style={tileStyle(t.x, t.y, 0.3 + 0.05 * i)}>
            <t.Icon className="flow__tile-icon" />
          </div>
        ))}
      </div>
    </div>
  )
}
