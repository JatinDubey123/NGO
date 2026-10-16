import { useCallback, useEffect, useRef } from 'react'
import { useEscape, useLockBody } from '../hooks'
import { Icon } from './ui'

export default function Lightbox({ items, index, onClose, onChange }) {
  const closeRef = useRef(null)
  const open = index != null && index >= 0
  const item = open ? items[index] : null

  useLockBody(open)
  useEscape(onClose, open)

  const step = useCallback(
    (delta) => {
      onChange((index + delta + items.length) % items.length)
    },
    [index, items.length, onChange],
  )

  useEffect(() => {
    if (!open) return
    closeRef.current?.focus()
    const onKey = (event) => {
      if (event.key === 'ArrowRight') step(1)
      if (event.key === 'ArrowLeft') step(-1)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open, step])

  if (!open || !item) return null

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`${item.title} — image ${index + 1} of ${items.length}`}
      className="fixed inset-0 z-[80] flex items-center justify-center bg-ink/90 p-4 backdrop-blur-md sm:p-8"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose()
      }}
    >
      <button
        ref={closeRef}
        type="button"
        onClick={onClose}
        aria-label="Close image viewer"
        className="absolute top-5 right-5 grid h-12 w-12 place-items-center rounded-full border border-paper/20 text-paper transition hover:bg-paper/10"
      >
        <Icon name="close" className="h-5 w-5" />
      </button>

      <button
        type="button"
        onClick={() => step(-1)}
        aria-label="Previous image"
        className="absolute left-3 grid h-12 w-12 place-items-center rounded-full border border-paper/20 text-paper transition hover:bg-paper/10 sm:left-8"
      >
        <Icon name="chevron-left" className="h-5 w-5" />
      </button>

      <figure className="max-h-full w-full max-w-4xl">
        <img
          src={item.image}
          alt={item.title}
          className="mx-auto max-h-[70vh] w-auto rounded-3xl object-contain"
        />
        <figcaption className="mt-5 text-center text-paper">
          <span className="font-display block text-xl font-medium">{item.title}</span>
          <span className="mt-1 block text-sm text-paper/70">{item.description}</span>
          <span className="mt-2 block text-xs tracking-[0.2em] text-marigold-300 uppercase">
            {item.category} · {index + 1} / {items.length}
          </span>
        </figcaption>
      </figure>

      <button
        type="button"
        onClick={() => step(1)}
        aria-label="Next image"
        className="absolute right-3 grid h-12 w-12 place-items-center rounded-full border border-paper/20 text-paper transition hover:bg-paper/10 sm:right-8"
      >
        <Icon name="chevron-right" className="h-5 w-5" />
      </button>
    </div>
  )
}
