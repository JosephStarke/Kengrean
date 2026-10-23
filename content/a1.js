// A1 — Survival Korean: introductions, things, family, numbers, food, places,
// present tense, time, location, negation and weekends.
KG.level({
    id: 'A1',
    title: 'Survival Korean',
    ko: '생존 한국어',
    blurb: 'Introduce yourself, order food, count, tell time and talk about your day in simple polite Korean.'
});

KG.unit({
    id: 'a1-01',
    level: 'A1',
    title: 'Nice to Meet You',
    ko: '만나서 반가워요',
    icon: '👋',
    goal: "Say hello, give your name and nationality, and ask someone else's.",
    vocab: [
        { ko: '저', en: 'I / me (polite)', emoji: '🙋', pos: 'other' },
        { ko: '이름', en: 'name', emoji: '📛', pos: 'noun' },
        { ko: '학생', en: 'student', emoji: '🧑‍🎓', pos: 'noun' },
        { ko: '선생님', en: 'teacher', emoji: '👩‍🏫', pos: 'noun' },
        { ko: '사람', en: 'person', emoji: '🧍', pos: 'noun' },
        { ko: '친구', en: 'friend', emoji: '🧑‍🤝‍🧑', pos: 'noun' },
        { ko: '대학교', en: 'university', emoji: '🏫', pos: 'noun' },
        { ko: '한국', en: 'Korea', emoji: '🇰🇷', pos: 'noun' },
        { ko: '미국', en: 'the USA', emoji: '🇺🇸', pos: 'noun' },
        { ko: '뭐', en: 'what', emoji: '❓', pos: 'other' },
        { ko: '네', en: 'yes', emoji: '⭕', pos: 'expr' },
        { ko: '아니요', en: 'no', emoji: '❌', pos: 'expr' },
        { ko: '만나서 반가워요', en: 'nice to meet you', emoji: '🤝', pos: 'expr', forms: ['반가워요'] }
    ],
    story: {
        title: 'A New Friend',
        scenes: [
            {
                img: 'a1-01-1',
                art: 'A sunny Korean university campus in spring with cherry blossom trees and a red-brick building. Minji sits on a bench reading a textbook, a tote bag beside her.',
                lines: [
                    { sp: 'narrator', ko: '여기는 대학교예요.', en: 'This is a university.' },
                    { sp: 'narrator', ko: '민지는 학생이에요.', en: 'Minji is a student.' }
                ],
                check: { q: '민지는 학생이에요?', en: 'Is Minji a student?', options: ['네', '아니요'], answer: 0 }
            },
            {
                img: 'a1-01-2',
                art: 'Same campus. Alex walks up to Minji with a big smile, waving one hand and holding a folded campus map in the other. Minji looks up from her book and waves back.',
                lines: [
                    { sp: 'alex', ko: '안녕하세요!', en: 'Hello!' },
                    { sp: 'minji', ko: '안녕하세요!', en: 'Hello!' }
                ]
            },
            {
                img: 'a1-01-3',
                art: 'Close-up of Alex pointing at his own chest with his thumb, smiling, while Minji listens with interest.',
                lines: [
                    { sp: 'alex', ko: '저는 알렉스예요. 이름이 뭐예요?', en: "I'm Alex. What's your name?" },
                    { sp: 'minji', ko: '저는 민지예요.', en: "I'm Minji." }
                ],
                check: { q: '남자 이름이 뭐예요?', en: "What is the man's name?", options: ['민지', '알렉스', '준호'], answer: 1 }
            },
            {
                img: 'a1-01-4',
                art: 'Alex and Minji talking on the bench. A small thought bubble above Alex shows the American flag, and one above Minji shows the Korean flag (flags only, no writing).',
                lines: [
                    { sp: 'minji', ko: '알렉스 씨는 미국 사람이에요?', en: 'Alex, are you American?' },
                    { sp: 'alex', ko: '네, 미국 사람이에요. 민지 씨는 한국 사람이에요?', en: "Yes, I'm American. Minji, are you Korean?" },
                    { sp: 'minji', ko: '네, 저는 한국 사람이에요.', en: "Yes, I'm Korean." }
                ],
                check: { q: '알렉스는 한국 사람이에요?', en: 'Is Alex Korean?', options: ['네', '아니요'], answer: 1 }
            },
            {
                img: 'a1-01-5',
                art: 'Alex holds up a student ID card proudly. Minji holds up her own student ID card too. Both laugh.',
                lines: [
                    { sp: 'minji', ko: '알렉스 씨는 학생이에요?', en: 'Alex, are you a student?' },
                    { sp: 'alex', ko: '네, 저도 학생이에요!', en: "Yes, I'm a student too!" }
                ]
            },
            {
                img: 'a1-01-6',
                art: 'Minji and Alex shake hands warmly under the cherry blossoms, petals falling around them.',
                lines: [
                    { sp: 'minji', ko: '만나서 반가워요!', en: 'Nice to meet you!' },
                    { sp: 'alex', ko: '저도 반가워요!', en: 'Nice to meet you too!' },
                    { sp: 'narrator', ko: '민지하고 알렉스는 친구예요.', en: 'Minji and Alex are friends.' }
                ],
                check: { q: '민지하고 알렉스는 친구예요?', en: 'Are Minji and Alex friends?', options: ['네', '아니요'], answer: 0 }
            }
        ]
    },
    patterns: [
        {
            form: 'N + 예요 / 이에요',
            meaning: 'to be N (polite)',
            note: 'After a vowel use 예요 (민지예요, 친구예요). After a consonant (batchim) use 이에요 (학생이에요, 사람이에요). Add ? and raise your voice to ask.',
            examples: [
                { ko: '저는 민지예요.', en: "I'm Minji." },
                { ko: '저는 학생이에요.', en: "I'm a student." },
                { ko: '미국 사람이에요?', en: 'Are you American?' }
            ]
        },
        {
            form: 'N + 은 / 는',
            meaning: 'topic marker — "as for N"',
            note: 'Marks what you are talking about. 는 after a vowel (저는, 민지는), 은 after a consonant (선생님은).',
            examples: [
                { ko: '저는 알렉스예요.', en: "I'm Alex." },
                { ko: '선생님은 한국 사람이에요.', en: 'The teacher is Korean.' }
            ]
        },
        {
            form: 'Name + 씨',
            meaning: 'polite way to call someone',
            note: 'Add 씨 after a name (민지 씨). Never use it for yourself. 저도 means "me too".',
            examples: [
                { ko: '민지 씨, 안녕하세요!', en: 'Hi, Minji!' },
                { ko: '저도 학생이에요.', en: "I'm a student too." }
            ]
        }
    ],
    sentences: [
        { ko: '저는 학생이에요.', en: "I'm a student.", blank: '이에요', alts: ['예요', '는', '을'] },
        { ko: '저는 민지예요.', en: "I'm Minji.", blank: '예요', alts: ['이에요', '은', '가'] },
        { ko: '이름이 뭐예요?', en: "What's your name?", blank: '뭐', alts: ['네', '저', '이름'] },
        { ko: '저는 미국 사람이에요.', en: "I'm American.", blank: '사람', alts: ['이름', '친구', '대학교'] },
        { ko: '민지 씨는 한국 사람이에요.', en: 'Minji is Korean.', blank: '는', alts: ['을', '도', '예요'] },
        { ko: '선생님은 한국 사람이에요.', en: 'The teacher is Korean.', blank: '은', alts: ['는', '를', '이에요'] },
        { ko: '저도 학생이에요.', en: "I'm a student too.", blank: '도', alts: ['는', '을', '씨'] },
        { ko: '알렉스 씨는 제 친구예요.', en: 'Alex is my friend.', blank: '친구', alts: ['이름', '대학교', '미국'] },
        { ko: '선생님이에요?', en: 'Are you a teacher?' },
        { ko: '아니요, 저는 학생이에요.', en: "No, I'm a student.", blank: '아니요', alts: ['네', '뭐', '저'] },
        { ko: '만나서 반가워요.', en: 'Nice to meet you.' },
        { ko: '여기는 대학교예요.', en: 'This is a university.', blank: '대학교', alts: ['사람', '이름', '선생님'] }
    ]
});

KG.unit({
    id: 'a1-02',
    level: 'A1',
    title: "What's This?",
    ko: '이거 뭐예요?',
    icon: '🎒',
    goal: 'Point at things near and far, ask what they are, and say what something is not.',
    vocab: [
        { ko: '이거', en: 'this (thing near me)', emoji: '👇', pos: 'other' },
        { ko: '그거', en: 'that (thing near you)', emoji: '👉', pos: 'other' },
        { ko: '저거', en: 'that (thing over there)', emoji: '👆', pos: 'other' },
        { ko: '책', en: 'book', emoji: '📕', pos: 'noun' },
        { ko: '가방', en: 'bag', emoji: '🎒', pos: 'noun' },
        { ko: '휴대폰', en: 'cell phone', emoji: '📱', pos: 'noun' },
        { ko: '컴퓨터', en: 'computer', emoji: '💻', pos: 'noun' },
        { ko: '우산', en: 'umbrella', emoji: '☂️', pos: 'noun' },
        { ko: '의자', en: 'chair', emoji: '🪑', pos: 'noun' },
        { ko: '책상', en: 'desk', emoji: '🗄️', pos: 'noun' },
        { ko: '시계', en: 'clock / watch', emoji: '🕰️', pos: 'noun' },
        { ko: '교실', en: 'classroom', emoji: '🧑‍🏫', pos: 'noun' },
        { ko: '누구', en: 'who / whose', emoji: '👤', pos: 'other', note: '누구 + N = whose N (누구 우산이에요? = Whose umbrella is it?)' },
        { ko: '제', en: 'my (polite)', emoji: '🙋', pos: 'other', note: 'Polite "my": 제 가방 = my bag.' }
    ],
    story: {
        title: 'In the Classroom',
        extras: 'Every scene takes place in the same bright, empty Korean university classroom from the first scene (light wooden desks and chairs, a blank whiteboard, a round wall clock, big sunny windows). Only Minji and Alex are there.',
        scenes: [
            {
                img: 'a1-02-1',
                art: 'A bright, empty Korean university classroom with rows of light wooden desks and chairs, a blank whiteboard, a round wall clock and big sunny windows. Minji stands in the doorway, proudly showing the room to Alex with an open-arm gesture.',
                lines: [
                    { sp: 'narrator', ko: '여기는 교실이에요.', en: 'This is a classroom.' },
                    { sp: 'minji', ko: '알렉스 씨, 여기가 제 교실이에요.', en: 'Alex, this is my classroom.' }
                ]
            },
            {
                img: 'a1-02-2',
                art: 'Alex holds up a thick blue book he picked up from a desk, looking at it curiously. Minji, standing a step away, points at the book in his hands and smiles.',
                lines: [
                    { sp: 'alex', ko: '이거 뭐예요?', en: "What's this?" },
                    { sp: 'minji', ko: '그거 책이에요. 제 책이에요.', en: "That's a book. It's my book." }
                ],
                check: { q: '이거 뭐예요?', en: "What's this?", options: ['책', '가방', '우산'], answer: 0 }
            },
            {
                img: 'a1-02-3',
                art: 'Alex points at a black backpack sitting on the chair right next to him. Minji shakes her head and points across the room at a mustard-yellow tote bag on a far desk.',
                lines: [
                    { sp: 'alex', ko: '이거 민지 씨 가방이에요?', en: 'Is this your bag, Minji?' },
                    { sp: 'minji', ko: '아니요, 제 가방이 아니에요.', en: "No, it's not my bag." },
                    { sp: 'minji', ko: '제 가방은 저거예요.', en: 'My bag is that one over there.' }
                ],
                check: { q: '이거 민지 씨 가방이에요?', en: "Is this (the black bag) Minji's bag?", options: ['네', '아니요'], answer: 1 }
            },
            {
                img: 'a1-02-4',
                art: 'View from the back of the classroom. Alex points far away to the front wall, where a big round clock hangs above the whiteboard. Minji follows his finger with her eyes.',
                lines: [
                    { sp: 'alex', ko: '저거 뭐예요?', en: "What's that over there?" },
                    { sp: 'minji', ko: '저거요? 시계예요.', en: "That? It's a clock." }
                ]
            },
            {
                img: 'a1-02-5',
                art: "Alex sits grinning in the big black teacher's chair behind the teacher's desk at the front, hands on an open laptop computer. Minji stands beside the desk, waving both hands in a panicky 'no' gesture.",
                lines: [
                    { sp: 'minji', ko: '알렉스 씨! 그거 알렉스 씨 의자가 아니에요.', en: "Alex! That's not your chair." },
                    { sp: 'alex', ko: '아, 누구 의자예요?', en: 'Oh, whose chair is it?' },
                    { sp: 'minji', ko: '선생님 의자예요!', en: "It's the teacher's chair!" }
                ],
                check: { q: '그거 누구 의자예요?', en: 'Whose chair is that?', options: ['알렉스', '선생님', '민지'], answer: 1 }
            },
            {
                img: 'a1-02-6',
                art: 'By the window, a folded sky-blue umbrella hangs on the back of a chair. Alex holds it up by its handle with a questioning look. Minji claps her hands happily, recognizing it.',
                lines: [
                    { sp: 'narrator', ko: '이거는 우산이에요.', en: 'This is an umbrella.' },
                    { sp: 'alex', ko: '이거 누구 우산이에요?', en: 'Whose umbrella is this?' },
                    { sp: 'minji', ko: '아, 제 우산이에요!', en: "Oh, it's my umbrella!" }
                ]
            },
            {
                img: 'a1-02-7',
                art: 'Alex and Minji sit at neighbouring desks. Alex holds up his smartphone in a funny phone case shaped exactly like a hamburger. Minji points at it, laughing and confused.',
                lines: [
                    { sp: 'minji', ko: '알렉스 씨, 그거 뭐예요? 햄버거예요?', en: "Alex, what's that? Is it a hamburger?" },
                    { sp: 'alex', ko: '아니요, 햄버거가 아니에요. 제 휴대폰이에요!', en: "No, it's not a hamburger. It's my phone!" }
                ],
                check: { q: '알렉스 씨 휴대폰은 햄버거예요?', en: "Is Alex's phone a hamburger?", options: ['네', '아니요'], answer: 1 }
            }
        ]
    },
    patterns: [
        {
            form: '이거 / 그거 / 저거',
            meaning: 'this / that (near you) / that (over there)',
            note: 'Near me: 이거. Near you, the listener: 그거. Far from both of us: 저거. If you hold something and ask 이거 뭐예요?, your friend answers 그거 ... because it is near you. Add 요 to check politely: 저거요?',
            examples: [
                { ko: '이거 뭐예요?', en: "What's this?" },
                { ko: '그거 책이에요.', en: "That's a book." },
                { ko: '저거 시계예요.', en: 'That over there is a clock.' }
            ]
        },
        {
            form: 'N + 이 / 가 아니에요',
            meaning: 'is not N',
            note: 'The opposite of 예요/이에요. Use 이 after a consonant (가방이 아니에요) and 가 after a vowel (의자가 아니에요). Do not mix it up with 아니요, which just means "no".',
            examples: [
                { ko: '제 가방이 아니에요.', en: "It's not my bag." },
                { ko: '햄버거가 아니에요.', en: "It's not a hamburger." },
                { ko: '아니요, 시계가 아니에요.', en: "No, it's not a clock." }
            ]
        },
        {
            form: 'Owner + N / 제 + N / 누구 + N',
            meaning: "possession: Minji's bag, my bag, whose bag?",
            note: "Just put the owner in front of the thing: 민지 씨 가방 (Minji's bag), 선생님 의자 (the teacher's chair). 제 means my. 누구 + N asks whose.",
            examples: [
                { ko: '선생님 의자예요.', en: "It's the teacher's chair." },
                { ko: '이거 누구 우산이에요?', en: 'Whose umbrella is this?' },
                { ko: '제 휴대폰이에요.', en: "It's my phone." }
            ]
        }
    ],
    sentences: [
        { ko: '이거 뭐예요?', en: "What's this?", blank: '뭐', alts: ['누구', '네', '제'] },
        { ko: '그거 책이에요.', en: "That's a book.", blank: '이에요', alts: ['예요', '이', '가'] },
        { ko: '저거 시계예요.', en: 'That over there is a clock.', blank: '저거', alts: ['이거', '그거', '여기'] },
        { ko: '가방이 아니에요.', en: "It's not a bag.", blank: '이', alts: ['가', '는', '를'] },
        { ko: '시계가 아니에요.', en: "It's not a clock.", blank: '가', alts: ['이', '은', '을'] },
        { ko: '제 가방이 아니에요.', en: "It's not my bag.", blank: '아니에요', alts: ['이에요', '예요', '아니요'] },
        { ko: '이거 누구 우산이에요?', en: 'Whose umbrella is this?', blank: '누구', alts: ['뭐', '네', '저거'] },
        { ko: '선생님 컴퓨터예요.', en: "It's the teacher's computer.", blank: '컴퓨터', alts: ['의자', '시계', '친구'] },
        { ko: '이거는 제 휴대폰이에요.', en: 'This is my phone.', blank: '제', alts: ['저', '누구', '뭐'] },
        { ko: '저거는 책상이에요.', en: 'That over there is a desk.', blank: '책상', alts: ['가방', '우산', '휴대폰'] },
        { ko: '아니요, 의자가 아니에요.', en: "No, it's not a chair.", blank: '아니요', alts: ['네', '뭐', '누구'] },
        { ko: '그거 민지 씨 책이에요?', en: "Is that Minji's book?" }
    ]
});

