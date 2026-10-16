import { useId, useState } from 'react'
import { Icon } from './ui'

export default function Newsletter({ tone = 'light' }) {
  const id = useId()
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState('idle')
  const [error, setError] = useState('')

  const onSubmit = (event) => {
    event.preventDefault()
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError('Please enter a valid email address.')
      setStatus('error')
      return
    }
    setError('')
    setStatus('done')
    setEmail('')
  }

  const dark = tone === 'light'
  const inputCls = `w-full rounded-full border px-5 py-3.5 text-sm outline-none transition ${
    dark
      ? 'border-paper/20 bg-paper/10 text-paper placeholder:text-paper/50 focus:border-marigold-300'
      : 'border-ink/15 bg-white text-ink placeholder:text-ink-mute focus:border-forest-600'
  }`
  const labelCls = dark ? 'text-marigold-300' : 'text-forest-600'
  const helpCls = dark ? 'text-paper/60' : 'text-ink-mute'

  return (
    <form onSubmit={onSubmit} noValidate className="w-full">
      <label
        htmlFor={`${id}-email`}
        className={`mb-3 block text-[0.72rem] font-semibold tracking-[0.2em] uppercase ${labelCls}`}
      >
        Add impact to your inbox
      </label>

      <div className="flex flex-col gap-3 sm:flex-row">
        <div className="relative flex-1">
          <input
            id={`${id}-email`}
            type="email"
            name="email"
            autoComplete="email"
            placeholder="you@example.com"
            value={email}
            onChange={(event) => {
              setEmail(event.target.value)
              if (status === 'error') setStatus('idle')
            }}
            aria-invalid={status === 'error'}
            aria-describedby={`${id}-help`}
            className={inputCls}
          />
        </div>
        <button
          type="submit"
          className={`inline-flex shrink-0 items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold transition duration-300 hover:-translate-y-0.5 ${
            dark
              ? 'bg-marigold-400 text-ink hover:bg-marigold-300'
              : 'bg-forest-700 text-paper hover:bg-forest-800'
          }`}
        >
          Subscribe
          <Icon name="send" className="h-4 w-4" />
        </button>
      </div>

      <p id={`${id}-help`} role="status" aria-live="polite" className={`mt-3 text-sm ${helpCls}`}>
        {status === 'error'
          ? error
          : status === 'done'
            ? 'Thank you — you are on the list. Watch your inbox for stories from the field.'
            : 'One short email a month. Stories, drives and results. No spam, ever.'}
      </p>
    </form>
  )
}
