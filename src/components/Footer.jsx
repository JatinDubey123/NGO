import { Link } from 'react-router-dom'
import { navLinks, programs, site } from '../data/content'
import Newsletter from './Newsletter'
import { Container, Icon } from './ui'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="relative overflow-hidden bg-forest-950 text-paper">
      <div
        className="pointer-events-none absolute -top-24 -right-24 h-96 w-96 rounded-full bg-forest-700/40 blur-3xl"
        aria-hidden="true"
      />

      <Container className="relative py-16 sm:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.3fr_1fr_1fr_1.3fr] lg:gap-10">
          <div>
            <div className="flex items-center gap-3">
              <span className="grid h-12 w-12 place-items-center overflow-hidden rounded-full ring-1 ring-paper/15">
                <img
                  src="/assets/logo.svg"
                  alt=""
                  className="h-full w-full object-cover"
                />
              </span>
              <span className="font-display text-xl font-semibold">{site.name}</span>
            </div>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-paper/70">
              Jivan Aahar is dedicated to fighting hunger and restoring dignity through every meal
              served. With compassion at our core, we believe access to food is a basic human right —
              not a privilege.
            </p>
            <div className="mt-6 flex gap-2">
              {site.socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="grid h-10 w-10 place-items-center rounded-full border border-paper/15 text-paper/70 transition hover:border-marigold-300 hover:text-marigold-300"
                >
                  <span className="text-xs font-semibold">{social.label.slice(0, 2)}</span>
                </a>
              ))}
            </div>
          </div>

          <nav aria-labelledby="footer-explore">
            <h2
              id="footer-explore"
              className="text-[0.72rem] font-semibold tracking-[0.2em] text-marigold-300 uppercase"
            >
              Explore
            </h2>
            <ul className="mt-5 space-y-3 text-sm">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-paper/70 transition hover:text-paper"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link to="/get-involved" className="text-paper/70 transition hover:text-paper">
                  Get involved
                </Link>
              </li>
            </ul>
          </nav>

          <nav aria-labelledby="footer-programs">
            <h2
              id="footer-programs"
              className="text-[0.72rem] font-semibold tracking-[0.2em] text-marigold-300 uppercase"
            >
              Programs
            </h2>
            <ul className="mt-5 space-y-3 text-sm">
              {programs.map((program) => (
                <li key={program.id}>
                  <Link
                    to={`/programs#${program.id}`}
                    className="text-paper/70 transition hover:text-paper"
                  >
                    {program.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="text-[0.72rem] font-semibold tracking-[0.2em] text-marigold-300 uppercase">
              Stay in touch
            </h2>
            <div className="mt-5">
              <Newsletter tone="light" />
            </div>
          </div>
        </div>

        <div className="mt-14 grid gap-6 border-t border-paper/10 pt-8 sm:grid-cols-3">
          <a
            href={`mailto:${site.email}`}
            className="flex items-start gap-3 text-sm text-paper/70 transition hover:text-paper"
          >
            <Icon name="mail" className="mt-0.5 h-4 w-4 shrink-0 text-marigold-300" />
            {site.email}
          </a>
          <a
            href={site.phoneHref}
            className="flex items-start gap-3 text-sm text-paper/70 transition hover:text-paper"
          >
            <Icon name="phone" className="mt-0.5 h-4 w-4 shrink-0 text-marigold-300" />
            {site.phone}
          </a>
          <p className="flex items-start gap-3 text-sm text-paper/70">
            <Icon name="map-pin" className="mt-0.5 h-4 w-4 shrink-0 text-marigold-300" />
            <span>
              {site.address.line1}
              <br />
              {site.address.line2}
            </span>
          </p>
        </div>

        <div className="mt-10 flex flex-col gap-4 border-t border-paper/10 pt-6 text-xs text-paper/50 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {site.name}. A registered non-profit organisation.
          </p>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            <a href="#" className="transition hover:text-paper">
              Privacy Policy
            </a>
            <a href="#" className="transition hover:text-paper">
              Terms of Use
            </a>
            <span>
              Designed &amp; developed by{' '}
              <a
                href="https://www.linkedin.com/in/tejas-khope/"
                target="_blank"
                rel="noreferrer"
                className="text-marigold-300 transition hover:underline"
              >
                Tejas Khope
              </a>
            </span>
          </div>
        </div>
      </Container>
    </footer>
  )
}