KG.unit({
    id: 'a1-03',
    level: 'A1',
    title: 'My Family',
    ko: '우리 가족',
    icon: '👨‍👩‍👧‍👦',
    goal: 'Introduce your family, ask who someone is, and say what you have and do not have.',
    vocab: [
        { ko: '가족', en: 'family', emoji: '👨‍👩‍👧‍👦', pos: 'noun' },
        { ko: '우리', en: 'we / our (my, for family and home)', emoji: '🏠', pos: 'other', note: 'Koreans say 우리 for family and home: 우리 엄마 = my mom.' },
        { ko: '엄마', en: 'mom', emoji: '👩', pos: 'noun' },
        { ko: '아빠', en: 'dad', emoji: '👨', pos: 'noun' },
        { ko: '할머니', en: 'grandmother', emoji: '👵', pos: 'noun' },
        { ko: '오빠', en: 'older brother (said by a woman)', emoji: '👱‍♂️', pos: 'noun', note: 'A woman or girl calls her older brother 오빠.' },
        { ko: '형', en: 'older brother (said by a man)', emoji: '🧔', pos: 'noun', note: 'A man or boy calls his older brother 형.' },
        { ko: '언니', en: 'older sister (said by a woman)', emoji: '👱‍♀️', pos: 'noun', note: 'A woman or girl calls her older sister 언니.' },
        { ko: '누나', en: 'older sister (said by a man)', emoji: '👩‍🦰', pos: 'noun', note: 'A man or boy calls his older sister 누나.' },
        { ko: '동생', en: 'younger sibling', emoji: '🧒', pos: 'noun' },
        { ko: '강아지', en: 'puppy / dog', emoji: '🐶', pos: 'noun' },
        { ko: '고양이', en: 'cat', emoji: '🐱', pos: 'noun' },
        { ko: '있다', en: 'to have / to be there', emoji: '✅', pos: 'verb', polite: '있어요' },
        { ko: '없다', en: 'to not have / to not be there', emoji: '🚫', pos: 'verb', polite: '없어요' }
    ],
    story: {
        title: 'The Family Photo',
        extras: "Minji's framed photo shows only her own Korean family (Grandma, Junho, Minji, Jian and Nabi the cat). Alex's American family appears only when a scene explicitly says Alex shows his smartphone: his mom is an American woman in her fifties with short blonde hair and a blue sweater, his dad is a tall American man in his fifties with a short grey beard and a plaid shirt, his older sister is in her mid-twenties with long curly red hair and freckles, and their dog is a big golden retriever.",
        scenes: [
            {
                img: 'a1-03-1',
                art: "A cozy Korean apartment living room with a low sofa and a wooden shelf. Only Minji and Alex are in the room. Minji holds up a small wooden-framed family photo to show Alex. Inside the photo only: Grandma sits in the middle, Junho stands behind her, Minji stands beside her, and Jian sits in front holding Nabi the cat on his lap.",
                lines: [
                    { sp: 'narrator', ko: '여기는 민지 집이에요.', en: "This is Minji's home." },
                    { sp: 'minji', ko: '알렉스 씨, 이거 우리 가족 사진이에요.', en: "Alex, this is my family's photo." }
                ]
            },
            {
                img: 'a1-03-2',
                art: "In Minji's cozy apartment living room, Minji holds the wooden-framed photo of her family (Grandma, Junho, Minji, Jian with Nabi the cat). Close-up: her finger points at tall Junho standing at the back of the photo in a light-blue shirt. Alex leans in to look. No phones.",
                lines: [
                    { sp: 'minji', ko: '여기 우리 오빠예요. 이름은 준호예요.', en: "Here's my older brother. His name is Junho." },
                    { sp: 'alex', ko: '준호 씨도 학생이에요?', en: 'Is Junho a student too?' },
                    { sp: 'minji', ko: '아니요, 오빠는 학생이 아니에요.', en: "No, my brother isn't a student." }
                ],
                check: { q: '준호는 민지 오빠예요?', en: "Is Junho Minji's older brother?", options: ['네', '아니요'], answer: 0 }
            },
            {
                img: 'a1-03-3',
                art: "In Minji's living room, a close-up of Minji's wooden-framed family photo. Minji points at smiling Grandma sitting in the middle of the picture. Alex playfully bows and waves at the photo. No phones.",
                lines: [
                    { sp: 'minji', ko: '여기 우리 할머니예요.', en: "Here's my grandma." },
                    { sp: 'alex', ko: '안녕하세요, 할머니!', en: 'Hello, Grandma!' }
                ]
            },
            {
                img: 'a1-03-4',
                art: "In Minji's living room, a close-up of Minji's wooden-framed family photo. Alex points at Jian, the small boy with a yellow cap sitting at the front of the photo. Minji smiles warmly. No phones.",
                lines: [
                    { sp: 'alex', ko: '이 사람은 누구예요?', en: 'Who is this?' },
                    { sp: 'minji', ko: '제 동생이에요. 이름은 지안이에요.', en: "That's my little brother. His name is Jian." }
                ],
                check: { q: '지안은 누구예요?', en: 'Who is Jian?', options: ['민지 오빠', '민지 동생', '민지 친구'], answer: 1 }
            },
            {
                img: 'a1-03-5',
                art: "In Minji's living room, a close-up of Minji's wooden-framed family photo, focused on Nabi the cat sitting on Jian's lap in the photo. Minji stands beside Alex; a small thought bubble above Minji shows a puppy crossed out with a red X (no writing).",
                lines: [
                    { sp: 'alex', ko: '고양이가 있어요? 강아지도 있어요?', en: 'You have a cat? Do you have a dog too?' },
                    { sp: 'minji', ko: '고양이는 있어요. 강아지는 없어요.', en: "We have a cat. We don't have a dog." },
                    { sp: 'narrator', ko: '고양이 이름은 나비예요.', en: "The cat's name is Nabi." }
                ],
                check: { q: '민지는 강아지가 있어요?', en: 'Does Minji have a dog?', options: ['네', '아니요'], answer: 1 }
            },
            {
                img: 'a1-03-6',
                art: "Alex shows Minji a photo on his smartphone: his mom, his dad and his older sister with long curly red hair, standing in front of an American house with a big golden retriever dog. There is no brother in the photo. Minji looks at the screen, delighted.",
                lines: [
                    { sp: 'alex', ko: '이거 우리 가족 사진이에요. 엄마, 아빠, 누나예요.', en: "This is my family's photo. My mom, dad and older sister." },
                    { sp: 'minji', ko: '와, 강아지도 있어요!', en: 'Wow, you have a dog too!' }
                ],
                check: { q: '알렉스는 형이 있어요?', en: 'Does Alex have an older brother?', options: ['네', '아니요'], answer: 1 }
            },
            {
                img: 'a1-03-7',
                art: 'Jian bursts into the living room holding Nabi the cat in his arms, staring at Alex with big curious eyes. Minji introduces him with an open hand. Alex crouches down and waves.',
                lines: [
                    { sp: 'jian', ko: '누나! 이 형은 누구예요?', en: 'Sis! Who is this guy?' },
                    { sp: 'minji', ko: '알렉스 씨, 제 동생 지안이에요.', en: 'Alex, this is my little brother, Jian.' },
                    { sp: 'jian', ko: '안녕하세요, 알렉스 형!', en: 'Hi, Alex!' }
                ]
            }
        ]
    },
    patterns: [
        {
            form: 'N + 이 / 가 있어요 / 없어요',
            meaning: 'to have N / to not have N (there is / there is no N)',
            note: 'Use 이 after a consonant (동생이 있어요) and 가 after a vowel (오빠가 있어요). With 은/는 instead, you contrast things: 고양이는 있어요. 강아지는 없어요.',
            examples: [
                { ko: '오빠가 있어요.', en: 'I have an older brother.' },
                { ko: '형이 없어요.', en: "I don't have an older brother." },
                { ko: '고양이가 있어요?', en: 'Do you have a cat?' }
            ]
        },
        {
            form: '오빠 / 형 / 언니 / 누나',
            meaning: 'older brother / older sister — depends on who is speaking',
            note: 'A woman says 오빠 (older brother) and 언니 (older sister). A man says 형 (older brother) and 누나 (older sister). Minji calls Junho 오빠, but Jian calls him 형. Younger siblings are 동생 for everyone. Kids also call older friends this way: Jian calls Alex 형.',
            examples: [
                { ko: '여기 우리 오빠예요.', en: "Here's my older brother. (Minji)" },
                { ko: '누나! 이 형은 누구예요?', en: 'Sis! Who is this guy? (Jian)' }
            ]
        },
        {
            form: '우리 + N',
            meaning: 'my (literally "our") family, home…',
            note: 'For family and home, Koreans usually say 우리 instead of 제: 우리 엄마, 우리 가족, 우리 집. 제 동생 is also fine.',
            examples: [
                { ko: '우리 가족이에요.', en: 'This is my family.' },
                { ko: '여기 우리 할머니예요.', en: "Here's my grandma." }
            ]
        }
    ],
    sentences: [
        { ko: '오빠가 있어요.', en: 'I have an older brother.', blank: '가', alts: ['이', '을', '를'] },
        { ko: '저는 형이 없어요.', en: "I don't have an older brother.", blank: '없어요', alts: ['있어요', '이에요', '아니에요'] },
        { ko: '고양이가 있어요?', en: 'Do you have a cat?', blank: '있어요', alts: ['없어요', '예요', '아니에요'] },
        { ko: '강아지는 없어요.', en: "We don't have a dog.", blank: '강아지', alts: ['고양이', '동생', '할머니'] },
        { ko: '우리 가족이에요.', en: 'This is my family.', blank: '우리', alts: ['저', '누구', '뭐'] },
        { ko: '저는 누나가 있어요.', en: 'I have an older sister. (a man speaking)', blank: '누나', alts: ['언니', '오빠', '동생'] },
        { ko: '언니가 있어요?', en: 'Do you have an older sister? (asking a woman)', blank: '언니', alts: ['누나', '형', '아빠'] },
        { ko: '제 동생 지안이에요.', en: 'This is my little brother, Jian.', blank: '동생', alts: ['오빠', '할머니', '누나'] },
        { ko: '여기 우리 할머니예요.', en: "Here's my grandma.", blank: '할머니', alts: ['엄마', '아빠', '언니'] },
        { ko: '동생이 없어요.', en: "I don't have a younger sibling.", blank: '이', alts: ['가', '를', '는'] },
        { ko: '엄마하고 아빠예요.', en: "It's my mom and dad.", blank: '하고', alts: ['도', '는', '가'] },
        { ko: '할머니도 있어요?', en: 'Do you have a grandma too?' }
    ]
});

