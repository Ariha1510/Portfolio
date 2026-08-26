'use client'

import { Menu, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { PROFILE } from '@/lib/portfolio-data'
import { cn } from '@/lib/utils'
import { ThemeToggle } from '@/components/theme-toggle'

const LINKS = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#timeline', label: 'Journey' },
]

export function Navbar() {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('home')
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const ids = [...LINKS.map((l) => l.href.slice(1)), 'contact']
    const onScroll = () => {
      setScrolled(window.scrollY > 20)
      const pos = window.scrollY + 130
      let current = 'home'
      for (const id of ids) {
        const el = document.getElementById(id)
        if (el && pos >= el.offsetTop && pos < el.offsetTop + el.clientHeight) {
          current = id
        }
      }
      setActive(current)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-300',
        scrolled
          ? 'border-b border-border bg-background/70 backdrop-blur-xl'
          : 'border-b border-transparent',
      )}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a
          href="#home"
          className="font-heading text-xl font-extrabold tracking-tight"
        >
          <span className="gradient-text">{PROFILE.logoName}</span>
          <span className="text-muted-foreground">{PROFILE.logoSuffix}</span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={cn(
                'relative text-sm font-medium transition-colors after:absolute after:-bottom-1.5 after:left-0 after:h-0.5 after:rounded-full after:bg-primary after:transition-all after:duration-300',
                active === link.href.slice(1)
                  ? 'text-foreground after:w-full'
                  : 'text-muted-foreground after:w-0 hover:text-foreground',
              )}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="rounded-full border border-primary/60 px-5 py-2 text-sm font-semibold text-foreground transition-all hover:bg-primary hover:text-primary-foreground"
          >
            Contact
          </a>
          <ThemeToggle />
        </nav>

        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button
            type="button"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card/60 text-foreground"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={cn(
          'overflow-hidden border-t border-border bg-background/95 backdrop-blur-xl transition-[max-height] duration-300 md:hidden',
          open ? 'max-h-96' : 'max-h-0 border-t-0',
        )}
      >
        <nav className="flex flex-col gap-1 px-6 py-4">
          {[...LINKS, { href: '#contact', label: 'Contact' }].map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className={cn(
                'rounded-lg px-3 py-2.5 text-sm font-medium transition-colors',
                active === link.href.slice(1)
                  ? 'bg-primary/10 text-primary'
                  : 'text-muted-foreground hover:bg-muted hover:text-foreground',
              )}
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  )
}
