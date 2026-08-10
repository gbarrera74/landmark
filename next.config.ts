import type { NextConfig } from "next";
import { WP_REDIRECTS } from "./lib/redirects";

const nextConfig: NextConfig = {
  trailingSlash: true,
  async redirects() {
    // Old WordPress URLs -> new paths (cutover). See lib/redirects.ts.
    return WP_REDIRECTS;
  },
  async rewrites() {
    // The HubSpot lead forms are configured to send people to
    // /thank-you-page-2/ after submitting, and the Google Ads conversion is a
    // GA4 key event (lp_thank_you_page) keyed on that thank-you page view.
    //
    // These used to be 301s to /thank-you/, which meant the browser never
    // landed on the URL the form actually names -- GA4 recorded /thank-you/
    // instead. A REWRITE serves the same page while leaving the URL alone, so
    // what the marketer configured in HubSpot is what analytics sees. A
    // conversion path should not contain a redirect.
    //
    // Safe to serve one page at several URLs here: /thank-you/ is
    // `noindex, follow` and is not in the sitemap, so there is no duplicate
    // content exposure.
    return [
      { source: '/thank-you-page/', destination: '/thank-you/' },
      { source: '/thank-you-page-2/', destination: '/thank-you/' },
      { source: '/thank-you-page-landmark-tours-plus/', destination: '/thank-you/' },
    ];
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
