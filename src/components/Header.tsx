import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { nav, site } from '../data/content'
import ThemeToggle from './ThemeToggle'

export default function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => setOpen(false), [location.pathname, location.hash])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-colors ${
        scrolled || open ? 'border-line bg-paper' : 'border-transparent bg-paper/0'
      }`}
    >
      <div className="mx-auto flex h-[4.5rem] max-w-[88rem] items-center justify-between px-5 sm:px-8 lg:px-12">
        <Link to="/" className="text-lg font-semibold tracking-tight" aria-label={`${site.name}, home`}>
          {site.name}
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-8 lg:flex">
          {nav.map((n) => (
            <Link key={n.href} to={n.href} className="text-[0.95rem] text-mute transition-colors hover:text-ink">
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            to="/#contact"
            className="hidden rounded-full bg-accent px-5 py-2.5 text-[0.95rem] font-semibold text-accent-ink transition-transform hover:-translate-y-0.5 sm:inline-block"
          >
            Let&rsquo;s work together
          </Link>
          <ThemeToggle />
          <button
            type="button"
            className="grid h-10 w-10 place-items-center rounded-full border border-line lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen((o) => !o)}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
              {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 8h16M4 16h16" />}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <nav id="mobile-nav" aria-label="Mobile" className="border-t border-line bg-paper px-5 pb-8 pt-4 sm:px-8 lg:hidden">
          <ul className="flex flex-col">
            {nav.map((n) => (
              <li key={n.href} className="border-b border-line">
                <Link to={n.href} className="block py-4 text-2xl font-semibold tracking-tight">
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
          <Link to="/#contact" className="mt-6 block rounded-full bg-accent px-6 py-4 text-center text-lg font-semibold text-accent-ink">
            Let&rsquo;s work together
          </Link>
        </nav>
      )}
    </header>
  )
}
