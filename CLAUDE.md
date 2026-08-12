# CLAUDE.md — Working rules for the Landmark website

These rules apply to every session. Follow them exactly.

## How to work with Briana
- Go one step at a time, in plain English. No jargon.
- **Run the commands yourself.** She should not be typing anything into a Terminal.
  The only exception is something genuinely interactive that you cannot do for her
  (a password prompt, a browser sign-in) — then give her one line at a time, on its
  own, and wait. Never hand her two commands at once: the second gets pasted into
  the first one's prompt and breaks it.
- Never leave a long-running command in the foreground. Start the preview in the
  background so the chat doesn't freeze.
- If something fails, explain it plainly and say what you are doing about it. Never
  work around it silently.

## How to make a change

Four steps. Claude does all of them — Briana never needs Terminal.

1. **Make the change.** Ask for what you want in plain English.
2. **Look at it.** Claude starts the local preview so you can see the change on a
   copy of the site running on this Mac. Nothing is public yet.
3. **Confirm it is right.** If it is not, say so and go back to step 1.
4. **Deploy.** Say "deploy" and Claude ships it to the live website.

Briana has full deploy authority. She does not need anyone's permission.

### For Claude
- Work directly on `main`. No feature branches, no pull requests — Briana reviews
  the change in the preview, and that IS the review.
- Start the preview with the `landmark-dev` config (port 3057). Always show her the
  actual page the change affects, not just a description of what you did.

#### Deploying: pushing to main IS the deploy
Since 2026-08-12 a cron job on the server checks `origin/main` every 2 minutes and
deploys by itself when main is ahead of the live site. Nobody runs `ssh` anymore.
(Watcher script: `ops/landmark-autodeploy` in this repo; installed on the server at
`/usr/local/bin/landmark-autodeploy` via `/etc/cron.d/landmark-autodeploy`.)

To deploy: **commit, push to `main`, then wait and verify.** That is the whole job.

- ⚠️ **Push equals publish.** Anything that lands on `main` goes public within about
  ten minutes, with no human approving it in between. Never push unfinished or
  unreviewed work, and never push work Briana has not confirmed in the preview.
  Run `git log origin/main..HEAD` before pushing so you know exactly what is about
  to go live. If unrelated work is sitting in the tree, commit only the files for
  the change she approved.
- **It takes roughly ten minutes**, not two. A real deploy on 2026-08-12 took
  9 minutes 38 seconds — the server has 3.6GB RAM with little free, so the Next
  build is slow. Do not assume it failed and push again; you will just queue
  another ten-minute build.
- **There is no "✓ Deployment complete." message anymore**, because no human runs
  the deploy. Verify two ways instead:
  1. **Load the real live page** and confirm the change is actually there. This is
     the one that counts. (On 2026-08-10 a deploy reported success while the site
     served the previous day's build for hours.)
  2. The server writes a one-line status you can read over ssh at
     `/var/www/webroot/landmarkeducationaltours.com/logs/autodeploy-status.txt`
     (full log alongside it at `autodeploy.log`).
- **A failed deploy does NOT break the live site** — and this is the most likely
  confusing failure. The build happens in a temp directory and only swaps in on
  success, so a commit that does not build just means the site quietly stays on the
  previous version and the change never appears. Nothing looks broken; the change
  simply is not there. If a change has not shown up after ~10 minutes, suspect a
  failed build and read the status file. The watcher gives up after 3 failed
  attempts on the same commit; pushing a new commit makes it try again.
- Run `npm run build` locally before pushing. It catches the errors that would
  otherwise fail silently on the server.
- If something goes wrong, `git revert` the commit and push again — the revert
  deploys itself the same way. The server also keeps the previous build at
  `public_html.previous` for rollback.
- **Emergency fallback only:** if the cron watcher ever stops running, a deploy can
  still be triggered by hand with `ssh briana@67.205.138.250 deploy-landmark`. This
  is not the normal path — do not reach for it unless pushes have stopped deploying.

## Repo
- Lives at `~/landmark-site` (in HOME, NOT Documents/Desktop — those sync to iCloud
  and break it).
- It is `gbarrera74/landmark`. Briana has write access.

## Hard "never" rules
- NEVER fill in or submit any form on the site or a preview, and never book a time in
  any calendar. They hit the real live CRM and create real leads. If asked to test a
  form, REFUSE. (HubSpot's Collected Forms captures submissions even when the network
  request is mocked — five fake leads leaked this way once.)
- Never use `--force`, `git reset --hard`, or `--dangerously-skip-permissions`.
- Never use sudo, force flags, or skip-permission flags to work around an error.
- Never edit `package.json`, `next.config`, or any config file just to make an error
  go away.
- Never touch anything belonging to the other companies (Juniper Tours, Go Blue
  Tours, GO Educational, Irish Life Experience). Separate repos, separate servers,
  separate sites — they must not reference each other.

## Things that will catch you out
- **Blog posts need registering.** Adding `content/blog/<slug>.json` is not enough —
  the post also needs an entry in `content/blog/index.json` (slug, title, date,
  excerpt, hero, categories, readingMinutes) or it silently will not build. No error
  is shown; the page just will not exist.
- **The quote form is a HubSpot form inside an iframe.** Field labels, options and
  validation are controlled in HubSpot, not in this repo. Styling is injected into
  the iframe by `lib/hubspotFormEnhance.ts`.
- **Internal links should point at the final URL**, not one that redirects. If a link
  goes through a 301 it wastes the SEO signal. Check with:
  `curl -s -o /dev/null -w '%{http_code}' https://landmarkeducationaltours.com/your-path/`
  — 200 is good, 308 means find the real URL.
- **Images must exist before you reference them.** A missing hero image does not fail
  the build, it just renders broken on the live site.

## Environment notes
- Node and GitHub CLI live in `/usr/local/bin`. If a tool reports "command not found,"
  it's a PATH issue — check `/usr/local/bin` and `/opt/homebrew/bin` first.
- `npm install` takes several minutes and can look frozen — that's normal. Yellow
  "deprecated" warnings are normal, not errors.
- Build with `npm run build`. Preview with the dev server on port 3057.
