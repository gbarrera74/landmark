import Link from 'next/link'

export const metadata = { title: 'Page Not Found' }

export default function NotFound() {
  return (
    <main className="ilp-hero" style={{ minHeight: '80vh', textAlign: 'center' }}>
      <div className="ilp-hero-inner">
        <span className="ile-eyebrow" style={{ justifyContent: 'center' }}>Error 404</span>
        <h1 style={{ marginTop: 10 }}>This Trip Took a <em>Wrong Turn</em></h1>
        <p className="ilp-hero-sub">
          We couldn&apos;t find the page you were looking for — but the adventure isn&apos;t over. Let&apos;s get you back on the itinerary.
        </p>
        <div style={{ marginTop: 30, display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link href="/" className="ile-btn ile-btn--primary">Back to Home</Link>
          <Link href="/destinations/" className="ile-btn ile-btn--ghost">Browse Destinations</Link>
        </div>
      </div>
    </main>
  )
}
