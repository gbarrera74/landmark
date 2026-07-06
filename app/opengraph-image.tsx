import { ImageResponse } from 'next/og'

export const alt = 'Landmark Educational Tours — Educational Travel, Built for You'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OpengraphImage() {
  const needle = { position: 'absolute' as const, background: '#F2A94B', borderRadius: 4, display: 'flex' }
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          background: 'linear-gradient(135deg, #241109 0%, #8E2D0A 58%, #B4470F 100%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#fff',
          padding: 72,
          position: 'relative',
          fontFamily: 'sans-serif',
        }}
      >
        {/* amber glow */}
        <div
          style={{
            position: 'absolute',
            top: -240,
            right: -220,
            width: 700,
            height: 700,
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(226,132,19,0.30), transparent 70%)',
            display: 'flex',
          }}
        />
        {/* compass mark */}
        <div style={{ position: 'relative', width: 132, height: 132, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div style={{ position: 'absolute', width: 104, height: 104, borderRadius: '50%', border: '5px solid #F2A94B', display: 'flex' }} />
          <div style={{ ...needle, width: 7, height: 132, left: 62.5, top: 0 }} />
          <div style={{ ...needle, width: 132, height: 7, left: 0, top: 62.5 }} />
        </div>
        <div style={{ fontSize: 80, fontWeight: 800, letterSpacing: -1.5, marginTop: 40, textAlign: 'center', display: 'flex' }}>Landmark Educational Tours</div>
        <div style={{ fontSize: 36, color: '#F2A94B', marginTop: 18, textAlign: 'center', maxWidth: 960, display: 'flex' }}>Educational Travel, Built for You</div>
        <div style={{ fontSize: 21, color: 'rgba(255,255,255,0.72)', marginTop: 42, letterSpacing: 4, textTransform: 'uppercase', display: 'flex' }}>Student Field Trips · Across the U.S. &amp; Beyond</div>
      </div>
    ),
    { ...size }
  )
}