KG.unit({
    id: 'a1-04',
    level: 'A1',
    title: 'How Much?',
    ko: '얼마예요?',
    icon: '💰',
    goal: 'Say prices with Sino-Korean numbers, ask how much something costs, and buy it.',
    vocab: [
        { ko: '편의점', en: 'convenience store', emoji: '🏪', pos: 'noun' },
        { ko: '일, 이, 삼, 사, 오', en: '1, 2, 3, 4, 5 (Sino-Korean)', emoji: '🔢', pos: 'num', note: 'Sino-Korean numbers are used for money, minutes, phone numbers and dates.' },
        { ko: '육, 칠, 팔, 구, 십', en: '6, 7, 8, 9, 10 (Sino-Korean)', emoji: '🔟', pos: 'num' },
        { ko: '백', en: 'hundred', emoji: '💯', pos: 'num' },
        { ko: '천', en: 'thousand', emoji: '💵', pos: 'num' },
        { ko: '만', en: 'ten thousand', emoji: '💰', pos: 'num', note: 'Big numbers are counted in 만: 20,000 = 이만.' },
        { ko: '원', en: 'won (Korean money)', emoji: '🪙', pos: 'noun' },
        { ko: '얼마', en: 'how much', emoji: '🏷️', pos: 'other' },
        { ko: '이거 주세요', en: "I'll take this, please", emoji: '🙏', pos: 'expr', forms: ['주세요'] },
        { ko: '싸다', en: 'to be cheap', emoji: '👛', pos: 'adj', polite: '싸요' },
        { ko: '비싸다', en: 'to be expensive', emoji: '💸', pos: 'adj', polite: '비싸요' },
        { ko: '과자', en: 'snack / chips', emoji: '🍪', pos: 'noun' },
        { ko: '라면', en: 'ramen (instant noodles)', emoji: '🍜', pos: 'noun' },
        { ko: '우유', en: 'milk', emoji: '🥛', pos: 'noun' }
    ],
    story: {
        title: 'At the Convenience Store',
        extras: 'The convenience store clerk is a young Korean man in his early twenties with short dyed-brown hair, wearing a blue-and-white striped store vest over a white T-shirt. The store is bright and clean, and no packaging, shelf or sign shows any letters.',
        scenes: [
            {
                img: 'a1-04-1',
                art: 'Inside a bright Korean convenience store at night: shelves full of colorful snack bags, stacks of cup ramen and a glass fridge of milk cartons. Alex walks in through the glass door, smiling. The young clerk stands behind the counter.',
                lines: [
                    { sp: 'narrator', ko: '여기는 편의점이에요.', en: 'This is a convenience store.' },
                    { sp: 'narrator', ko: '과자하고 라면하고 우유가 있어요.', en: 'There are snacks, ramen and milk.' }
                ]
            },
            {
                img: 'a1-04-2',
                art: 'At the counter, Alex holds up a big bag of potato chips toward the clerk. A small price tag on the bag shows only the number 1,500 and the ₩ sign.',
                lines: [
                    { sp: 'alex', ko: '이거 얼마예요?', en: 'How much is this?' },
                    { sp: 'staffM', as: '점원', ko: '천오백 원이에요.', en: "It's 1,500 won." }
                ],
                check: { q: '과자는 얼마예요?', en: 'How much are the chips?', options: ['천 원', '천오백 원', '오천 원'], answer: 1 }
            },
            {
                img: 'a1-04-3',
                art: 'Alex holds up a fancy gold gift box of chocolates. Its price tag shows only the number 10,000 and the ₩ sign. Alex looks shocked, eyes wide. The clerk smiles politely.',
                lines: [
                    { sp: 'alex', ko: '이 초콜릿은 얼마예요?', en: 'How much is this chocolate?' },
                    { sp: 'staffM', as: '점원', ko: '만 원이에요.', en: "It's 10,000 won." },
                    { sp: 'alex', ko: '와, 비싸요!', en: "Wow, that's expensive!" }
                ],
                check: { q: '초콜릿은 싸요?', en: 'Is the chocolate cheap?', options: ['네', '아니요'], answer: 1 }
            },
            {
                img: 'a1-04-4',
                art: 'Alex has put the chocolate box back and now happily holds up a cup of instant ramen. Its price tag shows only the number 1,000 and the ₩ sign. He gives a thumbs-up.',
                lines: [
                    { sp: 'alex', ko: '이 라면은 얼마예요?', en: 'How much is this ramen?' },
                    { sp: 'staffM', as: '점원', ko: '천 원이에요.', en: "It's 1,000 won." },
                    { sp: 'alex', ko: '싸요! 이거 주세요.', en: "That's cheap! I'll take this, please." }
                ]
            },
            {
                img: 'a1-04-5',
                art: 'Alex adds a small carton of milk to the counter next to the chips and the cup ramen. The milk carton has a price tag showing only 1,200 and the ₩ sign. The clerk nods.',
                lines: [
                    { sp: 'alex', ko: '우유도 주세요.', en: 'The milk too, please.' },
                    { sp: 'staffM', as: '점원', ko: '네, 우유는 천이백 원이에요.', en: 'Sure, the milk is 1,200 won.' }
                ]
            },
            {
                img: 'a1-04-6',
                art: 'At the counter: the chips, the cup ramen and the milk in a row. The register screen shows only the number 3,700. Alex hands the clerk a folded orange banknote, smiling.',
                lines: [
                    { sp: 'staffM', as: '점원', ko: '모두 삼천칠백 원이에요.', en: "That's 3,700 won altogether." },
                    { sp: 'alex', ko: '여기 있어요.', en: 'Here you are.' },
                    { sp: 'staffM', as: '점원', ko: '감사합니다!', en: 'Thank you!' }
                ],
                check: { q: '모두 얼마예요?', en: 'How much is it altogether?', options: ['삼천칠백 원', '천오백 원', '만 원'], answer: 0 }
            }
        ]
    },
    patterns: [
        {
            form: '일, 이, 삼 … 십, 백, 천, 만',
            meaning: 'Sino-Korean numbers (for prices)',
            note: '1 일, 2 이, 3 삼, 4 사, 5 오, 6 육, 7 칠, 8 팔, 9 구, 10 십. Build bigger numbers like LEGO: 이십 (20), 오백 (500), 삼천 (3,000), 천오백 (1,500). For 10, 100, 1,000 and 10,000 just say 십, 백, 천, 만, never 일천 or 일만. Large amounts are counted in 만: 20,000 = 이만.',
            examples: [
                { ko: '천오백 원이에요.', en: "It's 1,500 won." },
                { ko: '만 원이에요.', en: "It's 10,000 won." },
                { ko: '삼천칠백 원이에요.', en: "It's 3,700 won." }
            ]
        },
        {
            form: 'N + 얼마예요? / N + 주세요',
            meaning: 'How much is N? / N, please.',
            note: '얼마예요? asks the price. 주세요 means "please give me", the easiest way to buy anything: 이거 주세요, 우유 주세요. 이 + noun means "this noun": 이 라면 = this ramen.',
            examples: [
                { ko: '이거 얼마예요?', en: 'How much is this?' },
                { ko: '이 라면은 얼마예요?', en: 'How much is this ramen?' },
                { ko: '이거 주세요.', en: "I'll take this, please." }
            ]
        },
        {
            form: '싸요 / 비싸요',
            meaning: "it's cheap / it's expensive",
            note: 'Korean adjectives work like verbs: 싸다 → 싸요, 비싸다 → 비싸요. Do not add 이에요.',
            examples: [
                { ko: '와, 비싸요!', en: "Wow, it's expensive!" },
                { ko: '라면은 싸요.', en: 'Ramen is cheap.' }
            ]
        }
    ],
    sentences: [
        { ko: '이거 얼마예요?', en: 'How much is this?', blank: '얼마', alts: ['뭐', '누구', '여기'] },
        { ko: '천오백 원이에요.', en: "It's 1,500 won.", blank: '천오백', alts: ['오천백', '천오십', '백오천'] },
        { ko: '만 원이에요.', en: "It's 10,000 won.", blank: '만', alts: ['천', '백', '십'] },
        { ko: '라면은 천 원이에요.', en: 'The ramen is 1,000 won.', blank: '천', alts: ['만', '백', '십'] },
        { ko: '이거 주세요.', en: "I'll take this, please.", blank: '주세요', alts: ['있어요', '얼마예요', '아니에요'] },
        { ko: '와, 비싸요!', en: "Wow, it's expensive!", blank: '비싸요', alts: ['싸요', '있어요', '주세요'] },
        { ko: '우유는 싸요.', en: 'Milk is cheap.', blank: '싸요', alts: ['비싸요', '없어요', '주세요'] },
        { ko: '삼천칠백 원이에요.', en: "It's 3,700 won.", blank: '삼천칠백', alts: ['삼백칠천', '칠천삼백', '삼천칠십'] },
        { ko: '우유도 주세요.', en: 'The milk too, please.', blank: '도', alts: ['은', '이', '하고'] },
        { ko: '이 과자는 이천 원이에요.', en: 'This snack is 2,000 won.', blank: '이천', alts: ['이백', '이만', '천이'] },
        { ko: '여기 있어요.', en: 'Here you are.' },
        { ko: '우유는 천이백 원이에요.', en: 'The milk is 1,200 won.' }
    ]
});

