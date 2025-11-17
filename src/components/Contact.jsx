import { useState } from 'react'
import { motion } from 'framer-motion'

export default function Contact() {
  const [status, setStatus] = useState('')

  const onSubmit = async (e) => {
    e.preventDefault()
    const form = new FormData(e.currentTarget)
    const payload = Object.fromEntries(form.entries())
    try {
      setStatus('Sending...')
      // Placeholder action – wire to backend later if needed
      await new Promise((r) => setTimeout(r, 800))
      setStatus('Thanks! I will get back to you shortly.')
      e.currentTarget.reset()
    } catch (e) {
      setStatus('Something went wrong. Please try again.')
    }
  }

  return (
    <section id="contact" className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-slate-900">Contact</h2>
          <p className="mt-3 text-slate-600">Tell me about your project, timeline, and goals.</p>
        </div>

        <motion.form initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} onSubmit={onSubmit} className="mt-10 grid gap-4 max-w-2xl">
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="text-sm text-slate-600">Name</label>
              <input name="name" required className="mt-1 w-full rounded-md border border-slate-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500" />
            </div>
            <div>
              <label className="text-sm text-slate-600">Email</label>
              <input name="email" type="email" required className="mt-1 w-full rounded-md border border-slate-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500" />
            </div>
          </div>
          <div>
            <label className="text-sm text-slate-600">Message</label>
            <textarea name="message" required rows={5} className="mt-1 w-full rounded-md border border-slate-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500" />
          </div>
          <div className="flex items-center gap-3">
            <button className="rounded-md bg-slate-900 text-white px-5 py-3 text-sm font-medium hover:bg-slate-800">Send message</button>
            <span className="text-sm text-slate-600">{status}</span>
          </div>
        </motion.form>
      </div>
    </section>
  )
}
