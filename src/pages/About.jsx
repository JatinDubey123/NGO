import { site } from '../data/content'
import {
  CTASection,
  ImpactBand,
  PageHero,
  Timeline,
  ValuesGrid,
} from '../components/sections'
import { Button, Container, Eyebrow, Icon, Reveal, Section, StatBlock } from '../components/ui'

const pillars = [
  {
    icon: 'bowl',
    title: 'Our mission',
    text: 'To eliminate hunger and empower lives by making food, education and support accessible to all. We believe in building a better world — one act of kindness at a time.',
  },
  {
    icon: 'globe',
    title: 'Our vision',
    text: 'A society where dignity is never conditional, where no child studies hungry, and where sharing what we have is simply how we live.',
  },
  {
    icon: 'hand-heart',
    title: 'Our promise',
    text: 'Every contribution is treated as a trust. We report back on what it built, where it went, and who it reached.',
  },
]

export default function About() {
  return (
    <>
      <PageHero
        eyebrow="About us"
        title="Compassion, turned into action"
        lead="At Jivan Aahar we unite compassion with action — creating real change, one meal, one life at a time."
      >
        <div className="flex flex-wrap gap-3">
          <Button to="/get-involved" variant="accent" icon="arrow-right">
            Get involved
          </Button>
          <Button to="/programs" variant="ghostLight">
            Our programs
          </Button>
        </div>
      </PageHero>

      <Section tone="paper">
        <Container className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-20">
          <Reveal className="order-2 lg:order-1">
            <Eyebrow>Who we are</Eyebrow>
            <h2 className="font-display mt-5 text-h2 font-semibold text-ink">
              We started with a pot of food and a promise
            </h2>
            <div className="mt-6 space-y-4 text-lead text-ink-soft">
              <p>
                In 2020, a small group of volunteers in Nagpur began cooking and sharing meals with
                neighbours who had gone without. That single kitchen became Jivan Aahar — literally
                &ldquo;food for life&rdquo;, the old promise that everyone eats, together.
              </p>
              <p>
                From there our work grew: school kits for children, health camps for families,
                training for women, and greener streets for all of us. Today over a thousand donors
                and volunteers power drives across twelve cities.
              </p>
              <p>
                The mission has never changed — no one should sleep hungry, and dignity should never
                depend on circumstance.
              </p>
            </div>
            <div className="mt-8 flex flex-wrap gap-4 text-sm text-ink-soft">
              <span className="inline-flex items-center gap-2">
                <Icon name="map-pin" className="h-4 w-4 text-forest-600" />
                {site.address.line2}
              </span>
              <span className="inline-flex items-center gap-2">
                <Icon name="calendar" className="h-4 w-4 text-forest-600" />
                Founded {site.founded}
              </span>
            </div>
          </Reveal>

          <Reveal className="order-1 lg:order-2">
            <div className="relative">
              <div className="overflow-hidden rounded-5xl">
                <img
                  src="/assets/Team-BDOzWGe7.jpg"
                  alt="The Jivan Aahar team in the field"
                  loading="lazy"
                  className="aspect-[4/5] w-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-4 hidden rounded-4xl border border-ink/10 bg-paper p-6 shadow-xl shadow-ink/10 sm:block">
                <StatBlock to={25000} suffix="+" label="Meals served" />
              </div>
            </div>
          </Reveal>
        </Container>
      </Section>

      <Section tone="paper2">
        <Container>
          <Reveal className="max-w-2xl">
            <Eyebrow>What drives us</Eyebrow>
            <h2 className="font-display mt-5 text-h2 font-semibold text-ink">
              Three ideas we never compromise on
            </h2>
          </Reveal>
          <Reveal className="mt-14 grid gap-6 md:grid-cols-3" stagger>
            {pillars.map((pillar, index) => (
              <div
                key={pillar.title}
                className="group flex flex-col rounded-4xl border border-ink/10 bg-paper p-8"
              >
                <span className="grid h-14 w-14 place-items-center rounded-2xl bg-forest-900 text-marigold-300 transition-transform duration-500 group-hover:-rotate-6">
                  <Icon name={pillar.icon} className="h-6 w-6" />
                </span>
                <span
                  className="mt-5 text-xs font-semibold tracking-[0.2em] text-ink-mute uppercase"
                  aria-hidden="true"
                >
                  {String(index + 1).padStart(2, '0')}
                </span>
                <h3 className="font-display mt-2 text-xl font-medium text-ink">{pillar.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-soft">{pillar.text}</p>
              </div>
            ))}
          </Reveal>
        </Container>
      </Section>

      <Timeline tone="paper" />
      <ImpactBand />
      <ValuesGrid tone="paper" />
      <CTASection
        eyebrow="Work with us"
        title="Whether you give, volunteer or spread the word — you matter"
        text="Every action helps us nourish lives and restore hope. Join a movement of people who refuse to look away."
      />
    </>
  )
}