KG.unit({
    id: 'a1-05',
    level: 'A1',
    title: 'How Many?',
    ko: '몇 개예요?',
    icon: '🍎',
    goal: 'Count things, people and animals with native Korean numbers and counters, and say your age.',
    vocab: [
        { ko: '하나, 둘, 셋, 넷, 다섯', en: '1, 2, 3, 4, 5 (native Korean)', emoji: '🖐️', pos: 'num', note: 'Before a counter: 하나 → 한, 둘 → 두, 셋 → 세, 넷 → 네.' },
        { ko: '여섯, 일곱, 여덟, 아홉, 열', en: '6, 7, 8, 9, 10 (native Korean)', emoji: '🙌', pos: 'num' },
        { ko: '스물', en: 'twenty (native Korean)', emoji: '2️⃣0️⃣', pos: 'num', note: 'Before a counter it becomes 스무: 스무 살.' },
        { ko: '몇', en: 'how many', emoji: '🤔', pos: 'other' },
        { ko: '개', en: 'counter for things', emoji: '📦', pos: 'noun' },
        { ko: '명', en: 'counter for people', emoji: '👥', pos: 'noun' },
        { ko: '살', en: 'years old (counter for age)', emoji: '🎂', pos: 'noun' },
        { ko: '마리', en: 'counter for animals', emoji: '🐾', pos: 'noun' },
        { ko: '잔', en: 'counter for cups / glasses', emoji: '🥤', pos: 'noun' },
        { ko: '병', en: 'counter for bottles', emoji: '🍾', pos: 'noun' },
        { ko: '시장', en: 'market', emoji: '🧺', pos: 'noun' },
        { ko: '사과', en: 'apple', emoji: '🍎', pos: 'noun' },
        { ko: '생선', en: 'fish (as food)', emoji: '🐟', pos: 'noun' },
        { ko: '주스', en: 'juice', emoji: '🧃', pos: 'noun' }
    ],
    story: {
        title: 'Counting at the Market',
        extras: 'The fruit seller is a cheerful Korean woman in her fifties with a short black perm, a pink sun visor and a flowery apron (clearly not Grandma, who has grey hair and glasses). The fishmonger is a stocky Korean man in his forties with a white headband, a black rubber apron and tall rubber boots. No stall or sign shows any letters.',
        scenes: [
            {
                img: 'a1-05-1',
                art: "A busy, colorful traditional Korean outdoor market with stalls of fruit, fish on ice and juice. Grandma walks holding Jian's hand, a woven shopping basket on her other arm. Jian points excitedly at a fruit stall piled with red apples.",
                lines: [
                    { sp: 'narrator', ko: '여기는 시장이에요.', en: 'This is a market.' },
                    { sp: 'jian', ko: '할머니! 사과가 있어요!', en: 'Grandma! There are apples!' }
                ]
            },
            {
                img: 'a1-05-2',
                art: 'At the fruit stall: a neat pyramid of exactly five red apples. Jian counts them, touching each apple with one finger. Grandma smiles beside him. The fruit seller watches from behind the stall.',
                lines: [
                    { sp: 'jian', ko: '사과가 하나, 둘, 셋, 넷, 다섯!', en: 'Apples: one, two, three, four, five!' },
                    { sp: 'halmeoni', ko: '사과 다섯 개 주세요.', en: 'Five apples, please.' },
                    { sp: 'staffF', as: '사장님', ko: '네, 여기 있어요.', en: 'Sure, here you are.' }
                ],
                check: { q: '사과가 몇 개예요?', en: 'How many apples are there?', options: ['세 개', '다섯 개', '열 개'], answer: 1 }
            },
            {
                img: 'a1-05-3',
                art: 'The fruit seller leans over her stall, smiling at Jian. Jian proudly holds up eight fingers: five on one hand and three on the other. Grandma laughs behind him.',
                lines: [
                    { sp: 'staffF', as: '사장님', ko: '몇 살이에요?', en: 'How old are you?' },
                    { sp: 'jian', ko: '여덟 살이에요!', en: "I'm eight!" },
                    { sp: 'narrator', ko: '지안은 여덟 살이에요.', en: 'Jian is eight years old.' }
                ],
                check: { q: '지안은 몇 살이에요?', en: 'How old is Jian?', options: ['여섯 살', '여덟 살', '열 살'], answer: 1 }
            },
            {
                img: 'a1-05-4',
                art: 'At the fish stall: rows of silver fish on crushed ice. The fishmonger holds up exactly two fish, one in each hand. Grandma points at them. Jian pinches his nose and giggles.',
                lines: [
                    { sp: 'halmeoni', ko: '생선 두 마리 주세요.', en: 'Two fish, please.' },
                    { sp: 'staffM', as: '사장님', ko: '두 마리요? 네!', en: 'Two? Sure!' }
                ]
            },
            {
                img: 'a1-05-5',
                art: "Back at the fruit seller's stall, which also has a cooler of orange juice. Grandma puts exactly two bottles of orange juice in her basket. Jian holds one paper cup of fresh orange juice with a straw. The fruit seller hands it over with a smile.",
                lines: [
                    { sp: 'halmeoni', ko: '주스 두 병 주세요.', en: 'Two bottles of juice, please.' },
                    { sp: 'jian', ko: '저는 한 잔 주세요!', en: 'One cup for me, please!' },
                    { sp: 'staffF', as: '사장님', ko: '네, 한 잔 여기 있어요.', en: "Sure, here's one cup." }
                ]
            },
            {
                img: 'a1-05-6',
                art: 'Evening at home. Grandma, Junho, Minji and Jian sit around the kitchen table with grilled fish, apples and juice. Jian counts the four people on his fingers. Nabi the cat stares hungrily at the fish from under the table.',
                lines: [
                    { sp: 'jian', ko: '한 명, 두 명, 세 명, 네 명! 우리 가족은 네 명이에요.', en: 'One, two, three, four people! There are four of us in my family.' },
                    { sp: 'jian', ko: '나비도 있어요! 고양이 한 마리!', en: 'And Nabi too! One cat!' }
                ],
                check: { q: '고양이는 몇 마리예요?', en: 'How many cats are there?', options: ['한 마리', '두 마리', '네 마리'], answer: 0 }
            }
        ]
    },
    patterns: [
        {
            form: 'N + number + counter',
            meaning: 'counting: 사과 다섯 개 (five apples)',
            note: 'Native numbers 1–10: 하나, 둘, 셋, 넷, 다섯, 여섯, 일곱, 여덟, 아홉, 열 (20 = 스물). The order is thing, number, counter: 사과 다섯 개. Before a counter, 하나, 둘, 셋, 넷, 스물 shrink to 한, 두, 세, 네, 스무: 한 잔, 두 마리, 세 명, 네 개, 스무 살.',
            examples: [
                { ko: '사과 다섯 개 주세요.', en: 'Five apples, please.' },
                { ko: '생선 두 마리 주세요.', en: 'Two fish, please.' },
                { ko: '우리 가족은 네 명이에요.', en: 'There are four people in my family.' }
            ]
        },
        {
            form: '개 · 명 · 살 · 마리 · 잔 · 병',
            meaning: 'things · people · age · animals · cups · bottles',
            note: 'Korean counts with a word for the kind of thing. 개 works for most objects. Age always uses native numbers + 살: 여덟 살 (not 팔 살).',
            examples: [
                { ko: '여덟 살이에요.', en: "I'm eight years old." },
                { ko: '주스 한 잔 주세요.', en: 'One cup of juice, please.' },
                { ko: '고양이가 한 마리 있어요.', en: 'There is one cat.' }
            ]
        },
        {
            form: '몇 + counter?',
            meaning: 'how many…?',
            note: "Put 몇 in front of the counter to ask how many: 몇 개, 몇 명, 몇 마리. 몇 살이에요? asks someone's age.",
            examples: [
                { ko: '사과가 몇 개예요?', en: 'How many apples are there?' },
                { ko: '몇 살이에요?', en: 'How old are you?' }
            ]
        }
    ],
    sentences: [
        { ko: '사과 다섯 개 주세요.', en: 'Five apples, please.', blank: '개', alts: ['명', '마리', '살'] },
        { ko: '저는 여덟 살이에요.', en: "I'm eight years old.", blank: '여덟', alts: ['팔', '여섯', '열'] },
        { ko: '몇 살이에요?', en: 'How old are you?', blank: '몇', alts: ['뭐', '얼마', '누구'] },
        { ko: '생선 두 마리 주세요.', en: 'Two fish, please.', blank: '두', alts: ['둘', '이', '세'] },
        { ko: '우리 가족은 네 명이에요.', en: 'There are four people in my family.', blank: '명', alts: ['개', '마리', '잔'] },
        { ko: '주스 한 잔 주세요.', en: 'One cup of juice, please.', blank: '한', alts: ['하나', '일', '두'] },
        { ko: '주스 두 병 주세요.', en: 'Two bottles of juice, please.', blank: '병', alts: ['잔', '명', '살'] },
        { ko: '고양이가 한 마리 있어요.', en: 'There is one cat.', blank: '마리', alts: ['명', '개', '병'] },
        { ko: '사과가 몇 개예요?', en: 'How many apples are there?', blank: '몇', alts: ['얼마', '뭐', '누구'] },
        { ko: '형은 스무 살이에요.', en: 'My older brother is twenty.', blank: '스무', alts: ['스물', '이십', '두'] },
        { ko: '친구가 세 명 있어요.', en: 'I have three friends.', blank: '세', alts: ['셋', '삼', '네'] },
        { ko: '하나, 둘, 셋!', en: 'One, two, three!' }
    ]
});

KG.unit({
    id: 'a1-06',
    level: 'A1',
    title: 'At the Café',
    ko: '커피 주세요',
    icon: '☕',
    goal: 'Call the staff, order drinks and food, and say whether something tastes good.',
    vocab: [
        { ko: '커피', en: 'coffee', emoji: '☕', pos: 'noun' },
        { ko: '차', en: 'tea', emoji: '🍵', pos: 'noun' },
        { ko: '물', en: 'water', emoji: '💧', pos: 'noun' },
        { ko: '빵', en: 'bread', emoji: '🍞', pos: 'noun' },
        { ko: '케이크', en: 'cake', emoji: '🍰', pos: 'noun' },
        { ko: '메뉴', en: 'menu', emoji: '📋', pos: 'noun' },
        { ko: '아이스', en: 'iced (drink)', emoji: '🧊', pos: 'other' },
        { ko: '따뜻하다', en: 'to be warm / hot (drinks)', emoji: '♨️', pos: 'adj', polite: '따뜻해요', forms: ['따뜻한'], note: 'Before a noun: 따뜻한 차 = a hot tea. Cafés call hot drinks 따뜻한 거.' },
        { ko: '맛있다', en: 'to be tasty / delicious', emoji: '😋', pos: 'adj', polite: '맛있어요' },
        { ko: '맛없다', en: 'to taste bad', emoji: '😖', pos: 'adj', polite: '맛없어요' },
        { ko: '하고', en: 'and (joins nouns)', emoji: '➕', pos: 'other' },
        { ko: '여기요', en: 'excuse me! (calling staff)', emoji: '🙋‍♂️', pos: 'expr' },
        { ko: '어서 오세요', en: 'welcome (said by staff)', emoji: '🛎️', pos: 'expr' }
    ],
    story: {
        title: 'Two Drinks, Please',
        extras: 'The barista is a young Korean woman in her twenties with a short black bob, round glasses, a white shirt and a dark-green apron. She is the only staff member in every scene.',
        scenes: [
            {
                img: 'a1-06-1',
                art: 'A cozy café with wooden tables, plants and big windows. A glass display case shows cakes and bread. Minji and Alex walk in through the door. The barista smiles and waves from behind the counter.',
                lines: [
                    { sp: 'narrator', ko: '여기는 카페예요. 커피하고 케이크가 있어요.', en: 'This is a café. There is coffee and cake.' },
                    { sp: 'staffF', as: '직원', ko: '어서 오세요!', en: 'Welcome!' }
                ]
            },
            {
                img: 'a1-06-2',
                art: 'Minji and Alex sit at a wooden table by the window. Alex raises his hand high and calls out. The barista turns toward them with a smile.',
                lines: [
                    { sp: 'alex', ko: '여기요!', en: 'Excuse me!' },
                    { sp: 'staffF', as: '직원', ko: '네!', en: 'Yes!' },
                    { sp: 'alex', ko: '메뉴 주세요.', en: 'A menu, please.' }
                ]
            },
            {
                img: 'a1-06-3',
                art: 'Close-up of a picture menu on the table with photos only: an iced coffee, a hot coffee with steam, a cup of hot tea, a glass of water, a slice of strawberry cake and a bread roll. Minji points at the hot tea, Alex points at the iced coffee. The barista stands by the table with a notepad.',
                lines: [
                    { sp: 'minji', ko: '저는 따뜻한 차 주세요.', en: "I'll have a hot tea, please." },
                    { sp: 'alex', ko: '저는 아이스 아메리카노 주세요.', en: "I'll have an iced Americano, please." },
                    { sp: 'staffF', as: '직원', ko: '따뜻한 차 하나, 아이스 아메리카노 하나요?', en: 'One hot tea and one iced Americano?' }
                ],
                check: { q: '알렉스 커피는 아이스예요?', en: "Is Alex's coffee iced?", options: ['네', '아니요'], answer: 0 }
            },
            {
                img: 'a1-06-4',
                art: 'Minji points at the strawberry cake and the bread roll on the picture menu. Alex holds up two fingers. The barista writes on her notepad and nods.',
                lines: [
                    { sp: 'minji', ko: '케이크하고 빵도 주세요.', en: 'Cake and bread too, please.' },
                    { sp: 'alex', ko: '물도 두 잔 주세요.', en: 'And two glasses of water, please.' },
                    { sp: 'staffF', as: '직원', ko: '네, 잠시만요!', en: 'Sure, just a moment!' }
                ],
                check: { q: '물은 몇 잔이에요?', en: 'How many glasses of water?', options: ['한 잔', '두 잔', '세 잔'], answer: 1 }
            },
            {
                img: 'a1-06-5',
                art: 'The barista has set down a tray: a cup of hot tea, a slice of strawberry cake, a bread roll, two glasses of water, and in front of Alex a steaming HOT coffee mug instead of an iced coffee. Alex touches the hot mug and looks confused. The barista covers her mouth, embarrassed, already holding a tall glass of iced coffee.',
                lines: [
                    { sp: 'alex', ko: '여기요, 이거 아이스가 아니에요.', en: "Excuse me, this isn't iced." },
                    { sp: 'staffF', as: '직원', ko: '아, 죄송해요! 아이스 아메리카노 여기 있어요.', en: "Oh, I'm sorry! Here's your iced Americano." }
                ]
            },
            {
                img: 'a1-06-6',
                art: 'Alex eats a forkful of strawberry cake with a blissful face, eyes closed. Minji sips her hot tea, smiling. The glass of iced coffee sits on the table.',
                lines: [
                    { sp: 'alex', ko: '와, 케이크가 맛있어요!', en: 'Wow, the cake is delicious!' },
                    { sp: 'minji', ko: '차도 맛있어요.', en: 'The tea is good too.' }
                ]
            },
            {
                img: 'a1-06-7',
                art: 'Alex sips his iced Americano through a straw and scrunches up his whole face at the bitter taste. Minji laughs and slides a small jug of syrup across the table to him.',
                lines: [
                    { sp: 'alex', ko: '음... 커피는 맛없어요.', en: "Hmm... the coffee doesn't taste good." },
                    { sp: 'minji', ko: '하하, 여기 시럽 있어요!', en: "Haha, here's some syrup!" }
                ],
                check: { q: '알렉스 커피는 맛있어요?', en: "Does Alex's coffee taste good to him?", options: ['네', '아니요'], answer: 1 }
            }
        ]
    },
    patterns: [
        {
            form: 'N + 주세요',
            meaning: 'N, please (ordering)',
            note: 'Order anything with 주세요. Add a number and counter after the noun: 물 두 잔 주세요. 저는 N 주세요 means "I will have N". To call the staff, say 여기요!',
            examples: [
                { ko: '메뉴 주세요.', en: 'A menu, please.' },
                { ko: '저는 따뜻한 차 주세요.', en: "I'll have a hot tea, please." },
                { ko: '물 두 잔 주세요.', en: 'Two glasses of water, please.' }
            ]
        },
        {
            form: 'N + 하고 + N / N + 도',
            meaning: 'N and N / N too',
            note: '하고 joins two nouns: 케이크하고 빵. 도 means "too, also" and replaces 이/가 or 은/는: 물도 주세요, 차도 맛있어요.',
            examples: [
                { ko: '케이크하고 빵 주세요.', en: 'Cake and bread, please.' },
                { ko: '물도 주세요.', en: 'Water too, please.' }
            ]
        },
        {
            form: 'N이/가 맛있어요 / 맛없어요',
            meaning: 'N is tasty / N tastes bad',
            note: '맛 means taste: "taste exists" = delicious, "no taste" = not good. Say them as 마시써요 and 마덥써요.',
            examples: [
                { ko: '케이크가 맛있어요.', en: 'The cake is delicious.' },
                { ko: '커피는 맛없어요.', en: "The coffee doesn't taste good." }
            ]
        }
    ],
    sentences: [
        { ko: '커피 주세요.', en: 'Coffee, please.', blank: '주세요', alts: ['있어요', '이에요', '아니에요'] },
        { ko: '저는 따뜻한 차 주세요.', en: "I'll have a hot tea, please.", blank: '따뜻한', alts: ['아이스', '두', '빵'] },
        { ko: '케이크하고 빵 주세요.', en: 'Cake and bread, please.', blank: '하고', alts: ['도', '는', '가'] },
        { ko: '물도 주세요.', en: 'Water too, please.', blank: '도', alts: ['하고', '는', '이'] },
        { ko: '여기요! 메뉴 주세요.', en: 'Excuse me! A menu, please.', blank: '여기요', alts: ['여기', '어서 오세요', '감사합니다'] },
        { ko: '케이크가 맛있어요.', en: 'The cake is delicious.', blank: '맛있어요', alts: ['맛없어요', '비싸요', '없어요'] },
        { ko: '이 커피는 맛없어요.', en: "This coffee doesn't taste good.", blank: '맛없어요', alts: ['맛있어요', '싸요', '주세요'] },
        { ko: '아이스 아메리카노 두 잔 주세요.', en: 'Two iced Americanos, please.', blank: '잔', alts: ['병', '명', '마리'] },
        { ko: '물 한 잔 주세요.', en: 'A glass of water, please.', blank: '한', alts: ['하나', '일', '두'] },
        { ko: '빵하고 커피 있어요?', en: 'Do you have bread and coffee?', blank: '하고', alts: ['도', '를', '이'] },
        { ko: '차가 따뜻해요.', en: 'The tea is hot.', blank: '따뜻해요', alts: ['아이스예요', '비싸요', '없어요'] },
        { ko: '어서 오세요!', en: 'Welcome!' }
    ]
});

