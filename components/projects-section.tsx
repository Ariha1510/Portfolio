import {
  Activity,
  CheckCircle2,
  ExternalLink,
  Home,
  Wallet,
  type LucideIcon,
} from 'lucide-react'
import { PROFILE, PROJECTS } from '@/lib/portfolio-data'
import { GithubIcon } from '@/components/brand-icons'
import { Reveal } from '@/components/reveal'
import { SectionHeader } from '@/components/section-header'

const ICONS: Record<string, LucideIcon> = {
  wallet: Wallet,
  activity: Activity,
  home: Home,
}

const ACCENTS: Record<string, string> = {
  primary: 'from-primary/25 to-primary/5 text-primary',
  sky: 'from-[var(--sky)]/25 to-[var(--sky)]/5 text-[var(--sky)]',
  accent: 'from-accent/25 to-accent/5 text-accent',
}

export function ProjectsSection() {
  return (
    <section id="projects" className="mx-auto max-w-6xl px-6 py-20">
      <SectionHeader tag="Portfolio" title="Featured Projects" />

      <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
        {PROJECTS.map((project, i) => {
          const Icon = ICONS[project.icon] ?? Wallet
          return (
            <Reveal
              key={project.name}
              delay={i * 90}
              as="article"
              className="glass group flex flex-col overflow-hidden rounded-2xl transition-transform hover:-translate-y-1.5"
            >
              <div
                className={`flex h-40 items-center justify-center overflow-hidden bg-gradient-to-br ${ACCENTS[project.accent]}`}
              >
                {project.logo ? (
                  <img
                    src={project.logo}
                    alt={`${project.name} logo`}
                    className="h-20 w-20 object-contain transition-transform duration-500 group-hover:scale-110"
                  />
                ) : (
                  <Icon className="h-14 w-14 transition-transform duration-500 group-hover:scale-110" />
                )}
              </div>

              <div className="flex flex-1 flex-col p-7">
                <span className="text-xs font-semibold tracking-wide text-[var(--sky)] uppercase">
                  {project.type}
                </span>
                <h3 className="mt-1 font-heading text-xl font-bold">
                  {project.name}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {project.desc}
                </p>

                <ul className="mt-4 flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <li
                      key={t}
                      className="rounded-md bg-muted px-2.5 py-1 text-xs font-medium text-muted-foreground"
                    >
                      {t}
                    </li>
                  ))}
                </ul>

                <div className="mt-5 flex flex-col gap-2">
                  {project.highlights.map((h) => (
                    <span
                      key={h}
                      className="flex items-start gap-2 text-sm text-muted-foreground"
                    >
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                      {h}
                    </span>
                  ))}
                </div>

                <dl className="mt-5 space-y-1.5 border-t border-border pt-5 text-sm">
                  {project.meta.map((m) => (
                    <div key={m.label} className="flex gap-2">
                      <dt className="font-semibold text-foreground">
                        {m.label}:
                      </dt>
                      <dd className="text-muted-foreground">{m.value}</dd>
                    </div>
                  ))}
                </dl>

                <div className="mt-6 flex gap-3 pt-2">
                  <a
                    href={PROFILE.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg border border-border bg-card/50 px-4 py-2 text-sm font-semibold transition-colors hover:border-primary/40"
                  >
                    <GithubIcon className="h-4 w-4" /> Code
                  </a>
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 rounded-lg border border-border bg-card/50 px-4 py-2 text-sm font-semibold transition-colors hover:border-primary/40"
                  >
                    <ExternalLink className="h-4 w-4" /> Demo
                  </a>
                </div>
              </div>
            </Reveal>
          )
        })}
      </div>
    </section>
  )
}
