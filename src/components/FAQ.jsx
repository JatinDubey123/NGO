import { useId, useState } from 'react'
import { faqs } from '../data/content'
import { Container, Eyebrow, Icon, Reveal } from './ui'

export default function FAQ() {
  const [open, setOpen] = useState(0)
  const baseId = useId()

  return (
    <section className="bg-paper py-20 sm:py-24 lg:py-32" aria-labelledby={`${baseId}-title`}>
      <Container className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <Reveal className="lg:sticky lg:top-32 lg:self-start">
          <Eyebrow>Questions</Eyebrow>
          <h2 id={`${baseId}-title`} className="text-h2 font-display mt-5 font-semibold text-ink">
            Everything you need to know
          </h2>
          <p className="text-lead mt-5 max-w-md text-ink-soft">
            Still unsure about something? Write to us and a real person on the team will get back to
            you.
          </p>
          <a
            href="mailto:hello@danapaani.org"
            className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-forest-700 hover:text-forest-900"
          >
            hello@danapaani.org
            <Icon name="arrow-up-right" className="h-4 w-4" />
          </a>
        </Reveal>

        <Reveal className="divide-y divide-ink/10 border-y border-ink/10" stagger>
          {faqs.map((item, index) => {
            const isOpen = open === index
            return (
              <div key={item.q}>
                <h3>
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? -1 : index)}
                    aria-expanded={isOpen}
                    aria-controls={`${baseId}-panel-${index}`}
                    id={`${baseId}-button-${index}`}
                    className="group flex w-full items-center justify-between gap-6 py-6 text-left"
                  >
                    <span className="font-display text-lg font-medium text-ink transition-colors group-hover:text-forest-700 sm:text-xl">
                      {item.q}
                    </span>
                    <span
                      className={`grid h-9 w-9 shrink-0 place-items-center rounded-full border transition duration-300 ${
                        isOpen
                          ? 'rotate-45 border-forest-700 bg-forest-700 text-paper'
                          : 'border-ink/15 text-ink-soft group-hover:border-forest-600 group-hover:text-forest-700'
                      }`}
                    >
                      <Icon name="plus" className="h-4 w-4" />
                    </span>
                  </button>
                </h3>
                <div
                  id={`${baseId}-panel-${index}`}
                  role="region"
                  aria-labelledby={`${baseId}-button-${index}`}
                  className="faq-panel"
                  data-open={isOpen}
                >
                  <div>
                    <p className="max-w-2xl pr-12 pb-6 text-ink-soft">{item.a}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </Reveal>
      </Container>
    </section>
  )
}
