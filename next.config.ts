import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  trailingSlash: true,
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
    ];
  },
};

export default nextConfig;
