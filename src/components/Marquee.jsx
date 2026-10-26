import { Icon } from './ui'

const TONES = {
  paper: 'bg-paper-2 text-forest-800 border-ink/10',
  forest: 'bg-forest-900 text-paper border-paper/10',
  marigold: 'bg-marigold-300 text-ink border-ink/10',
}

export default function Marquee({
  text = 'Nourishment for every table',
  reverse = false,
  tone = 'paper',
  duration = 34,
}) {
  const items = Array.from({ length: 8 })
  const track = (
    <div className="flex shrink-0 items-center">
      {items.map((_, i) => (
        <span key={i} className="flex items-center">
          <span className="px-6 font-display text-2xl font-medium whitespace-nowrap sm:text-3xl lg:text-4xl">
            {text}
          </span>
          <Icon name="sparkle" className="h-5 w-5 shrink-0 opacity-60" />
        </span>
      ))}
    </div>
  )

  return (
    <div
      className={`relative overflow-hidden border-y py-5 sm:py-6 ${TONES[tone] ?? TONES.paper}`}
      aria-hidden="true"
    >
      <div
        className={`marquee-track flex w-max ${reverse ? '[animation-direction:reverse]' : ''}`}
        style={{ '--marquee-duration': `${duration}s` }}
      >
        {track}
        {track}
      </div>
    </div>
  )
}
