export default function Compass({ size = 24, className }: { size?: number; className?: string }) {
  return (
    <svg viewBox="0 0 32 32" width={size} height={size} className={className} aria-hidden="true">
      {/* 4-point compass star — Landmark's mark */}
      <g fill="currentColor">
        <polygon points="16,1 18,16 16,31 14,16" />
        <polygon points="1,16 16,14 31,16 16,18" />
      </g>
      <circle cx="16" cy="16" r="5.4" fill="none" stroke="currentColor" strokeWidth="1.4" />
    </svg>
  )
}
