'use client'

import { ArrowRight, Mail, Terminal } from 'lucide-react'
import { useEffect, useState } from 'react'
import { PROFILE, TYPED_WORDS } from '@/lib/portfolio-data'
import { GithubIcon, LinkedinIcon } from '@/components/brand-icons'
import { Reveal } from '@/components/reveal'

function useTypewriter(words: string[]) {
  const [text, setText] = useState('')
  const [wordIndex, setWordIndex] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const current = words[wordIndex]
    let timeout: ReturnType<typeof setTimeout>

    if (!deleting && text === current) {
      timeout = setTimeout(() => setDeleting(true), 1400)
    } else if (deleting && text === '') {
      setDeleting(false)
      setWordIndex((i) => (i + 1) % words.length)
    } else {
      timeout = setTimeout(
        () => {
          setText((prev) =>
            deleting
              ? current.slice(0, prev.length - 1)
              : current.slice(0, prev.length + 1),
          )
        },
        deleting ? 55 : 95,
      )
    }
    return () => clearTimeout(timeout)
  }, [text, deleting, wordIndex, words])

  return text
}

export function Hero() {
  const typed = useTypewriter(TYPED_WORDS)

  return (
    <section
      id="home"
      className="mx-auto grid min-h-screen max-w-6xl grid-cols-1 items-center gap-12 px-6 pt-32 pb-20 lg:grid-cols-[1.1fr_0.9fr]"
    >
      <Reveal className="text-left">
        <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-xs font-semibold text-primary">
          <Terminal className="h-3.5 w-3.5" />
          {PROFILE.roles}
        </span>

        <h1 className="mt-6 font-heading text-4xl font-extrabold leading-[1.1] tracking-tight text-balance sm:text-5xl lg:text-6xl">
          Hi, I&apos;m <span className="gradient-text">{PROFILE.name}</span>
        </h1>

        <div className="mt-4 flex min-h-[2rem] items-center gap-2 text-lg">
          <span className="font-semibold text-muted-foreground">
            Turning ideas into
          </span>
          <span className="caret font-heading font-bold text-accent">
            {typed}
          </span>
        </div>

        <p className="mt-5 max-w-xl leading-relaxed text-muted-foreground text-pretty">
          {PROFILE.bio}
        </p>

        <div className="mt-6 flex flex-wrap gap-2">
          {PROFILE.heroTags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-border bg-card/50 px-3 py-1 text-sm text-muted-foreground"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-4 flex flex-wrap gap-4 text-sm text-muted-foreground">
          <span>📍 {PROFILE.location}</span>
          <span>🎓 {PROFILE.degree}</span>
          <span>💼 {PROFILE.availability}</span>
        </div>

        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href="#projects"
            className="group inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3 font-heading text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/25 transition-all hover:scale-[1.03] hover:shadow-primary/40"
          >
            View My Work
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-card/50 px-7 py-3 font-heading text-sm font-semibold text-foreground transition-colors hover:border-primary/50"
          >
            Let&apos;s Connect
          </a>
        </div>

        <div className="mt-8 flex gap-4">
          {[
            { href: PROFILE.github, icon: GithubIcon, label: 'GitHub' },
            { href: PROFILE.linkedin, icon: LinkedinIcon, label: 'LinkedIn' },
            { href: `mailto:${PROFILE.email}`, icon: Mail, label: 'Email' },
          ].map(({ href, icon: Icon, label }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith('http') ? '_blank' : undefined}
              rel="noopener noreferrer"
              aria-label={label}
              className="flex h-12 w-12 items-center justify-center rounded-full border border-border bg-card/50 text-muted-foreground transition-all hover:-translate-y-1 hover:border-primary/40 hover:text-primary"
            >
              <Icon className="h-5 w-5" />
            </a>
          ))}
        </div>
      </Reveal>

      <Reveal delay={150} className="flex justify-center">
        <div className="glass relative grid aspect-square w-full max-w-sm place-items-center overflow-hidden rounded-3xl">
          <div className="absolute inset-8 animate-spin-slow rounded-full border-2 border-dashed border-primary/30" />
          <div className="absolute inset-16 rounded-full border border-accent/20" />
          <div className="relative grid h-36 w-36 place-items-center rounded-full bg-gradient-to-br from-primary via-[var(--chart-4)] to-accent shadow-2xl shadow-primary/40">
            <span className="font-heading text-6xl font-extrabold text-primary-foreground">
              A
            </span>
          </div>
          <div className="absolute bottom-6 flex items-center gap-2 rounded-full border border-border bg-background/70 px-4 py-2 text-xs font-medium backdrop-blur">
            <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
            Available for collaborations
          </div>
        </div>
      </Reveal>
    </section>
  )
}
