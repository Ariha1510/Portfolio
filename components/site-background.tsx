export function SiteBackground() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      {/* Grid */}
      <div
        className="absolute inset-0 opacity-[0.35] dark:opacity-25"
        style={{
          backgroundImage:
            'linear-gradient(to right, color-mix(in oklch, var(--foreground) 8%, transparent) 1px, transparent 1px), linear-gradient(to bottom, color-mix(in oklch, var(--foreground) 8%, transparent) 1px, transparent 1px)',
          backgroundSize: '38px 38px',
          maskImage:
            'radial-gradient(circle at center, black 30%, transparent 80%)',
          WebkitMaskImage:
            'radial-gradient(circle at center, black 30%, transparent 80%)',
        }}
      />
      {/* Glows */}
      <div className="absolute -top-40 -right-32 h-[45vw] w-[45vw] rounded-full bg-primary/20 blur-[120px] dark:bg-primary/25" />
      <div className="absolute -bottom-40 -left-32 h-[42vw] w-[42vw] rounded-full bg-accent/20 blur-[120px] dark:bg-accent/20" />
      <div className="absolute top-1/3 left-1/2 h-[30vw] w-[30vw] -translate-x-1/2 rounded-full bg-[var(--sky)]/10 blur-[130px]" />
    </div>
  )
}
