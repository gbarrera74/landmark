# Landmark Educational Tours — Next.js Rebuild

WordPress/Elementor → Next.js migration, mirroring the junipertours.com process.
Landmark is part of the same brand family as Juniper Tours, Irish Life Experience,
Ever Blue Tours, and Go Blue (shared address: 1 Central St, Middleton, MA 01949).

## Decisions (locked 2026-06-22)
- **Build locally first** at `~/Documents/landmarkeducationaltours`. No deploy without explicit per-deploy consent.
- **Headless WordPress blog**, exactly like Juniper: keep WP at a `cms.landmarkeducationaltours.com` subdomain, pull all ~192 posts via REST (`lib/wp/*`). Wired in a later wave.
- **Core evergreen marketing site first.** Defer (architect for, don't build yet): ~50 school registration LPs, WooCommerce shop/cart/checkout, secure portal/login.

## Stack (mirror of Juniper / ILE)
- Next.js 16.2.6 · React 19.2.4 · TypeScript 5 · Tailwind 4 installed but **unused** (design system is hand-written CSS) · isomorphic-dompurify (blog sanitization)
- App Router, **no `src/`**. Folder-per-page (not dynamic `[slug]`) for destination/theme pages. Content is hardcoded TS arrays per page.
- `next.config.ts`: `trailingSlash: true`, `images.unoptimized: true`, `/wp-images/*` 1yr immutable cache, plus the big `WP_REDIRECTS` array (added in the redirects wave).
- Deploy model (later): git push → SSH `deploy-*` script → `npm install`-in-build + pm2 restart. Build script already runs `npm install` (the Juniper workaround — keep it).

## Reference repos
- **`~/Documents/junipertours`** — production patterns: HubSpot-wired forms (RequestInfoPopup, LpLeadForm), `lib/wp/*` headless blog, `lib/seo/*` schemas, `next.config.ts` redirects, JSON-LD, portal.
- **`~/Documents/irishlifeexperience`** (ILE) — the clean scaffold this repo was cloned from. Generic components: Header, Footer, PageHero, CtaBand, FaqAccordion, SectionDivider, GoogleFonts, ContactForm, home/LeadForm; `lib/seo/{JsonLd,schemas}`; `app/{sitemap,robots,opengraph-image,icon}`.

## Brand identity (confirmed from live logo + Elementor kit)
- **Primary `#8e2d0a`** (rust / terracotta) — the logo color
- **Secondary `#e28413`** (amber / orange)
- Text near-black (`#000` / `#33373d`), white surfaces
- **Fonts (confirmed from live CSS):** headings **Poppins**, body **Montserrat**, serif accent **Lora** (matches the logo). The Elementor kit's Angkor/Roboto Slab globals are stale defaults — not applied. Load all three via the non-blocking `GoogleFonts.tsx`.
- **Forms → HubSpot** portal `9241531`, main form `2bb4a315-aed5-475b-b26d-63619efafea7`, region `na1`. Wire via Juniper's custom-form → Forms API v3 submit pattern (native design, same pipeline). NOT shared with Juniper's portal.
- **Mark:** compass rose (the "landmark" mark). Replaces ILE's clover motif → new `Compass.tsx`.
- Logos staged: `public/images/landmark-logo.png` (1000×300) + `landmark-logo-small.png`.
- Tagline: "Educational Travel, Built for You." Title: "Educational Field Trips | Student Travel Agency."
- Contact: 888-886-2781 · 1 Central Street, Suite 205, Middleton, MA 01949 · CST 2168995-50. Socials: Facebook, Instagram, LinkedIn, TikTok.

## Information architecture (real nav, from live mega-menu)
- **Destinations**
  - East Coast: Washington DC, New York NY, Atlanta GA, Boston MA, Orlando FL, Philadelphia PA, Williamsburg VA, New Orleans LA, Charleston SC, Savannah GA
  - Midwest: Chicago IL, Mackinac Island MI
  - Southwest: San Antonio TX, New Mexico
  - West Coast: Los Angeles CA, Seattle WA
  - International: Canada, Costa Rica, Norway, Italy (live page-sitemap also has Croatia, England, France, Greece, Spain, Scotland, Portugal, Ireland, Iceland under `/international/`)
- **Themes:** HBCU Campus Tours, The Crucible (Salem MA), US History/Civics, Performing Arts, Spanish Immersion, French Immersion, YMCA/Summer Camp, African American History, Scouts, Yellowstone (Field Trip + School Trip)
- **About Landmark:** team, Accreditations & Certifications, careers
- **Resources:** blog, FAQ, testimonials, travel safety
- Utility: Get a Quote (primary CTA), Plan a Trip, Login (secure portal), brochure download

## URL taxonomy (from live sitemap — 210 pages + 192 posts)
- City hubs: `/usa-trips/<city>/` (washington-d-c, new-york-city-tours, boston, atlanta, orlando-schooltrips, philadelphia-tours, chicago-tours, new-orleans-tours, san-antonio-tours) + standalone city pages (`/savannah-tours/`, `/los-angeles-tours/`, etc.)
- Itineraries: `/usa-trips/<city>/<itinerary>/` and `/international/<country>/<itinerary>/`
- Regions: `/east-coast/`, `/midwest/`, `/southwest/`, `/west-coast/`, `/international/`, `/usa-trips/`
- Themes index `/themes/`; `/destinations/`; `/about-landmark/`; `/accreditations-certifications/`; `/faq/`; `/testimonials/`; `/resources/`; `/travel-safety-support/`; `/careers/`; `/get-a-quote/`; `/plan-a-trip/`; `/contact-us/`
- DEFERRED: ~50 `/​<school-name>/` registration LPs · `/shop /cart /checkout /my-account` (WooCommerce) · `/the-landmark-portal/` + secureportal subdomain

## Build waves
0. **Scaffold** ✅ — cloned ILE stack, `npm install` OK (400 pkgs), logos staged, this doc.
1. **Rebrand foundation** ✅ — `--ile-*`→`--lm-*` tokens across 37 files; `:root` reset to rust/amber + Poppins/Montserrat/Lora; green+gold rgba literals swept to rust+amber; `package.json` name, `layout.tsx` metadata, `lib/seo/schemas.ts` SITE (NAP, CST, 4 socials), TravelAgency schema. (Class prefixes `.ileh-/.ilef-/.ile-` kept for now — cosmetic; rename later. ILE image purge folded into Wave 3.)
2. **Header + Footer** ✅ — `Compass.tsx` replaces clover (PageHero/CtaBand/SectionDivider); Header = white-recolor logo + 5-col Destinations mega + 3-col Themes mega + About/Resources dropdowns + Login (secureportal) + Get a Quote CTA; Footer = rust CTA band, contact, 4 socials (FB/IG/LinkedIn/TikTok), Destinations/Explore/Company columns, CST. Verified: header visually, footer via computed styles, 0 console errors. Partner-family logos deferred to homepage.
3. **Homepage** — match live sections: hero ("Educational Travel, Built for You" + quote CTA), top tours, popular destinations, themed travel, traveler highlights gallery, partner logos, testimonials, blog teaser, footer.
4. **Destination hubs + region pages** — East/Midwest/Southwest/West/International + per-city hubs.
5. **Itineraries** — per-trip pages under city/country, with TouristTrip JSON-LD.
6. **Themes + Resources + About + FAQ + forms** — Get a Quote / Plan a Trip / Contact wired to HubSpot (need Landmark portal + form GUIDs).
7. **Headless WP blog** — `lib/wp/*`, `/blog`, `/blog/[slug]`, sitemap integration.
8. **SEO + redirects + cutover** — full WP_REDIRECTS map, sitemap.ts, robots.ts, metadata pass, CUTOVER-RUNBOOK.
9. **DEFERRED waves** — school LPs, WooCommerce, portal.

## Verification
- `npm run dev` (or preview tools) → check homepage + a sample page render, console clean.
- Build sanity: `npm run build` before any cutover discussion.
- Compare each rebuilt page against the live URL for content/visual parity (1:1 mirror standard).
