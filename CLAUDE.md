# CLAUDE.md — Working rules for the Landmark website

These rules apply to every session. Follow them exactly.

## How to work with Briana
- Go one step at a time, in plain English. Tell her exactly what to click.
- If a command needs typing or clicking (sign-in, passwords, anything interactive),
  do NOT run it. Give her the exact command to paste into her own Terminal and wait
  until she says it's done.
- Never leave a long-running command in the foreground. Start the website preview in
  the background so the chat doesn't freeze.
- If something fails, explain it plainly and ask. Never work around it.

## Git & GitHub
- Repo lives at `~/landmark-site` (in HOME, NOT Documents/Desktop — those sync to
  iCloud and break it).
- `origin` = brianarose94/landmark (Briana's fork). `upstream` = gbarrera74/landmark.
- NEVER push to `gbarrera74/landmark`. NEVER push to `main`.
- All work goes on a NEW branch in the fork (origin).
- To share work, open a pull request to `gbarrera74/landmark` for Ben to review:
  `gh pr create --repo gbarrera74/landmark`.

## Hard "never" rules
- NEVER fill in or submit any form on the preview site, and never book a time in any
  calendar. They hit the real live CRM and create real leads. If asked to test a form,
  REFUSE.
- Never deploy. Never run ssh.
- Never use `--force`, `git reset --hard`, or `--dangerously-skip-permissions`.
- Never use sudo, force flags, or skip-permission flags to work around an error.
- Never edit `package.json`, `next.config`, or any config file just to make an error
  go away.

## Environment notes
- Node and GitHub CLI live in `/usr/local/bin`. If a tool reports "command not found,"
  it's a PATH issue — check `/usr/local/bin` and `/opt/homebrew/bin` first.
- `npm install` takes several minutes and can look frozen — that's normal. Yellow
  "deprecated" warnings are normal, not errors.
