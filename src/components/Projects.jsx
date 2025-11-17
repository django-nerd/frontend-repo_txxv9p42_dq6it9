import { motion } from 'framer-motion'
import { Github, ExternalLink } from 'lucide-react'

const projects = [
  {
    title: 'Interactive 3D Landing',
    description: 'A WebGL-powered hero experience with Spline and GSAP micro-interactions.',
    tags: ['React', 'Spline', 'WebGL'],
    link: '#',
    repo: '#',
  },
  {
    title: 'Realtime Chat Platform',
    description: 'Socket-driven messaging with presence, typing indicators and uploads.',
    tags: ['Next.js', 'Socket.io', 'Redis'],
    link: '#',
    repo: '#',
  },
  {
    title: 'Headless Ecommerce',
    description: 'Composable commerce with server actions, payments and analytics.',
    tags: ['Remix', 'Stripe', 'Postgres'],
    link: '#',
    repo: '#',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="relative py-24">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-50 to-transparent" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-slate-900">Selected Projects</h2>
          <p className="mt-3 text-slate-600">A mix of production work and experiments exploring motion, 3D and systems architecture.</p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <motion.article key={p.title} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="group rounded-xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between">
                <h3 className="text-lg font-semibold text-slate-900">{p.title}</h3>
                <div className="flex gap-2">
                  <a href={p.repo} aria-label="Repository" className="p-2 rounded-md hover:bg-slate-100">
                    <Github size={18} />
                  </a>
                  <a href={p.link} aria-label="External link" className="p-2 rounded-md hover:bg-slate-100">
                    <ExternalLink size={18} />
                  </a>
                </div>
              </div>
              <p className="mt-2 text-sm text-slate-600">{p.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span key={t} className="text-xs rounded-md bg-slate-100 text-slate-700 px-2 py-1">{t}</span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
