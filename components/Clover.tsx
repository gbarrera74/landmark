export default function Clover({ size = 24, className }: { size?: number; className?: string }) {
  return (
    <svg viewBox="0 0 32 32" width={size} height={size} fill="currentColor" className={className} aria-hidden="true">
      <circle cx="16" cy="10" r="6.2" />
      <circle cx="9.5" cy="17" r="6.2" />
      <circle cx="22.5" cy="17" r="6.2" />
      <rect x="14.8" y="17.5" width="2.4" height="12" rx="1.2" transform="rotate(-6 16 23)" />
    </svg>
  )
}