KG.unit({
    id: 'a1-07',
    level: 'A1',
    title: 'Where Are You Going?',
    ko: '어디 가요?',
    icon: '🚶',
    goal: 'Name places around town and say where you are going and who is coming.',
    vocab: [
        { ko: '집', en: 'home / house', emoji: '🏠', pos: 'noun' },
        { ko: '학교', en: 'school', emoji: '🏫', pos: 'noun' },
        { ko: '회사', en: 'company / office', emoji: '🏢', pos: 'noun' },
        { ko: '식당', en: 'restaurant', emoji: '🍽️', pos: 'noun' },
        { ko: '카페', en: 'café', emoji: '🧋', pos: 'noun' },
        { ko: '공원', en: 'park', emoji: '🌳', pos: 'noun' },
        { ko: '도서관', en: 'library', emoji: '📚', pos: 'noun' },
        { ko: '병원', en: 'hospital / clinic', emoji: '🏥', pos: 'noun' },
        { ko: '은행', en: 'bank', emoji: '🏦', pos: 'noun' },
        { ko: '마트', en: 'supermarket', emoji: '🛒', pos: 'noun' },
        { ko: '어디', en: 'where', emoji: '📍', pos: 'other' },
        { ko: '가다', en: 'to go', emoji: '🚶', pos: 'verb', polite: '가요' },
        { ko: '오다', en: 'to come', emoji: '↩️', pos: 'verb', polite: '와요', note: '오 + 아요 blends into 와요.' }
    ],
    story: {
        title: 'A Busy Morning',
        scenes: [
            {
                img: 'a1-07-1',
                art: "A busy morning in the entrance hall of the family's apartment. Junho knots his tie, Minji grabs her mustard-yellow tote bag, Grandma buttons her coat, and Jian, wearing a small backpack, looks up at everyone. Nabi the cat watches from the shoe rack.",
                lines: [
                    { sp: 'narrator', ko: '여기는 민지 집이에요.', en: "This is Minji's home." },
                    { sp: 'jian', ko: '모두 어디 가요?', en: 'Where is everyone going?' }
                ]
            },
            {
                img: 'a1-07-2',
                art: 'Junho, with a briefcase and a piece of toast in his mouth, opens the front door in a hurry. A thought bubble above him shows a tall glass office building. Jian looks up at him.',
                lines: [
                    { sp: 'jian', ko: '형, 어디 가요?', en: 'Where are you going?' },
                    { sp: 'junho', ko: '회사에 가요.', en: "I'm going to work." }
                ],
                check: { q: '준호는 어디 가요?', en: 'Where is Junho going?', options: ['학교', '회사', '병원'], answer: 1 }
            },
            {
                img: 'a1-07-3',
                art: 'Minji puts on her white sneakers by the door, holding a stack of books. A thought bubble above her shows a big quiet library with tall bookshelves and reading tables. Jian tugs her sleeve.',
                lines: [
                    { sp: 'jian', ko: '누나는 어디 가요?', en: 'Where are you going, sis?' },
                    { sp: 'minji', ko: '저는 도서관에 가요.', en: "I'm going to the library." }
                ],
                check: { q: '민지는 어디 가요?', en: 'Where is Minji going?', options: ['도서관', '은행', '카페'], answer: 0 }
            },
            {
                img: 'a1-07-4',
                art: 'Grandma pulls a small shopping trolley bag toward the door. A thought bubble above Jian shows a green park with trees and benches, but a thought bubble above Grandma shows a big supermarket with shopping carts and shelves of vegetables. Grandma shakes her head kindly.',
                lines: [
                    { sp: 'jian', ko: '할머니는 공원에 가요?', en: 'Grandma, are you going to the park?' },
                    { sp: 'halmeoni', ko: '아니요, 마트에 가요.', en: "No, I'm going to the supermarket." }
                ]
            },
            {
                img: 'a1-07-5',
                art: "Grandma bends down and fixes the straps of Jian's backpack. Jian salutes proudly. A thought bubble above Jian shows an elementary school building with a playground.",
                lines: [
                    { sp: 'halmeoni', ko: '지안이는 학교에 가요?', en: 'Jian, are you going to school?' },
                    { sp: 'jian', ko: '네! 학교에 가요!', en: "Yes! I'm going to school!" }
                ]
            },
            {
                img: 'a1-07-6',
                art: 'Jian presses his face to the living-room window and points outside. Down on the street, Alex walks toward the apartment building, waving up at them with a book under his arm. Minji smiles behind Jian.',
                lines: [
                    { sp: 'jian', ko: '누나! 알렉스 형이 와요!', en: 'Sis! Alex is coming!' },
                    { sp: 'alex', ko: '민지 씨! 저도 도서관에 가요!', en: "Minji! I'm going to the library too!" }
                ]
            },
            {
                img: 'a1-07-7',
                art: 'Evening, with an orange sunset outside the window. The front door opens and Junho, Minji and Jian come in one after another. Grandma, already home, welcomes them with open arms. Nabi the cat runs to greet them.',
                lines: [
                    { sp: 'narrator', ko: '모두 집에 와요.', en: 'Everyone comes home.' },
                    { sp: 'halmeoni', ko: '어서 와요!', en: 'Welcome home!' }
                ],
                check: { q: '모두 어디에 와요?', en: 'Where does everyone come?', options: ['집', '회사', '공원'], answer: 0 }
            }
        ]
    },
    patterns: [
        {
            form: 'Place + 에 가요 / 와요',
            meaning: 'to go to / come to a place',
            note: '에 marks where you are heading. It is the same after a vowel or a consonant: 학교에, 집에. 가요 = go (away from here), 와요 = come (toward here).',
            examples: [
                { ko: '회사에 가요.', en: "I'm going to work." },
                { ko: '저는 도서관에 가요.', en: "I'm going to the library." },
                { ko: '모두 집에 와요.', en: 'Everyone comes home.' }
            ]
        },
        {
            form: '(N은/는) 어디 가요?',
            meaning: 'Where are you / is N going?',
            note: '어디 = where. In speech, 에 is usually dropped in this question (full form: 어디에 가요?). To ask about someone, put their name or title with 은/는 first: 누나는 어디 가요?',
            examples: [
                { ko: '어디 가요?', en: 'Where are you going?' },
                { ko: '할머니는 공원에 가요?', en: 'Grandma, are you going to the park?' },
                { ko: '아니요, 마트에 가요.', en: "No, I'm going to the supermarket." }
            ]
        }
    ],
    sentences: [
        { ko: '회사에 가요.', en: "I'm going to the office.", blank: '에', alts: ['를', '은', '가'] },
        { ko: '어디 가요?', en: 'Where are you going?', blank: '어디', alts: ['뭐', '누구', '얼마'] },
        { ko: '저는 도서관에 가요.', en: "I'm going to the library.", blank: '도서관', alts: ['병원', '은행', '공원'] },
        { ko: '할머니는 마트에 가요.', en: 'Grandma is going to the supermarket.', blank: '마트', alts: ['식당', '카페', '학교'] },
        { ko: '지안은 학교에 가요.', en: 'Jian goes to school.', blank: '가요', alts: ['와요', '있어요', '주세요'] },
        { ko: '알렉스 형이 와요!', en: 'Alex is coming!', blank: '와요', alts: ['가요', '없어요', '주세요'] },
        { ko: '모두 집에 와요.', en: 'Everyone comes home.', blank: '집', alts: ['회사', '병원', '은행'] },
        { ko: '은행에 가요?', en: 'Are you going to the bank?', blank: '은행', alts: ['병원', '식당', '공원'] },
        { ko: '병원에 가요.', en: "I'm going to the hospital.", blank: '에', alts: ['이', '를', '도'] },
        { ko: '카페에 가요?', en: 'Are you going to the café?', blank: '카페', alts: ['식당', '마트', '공원'] },
        { ko: '식당에 가요.', en: "I'm going to a restaurant.", blank: '식당', alts: ['카페', '은행', '도서관'] },
        { ko: '저도 도서관에 가요.', en: "I'm going to the library too." }
    ]
});

KG.unit({
    id: 'a1-08',
    level: 'A1',
    title: 'What Are You Doing?',
    ko: '뭐 해요?',
    icon: '📺',
    goal: 'Say what people are doing with present-tense verbs and the object particle 을/를.',
    vocab: [
        { ko: '하다', en: 'to do', emoji: '🙌', pos: 'verb', polite: '해요' },
        { ko: '먹다', en: 'to eat', emoji: '🍴', pos: 'verb', polite: '먹어요' },
        { ko: '마시다', en: 'to drink', emoji: '🥤', pos: 'verb', polite: '마셔요' },
        { ko: '보다', en: 'to see / to watch', emoji: '👀', pos: 'verb', polite: '봐요' },
        { ko: '읽다', en: 'to read', emoji: '📖', pos: 'verb', polite: '읽어요' },
        { ko: '듣다', en: 'to listen', emoji: '🎧', pos: 'verb', polite: '들어요', note: 'Irregular: ㄷ becomes ㄹ before a vowel.' },
        { ko: '공부하다', en: 'to study', emoji: '✏️', pos: 'verb', polite: '공부해요' },
        { ko: '운동하다', en: 'to exercise', emoji: '🏋️', pos: 'verb', polite: '운동해요' },
        { ko: '자다', en: 'to sleep', emoji: '😴', pos: 'verb', polite: '자요' },
        { ko: '만나다', en: 'to meet', emoji: '👫', pos: 'verb', polite: '만나요' },
        { ko: '텔레비전', en: 'TV', emoji: '📺', pos: 'noun' },
        { ko: '음악', en: 'music', emoji: '🎵', pos: 'noun' },
        { ko: '아이스크림', en: 'ice cream', emoji: '🍦', pos: 'noun' },
        { ko: '축구', en: 'soccer', emoji: '⚽', pos: 'noun' }
    ],
    story: {
        title: 'A Lazy Saturday',
        scenes: [
            {
                img: 'a1-08-1',
                art: "A sunny, relaxed weekend morning. Alex stands at the open front door of the family's apartment, holding a bag of fruit and waving. Jian, still in pajamas, has opened the door for him.",
                lines: [
                    { sp: 'narrator', ko: '알렉스가 민지 집에 와요.', en: "Alex comes to Minji's home." },
                    { sp: 'alex', ko: '안녕하세요! 모두 뭐 해요?', en: 'Hello! What is everyone doing?' }
                ]
            },
            {
                img: 'a1-08-2',
                art: 'Grandma sits in a comfy armchair by the window reading a thick book through her round glasses. She looks up and smiles warmly at Alex.',
                lines: [
                    { sp: 'narrator', ko: '할머니는 책을 읽어요.', en: 'Grandma is reading a book.' },
                    { sp: 'halmeoni', ko: '알렉스, 어서 와요!', en: 'Alex, welcome!' }
                ]
            },
            {
                img: 'a1-08-3',
                art: 'Junho lies stretched out on the sofa in a T-shirt and sweatpants, watching a soccer match on a big TV (players and a green field, no writing on screen). He waves lazily at Alex without looking away.',
                lines: [
                    { sp: 'alex', ko: '준호 씨, 뭐 해요?', en: 'Junho, what are you doing?' },
                    { sp: 'junho', ko: '텔레비전을 봐요. 축구예요!', en: "I'm watching TV. It's soccer!" }
                ]
            },
            {
                img: 'a1-08-4',
                art: 'Jian sits cross-legged on the living-room floor licking a huge ice-cream cone. Next to him, Nabi the cat sleeps curled up in a patch of sunlight. Alex crouches nearby, smiling at Jian.',
                lines: [
                    { sp: 'alex', ko: '지안이는 뭐 해요?', en: 'What are you doing, Jian?' },
                    { sp: 'jian', ko: '아이스크림을 먹어요!', en: "I'm eating ice cream!" },
                    { sp: 'narrator', ko: '나비는 자요.', en: 'Nabi is sleeping.' }
                ],
                check: { q: '나비는 뭐 해요?', en: 'What is Nabi doing?', options: ['먹어요', '자요', '봐요'], answer: 1 }
            },
            {
                img: 'a1-08-5',
                art: 'In her bedroom, Minji sits at her desk with an open notebook and textbook, wearing big headphones and writing. Musical notes float around her head. Alex peeks in at the door.',
                lines: [
                    { sp: 'alex', ko: '민지 씨는 뭐 해요?', en: 'Minji, what are you doing?' },
                    { sp: 'minji', ko: '공부해요.', en: "I'm studying." },
                    { sp: 'narrator', ko: '민지는 음악을 들어요.', en: 'Minji is listening to music.' }
                ],
                check: { q: '민지는 뭐 해요?', en: 'What is Minji doing?', options: ['공부해요', '운동해요', '자요'], answer: 0 }
            },
            {
                img: 'a1-08-6',
                art: 'Minji takes off her headphones and turns to Alex with a curious look. Alex grins and points at Minji.',
                lines: [
                    { sp: 'minji', ko: '알렉스 씨는 뭐 해요?', en: 'What about you, Alex? What are you doing?' },
                    { sp: 'alex', ko: '저는 친구를 만나요. 민지 씨를 만나요!', en: "I'm meeting a friend. I'm meeting you, Minji!" }
                ]
            },
            {
                img: 'a1-08-7',
                art: 'The living room. Junho has turned off the TV and leads a stretching workout; Minji, Alex and Jian copy him, arms up high. Grandma sits in her armchair drinking a cup of tea and laughing. Nabi the cat stretches too.',
                lines: [
                    { sp: 'junho', ko: '자, 우리 운동해요!', en: "Okay, let's exercise!" },
                    { sp: 'narrator', ko: '모두 운동해요. 할머니는 차를 마셔요.', en: 'Everyone exercises. Grandma drinks tea.' }
                ],
                check: { q: '할머니는 뭐 해요?', en: 'What is Grandma doing?', options: ['운동해요', '차를 마셔요', '자요'], answer: 1 }
            }
        ]
    },
    patterns: [
        {
            form: 'V-아요 / -어요 / -해요',
            meaning: 'present tense, polite (I do / I am doing)',
            note: 'Drop 다 to get the stem. Last vowel ㅏ or ㅗ → add 아요: 보다 → 봐요, 만나다 → 만나요, 자다 → 자요 (ㅏ + 아 merge). Any other vowel → add 어요: 먹다 → 먹어요, 읽다 → 읽어요, 마시다 → 마셔요. Every 하다 verb → 해요: 공부해요, 운동해요. The same form can ask a question (뭐 해요?) or make a suggestion (우리 운동해요!).',
            examples: [
                { ko: '텔레비전을 봐요.', en: "I'm watching TV." },
                { ko: '아이스크림을 먹어요.', en: "I'm eating ice cream." },
                { ko: '공부해요.', en: "I'm studying." }
            ]
        },
        {
            form: 'N + 을 / 를',
            meaning: 'object marker — what you eat, watch, read…',
            note: 'Use 을 after a consonant (책을, 음악을) and 를 after a vowel (차를, 친구를). In casual speech it is often dropped: 밥 먹어요.',
            examples: [
                { ko: '책을 읽어요.', en: "I'm reading a book." },
                { ko: '차를 마셔요.', en: "I'm drinking tea." },
                { ko: '친구를 만나요.', en: "I'm meeting a friend." }
            ]
        },
        {
            form: '듣다 → 들어요',
            meaning: 'ㄷ irregular verb',
            note: 'A few verbs whose stem ends in ㄷ change it to ㄹ before a vowel: 듣다 → 들어요 (not 듣어요).',
            examples: [
                { ko: '음악을 들어요.', en: "I'm listening to music." }
            ]
        }
    ],
    sentences: [
        { ko: '뭐 해요?', en: 'What are you doing?', blank: '해요', alts: ['하요', '하어요', '했요'] },
        { ko: '책을 읽어요.', en: "I'm reading a book.", blank: '을', alts: ['를', '이', '에'] },
        { ko: '차를 마셔요.', en: "I'm drinking tea.", blank: '를', alts: ['을', '가', '에'] },
        { ko: '텔레비전을 봐요.', en: "I'm watching TV.", blank: '봐요', alts: ['보요', '봐어요', '보해요'] },
        { ko: '아이스크림을 먹어요.', en: "I'm eating ice cream.", blank: '먹어요', alts: ['먹아요', '먹요', '마셔요'] },
        { ko: '음악을 들어요.', en: "I'm listening to music.", blank: '들어요', alts: ['듣어요', '들아요', '듣요'] },
        { ko: '민지는 공부해요.', en: 'Minji is studying.', blank: '공부해요', alts: ['공부하요', '공부하어요', '운동해요'] },
        { ko: '친구를 만나요.', en: "I'm meeting a friend.", blank: '만나요', alts: ['만나아요', '만너요', '만나어요'] },
        { ko: '나비는 자요.', en: 'Nabi is sleeping.', blank: '자요', alts: ['자아요', '자어요', '먹어요'] },
        { ko: '우리 운동해요!', en: "Let's exercise!", blank: '운동해요', alts: ['운동하요', '공부해요', '운동요'] },
        { ko: '준호는 축구를 봐요.', en: 'Junho is watching soccer.', blank: '를', alts: ['을', '에', '이'] },
        { ko: '할머니는 책을 읽어요.', en: 'Grandma is reading a book.' }
    ]
});

