'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { SITE } from '@/lib/seo/schemas'

const PORTAL_URL = 'https://secureportal.landmarkeducationaltours.com/'

type NavLink = { label: string; href: string }
type NavGroup = { title?: string; links: NavLink[] }
type NavItem = { label: string; href: string; children?: NavLink[]; groups?: NavGroup[] }

const NAV: NavItem[] = [
  {
    label: 'Destinations',
    href: '/destinations/',
    groups: [
      {
        title: 'East Coast',
        links: [
          { label: 'Washington, DC', href: '/usa-trips/washington-d-c/' },
          { label: 'New York, NY', href: '/usa-trips/new-york-city-tours/' },
          { label: 'Boston, MA', href: '/usa-trips/boston/' },
          { label: 'Philadelphia, PA', href: '/usa-trips/philadelphia-tours/' },
          { label: 'Atlanta, GA', href: '/usa-trips/atlanta/' },
          { label: 'Orlando, FL', href: '/usa-trips/orlando-schooltrips/' },
          { label: 'Williamsburg, VA', href: '/williamsburg-tours/' },
          { label: 'Charleston, SC', href: '/charleston-sc/' },
          { label: 'Savannah, GA', href: '/savannah-tours/' },
          { label: 'New Orleans, LA', href: '/usa-trips/new-orleans-tours/' },
        ],
      },
      {
        title: 'Midwest',
        links: [
          { label: 'Chicago, IL', href: '/usa-trips/chicago-tours/' },
          { label: 'Mackinac Island, MI', href: '/mackinac-island-tours/' },
        ],
      },
      {
        title: 'Southwest',
        links: [
          { label: 'San Antonio, TX', href: '/usa-trips/san-antonio-tours/' },
          { label: 'New Mexico', href: '/new-mexico-tours/' },
        ],
      },
      {
        title: 'West Coast',
        links: [
          { label: 'Los Angeles, CA', href: '/los-angeles-tours/' },
          { label: 'Seattle, WA', href: '/seattle-washington-tours/' },
        ],
      },
      {
        title: 'International',
        links: [
          { label: 'Italy', href: '/international/italy/' },
          { label: 'France', href: '/international/france/' },
          { label: 'England', href: '/international/england/' },
          { label: 'Ireland', href: '/international/ireland/' },
          { label: 'Norway', href: '/international/norway/' },
          { label: 'Europe', href: '/international/' },
          { label: 'Costa Rica', href: '/international/costa-rica/' },
          { label: 'Japan', href: '/international/japan/' },
          { label: 'South Korea', href: '/international/south-korea/' },
          { label: 'Canada', href: '/international/canada/' },
          { label: 'View all international →', href: '/international/' },
        ],
      },
    ],
  },
  {
    label: 'Themes',
    href: '/themes/',
    groups: [
      {
        title: 'History & Culture',
        links: [
          { label: 'US History & Civics', href: '/usa-trips/washington-d-c/washington-dc-civics-student-tour/' },
          { label: 'African American History', href: '/usa-trips/washington-d-c/african-american-history-dc-student-tour/' },
          { label: 'HBCU Campus Tours', href: '/usa-trips/washington-d-c/hbcu-campus-tours/' },
          { label: 'The Crucible: Salem, MA', href: '/usa-trips/boston/boston-and-salem-school-trip/' },
        ],
      },
      {
        title: 'Arts & Language',
        links: [
          { label: 'Performing Arts', href: '/usa-trips/new-york-city-tours/nyc-performing-arts-tour/' },
          { label: 'Spanish Immersion', href: '/usa-trips/chicago-tours/chicago-spanish-immersion-school-trip/' },
          { label: 'French Immersion', href: '/international/canada/montreal-3-day-french-immersion-class-trip-itinerary/' },
        ],
      },
      {
        title: 'Outdoors & Programs',
        links: [
          { label: 'Yellowstone School Trip', href: '/yellowstone-national-park-school-trip/' },
          { label: 'Yellowstone Field Trip', href: '/yellowstone-national-park-field-trip/' },
          { label: 'Scouts', href: '/usa-trips/washington-d-c/scouts/' },
          { label: 'YMCA / Summer Camp', href: '/usa-trips/new-york-city-tours/ymca-summer-camp/' },
        ],
      },
    ],
  },
  {
    label: 'About',
    href: '/about-landmark/',
    children: [
      { label: 'About Landmark', href: '/about-landmark/' },
      { label: 'Accreditations & Certifications', href: '/accreditations-certifications/' },
      { label: 'Travel Safety & Support', href: '/travel-safety-support/' },
      { label: 'Careers', href: '/careers/' },
    ],
  },
  {
    label: 'Resources',
    href: '/resources/',
    children: [
      { label: 'Blog', href: '/blog/' },
      { label: 'FAQ', href: '/faq/' },
      { label: 'Testimonials', href: '/testimonials/' },
      { label: 'Plan a Trip', href: '/plan-a-trip/' },
    ],
  },
]

const itemLinks = (item: NavItem): NavLink[] =>
  item.groups ? item.groups.flatMap((g) => g.links) : item.children ?? []

