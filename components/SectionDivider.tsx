import Compass from './Compass'

export default function SectionDivider({ tone = 'light' }: { tone?: 'light' | 'dark' }) {
  return (
    <div className={`ile-divider ile-divider--${tone}`} aria-hidden="true">
      <span className="ile-divider-line" />
      <Compass size={22} />
      <span className="ile-divider-line" />
    </div>
  )
}