KG.unit({
    id: 'a1-09',
    level: 'A1',
    title: 'What Time Is It?',
    ko: '몇 시예요?',
    icon: '⏰',
    goal: 'Tell the time and say when you get up, have class, eat and sleep.',
    vocab: [
        { ko: '시', en: "o'clock / hour", emoji: '⏰', pos: 'noun', note: 'Native numbers in short form: 한 시, 두 시, 세 시, 네 시 … 열두 시.' },
        { ko: '분', en: 'minute', emoji: '⏱️', pos: 'noun', note: 'Sino-Korean numbers: 오 분, 십오 분.' },
        { ko: '반', en: 'half (past)', emoji: '🕧', pos: 'noun' },
        { ko: '지금', en: 'now', emoji: '⌚', pos: 'other' },
        { ko: '아침', en: 'morning / breakfast', emoji: '🌅', pos: 'noun' },
        { ko: '점심', en: 'midday / lunch', emoji: '🌞', pos: 'noun' },
        { ko: '저녁', en: 'evening / dinner', emoji: '🌆', pos: 'noun' },
        { ko: '밤', en: 'night', emoji: '🌙', pos: 'noun' },
        { ko: '일어나다', en: 'to get up', emoji: '🥱', pos: 'verb', polite: '일어나요' },
        { ko: '수업', en: 'class / lesson', emoji: '📝', pos: 'noun' },
        { ko: '끝나다', en: 'to end / be over', emoji: '🏁', pos: 'verb', polite: '끝나요' },
        { ko: '한국어', en: 'Korean (language)', emoji: '🗣️', pos: 'noun' },
        { ko: '죄송해요', en: "I'm sorry (polite)", emoji: '🙇', pos: 'expr' }
    ],
    story: {
        title: "Alex's Day",
        extras: "Alex's Korean teacher is a Korean woman in her forties with a neat low bun, a navy blazer over a white blouse and small pearl earrings. Every clock in the story is a plain analog clock with hands and no numbers or letters, or a digital clock showing only digits.",
        scenes: [
            {
                img: 'a1-09-1',
                art: "Alex's small dormitory room in early morning sunlight. A round alarm clock on the nightstand clearly shows seven o'clock (short hand on 7, long hand on 12). Alex sits up in bed stretching and yawning, his curly hair messy.",
                lines: [
                    { sp: 'narrator', ko: '아침 일곱 시예요.', en: "It's seven in the morning." },
                    { sp: 'narrator', ko: '알렉스는 일어나요.', en: 'Alex gets up.' }
                ],
                check: { q: '몇 시예요?', en: 'What time is it?', options: ['일곱 시', '여덟 시', '열 시'], answer: 0 }
            },
            {
                img: 'a1-09-2',
                art: 'Alex sits at a small table in his dorm room eating toast and drinking a glass of milk. A wall clock shows half past seven (short hand between 7 and 8, long hand on 6).',
                lines: [
                    { sp: 'narrator', ko: '일곱 시 반이에요.', en: "It's half past seven." },
                    { sp: 'alex', ko: '아침을 먹어요. 빵하고 우유!', en: "I'm eating breakfast. Bread and milk!" }
                ]
            },
            {
                img: 'a1-09-3',
                art: 'A university classroom. The wall clock shows five past nine. Alex bursts in through the door, out of breath, his red backpack half open. Minji is already seated. The teacher stands at the front with her arms crossed, smiling a little.',
                lines: [
                    { sp: 'narrator', ko: '아홉 시에 수업이 있어요.', en: 'There is class at nine.' },
                    { sp: 'staffF', as: '선생님', ko: '알렉스 씨, 지금 몇 시예요?', en: 'Alex, what time is it now?' },
                    { sp: 'alex', ko: '아홉 시 오 분이에요. 죄송해요!', en: "It's 9:05. I'm sorry!" }
                ],
                check: { q: '지금 몇 시예요?', en: 'What time is it now?', options: ['아홉 시', '아홉 시 오 분', '열 시'], answer: 1 }
            },
            {
                img: 'a1-09-4',
                art: 'A busy university cafeteria. A wall clock shows half past twelve. Minji and Alex carry trays with rice, soup and side dishes and look for seats.',
                lines: [
                    { sp: 'narrator', ko: '열두 시 반이에요.', en: "It's half past twelve." },
                    { sp: 'minji', ko: '알렉스 씨, 점심 먹어요!', en: "Alex, let's have lunch!" }
                ],
                check: { q: '몇 시에 점심을 먹어요?', en: 'What time do they eat lunch?', options: ['열한 시', '열두 시 반', '한 시'], answer: 1 }
            },
            {
                img: 'a1-09-5',
                art: 'The classroom in the afternoon. The wall clock shows a quarter past three. Students pack their bags. Alex stretches his arms up with a big happy smile. Minji laughs.',
                lines: [
                    { sp: 'narrator', ko: '세 시 십오 분에 수업이 끝나요.', en: 'Class ends at 3:15.' },
                    { sp: 'alex', ko: '와! 집에 가요!', en: "Yay! I'm going home!" }
                ]
            },
            {
                img: 'a1-09-6',
                art: 'Evening in the dorm room, the sky dark blue outside. A digital desk clock shows only 8:00. Alex eats a cup of ramen while looking at an open Korean textbook full of pictures.',
                lines: [
                    { sp: 'narrator', ko: '저녁 여덟 시예요.', en: "It's eight in the evening." },
                    { sp: 'alex', ko: '라면을 먹어요. 한국어를 공부해요!', en: "I'm eating ramen. I'm studying Korean!" }
                ]
            },
            {
                img: 'a1-09-7',
                art: "Night. The moon and stars shine through the dorm window. The alarm clock shows eleven o'clock. Alex yawns hugely in bed, pulling the blanket up, the textbook closed on the nightstand.",
                lines: [
                    { sp: 'narrator', ko: '밤 열한 시예요.', en: "It's eleven at night." },
                    { sp: 'alex', ko: '아, 열한 시예요! 자요.', en: "Oh, it's eleven! Time for bed." }
                ],
                check: { q: '알렉스는 몇 시에 자요?', en: 'What time does Alex go to sleep?', options: ['아홉 시', '열한 시', '열두 시'], answer: 1 }
            }
        ]
    },
    patterns: [
        {
            form: 'native number + 시, Sino number + 분',
            meaning: 'telling the time',
            note: 'Hours use native numbers in their short form: 한 시, 두 시, 세 시, 네 시, 다섯 시 … 열한 시, 열두 시. Minutes use Sino-Korean numbers: 오 분, 십오 분, 삼십 분. Half past is 반: 일곱 시 반.',
            examples: [
                { ko: '지금 몇 시예요?', en: 'What time is it now?' },
                { ko: '아홉 시 오 분이에요.', en: "It's 9:05." },
                { ko: '열두 시 반이에요.', en: "It's 12:30." }
            ]
        },
        {
            form: 'time + 에',
            meaning: 'at (a time)',
            note: 'Put 에 after a time to say when something happens: 일곱 시에 일어나요. 아침, 저녁 or 밤 can go in front: 밤 열한 시에 자요. Do not use 에 after 지금.',
            examples: [
                { ko: '일곱 시에 일어나요.', en: 'I get up at seven.' },
                { ko: '아홉 시에 수업이 있어요.', en: 'I have class at nine.' },
                { ko: '수업이 세 시에 끝나요.', en: 'Class ends at three.' }
            ]
        },
        {
            form: '아침 / 점심 / 저녁',
            meaning: 'morning / midday / evening — and the meals',
            note: "The same words name the meals: 아침을 먹어요 = I eat breakfast, 점심 먹어요! = Let's eat lunch!",
            examples: [
                { ko: '아침을 먹어요.', en: 'I eat breakfast.' },
                { ko: '저녁 여덟 시예요.', en: "It's eight in the evening." }
            ]
        }
    ],
    sentences: [
        { ko: '지금 몇 시예요?', en: 'What time is it now?', blank: '몇', alts: ['뭐', '어디', '얼마'] },
        { ko: '일곱 시에 일어나요.', en: 'I get up at seven.', blank: '일곱', alts: ['칠', '여덟', '일'] },
        { ko: '아홉 시 오 분이에요.', en: "It's 9:05.", blank: '오', alts: ['다섯', '오십', '구'] },
        { ko: '열두 시 반이에요.', en: "It's 12:30.", blank: '반', alts: ['분', '시', '삼십'] },
        { ko: '수업이 세 시에 끝나요.', en: 'Class ends at three.', blank: '세', alts: ['셋', '삼', '네'] },
        { ko: '아홉 시에 수업이 있어요.', en: 'I have class at nine.', blank: '에', alts: ['를', '은', '가'] },
        { ko: '밤 열한 시에 자요.', en: 'I go to bed at 11 p.m.', blank: '밤', alts: ['아침', '점심', '저녁'] },
        { ko: '아침을 먹어요.', en: 'I eat breakfast.', blank: '아침', alts: ['저녁', '점심', '밤'] },
        { ko: '두 시 십오 분이에요.', en: "It's 2:15.", blank: '십오', alts: ['열다섯', '오십', '십'] },
        { ko: '수업이 끝나요.', en: 'Class is over.', blank: '끝나요', alts: ['일어나요', '있어요', '자요'] },
        { ko: '저녁 여섯 시예요.', en: "It's six in the evening.", blank: '여섯', alts: ['육', '여덟', '다섯'] },
        { ko: '몇 시에 일어나요?', en: 'What time do you get up?' }
    ]
});

