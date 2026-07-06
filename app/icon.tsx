import { ImageResponse } from 'next/og'

export const size = { width: 32, height: 32 }
export const contentType = 'image/png'

// Landmark compass mark: cream crosshair + ring on brand rust.
export default function Icon() {
  const needle = { position: 'absolute' as const, background: '#F7EFE6', borderRadius: 2, display: 'flex' }
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          background: '#8E2D0A',
          borderRadius: 7,
          position: 'relative',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <div style={{ position: 'absolute', width: 18, height: 18, borderRadius: '50%', border: '2px solid #F7EFE6', display: 'flex' }} />
        <div style={{ ...needle, width: 2.6, height: 26, left: 14.7, top: 3 }} />
        <div style={{ ...needle, width: 26, height: 2.6, left: 3, top: 14.7 }} />
      </div>
    ),
    { ...size }
  )
}
