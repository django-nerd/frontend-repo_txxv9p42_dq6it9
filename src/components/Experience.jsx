import { motion } from 'framer-motion'

const roles = [
  { company: 'Acme Labs', role: 'Senior Frontend Engineer', period: '2022 — Present', bullets: ['Led migration to app router', 'Built design system components', 'Improved performance by 35%'] },
  { company: 'Pixel Co', role: 'Product Engineer', period: '2020 — 2022', bullets: ['Shipped realtime collaboration', 'Introduced E2E testing', 'Optimized build pipeline'] },
  { company: 'Studio X', role: 'Full‑stack Developer', period: '2018 — 2020', bullets: ['Delivered headless commerce', 'Integrated analytics', 'Maintained CI/CD workflows'] },
]

export default function Experience() {
  return (
    <section id="experience" className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-slate-900">Experience</h2>
          <p className="mt-3 text-slate-600">Highlights from recent roles and the impact delivered.</p>
        </div>
        <ol className="mt-10 relative border-s border-transparent">
          {roles.map((r, i) => (
            <motion.li key={r.company} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="relative pl-8 py-6 border-l border-slate-200">
              <span className="absolute -left-2 top-8 h-4 w-4 rounded-full bg-gradient-to-tr from-indigo-500 to-cyan-400" />
              <div className="flex flex-wrap items-baseline justify-between gap-3">
                <h3 className="font-semibold text-slate-900">{r.role} · {r.company}</h3>
                <span className="text-xs text-slate-500">{r.period}</span>
              </div>
              <ul className="mt-3 text-sm text-slate-700 grid gap-1.5 list-disc pl-4">
                {r.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  )
}
