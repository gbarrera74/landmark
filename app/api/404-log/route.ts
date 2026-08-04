import { NextRequest, NextResponse } from 'next/server'
import { appendFile } from 'fs/promises'
import { join } from 'path'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

interface NotFoundPayload {
  path: string
  referrer?: string
}

const LOG_PATH = join(process.cwd(), '.404-log.jsonl')
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
    await appendFile(LOG_PATH, JSON.stringify(record) + '\n')
  } catch {
    // ignore
  }

  return new NextResponse(null, { status: 204 })
}
