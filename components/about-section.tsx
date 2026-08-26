import { Award, Calendar, GraduationCap, UserRound } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { SectionHeader } from '@/components/section-header'

const QUICK_STATS = [
  { num: '3+', label: 'Core Projects' },
  { num: '8.62', label: 'VIT GPA' },
  { num: '100%', label: 'Dedication' },
]

export function AboutSection() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-6 py-20">
      <SectionHeader tag="About Me" title="Education & Background" />

      <div className="grid gap-6 lg:grid-cols-[1.2fr_1fr]">
        <Reveal className="glass flex flex-col rounded-2xl p-8">
          <div className="mb-6 grid h-12 w-12 place-items-center rounded-xl bg-primary/10 text-primary">
            <GraduationCap className="h-6 w-6" />
          </div>
          <h3 className="font-heading text-2xl font-bold">
            Vellore Institute of Technology
          </h3>
          <p className="mt-1 font-medium text-[var(--sky)]">
            B.Tech in Computer Science &amp; Engineering
          </p>
          <div className="mt-4 flex flex-wrap gap-5 text-sm text-muted-foreground">
            <span className="flex items-center gap-1.5">
              <Calendar className="h-4 w-4" /> Expected May 2028
            </span>
            <span className="flex items-center gap-1.5">
              <Award className="h-4 w-4" /> CGPA:{' '}
              <strong className="text-foreground">8.62</strong>
            </span>
          </div>
          <p className="mt-5 leading-relaxed text-muted-foreground">
            Focused on advanced computer science topics — data structures,
            algorithms, database systems, and object-oriented programming — to
            engineer high-quality software solutions.
          </p>
        </Reveal>

        <Reveal delay={120} className="glass flex flex-col rounded-2xl p-8">
          <div className="mb-6 grid h-12 w-12 place-items-center rounded-xl bg-accent/10 text-accent">
            <UserRound className="h-6 w-6" />
          </div>
          <h3 className="font-heading text-2xl font-bold">Beyond Coding</h3>
          <p className="mt-5 leading-relaxed text-muted-foreground">
            I build high-performance, user-friendly applications that bring AI
            and product thinking together. From clean UI to robust backend
            design, I care about scalable systems that create measurable value.
          </p>
          <div className="mt-auto grid grid-cols-3 gap-4 border-t border-border pt-6">
            {QUICK_STATS.map((s) => (
              <div key={s.label} className="text-center">
                <span className="gradient-text block font-heading text-2xl font-extrabold">
                  {s.num}
                </span>
                <span className="text-[0.7rem] font-semibold tracking-wide text-muted-foreground uppercase">
                  {s.label}
                </span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
