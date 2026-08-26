'use client'

import { useEffect, useRef, useState } from 'react'
import { STATS } from '@/lib/portfolio-data'
import { cn } from '@/lib/utils'

function Counter({ value }: { value: string }) {
  const ref = useRef<HTMLSpanElement | null>(null)
  const [display, setDisplay] = useState('0')

  useEffect(() => {
    const node = ref.current
    if (!node) return
    const suffix = value.replace(/[0-9.]/g, '')
    const target = parseFloat(value)
    const decimals = value.includes('.') ? 2 : 0

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        observer.unobserve(entry.target)
        const duration = 1400
        const start = performance.now()
        const run = (now: number) => {
          const p = Math.min((now - start) / duration, 1)
          const eased = 1 - Math.pow(1 - p, 3)
          setDisplay((eased * target).toFixed(decimals) + suffix)
          if (p < 1) requestAnimationFrame(run)
        }
        requestAnimationFrame(run)
      },
      { threshold: 0.5 },
    )
    observer.observe(node)
    return () => observer.disconnect()
  }, [value])

  return <span ref={ref}>{display}</span>
}

export function StatsStrip() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-6">
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
        {STATS.map((stat, i) => (
          <div
            key={stat.label}
            className={cn(
              'glass flex flex-col items-center gap-1 rounded-2xl px-6 py-7 text-center transition-transform hover:-translate-y-1',
            )}
            style={{ transitionDelay: `${i * 40}ms` }}
          >
            <strong className="gradient-text font-heading text-3xl font-extrabold sm:text-4xl">
              <Counter value={stat.value} />
            </strong>
            <span className="text-xs font-medium tracking-wide text-muted-foreground uppercase">
              {stat.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  )
}
