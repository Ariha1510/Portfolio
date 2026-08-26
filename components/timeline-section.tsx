import {
  GraduationCap,
  Heart,
  Home,
  Medal,
  PenLine,
  Rocket,
  type LucideIcon,
} from 'lucide-react'
import { TIMELINE } from '@/lib/portfolio-data'
import { Reveal } from '@/components/reveal'
import { SectionHeader } from '@/components/section-header'

const ICONS: Record<string, LucideIcon> = {
  graduation: GraduationCap,
  heart: Heart,
  home: Home,
  pen: PenLine,
  rocket: Rocket,
  medal: Medal,
}

export function TimelineSection() {
  return (
    <section id="timeline" className="mx-auto max-w-6xl px-6 py-20">
      <SectionHeader tag="Experience" title="My Journey" />

      <div className="relative mx-auto max-w-2xl pl-10">
        {/* Vertical line */}
        <span className="absolute top-2 bottom-2 left-[11px] w-0.5 rounded-full bg-gradient-to-b from-[var(--sky)] via-primary to-accent" />

        <div className="flex flex-col gap-6">
          {TIMELINE.map((item, i) => {
            const Icon = ICONS[item.icon] ?? Rocket
            return (
              <Reveal
                key={`${item.title}-${i}`}
                delay={i * 70}
                className="relative"
              >
                <span className="absolute top-6 -left-[38px] grid h-6 w-6 place-items-center rounded-full border-2 border-primary bg-background text-primary">
                  <Icon className="h-3 w-3" />
                </span>
                <div className="glass rounded-2xl px-6 py-5 transition-transform hover:translate-x-1">
                  <span className="text-xs font-semibold text-[var(--sky)]">
                    {item.date}
                  </span>
                  <h3 className="mt-1 font-heading text-lg font-semibold">
                    {item.title}
                  </h3>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
