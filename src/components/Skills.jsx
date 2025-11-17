import { motion } from 'framer-motion'
import { Code2, Database, Palette, Layers, Boxes, Server } from 'lucide-react'

const skills = [
  { icon: Code2, title: 'Frontend', items: ['React', 'Next.js', 'Tailwind', 'Framer Motion'] },
  { icon: Server, title: 'Backend', items: ['FastAPI', 'Node', 'tRPC', 'GraphQL'] },
  { icon: Database, title: 'Databases', items: ['MongoDB', 'Postgres', 'Prisma'] },
  { icon: Layers, title: 'Architecture', items: ['Microservices', 'Event-driven', 'CI/CD'] },
  { icon: Boxes, title: '3D & Motion', items: ['Spline', 'Three.js', 'GSAP'] },
  { icon: Palette, title: 'Design', items: ['Figma', 'A11y', 'Design Systems'] },
]

export default function Skills() {
  return (
    <section id="skills" className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-slate-900">Skills</h2>
          <p className="mt-3 text-slate-600">A balanced toolkit across product engineering, motion, and infrastructure.</p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((s, i) => (
            <motion.div key={s.title} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }} className="rounded-xl border border-slate-200 bg-white p-6">
              <div className="flex items-center gap-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-gradient-to-tr from-indigo-500 to-cyan-400 text-white">
                  <s.icon size={18} />
                </span>
                <h3 className="font-semibold text-slate-900">{s.title}</h3>
              </div>
              <ul className="mt-4 text-sm text-slate-700 grid gap-1.5">
                {s.items.map((it) => (
                  <li key={it}>{it}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
