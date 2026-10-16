import { useMemo, useState } from 'react'
import { galleryItems } from '../data/content'
import Lightbox from '../components/Lightbox'
import { CTASection, PageHero } from '../components/sections'
import { Container, Icon, Reveal, Section } from '../components/ui'

const ALL = 'All'

export default function Gallery() {
  const [filter, setFilter] = useState(ALL)
  const [index, setIndex] = useState(null)

  const categories = useMemo(
    () => [ALL, ...Array.from(new Set(galleryItems.map((item) => item.category)))],
    [],
  )

  const items = useMemo(
    () =>
      filter === ALL ? galleryItems : galleryItems.filter((item) => item.category === filter),
    [filter],
  )

  return (
    <>
      <PageHero
        eyebrow="Gallery"
        title="Moments from the field"
        lead="A glimpse into the drives, camps and kitchens that your support makes possible."
      />

      <Section tone="paper">
        <Container>
          <div className="flex flex-wrap gap-2" role="tablist" aria-label="Filter gallery">
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                role="tab"
                aria-selected={filter === category}
                onClick={() => {
                  setFilter(category)
                  setIndex(null)
                }}
                className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                  filter === category
                    ? 'bg-forest-700 text-paper'
                    : 'border border-ink/15 text-ink-soft hover:border-forest-600 hover:text-forest-800'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="mt-10 columns-1 gap-5 sm:columns-2 lg:columns-3">
            {items.map((item, i) => (
              <Reveal key={item.id} y={24} className="mb-5 break-inside-avoid">
                <button
                  type="button"
                  onClick={() => setIndex(i)}
                  aria-label={`Open ${item.title}`}
                  className="group relative block w-full overflow-hidden rounded-4xl border border-ink/10 text-left"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                    className="w-full object-cover transition duration-700 group-hover:scale-105"
                  />
                  <span
                    className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/45 to-transparent opacity-90 transition-opacity duration-500 group-hover:opacity-100"
                    aria-hidden="true"
                  />
                  <span className="absolute inset-x-0 bottom-0 p-5 text-paper">
                    <span className="text-[0.68rem] font-semibold tracking-[0.2em] text-marigold-300 uppercase">
                      {item.category}
                    </span>
                    <span className="font-display mt-1.5 block text-lg font-medium">
                      {item.title}
                    </span>
                    <span className="mt-1 block text-sm text-paper/70">{item.description}</span>
                  </span>
                  <span
                    className="absolute top-4 right-4 grid h-10 w-10 translate-y-2 place-items-center rounded-full bg-paper/90 text-ink opacity-0 backdrop-blur transition duration-500 group-hover:translate-y-0 group-hover:opacity-100"
                    aria-hidden="true"
                  >
                    <Icon name="plus" className="h-4 w-4" />
                  </span>
                </button>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      <Lightbox items={items} index={index} onClose={() => setIndex(null)} onChange={setIndex} />

      <CTASection
        eyebrow="Be part of the next frame"
        title="Your name could be in our next photo"
        text="Volunteers make every drive happen. Join us in the field and see the difference up close."
      />
    </>
  )
}
