import { useLayoutEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { useCountUp } from '../hooks'

/* ------------------------------------------------------------------ Icon */

const ICONS = {
  'arrow-right': (
    <>
      <path d="M5 12h14" />
      <path d="m13 6 6 6-6 6" />
    </>
  ),
  'arrow-up-right': (
    <>
      <path d="M7 17 17 7" />
      <path d="M8 7h9v9" />
    </>
  ),
  'chevron-left': <path d="m15 18-6-6 6-6" />,
  'chevron-right': <path d="m9 18 6-6-6-6" />,
  'chevron-down': <path d="m6 9 6 6 6-6" />,
  plus: (
    <>
      <path d="M12 5v14" />
      <path d="M5 12h14" />
    </>
  ),
  minus: <path d="M5 12h14" />,
  check: <path d="M20 6 9 17l-5-5" />,
  menu: (
    <>
      <path d="M4 7h16" />
      <path d="M4 12h16" />
      <path d="M4 17h16" />
    </>
  ),
  close: (
    <>
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </>
  ),
  mail: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3.5 7.5 8.5 6 8.5-6" />
    </>
  ),
  phone: (
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.2 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92Z" />
  ),
  'map-pin': (
    <>
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </>
  ),
  heart: (
    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5C2 10.8 3.5 12.54 5 14l7 7Z" />
  ),
  'heart-pulse': (
    <>
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5C2 10.8 3.5 12.54 5 14l7 7Z" />
      <path d="M3.5 11.5h3l1.5-3 2 5 1.5-3h4" />
    </>
  ),
  leaf: (
    <>
      <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
      <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
    </>
  ),
  book: (
    <>
      <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
      <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2Z" />
    </>
  ),
  users: (
    <>
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </>
  ),
  shield: (
    <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1Z" />
  ),
  sparkle: (
    <>
      <path d="M12 3l1.9 5.1L19 10l-5.1 1.9L12 17l-1.9-5.1L5 10l5.1-1.9Z" />
      <path d="M19 16.5l.7 1.8 1.8.7-1.8.7-.7 1.8-.7-1.8-1.8-.7 1.8-.7Z" />
    </>
  ),
  'hand-heart': (
    <>
      <path d="M11 14h2a2 2 0 1 0 0-4h-3c-.6 0-1.1.2-1.4.6L3 16" />
      <path d="m7 20 1.6-1.4c.3-.4.8-.6 1.4-.6h4c1.1 0 2.1-.4 2.8-1.2l4.6-4.4a2 2 0 0 0-2.75-2.91l-4.2 3.9" />
      <path d="m2 15 6 6" />
      <path d="M19.5 8.5c.7-.7 1.5-1.6 1.5-2.7A2.73 2.73 0 0 0 16 4a2.78 2.78 0 0 0-5 1.8c0 1.2.8 2 1.5 2.8L16 12Z" />
    </>
  ),
  trending: (
    <>
      <path d="M16 7h6v6" />
      <path d="m22 7-8.5 8.5-5-5L2 17" />
    </>
  ),
  bowl: (
    <>
      <path d="M4 10h16v1a8 8 0 0 1-16 0Z" />
      <path d="M12 10V6" />
      <path d="M9 6a3 3 0 0 1 6 0" />
    </>
  ),
  child: (
    <>
      <circle cx="12" cy="6.5" r="3" />
      <path d="M12 9.5V16" />
      <path d="m7.5 20 4.5-3.5L16.5 20" />
    </>
  ),
  calendar: (
    <>
      <rect x="3" y="4.5" width="18" height="17" rx="2" />
      <path d="M3 10h18" />
      <path d="M8 2.5v4" />
      <path d="M16 2.5v4" />
    </>
  ),
  globe: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18" />
      <path d="M12 3c2.5 3 2.5 15 0 18-2.5-3-2.5-15 0-18Z" />
    </>
  ),
  external: (
    <>
      <path d="M15 3h6v6" />
      <path d="M10 14 21 3" />
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    </>
  ),
  send: (
    <>
      <path d="m22 2-7 20-4-9-9-4Z" />
      <path d="M22 2 11 13" />
    </>
  ),
}

