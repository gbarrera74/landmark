import { NextRequest, NextResponse } from 'next/server'
import { appendFile, mkdir } from 'fs/promises'
import { join, dirname } from 'path'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

interface NotFoundPayload {
  path: string
  referrer?: string
}

// Write OUTSIDE the app directory. This site's deploy swaps the whole release
// dir (public_html -> public_html.previous, then rm -rf on the next run), so a
// log written to process.cwd() is orphaned by every deploy and destroyed by the
// one after it. The sibling logs/ directory survives the swap untouched.
// (Juniper and Go Blue don't need this — their deploys only swap .next/.)
const LOG_PATH = process.env.LOG_PATH_404 || join(process.cwd(), '..', 'logs', '.404-log.jsonl')
const MAX_BODY_BYTES = 2048

function isStr(v: unknown, max = 1000): v is string {
  return typeof v === 'string' && v.length > 0 && v.length <= max
}

export async function POST(req: NextRequest) {
  const cl = req.headers.get('content-length')
  if (cl && Number(cl) > MAX_BODY_BYTES) {
    return new NextResponse(null, { status: 413 })
  }

  let body: NotFoundPayload
  try {
    body = (await req.json()) as NotFoundPayload
  } catch {
    return new NextResponse(null, { status: 400 })
  }

  if (!isStr(body.path, 1000)) {
    return new NextResponse(null, { status: 400 })
  }

  const ua = req.headers.get('user-agent') ?? ''
  // Skip well-known crawlers — they generate noisy 404 traffic and Search Console
  // already aggregates the canonical version. We only want signal on real users.
  const isBot = /bot|crawler|spider|slurp|bingpreview|facebookexternalhit|pingdom|uptimerobot/i.test(ua)
  if (isBot) {
    return new NextResponse(null, { status: 204 })
  }

  const record = {
    ts: new Date().toISOString(),
    path: body.path,
    referrer: isStr(body.referrer, 1000) ? body.referrer : undefined,
    ip: req.headers.get('cf-connecting-ip') ?? req.headers.get('x-forwarded-for') ?? undefined,
    ua: ua || undefined,
  }

  console.warn('[404]', JSON.stringify(record))
  try {
    // mkdir is recursive + idempotent, so a fresh release (or staging, where
    // the directory won't exist yet) self-heals on the first 404 instead of
    // silently dropping records.
    await mkdir(dirname(LOG_PATH), { recursive: true })
    await appendFile(LOG_PATH, JSON.stringify(record) + '\n')
  } catch {
    // ignore
  }

  return new NextResponse(null, { status: 204 })
}
