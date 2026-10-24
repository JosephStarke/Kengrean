// Hangul — its own track: read and write the Korean alphabet in six small steps.
// Learners can start A0 (listening, like a baby) first and pick this up alongside it.
KG.level({
    id: 'H',
    badge: '한',
    title: 'Hangul',
    ko: '한글',
    rounds: false,
    blurb: 'Learn to read Korean letters and build syllable blocks. Start any time — it is easiest after the first A0 episodes, because you already know the words by sound.'
});

KG.unit({
    id: 'h-01',
    level: 'H',
    type: 'hangul',
    title: 'Simple Vowels',
    ko: '기본 모음',
    icon: 'ㅏ',
    goal: 'Read and say the six basic vowels.',
    intro: 'Korean letters stack into syllable blocks. A block always starts with a consonant, so a vowel on its own is written with the silent circle ㅇ in front: ㅏ is written 아. Vowels built on a tall line sit to the right of ㅇ (아, 이); flat ones sit under it (오, 우).',
    letters: [
        { ch: 'ㅏ', rom: 'a', name: '아', say: '아', tip: 'A tall line with a branch pointing right. "ah" as in father.' },
        { ch: 'ㅓ', rom: 'eo', name: '어', say: '어', tip: 'The branch points left. An open "uh" as in up, lips relaxed.' },
        { ch: 'ㅗ', rom: 'o', name: '오', say: '오', tip: 'A flat line with a branch pointing up. "oh" with rounded lips.' },
        { ch: 'ㅜ', rom: 'u', name: '우', say: '우', tip: 'The branch points down. "oo" as in moon.' },
        { ch: 'ㅡ', rom: 'eu', name: '으', say: '으', tip: 'Just a flat line — like a flat smile. Say "oo" but stretch your lips wide.' },
        { ch: 'ㅣ', rom: 'i', name: '이', say: '이', tip: 'Just a tall line, like a person standing. "ee" as in see.' }
    ],
    blocks: ['아', '어', '오', '우', '으', '이'],
    vocab: [
        { ko: '아이', en: 'child', emoji: '🧒', pos: 'noun' },
        { ko: '오이', en: 'cucumber', emoji: '🥒', pos: 'noun' },
        { ko: '이', en: 'tooth', emoji: '🦷', pos: 'noun' },
        { ko: '오', en: 'five', emoji: '🖐️', pos: 'num' },
        { ko: '아', en: 'ah! (surprise)', emoji: '😮', pos: 'expr' }
    ]
});