KG.unit({
    id: 'a1-10',
    level: 'A1',
    title: 'Where Is Nabi?',
    ko: '나비는 어디에 있어요?',
    icon: '🐈',
    goal: 'Say where things are with on, under, in front of, behind, next to and inside.',
    vocab: [
        { ko: '위', en: 'on / above / top', emoji: '⬆️', pos: 'noun' },
        { ko: '아래', en: 'under / below', emoji: '⬇️', pos: 'noun', note: '밑 means the same: 침대 밑 = under the bed.', forms: ['밑'] },
        { ko: '앞', en: 'in front of', emoji: '⏩', pos: 'noun' },
        { ko: '뒤', en: 'behind / back', emoji: '⏪', pos: 'noun' },
        { ko: '옆', en: 'next to / beside', emoji: '↔️', pos: 'noun' },
        { ko: '안', en: 'inside / in', emoji: '📥', pos: 'noun' },
        { ko: '침대', en: 'bed', emoji: '🛏️', pos: 'noun' },
        { ko: '소파', en: 'sofa', emoji: '🛋️', pos: 'noun' },
        { ko: '상자', en: 'box', emoji: '📦', pos: 'noun' },
        { ko: '냉장고', en: 'refrigerator', emoji: '🧊', pos: 'noun' },
        { ko: '창문', en: 'window', emoji: '🪟', pos: 'noun' },
        { ko: '찾다', en: 'to look for / to find', emoji: '🔍', pos: 'verb', polite: '찾아요' },
        { ko: '모르다', en: 'to not know', emoji: '🤷', pos: 'verb', polite: '몰라요', note: "Irregular: 모르다 → 몰라요 (I don't know)." }
    ],
    story: {
        title: 'Hide-and-Seek with Nabi',
        scenes: [
            {
                img: 'a1-10-1',
                art: "The family living room. Jian stands in the middle holding Nabi's empty food bowl and a feather toy, looking around with a worried face. Grandma sits at the dining table peeling an apple and shrugs.",
                lines: [
                    { sp: 'narrator', ko: '지안은 나비를 찾아요.', en: 'Jian is looking for Nabi.' },
                    { sp: 'jian', ko: '할머니, 나비는 어디에 있어요?', en: 'Grandma, where is Nabi?' },
                    { sp: 'halmeoni', ko: '음... 몰라요.', en: "Hmm... I don't know." }
                ]
            },
            {
                img: 'a1-10-2',
                art: "Jian kneels on the floor and peers under the sofa, where there is only a ball and a sock. Right above him, Nabi the cat sits on top of the sofa's backrest, looking down at him with a smug face.",
                lines: [
                    { sp: 'jian', ko: '소파 아래에 없어요...', en: "She's not under the sofa..." },
                    { sp: 'narrator', ko: '나비는 소파 위에 있어요!', en: 'Nabi is on the sofa!' }
                ],
                check: { q: '나비는 어디에 있어요?', en: 'Where is Nabi?', options: ['소파 위', '소파 아래', '침대 위'], answer: 0 }
            },
            {
                img: 'a1-10-3',
                art: "The kitchen. Jian has opened the refrigerator door and peeks inside at the shelves of food. Grandma laughs behind him. In the narrow gap behind the refrigerator, only Nabi's orange striped tail sticks out.",
                lines: [
                    { sp: 'jian', ko: '냉장고 안에 있어요?', en: 'Is she in the fridge?' },
                    { sp: 'halmeoni', ko: '하하, 아니요! 냉장고 안에 없어요.', en: "Haha, no! She's not in the fridge." },
                    { sp: 'narrator', ko: '나비는 냉장고 뒤에 있어요.', en: 'Nabi is behind the fridge.' }
                ]
            },
            {
                img: 'a1-10-4',
                art: "Jian's bedroom. The bed stands next to a window. Jian pulls the curtain aside and looks at the empty windowsill. Under the bed, in the dark, two glowing cat eyes and a bit of orange fur peek out.",
                lines: [
                    { sp: 'jian', ko: '창문 앞에 없어요...', en: "She's not by the window..." },
                    { sp: 'narrator', ko: '나비는 침대 밑에 있어요.', en: 'Nabi is under the bed.' }
                ],
                check: { q: '나비는 어디에 있어요?', en: 'Where is Nabi?', options: ['침대 위', '침대 밑', '창문 앞'], answer: 1 }
            },
            {
                img: 'a1-10-5',
                art: 'The living room. Junho sits on the sofa typing on a laptop, completely focused. Right beside him on the sofa, Nabi the cat sits pressed against his arm. Jian stands in front of them, hands on his hips.',
                lines: [
                    { sp: 'jian', ko: '형, 나비는 어디에 있어요?', en: 'Where is Nabi?' },
                    { sp: 'junho', ko: '음? 몰라요.', en: "Hm? I don't know." },
                    { sp: 'narrator', ko: '나비는 준호 옆에 있어요!', en: 'Nabi is right next to Junho!' }
                ],
                check: { q: '나비는 누구 옆에 있어요?', en: 'Who is Nabi next to?', options: ['준호', '민지', '할머니'], answer: 0 }
            },
            {
                img: 'a1-10-6',
                art: 'Later. A big cardboard delivery box stands in the middle of the living room floor. Two orange cat ears poke out of the top flaps. Jian stands right in front of the box, tiptoeing closer with a big grin.',
                lines: [
                    { sp: 'narrator', ko: '지안은 상자 앞에 있어요.', en: 'Jian is in front of the box.' },
                    { sp: 'jian', ko: '상자 안에 있어요?', en: 'Is she in the box?' }
                ]
            },
            {
                img: 'a1-10-7',
                art: 'Jian opens the flaps of the cardboard box. Nabi the cat sits inside, blinking up at him innocently. Jian laughs and points, and Grandma and Junho come over to look.',
                lines: [
                    { sp: 'jian', ko: '나비야! 여기 있어요!', en: "Nabi! Here she is!" },
                    { sp: 'narrator', ko: '나비는 상자 안에 있어요.', en: 'Nabi is in the box.' }
                ],
                check: { q: '나비는 어디에 있어요?', en: 'Where is Nabi?', options: ['상자 안', '상자 앞', '상자 뒤'], answer: 0 }
            }
        ]
    },
    patterns: [
        {
            form: 'N + 위 / 아래(밑) / 앞 / 뒤 / 옆 / 안 + 에 있어요',
            meaning: 'to be on / under / in front of / behind / next to / in N',
            note: 'Korean puts the place word after the thing: 상자 안 is literally "box inside". Then add 에 있어요: 상자 안에 있어요 = it is in the box. 아래 and 밑 both mean under.',
            examples: [
                { ko: '나비는 소파 위에 있어요.', en: 'Nabi is on the sofa.' },
                { ko: '나비는 침대 밑에 있어요.', en: 'Nabi is under the bed.' },
                { ko: '나비는 준호 옆에 있어요.', en: 'Nabi is next to Junho.' }
            ]
        },
        {
            form: 'N은/는 어디에 있어요? / 없어요',
            meaning: 'Where is N? / N is not there',
            note: '있어요 also means "is (somewhere)". 없어요 means "is not there". 여기 있어요! = Here it is!',
            examples: [
                { ko: '나비는 어디에 있어요?', en: 'Where is Nabi?' },
                { ko: '냉장고 안에 없어요.', en: "She's not in the fridge." },
                { ko: '여기 있어요!', en: 'Here she is!' }
            ]
        }
    ],
    sentences: [
        { ko: '나비는 어디에 있어요?', en: 'Where is Nabi?', blank: '어디', alts: ['뭐', '누구', '몇'] },
        { ko: '나비는 소파 위에 있어요.', en: 'Nabi is on the sofa.', blank: '위', alts: ['아래', '안', '뒤'] },
        { ko: '고양이가 침대 밑에 있어요.', en: 'The cat is under the bed.', blank: '밑', alts: ['위', '앞', '옆'] },
        { ko: '상자 안에 있어요.', en: "It's in the box.", blank: '안', alts: ['앞', '위', '뒤'] },
        { ko: '냉장고 뒤에 있어요.', en: "It's behind the fridge.", blank: '뒤', alts: ['앞', '안', '위'] },
        { ko: '나비는 준호 옆에 있어요.', en: 'Nabi is next to Junho.', blank: '옆', alts: ['안', '위', '밑'] },
        { ko: '지안은 상자 앞에 있어요.', en: 'Jian is in front of the box.', blank: '앞', alts: ['뒤', '안', '밑'] },
        { ko: '소파 아래에 없어요.', en: "It's not under the sofa.", blank: '없어요', alts: ['있어요', '아니에요', '가요'] },
        { ko: '침대 위에 있어요.', en: "It's on the bed.", blank: '에', alts: ['를', '이', '은'] },
        { ko: '우유는 냉장고 안에 있어요.', en: 'The milk is in the fridge.', blank: '냉장고', alts: ['상자', '소파', '침대'] },
        { ko: '창문 앞에 고양이가 있어요.', en: 'There is a cat in front of the window.', blank: '창문', alts: ['침대', '소파', '상자'] },
        { ko: '여기 있어요!', en: "It's here!" }
    ]
});

KG.unit({
    id: 'a1-11',
    level: 'A1',
    title: 'Do You Like Kimchi?',
    ko: '김치 좋아해요?',
    icon: '🥬',
    goal: 'Talk about Korean food, say what you like and dislike, what you do not or cannot eat, and how it tastes.',
    vocab: [
        { ko: '김치', en: 'kimchi', emoji: '🥬', pos: 'noun' },
        { ko: '불고기', en: 'bulgogi (marinated beef)', emoji: '🥩', pos: 'noun' },
        { ko: '떡볶이', en: 'tteokbokki (spicy rice cakes)', emoji: '🍢', pos: 'noun' },
        { ko: '된장찌개', en: 'soybean paste stew', emoji: '🍲', pos: 'noun', forms: ['찌개'] },
        { ko: '밥', en: 'rice / meal', emoji: '🍚', pos: 'noun' },
        { ko: '수박', en: 'watermelon', emoji: '🍉', pos: 'noun' },
        { ko: '요리하다', en: 'to cook', emoji: '🍳', pos: 'verb', polite: '요리해요' },
        { ko: '좋아하다', en: 'to like', emoji: '😍', pos: 'verb', polite: '좋아해요' },
        { ko: '싫어하다', en: 'to dislike / to hate', emoji: '😣', pos: 'verb', polite: '싫어해요' },
        { ko: '맵다', en: 'to be spicy', emoji: '🌶️', pos: 'adj', polite: '매워요', note: 'Irregular: ㅂ becomes 우 before a vowel (맵 + 어요 → 매워요).' },
        { ko: '달다', en: 'to be sweet', emoji: '🍯', pos: 'adj', polite: '달아요' },
        { ko: '짜다', en: 'to be salty', emoji: '🧂', pos: 'adj', polite: '짜요' },
        { ko: '안', en: 'not (before a verb or adjective)', emoji: '🙅', pos: 'other' },
        { ko: '못', en: "can't (before a verb)", emoji: '⛔', pos: 'other' }
    ],
    story: {
        title: "Dinner at Grandma's",
        extras: 'Every scene takes place at the family dining table in their warm apartment kitchen in the evening, never a restaurant or street stall.',
        scenes: [
            {
                img: 'a1-11-1',
                art: 'Evening in the family kitchen. Grandma, in a flowery apron over her lavender vest, stirs a bubbling pot on the stove. The dining table behind her is full of dishes. Minji leads Alex in through the doorway; Alex sniffs the air happily.',
                lines: [
                    { sp: 'narrator', ko: '할머니가 저녁을 요리해요.', en: 'Grandma is cooking dinner.' },
                    { sp: 'halmeoni', ko: '알렉스, 어서 와요! 밥 먹어요.', en: "Alex, welcome! Let's eat." }
                ]
            },
            {
                img: 'a1-11-2',
                art: 'The dining table seen from above: a bowl of red kimchi, a plate of glossy bulgogi, a bubbling pot of brown doenjang-jjigae, a plate of red tteokbokki and bowls of white rice. Grandma, Junho, Minji, Jian and Alex sit around it. Grandma points at the kimchi and smiles at Alex.',
                lines: [
                    { sp: 'halmeoni', ko: '알렉스, 김치 좋아해요?', en: 'Alex, do you like kimchi?' },
                    { sp: 'alex', ko: '네, 김치 좋아해요!', en: 'Yes, I like kimchi!' }
                ]
            },
            {
                img: 'a1-11-3',
                art: 'Alex has just eaten a red tteokbokki rice cake. His face is bright red, there is sweat on his forehead and he fans his open mouth with his hand. Jian laughs and points at him. Minji hands him a glass of water.',
                lines: [
                    { sp: 'alex', ko: '아, 매워요!', en: "Ah, it's spicy!" },
                    { sp: 'jian', ko: '형, 떡볶이 못 먹어요?', en: "Can't you eat tteokbokki?" },
                    { sp: 'alex', ko: '네... 못 먹어요.', en: "No... I can't." }
                ],
                check: { q: '떡볶이는 매워요?', en: 'Is the tteokbokki spicy?', options: ['네', '아니요'], answer: 0 }
            },
            {
                img: 'a1-11-4',
                art: "Grandma places a piece of bulgogi on top of Alex's bowl of rice with her chopsticks. Alex takes a bite and smiles blissfully, giving a thumbs-up.",
                lines: [
                    { sp: 'halmeoni', ko: '불고기는 안 매워요. 달아요.', en: "Bulgogi isn't spicy. It's sweet." },
                    { sp: 'alex', ko: '와, 맛있어요!', en: "Wow, it's delicious!" }
                ]
            },
            {
                img: 'a1-11-5',
                art: 'Jian pushes the kimchi bowl away with both hands, making a disgusted face. Grandma looks at him with raised eyebrows. Beside him, Alex happily eats a big piece of kimchi.',
                lines: [
                    { sp: 'halmeoni', ko: '지안이는 김치 안 먹어요?', en: "Jian, aren't you eating the kimchi?" },
                    { sp: 'jian', ko: '네, 김치 싫어해요!', en: 'No, I hate kimchi!' },
                    { sp: 'alex', ko: '저는 김치 좋아해요!', en: 'I like kimchi!' }
                ],
                check: { q: '지안은 김치를 좋아해요?', en: 'Does Jian like kimchi?', options: ['네', '아니요'], answer: 1 }
            },
            {
                img: 'a1-11-6',
                art: 'A single moment at the home dining table: Alex tastes a spoonful of brown doenjang-jjigae and nods with a pleased, surprised face, while Grandma watches him kindly. One picture, not a comic strip.',
                lines: [
                    { sp: 'alex', ko: '된장찌개는 짜요?', en: 'Is the soybean paste stew salty?' },
                    { sp: 'halmeoni', ko: '아니요, 안 짜요.', en: "No, it's not salty." },
                    { sp: 'alex', ko: '음, 안 짜요. 맛있어요!', en: "Mmm, it's not salty. It's delicious!" }
                ]
            },
            {
                img: 'a1-11-7',
                art: 'After dinner, everyone eats triangle slices of red watermelon. Alex bows his head to Grandma with a big smile, and Grandma beams. Nabi the cat sleeps on an empty chair.',
                lines: [
                    { sp: 'narrator', ko: '수박은 달아요.', en: 'The watermelon is sweet.' },
                    { sp: 'alex', ko: '할머니, 감사합니다! 맛있어요!', en: "Thank you, Grandma! It's delicious!" }
                ],
                check: { q: '수박은 매워요?', en: 'Is the watermelon spicy?', options: ['네', '아니요'], answer: 1 }
            }
        ]
    },
    patterns: [
        {
            form: '안 + verb / adjective',
            meaning: "not (don't / isn't)",
            note: '안 goes right before the verb or adjective: 안 매워요, 안 먹어요. With noun + 하다 verbs it goes before 하다: 공부 안 해요. 좋아하다 is one word, so: 안 좋아해요.',
            examples: [
                { ko: '불고기는 안 매워요.', en: "Bulgogi isn't spicy." },
                { ko: '지안이는 김치 안 먹어요?', en: "Jian, aren't you eating the kimchi?" },
                { ko: '김치는 안 좋아해요.', en: "I don't like kimchi." }
            ]
        },
        {
            form: '못 + verb',
            meaning: "can't (unable to)",
            note: "못 means you are not able to, even if you want to. 안 먹어요 = I don't eat it (my choice). 못 먹어요 = I can't eat it. 못 먹어요 is pronounced 몬머거요. Answering a negative question, 네 agrees with it: 못 먹어요? → 네, 못 먹어요.",
            examples: [
                { ko: '떡볶이 못 먹어요.', en: "I can't eat tteokbokki." },
                { ko: '형, 떡볶이 못 먹어요?', en: "Can't you eat tteokbokki?" }
            ]
        },
        {
            form: 'N(을/를) 좋아해요 / 싫어해요 · 매워요 / 달아요 / 짜요',
            meaning: 'I like / dislike N · it is spicy / sweet / salty',
            note: 'In speech 을/를 is often dropped: 김치 좋아해요? 맵다 is irregular: 매워요. 달다 → 달아요, 짜다 → 짜요.',
            examples: [
                { ko: '김치 좋아해요?', en: 'Do you like kimchi?' },
                { ko: '지안은 김치를 싫어해요.', en: 'Jian hates kimchi.' },
                { ko: '수박은 달아요.', en: 'Watermelon is sweet.' }
            ]
        }
    ],
    sentences: [
        { ko: '김치 좋아해요?', en: 'Do you like kimchi?', blank: '좋아해요', alts: ['좋아하요', '싫어해요', '매워요'] },
        { ko: '떡볶이는 매워요.', en: 'Tteokbokki is spicy.', blank: '매워요', alts: ['맵어요', '매와요', '달아요'] },
        { ko: '불고기는 안 매워요.', en: "Bulgogi isn't spicy.", blank: '안', alts: ['못', '도', '를'] },
        { ko: '떡볶이 못 먹어요.', en: "I can't eat tteokbokki.", blank: '못', alts: ['안', '네', '도'] },
        { ko: '지안은 김치를 싫어해요.', en: 'Jian hates kimchi.', blank: '싫어해요', alts: ['좋아해요', '싫어하요', '매워요'] },
        { ko: '수박은 달아요.', en: 'Watermelon is sweet.', blank: '달아요', alts: ['다라요', '달어요', '짜요'] },
        { ko: '된장찌개가 안 짜요.', en: "The soybean paste stew isn't salty.", blank: '짜요', alts: ['짜아요', '짜어요', '달아요'] },
        { ko: '저는 고기를 안 먹어요.', en: "I don't eat meat.", blank: '고기', alts: ['김치', '수박', '밥'] },
        { ko: '불고기를 좋아해요.', en: 'I like bulgogi.', blank: '를', alts: ['을', '이', '에'] },
        { ko: '할머니가 요리해요.', en: 'Grandma is cooking.', blank: '요리해요', alts: ['요리하요', '먹어요', '운동해요'] },
        { ko: '김치는 안 좋아해요.', en: "I don't like kimchi.", blank: '안', alts: ['못', '도', '를'] },
        { ko: '와, 맛있어요!', en: "Wow, it's delicious!" }
    ]
});

