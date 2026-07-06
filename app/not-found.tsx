import Link from 'next/link'

export const metadata = { title: 'Page Not Found' }

export default function NotFound() {
  return (
    <main className="ilp-hero" style={{ minHeight: '80vh', textAlign: 'center' }}>
      <div className="ilp-hero-inner">
        <span className="ile-script" style={{ color: 'var(--lm-secondary-soft)', fontSize: 40, display: 'block' }}>Ó, no!</span>
        <h1 style={{ marginTop: 6 }}>This Page Took a <em>Wrong Turn</em></h1>
        <p className="ilp-hero-sub">We couldn&apos;t find the page you were looking for — but Ireland is still waiting. Let&apos;s get you back on the path.</p>
        <div style={{ marginTop: 30, display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link href="/" className="ile-btn ile-btn--gold">Back to Home</Link>
          <Link href="/programs/" className="ile-btn ile-btn--outline-light">Explore the Program</Link>
        </div>
      </div>
    </main>
  )
}