KG.unit({
    id: 'h-02',
    level: 'H',
    type: 'hangul',
    title: 'Basic Consonants',
    ko: '기본 자음',
    icon: 'ㄱ',
    goal: 'Read ten everyday consonants and combine them with vowels.',
    intro: 'Consonants go first in the block: ㄱ + ㅏ = 가, ㄴ + ㅗ = 노. Many consonant shapes show what your mouth does — ㄱ is the back of your tongue lifting, ㄴ is the tip touching behind your teeth, ㅁ is closed lips.',
    letters: [
        { ch: 'ㄱ', rom: 'g / k', name: '기역', say: '가', tip: 'Shaped like the back of your tongue touching the roof of your mouth. Between g and k.' },
        { ch: 'ㄴ', rom: 'n', name: '니은', say: '나', tip: 'The tongue tip touching behind your top teeth. Plain n.' },
        { ch: 'ㄷ', rom: 'd / t', name: '디귿', say: '다', tip: 'ㄴ with a lid on top. Between d and t.' },
        { ch: 'ㄹ', rom: 'r / l', name: '리을', say: '라', tip: 'A zigzag. A light tap between r and l — like the tt in "butter".' },
        { ch: 'ㅁ', rom: 'm', name: '미음', say: '마', tip: 'A closed box, like closed lips. Plain m.' },
        { ch: 'ㅂ', rom: 'b / p', name: '비읍', say: '바', tip: 'Looks like a little bucket. Between b and p.' },
        { ch: 'ㅅ', rom: 's', name: '시옷', say: '사', tip: 'A tooth shape — air hissing past your teeth. s (sounds like "sh" before ㅣ).' },
        { ch: 'ㅇ', rom: 'silent / ng', name: '이응', say: '아', tip: 'A circle, like an open throat. Silent at the start of a block, "ng" at the bottom.' },
        { ch: 'ㅈ', rom: 'j', name: '지읒', say: '자', tip: 'ㅅ with a hat. A soft j.' },
        { ch: 'ㅎ', rom: 'h', name: '히읗', say: '하', tip: 'A head wearing a hat. A breathy h.' }
    ],
    blocks: ['가', '너', '도', '루', '미', '바', '소', '주', '하', '기', '나', '머', '부', '서', '지', '호', '드', '라'],
    vocab: [
        { ko: '나무', en: 'tree', emoji: '🌳', pos: 'noun' },
        { ko: '바다', en: 'sea', emoji: '🌊', pos: 'noun' },
        { ko: '모자', en: 'hat', emoji: '🧢', pos: 'noun' },
        { ko: '사자', en: 'lion', emoji: '🦁', pos: 'noun' },
        { ko: '고기', en: 'meat', emoji: '🥩', pos: 'noun' },
        { ko: '하마', en: 'hippo', emoji: '🦛', pos: 'noun' },
        { ko: '다리', en: 'leg', emoji: '🦵', pos: 'noun' },
        { ko: '나비', en: 'butterfly', emoji: '🦋', pos: 'noun', note: 'Also the name of Minji\'s cat!' },
        { ko: '거미', en: 'spider', emoji: '🕷️', pos: 'noun' },
        { ko: '오리', en: 'duck', emoji: '🦆', pos: 'noun' },
        { ko: '구두', en: 'dress shoes', emoji: '👞', pos: 'noun' },
        { ko: '지도', en: 'map', emoji: '🗺️', pos: 'noun' },
        { ko: '가수', en: 'singer', emoji: '🎤', pos: 'noun' },
        { ko: '비', en: 'rain', emoji: '🌧️', pos: 'noun' }
    ]
});

KG.unit({
    id: 'h-03',
    level: 'H',
    type: 'hangul',
    title: 'Y-Vowels & ㅐ ㅔ',
    ko: '이중 모음 1',
    icon: 'ㅑ',
    goal: 'Add a "y" sound with one extra stroke, and read ㅐ and ㅔ.',
    intro: 'Double the little branch and you add a "y": ㅏ → ㅑ (a → ya), ㅗ → ㅛ (o → yo). ㅐ and ㅔ sound almost the same in modern Seoul Korean — like the "e" in "bed".',
    letters: [
        { ch: 'ㅑ', rom: 'ya', name: '야', say: '야', tip: 'ㅏ with two branches. "ya" as in yacht.' },
        { ch: 'ㅕ', rom: 'yeo', name: '여', say: '여', tip: 'ㅓ with two branches. "yuh" as in young.' },
        { ch: 'ㅛ', rom: 'yo', name: '요', say: '요', tip: 'ㅗ with two branches. "yo" as in yoga.' },
        { ch: 'ㅠ', rom: 'yu', name: '유', say: '유', tip: 'ㅜ with two branches. "you".' },
        { ch: 'ㅐ', rom: 'ae', name: '애', say: '애', tip: 'ㅏ + ㅣ squeezed together. "e" as in bed.' },
        { ch: 'ㅔ', rom: 'e', name: '에', say: '에', tip: 'ㅓ + ㅣ. Sounds the same as ㅐ for most speakers.' },
        { ch: 'ㅒ', rom: 'yae', name: '얘', say: '얘', tip: 'ㅐ with an extra branch: "ye". Rare.' },
        { ch: 'ㅖ', rom: 'ye', name: '예', say: '예', tip: 'ㅔ with an extra branch: "ye" as in yes.' }
    ],
    blocks: ['야', '여', '요', '유', '개', '네', '대', '레', '매', '배', '세', '재', '혜', '묘', '규', '녀'],
    vocab: [
        { ko: '우유', en: 'milk', emoji: '🥛', pos: 'noun' },
        { ko: '여우', en: 'fox', emoji: '🦊', pos: 'noun' },
        { ko: '야구', en: 'baseball', emoji: '⚾', pos: 'noun' },
        { ko: '요리', en: 'cooking', emoji: '🍳', pos: 'noun' },
        { ko: '여자', en: 'woman', emoji: '👩', pos: 'noun' },
        { ko: '개', en: 'dog', emoji: '🐕', pos: 'noun' },
        { ko: '새', en: 'bird', emoji: '🐦', pos: 'noun' },
        { ko: '배', en: 'pear', emoji: '🍐', pos: 'noun', note: 'Also means boat and stomach.' },
        { ko: '게', en: 'crab', emoji: '🦀', pos: 'noun' },
        { ko: '노래', en: 'song', emoji: '🎵', pos: 'noun' },
        { ko: '시계', en: 'clock / watch', emoji: '⏰', pos: 'noun' },
        { ko: '가게', en: 'shop', emoji: '🏪', pos: 'noun' },
        { ko: '세계', en: 'world', emoji: '🌍', pos: 'noun' },
        { ko: '예', en: 'yes (formal)', emoji: '🙆', pos: 'expr' }
    ]
});

