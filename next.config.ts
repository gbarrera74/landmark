import type { NextConfig } from "next";
import { WP_REDIRECTS } from "./lib/redirects";

const nextConfig: NextConfig = {
  trailingSlash: true,
  async redirects() {
    // Old WordPress URLs -> new paths (cutover). See lib/redirects.ts.
    return WP_REDIRECTS;
  },
  images: {
    // trailingSlash:true rewrites /_next/image → /_next/image/, which breaks the
    // optimizer endpoint in the browser. Our media is pre-optimized (sized WebP/
    // JPEG in /public), so serve it as-is and skip the optimizer entirely.
    unoptimized: true,
    remotePatterns: [
      { protocol: 'https', hostname: 'irishlifeexperience.com', pathname: '/wp-content/uploads/**' },
    ],
  },
  async headers() {
    // Only the real production origin is treated as production. Any other build
    // (staging, previews, local) is non-production. Production MUST set
    // SITE_URL=https://landmarkeducationaltours.com.
    const isProd = (process.env.SITE_URL ?? '').replace(/\/$/, '') === 'https://landmarkeducationaltours.com';
    return [
      {
        // Migrated media is content-stable (new images get new filenames),
        // so cache aggressively. Version the filename (foo-v2.webp) when
        // replacing an existing image, or returning visitors keep the old one.
        source: '/wp-images/:path*',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
        ],
      },
      // Fail-safe noindex: every non-production build gets a hard X-Robots-Tag
      // noindex on ALL responses (stronger than robots.txt — keeps staging out
      // of every search index even if it's crawled or linked).
      ...(isProd ? [] : [{
        source: '/:path*',
        headers: [{ key: 'X-Robots-Tag', value: 'noindex, nofollow' }],
      }]),
    ];
  },
};

export default nextConfig;
