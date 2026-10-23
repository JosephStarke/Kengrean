# Notes for AI agents

These rules apply to every agent working in this repo (Claude Code, Cursor, Codex and others).

## Ship by default

- When a change is finished and verified, **commit it, push it, and get it onto `main`** without
  asking the owner first. If you worked on a branch or opened a PR, merge it in the same session.
- Don't end with "should I commit / push / merge?" questions. Just do it and report what shipped.
- Still ask before destructive git operations: force-push, rewriting history, or deleting
  branches that have unmerged work.

## Deployment

- Live at **https://kengrean.netlify.app** (Netlify project `kengrean`), deployed automatically on
  every push or merge to `main`. Pull requests get Netlify deploy previews.
- Merging to `main` is a production release: test before shipping, then check the live site.
- There is no GitHub Pages site, no `netlify.toml`, and no build step.

## Project guide

- How the app and content are organised: [README.md](README.md), [content/SCHEMA.md](content/SCHEMA.md)
  and [.cursor/rules.mdc](.cursor/rules.mdc).
- Run locally with `python -m http.server 8765`. Validate content with `node tools/validate_content.mjs`.
