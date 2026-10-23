# Technical Context

- Vanilla HTML/CSS/JS (ES2020), no build. Fonts: Jua (Korean/headings) + Nunito (UI) from Google Fonts.
- Content: `content/*.js`, format in `content/SCHEMA.md`, checked by `tools/validate_content.mjs`.
- Audio: `pip install edge-tts`; `node tools/extract_tts.mjs --prune && python tools/gen_audio.py`.
  Voices: ko-KR-SunHiNeural, ko-KR-InJoonNeural, ko-KR-HyunsuMultilingualNeural (+ pitch/rate per character).
- Images: `node tools/gen_images.mjs sheet|scenes` via the OpenAI Images API
  (gpt-image-2.5-flare / gpt-image-2.5-sunburst), 1152×768 WebP, key from `OPENAI_API_KEY`.
- Local server for testing: `python -m http.server 8765` (also `.claude/launch.json`).
- Hosting: Netlify project `kengrean` at https://kengrean.netlify.app, auto-deployed from `main` (deploy previews on pull requests). No GitHub Pages, no build step.
