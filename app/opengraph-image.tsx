import { ImageResponse } from 'next/og'

export const alt = 'Irish Life Experience — A 25-Day Irish Summer for High Schoolers'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          background: 'linear-gradient(135deg, #0C2812 0%, #16401F 55%, #1F5A2A 100%)',
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
        {/* gold glow */}
        <div
          style={{
            position: 'absolute',
            top: -240,
            right: -240,
            width: 700,
            height: 700,
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(243,200,32,0.22), transparent 70%)',
            display: 'flex',
          }}
        />
        {/* shamrock */}
        <div style={{ position: 'relative', width: 130, height: 130, display: 'flex' }}>
          <div style={{ position: 'absolute', width: 54, height: 54, background: '#F3C820', borderRadius: '50%', left: 38, top: 6, display: 'flex' }} />
          <div style={{ position: 'absolute', width: 54, height: 54, background: '#F3C820', borderRadius: '50%', left: 6, top: 46, display: 'flex' }} />
          <div style={{ position: 'absolute', width: 54, height: 54, background: '#F3C820', borderRadius: '50%', left: 70, top: 46, display: 'flex' }} />
          <div style={{ position: 'absolute', width: 10, height: 42, background: '#F3C820', borderRadius: 4, left: 60, top: 82, transform: 'rotate(-6deg)', display: 'flex' }} />
        </div>
        <div style={{ fontSize: 86, fontWeight: 700, letterSpacing: -1.5, marginTop: 36, textAlign: 'center', display: 'flex' }}>Irish Life Experience</div>
        <div style={{ fontSize: 34, color: '#F8DB6B', marginTop: 18, textAlign: 'center', maxWidth: 940, display: 'flex' }}>A 25-Day Irish Summer for High Schoolers</div>
        <div style={{ fontSize: 22, color: 'rgba(255,255,255,0.72)', marginTop: 40, letterSpacing: 4, textTransform: 'uppercase', display: 'flex' }}>Waterford · Dublin · Galway</div>
      </div>
    ),
    { ...size }
  )
}