export function Icon({ name, className = 'h-5 w-5', strokeWidth = 1.75, ...rest }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
      focusable="false"
      {...rest}
    >
      {ICONS[name] ?? null}
    </svg>
  )
}

/* ------------------------------------------------------------- Container */

export function Container({ className = '', as: Tag = 'div', children, ...rest }) {
  return (
    <Tag className={`mx-auto w-full max-w-[82rem] px-5 sm:px-8 lg:px-10 ${className}`} {...rest}>
      {children}
    </Tag>
  )
}

/* --------------------------------------------------------------- Section */

const TONES = {
  paper: 'bg-paper text-ink',
  paper2: 'bg-paper-2 text-ink',
  forest: 'bg-forest-900 text-paper',
  ink: 'bg-ink text-paper',
  marigold: 'bg-marigold-300 text-ink',
}

export function Section({
  id,
  tone = 'paper',
  className = '',
  as: Tag = 'section',
  children,
  ...rest
}) {
  return (
    <Tag
      id={id}
      className={`relative py-20 sm:py-24 lg:py-32 ${TONES[tone] ?? ''} ${className}`}
      {...rest}
    >
      {children}
    </Tag>
  )
}

/* --------------------------------------------------------------- Eyebrow */

export function Eyebrow({ children, tone = 'dark', className = '' }) {
  const color = tone === 'light' ? 'text-marigold-300' : 'text-forest-700'
  return (
    <span
      className={`inline-flex items-center gap-2.5 text-[0.72rem] font-semibold uppercase tracking-[0.2em] ${color} ${className}`}
    >
      <span className="h-px w-6 bg-current opacity-60" aria-hidden="true" />
      {children}
    </span>
  )
}

/* ---------------------------------------------------------------- Button */

const BTN_BASE =
  'group relative inline-flex items-center justify-center gap-2 rounded-full font-semibold transition duration-300 will-change-transform disabled:pointer-events-none disabled:opacity-50'

const BTN_SIZES = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-[0.95rem]',
  lg: 'px-7 py-3.5 text-base',
}

const BTN_VARIANTS = {
  solid: 'bg-forest-700 text-paper shadow-sm hover:-translate-y-0.5 hover:bg-forest-800 hover:shadow-lg',
  accent:
    'bg-marigold-400 text-ink shadow-sm hover:-translate-y-0.5 hover:bg-marigold-300 hover:shadow-lg',
  ink: 'bg-ink text-paper shadow-sm hover:-translate-y-0.5 hover:bg-forest-900 hover:shadow-lg',
  outline:
    'border border-ink/15 bg-transparent text-ink hover:-translate-y-0.5 hover:border-ink/35 hover:bg-ink/[0.04]',
  ghostLight:
    'border border-paper/25 bg-paper/5 text-paper backdrop-blur hover:-translate-y-0.5 hover:bg-paper/15',
  ghost: 'text-forest-700 hover:text-forest-900',
}

export function Button({
  variant = 'solid',
  size = 'md',
  to,
  href,
  icon,
  className = '',
  children,
  ...rest
}) {
  const cls = `${BTN_BASE} ${BTN_SIZES[size] ?? BTN_SIZES.md} ${BTN_VARIANTS[variant] ?? BTN_VARIANTS.solid} ${className}`
  const inner = (
    <>
      {children}
      {icon ? (
        <Icon
          name={icon}
          className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5"
        />
      ) : null}
    </>
  )

  if (to) {
    return (
      <Link to={to} className={cls} {...rest}>
        {inner}
      </Link>
    )
  }
  if (href) {
    return (
      <a href={href} className={cls} {...rest}>
        {inner}
      </a>
    )
  }
  return (
    <button type="button" className={cls} {...rest}>
      {inner}
    </button>
  )
}

