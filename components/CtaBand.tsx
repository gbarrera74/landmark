import Link from 'next/link'
import Compass from './Compass'

export default function CtaBand({
  eyebrow = 'Educational Travel, Built for You',
  title = 'Ready to Plan Your Next Trip?',
  text = 'Tell us where you want to go. We’ll craft a safe, custom itinerary built around your students, your goals, and your budget.',
  primary = { label: 'Get a Free Quote', href: '/get-a-quote/' },
  secondary = { label: 'Talk to a Tour Specialist', href: '/contact-us/' },
}: {
  eyebrow?: string
  title?: string
  text?: string
  primary?: { label: string; href: string }
  secondary?: { label: string; href: string }
}) {
  return (
    <section className="ilp-cta">
      <div className="ile-container ile-center">
        <span className="ilm-cta-clover"><Compass size={26} /></span>
        <span className="ile-script">{eyebrow}</span>
        <h2>{title}</h2>
        <p>{text}</p>
        <div className="ilp-cta-actions">
          <Link href={primary.href} className="ile-btn ile-btn--gold">{primary.label}</Link>
          {secondary && <Link href={secondary.href} className="ile-btn ile-btn--outline-light">{secondary.label}</Link>}
        </div>
      </div>
    </section>
  )
}
