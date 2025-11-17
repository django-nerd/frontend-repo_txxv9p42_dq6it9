import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id="about" className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-2xl">
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-slate-900">About</h2>
            <p className="mt-4 text-slate-600">I’m a developer focused on creating engaging, accessible interfaces backed by solid engineering. I enjoy shaping systems that scale and polishing details that delight.</p>
            <ul className="mt-6 grid gap-3 text-sm text-slate-700">
              <li className="flex items-start gap-3"><span className="mt-1 h-2 w-2 rounded-full bg-indigo-500" /> Strong product thinking and UX craft</li>
              <li className="flex items-start gap-3"><span className="mt-1 h-2 w-2 rounded-full bg-cyan-500" /> Full‑stack delivery from idea to ship</li>
              <li className="flex items-start gap-3"><span className="mt-1 h-2 w-2 rounded-full bg-pink-500" /> Motion and 3D for playful interactions</li>
            </ul>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <dl className="grid grid-cols-2 gap-6">
              <div>
                <dt className="text-xs text-slate-500">Experience</dt>
                <dd className="text-xl font-semibold text-slate-900">6+ years</dd>
              </div>
              <div>
                <dt className="text-xs text-slate-500">Delivered</dt>
                <dd className="text-xl font-semibold text-slate-900">40+ projects</dd>
              </div>
              <div>
                <dt className="text-xs text-slate-500">Specialty</dt>
                <dd className="text-xl font-semibold text-slate-900">Web, 3D, DX</dd>
              </div>
              <div>
                <dt className="text-xs text-slate-500">Location</dt>
                <dd className="text-xl font-semibold text-slate-900">Remote-first</dd>
              </div>
            </dl>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
