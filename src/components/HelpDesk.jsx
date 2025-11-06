import { useState } from 'react'

function HelpDesk() {
  const [status, setStatus] = useState('idle')

  const handleSubmit = (e) => {
    e.preventDefault()
    setStatus('sending')
    // Simulate send
    setTimeout(() => setStatus('sent'), 800)
  }

  return (
    <section id="help" className="bg-white py-12">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-stone-900">Help Desk</h2>
        <p className="mt-2 text-stone-700">Have questions, want to volunteer, or need a visit to your village? Reach our support team.</p>

        <div className="mt-8 grid md:grid-cols-2 gap-8">
          <form onSubmit={handleSubmit} className="bg-amber-50 border border-amber-200 rounded-lg p-6 shadow" aria-label="Contact form">
            <div className="grid gap-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-stone-800">Full name</label>
                <input id="name" name="name" required className="mt-1 w-full rounded border border-stone-300 bg-white px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-600" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-stone-800">Email</label>
                <input id="email" type="email" name="email" required className="mt-1 w-full rounded border border-stone-300 bg-white px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-600" />
              </div>
              <div>
                <label htmlFor="topic" className="block text-sm font-medium text-stone-800">Topic</label>
                <select id="topic" name="topic" className="mt-1 w-full rounded border border-stone-300 bg-white px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-600">
                  <option>Request a village visit</option>
                  <option>Volunteer</option>
                  <option>Partnership</option>
                  <option>General question</option>
                </select>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-stone-800">Message</label>
                <textarea id="message" name="message" rows={5} required className="mt-1 w-full rounded border border-stone-300 bg-white px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-600" />
              </div>
              <button
                type="submit"
                disabled={status !== 'idle'}
                className="inline-flex items-center justify-center rounded bg-amber-700 text-amber-50 px-4 py-2 font-medium shadow hover:bg-amber-800 disabled:opacity-50"
                aria-live="polite"
              >
                {status === 'idle' && 'Send message'}
                {status === 'sending' && 'Sending…'}
                {status === 'sent' && 'Sent ✔'}
              </button>
            </div>
            <p className="mt-3 text-xs text-stone-600">We reply within 24 hours.</p>
          </form>

          <div className="bg-white border border-amber-200 rounded-lg p-6 shadow">
            <h3 className="font-semibold text-stone-900">Accessible Interfaces</h3>
            <ul className="mt-3 list-disc pl-5 text-stone-700 space-y-2">
              <li>Keyboard-friendly navigation and "Skip to content" link.</li>
              <li>High-contrast toggle for better readability.</li>
              <li>Clear headings, labels, and large tap targets.</li>
            </ul>
            <div className="mt-6 text-sm text-stone-800">
              Prefer email? Contact us at
              {' '}
              <a className="underline underline-offset-4 text-amber-800" href="mailto:naitikafoundations@edu.in">naitikafoundations@edu.in</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HelpDesk
