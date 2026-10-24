# Kengrean content schema

All course content lives in plain JavaScript files under `content/` that call the
registration helpers on the global `KG` object (defined in `js/core.js`). No build step:
`index.html` loads the files with `<script>` tags, and `tools/extract_tts.mjs` reads the
same files to generate audio and image jobs.

Indent with 4 spaces. Use single quotes for strings; use double quotes when the string
contains an apostrophe (e.g. `en: "I'm Minji."`).

## Levels (tracks)

```js
KG.level({ id: 'A1', title: 'Survival Korean', ko: '생존 한국어', blurb: '...', roundTitles: ['People & things', '…'] });
```

Tracks appear in load order: **A0** (Learn Like a Baby — listening only, no reading), **H** (Hangul,
its own track, `badge: '한'`, `rounds: false`), **A1**, **A2**.

### Rounds and review

Units are grouped into rounds (a unit's `round`, or every four units). After each round the
path shows a review checkpoint (recap reel of key scenes + a mixed quiz over the whole round),
unless the round already ends with an episode marked `review: true` — then that episode's
practice covers the whole round. Every normal lesson also mixes in a few words from earlier
episodes of the same level (spiral review), weakest first. Write content so words keep coming
back: recycle earlier vocabulary in later stories, and open episodes with a short review scene.

## Cast (content/cast.js)

Story lines name a speaker id. Each id maps to a neural voice and a fixed look for the
illustrations, so the same people recur across the whole course:

| id | who | voice |
|---|---|---|
| `narrator` | storyteller (no picture) | female, calm |
| `minji` | 민지, Korean university student, 21 | female |
| `alex` | 알렉스, American exchange student learning Korean, 22 — the learner's stand-in | male |
| `junho` | 준호, Minji's older brother, office worker, 27 | male |
| `jian` | 지안, Minji's little brother, 8 | child |
| `halmeoni` | 할머니, Minji's grandmother | older female |
| `nabi` | 나비, Minji's orange tabby cat (never speaks; may appear in art) | — |
| `staffM` | any male extra: shop clerk, waiter, doctor, bus driver… | male |
| `staffF` | any female extra: café barista, teacher, pharmacist… | female |

For extras, add `as` to the line to show their role: `{ sp: 'staffF', as: '선생님', ko: ..., en: ... }`.

## Units

```js
KG.unit({
    id: 'a1-01',                // level-number, zero padded
    level: 'A1',
    title: 'Nice to Meet You',  // English title
    ko: '만나서 반가워요',        // Korean title
    icon: '👋',                 // one emoji
    goal: 'Say hello, give your name and nationality, and ask someone else\'s.',
    vocab: [ ...Word ],          // 10–14 items
    story: { title: 'A New Friend', extras: '...', scenes: [ ...Scene ] },  // 5–7 scenes
    patterns: [ ...Pattern ],    // 1–3 grammar points
    sentences: [ ...Sentence ]   // 10–12 practice sentences
});
```

### Word

```js
{ ko: '학생', en: 'student', emoji: '🧑‍🎓', pos: 'noun' }
```

- `pos`: `noun`, `verb`, `adj`, `expr` (set phrase), `num`, `other` (pronouns, adverbs, question words, particles).
- `emoji`: required for every concrete word; pick the clearest single emoji (or two at most). Abstract words may still get a helpful symbol (❓ for 뭐, ⏰ for 시).
- Verbs/adjectives: give the dictionary form in `ko` (`먹다`) and the polite present in `polite` (`먹어요`). English as `to eat` / `to be tasty`.
- `forms` (optional): other spellings that appear in the story (`['먹었어요', '먹고']`) so the story player can highlight them.
- `note` (optional): one short usage note.

`extras` (optional): a fixed look for every non-cast person in the story (the barista, the
doctor…). Each picture is drawn separately, so without this an extra can change from scene to
scene or be confused with a cast member.

### Scene

```js
{
    img: 'a1-01-1',   // unit id + scene number; becomes img/stories/a1-01-1.webp
    art: 'Sunny university campus with cherry trees. Minji sits on a bench reading. Alex walks up holding a campus map, looking a little lost.',
    lines: [
        { sp: 'narrator', ko: '여기는 대학교예요.', en: 'This is a university.' },
        { sp: 'minji', ko: '안녕하세요!', en: 'Hello!' }
    ],
    check: { q: '민지는 학생이에요?', en: 'Is Minji a student?', options: ['네', '아니요'], answer: 0 }
}
```

- `art`: what the illustration must show so the picture explains the Korean (comprehensible input). Refer to cast by English name (Minji, Alex, Junho, Jian, Grandma, Nabi the cat). Describe setting, action, key objects, expressions. Never ask for text, letters, signs with writing, or speech bubbles. Never write a cast member's name in `art` unless they are in the picture: the image tool treats every cast name it finds (Minji, Alex, Junho, Jian, Grandma, Nabi) as present, even in "X is not Alex".
- `lines`: 1–3 per scene (A0 uses 2–6: introduce a word alone, then in a phrase, then repeat it). Narrator lines describe what is in the picture in simple Korean — they are the core of comprehensible input.
- `check` (optional, on about half the scenes): a comprehension question in simple Korean. `options` are short Korean answers (2–4); `answer` is the index of the correct one.

### Pattern

```js
{
    form: 'N + 예요 / 이에요',
    meaning: 'to be N (polite)',
    note: 'After a vowel use 예요 (민지예요). After a consonant use 이에요 (학생이에요).',
    examples: [
        { ko: '저는 민지예요.', en: "I'm Minji." },
        { ko: '저는 학생이에요.', en: "I'm a student." }
    ]
}
```

### Sentence (practice pool)

```js
{ ko: '저는 학생이에요.', en: "I'm a student.", blank: '이에요', alts: ['예요', '을', '도'] }
```

- 2–6 words (space-separated chunks become the tiles in the sentence builder).
- `blank` (optional but give it on most): an exact substring of `ko` to hide — a particle, ending, or key word that tests this unit's pattern. `alts`: three wrong choices that are plausible but clearly wrong.

## Hangul units (track H)

```js
KG.unit({
    id: 'h-01', level: 'H', type: 'hangul',
    title: 'Simple Vowels', ko: '기본 모음', icon: 'ㅏ',
    goal: '...',
    intro: 'Short friendly explanation shown before the letters.',
    letters: [
        { ch: 'ㅏ', rom: 'a', name: '아', say: '아', tip: 'A tall line with a branch pointing right. Sounds like "ah" in father.' }
    ],
    vocab: [ ...Word ]   // words readable with letters learned so far
});
```

`name` is the letter's Korean name (기역, 니은 … or the vowel itself); `say` is a syllable that demonstrates the sound (가, 나 …).

## Word packs (topic vocabulary outside the path)

```js
KG.wordPack({ id: 'animals', title: 'Animals', ko: '동물', icon: '🐾', level: 'A1', words: [ ...Word ] });
```

## Language rules

- Standard Seoul Korean, polite 해요체 by default (합니다체 only in set phrases like 감사합니다).
- Natural sentences a native speaker would actually say; correct spacing (띄어쓰기) and particles.
- Recycle vocabulary from earlier units; each unit introduces only a little new (i+1).
- Keep stories concrete and visual so the picture carries the meaning.