/* ----------------------------------------------------------------- Badge */

export function Badge({ children, className = '' }) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border border-ink/10 bg-paper/70 px-3 py-1 text-xs font-semibold text-ink-soft backdrop-blur ${className}`}
    >
      {children}
    </span>
  )
}

/* ---------------------------------------------------------------- Reveal */

/**
 * Scroll reveal built on IntersectionObserver + CSS transitions.
 *
 * Deliberately not a scroll-position library: lazy-loaded images resize the page
 * as the user scrolls, which makes cached scroll offsets unreliable and can leave
 * content stuck at opacity 0. An observer cannot miss an element that is on screen.
 *
 * Inline styles are released once the transition ends so that class-based hover
 * transforms on the children keep working.
 */
export function Reveal({
  as: Tag = 'div',
  children,
  className = '',
  y = 36,
  delay = 0,
  stagger = false,
  duration = 700,
  ...rest
}) {
  const ref = useRef(null)

  useLayoutEffect(() => {
    const el = ref.current
    if (!el) return

    const targets = stagger ? Array.from(el.children) : [el]
    if (!targets.length) return

    const timers = []
    const release = (node, total) => {
      timers.push(
        window.setTimeout(() => {
          node.style.transition = ''
          node.style.transform = ''
          node.style.opacity = ''
        }, total + 60),
      )
    }

    const show = (animated) => {
      targets.forEach((node, index) => {
        const total = animated ? duration + delay + index * 80 : 0
        node.style.opacity = '1'
        node.style.transform = 'translateY(0)'
        if (animated) release(node, total)
        else {
          node.style.transition = ''
          node.style.transform = ''
          node.style.opacity = ''
        }
      })
    }

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (typeof IntersectionObserver === 'undefined' || prefersReduced) {
      show(false)
      return
    }

    // Hide before paint so there is no flash of un-animated content.
    targets.forEach((node, index) => {
      const timing = `${duration}ms var(--ease-out-expo) ${delay + index * 80}ms`
      node.style.transition = `opacity ${timing}, transform ${timing}`
      node.style.opacity = '0'
      node.style.transform = `translateY(${y}px)`
    })

    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries.some((entry) => entry.isIntersecting)) return
        observer.disconnect()
        show(true)
      },
      { threshold: 0.01, rootMargin: '0px 0px -8% 0px' },
    )
    observer.observe(el)

    return () => {
      observer.disconnect()
      timers.forEach(window.clearTimeout)
    }
  }, [y, delay, stagger, duration])

  return (
    <Tag ref={ref} className={className} {...rest}>
      {children}
    </Tag>
  )
}

/* ------------------------------------------------------------- StatBlock */

export function StatBlock({
  to,
  prefix = '',
  suffix = '',
  label,
  detail,
  tone = 'dark',
  align = 'left',
}) {
  const { ref, value } = useCountUp(to)
  const numberColor = tone === 'light' ? 'text-paper' : 'text-forest-800'
  const labelColor = tone === 'light' ? 'text-paper/70' : 'text-ink-mute'
  const detailColor = tone === 'light' ? 'text-paper/60' : 'text-ink-soft'
  const full = `${prefix}${to.toLocaleString('en-IN')}${suffix}`

  return (
    <div ref={ref} className={align === 'center' ? 'text-center' : ''}>
      <div className={`font-display text-4xl leading-none font-semibold sm:text-5xl ${numberColor}`}>
        <span aria-hidden="true">
          {prefix}
          {value.toLocaleString('en-IN')}
          {suffix}
        </span>
        <span className="sr-only">{full}</span>
      </div>
      <div className={`mt-2 text-sm font-semibold tracking-wide ${labelColor}`}>{label}</div>
      {detail ? <p className={`mt-2 text-sm leading-relaxed ${detailColor}`}>{detail}</p> : null}
    </div>
  )
}
