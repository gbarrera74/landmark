import Link from 'next/link'
import Compass from './Compass'

type Crumb = { label: string; href?: string }

export default function PageHero({
  eyebrow,
  title,
  subtitle,
  image,
  imagePosition,
  breadcrumb,
}: {
  eyebrow?: string
  title: React.ReactNode
  subtitle?: React.ReactNode
  image?: string
  /**
   * CSS object-position for the hero photo. The hero crops a tall image down to
   * a wide band, and the default centre crop cuts people's faces out of
   * portrait-ish group shots. Pass e.g. "center 28%" to hold the subject.
   */
  imagePosition?: string
  breadcrumb?: Crumb[]
}) {
  return (
    <section className={`ilp-hero${image ? ' ilp-hero--photo' : ''}`}>
      {image && (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          className="ilp-hero-img"
          src={image}
          alt=""
          aria-hidden="true"
          style={imagePosition ? { objectPosition: imagePosition } : undefined}
        />
      )}
      <div className="ilp-hero-inner">
        {breadcrumb && breadcrumb.length > 0 && (
          <nav className="ilp-breadcrumb" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            {breadcrumb.map((c) => (
              <span key={c.label}>
                <span className="ilp-breadcrumb-sep">/</span>
                {c.href ? <Link href={c.href}>{c.label}</Link> : <span className="ilp-breadcrumb-current">{c.label}</span>}
              </span>
            ))}
          </nav>
        )}
        <span className="ilp-hero-clover"><Compass size={26} /></span>
        {eyebrow && <span className="ile-eyebrow">{eyebrow}</span>}
        <h1>{title}</h1>
        {subtitle && <p className="ilp-hero-sub">{subtitle}</p>}
      </div>
    </section>
  )
}
