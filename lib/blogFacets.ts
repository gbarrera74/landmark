import type { PostCard } from '@/lib/blog'

// Derived blog facets — destination + trip-type tags inferred from each post's
// title (with the old WP category as a second signal). This powers the /blog/
// filter WITHOUT anyone hand-categorizing 200 posts. A post can match several
// tags (e.g. "Boston Field Trip" -> Boston + Field Trips); posts that match
// nothing simply appear under "All".

type Facet = { slug: string; name: string; re: RegExp }

const DESTINATIONS: Facet[] = [
  { slug: 'washington-dc', name: 'Washington, D.C.', re: /washington|\bd\.?c\.?\b|national mall|smithsonian|capitol|arlington|tidal basin|white house|\bmlk\b|lincoln memorial|jefferson memorial|monument|ford.?s theatre/i },
  { slug: 'quebec-city', name: 'Quebec City', re: /quebec/i },
  { slug: 'new-york-city', name: 'New York City', re: /new york|nyc|broadway|manhattan|statue of liberty|ellis island|times square|central park/i },
  { slug: 'boston', name: 'Boston', re: /boston|salem|newport|freedom trail|fenway/i },
  { slug: 'orlando', name: 'Orlando', re: /orlando|disney|kennedy space|\bflorida\b/i },
  { slug: 'atlanta', name: 'Atlanta', re: /atlanta|coca.?cola/i },
  { slug: 'chicago', name: 'Chicago', re: /chicago|pilsen|willis tower|navy pier/i },
  { slug: 'philadelphia', name: 'Philadelphia', re: /philadelphia|philly|independence hall|liberty bell/i },
  { slug: 'charleston', name: 'Charleston', re: /charleston/i },
  { slug: 'williamsburg', name: 'Williamsburg', re: /williamsburg|jamestown|yorktown/i },
  { slug: 'los-angeles', name: 'Los Angeles', re: /los angeles|hollywood|california/i },
  { slug: 'montreal', name: 'Montreal', re: /montreal/i },
  { slug: 'savannah', name: 'Savannah', re: /savannah/i },
  { slug: 'seattle', name: 'Seattle', re: /seattle/i },
  { slug: 'new-mexico', name: 'New Mexico', re: /new mexico|santa fe|albuquerque/i },
  { slug: 'toronto', name: 'Toronto', re: /toronto/i },
  { slug: 'yellowstone', name: 'Yellowstone', re: /yellowstone/i },
  { slug: 'italy', name: 'Italy', re: /italy|rome|florence|venice|pompeii/i },
  { slug: 'costa-rica', name: 'Costa Rica', re: /costa rica/i },
  { slug: 'new-orleans', name: 'New Orleans', re: /new orleans|nola/i },
  { slug: 'san-antonio', name: 'San Antonio', re: /san antonio|alamo/i },
  { slug: 'mackinac-island', name: 'Mackinac Island', re: /mackinac/i },
]

const TRIP_TYPES: Facet[] = [
  { slug: 'history-culture', name: 'History & Culture', re: /history|historical|colonial|revolution|civil rights|heritage|museum|memorial|cemetery|monument|built/i },
  { slug: 'school-trips', name: 'School Trips', re: /school trip/i },
  { slug: 'planning-tips', name: 'Planning & Tips', re: /\btips?\b|guide|how to|\bplan|checklist|fundrais|budget|\bcost|prepare|reasons|trends|benefits|popular|best /i },
  { slug: 'field-trips', name: 'Field Trips', re: /field trip/i },
  { slug: 'hbcu-tours', name: 'HBCU Tours', re: /hbcu/i },
  { slug: 'stem-steam', name: 'STEM & STEAM', re: /\bstem\b|\bsteam\b|science|space|ballpark/i },
  { slug: 'civics-government', name: 'Civics & Government', re: /civics|government|congress|capitol|inauguration|president|white house/i },
  { slug: 'performing-arts', name: 'Performing Arts', re: /broadway|performing arts|theat|music|mural/i },
]

// Old WP category -> our facet slug (a second signal beyond the title).
const CAT_TO_DEST: Record<string, string> = {
  'Washington, D.C.': 'washington-dc', 'Quebec City': 'quebec-city', 'Boston, MA': 'boston',
  'New York City, New York': 'new-york-city', Montreal: 'montreal', Toronto: 'toronto', Florida: 'orlando',
}
const CAT_TO_TYPE: Record<string, string> = {
  'Travel Tips': 'planning-tips', HBCU: 'hbcu-tours', 'STEM Attractions': 'stem-steam',
}

export type FacetTag = { slug: string; name: string }
export type TaggedCard = PostCard & { dest: string[]; type: string[] }

export function facetsFor(post: PostCard): { dest: string[]; type: string[] } {
  const t = post.title
  const cats = post.categories || []
  const dest = new Set<string>()
  const type = new Set<string>()
  for (const f of DESTINATIONS) if (f.re.test(t)) dest.add(f.slug)
  for (const f of TRIP_TYPES) if (f.re.test(t)) type.add(f.slug)
  for (const c of cats) { if (CAT_TO_DEST[c]) dest.add(CAT_TO_DEST[c]); if (CAT_TO_TYPE[c]) type.add(CAT_TO_TYPE[c]) }
  return { dest: [...dest], type: [...type] }
}

export function tagCards(posts: PostCard[]): TaggedCard[] {
  return posts.map((p) => ({ ...p, ...facetsFor(p) }))
}

// Facet buttons to show — only those with real depth (>= min posts), by count.
export function facetLists(cards: TaggedCard[], min = 2): { destinations: (FacetTag & { count: number })[]; types: (FacetTag & { count: number })[] } {
  const dCount = new Map<string, number>()
  const tCount = new Map<string, number>()
  for (const c of cards) {
    for (const d of c.dest) dCount.set(d, (dCount.get(d) || 0) + 1)
    for (const t of c.type) tCount.set(t, (tCount.get(t) || 0) + 1)
  }
  const nameOf = (list: Facet[], slug: string) => list.find((f) => f.slug === slug)!.name
  const build = (counts: Map<string, number>, list: Facet[]) =>
    [...counts.entries()].filter(([, n]) => n >= min)
      .map(([slug, count]) => ({ slug, name: nameOf(list, slug), count }))
      .sort((a, b) => b.count - a.count)
  return { destinations: build(dCount, DESTINATIONS), types: build(tCount, TRIP_TYPES) }
}
