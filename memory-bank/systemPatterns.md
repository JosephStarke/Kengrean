# System Patterns

## Architecture

- `index.html` loads scripts in order: core → hangul → audio → content → audio manifest → ui → learn → games → app.
- Content files register data on the global `KG` (`KG.level`, `KG.unit`, `KG.wordPack`, `KG.setCast`).
- Hash router in `js/app.js` maps `#/learn`, `#/unit/:id`, `#/story/:id`, `#/letters/:id`,
  `#/words/(unit|pack)/:id`, `#/patterns/:id`, `#/lesson/:id`, `#/practice`, `#/play/:mode/:source`, `#/words`, `#/me`.
- Views are functions returning DOM built with `KG.h`.

## Practice Engine

- Sources (`unit:id`, `level:A1`, `pack:id`, `studied`, `review:due`) resolve to words, sentences, letters and blocks.
- Question builders produce `choice`, `build` or `block` questions; `runSession` renders them,
  requeues misses (max twice), tracks combo/XP and shows stars.
- Arcade games (flashcards, memory, bubbles, speed) are separate view functions.

## Audio

- `tools/extract_tts.mjs` lists every Korean string with a voice → `audio/manifest.js` + jobs;
  `tools/gen_audio.py` renders mp3s with edge-tts. Clip names are sha1 of `voiceKey|text`.
- Playback falls back to any voice for the same text, then to browser speech synthesis.

## Progress

`KG.store` (localStorage `kengrean.v2`): XP, daily XP, streak, per-unit steps/stars,
SRS boxes per word, best arcade scores, settings.
