// A0 — Hangul & First Words: the alphabet in six small steps, then the first set
// phrases and classroom survival Korean.
KG.level({
    id: 'A0',
    title: 'Hangul & First Words',
    ko: '한글',
    blurb: 'Learn to read Korean letters, build syllable blocks, and say your first polite phrases.'
});

KG.unit({
    id: 'a0-01',
    level: 'A0',
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
    id: 'a0-02',
    level: 'A0',
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
    id: 'a0-03',
    level: 'A0',
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
    id: 'a0-04',
    level: 'A0',
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
    id: 'a0-05',
    level: 'A0',
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
    id: 'a0-06',
    level: 'A0',
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

KG.unit({
    id: 'a0-07',
    level: 'A0',
    title: 'First Phrases',
    ko: '인사',
    icon: '🙇',
    goal: 'Greet people, say thank you and sorry, and say goodbye the Korean way.',
    vocab: [
        { ko: '안녕하세요', en: 'hello', emoji: '👋', pos: 'expr' },
        { ko: '감사합니다', en: 'thank you', emoji: '🙏', pos: 'expr' },
        { ko: '고마워요', en: 'thanks (softer)', emoji: '😊', pos: 'expr' },
        { ko: '죄송합니다', en: "I'm sorry (formal)", emoji: '🙇', pos: 'expr' },
        { ko: '미안해요', en: "I'm sorry", emoji: '😅', pos: 'expr' },
        { ko: '괜찮아요', en: "it's okay / I'm fine", emoji: '👌', pos: 'expr' },
        { ko: '네', en: 'yes', emoji: '⭕', pos: 'expr' },
        { ko: '아니요', en: 'no', emoji: '❌', pos: 'expr' },
        { ko: '여기요', en: 'here you are / excuse me (calling staff)', emoji: '🫴', pos: 'expr' },
        { ko: '맛있어요', en: "it's delicious", emoji: '😋', pos: 'expr' },
        { ko: '잘 먹겠습니다', en: 'thanks for the food (before eating)', emoji: '🥢', pos: 'expr' },
        { ko: '안녕히 가세요', en: 'goodbye (to someone leaving)', emoji: '🚶', pos: 'expr' },
        { ko: '안녕히 계세요', en: 'goodbye (to someone staying)', emoji: '🏠', pos: 'expr' },
        { ko: '서울', en: 'Seoul', emoji: '🏙️', pos: 'noun' }
    ],
    story: {
        title: "Alex's First Day in Seoul",
        extras: 'The shop clerk is a young Korean woman with a short bob and a red-and-white striped apron. The man on the street is a middle-aged Korean man in a grey suit with glasses. The restaurant owner is a friendly Korean man in his fifties with a navy head scarf, dark apron and a white towel on his shoulder.',
        scenes: [
            {
                img: 'a0-07-1',
                art: 'Alex stands on a lively Seoul street with a big rolling suitcase, looking up at tall buildings and N Seoul Tower on a hill, eyes wide with excitement. Morning sunshine.',
                lines: [
                    { sp: 'narrator', ko: '여기는 서울이에요.', en: 'This is Seoul.' },
                    { sp: 'alex', ko: '와! 서울!', en: 'Wow! Seoul!' }
                ]
            },
            {
                img: 'a0-07-2',
                art: 'Inside a bright little corner shop. A young female shop clerk in a striped apron bows politely behind the counter as Alex steps in, bowing back a little awkwardly.',
                lines: [
                    { sp: 'staffF', as: '직원', ko: '안녕하세요!', en: 'Hello!' },
                    { sp: 'alex', ko: '안녕하세요!', en: 'Hello!' }
                ]
            },
            {
                img: 'a0-07-3',
                art: 'At the shop counter the clerk hands Alex a bottle of water with both hands. Alex takes it with both hands, smiling gratefully.',
                lines: [
                    { sp: 'staffF', as: '직원', ko: '네, 여기요.', en: 'Here you are.' },
                    { sp: 'alex', ko: '감사합니다!', en: 'Thank you!' }
                ],
                check: { q: '알렉스는 뭐라고 해요?', en: 'What does Alex say?', options: ['감사합니다', '죄송합니다', '안녕히 계세요'], answer: 0 }
            },
            {
                img: 'a0-07-4',
                art: 'On a crowded sidewalk, Alex accidentally bumps into a middle-aged man in a grey suit, and the man\'s papers flutter. Alex bows deeply, looking embarrassed; the man smiles kindly and waves a hand as if to say no problem.',
                lines: [
                    { sp: 'alex', ko: '아! 죄송합니다!', en: "Oh! I'm so sorry!" },
                    { sp: 'staffM', as: '아저씨', ko: '괜찮아요.', en: "It's okay." }
                ],
                check: { q: '아저씨는 괜찮아요?', en: 'Is the man okay?', options: ['네', '아니요'], answer: 0 }
            },
            {
                img: 'a0-07-5',
                art: 'A cosy small Korean restaurant. Alex sits at a wooden table with a steaming bowl of colourful bibimbap, holding a spoon and chopsticks, eyes closed and hands together happily before eating. A friendly older male restaurant owner with a towel on his shoulder watches proudly.',
                lines: [
                    { sp: 'alex', ko: '잘 먹겠습니다!', en: 'Thank you for the food!' },
                    { sp: 'staffM', as: '사장님', ko: '맛있어요?', en: 'Is it good?' },
                    { sp: 'alex', ko: '네! 맛있어요!', en: "Yes! It's delicious!" }
                ],
                check: { q: '비빔밥 맛있어요?', en: 'Is the bibimbap tasty?', options: ['네', '아니요'], answer: 0 }
            },
            {
                img: 'a0-07-6',
                art: 'At the restaurant door: Alex is stepping outside with his suitcase, turning back to wave. The restaurant owner stands inside the doorway, waving goodbye.',
                lines: [
                    { sp: 'alex', ko: '안녕히 계세요!', en: 'Goodbye! (you stay)' },
                    { sp: 'staffM', as: '사장님', ko: '안녕히 가세요!', en: 'Goodbye! (you go)' }
                ],
                check: { q: '누가 가요?', en: 'Who is leaving?', options: ['알렉스', '사장님'], answer: 0 }
            }
        ]
    },
    patterns: [
        {
            form: '안녕하세요',
            meaning: 'hello (polite, any time of day)',
            note: 'Use it with anyone you do not know well. Add a small bow. With close friends you can just say 안녕.',
            examples: [
                { ko: '안녕하세요!', en: 'Hello!' },
                { ko: '선생님, 안녕하세요!', en: 'Hello, teacher!' }
            ]
        },
        {
            form: '안녕히 가세요 / 안녕히 계세요',
            meaning: 'goodbye — "go in peace" / "stay in peace"',
            note: 'Say 가세요 to the person who is leaving and 계세요 to the person who is staying. If you are the one leaving, say 안녕히 계세요.',
            examples: [
                { ko: '안녕히 가세요!', en: 'Bye! (to someone leaving)' },
                { ko: '안녕히 계세요!', en: 'Bye! (to someone staying)' }
            ]
        },
        {
            form: '감사합니다 · 고마워요 / 죄송합니다 · 미안해요',
            meaning: 'thank you / sorry, formal and softer',
            note: 'The 합니다 forms are more formal — safe with strangers and in shops. 고마워요 and 미안해요 are warm and polite for people you know.',
            examples: [
                { ko: '정말 감사합니다.', en: 'Thank you so much.' },
                { ko: '늦어서 미안해요.', en: "Sorry I'm late." }
            ]
        }
    ],
    sentences: [
        { ko: '안녕하세요.', en: 'Hello.' },
        { ko: '정말 감사합니다.', en: 'Thank you so much.', blank: '감사합니다', alts: ['죄송합니다', '괜찮아요', '안녕하세요'] },
        { ko: '안녕히 가세요.', en: 'Goodbye (to someone leaving).', blank: '가세요', alts: ['계세요', '하세요', '먹어요'] },
        { ko: '안녕히 계세요.', en: 'Goodbye (to someone staying).', blank: '계세요', alts: ['가세요', '하세요', '맛있어요'] },
        { ko: '네, 괜찮아요.', en: "Yes, I'm fine.", blank: '괜찮아요', alts: ['감사합니다', '미안해요', '여기요'] },
        { ko: '아니요, 괜찮아요.', en: "No, it's okay.", blank: '아니요', alts: ['네', '여기요', '와'] },
        { ko: '정말 죄송합니다.', en: "I'm really sorry.", blank: '죄송합니다', alts: ['감사합니다', '맛있어요', '안녕하세요'] },
        { ko: '네, 여기요.', en: 'Yes, here you are.', blank: '여기요', alts: ['아니요', '서울', '계세요'] },
        { ko: '네, 맛있어요!', en: "Yes, it's delicious!", blank: '맛있어요', alts: ['미안해요', '가세요', '죄송합니다'] },
        { ko: '잘 먹겠습니다.', en: 'Thank you for the food.' },
        { ko: '여기는 서울이에요.', en: 'This is Seoul.', blank: '서울', alts: ['네', '여기요', '와'] }
    ]
});

KG.unit({
    id: 'a0-08',
    level: 'A0',
    title: 'Classroom Survival',
    ko: '교실 한국어',
    icon: '🙋',
    goal: 'Ask for help in class: slower, again, I don\'t know, I have a question.',
    vocab: [
        { ko: '선생님', en: 'teacher', emoji: '👩‍🏫', pos: 'noun' },
        { ko: '한국어', en: 'the Korean language', emoji: '🗣️', pos: 'noun' },
        { ko: '영어', en: 'the English language', emoji: '🔤', pos: 'noun' },
        { ko: '사과', en: 'apple', emoji: '🍎', pos: 'noun' },
        { ko: '바나나', en: 'banana', emoji: '🍌', pos: 'noun' },
        { ko: '이거', en: 'this (thing)', emoji: '👇', pos: 'other' },
        { ko: '다시', en: 'again', emoji: '🔁', pos: 'other' },
        { ko: '천천히', en: 'slowly', emoji: '🐢', pos: 'other' },
        { ko: '질문', en: 'question', emoji: '✋', pos: 'noun' },
        { ko: '알아요', en: 'I know', emoji: '💡', pos: 'expr' },
        { ko: '몰라요', en: "I don't know", emoji: '🤷', pos: 'expr' },
        { ko: '말해 주세요', en: 'please say (it)', emoji: '🗨️', pos: 'expr' },
        { ko: '맞아요', en: "that's right", emoji: '✅', pos: 'expr' },
        { ko: '잘했어요', en: 'well done', emoji: '👏', pos: 'expr' }
    ],
    story: {
        title: 'The First Korean Class',
        extras: 'The teacher is a cheerful Korean woman in her late twenties with a neat high black ponytail, a soft pink blouse, beige trousers and a blue lanyard. She is young, not the grandmother. The classroom has a few other adult students of different backgrounds, none of them from the reference sheet.',
        scenes: [
            {
                img: 'a0-08-1',
                art: 'A bright, friendly language classroom with a few desks. A young female Korean teacher in a soft pink blouse with a neat ponytail waves at the front, next to a blank whiteboard. Alex sits at a front desk with a notebook, waving back eagerly.',
                lines: [
                    { sp: 'staffF', as: '선생님', ko: '안녕하세요, 여러분!', en: 'Hello, everyone!' },
                    { sp: 'alex', ko: '안녕하세요, 선생님!', en: 'Hello, teacher!' }
                ]
            },
            {
                img: 'a0-08-2',
                art: 'The teacher holds up a big shiny red apple toward the class, smiling. Alex leans forward, looking at the apple.',
                lines: [
                    { sp: 'staffF', as: '선생님', ko: '이거는 사과예요. 사과!', en: 'This is an apple. Apple!' },
                    { sp: 'alex', ko: '사과!', en: 'Apple!' }
                ],
                check: { q: '이거 뭐예요? 🍎', en: 'What is this?', options: ['사과', '바나나', '선생님'], answer: 0 }
            },
            {
                img: 'a0-08-3',
                art: 'The teacher talks very fast, with comic speed lines around her mouth. Alex looks dizzy and confused, swirls above his head, then raises one hand slowly, a small turtle doodle-like visual metaphor floating beside him to show "slowly".',
                lines: [
                    { sp: 'alex', ko: '선생님, 천천히 말해 주세요.', en: 'Teacher, please speak slowly.' },
                    { sp: 'staffF', as: '선생님', ko: '네. 사… 과….', en: 'Okay. Ap… ple….' }
                ]
            },
            {
                img: 'a0-08-4',
                art: 'Alex cups a hand behind his ear, leaning in as if he could not hear. The teacher smiles patiently and points at the apple again.',
                lines: [
                    { sp: 'alex', ko: '다시 말해 주세요.', en: 'Please say it again.' },
                    { sp: 'staffF', as: '선생님', ko: '사과예요.', en: "It's an apple." }
                ]
            },
            {
                img: 'a0-08-5',
                art: 'The teacher holds up a yellow banana with a questioning look. Alex shrugs with both palms up, puzzled. Then a little light bulb appears above his head.',
                lines: [
                    { sp: 'staffF', as: '선생님', ko: '이거 뭐예요?', en: 'What is this?' },
                    { sp: 'alex', ko: '음… 몰라요.', en: "Um… I don't know." },
                    { sp: 'staffF', as: '선생님', ko: '바나나예요!', en: "It's a banana!" }
                ],
                check: { q: '알렉스는 바나나를 알아요?', en: 'Did Alex know the word for banana?', options: ['네, 알아요', '아니요, 몰라요'], answer: 1 }
            },
            {
                img: 'a0-08-6',
                art: 'Alex raises his hand high with confidence. The teacher points to him with an open hand, smiling.',
                lines: [
                    { sp: 'alex', ko: '질문 있어요!', en: 'I have a question!' },
                    { sp: 'staffF', as: '선생님', ko: '네, 알렉스 씨.', en: 'Yes, Alex.' }
                ]
            },
            {
                img: 'a0-08-7',
                art: 'End of class. The teacher gives Alex a thumbs-up and puts a sparkly gold star sticker on his notebook. Alex beams proudly and bows.',
                lines: [
                    { sp: 'staffF', as: '선생님', ko: '잘했어요!', en: 'Well done!' },
                    { sp: 'alex', ko: '감사합니다, 선생님!', en: 'Thank you, teacher!' }
                ],
                check: { q: '선생님은 뭐라고 해요?', en: 'What does the teacher say?', options: ['잘했어요', '몰라요', '천천히'], answer: 0 }
            }
        ]
    },
    patterns: [
        {
            form: '___ 말해 주세요',
            meaning: 'please say ___',
            note: '주세요 means "please give". After an action it means "please do it for me": 천천히 말해 주세요 = please speak slowly.',
            examples: [
                { ko: '천천히 말해 주세요.', en: 'Please speak slowly.' },
                { ko: '다시 말해 주세요.', en: 'Please say it again.' },
                { ko: '영어로 말해 주세요.', en: 'Please say it in English.' }
            ]
        },
        {
            form: '이거 뭐예요?',
            meaning: 'what is this?',
            note: 'Point at anything and ask. The answer comes back as "N예요" — 사과예요 (it\'s an apple).',
            examples: [
                { ko: '이거 뭐예요?', en: 'What is this?' },
                { ko: '바나나예요.', en: "It's a banana." }
            ]
        },
        {
            form: '알아요 / 몰라요',
            meaning: 'I know / I don\'t know',
            note: 'Two of the most useful words in class. 몰라요 is perfectly polite.',
            examples: [
                { ko: '네, 알아요!', en: 'Yes, I know!' },
                { ko: '아니요, 몰라요.', en: "No, I don't know." }
            ]
        }
    ],
    sentences: [
        { ko: '천천히 말해 주세요.', en: 'Please speak slowly.', blank: '천천히', alts: ['다시', '이거', '질문'] },
        { ko: '다시 말해 주세요.', en: 'Please say it again.', blank: '다시', alts: ['천천히', '맞아요', '몰라요'] },
        { ko: '영어로 말해 주세요.', en: 'Please say it in English.', blank: '영어', alts: ['사과', '질문', '이거'] },
        { ko: '이거 뭐예요?', en: 'What is this?', blank: '뭐', alts: ['네', '다시', '질문'] },
        { ko: '이거는 사과예요.', en: 'This is an apple.', blank: '사과', alts: ['천천히', '다시', '알아요'] },
        { ko: '바나나예요.', en: "It's a banana." },
        { ko: '질문 있어요!', en: 'I have a question!', blank: '질문', alts: ['다시', '천천히', '바나나'] },
        { ko: '아니요, 몰라요.', en: "No, I don't know.", blank: '몰라요', alts: ['알아요', '맞아요', '잘했어요'] },
        { ko: '네, 알아요.', en: 'Yes, I know.', blank: '알아요', alts: ['몰라요', '말해', '천천히'] },
        { ko: '네, 맞아요!', en: "Yes, that's right!", blank: '맞아요', alts: ['몰라요', '다시', '질문'] },
        { ko: '잘했어요!', en: 'Well done!' },
        { ko: '한국어 선생님이에요.', en: "She's a Korean teacher.", blank: '한국어', alts: ['사과', '다시', '천천히'] }
    ]
});
