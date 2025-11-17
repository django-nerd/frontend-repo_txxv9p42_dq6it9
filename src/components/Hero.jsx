import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[92vh] overflow-hidden flex items-center">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-white/50 to-white/90 pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24">
        <div className="max-w-2xl">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-6xl font-semibold tracking-tight text-slate-900"
          >
            Building playful, interactive web experiences
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mt-6 text-lg text-slate-700"
          >
            I’m a full‑stack engineer crafting modern interfaces, robust APIs, and delightful micro‑interactions.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.6 }}
            className="mt-10 flex items-center gap-3"
          >
            <a href="#projects" className="rounded-md bg-slate-900 text-white px-5 py-3 text-sm font-medium hover:bg-slate-800">
              View Projects
            </a>
            <a href="#contact" className="rounded-md bg-white text-slate-900 ring-1 ring-slate-200 px-5 py-3 text-sm font-medium hover:bg-slate-50">
              Contact Me
            </a>
          </motion.div>
          <div className="mt-6 text-xs text-slate-500">3D: Drag to rotate • Scroll to zoom • Double‑click to focus</div>
        </div>
      </div>
    </section>
  )
}
