'use client'

import {
  Brain,
  Cloud,
  Code2,
  Server,
  Terminal,
  Trophy,
  type LucideIcon,
} from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import { PROFICIENCY, SKILL_GROUPS } from '@/lib/portfolio-data'
import { Reveal } from '@/components/reveal'
import { SectionHeader } from '@/components/section-header'

const ICONS: Record<string, LucideIcon> = {
  code: Code2,
  server: Server,
  terminal: Terminal,
  cloud: Cloud,
  brain: Brain,
  trophy: Trophy,
}

function ProficiencyBars() {
  const ref = useRef<HTMLDivElement | null>(null)
  const [active, setActive] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActive(true)
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.4 },
    )
    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  return (
    <div ref={ref} className="glass rounded-2xl p-8">
      <div className="mb-6 flex items-center gap-3 border-b border-border pb-3">
        <span className="text-primary">
          <Brain className="h-5 w-5" />
        </span>
        <h3 className="font-heading text-lg font-bold">Proficiency</h3>
      </div>
      <div className="flex flex-col gap-5">
        {PROFICIENCY.map((skill, i) => (
          <div key={skill.name}>
            <div className="mb-1.5 flex justify-between text-sm">
              <span className="font-medium">{skill.name}</span>
              <span className="text-muted-foreground">{skill.level}%</span>
            </div>
            <div className="h-2 overflow-hidden rounded-full bg-muted">
              <div
                className="h-full rounded-full bg-gradient-to-r from-primary to-accent transition-[width] duration-1000 ease-out"
                style={{
                  width: active ? `${skill.level}%` : '0%',
                  transitionDelay: `${i * 100}ms`,
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export function SkillsSection() {
  return (
    <section id="skills" className="mx-auto max-w-6xl px-6 py-20">
      <SectionHeader tag="My Toolbox" title="Technical Expertise" />

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {SKILL_GROUPS.map((group, i) => {
          const Icon = ICONS[group.icon] ?? Code2
          return (
            <Reveal
              key={group.title}
              delay={i * 60}
              className="glass rounded-2xl p-8 transition-transform hover:-translate-y-1"
            >
              <div className="mb-6 flex items-center gap-3 border-b border-border pb-3">
                <span className="text-accent">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="font-heading text-lg font-bold">
                  {group.title}
                </h3>
              </div>
              <ul className="flex flex-wrap gap-2">
                {group.badges.map((badge) => (
                  <li key={badge}>
                    <span className="inline-block rounded-full border border-border bg-card/40 px-3.5 py-1.5 text-sm font-medium text-muted-foreground transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:text-foreground">
                      {badge}
                    </span>
                  </li>
                ))}
              </ul>
            </Reveal>
          )
        })}

        <Reveal delay={360} className="md:col-span-2 lg:col-span-3">
          <ProficiencyBars />
        </Reveal>
      </div>
    </section>
  )
}
