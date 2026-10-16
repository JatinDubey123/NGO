import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { site } from '../data/content'
import { PageHero } from '../components/sections'
import { Button, Container, Eyebrow, Icon, Reveal, Section } from '../components/ui'

const subjects = [
  'General inquiry',
  'Partnership',
  'Volunteering',
  'Start a fundraiser',
  'Donation help',
  'Media inquiry',
]

const quickHelp = [
  {
    title: 'How do I start a fundraiser?',
    text: 'Learn the step-by-step process to create your first campaign with our toolkit.',
    to: '/get-involved',
  },
  {
    title: 'How are donations processed?',
    text: 'Understand how your gift reaches the field and how we report back.',
    to: '/about',
  },
  {
    title: 'What can I support?',
    text: 'Choose the program closest to your heart and direct your gift there.',
    to: '/programs',
  },
]

const initialForm = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  subject: '',
  message: '',
}

export default function Contact() {
  const location = useLocation()
  const gift = location.state?.gift

  const [form, setForm] = useState(initialForm)
  const [errors, setErrors] = useState({})
  const [sent, setSent] = useState(false)

  const onChange = (event) => {
    const { name, value } = event.target
    setForm((prev) => ({ ...prev, [name]: value }))
    setErrors((prev) => ({ ...prev, [name]: undefined }))
  }

  const validate = () => {
    const next = {}
    if (!form.firstName.trim()) next.firstName = 'Please tell us your first name.'
    if (!form.lastName.trim()) next.lastName = 'Please tell us your last name.'
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) next.email = 'Enter a valid email address.'
    if (!form.subject) next.subject = 'Please choose a subject.'
    if (form.message.trim().length < 10) next.message = 'A few more words would help us reply well.'
    return next
  }

  const onSubmit = (event) => {
    event.preventDefault()
    const next = validate()
    setErrors(next)
    if (Object.keys(next).length) return
    setSent(true)
    setForm(initialForm)
  }

  const fieldCls = (name) =>
    `w-full rounded-2xl border bg-paper px-4 py-3 text-ink outline-none transition focus:border-forest-600 ${
      errors[name] ? 'border-red-400' : 'border-ink/15'
    }`

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let's talk about the change we can make"
        lead="Questions about giving, partnering or volunteering? We would love to hear from you — a real person will reply."
      />

      {gift ? (
        <Section tone="marigold" className="py-10 sm:py-12">
          <Container className="flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-4">
              <span className="grid h-12 w-12 place-items-center rounded-full bg-ink text-marigold-300">
                <Icon name="hand-heart" className="h-6 w-6" />
              </span>
              <div>
                <p className="font-display text-lg font-semibold text-ink">
                  Your gift: ₹{gift.amount.toLocaleString('en-IN')} · {gift.frequency}
                </p>
                <p className="text-sm text-ink/75">
                  Share your details below and our team will complete your gift with you.
                </p>
              </div>
            </div>
            <Button to="/get-involved" variant="ink" size="sm">
              Change amount
            </Button>
          </Container>
        </Section>
      ) : null}

      <Section tone="paper">
        <Container className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <Reveal>
            <Eyebrow>Contact information</Eyebrow>
            <h2 className="font-display mt-5 text-h3 font-semibold text-ink">
              Reach us directly
            </h2>

            <div className="mt-8 space-y-6">
              <a href={`mailto:${site.email}`} className="group flex items-start gap-4">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-forest-900 text-marigold-300">
                  <Icon name="mail" className="h-5 w-5" />
                </span>
                <span>
                  <span className="block text-sm font-semibold text-ink">Email us</span>
                  <span className="block text-sm text-ink-mute">For inquiries and support</span>
                  <span className="mt-1 block text-ink transition group-hover:text-forest-700">
                    {site.email}
                  </span>
                </span>
              </a>

              <a href={site.phoneHref} className="group flex items-start gap-4">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-forest-900 text-marigold-300">
                  <Icon name="phone" className="h-5 w-5" />
                </span>
                <span>
                  <span className="block text-sm font-semibold text-ink">Call us</span>
                  <span className="block text-sm text-ink-mute">Speak with our team</span>
                  <span className="mt-1 block text-ink transition group-hover:text-forest-700">
                    {site.phone}
                  </span>
                </span>
              </a>

              <div className="flex items-start gap-4">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-forest-900 text-marigold-300">
                  <Icon name="map-pin" className="h-5 w-5" />
                </span>
                <span>
                  <span className="block text-sm font-semibold text-ink">Visit us</span>
                  <span className="block text-sm text-ink-mute">Our headquarters</span>
                  <span className="mt-1 block text-ink">
                    {site.address.line1}
                    <br />
                    {site.address.line2}
                  </span>
                </span>
              </div>

              <div className="flex items-start gap-4">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-forest-900 text-marigold-300">
                  <Icon name="clock" className="h-5 w-5" />
                </span>
                <span>
                  <span className="block text-sm font-semibold text-ink">Office hours</span>
                  <span className="mt-1 block space-y-0.5 text-ink">
                    {site.hours.map((entry) => (
                      <span key={entry.day} className="block">
                        {entry.day}: {entry.time}
                      </span>
                    ))}
                  </span>
                </span>
              </div>
            </div>
          </Reveal>

          <Reveal>
            <div className="rounded-4xl border border-ink/10 bg-paper-2/50 p-6 sm:p-9">
              <h2 className="font-display text-h3 font-semibold text-ink">Send us a message</h2>
              <p className="mt-2 text-sm text-ink-soft">
                We usually reply within one working day.
              </p>

              <form className="mt-8 grid gap-5 sm:grid-cols-2" onSubmit={onSubmit} noValidate>
                <label className="block">
                  <span className="mb-1.5 block text-sm font-medium text-ink-soft">
                    First name
                  </span>
                  <input
                    name="firstName"
                    value={form.firstName}
                    onChange={onChange}
                    aria-invalid={Boolean(errors.firstName)}
                    className={fieldCls('firstName')}
                  />
                  {errors.firstName ? (
                    <span className="mt-1 block text-xs text-red-600">{errors.firstName}</span>
                  ) : null}
                </label>

                <label className="block">
                  <span className="mb-1.5 block text-sm font-medium text-ink-soft">Last name</span>
                  <input
                    name="lastName"
                    value={form.lastName}
                    onChange={onChange}
                    aria-invalid={Boolean(errors.lastName)}
                    className={fieldCls('lastName')}
                  />
                  {errors.lastName ? (
                    <span className="mt-1 block text-xs text-red-600">{errors.lastName}</span>
                  ) : null}
                </label>

                <label className="block sm:col-span-2">
                  <span className="mb-1.5 block text-sm font-medium text-ink-soft">
                    Email address
                  </span>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={onChange}
                    aria-invalid={Boolean(errors.email)}
                    className={fieldCls('email')}
                  />
                  {errors.email ? (
                    <span className="mt-1 block text-xs text-red-600">{errors.email}</span>
                  ) : null}
                </label>

                <label className="block sm:col-span-2">
                  <span className="mb-1.5 block text-sm font-medium text-ink-soft">
                    Phone number (optional)
                  </span>
                  <input
                    name="phone"
                    value={form.phone}
                    onChange={onChange}
                    className={fieldCls('phone')}
                  />
                </label>

                <label className="block sm:col-span-2">
                  <span className="mb-1.5 block text-sm font-medium text-ink-soft">Subject</span>
                  <select
                    name="subject"
                    value={form.subject}
                    onChange={onChange}
                    aria-invalid={Boolean(errors.subject)}
                    className={fieldCls('subject')}
                  >
                    <option value="">Select a subject</option>
                    {subjects.map((subject) => (
                      <option key={subject} value={subject}>
                        {subject}
                      </option>
                    ))}
                  </select>
                  {errors.subject ? (
                    <span className="mt-1 block text-xs text-red-600">{errors.subject}</span>
                  ) : null}
                </label>

                <label className="block sm:col-span-2">
                  <span className="mb-1.5 block text-sm font-medium text-ink-soft">Message</span>
                  <textarea
                    name="message"
                    rows={5}
                    value={form.message}
                    onChange={onChange}
                    aria-invalid={Boolean(errors.message)}
                    className={`${fieldCls('message')} resize-y`}
                  />
                  {errors.message ? (
                    <span className="mt-1 block text-xs text-red-600">{errors.message}</span>
                  ) : null}
                </label>

                <div className="sm:col-span-2">
                  <Button type="submit" variant="solid" size="lg" icon="arrow-right" className="w-full sm:w-auto">
                    Send message
                  </Button>
                </div>

                <div className="sm:col-span-2" role="status" aria-live="polite">
                  {sent ? (
                    <p className="rounded-2xl border border-forest-200 bg-forest-50 px-4 py-3 text-sm font-medium text-forest-800">
                      Thank you — your message has been received. We will be in touch shortly.
                    </p>
                  ) : null}
                </div>
              </form>
            </div>
          </Reveal>
        </Container>
      </Section>

      <Section tone="paper2">
        <Container>
          <Reveal className="max-w-2xl">
            <Eyebrow>Quick help</Eyebrow>
            <h2 className="font-display mt-5 text-h3 font-semibold text-ink">
              Looking for immediate answers?
            </h2>
          </Reveal>
          <Reveal className="mt-10 grid gap-5 md:grid-cols-3" stagger>
            {quickHelp.map((item) => (
              <Link
                key={item.title}
                to={item.to}
                className="group rounded-4xl border border-ink/10 bg-paper p-7 transition duration-500 hover:-translate-y-1 hover:shadow-xl hover:shadow-ink/5"
              >
                <h3 className="font-display text-lg font-medium text-ink">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">{item.text}</p>
                <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-forest-700">
                  Learn more
                  <Icon
                    name="arrow-right"
                    className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                  />
                </span>
              </Link>
            ))}
          </Reveal>
        </Container>
      </Section>
    </>
  )
}