KG.unit({
    id: 'a1-12',
    level: 'A1',
    title: 'Weekend Plans',
    ko: '주말에 뭐 해요?',
    icon: '🍗',
    goal: 'Name the days of the week, make weekend plans, and say where things happen with 에서.',
    vocab: [
        { ko: '월요일', en: 'Monday', emoji: '🌙', pos: 'noun', note: '월 = moon.' },
        { ko: '화요일', en: 'Tuesday', emoji: '🔥', pos: 'noun', note: '화 = fire.' },
        { ko: '수요일', en: 'Wednesday', emoji: '💧', pos: 'noun', note: '수 = water.' },
        { ko: '목요일', en: 'Thursday', emoji: '🌳', pos: 'noun', note: '목 = wood / tree.' },
        { ko: '금요일', en: 'Friday', emoji: '🪙', pos: 'noun', note: '금 = metal / gold.' },
        { ko: '토요일', en: 'Saturday', emoji: '⛰️', pos: 'noun', note: '토 = earth.' },
        { ko: '일요일', en: 'Sunday', emoji: '☀️', pos: 'noun', note: '일 = sun.' },
        { ko: '주말', en: 'weekend', emoji: '🎉', pos: 'noun' },
        { ko: '오늘', en: 'today', emoji: '📅', pos: 'noun' },
        { ko: '내일', en: 'tomorrow', emoji: '🔜', pos: 'noun' },
        { ko: '같이', en: 'together', emoji: '👯', pos: 'other' },
        { ko: '그리고', en: 'and (then) — joins sentences', emoji: '🔗', pos: 'other' },
        { ko: '치킨', en: 'fried chicken', emoji: '🍗', pos: 'noun' },
        { ko: '소풍', en: 'picnic / outing', emoji: '🍱', pos: 'noun', note: '소풍 가요 = to go on a picnic.' }
    ],
    story: {
        title: 'Picnic by the Han River',
        extras: 'The chicken delivery man is a young Korean man in a red helmet and a red windbreaker, riding a small white scooter with a delivery box on the back (no logos or letters). Other picnickers in the park are small, distant background figures.',
        scenes: [
            {
                img: 'a1-12-1',
                art: 'Friday afternoon. Minji and Alex walk out of a red-brick university building with their bags, relaxed and smiling. Minji turns to Alex with a curious look.',
                lines: [
                    { sp: 'narrator', ko: '오늘은 금요일이에요.', en: 'Today is Friday.' },
                    { sp: 'minji', ko: '알렉스 씨, 주말에 뭐 해요?', en: 'Alex, what are you doing this weekend?' },
                    { sp: 'alex', ko: '토요일에 도서관에서 공부해요.', en: "On Saturday I'm studying at the library." }
                ]
            },
            {
                img: 'a1-12-2',
                art: 'Minji shows Alex a photo on her phone: a wide river with a long bridge, green grass and people on picnic mats eating fried chicken (no text). Alex looks at it with sparkling eyes.',
                lines: [
                    { sp: 'minji', ko: '일요일에 한강 공원에 소풍 가요. 같이 가요!', en: "On Sunday we're going on a picnic at Han River Park. Come with us!" },
                    { sp: 'alex', ko: '네, 좋아요!', en: 'Yes, sounds good!' }
                ],
                check: { q: '일요일에 어디 가요?', en: 'Where are they going on Sunday?', options: ['한강 공원', '학교', '마트'], answer: 0 }
            },
            {
                img: 'a1-12-3',
                art: 'Sunday at Han River Park in Seoul: a wide blue river, a long bridge, green lawns and a sunny sky. Minji, Junho, Jian and Alex spread out a big checkered picnic mat on the grass. Jian runs ahead with his arms wide open.',
                lines: [
                    { sp: 'narrator', ko: '일요일이에요. 여기는 한강 공원이에요.', en: 'It is Sunday. This is Han River Park.' },
                    { sp: 'jian', ko: '와, 한강이에요!', en: "Wow, it's the Han River!" }
                ]
            },
            {
                img: 'a1-12-4',
                art: 'The delivery man parks his scooter at the edge of the lawn and hands two boxes of fried chicken to Junho. Minji, Jian and Alex cheer on the picnic mat. Steam rises from the crispy chicken.',
                lines: [
                    { sp: 'staffM', as: '배달원', ko: '치킨 여기 있어요!', en: "Here's your chicken!" },
                    { sp: 'junho', ko: '감사합니다!', en: 'Thank you!' },
                    { sp: 'narrator', ko: '모두 한강 공원에서 치킨을 먹어요.', en: 'Everyone eats chicken at Han River Park.' }
                ],
                check: { q: '어디에서 치킨을 먹어요?', en: 'Where do they eat chicken?', options: ['한강 공원', '집', '식당'], answer: 0 }
            },
            {
                img: 'a1-12-5',
                art: 'On the grass, Alex and Jian kick a soccer ball to each other, laughing. On the picnic mat, Junho lies fast asleep with a cap over his face. Minji sits beside him reading a book.',
                lines: [
                    { sp: 'narrator', ko: '알렉스하고 지안은 공원에서 축구를 해요.', en: 'Alex and Jian play soccer in the park.' },
                    { sp: 'narrator', ko: '그리고 준호는 자요!', en: 'And Junho is sleeping!' }
                ],
                check: { q: '준호는 뭐 해요?', en: 'What is Junho doing?', options: ['축구를 해요', '자요', '책을 읽어요'], answer: 1 }
            },
            {
                img: 'a1-12-6',
                art: 'Sunset over the river, the sky orange and pink. Junho sits up and stretches with a gloomy face. Minji laughs at him. Alex and Jian sit nearby eating the last pieces of chicken.',
                lines: [
                    { sp: 'junho', ko: '아, 내일은 월요일이에요...', en: 'Ugh, tomorrow is Monday...' },
                    { sp: 'minji', ko: '오빠, 월요일 싫어해요?', en: 'Do you hate Mondays?' },
                    { sp: 'junho', ko: '네, 싫어해요!', en: 'Yes, I hate them!' }
                ]
            },
            {
                img: 'a1-12-7',
                art: 'Evening by the river. The bridge lights up in rainbow colors. Minji, Junho, Jian and Alex sit together on the picnic mat raising chicken drumsticks and paper cups in a cheerful toast.',
                lines: [
                    { sp: 'alex', ko: '우리 토요일에도 같이 와요!', en: "Let's come here together on Saturday too!" },
                    { sp: 'minji', ko: '좋아요!', en: 'Sounds good!' },
                    { sp: 'jian', ko: '치킨도 같이 먹어요!', en: "And let's eat chicken together too!" }
                ]
            }
        ]
    },
    patterns: [
        {
            form: 'day / 주말 + 에',
            meaning: 'on (a day)',
            note: 'Every day ends in 요일 (day of the week): 월 moon, 화 fire, 수 water, 목 wood, 금 metal, 토 earth, 일 sun. Add 에 for "on": 토요일에, 주말에. Do not add 에 to 오늘 or 내일.',
            examples: [
                { ko: '주말에 뭐 해요?', en: 'What are you doing on the weekend?' },
                { ko: '일요일에 한강 공원에 가요.', en: "On Sunday I'm going to Han River Park." },
                { ko: '내일은 월요일이에요.', en: 'Tomorrow is Monday.' }
            ]
        },
        {
            form: 'place + 에서 + action',
            meaning: 'at / in a place (where something happens)',
            note: 'Use 에 for where you go (공원에 가요) and where something is (집에 있어요). Use 에서 for where you DO something: 공원에서 축구를 해요, 도서관에서 공부해요.',
            examples: [
                { ko: '토요일에 도서관에서 공부해요.', en: 'On Saturday I study at the library.' },
                { ko: '한강 공원에서 치킨을 먹어요.', en: 'We eat chicken at Han River Park.' }
            ]
        },
        {
            form: '같이 / 그리고',
            meaning: 'together / and (between sentences)',
            note: "같이 + verb in 해요 form makes a friendly suggestion: 같이 가요! = Let's go together! 그리고 (and) starts a new sentence. Use 하고 between nouns and 그리고 between sentences.",
            examples: [
                { ko: '같이 가요!', en: "Let's go together!" },
                { ko: '축구를 해요. 그리고 치킨을 먹어요.', en: 'We play soccer. And we eat chicken.' }
            ]
        }
    ],
    sentences: [
        { ko: '주말에 뭐 해요?', en: 'What are you doing on the weekend?', blank: '주말', alts: ['아침', '지금', '내일'] },
        { ko: '토요일에 도서관에서 공부해요.', en: 'On Saturday I study at the library.', blank: '에서', alts: ['에', '를', '은'] },
        { ko: '한강 공원에서 치킨을 먹어요.', en: 'We eat chicken at Han River Park.', blank: '에서', alts: ['에', '을', '가'] },
        { ko: '일요일에 공원에 가요.', en: "I'm going to the park on Sunday.", blank: '일요일', alts: ['월요일', '금요일', '수요일'] },
        { ko: '같이 가요!', en: "Let's go together!", blank: '같이', alts: ['그리고', '하고', '지금'] },
        { ko: '축구를 해요. 그리고 치킨을 먹어요.', en: 'We play soccer. And we eat chicken.', blank: '그리고', alts: ['하고', '같이', '도'] },
        { ko: '월요일에 회사에 가요.', en: 'I go to work on Monday.', blank: '월요일', alts: ['일요일', '토요일', '목요일'] },
        { ko: '내일은 화요일이에요.', en: 'Tomorrow is Tuesday.', blank: '화요일', alts: ['수요일', '목요일', '금요일'] },
        { ko: '수요일에 수업이 있어요.', en: 'I have class on Wednesday.', blank: '에', alts: ['에서', '를', '이'] },
        { ko: '목요일에 친구를 만나요.', en: 'I meet a friend on Thursday.', blank: '목요일', alts: ['화요일', '금요일', '월요일'] },
        { ko: '오늘은 금요일이에요.', en: 'Today is Friday.', blank: '오늘', alts: ['주말', '내일', '아침'] },
        { ko: '공원에서 운동해요.', en: 'I exercise in the park.' }
    ]
});
