import { useId, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { giftEquivalences, givingAmounts } from '../data/content'
import { Icon } from './ui'

const FREQUENCIES = [
  { id: 'one-time', label: 'One-time' },
  { id: 'monthly', label: 'Monthly' },
]

function formatINR(value) {
  return `₹${Number(value || 0).toLocaleString('en-IN')}`
}

export default function DonationWidget() {
  const id = useId()
  const navigate = useNavigate()
  const [frequency, setFrequency] = useState('monthly')
  const [amount, setAmount] = useState(1000)
  const [custom, setCustom] = useState('')
  const [error, setError] = useState('')

  const isCustom = amount === 'custom'
  const effective = isCustom ? Number(custom || 0) : amount
  const equivalent = giftEquivalences[effective]

  const selectAmount = (value) => {
    setAmount(value)
    setError('')
    if (value !== 'custom') setCustom('')
  }

  const onSubmit = (event) => {
    event.preventDefault()
    if (!effective || effective < 100) {
      setError('Please enter an amount of ₹100 or more.')
      return
    }
    navigate('/contact', {
      state: { gift: { amount: effective, frequency } },
    })
  }

  return (
    <form
      onSubmit={onSubmit}
      className="rounded-4xl border border-ink/10 bg-paper p-6 shadow-xl shadow-ink/5 sm:p-8"
    >
      <fieldset>
        <legend className="text-[0.72rem] font-semibold tracking-[0.2em] text-forest-600 uppercase">
          How often
        </legend>
        <div className="mt-3 grid grid-cols-2 gap-2 rounded-full bg-paper-2 p-1">
          {FREQUENCIES.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => setFrequency(item.id)}
              aria-pressed={frequency === item.id}
              className={`rounded-full px-4 py-2.5 text-sm font-semibold transition ${
                frequency === item.id
                  ? 'bg-forest-700 text-paper shadow-sm'
                  : 'text-ink-soft hover:text-ink'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      </fieldset>

      <fieldset className="mt-8">
        <legend className="text-[0.72rem] font-semibold tracking-[0.2em] text-forest-600 uppercase">
          Choose an amount
        </legend>
        <div className="mt-3 grid grid-cols-2 gap-3 sm:grid-cols-4">
          {givingAmounts.map((value) => (
            <button
              key={value}
              type="button"
              onClick={() => selectAmount(value)}
              aria-pressed={amount === value}
              className={`rounded-2xl border px-3 py-4 font-display text-lg font-semibold transition ${
                amount === value
                  ? 'border-forest-700 bg-forest-700 text-paper'
                  : 'border-ink/15 bg-paper text-ink hover:border-forest-600/50'
              }`}
            >
              {formatINR(value)}
            </button>
          ))}
        </div>

        <button
          type="button"
          onClick={() => selectAmount('custom')}
          className={`mt-3 w-full rounded-2xl border px-4 py-3 text-sm font-semibold transition ${
            isCustom
              ? 'border-forest-700 bg-forest-50 text-forest-800'
              : 'border-ink/15 text-ink-soft hover:border-forest-600/50'
          }`}
        >
          Enter a custom amount
        </button>

        {isCustom ? (
          <div className="mt-3">
            <label
              htmlFor={`${id}-custom`}
              className="mb-1.5 block text-sm font-medium text-ink-soft"
            >
              Custom amount (₹)
            </label>
            <input
              id={`${id}-custom`}
              type="number"
              min="100"
              inputMode="numeric"
              value={custom}
              onChange={(event) => {
                setCustom(event.target.value)
                setError('')
              }}
              placeholder="2500"
              className="w-full rounded-2xl border border-ink/15 bg-paper px-4 py-3 text-lg font-semibold outline-none focus:border-forest-600"
            />
          </div>
        ) : null}
      </fieldset>

      <div className="mt-8 rounded-3xl bg-forest-900 p-6 text-paper">
        <p className="text-sm text-paper/70">
          {frequency === 'monthly' ? 'Your monthly gift of' : 'Your gift of'}
        </p>
        <p className="font-display mt-1 text-3xl font-semibold">
          {effective ? formatINR(effective) : '—'}
        </p>
        <p className="mt-2 text-sm text-marigold-300">
          {equivalent ? `That is ${equivalent}.` : 'Every amount helps — thank you.'}
        </p>
      </div>

      {error ? (
        <p role="alert" className="mt-4 text-sm font-medium text-red-700">
          {error}
        </p>
      ) : null}

      <button
        type="submit"
        className="group mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-marigold-400 px-7 py-4 text-base font-semibold text-ink transition duration-300 hover:-translate-y-0.5 hover:bg-marigold-300"
      >
        Continue to give
        <Icon
          name="arrow-right"
          className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
        />
      </button>
      <p className="mt-4 text-center text-xs text-ink-mute">
        Secure online payments are being set up. Continue and our team will complete your gift with
        you.
      </p>
    </form>
  )
}
