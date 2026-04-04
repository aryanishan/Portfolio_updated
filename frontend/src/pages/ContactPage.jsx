import { Send } from 'lucide-react'
import { useState } from 'react'
import PageShell from '../components/PageShell.jsx'
import { personalInfo } from '../data/portfolio.js'
import api from '../services/api.js'

const initialState = {
  name: '',
  email: '',
  message: '',
}

function ContactPage() {
  const [formData, setFormData] = useState(initialState)
  const [status, setStatus] = useState({ type: '', message: '' })
  const [submitting, setSubmitting] = useState(false)

  async function handleSubmit(event) {
    event.preventDefault()
    setSubmitting(true)
    setStatus({ type: '', message: '' })

    try {
      const response = await api.post('/contact', formData)
      setStatus({ type: 'success', message: response.data.message || 'Message sent successfully.' })
      setFormData(initialState)
    } catch (error) {
      const message =
        error.response?.data?.message || 'Something went wrong while sending your message. Please try again.'
      setStatus({ type: 'error', message })
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <PageShell
      eyebrow="Contact"
      title="Let’s build something useful, thoughtful, and technically strong."
      description="Reach out for internships, freelance opportunities, collaborations, or product discussions. Messages are validated, stored, and prepared for email notifications via the backend."
    >
      <section className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <article className="glass-panel rounded-[30px] p-7">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-primary">Direct Reach</p>
          <div className="mt-5 space-y-4 text-muted">
            <p className="rounded-[22px] border border-surface-border px-4 py-4">{personalInfo.email}</p>
            <p className="rounded-[22px] border border-surface-border px-4 py-4">{personalInfo.phone}</p>
            <p className="rounded-[22px] border border-surface-border px-4 py-4">{personalInfo.location}</p>
          </div>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className="rounded-full border border-surface-border px-4 py-2 text-sm font-semibold text-text">
              LinkedIn
            </a>
            <a href={personalInfo.github} target="_blank" rel="noreferrer" className="rounded-full border border-surface-border px-4 py-2 text-sm font-semibold text-text">
              GitHub
            </a>
          </div>
        </article>

        <article className="glass-panel rounded-[30px] p-7">
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label htmlFor="name" className="mb-2 block text-sm font-semibold text-text">
                Name
              </label>
              <input
                id="name"
                type="text"
                value={formData.name}
                onChange={(event) => setFormData((current) => ({ ...current, name: event.target.value }))}
                className="w-full rounded-[18px] border border-surface-border bg-transparent px-4 py-3 outline-none transition focus:border-primary"
                placeholder="Your name"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="mb-2 block text-sm font-semibold text-text">
                Email
              </label>
              <input
                id="email"
                type="email"
                value={formData.email}
                onChange={(event) => setFormData((current) => ({ ...current, email: event.target.value }))}
                className="w-full rounded-[18px] border border-surface-border bg-transparent px-4 py-3 outline-none transition focus:border-primary"
                placeholder="you@example.com"
                required
              />
            </div>

            <div>
              <label htmlFor="message" className="mb-2 block text-sm font-semibold text-text">
                Message
              </label>
              <textarea
                id="message"
                rows="6"
                value={formData.message}
                onChange={(event) => setFormData((current) => ({ ...current, message: event.target.value }))}
                className="w-full rounded-[18px] border border-surface-border bg-transparent px-4 py-3 outline-none transition focus:border-primary"
                placeholder="Tell me about the opportunity or idea."
                required
              />
            </div>

            <button
              type="submit"
              disabled={submitting}
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary to-accent px-6 py-3 font-semibold text-white shadow-lg shadow-primary/25 transition hover:scale-[1.02] disabled:cursor-not-allowed disabled:opacity-70"
            >
              <Send size={18} />
              {submitting ? 'Sending...' : 'Send Message'}
            </button>

            {status.message ? (
              <p
                className={`rounded-[18px] px-4 py-3 text-sm ${
                  status.type === 'success' ? 'bg-accent/15 text-accent' : 'bg-rose-500/10 text-rose-500'
                }`}
              >
                {status.message}
              </p>
            ) : null}
          </form>
        </article>
      </section>
    </PageShell>
  )
}

export default ContactPage
