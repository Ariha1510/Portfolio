import { Mail } from 'lucide-react'
import { PROFILE } from '@/lib/portfolio-data'
import { GithubIcon, LinkedinIcon } from '@/components/brand-icons'

export function SiteFooter() {
  return (
    <footer className="mt-16 border-t border-border bg-background/60 backdrop-blur">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-5 px-6 py-10 sm:flex-row">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()}{' '}
          <span className="font-semibold text-foreground">{PROFILE.name}</span>.
          Built with care.
        </p>
        <div className="flex gap-4">
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
              className="text-muted-foreground transition-colors hover:text-primary"
            >
              <Icon className="h-5 w-5" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
