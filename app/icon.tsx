import { ImageResponse } from 'next/og'

export const size = { width: 32, height: 32 }
export const contentType = 'image/png'

// Simple shamrock mark: three white leaves + stem on deep green.
export default function Icon() {
  const leaf = { position: 'absolute' as const, width: 13, height: 13, background: '#fff', borderRadius: '50%' }
  return new ImageResponse(
    (
      <div style={{ width: '100%', height: '100%', background: '#16401F', borderRadius: 7, position: 'relative', display: 'flex' }}>
        <div style={{ ...leaf, left: 9.5, top: 3 }} />
        <div style={{ ...leaf, left: 3, top: 12 }} />
        <div style={{ ...leaf, left: 16, top: 12 }} />
        <div style={{ position: 'absolute', width: 2.5, height: 9, background: '#fff', left: 14.5, top: 19, borderRadius: 2 }} />
      </div>
    ),
    { ...size }
  )
}
