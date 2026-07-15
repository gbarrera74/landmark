import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// Batch 4: permanently-retired junk pages (staging clones, dead WooCommerce,
// expired campaigns, thank-you/utility stubs). Return 410 Gone so search
// engines deindex them fast — intentionally NOT redirected.
// Next 16 "proxy" convention (formerly middleware).
const GONE = new Set(["/boston-rebrand", "/new-york-city-rebrand", "/atlanta-rebrand", "/my-account", "/checkout", "/cart", "/shop", "/teacher-discovery-summit-quebec-city-april-2025", "/mafla-actfl-2024-conference-bag", "/mafla-actfl-2024", "/quebec-city-school-trip-promo-2024-2025", "/b2s-new", "/acis-test", "/thank-you-page-2", "/itinerary-trip-template", "/thank-you-page-landmark-tours-plus", "/thank-you-page"])

export function proxy(req: NextRequest) {
  const path = req.nextUrl.pathname.replace(/\/$/, '') || '/'
  if (GONE.has(path)) {
    return new NextResponse('410 Gone \u2014 this page has been permanently removed.', {
      status: 410,
      headers: { 'content-type': 'text/plain; charset=utf-8', 'x-robots-tag': 'noindex' },
    })
  }
  return NextResponse.next()
}

export const config = {
  matcher: [
    "/boston-rebrand",
    "/boston-rebrand/",
    "/new-york-city-rebrand",
    "/new-york-city-rebrand/",
    "/atlanta-rebrand",
    "/atlanta-rebrand/",
    "/my-account",
    "/my-account/",
    "/checkout",
    "/checkout/",
    "/cart",
    "/cart/",
    "/shop",
    "/shop/",
    "/teacher-discovery-summit-quebec-city-april-2025",
    "/teacher-discovery-summit-quebec-city-april-2025/",
    "/mafla-actfl-2024-conference-bag",
    "/mafla-actfl-2024-conference-bag/",
    "/mafla-actfl-2024",
    "/mafla-actfl-2024/",
    "/quebec-city-school-trip-promo-2024-2025",
    "/quebec-city-school-trip-promo-2024-2025/",
    "/b2s-new",
    "/b2s-new/",
    "/acis-test",
    "/acis-test/",
    "/thank-you-page-2",
    "/thank-you-page-2/",
    "/itinerary-trip-template",
    "/itinerary-trip-template/",
    "/thank-you-page-landmark-tours-plus",
    "/thank-you-page-landmark-tours-plus/",
    "/thank-you-page",
    "/thank-you-page/",
  ],
}
