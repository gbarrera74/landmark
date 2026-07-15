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
3. **Homepage** ✅ — hero (bold Poppins title + amber payoff accent, left-stacked over gradient for contrast, "Educational Travel, Built for You"), top tours, popular destinations, international showcase, themed travel, traveler highlights gallery, partner logos, ONE reviews carousel (de-duped), blog teaser, About, brochure band/popup.
4. **Destination hubs + region pages** — 🔶 IN PROGRESS (all destination HUBS now built).
   - **ALL city/country hubs built** (PageHero + verbatim live intro + trip-card grid + "Customization made simple" steps + BrochureBand + breadcrumb JSON-LD; countries add "International Travel, Handled"). Template is deterministic (scratchpad `gen.mjs` from `hubdata.json` + workflow-extracted `manifest.json`).
     - Manually built earlier: **Washington, D.C.** ✅, **New York City** ✅, **Boston** ✅, **Atlanta** ✅ (Civil-Rights/HBCU), **Italy** ✅ (note: Italy has 6 *invented* enrichment trips — the ONE hub that is not a strict live mirror; reconcile later if needed).
     - Batch-built 2026-07-14 (workflow `landmark-hubs-batch`, 33 agents: 19 verbatim-intro extractors + 14 image sourcers, all self-QC'd; then deterministic generation): **US cities (12)** Orlando, Chicago, Philadelphia, New Orleans, San Antonio, Williamsburg, Charleston, Savannah, Mackinac Island, New Mexico, Los Angeles, Seattle. **Countries (7)** Norway (1 trip), Costa Rica (2 trips), England, France, Ireland, Japan, South Korea (last 5 are intro-only: their live trip cards are "Coming Soon" placeholders → NO fabricated trip pages; page = intro + International-Handled + custom-trip CTA).
     - All 19 verified: `tsc --noEmit` clean, every route 200 + 0 error overlays, correct trip counts/durations/hrefs (parsed from live), **zero em-dashes** in generated copy, images visually QC'd (2 reswapped: chicago-3 → Chicago Theatre, los-angeles-1 → Griffith Observatory).
     - Real trips only, mapped to nested rebuild hrefs `/usa-trips/<city>/<live-slug>/` and `/international/<country>/<live-slug>/` (itinerary pages are Wave 5 — links resolve then).
   - **Canada** ✅ (built 2026-07-14): hub `/international/canada/` = intro + 2 sub-destination `.lm-dest` cards (Quebec City, Montreal) + International-Handled + steps. Sub-hubs **Quebec City** `/international/canada/quebec-city/` (6 itineraries: 3/4/5-day regular + 3/4/5-day winter) and **Montreal** `/international/canada/montreal/` (3 itineraries: 2-day, 3-day, Student Trip). 7 images sourced (canada-hero = Chateau Frontenac aerial, quebec-hero night castle, quebec-1 street, quebec-winter, montreal-hero dusk skyline, montreal-1/2). Generator: scratchpad `gencanada.mjs`.
   - **Region index pages** ✅ (built 2026-07-14, `genregions.mjs`): `/east-coast/` (10), `/midwest/` (2), `/southwest/` (2), `/west-coast/` (2), `/international/` (9), `/usa-trips/` (16, grouped by 4 sub-regions), `/destinations/` (master: 25, grouped US + International). Cards = `.lm-dest`/`.lm-intl-grid` reusing each hub's hero image (per dest-card-hero rule); groupings from the live nav mega-menu. All 200, tsc clean.
   - Image sourcing method (approved): free Unsplash CDN (`images.unsplash.com/photo-*`, not `plus.unsplash.com` premium) → `curl ?w=&q=80&fm=jpg` into `public/images/landmark/`. Ben may swap for his own photos later.
   - URL taxonomy: rebuild mirrors the locked scheme (`/usa-trips/<city>/`, `/international/<country>/`). Live site has *partially* migrated to continents (`/europe/`, `/asia/`, `/central-south-america/`) — that realignment stays a separate coordinated pass handled in the Wave 8 redirect map. Do NOT switch the rebuild mid-build.
5. **Itineraries** — ✅ (built 2026-07-14). **64 per-trip pages** generated (`gen-itin.mjs`) from verbatim live day-by-day content, mirroring the DC-8th-grade template (ItineraryTabs: Sample Itinerary / Description / Trip Inclusions + Trip Snapshot sidebar + Tip card + related-packages grid + breadcrumb & TouristTrip JSON-LD). Content extracted by workflow `landmark-itineraries-extract` (64 agents; 1 Norway retry via a solo agent). Itineraries reuse each trip's hub card image (no new image sourcing). Verified: `tsc` clean, all 64 routes 200, 0 error overlays, **0 em-dashes**, 0 HTML entities. 9 trips whose live "Sample Itinerary" says *Itinerary Coming Soon* (Charleston ×2, Savannah ×2, Mackinac ×2, Williamsburg ×2, Disney Educational Tour) correctly render a graceful "day-by-day sample on the way" card + Description/Inclusions tabs instead of an empty timeline.
   - **Italy (6 aspirational programs):** Ben's call (2026-07-14) = keep them and develop as we go. Built as **coming-soon placeholder itineraries** (classical-rome-ancient-history-tour, renaissance-florence-art-program, rome-florence-venice-grand-tour, pompeii-naples-archaeology-trip, italian-language-culture-immersion, northern-italy-lakes-program): hero image + hub blurb as subtitle/description + the "day-by-day sample on the way" card + default inclusions. Cards now resolve 200 (were 404). Fill in real day-by-day content when the team provides it. **Total itineraries = 70.**
6. **Themes + Resources + About + FAQ + forms** — 🔶 IN PROGRESS.
   - **Forms** ✅ (built 2026-07-14): `/get-a-quote/`, `/plan-a-trip/`, `/contact-us/` (+ layouts). Wired by **embedding the real live HubSpot forms** (`components/HubSpotForm.tsx` via hbspt.forms.create) rather than a native re-implementation — HubSpot owns the field definitions + validation, so there is zero field-mismatch/lead-loss risk and hutk attribution is automatic. Real GUIDs pulled from the live pages (portal **9241531**, na1): get-a-quote form **92cdbac9-6777-40bf-b36a-29c092b7bef5**, contact form **aa49df7b-4d72-4723-99af-2f022b7b5f4d**. Plan-a-Trip embeds the HubSpot **Meetings** scheduler as a direct iframe (`components/HubSpotMeetings.tsx`, slug `marc462/round-robin-intro-sales-meeting` — **CONFIRM with Ben**: live page also referenced `michaelaruffino/landmark`). Brand CSS for `.hs-form`/`.lm-meetings` in globals.css. NOTE: the get-a-quote form renders inside HubSpot's own `iframe.hs-form-iframe` (page CSS can't restyle its inputs — clean but HubSpot-default field styling); contact form rendered inline/boxed. The BUILD-PLAN's earlier form GUID (2bb4a315…) was stale — superseded by the live GUIDs above. Verified: tsc clean, all 3 pages 200, forms + meetings hydrate in a real browser. QC was read-only (no test submissions, per the no-form-submit rule) — a single marked+deleted end-to-end test needs Ben's OK before launch. **Possible future enhancement:** convert to native custom forms (Juniper pattern) once field mapping is confirmed with Ben's HubSpot access.
   - **Content pages** ✅ (built 2026-07-14, workflow `landmark-wave6-content` extracted 12 pages verbatim + `gen-wave6.mjs` generated 13): `/themes/` (index, 12 theme cards reusing each target trip's image), `/faq/` (20 Q&As via FaqAccordion + FAQPage JSON-LD), `/testimonials/` (9 **verbatim** reviews in a grid), `/about-landmark/`, `/accreditations-certifications/` (credentials/member-numbers verbatim), `/careers/`, `/landmark-internship/`, `/resources/`, `/travel-safety-support/` (content template: intro + sections), plus trip pages `/yellowstone-national-park-school-trip/`, `/yellowstone-national-park-field-trip/` (itinerary template), `/private-school-class-trips/` (multi-program: DC/NYC/Orlando sample itineraries grouped by destination), `/private-school-field-trip/`. Images: Yellowstone (Grand Prismatic + Lower Falls) + student-museum shot sourced. All 200, tsc clean, **0 em-dashes**. **Wave 6 COMPLETE.**
7. **Blog** — ✅ (built 2026-07-14). **DECOUPLED from WordPress** (Ben's directive: move off the runtime `cms.*` pull that hurts pagespeed/crawl-health/formatting on GBT+Juniper; this is the reference implementation for all three sites).
   - **Architecture:** content source ≠ content delivery. `scripts/blog-import.mjs` pulls all posts from WP REST ONCE, extracts the real article body out of the Elementor markup, sanitizes to clean semantic HTML (allow-list tags, strips all inline styles/classes/data-attrs, internal links made relative), **self-hosts every image** into `public/blog/`, and snapshots to `content/blog/*.json` + `index.json`. The Next site reads ONLY those local JSON files (`lib/blog.ts`, fs) — **zero WP call at build or runtime.** To publish: re-run the import, commit, redeploy. (Dev tool dep: `node-html-parser`, devDependency only.)
   - **Imported:** 202 posts, 520 self-hosted images. Routes: `/blog/` + `/blog/page/[n]/` (paginated 12/page, 17 pages, `generateStaticParams`) + `/blog/[slug]/` (static per post, `generateStaticParams` + `generateMetadata` + BlogPosting JSON-LD; body re-sanitized with isomorphic-dompurify at render as defense-in-depth). Blog CSS (`.lm-article`, `.lm-blog-card`, article hero, pagination) in globals.css. Sitemap (`app/sitemap.ts`) now emits `/blog/` + all 202 posts + pagination (223 URLs total). Linked in header + footer already.
   - Verified: tsc clean, index/post/pagination all 200, article prose renders clean + consistent, images self-hosted, screenshots confirm. **Run `npm run build` before cutover** to prove full SSG (202+ static pages).
   - **Notes/handoff:** blog content served **as-is** (existing authored posts — punctuation incl. any em-dashes left untouched; a content-cleanup pass is separate). Internal links in posts point at OLD paths (e.g. `/planatrip/`) — Wave 8 redirect map handles those. To port to GBT/Juniper: copy `scripts/blog-import.mjs` + `lib/blog.ts` + blog routes/CSS, set `WP_BASE`, run the import, delete the old `lib/wp/*` runtime-fetch layer.
8. **SEO + redirects + cutover** — ✅ (built 2026-07-14).
   - **Redirect map** `lib/redirects.ts` (wired in `next.config.ts` `redirects()`): **314 redirects**, all `permanent: true`, sources trailing-slash-stripped. Covers 202 blog posts (old top-level `/slug/` → `/blog/slug/`), continent URLs → `/international/*`, old top-level city trips → `/usa-trips/<city>/...`, Canada quebeccity/montreal variants → sub-hubs, thin international → `/international/`, form/rebrand aliases. **Verified: all 314 sources fire 308, all 243 unique targets resolve 200, no source collides with a real route.** Fixed 2 blog/page slug collisions (williamsburg-school-trip, seattle-school-trip → their itineraries, not /blog/). Mapping logic + rules in scratchpad (`redirects_*.json`).
   - **Deferred, intentionally NOT redirected** (would break active flows): 32 per-school registration LPs + WooCommerce (`/shop /cart /checkout /my-account` → /get-a-quote/) + portal. Listed in CUTOVER-RUNBOOK §2.
   - **Sitemap** `app/sitemap.ts`: 123 marketing routes + all 202 blog posts (342 URLs, live-rendered). **robots.ts** already staging-safe (noindex off-production) + points to sitemap.
   - **CUTOVER-RUNBOOK.md** written (pre-flight, redirects, deferred handling, cutover steps, monitoring, known gaps).
   - **`npm run build` PASSES**: 344 static pages prerendered (202 blog posts as SSG — decoupled blog proven), 314 redirects compiled into routes-manifest, tsc clean.
9. **DEFERRED waves** — school LPs, WooCommerce, portal.

## Client feedback applied (Suggestions.pdf — 2026-07-14)
Boss review of the homepage; changes made (some site-wide = "work backwards"):
- Hero: first slide now a DC/USA photo (hero-dc-mlk) since DC ≈ 40% of business · tagline **"Built for You" → "Customized for You"** (site-wide: hero, CtaBand, Footer, layout/OG metadata) · "student journeys" → "student trips"
- Header/footer email `info@` → **`Hello@landmarkeducationaltours.com`** (via `SITE.email`)
- Homepage International section cut from 3 rows to **1 row of 4** (Italy, Ireland, Norway, Costa Rica) — `.lm-intl-grid` now repeat(4)
- Our Partners: white logo boxes removed via `mix-blend-mode:multiply` (no image edits) · **Travel Insured removed** (Battleface pending logo)
- About Us: California Seller of Travel text removed (CST still in footer + org schema)
- Copy: **em-dashes swept** from all visible marketing copy (kept a colon/comma; verbatim REVIEWS + aria-labels intentionally untouched) · **"tour specialists" → "Travel Consultants"** (hub steps + CTA labels)

**ASSETS:**
- International cards: **Italy ✅ (Colosseum group), Norway ✅ (Bergen Bryggen group), Costa Rica ✅ (waterfall group)** — real Landmark student-group photos, cropped 1104×1200 to card aspect (`intl-*-group.jpg`). **Ireland** ❌ still stock (live-site Irish hills) — the one outstanding gap; needs a group photo.
- Spare options provided (Desktop, unused): Norway hilltop, Costa Rica volcano + zip-line (DGA_7153).
- About Us team photo ✅ — real Landmark team shot scraped from the live About page (`Landmark-Educational-Tours-Team.jpg`, AMNH), cropped to `about-team.jpg`.
- **battleface** logo ✅ — QC'd as the correct travel-insurance company; added to Our Partners (`battleface-logo.png`, blends via mix-blend-mode). Replaces Travel Insured.
- Ireland card: no student photo exists — **deferred (Ben, 2026-07-14)**; intentionally uses the live site's own Ireland hero image (`intl-ireland-live.jpg`). **No outstanding photo assets.**

## Verification
- `npm run dev` (or preview tools) → check homepage + a sample page render, console clean.
- Build sanity: `npm run build` before any cutover discussion.
- Compare each rebuilt page against the live URL for content/visual parity (1:1 mirror standard).
