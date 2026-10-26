import { useEffect, useRef, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { navLinks, site } from '../data/content'
import { useEscape, useLockBody, useScrollProgress, useScrolled } from '../hooks'
import { Container, Icon } from './ui'

function Logo({ light }) {
  return (
    <Link
      to="/"
      className="group flex items-center gap-2.5 rounded-full"
      aria-label={`${site.name} — home`}
    >
      <span className="relative grid h-11 w-11 place-items-center overflow-hidden rounded-full ring-1 ring-black/5 sm:h-12 sm:w-12">
        <img src="/assets/logo.svg" alt="" className="h-full w-full object-cover" />
      </span>
      <span className="leading-none">
        <span
          className={`font-display block text-lg font-semibold tracking-tight transition-colors sm:text-xl ${
            light ? 'text-paper' : 'text-ink'
          }`}
        >
          Jivan Aahar
        </span>
        <span
          className={`block text-[0.62rem] font-semibold uppercase tracking-[0.22em] transition-colors ${
            light ? 'text-paper/60' : 'text-ink-mute'
          }`}
        >
          Foundation
        </span>
      </span>
    </Link>
  )
}

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const scrolled = useScrolled(24)
  const progress = useScrollProgress()
  const firstLink = useRef(null)

  const light = !scrolled && !open

  useLockBody(open)
  useEscape(() => setOpen(false), open)

  useEffect(() => {
    if (open) firstLink.current?.focus()
  }, [open])

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div
        className={`transition-all duration-500 ${
          scrolled || open
            ? 'bg-paper/85 shadow-[0_1px_0_rgba(25,22,16,0.06),0_12px_30px_-18px_rgba(25,22,16,0.35)] backdrop-blur-xl'
            : 'bg-gradient-to-b from-black/80 via-black/50 to-transparent'
        }`}
      >
        <Container className="flex items-center justify-between py-3">
          <Logo light={light} />

          <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                end={link.path === '/'}
                className={({ isActive }) =>
                  `relative rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                    light
                      ? isActive
                        ? 'text-paper'
                        : 'text-paper/75 hover:text-paper'
                      : isActive
                        ? 'text-forest-800'
                        : 'text-ink-soft hover:text-ink'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {link.label}
                    <span
                      className={`absolute inset-x-4 -bottom-0.5 h-px origin-left bg-current transition-transform duration-300 ${
                        isActive ? 'scale-x-100' : 'scale-x-0'
                      }`}
                      aria-hidden="true"
                    />
                  </>
                )}
              </NavLink>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <Link
              to="/get-involved"
              className={`hidden rounded-full px-5 py-2.5 text-sm font-semibold transition duration-300 hover:-translate-y-0.5 sm:inline-flex ${
                light
                  ? 'bg-marigold-400 text-ink hover:bg-marigold-300'
                  : 'bg-forest-700 text-paper hover:bg-forest-800'
              }`}
            >
              Give now
            </Link>

            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? 'Close menu' : 'Open menu'}
              className={`grid h-11 w-11 place-items-center rounded-full transition lg:hidden ${
                light ? 'text-paper hover:bg-paper/10' : 'text-ink hover:bg-ink/5'
              }`}
            >
              <Icon name={open ? 'close' : 'menu'} className="h-6 w-6" />
            </button>
          </div>
        </Container>

        <div
          className="h-0.5 origin-left bg-marigold-400 transition-transform duration-150"
          style={{ transform: `scaleX(${progress})` }}
          aria-hidden="true"
        />
      </div>

      {/* Mobile menu — absolute so it anchors to the fixed header, not the viewport */}
      <div
        id="mobile-menu"
        inert={!open || undefined}
        className={`absolute inset-x-0 top-full overflow-hidden bg-paper transition-[max-height,opacity] duration-500 lg:hidden ${
          open
            ? 'max-h-[calc(100svh_-_4.5rem)] border-t border-ink/10 opacity-100 shadow-[0_28px_60px_-28px_rgba(25,22,16,0.5)]'
            : 'pointer-events-none max-h-0 opacity-0'
        }`}
      >
        <div className="max-h-[calc(100svh_-_4.5rem)] overflow-y-auto overscroll-contain">
          <Container className="py-6">
            <nav className="flex flex-col" aria-label="Mobile">
              {navLinks.map((link, index) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  end={link.path === '/'}
                  ref={index === 0 ? firstLink : undefined}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `font-display border-b border-ink/10 py-4 text-2xl font-medium transition-colors ${
                      isActive ? 'text-forest-700' : 'text-ink hover:text-forest-700'
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              ))}
            </nav>

            <div className="mt-6 flex flex-col gap-3">
              <Link
                to="/get-involved"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-forest-700 px-6 py-3.5 font-semibold text-paper transition hover:bg-forest-800"
              >
                Give now
                <Icon name="arrow-right" className="h-4 w-4" />
              </Link>
              <a
                href={site.phoneHref}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-ink/15 px-6 py-3.5 font-semibold text-ink transition hover:bg-ink/5"
              >
                <Icon name="phone" className="h-4 w-4" />
                {site.phone}
              </a>
            </div>
          </Container>
        </div>
      </div>
    </header>
  )
}