function Chevron() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polyline points="6 9 12 15 18 9" />
    </svg>
  )
}

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [openGroup, setOpenGroup] = useState<string | null>(null)
  const pathname = usePathname() ?? '/'

  const isItemActive = (item: NavItem): boolean =>
    pathname === item.href || itemLinks(item).some((l) => pathname === l.href)
  const isChildActive = (href: string): boolean => pathname === href

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  return (
    <header className={`ileh-wrap${scrolled ? ' is-scrolled' : ''}`}>
      <div className="lmh-utility">
        <div className="lmh-utility-inner">
          <div className="lmh-utility-contact">
            <a href={`tel:${SITE.phone}`}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92Z" /></svg>
              {SITE.phoneDisplay}
            </a>
            <a href={`mailto:${SITE.email}`}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="2" y="4" width="20" height="16" rx="2" /><path d="m22 7-10 6L2 7" /></svg>
              {SITE.email}
            </a>
            <span className="lmh-utility-addr">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0Z" /><circle cx="12" cy="10" r="3" /></svg>
              {SITE.address.street}, {SITE.address.city}, {SITE.address.region} {SITE.address.postalCode}
            </span>
          </div>
        </div>
      </div>
      <div className="ileh-bar">
        <div className="ileh-inner">
          <Link href="/" className="ileh-logo" aria-label="Landmark Educational Tours — home">
            <Image src="/images/landmark-logo.png" alt="Landmark Educational Tours" width={300} height={90} priority />
          </Link>

          <nav className="ileh-nav" aria-label="Primary">
            {NAV.map((item) => {
              const active = isItemActive(item)
              return (
                <div key={item.label} className="ileh-item">
                  {item.groups ? (
                    <>
                      <Link href={item.href} className={`ileh-link${active ? ' is-active' : ''}`}>
                        {item.label}
                        <Chevron />
                      </Link>
                      <div className="ileh-mega">
                        <div className="ileh-mega-inner">
                          {item.groups.map((g) => (
                            <div key={g.title} className="ileh-mega-col">
                              {g.title && <h5>{g.title}</h5>}
                              {g.links.map((l) => (
                                <Link key={l.label} href={l.href} className={isChildActive(l.href) ? 'is-active' : ''}>{l.label}</Link>
                              ))}
                            </div>
                          ))}
                        </div>
                      </div>
                    </>
                  ) : item.children ? (
                    <>
                      <Link href={item.href} className={`ileh-link${active ? ' is-active' : ''}`}>
                        {item.label}
                        <Chevron />
                      </Link>
                      <div className="ileh-drop">
                        {item.children.map((c) => (
                          <Link key={c.href} href={c.href} className={`ileh-drop-link${isChildActive(c.href) ? ' is-active' : ''}`}>{c.label}</Link>
                        ))}
                      </div>
                    </>
                  ) : (
                    <Link href={item.href} className={`ileh-link${active ? ' is-active' : ''}`}>{item.label}</Link>
                  )}
                </div>
              )
            })}
          </nav>

          <div className="ileh-cta-group">
            <a href={PORTAL_URL} className="ileh-login" target="_blank" rel="noopener noreferrer">Login</a>
            <Link href="/get-a-quote/" className="ileh-cta">Get a Quote</Link>
          </div>

          <button
            className={`ileh-burger${mobileOpen ? ' is-open' : ''}`}
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((v) => !v)}
          >
            <span /><span /><span />
          </button>
        </div>
      </div>

      <div className={`ileh-mobile${mobileOpen ? ' is-open' : ''}`}>
        {NAV.map((item) => {
          const active = isItemActive(item)
          const hasSub = !!(item.groups || item.children)
          return hasSub ? (
            <div key={item.label} className={`ileh-m-group${openGroup === item.label ? ' is-open' : ''}${active ? ' is-active' : ''}`}>
              <button className={`ileh-m-parent${active ? ' is-active' : ''}`} onClick={() => setOpenGroup((g) => (g === item.label ? null : item.label))}>
                {item.label}
                <Chevron />
              </button>
              <div className="ileh-m-sub">
                {item.groups
                  ? item.groups.map((g) => (
                      <div key={g.title} className="ileh-m-subgroup">
                        {g.title && <h6>{g.title}</h6>}
                        {g.links.map((l) => (
                          <Link key={l.label} href={l.href} className={isChildActive(l.href) ? 'is-active' : ''} onClick={() => setMobileOpen(false)}>{l.label}</Link>
                        ))}
                      </div>
                    ))
                  : item.children!.map((c) => (
                      <Link key={c.href} href={c.href} className={isChildActive(c.href) ? 'is-active' : ''} onClick={() => setMobileOpen(false)}>{c.label}</Link>
                    ))}
              </div>
            </div>
          ) : (
            <Link key={item.label} href={item.href} className={`ileh-m-link${active ? ' is-active' : ''}`} onClick={() => setMobileOpen(false)}>
              {item.label}
            </Link>
          )
        })}
        <div className="ileh-m-cta">
          <Link href="/get-a-quote/" className="ile-btn ile-btn--primary" onClick={() => setMobileOpen(false)}>Get a Quote</Link>
          <a href={PORTAL_URL} className="ile-btn ile-btn--ghost" target="_blank" rel="noopener noreferrer">Login to Portal</a>
        </div>
      </div>
    </header>
  )
}
