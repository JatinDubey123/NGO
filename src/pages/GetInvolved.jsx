import { site } from '../data/content'
import DonationWidget from '../components/DonationWidget'
import { CTASection, JourneySection, PageHero, WaysToGive } from '../components/sections'
import { Container, Eyebrow, Icon, Reveal, Section } from '../components/ui'

const reassurance = [
  { icon: 'shield', text: 'Every rupee is tracked and reported back to you.' },
  { icon: 'hand-heart', text: 'Gifts are turned into meals, kits and care within weeks.' },
  { icon: 'users', text: 'Over 1,200 donors already power this work.' },
  { icon: 'globe', text: 'Programs run across twelve cities and growing.' },
]

const inKind = [
  'Groceries, rice, oil and dry ration',
  'Blankets, clothes and hygiene kits',
  'Books, stationery and school bags',
  'Vehicles, drivers and logistics help',
]

export default function GetInvolved() {
  return (
    <>
      <PageHero
        eyebrow="Get involved"
        title="Turn your kindness into a full plate"
        lead="Give what you can — money, time or resources. Every contribution goes straight into meals, kits and care for people who need them."
      />

      <Section tone="paper">
        <Container className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-start lg:gap-16">
          <Reveal className="lg:sticky lg:top-32">
            <Eyebrow>Why give here</Eyebrow>
            <h2 className="font-display mt-5 text-h2 font-semibold text-ink">
              Generosity you can actually follow
            </h2>
            <p className="text-lead mt-5 text-ink-soft">
              We keep giving simple and honest. Choose an amount, tell us how often, and we will show
              you exactly what it becomes.
            </p>

            <ul className="mt-8 space-y-4">
              {reassurance.map((item) => (
                <li key={item.text} className="flex items-start gap-4">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-2xl bg-forest-100 text-forest-700">
                    <Icon name={item.icon} className="h-5 w-5" />
                  </span>
                  <span className="pt-2 text-ink-soft">{item.text}</span>
                </li>
              ))}
            </ul>

            <div className="mt-10 rounded-4xl border border-ink/10 bg-paper-2/60 p-6">
              <h3 className="font-display text-lg font-medium text-ink">Prefer to give directly?</h3>
              <p className="mt-2 text-sm text-ink-soft">
                Reach us for bank transfer or UPI details and our team will guide you through it.
              </p>
              <div className="mt-4 flex flex-col gap-2 text-sm">
                <a
                  href={`mailto:${site.email}`}
                  className="inline-flex items-center gap-2 font-semibold text-forest-700 hover:text-forest-900"
                >
                  <Icon name="mail" className="h-4 w-4" />
                  {site.email}
                </a>
                <a
                  href={site.phoneHref}
                  className="inline-flex items-center gap-2 font-semibold text-forest-700 hover:text-forest-900"
                >
                  <Icon name="phone" className="h-4 w-4" />
                  {site.phone}
                </a>
              </div>
            </div>
          </Reveal>

          <Reveal>
            <DonationWidget />
          </Reveal>
        </Container>
      </Section>

      <JourneySection tone="paper2" />

      <Section tone="paper">
        <Container className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-center lg:gap-16">
          <Reveal>
            <Eyebrow>Give in kind</Eyebrow>
            <h2 className="font-display mt-5 text-h2 font-semibold text-ink">
              Not everything has to be money
            </h2>
            <p className="text-lead mt-5 text-ink-soft">
              If you have goods, skills or space to offer, we will put them to work. Here is what our
              drives always need.
            </p>
          </Reveal>
          <Reveal className="grid gap-3 sm:grid-cols-2" stagger>
            {inKind.map((item) => (
              <div
                key={item}
                className="flex items-start gap-3 rounded-3xl border border-ink/10 bg-paper-2/50 p-5"
              >
                <span className="grid h-5 w-5 shrink-0 place-items-center rounded-full bg-forest-600 text-paper">
                  <Icon name="check" className="h-3 w-3" strokeWidth={2.5} />
                </span>
                <span className="text-sm text-ink-soft">{item}</span>
              </div>
            ))}
          </Reveal>
        </Container>
      </Section>

      <WaysToGive tone="paper2" />
      <CTASection
        eyebrow="Thank you"
        title="Every gift becomes a shared meal"
        text="You do not have to change the whole world. Just one table at a time is enough."
      />
    </>
  )
}
