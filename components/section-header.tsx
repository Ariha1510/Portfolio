import { Reveal } from '@/components/reveal'

export function SectionHeader({
  tag,
  title,
}: {
  tag: string
  title: string
}) {
  return (
    <Reveal className="mb-12 text-center">
      <span className="mb-2 block text-xs font-bold tracking-[0.2em] text-[var(--sky)] uppercase">
        {tag}
      </span>
      <h2 className="font-heading text-3xl font-bold tracking-tight text-balance sm:text-4xl">
        {title}
      </h2>
    </Reveal>
  )
}
