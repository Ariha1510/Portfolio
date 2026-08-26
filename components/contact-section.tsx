'use client'

import { Loader2, Mail, MapPin, Send } from 'lucide-react'
import { useState } from 'react'
import { PROFILE } from '@/lib/portfolio-data'
import { GithubIcon, LinkedinIcon } from '@/components/brand-icons'
import { Reveal } from '@/components/reveal'
import { SectionHeader } from '@/components/section-header'

export function ContactSection() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent'>('idle')

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('sending')
    const form = e.currentTarget
    setTimeout(() => {
      setStatus('sent')
      form.reset()
      setTimeout(() => setStatus('idle'), 5000)
    }, 1200)
  }

  return (
    <section id="contact" className="mx-auto max-w-6xl px-6 py-20">
      <SectionHeader tag="Get In Touch" title="Let's Build Something" />

      <Reveal className="glass grid gap-10 rounded-3xl p-8 sm:p-12 lg:grid-cols-[1fr_1.2fr]">
        <div>
          <h3 className="font-heading text-2xl font-bold">
            Have a project in mind?
          </h3>
          <p className="mt-3 leading-relaxed text-muted-foreground">
            I&apos;m open to internships, collaborations, and interesting
            problems to solve. Drop a message and I&apos;ll get back to you.
          </p>

          <div className="mt-8 flex flex-col gap-5">
            <a
              href={`mailto:${PROFILE.email}`}
              className="flex items-center gap-4"
            >
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-primary/10 text-primary">
                <Mail className="h-5 w-5" />
              </span>
              <span>
                <span className="block text-xs text-muted-foreground">
                  Email
                </span>
                <span className="font-medium">{PROFILE.email}</span>
              </span>
            </a>
            <div className="flex items-center gap-4">
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-accent/10 text-accent">
                <MapPin className="h-5 w-5" />
              </span>
              <span>
                <span className="block text-xs text-muted-foreground">
                  Location
                </span>
                <span className="font-medium">{PROFILE.location}</span>
              </span>
            </div>
          </div>

          <div className="mt-8 flex gap-3">
            <a
              href={PROFILE.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-border bg-card/50 px-4 py-2.5 text-sm font-medium transition-colors hover:border-primary/40"
            >
              <GithubIcon className="h-4 w-4" /> GitHub
            </a>
            <a
              href={PROFILE.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-border bg-card/50 px-4 py-2.5 text-sm font-medium transition-colors hover:border-primary/40"
            >
              <LinkedinIcon className="h-4 w-4" /> LinkedIn
            </a>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <div className="grid gap-5 sm:grid-cols-2">
            <Field label="Name" name="name" placeholder="Your name" />
            <Field
              label="Email"
              name="email"
              type="email"
              placeholder="you@example.com"
            />
          </div>
          <Field label="Subject" name="subject" placeholder="Let's collaborate" />
          <div className="flex flex-col gap-2">
            <label
              htmlFor="message"
              className="text-sm font-semibold text-muted-foreground"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={4}
              placeholder="Tell me about your idea..."
              className="resize-none rounded-lg border border-border bg-card/40 px-4 py-3 text-sm outline-none transition-colors focus:border-primary focus:bg-card/70"
            />
          </div>

          <button
            type="submit"
            disabled={status !== 'idle'}
            className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-7 py-3 font-heading text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/25 transition-all hover:scale-[1.01] disabled:opacity-70"
          >
            {status === 'sending' ? (
              <>
                Sending... <Loader2 className="h-4 w-4 animate-spin" />
              </>
            ) : status === 'sent' ? (
              'Message sent ✓'
            ) : (
              <>
                Send Message <Send className="h-4 w-4" />
              </>
            )}
          </button>

          {status === 'sent' && (
            <p className="text-center text-sm text-emerald-500">
              Thank you! Your message has been sent successfully.
            </p>
          )}
        </form>
      </Reveal>
    </section>
  )
}

function Field({
  label,
  name,
  type = 'text',
  placeholder,
}: {
  label: string
  name: string
  type?: string
  placeholder?: string
}) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={name} className="text-sm font-semibold text-muted-foreground">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required
        placeholder={placeholder}
        className="rounded-lg border border-border bg-card/40 px-4 py-3 text-sm outline-none transition-colors focus:border-primary focus:bg-card/70"
      />
    </div>
  )
}
