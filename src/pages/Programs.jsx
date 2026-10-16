import { programs } from '../data/content'
import { CTASection, PageHero, WaysToGive } from '../components/sections'
import { Button, Container, Icon, Reveal, Section, StatBlock } from '../components/ui'

export default function Programs() {
  return (
    <>
      <PageHero
        eyebrow="Our programs"
        title="Six ways we show up for our neighbours"
        lead="Hunger relief, education, healthcare, women's empowerment, the environment and child welfare — designed to work together so change actually lasts."
      >
        <div className="flex flex-wrap gap-3">
          <Button to="/get-involved" variant="accent" icon="arrow-right">
            Fund a program
          </Button>
          <Button to="/contact" variant="ghostLight">
            Partner with us
          </Button>
        </div>
      </PageHero>

      <Section tone="paper">
        <Container>
          <nav aria-label="Jump to a program" className="flex flex-wrap gap-2">
            {programs.map((program) => (
              <a
                key={program.id}
                href={`#${program.id}`}
                className="inline-flex items-center gap-2 rounded-full border border-ink/15 px-4 py-2 text-sm font-medium text-ink-soft transition hover:border-forest-600 hover:text-forest-800"
              >
                <Icon name={program.icon} className="h-4 w-4" />
                {program.title}
              </a>
            ))}
          </nav>
        </Container>
      </Section>

      <div className="bg-paper pb-20 sm:pb-24 lg:pb-32">
        <Container className="space-y-20 sm:space-y-28">
          {programs.map((program, index) => {
            const flipped = index % 2 === 1
            return (
              <section
                key={program.id}
                id={program.id}
                aria-labelledby={`${program.id}-title`}
                className="grid scroll-mt-32 items-center gap-10 lg:grid-cols-2 lg:gap-16"
              >
                <Reveal className={flipped ? 'lg:order-2' : ''}>
                  <div className="relative overflow-hidden rounded-5xl">
                    <img
                      src={program.image}
                      alt={program.imageAlt}
                      loading="lazy"
                      className="aspect-[5/4] w-full object-cover"
                    />
                    <span className="absolute top-5 left-5 grid h-12 w-12 place-items-center rounded-full bg-paper/90 text-forest-700 backdrop-blur">
                      <Icon name={program.icon} className="h-6 w-6" />
                    </span>
                  </div>
                </Reveal>

                <Reveal className={flipped ? 'lg:order-1' : ''}>
                  <span className="text-xs font-semibold tracking-[0.2em] text-marigold-600 uppercase">
                    Program {String(index + 1).padStart(2, '0')}
                  </span>
                  <h2
                    id={`${program.id}-title`}
                    className="font-display mt-3 text-h3 font-semibold text-ink"
                  >
                    {program.title}
                  </h2>
                  <p className="text-lead mt-4 text-ink-soft">{program.text}</p>

                  <ul className="mt-6 space-y-2">
                    {program.outcomes.map((outcome) => (
                      <li key={outcome} className="flex items-center gap-3 text-sm text-ink-soft">
                        <span className="grid h-5 w-5 shrink-0 place-items-center rounded-full bg-forest-100 text-forest-700">
                          <Icon name="check" className="h-3 w-3" strokeWidth={2.5} />
                        </span>
                        {outcome}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-8 flex items-center gap-8 border-t border-ink/10 pt-6">
                    <StatBlock
                      to={program.stat.to}
                      suffix={program.stat.suffix}
                      label={program.stat.label}
                    />
                    <Button to="/get-involved" variant="outline" size="sm" icon="arrow-right">
                      Support this
                    </Button>
                  </div>
                </Reveal>
              </section>
            )
          })}
        </Container>
      </div>

      <WaysToGive tone="paper2" />
      <CTASection
        eyebrow="Make it possible"
        title="Pick the program closest to your heart"
        text="Direct your gift to hunger relief, education, healthcare, women's empowerment or wherever the need is greatest."
      />
    </>
  )
}
