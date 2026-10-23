# Kengrean

Learn Korean from zero (A0) to A2 through illustrated stories you can understand,
natural neural voices, and lots of different ways to practice.

## How it works

Each unit follows a comprehensible-input loop:

1. **Watch** — a short illustrated story plays like a video: the picture changes scene by
   scene, each character speaks with their own voice, and Korean subtitles appear (English
   is blurred until you tap it). Quick comprehension checks pop up along the way.
2. **Words** — the episode's vocabulary with pictures and audio, added to your review deck.
3. **Patterns** — the grammar behind what you just heard, with examples.
4. **Practice** — a mixed quiz that earns up to three stars.

A0 teaches Hangul with letter lessons, a syllable **Block Builder**, and real words to sound out.

### Practice modes

Every mode works with any unit, level, or topic word pack:

- Quiz modes: Listen & Pick, Picture Match, Meaning, Say It, True or False, Fill the Gap,
  Sentence Builder, Listening, Letter Sounds, Block Builder, Mixed Quiz.
- Arcade: Flashcards (3 directions), Memory Match, Bubble Pop, 60-second Speed Round.
- Daily Review uses spaced repetition (Leitner boxes) across everything you've studied.

XP, a daily goal, and a day streak are saved in your browser.

## Course map

| Level | Units |
|---|---|
| **A0** Hangul & First Words | vowels, consonants, y-vowels, strong consonants, combined vowels, batchim, first phrases, classroom survival |
| **A1** Survival Korean | introductions, this/that, family, prices, counting, café, places, present tense, time, location, likes & negation, weekends |
| **A2** Everyday Korean | past, future, wants, abilities, weather, reasons, shopping, health, subway, suggestions, comparisons, honorifics |

Plus 20 topic word packs (animals, food, clothes, feelings, …).

## Run it

Live at **https://kengrean.netlify.app**. Netlify (project `kengrean`) deploys the repo root
automatically on every push or merge to `main`, and builds a deploy preview for each pull
request. There is no build step, no `netlify.toml`, and no GitHub Pages site.

Locally it's a static site — open `index.html` or serve the folder:

```bash
python -m http.server 8765
```

## Editing content

Content lives in `content/*.js` (see [content/SCHEMA.md](content/SCHEMA.md)). After edits:

```bash
node tools/validate_content.mjs
node tools/extract_tts.mjs --prune
python tools/gen_audio.py
node tools/gen_images.mjs scenes
```

- **Voices**: Microsoft Edge neural TTS through [`edge-tts`](https://pypi.org/project/edge-tts/)
  (free, no key): SunHi, InJoon and Hyunsu, with pitch/rate variations per character.
- **Illustrations**: OpenAI GPT Image (`gpt-image-2.5-sunburst` edits with the cast reference sheet
  in `img/ref/cast-sheet.png` for consistent characters). Needs `OPENAI_API_KEY`; every call is
  logged in `img/generation-log.jsonl`.
