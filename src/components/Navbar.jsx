import { useState } from 'react'
import { Menu, X, Sparkles } from 'lucide-react'

const links = [
  { href: '#home', label: 'Home' },
  { href: '#projects', label: 'Projects' },
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#experience', label: 'Experience' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed inset-x-0 top-0 z-40 backdrop-blur-md bg-white/60 border-b border-black/5">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#home" className="flex items-center gap-2">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-gradient-to-tr from-indigo-500 to-cyan-400 text-white">
              <Sparkles size={18} />
            </span>
            <span className="text-sm font-semibold tracking-tight">Flames Blue Portfolio</span>
          </a>

          <div className="hidden md:flex items-center gap-6">
            {links.map((l) => (
              <a key={l.href} href={l.href} className="text-sm text-slate-700 hover:text-slate-900 transition-colors">
                {l.label}
              </a>
            ))}
            <a href="#contact" className="rounded-md bg-slate-900 text-white text-sm px-4 py-2 hover:bg-slate-800 transition-colors">Hire me</a>
          </div>

          <button aria-label="Toggle menu" className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-md border border-slate-200" onClick={() => setOpen((v) => !v)}>
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4 animate-in">
            <div className="grid gap-2">
              {links.map((l) => (
                <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="rounded-md px-3 py-2 text-sm hover:bg-slate-100">
                  {l.label}
                </a>
              ))}
              <a href="#contact" onClick={() => setOpen(false)} className="rounded-md bg-slate-900 text-white text-sm px-3 py-2">Hire me</a>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
