import type { Slide } from '../data/content'

interface Palette { bg: string; fg: string; a: string; b: string }

const palettes: Palette[] = [
  { bg: '#3A38E8', fg: '#F1EFF6', a: '#F4B63A', b: '#17132B' },
  { bg: '#F4B63A', fg: '#17132B', a: '#3A38E8', b: '#FFFFFF' },
  { bg: '#17132B', fg: '#F1EFF6', a: '#7DE0C3', b: '#3A38E8' },
  { bg: '#F1EFF6', fg: '#17132B', a: '#3A38E8', b: '#F4B63A' },
  { bg: '#CFC8F5', fg: '#17132B', a: '#3A38E8', b: '#FF8A6B' },
]

function Bars({ x, y, widths, p, gap = 84, h = 52 }: { x: number; y: number; widths: number[]; p: Palette; gap?: number; h?: number }) {
  return (
    <>
      {widths.map((w, i) => (
        <rect key={i} x={x} y={y + i * gap} width={w} height={h} rx={h / 2} fill={p.fg} opacity={i === widths.length - 1 ? 0.45 : 1} />
      ))}
    </>
  )
}

function Art({ variant, p }: { variant: Slide['variant']; p: Palette }) {
  switch (variant) {
    case 'title':
      return (
        <>
          <circle cx="1230" cy="450" r="340" fill={p.a} />
          <circle cx="1390" cy="610" r="170" fill={p.b} />
          <Bars x={120} y={300} widths={[780, 600]} p={p} gap={92} h={60} />
          <rect x="120" y="540" width="300" height="18" rx="9" fill={p.fg} opacity="0.55" />
        </>
      )
    case 'chart':
      return (
        <>
          <Bars x={120} y={130} widths={[620, 420]} p={p} gap={80} h={44} />
          <line x1="120" y1="780" x2="1480" y2="780" stroke={p.fg} strokeWidth="6" opacity="0.5" />
          {[200, 280, 360, 470, 600].map((h, i) => (
            <rect key={i} x={760 + i * 140} y={780 - h} width="96" height={h} rx="10" fill={i === 4 ? p.a : p.b} />
          ))}
          <rect x="120" y="640" width="360" height="140" rx="16" fill={p.a} opacity="0.9" />
        </>
      )
    case 'split':
      return (
        <>
          <rect x="800" y="0" width="800" height="900" fill={p.a} />
          <circle cx="1200" cy="450" r="220" fill={p.b} />
          <rect x="1060" y="400" width="280" height="100" rx="50" fill={p.fg} />
          <Bars x={120} y={250} widths={[520, 440, 560, 300]} p={p} gap={96} h={44} />
        </>
      )
    case 'grid':
      return (
        <>
          {[0, 1, 2, 3, 4, 5].map((i) => {
            const col = i % 3
            const row = Math.floor(i / 3)
            const fills = [p.a, p.b, p.fg, p.b, p.fg, p.a]
            return (
              <rect key={i} x={120 + col * 470} y={140 + row * 330} width="430" height="290" rx="22" fill={fills[i]} opacity={fills[i] === p.fg ? 0.18 : 1} />
            )
          })}
        </>
      )
    case 'quote':
      return (
        <>
          <text x="110" y="640" fontSize="640" fontWeight="800" fill={p.a} fontFamily="Georgia, serif">&ldquo;</text>
          <Bars x={640} y={290} widths={[760, 700, 560]} p={p} gap={96} h={48} />
          <circle cx="680" cy="700" r="42" fill={p.b} />
          <rect x="750" y="680" width="320" height="22" rx="11" fill={p.fg} opacity="0.55" />
        </>
      )
    case 'timeline':
    default:
      return (
        <>
          <line x1="140" y1="450" x2="1460" y2="450" stroke={p.fg} strokeWidth="8" opacity="0.5" />
          {[0, 1, 2, 3, 4].map((i) => (
            <g key={i}>
              <circle cx={220 + i * 290} cy="450" r={i === 3 ? 58 : 38} fill={i === 3 ? p.a : p.b} />
              <rect x={150 + i * 290} y={i % 2 ? 540 : 290} width="140" height="34" rx="17" fill={p.fg} />
              <rect x={150 + i * 290} y={i % 2 ? 600 : 230} width="100" height="16" rx="8" fill={p.fg} opacity="0.5" />
            </g>
          ))}
        </>
      )
  }
}

interface Props {
  slide: Slide
  palette: number
  className?: string
  eager?: boolean
}

/** Renders a real slide image when `src` exists, otherwise abstract placeholder art. */
export default function SlideArt({ slide, palette, className = '', eager = false }: Props) {
  const p = palettes[palette % palettes.length]
  if (slide.src) {
    return (
      <img
        src={slide.src}
        alt={slide.alt}
        loading={eager ? 'eager' : 'lazy'}
        decoding="async"
        width={1600}
        height={900}
        className={`aspect-video w-full object-cover ${className}`}
      />
    )
  }
  return (
    <svg
      viewBox="0 0 1600 900"
      role="img"
      aria-label={slide.alt}
      preserveAspectRatio="xMidYMid slice"
      className={`aspect-video w-full ${className}`}
    >
      <rect width="1600" height="900" fill={p.bg} />
      <Art variant={slide.variant} p={p} />
    </svg>
  )
}