KG.unit({
    id: 'h-04',
    level: 'H',
    type: 'hangul',
    title: 'Strong Consonants',
    ko: '거센소리 · 된소리',
    icon: 'ㅋ',
    goal: 'Hear and read the puffy (aspirated) and tight (tense) consonants.',
    intro: 'Add a stroke to a plain consonant and it gets a strong puff of air: ㄱ → ㅋ, ㄷ → ㅌ, ㅂ → ㅍ, ㅈ → ㅊ. Hold your hand in front of your mouth — you should feel the air. Double a consonant and it becomes tight and sharp with no air at all: ㄲ ㄸ ㅃ ㅆ ㅉ.',
    letters: [
        { ch: 'ㅋ', rom: 'k', name: '키읔', say: '카', tip: 'ㄱ plus a stroke = k with a puff of air.' },
        { ch: 'ㅌ', rom: 't', name: '티읕', say: '타', tip: 'ㄷ plus a stroke = t with a puff of air.' },
        { ch: 'ㅍ', rom: 'p', name: '피읖', say: '파', tip: 'A strong p with a puff of air.' },
        { ch: 'ㅊ', rom: 'ch', name: '치읓', say: '차', tip: 'ㅈ plus a stroke = ch with a puff of air.' },
        { ch: 'ㄲ', rom: 'kk', name: '쌍기역', say: '까', tip: 'Double ㄱ: a tight, sharp k with no air — like "sk" in sky.' },
        { ch: 'ㄸ', rom: 'tt', name: '쌍디귿', say: '따', tip: 'Double ㄷ: a tight t — like "st" in stop.' },
        { ch: 'ㅃ', rom: 'pp', name: '쌍비읍', say: '빠', tip: 'Double ㅂ: a tight p — like "sp" in spy.' },
        { ch: 'ㅆ', rom: 'ss', name: '쌍시옷', say: '싸', tip: 'Double ㅅ: a hard, hissing s.' },
        { ch: 'ㅉ', rom: 'jj', name: '쌍지읒', say: '짜', tip: 'Double ㅈ: a tight "tch" sound.' }
    ],
    blocks: ['카', '커', '토', '투', '파', '피', '차', '치', '까', '꼬', '따', '떠', '빠', '뽀', '싸', '짜'],
    vocab: [
        { ko: '코', en: 'nose', emoji: '👃', pos: 'noun' },
        { ko: '커피', en: 'coffee', emoji: '☕', pos: 'noun' },
        { ko: '토끼', en: 'rabbit', emoji: '🐰', pos: 'noun' },
        { ko: '포도', en: 'grapes', emoji: '🍇', pos: 'noun' },
        { ko: '기차', en: 'train', emoji: '🚆', pos: 'noun' },
        { ko: '치마', en: 'skirt', emoji: '👗', pos: 'noun' },
        { ko: '피자', en: 'pizza', emoji: '🍕', pos: 'noun' },
        { ko: '토마토', en: 'tomato', emoji: '🍅', pos: 'noun' },
        { ko: '카메라', en: 'camera', emoji: '📷', pos: 'noun' },
        { ko: '아빠', en: 'dad', emoji: '👨', pos: 'noun' },
        { ko: '오빠', en: 'older brother (said by a girl)', emoji: '👦', pos: 'noun' },
        { ko: '꼬리', en: 'tail', emoji: '🐈', pos: 'noun' },
        { ko: '아저씨', en: 'mister (middle-aged man)', emoji: '🧔', pos: 'noun' },
        { ko: '찌개', en: 'stew', emoji: '🍲', pos: 'noun' }
    ]
});

