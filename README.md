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

**A0 — Learn Like a Baby** needs no reading at all: guessable words (바나나, 피자, 커피…) are
introduced alone, then in a phrase, then repeated, with yes/no and either/or questions over
the pictures — the comprehensible-input style of Delicious Korean's A0 series. **Hangul** is
its own track (letter lessons, a syllable **Block Builder**, real words to sound out) that you
can start any time.

Words keep coming back: every episode opens with a review, lessons mix in earlier words
(spiral review), and each round of episodes ends with a review — a recap reel plus a mixed
quiz, or a dedicated review episode in A0. A **🗣️ Repeat after me** mode in the player pauses
after each line so you can shadow it.

### Practice modes

A0–A2 lessons are **listening and selecting only**: hear a word and tap its picture, hear a
story line and pick the scene, answer the story's own questions about a picture by ear, judge
true/false by ear, and pick the meaning of a sentence you hear. Answers never show
romanization, every Korean option has its own 🔊, and feedback moves on by itself.

Reading games stay in the Practice tab (and the Hangul track), and work with any unit, level,
round or word pack:

- 🎧 Listening: Listening Mix, Listen & Pick, Scene Match, Story Questions, True or False, Hear a Sentence.
- 🕹️ Arcade: Flashcards (3 directions), Memory Match, Bubble Pop, 60-second Speed Round.
- 📖 Reading & words: Mixed Quiz, Picture Match, Meaning, Say It, Fill the Gap, Sentence Builder.
- 🔤 Hangul: Letter Sounds, Block Builder.
- Daily Review uses spaced repetition (Leitner boxes) across everything you've studied.

XP, a daily goal, and a day streak are saved in your browser.

## Course map

| Level | Units |
|---|---|
| **A0** Learn Like a Baby | 3 rounds: food & likes, things & places, me & numbers — each ending in a review episode |
| **한 Hangul** | vowels, consonants, y-vowels, strong consonants, combined vowels, batchim |
| **A1** Survival Korean | introductions, this/that, family, prices, counting, café, places, present tense, time, location, likes & negation, weekends |
| **A2** Everyday Korean | past, future, wants, abilities, weather, reasons, shopping, health, subway, suggestions, comparisons, honorifics |

Plus topic word packs of the vocabulary beginner classes actually prioritise (survival phrases, core verbs, question words, numbers, time, ordering, getting around, …).

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
