import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import {
  coreValues,
  fundUses,
  heroSlides,
  impactStats,
  journeySteps,
  programs,
  stories,
  timeline,
  waysToGive,
} from '../data/content'
import { usePrefersReducedMotion } from '../hooks'
import { Button, Container, Eyebrow, Icon, Reveal, Section, StatBlock } from './ui'

/* ================================================================ Hero */

export function Hero() {
  const [slide, setSlide] = useState(0)
  const reduced = usePrefersReducedMotion()

  useEffect(() => {
    if (reduced) return
    const id = setInterval(() => setSlide((s) => (s + 1) % heroSlides.length), 5200)
    return () => clearInterval(id)
  }, [reduced])

  const active = heroSlides[slide]

  return (
    <section className="relative isolate flex min-h-[100svh] flex-col justify-end overflow-hidden bg-forest-950">
      {heroSlides.map((item, index) => (
        <img
          key={item.src}
          src={item.src}
          alt=""
          aria-hidden="true"
          loading={index === 0 ? 'eager' : 'lazy'}
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-[1400ms] ease-out ${
            index === slide ? 'opacity-100' : 'opacity-0'
          }`}
        />
      ))}

      <div
        className="absolute inset-0 bg-gradient-to-t from-forest-950 via-forest-950/70 to-forest-950/40"
        aria-hidden="true"
      />

      <Container className="relative z-10 pt-32 pb-12 sm:pb-16">
        <div className="max-w-4xl">
          <h1 className="font-display text-display font-semibold text-paper">
            Hunger ends where <span className="text-marigold-300">sharing</span> begins.
          </h1>

          <p className="text-lead mt-6 max-w-2xl text-paper/80">
            Jivan Aahar means nourishment for life — the simple promise that no one should go
            without. Since 2020 we have served meals, ration kits and care across twelve cities.
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <Button to="/get-involved" variant="accent" size="lg" icon="arrow-right">
              Give today
            </Button>
            <Button to="/programs" variant="ghostLight" size="lg">
              See our programs
            </Button>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-6 border-t border-paper/15 pt-6 sm:flex-row sm:items-end sm:justify-between">
          <div className="flex items-center gap-4" aria-live="polite">
            <span className="font-display text-sm font-medium text-paper/90 sm:text-base">
              {active.caption}
            </span>
          </div>

          <div className="flex items-center gap-2" role="tablist" aria-label="Hero images">
            {heroSlides.map((item, index) => (
              <button
                key={item.src}
                type="button"
                role="tab"
                aria-selected={index === slide}
                aria-label={`Show: ${item.caption}`}
                onClick={() => setSlide(index)}
                className={`h-1.5 rounded-full transition-all duration-500 ${
                  index === slide ? 'w-10 bg-marigold-300' : 'w-4 bg-paper/40 hover:bg-paper/70'
                }`}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}

/* ============================================================ PageHero */

export function PageHero({ eyebrow, title, lead, children }) {
  return (
    <section className="relative isolate overflow-hidden bg-forest-950 pt-36 pb-20 text-paper sm:pt-44 sm:pb-28">
      <div className="grain absolute inset-0 opacity-[0.06]" aria-hidden="true" />
      <div
        className="pointer-events-none absolute -top-32 -right-24 h-96 w-96 rounded-full bg-marigold-500/20 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -bottom-40 -left-24 h-96 w-96 rounded-full bg-forest-600/40 blur-3xl"
        aria-hidden="true"
      />
      <Container className="relative z-10">
        <Reveal>
          <Eyebrow tone="light">{eyebrow}</Eyebrow>
          <h1 className="font-display mt-6 max-w-3xl text-h1 font-semibold">{title}</h1>
          {lead ? <p className="text-lead mt-6 max-w-2xl text-paper/75">{lead}</p> : null}
          {children ? <div className="mt-9">{children}</div> : null}
        </Reveal>
      </Container>
    </section>
  )
}

/* ========================================================== ImpactBand */

export function ImpactBand() {
  return (
    <Section tone="forest" className="overflow-hidden">
      <Container>
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <Reveal className="max-w-xl">
            <Eyebrow tone="light">Impact to date</Eyebrow>
            <h2 className="font-display mt-5 text-h2 font-semibold">
              Small gifts, added up, change everything
            </h2>
          </Reveal>
          <details className="group max-w-sm">
            <summary className="inline-flex cursor-pointer list-none items-center gap-2 text-sm font-semibold text-marigold-300 marker:content-none">
              <Icon name="chevron-down" className="h-4 w-4 transition group-open:rotate-180" />
              The details
            </summary>
            <p className="mt-3 text-sm leading-relaxed text-paper/60">
              Figures are cumulative since 2020 and cover cooked meals, ration kits and supplies.
              Full reporting is shared with donors each quarter.
            </p>
          </details>
        </div>

        <Reveal className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4" stagger>
          {impactStats.map((stat) => (
            <div key={stat.label} className="border-t border-paper/15 pt-6">
              <StatBlock
                to={stat.to}
                suffix={stat.suffix}
                label={stat.label}
                detail={stat.detail}
                tone="light"
              />
            </div>
          ))}
        </Reveal>
      </Container>
    </Section>
  )
}

/* ============================================================= Journey */

export function JourneySection({ tone = 'paper' }) {
  return (
    <Section tone={tone} id="your-impact">
      <Container>
        <Reveal className="max-w-2xl">
          <Eyebrow>Your gift, in real terms</Eyebrow>
          <h2 className="font-display mt-5 text-h2 font-semibold text-ink">
            What a donation actually does
          </h2>
          <p className="text-lead mt-5 text-ink-soft">
            No vague promises. Here is roughly what different amounts provide on the ground.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-px overflow-hidden rounded-4xl border border-ink/10 bg-ink/10 sm:grid-cols-2 lg:grid-cols-4">
          {journeySteps.map((step, index) => (
            <Reveal
              key={step.amount}
              delay={index * 0.05}
              className="group relative flex flex-col bg-paper p-8 transition-colors duration-500 hover:bg-forest-900"
            >
              <span className="font-display text-3xl font-semibold text-forest-700 transition-colors group-hover:text-marigold-300">
                {step.amount}
              </span>
              <h3 className="mt-5 text-lg font-semibold text-ink transition-colors group-hover:text-paper">
                {step.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-soft transition-colors group-hover:text-paper/70">
                {step.text}
              </p>
              <span
                className="mt-auto pt-6 text-xs font-semibold tracking-[0.2em] uppercase text-ink-mute transition-colors group-hover:text-paper/50"
                aria-hidden="true"
              >
                {String(index + 1).padStart(2, '0')}
              </span>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-10">
          <Button to="/get-involved" variant="solid" icon="arrow-right">
            Choose your amount
          </Button>
        </Reveal>
      </Container>
    </Section>
  )
}

/* ====================================================== ProgramsPreview */

export function ProgramsPreview({ limit = 4, showAll = true, tone = 'paper2' }) {
  const items = limit ? programs.slice(0, limit) : programs

  return (
    <Section tone={tone}>
      <Container>
        <Reveal className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <Eyebrow>Programs</Eyebrow>
            <h2 className="font-display mt-5 text-h2 font-semibold text-ink">
              Six ways we show up
            </h2>
          </div>
          {showAll ? (
            <Button to="/programs" variant="outline" size="sm" icon="arrow-right">
              All programs
            </Button>
          ) : null}
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((program, index) => (
            <Reveal
              key={program.id}
              delay={(index % 3) * 0.06}
              className={index === 0 ? 'sm:col-span-2 lg:col-span-1' : ''}
            >
              <Link
                to={`/programs#${program.id}`}
                className="group flex h-full flex-col overflow-hidden rounded-4xl border border-ink/10 bg-paper"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={program.image}
                    alt={program.imageAlt}
                    loading="lazy"
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  />
                  <span className="absolute top-4 left-4 grid h-10 w-10 place-items-center rounded-full bg-paper/90 text-forest-700 backdrop-blur">
                    <Icon name={program.icon} className="h-5 w-5" />
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-display text-xl font-medium text-ink">{program.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-ink-soft">{program.text}</p>
                  <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-forest-700">
                    Explore program
                    <Icon
                      name="arrow-right"
                      className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  )
}

/* ======================================================== Transparency */

export function TransparencySection({ tone = 'paper' }) {
  return (
    <Section tone={tone}>
      <Container className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-start lg:gap-20">
        <Reveal className="lg:sticky lg:top-32">
          <Eyebrow>Where it goes</Eyebrow>
          <h2 className="font-display mt-5 text-h2 font-semibold text-ink">
            We treat your trust as the real donation
          </h2>
          <p className="text-lead mt-5 text-ink-soft">
            Every rupee is accounted for and reported back. Here is what your support builds, in
            plain language.
          </p>
          <Button to="/about" variant="outline" className="mt-8" icon="arrow-right">
            Read our story
          </Button>
        </Reveal>

        <Reveal className="space-y-4" stagger>
          {fundUses.map((use, index) => (
            <div
              key={use.title}
              className="group flex items-start gap-6 rounded-4xl border border-ink/10 bg-paper-2/60 p-7 transition-colors duration-500 hover:border-forest-600/40 hover:bg-paper-2"
            >
              <span className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-forest-900 text-marigold-300 transition-transform duration-500 group-hover:-rotate-6">
                <Icon name={use.icon} className="h-6 w-6" />
              </span>
              <div>
                <span className="text-xs font-semibold tracking-[0.2em] text-ink-mute uppercase">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <h3 className="font-display mt-1 text-xl font-medium text-ink">{use.title}</h3>
                <p className="mt-2 leading-relaxed text-ink-soft">{use.text}</p>
              </div>
            </div>
          ))}
        </Reveal>
      </Container>
    </Section>
  )
}

/* ============================================================= Stories */

export function StoriesSection({ tone = 'ink' }) {
  const [index, setIndex] = useState(0)
  const current = stories[index]

  const go = (next) => setIndex((next + stories.length) % stories.length)

  return (
    <Section tone={tone} className="overflow-hidden">
      <Container>
        <Reveal className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <Eyebrow tone="light">Voices</Eyebrow>
            <h2 className="font-display mt-5 text-h2 font-semibold">
              The people behind the numbers
            </h2>
          </div>
          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => go(index - 1)}
              aria-label="Previous story"
              className="grid h-12 w-12 place-items-center rounded-full border border-paper/20 text-paper transition hover:bg-paper/10"
            >
              <Icon name="chevron-left" className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={() => go(index + 1)}
              aria-label="Next story"
              className="grid h-12 w-12 place-items-center rounded-full border border-paper/20 text-paper transition hover:bg-paper/10"
            >
              <Icon name="chevron-right" className="h-5 w-5" />
            </button>
          </div>
        </Reveal>

        <div className="mt-14 grid items-center gap-10 lg:grid-cols-[1fr_0.85fr] lg:gap-16">
          <Reveal className="order-2 lg:order-1">
            <blockquote>
              <p
                key={current.name}
                className="font-display text-2xl leading-snug font-medium text-paper sm:text-3xl lg:text-4xl"
              >
                &ldquo;{current.quote}&rdquo;
              </p>
              <footer className="mt-8 flex items-center gap-4">
                <span className="h-px w-10 bg-marigold-300" aria-hidden="true" />
                <div>
                  <cite className="block text-base font-semibold not-italic text-paper">
                    {current.name}
                  </cite>
                  <span className="block text-sm text-paper/60">
                    {current.role} · {current.place}
                  </span>
                </div>
              </footer>
            </blockquote>

            <div className="mt-10 flex gap-2">
              {stories.map((story, i) => (
                <button
                  key={story.name}
                  type="button"
                  onClick={() => setIndex(i)}
                  aria-label={`Show story from ${story.name}`}
                  aria-current={i === index}
                  className={`h-1.5 rounded-full transition-all duration-500 ${
                    i === index ? 'w-10 bg-marigold-300' : 'w-4 bg-paper/30 hover:bg-paper/60'
                  }`}
                />
              ))}
            </div>
          </Reveal>

          <Reveal className="order-1 lg:order-2">
            <div className="relative aspect-[4/5] overflow-hidden rounded-5xl">
              <img
                key={current.image}
                src={current.image}
                alt={`${current.name}, ${current.role}`}
                loading="lazy"
                className="h-full w-full object-cover"
              />
              <div
                className="absolute inset-0 bg-gradient-to-t from-ink/60 to-transparent"
                aria-hidden="true"
              />
            </div>
          </Reveal>
        </div>
      </Container>
    </Section>
  )
}

/* ========================================================== WaysToGive */

export function WaysToGive({ tone = 'paper2' }) {
  return (
    <Section tone={tone}>
      <Container>
        <Reveal className="max-w-2xl">
          <Eyebrow>Get involved</Eyebrow>
          <h2 className="font-display mt-5 text-h2 font-semibold text-ink">
            There are many ways to make a difference
          </h2>
          <p className="text-lead mt-5 text-ink-soft">
            Give money, give time, give your voice. Every path starts with a single step.
          </p>
        </Reveal>

        <Reveal className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4" stagger>
          {waysToGive.map((way) => (
            <div
              key={way.title}
              className="group flex flex-col rounded-4xl border border-ink/10 bg-paper p-7 transition duration-500 hover:-translate-y-1 hover:shadow-xl hover:shadow-ink/5"
            >
              <span className="grid h-12 w-12 place-items-center rounded-2xl bg-marigold-100 text-marigold-700 transition-colors duration-500 group-hover:bg-marigold-300 group-hover:text-ink">
                <Icon name={way.icon} className="h-6 w-6" />
              </span>
              <h3 className="font-display mt-6 text-xl font-medium text-ink">{way.title}</h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-soft">{way.text}</p>
              <Link
                to={way.to}
                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-forest-700 transition-colors hover:text-forest-900"
              >
                {way.cta}
                <Icon
                  name="arrow-right"
                  className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>
            </div>
          ))}
        </Reveal>
      </Container>
    </Section>
  )
}

/* ================================================================= CTA */

export function CTASection({
  eyebrow = 'Join the movement',
  title = 'Be the change you want to see',
  text = 'Your small contribution can light up lives. Join hands with us to build a better tomorrow.',
}) {
  return (
    <Section tone="marigold" className="grain overflow-hidden">
      <Container className="relative">
        <Reveal className="mx-auto max-w-3xl text-center">
          <Eyebrow className="justify-center">{eyebrow}</Eyebrow>
          <h2 className="font-display mt-5 text-h1 font-semibold text-ink">{title}</h2>
          <p className="text-lead mx-auto mt-5 max-w-2xl text-ink/75">{text}</p>
          <div className="mt-9 flex flex-wrap justify-center gap-3">
            <Button to="/get-involved" variant="ink" size="lg" icon="arrow-right">
              Give now
            </Button>
            <Button to="/contact" variant="outline" size="lg">
              Talk to our team
            </Button>
          </div>
        </Reveal>
      </Container>
    </Section>
  )
}

/* ========================================================= ValuesGrid */

export function ValuesGrid({ tone = 'paper2' }) {
  return (
    <Section tone={tone}>
      <Container>
        <Reveal className="max-w-2xl">
          <Eyebrow>What guides us</Eyebrow>
          <h2 className="font-display mt-5 text-h2 font-semibold text-ink">Our core values</h2>
        </Reveal>
        <Reveal className="mt-14 grid gap-px overflow-hidden rounded-4xl border border-ink/10 bg-ink/10 sm:grid-cols-2 lg:grid-cols-3" stagger>
          {coreValues.map((value, index) => (
            <div
              key={value.title}
              className="group bg-paper p-8 transition-colors duration-500 hover:bg-forest-900"
            >
              <span
                className="text-xs font-semibold tracking-[0.2em] text-ink-mute uppercase transition-colors group-hover:text-paper/50"
                aria-hidden="true"
              >
                {String(index + 1).padStart(2, '0')}
              </span>
              <h3 className="font-display mt-4 text-xl font-medium text-ink transition-colors group-hover:text-paper">
                {value.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-soft transition-colors group-hover:text-paper/70">
                {value.text}
              </p>
            </div>
          ))}
        </Reveal>
      </Container>
    </Section>
  )
}

/* =========================================================== Timeline */

export function Timeline({ tone = 'paper' }) {
  return (
    <Section tone={tone}>
      <Container>
        <Reveal className="max-w-2xl">
          <Eyebrow>Our story</Eyebrow>
          <h2 className="font-display mt-5 text-h2 font-semibold text-ink">
            From one kitchen to twelve cities
          </h2>
        </Reveal>

        <ol className="mt-16 border-l border-ink/15 pl-8 sm:pl-12">
          {timeline.map((item, index) => (
            <Reveal as="li" key={item.year} delay={index * 0.05} className="relative pb-12 last:pb-0">
              <span
                className="absolute top-1.5 left-[-2rem] h-3.5 w-3.5 -translate-x-1/2 rounded-full border-2 border-paper bg-forest-700 sm:left-[-3rem]"
                aria-hidden="true"
              />
              <span className="text-sm font-semibold tracking-[0.2em] text-marigold-600 uppercase">
                {item.year}
              </span>
              <h3 className="font-display mt-2 text-xl font-medium text-ink sm:text-2xl">
                {item.title}
              </h3>
              <p className="mt-3 max-w-xl leading-relaxed text-ink-soft">{item.text}</p>
            </Reveal>
          ))}
        </ol>
      </Container>
    </Section>
  )
}