KG.unit({
    id: 'h-05',
    level: 'H',
    type: 'hangul',
    title: 'Combined Vowels',
    ko: '이중 모음 2',
    icon: 'ㅘ',
    goal: 'Read the glide vowels made by joining two vowels.',
    intro: 'Some vowels are two vowels glued together and said quickly as one: ㅗ + ㅏ = ㅘ (o + a → wa), ㅜ + ㅓ = ㅝ (u + eo → wo). The first part becomes a quick "w".',
    letters: [
        { ch: 'ㅘ', rom: 'wa', name: '와', say: '와', tip: 'ㅗ + ㅏ. "wa" as in wasabi.' },
        { ch: 'ㅙ', rom: 'wae', name: '왜', say: '왜', tip: 'ㅗ + ㅐ. "we" as in wet.' },
        { ch: 'ㅚ', rom: 'oe', name: '외', say: '외', tip: 'ㅗ + ㅣ. Today it sounds just like ㅙ: "we".' },
        { ch: 'ㅝ', rom: 'wo', name: '워', say: '워', tip: 'ㅜ + ㅓ. "wuh" as in won.' },
        { ch: 'ㅞ', rom: 'we', name: '웨', say: '웨', tip: 'ㅜ + ㅔ. Also "we".' },
        { ch: 'ㅟ', rom: 'wi', name: '위', say: '위', tip: 'ㅜ + ㅣ. "wee".' },
        { ch: 'ㅢ', rom: 'ui', name: '의', say: '의', tip: 'ㅡ + ㅣ. Glide from a wide "eu" to "ee".' }
    ],
    blocks: ['와', '워', '왜', '외', '위', '의', '과', '뭐', '돼', '쥐', '귀', '회', '화', '줘', '웨', '뒤'],
    vocab: [
        { ko: '사과', en: 'apple', emoji: '🍎', pos: 'noun' },
        { ko: '과자', en: 'snack / cookie', emoji: '🍪', pos: 'noun' },
        { ko: '돼지', en: 'pig', emoji: '🐷', pos: 'noun' },
        { ko: '회사', en: 'company', emoji: '🏢', pos: 'noun' },
        { ko: '쥐', en: 'mouse', emoji: '🐭', pos: 'noun' },
        { ko: '귀', en: 'ear', emoji: '👂', pos: 'noun' },
        { ko: '가위', en: 'scissors', emoji: '✂️', pos: 'noun' },
        { ko: '바위', en: 'rock', emoji: '🪨', pos: 'noun' },
        { ko: '의자', en: 'chair', emoji: '🪑', pos: 'noun' },
        { ko: '의사', en: 'doctor', emoji: '🧑‍⚕️', pos: 'noun' },
        { ko: '뭐', en: 'what', emoji: '❓', pos: 'other' },
        { ko: '왜', en: 'why', emoji: '🤔', pos: 'other' },
        { ko: '위', en: 'above / on top', emoji: '⬆️', pos: 'noun' },
        { ko: '웨이터', en: 'waiter', emoji: '🤵', pos: 'noun' }
    ]
});

KG.unit({
    id: 'h-06',
    level: 'H',
    type: 'hangul',
    title: 'Final Consonants',
    ko: '받침',
    icon: '받',
    goal: 'Read blocks with a consonant at the bottom (batchim).',
    intro: 'A consonant can sit at the bottom of a block — this is called 받침 (batchim). There are many spellings but only seven final sounds: k, n, t, l, m, p, ng. Final sounds are short and unreleased. When the next block starts with ㅇ, the final consonant slides over: 음악 is said [으막].',
    letters: [
        { ch: '악', rom: 'ak', name: 'ㄱ 받침', say: '악', tip: 'ㄱ, ㅋ, ㄲ at the bottom all end in a quick, swallowed k.' },
        { ch: '안', rom: 'an', name: 'ㄴ 받침', say: '안', tip: 'ㄴ at the bottom: n.' },
        { ch: '옷', rom: 'ot', name: 'ㄷ 받침', say: '옷', tip: 'ㄷ, ㅌ, ㅅ, ㅆ, ㅈ, ㅊ, ㅎ at the bottom all end in a cut-off t.' },
        { ch: '알', rom: 'al', name: 'ㄹ 받침', say: '알', tip: 'ㄹ at the bottom: a clear l, tongue stays up.' },
        { ch: '암', rom: 'am', name: 'ㅁ 받침', say: '암', tip: 'ㅁ at the bottom: m, lips closed.' },
        { ch: '압', rom: 'ap', name: 'ㅂ 받침', say: '압', tip: 'ㅂ and ㅍ at the bottom: a p with lips shut and no puff.' },
        { ch: '앙', rom: 'ang', name: 'ㅇ 받침', say: '앙', tip: 'ㅇ at the bottom is not silent: "ng" as in song.' }
    ],
    blocks: ['밥', '물', '빵', '산', '책', '곰', '집', '눈', '문', '달', '별', '공', '강', '옷', '잠', '박', '숲', '맛'],
    vocab: [
        { ko: '밥', en: 'rice / meal', emoji: '🍚', pos: 'noun' },
        { ko: '물', en: 'water', emoji: '💧', pos: 'noun' },
        { ko: '빵', en: 'bread', emoji: '🍞', pos: 'noun' },
        { ko: '산', en: 'mountain', emoji: '⛰️', pos: 'noun' },
        { ko: '책', en: 'book', emoji: '📚', pos: 'noun' },
        { ko: '꽃', en: 'flower', emoji: '🌸', pos: 'noun' },
        { ko: '곰', en: 'bear', emoji: '🐻', pos: 'noun' },
        { ko: '집', en: 'house', emoji: '🏠', pos: 'noun' },
        { ko: '눈', en: 'snow / eye', emoji: '❄️', pos: 'noun' },
        { ko: '문', en: 'door', emoji: '🚪', pos: 'noun' },
        { ko: '달', en: 'moon', emoji: '🌙', pos: 'noun' },
        { ko: '별', en: 'star', emoji: '⭐', pos: 'noun' },
        { ko: '공', en: 'ball', emoji: '⚽', pos: 'noun' },
        { ko: '김치', en: 'kimchi', emoji: '🥬', pos: 'noun' },
        { ko: '옷', en: 'clothes', emoji: '👕', pos: 'noun' },
        { ko: '강', en: 'river', emoji: '🏞️', pos: 'noun' }
    ]
});
