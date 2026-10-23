// A2 — Everyday Korean: past and future, wants and abilities, a trip to Busan,
// weather, reasons, shopping, the doctor, the subway, suggestions, comparisons
// and polite honorifics for Grandma's birthday.
KG.level({
    id: 'A2',
    title: 'Everyday Korean',
    ko: '일상 한국어',
    blurb: 'Talk about yesterday and tomorrow, take a trip to Busan, shop, see a doctor, ride the subway and make plans with friends.'
});

KG.unit({
    id: 'a2-01',
    level: 'A2',
    title: 'What Did You Do Yesterday?',
    ko: '어제 뭐 했어요?',
    icon: '📅',
    goal: 'Say what you did yesterday and last weekend with the past tense, and ask how it was.',
    vocab: [
        { ko: '어제', en: 'yesterday', emoji: '📅', pos: 'noun', note: 'No 에 after 어제, 오늘 or 내일.' },
        { ko: '지난 주말', en: 'last weekend', emoji: '🗓️', pos: 'noun', note: '지난 = last, past: 지난주 = last week.' },
        { ko: '하루 종일', en: 'all day long', emoji: '☀️', pos: 'expr' },
        { ko: '청소하다', en: 'to clean', emoji: '🧹', pos: 'verb', polite: '청소해요', forms: ['청소했어요'] },
        { ko: '빨래하다', en: 'to do the laundry', emoji: '🧺', pos: 'verb', polite: '빨래해요', forms: ['빨래도'] },
        { ko: '등산하다', en: 'to go hiking', emoji: '🥾', pos: 'verb', polite: '등산해요', forms: ['등산했어요', '등산은'] },
        { ko: '산', en: 'mountain', emoji: '⛰️', pos: 'noun', forms: ['산이'] },
        { ko: '공원', en: 'park', emoji: '🌳', pos: 'noun' },
        { ko: '놀다', en: 'to play, to hang out', emoji: '🤸', pos: 'verb', polite: '놀아요', forms: ['놀았어요'], note: 'For having fun, not for playing sports or instruments.' },
        { ko: '자다', en: 'to sleep', emoji: '😴', pos: 'verb', polite: '자요', forms: ['잤어요'] },
        { ko: '웃다', en: 'to laugh, to smile', emoji: '😆', pos: 'verb', polite: '웃어요', forms: ['웃었어요'] },
        { ko: '숙제', en: 'homework', emoji: '📝', pos: 'noun', forms: ['숙제했어요', '숙제를'] },
        { ko: '재미있다', en: 'to be fun, to be interesting', emoji: '😄', pos: 'adj', polite: '재미있어요', forms: ['재미있었어요'] },
        { ko: '어땠어요?', en: 'how was it?', emoji: '🤔', pos: 'expr', note: 'The past of 어때요?' }
    ],
    story: {
        title: 'Monday Morning',
        extras: "The teacher is a cheerful Korean woman in her forties with a short wavy brown bob, a navy cardigan over a white blouse and grey trousers. She is not the grandmother. Alex's two hiking friends are young men about his age, one Korean with a black baseball cap, one with dark skin and a blue windbreaker.",
        scenes: [
            {
                img: 'a2-01-1',
                art: 'Monday morning at the university. Students with bags stream into a red-brick building. Minji waves brightly at Alex, who shuffles up yawning, his hair messy and his red backpack hanging off one shoulder.',
                lines: [
                    { sp: 'narrator', ko: '오늘은 월요일이에요.', en: 'Today is Monday.' },
                    { sp: 'narrator', ko: '민지하고 알렉스가 학교에 왔어요.', en: 'Minji and Alex came to school.' }
                ]
            },
            {
                img: 'a2-01-2',
                art: 'Minji and Alex sit side by side at desks in a bright classroom. A big thought bubble above Alex shows him on Saturday walking up a green mountain trail with two friends, all wearing hiking backpacks.',
                lines: [
                    { sp: 'minji', ko: '알렉스 씨, 지난 주말에 뭐 했어요?', en: 'Alex, what did you do last weekend?' },
                    { sp: 'alex', ko: '토요일에 친구들하고 등산했어요.', en: 'On Saturday I went hiking with friends.' }
                ],
                check: { q: '알렉스는 토요일에 뭐 했어요?', en: 'What did Alex do on Saturday?', options: ['등산했어요', '청소했어요', '잤어요'], answer: 0 }
            },
            {
                img: 'a2-01-3',
                art: 'Thought-bubble memory: Alex stands on a rocky mountain top, sweaty but grinning with both arms raised, the city tiny far below. In the classroom, Minji claps her hands, impressed.',
                lines: [
                    { sp: 'minji', ko: '등산은 어땠어요?', en: 'How was the hike?' },
                    { sp: 'alex', ko: '산이 아주 높았어요. 그래도 정말 재미있었어요!', en: 'The mountain was really high. But it was so much fun!' }
                ]
            },
            {
                img: 'a2-01-4',
                art: 'Thought-bubble memory: Minji at home pushing a vacuum cleaner across the living-room floor while Nabi the cat watches from the sofa. A basket of freshly washed laundry sits by the washing machine.',
                lines: [
                    { sp: 'alex', ko: '민지 씨는요? 주말에 뭐 했어요?', en: 'How about you, Minji? What did you do on the weekend?' },
                    { sp: 'minji', ko: '토요일에 집을 청소했어요. 빨래도 했어요.', en: 'On Saturday I cleaned the house. I did the laundry too.' }
                ],
                check: { q: '민지는 토요일에 뭐 했어요?', en: 'What did Minji do on Saturday?', options: ['등산했어요', '청소했어요', '놀았어요'], answer: 1 }
            },
            {
                img: 'a2-01-5',
                art: 'Thought-bubble memory: a sunny Sunday in a green park. Minji and Jian kick a soccer ball on the grass; Jian laughs with his yellow cap on backwards. Grandma sits on a bench nearby, smiling.',
                lines: [
                    { sp: 'minji', ko: '일요일에는 동생하고 공원에 갔어요.', en: 'On Sunday I went to the park with my little brother.' },
                    { sp: 'minji', ko: '공원에서 같이 놀았어요.', en: 'We played together in the park.' }
                ]
            },
            {
                img: 'a2-01-6',
                art: "Thought-bubble memory: Alex fast asleep in bed under a tangled blanket, the sun high outside his window and a wall clock showing two o'clock. In the classroom, Minji laughs with a hand over her mouth.",
                lines: [
                    { sp: 'minji', ko: '알렉스 씨는 어제 뭐 했어요?', en: 'Alex, what did you do yesterday?' },
                    { sp: 'alex', ko: '어제요? 하루 종일 잤어요!', en: 'Yesterday? I slept all day!' },
                    { sp: 'narrator', ko: '민지가 웃었어요.', en: 'Minji laughed.' }
                ],
                check: { q: '알렉스는 어제 뭐 했어요?', en: 'What did Alex do yesterday?', options: ['잤어요', '공부했어요', '등산했어요'], answer: 0 }
            },
            {
                img: 'a2-01-7',
                art: 'The teacher, a woman in her forties holding a stack of papers, stands at the front of the classroom. Alex slaps a hand to his forehead in shock. Minji proudly holds up her finished homework sheet covered in neat lines (no readable writing).',
                lines: [
                    { sp: 'staffF', as: '선생님', ko: '여러분, 숙제했어요?', en: 'Everyone, did you do your homework?' },
                    { sp: 'alex', ko: '아! 저는 숙제를 안 했어요...', en: "Oh no! I didn't do my homework..." }
                ],
                check: { q: '알렉스는 숙제를 했어요?', en: 'Did Alex do his homework?', options: ['네', '아니요'], answer: 1 }
            }
        ]
    },
    patterns: [
        {
            form: 'V/A + 았어요 / 었어요',
            meaning: 'past tense (polite)',
            note: 'Look at the last vowel of the stem. ㅏ or ㅗ → 았어요 (놀다 → 놀았어요, 높다 → 높았어요). Anything else → 었어요 (먹다 → 먹었어요, 웃다 → 웃었어요). Vowels merge: 가 + 았 → 갔, 오 + 았 → 왔, 자 + 았 → 잤, 마시 + 었 → 마셨.',
            examples: [
                { ko: '공원에 갔어요.', en: 'I went to the park.' },
                { ko: '친구를 만났어요.', en: 'I met a friend.' },
                { ko: '밥을 많이 먹었어요.', en: 'I ate a lot.' }
            ]
        },
        {
            form: '하다 → 했어요',
            meaning: 'past tense of 하다 verbs',
            note: 'Every 하다 verb becomes 했어요: 공부하다 → 공부했어요, 청소하다 → 청소했어요. Negative: 안 했어요. 뭐 했어요? = What did you do?',
            examples: [
                { ko: '어제 뭐 했어요?', en: 'What did you do yesterday?' },
                { ko: '토요일에 등산했어요.', en: 'I went hiking on Saturday.' },
                { ko: '숙제를 안 했어요.', en: "I didn't do my homework." }
            ]
        },
        {
            form: '어제 / 지난 주말에',
            meaning: 'when it happened',
            note: '어제 never takes 에. Days and other time words do: 토요일에, 지난 주말에. Add 는 to contrast: 일요일에는 (as for Sunday).',
            examples: [
                { ko: '지난 주말에 뭐 했어요?', en: 'What did you do last weekend?' },
                { ko: '일요일에는 집에서 쉬었어요.', en: 'On Sunday I rested at home.' }
            ]
        }
    ],
    sentences: [
        { ko: '어제 뭐 했어요?', en: 'What did you do yesterday?', blank: '했어요', alts: ['해요', '하고', '하다'] },
        { ko: '지난 주말에 등산했어요.', en: 'I went hiking last weekend.', blank: '지난', alts: ['다음', '내일', '어제'] },
        { ko: '친구를 만났어요.', en: 'I met a friend.', blank: '만났어요', alts: ['만나었어요', '만나요', '만나어요'] },
        { ko: '공원에서 놀았어요.', en: 'I played at the park.', blank: '놀았어요', alts: ['놀었어요', '놀아요', '놀어요'] },
        { ko: '밥을 많이 먹었어요.', en: 'I ate a lot.', blank: '먹었어요', alts: ['먹았어요', '먹어요', '먹었요'] },
        { ko: '집을 청소했어요.', en: 'I cleaned the house.', blank: '했어요', alts: ['하았어요', '해요', '하었어요'] },
        { ko: '하루 종일 잤어요.', en: 'I slept all day.', blank: '잤어요', alts: ['자았어요', '자었어요', '자요'] },
        { ko: '정말 재미있었어요.', en: 'It was really fun.', blank: '있었어요', alts: ['있았어요', '있어요', '있었요'] },
        { ko: '어제 커피를 마셨어요.', en: 'I drank coffee yesterday.', blank: '마셨어요', alts: ['마샀어요', '마셔요', '마셨요'] },
        { ko: '토요일에 빨래했어요.', en: 'I did the laundry on Saturday.', blank: '에', alts: ['을', '는', '가'] },
        { ko: '등산은 어땠어요?', en: 'How was the hike?', blank: '어땠어요', alts: ['어때요', '뭐예요', '얼마예요'] },
        { ko: '저는 숙제를 안 했어요.', en: "I didn't do my homework.", blank: '안', alts: ['도', '네', '뭐'] }
    ]
});

KG.unit({
    id: 'a2-02',
    level: 'A2',
    title: 'Plans for Tomorrow',
    ko: '내일 뭐 할 거예요?',
    icon: '🗺️',
    goal: 'Talk about your plans for tomorrow, next week and the break with -(으)ㄹ 거예요.',
    vocab: [
        { ko: '내일', en: 'tomorrow', emoji: '🌅', pos: 'noun' },
        { ko: '다음 주', en: 'next week', emoji: '⏭️', pos: 'noun', note: '다음 = next: 다음 주말 = next weekend.' },
        { ko: '이번', en: 'this (coming) time', emoji: '👉', pos: 'other', note: '이번 방학 = this break, 이번 주말 = this weekend.' },
        { ko: '방학', en: 'school vacation, break', emoji: '🎒', pos: 'noun' },
        { ko: '휴가', en: 'time off work, vacation', emoji: '🏝️', pos: 'noun', note: 'Students have 방학; workers take 휴가.' },
        { ko: '부산', en: 'Busan (big port city in the south)', emoji: '🌊', pos: 'noun', forms: ['부산이요'] },
        { ko: '아르바이트', en: 'part-time job', emoji: '💼', pos: 'noun', note: 'Often shortened to 알바.' },
        { ko: '쉬다', en: 'to rest', emoji: '🛋️', pos: 'verb', polite: '쉬어요', forms: ['쉴 거예요'] },
        { ko: '바쁘다', en: 'to be busy', emoji: '😵', pos: 'adj', polite: '바빠요', forms: ['바빠요'], note: 'ㅡ drops before 아/어: 바쁘다 → 바빠요.' },
        { ko: '아직', en: 'yet, still', emoji: '⏳', pos: 'other', note: "아직 몰라요 = I don't know yet." },
        { ko: '그럼', en: 'then, in that case', emoji: '➡️', pos: 'other' },
        { ko: '회', en: 'raw fish, sashimi', emoji: '🍣', pos: 'noun', forms: ['회를', '회요'] }
    ],
    story: {
        title: 'The Big Plan',
        scenes: [
            {
                img: 'a2-02-1',
                art: 'Friday afternoon at an outdoor campus café. Minji and Alex sit at a table with iced coffees, their textbooks closed and pushed aside, both stretching and smiling with relief.',
                lines: [
                    { sp: 'narrator', ko: '다음 주는 방학이에요.', en: 'Next week is the break.' },
                    { sp: 'narrator', ko: '민지하고 알렉스는 카페에 있어요.', en: 'Minji and Alex are at a café.' }
                ]
            },
            {
                img: 'a2-02-2',
                art: 'At the café table, Alex scratches his head, unsure. A thought bubble above Minji shows her in an apron behind a café counter, making coffee.',
                lines: [
                    { sp: 'minji', ko: '알렉스 씨, 이번 방학에 뭐 할 거예요?', en: 'Alex, what are you going to do this break?' },
                    { sp: 'alex', ko: '아직 몰라요. 민지 씨는요?', en: "I don't know yet. How about you, Minji?" },
                    { sp: 'minji', ko: '저는 카페에서 아르바이트를 할 거예요.', en: "I'm going to work part-time at a café." }
                ],
                check: { q: '민지는 방학에 뭐 할 거예요?', en: 'What will Minji do over the break?', options: ['아르바이트를 할 거예요', '등산할 거예요', '잘 거예요'], answer: 0 }
            },
            {
                img: 'a2-02-3',
                art: 'Minji shows Alex a photo on her phone: a curved sandy beach, bright blue sea, tall buildings and a long bridge. Alex leans in, eyes wide with excitement.',
                lines: [
                    { sp: 'minji', ko: '그리고 다음 주 금요일에 부산에 갈 거예요.', en: "And next Friday I'm going to Busan." },
                    { sp: 'minji', ko: '알렉스 씨도 같이 갈 거예요?', en: 'Will you come too, Alex?' },
                    { sp: 'alex', ko: '부산이요? 네, 좋아요!', en: 'Busan? Yes, sounds great!' }
                ],
                check: { q: '민지는 어디에 갈 거예요?', en: 'Where is Minji going to go?', options: ['부산', '서울', '미국'], answer: 0 }
            },
            {
                img: 'a2-02-4',
                art: 'Evening in the family living room. Junho, just home from work with his briefcase on the floor, flops onto the sofa with his feet up and a relaxed smile. Minji leans over the back of the sofa to talk to him. Nabi the cat sleeps on a cushion.',
                lines: [
                    { sp: 'minji', ko: '오빠, 다음 주에 바빠요?', en: 'Junho, are you busy next week?' },
                    { sp: 'junho', ko: '아니요, 다음 주는 휴가예요. 집에서 쉴 거예요.', en: "No, next week I'm off work. I'm going to rest at home." },
                    { sp: 'junho', ko: '내일은 하루 종일 잘 거예요!', en: "Tomorrow I'm going to sleep all day!" }
                ]
            },
            {
                img: 'a2-02-5',
                art: 'Junho sits up on the sofa with a big grin and a thumbs-up. Jian bursts into the room, jumping with both arms in the air, his yellow cap flying off his head. Minji laughs.',
                lines: [
                    { sp: 'minji', ko: '그럼 오빠도 같이 부산에 갈 거예요?', en: 'Then will you come to Busan with us too?' },
                    { sp: 'junho', ko: '부산이요? 좋아요! 저도 갈 거예요.', en: "Busan? Great! I'll go too." },
                    { sp: 'jian', ko: '저도요! 저도 갈 거예요!', en: "Me too! I'm going too!" }
                ]
            },
            {
                img: 'a2-02-6',
                art: 'Grandma sits in her armchair knitting, Nabi the cat curled up on her lap. Minji kneels beside her. Grandma gently shakes her head with a warm smile and strokes Nabi.',
                lines: [
                    { sp: 'minji', ko: '할머니도 같이 갈 거예요?', en: 'Grandma, will you come too?' },
                    { sp: 'halmeoni', ko: '할머니는 나비하고 집에 있을 거예요.', en: "Grandma's going to stay home with Nabi." }
                ],
                check: { q: '할머니는 부산에 갈 거예요?', en: 'Is Grandma going to Busan?', options: ['네', '아니요'], answer: 1 }
            },
            {
                img: 'a2-02-7',
                art: 'Back at the campus café the next day. Minji happily mimes eating with chopsticks, a thought bubble above her showing a plate of sliced raw fish. Alex makes a nervous face; a thought bubble above him shows a plate of kimbap rolls.',
                lines: [
                    { sp: 'alex', ko: '부산에서 뭐 할 거예요?', en: 'What are we going to do in Busan?' },
                    { sp: 'minji', ko: '회를 먹을 거예요!', en: "We're going to eat raw fish!" },
                    { sp: 'alex', ko: '회요? 저는... 김밥을 먹을 거예요.', en: "Raw fish? I'll... have kimbap." }
                ],
                check: { q: '알렉스는 부산에서 뭐 먹을 거예요?', en: 'What will Alex eat in Busan?', options: ['회', '김밥', '떡볶이'], answer: 1 }
            }
        ]
    },
    patterns: [
        {
            form: 'V + (으)ㄹ 거예요',
            meaning: 'will / going to (plans)',
            note: 'Stem ends in a vowel → ㄹ 거예요 (가다 → 갈 거예요, 하다 → 할 거예요). Stem ends in a consonant → 을 거예요 (먹다 → 먹을 거예요, 있다 → 있을 거예요). Stems ending in ㄹ just add 거예요 (놀다 → 놀 거예요). Negative: 안 갈 거예요.',
            examples: [
                { ko: '내일 학교에 갈 거예요.', en: "I'm going to go to school tomorrow." },
                { ko: '부산에서 회를 먹을 거예요.', en: "I'm going to eat raw fish in Busan." },
                { ko: '방학에 친구하고 놀 거예요.', en: "I'm going to hang out with friends over the break." }
            ]
        },
        {
            form: '내일 / 다음 주에 / 이번 방학에',
            meaning: 'when in the future',
            note: '내일 takes no 에, like 어제 and 오늘. Other time words do: 다음 주에, 금요일에, 방학에. 뭐 할 거예요? = What are you going to do?',
            examples: [
                { ko: '다음 주에 뭐 할 거예요?', en: 'What are you going to do next week?' },
                { ko: '이번 방학에 아르바이트를 할 거예요.', en: "I'm going to work part-time this break." }
            ]
        }
    ],
    sentences: [
        { ko: '내일 뭐 할 거예요?', en: 'What are you going to do tomorrow?', blank: '할', alts: ['했', '하', '해'] },
        { ko: '다음 주에 부산에 갈 거예요.', en: "I'm going to Busan next week.", blank: '갈', alts: ['가을', '갔', '가'] },
        { ko: '저녁에 비빔밥을 먹을 거예요.', en: "I'm going to have bibimbap for dinner.", blank: '먹을', alts: ['먹', '먹었', '먹어'] },
        { ko: '방학에 친구하고 놀 거예요.', en: "I'm going to hang out with friends over the break.", blank: '놀', alts: ['놀을', '놀았', '노을'] },
        { ko: '이번 방학에 아르바이트를 할 거예요.', en: "I'm going to work part-time this break.", blank: '이번', alts: ['지난', '어제', '아직'] },
        { ko: '다음 주는 휴가예요.', en: "Next week I'm off work.", blank: '다음', alts: ['지난', '아직', '그럼'] },
        { ko: '내일은 집에서 쉴 거예요.', en: "Tomorrow I'm going to rest at home.", blank: '쉴', alts: ['쉬을', '쉬었', '쉬'] },
        { ko: '오빠는 아주 바빠요.', en: 'My older brother is very busy.', blank: '바빠요', alts: ['바쁘어요', '바뻐요', '바쁘요'] },
        { ko: '어디에 갈 거예요?', en: 'Where are you going to go?', blank: '어디', alts: ['뭐', '누구', '언제'] },
        { ko: '저는 회를 안 먹을 거예요.', en: "I'm not going to eat raw fish.", blank: '를', alts: ['을', '이', '에'] },
        { ko: '그럼 같이 갈 거예요?', en: 'Then will you come along?', blank: '그럼', alts: ['어제', '지난', '아니요'] },
        { ko: '아직 몰라요.', en: "I don't know yet.", blank: '아직', alts: ['어제', '다음', '이번'] }
    ]
});

KG.unit({
    id: 'a2-03',
    level: 'A2',
    title: 'I Want to See the Sea',
    ko: '바다를 보고 싶어요',
    icon: '🚄',
    goal: 'Say what you want to do with -고 싶어요, buy train tickets and travel by KTX.',
    vocab: [
        { ko: '여행', en: 'trip, travel', emoji: '🧳', pos: 'noun', forms: ['여행을'] },
        { ko: '역', en: 'station', emoji: '🚉', pos: 'noun', forms: ['서울역', '부산역'], note: '서울역 = Seoul Station.' },
        { ko: '기차', en: 'train', emoji: '🚆', pos: 'noun' },
        { ko: 'KTX', en: 'KTX (Korean high-speed train)', emoji: '🚄', pos: 'noun' },
        { ko: '표', en: 'ticket', emoji: '🎫', pos: 'noun' },
        { ko: '장', en: 'counter for tickets, paper, photos', emoji: '🎟️', pos: 'other', note: 'Use native numbers: 한 장, 두 장, 세 장, 네 장.' },
        { ko: '어른', en: 'adult', emoji: '🧑', pos: 'noun' },
        { ko: '어린이', en: 'child', emoji: '🧒', pos: 'noun' },
        { ko: '도시락', en: 'packed lunch box', emoji: '🍱', pos: 'noun' },
        { ko: '앉다', en: 'to sit', emoji: '💺', pos: 'verb', polite: '앉아요', forms: ['앉고'] },
        { ko: '빠르다', en: 'to be fast', emoji: '⚡', pos: 'adj', polite: '빨라요', forms: ['빨라요'], note: '르 irregular: 빠르다 → 빨라요.' },
        { ko: '도착하다', en: 'to arrive', emoji: '🏁', pos: 'verb', polite: '도착해요', forms: ['도착했어요'] },
        { ko: '바다', en: 'sea, ocean', emoji: '🌊', pos: 'noun' },
        { ko: '호텔', en: 'hotel', emoji: '🏨', pos: 'noun' }
    ],
    story: {
        title: 'The Train to Busan',
        extras: 'The ticket clerk is a young Korean woman with a neat low bun, a navy uniform jacket and a small scarf. The lunch-box shopkeeper is a round-faced Korean man in his fifties with a white apron and a grey moustache.',
        scenes: [
            {
                img: 'a2-03-1',
                art: 'The bright glass-roofed hall of Seoul Station, busy with travellers pulling suitcases. Minji, Alex, Junho and Jian stand together with their bags; Jian bounces on his toes with excitement.',
                lines: [
                    { sp: 'narrator', ko: '여기는 서울역이에요.', en: 'This is Seoul Station.' },
                    { sp: 'narrator', ko: '오늘 부산에 여행을 가요!', en: "Today they're going on a trip to Busan!" }
                ]
            },
            {
                img: 'a2-03-2',
                art: 'At a train ticket counter, Junho leans toward a smiling female clerk behind the glass and holds up four fingers. Jian stands on tiptoe beside him, peeking over the counter. A wall clock shows 9:30.',
                lines: [
                    { sp: 'junho', ko: '부산 표 네 장 주세요.', en: 'Four tickets to Busan, please.' },
                    { sp: 'staffF', as: '직원', ko: '어른 세 장, 어린이 한 장이요?', en: 'Three adults and one child?' },
                    { sp: 'junho', ko: '네, 맞아요.', en: "Yes, that's right." }
                ],
                check: { q: '표가 몇 장이에요?', en: 'How many tickets are there?', options: ['두 장', '세 장', '네 장'], answer: 2 }
            },
            {
                img: 'a2-03-3',
                art: 'A small station shop with rows of colourful lunch boxes in a glass case. Jian presses his face to the glass and points at a lunch box. Minji laughs and takes out her wallet; a male shopkeeper smiles behind the counter.',
                lines: [
                    { sp: 'jian', ko: '누나, 도시락 먹고 싶어요!', en: 'Sis, I want a lunch box!' },
                    { sp: 'minji', ko: '좋아요. 여기요, 도시락 네 개 주세요.', en: 'Okay. Excuse me, four lunch boxes, please.' }
                ]
            },
            {
                img: 'a2-03-4',
                art: 'Inside a sleek KTX carriage. Fields and mountains blur past the window in streaks of green. Alex presses his hand to the glass in amazement while Jian squeezes in next to him, eager to see.',
                lines: [
                    { sp: 'narrator', ko: 'KTX는 아주 빨라요.', en: 'The KTX is very fast.' },
                    { sp: 'alex', ko: '와! 기차가 정말 빨라요!', en: 'Wow! The train is really fast!' },
                    { sp: 'jian', ko: '형, 저도 창문 옆에 앉고 싶어요!', en: 'Alex, I want to sit by the window too!' }
                ]
            },
            {
                img: 'a2-03-5',
                art: 'The four friends eat from open lunch boxes on their seat-back trays. A thought bubble above Alex shows a wide blue sea with rolling waves. A thought bubble above Junho shows himself stretched out happily on a big white hotel bed.',
                lines: [
                    { sp: 'minji', ko: '부산에서 뭐 하고 싶어요?', en: 'What do you want to do in Busan?' },
                    { sp: 'alex', ko: '저는 바다를 보고 싶어요!', en: 'I want to see the sea!' },
                    { sp: 'junho', ko: '저는 호텔에서 쉬고 싶어요.', en: 'I want to rest at the hotel.' }
                ],
                check: { q: '알렉스는 뭘 보고 싶어 해요?', en: 'What does Alex want to see?', options: ['바다', '산', '호텔'], answer: 0 }
            },
            {
                img: 'a2-03-6',
                art: "Junho has fallen asleep in his seat with his head tilted back and mouth open, an empty lunch box on his lap. Jian tugs Alex's sleeve. Alex smiles and taps his wristwatch, which shows eleven o'clock.",
                lines: [
                    { sp: 'narrator', ko: '준호는 자요.', en: 'Junho is sleeping.' },
                    { sp: 'jian', ko: '형, 부산에 언제 도착해요?', en: 'Alex, when do we get to Busan?' },
                    { sp: 'alex', ko: '열두 시 반에 도착해요.', en: 'We arrive at twelve thirty.' }
                ],
                check: { q: '기차는 몇 시에 도착해요?', en: 'What time does the train arrive?', options: ['열 시', '열두 시 반', '세 시'], answer: 1 }
            },
            {
                img: 'a2-03-7',
                art: 'Outside Busan Station under a bright sky. Seagulls fly over a harbour with boats in the distance, and a tall hotel stands by the blue sea. Alex stretches his arms wide, breathing in the sea air. Minji points toward the hotel. Sleepy Junho drags two suitcases behind them.',
                lines: [
                    { sp: 'narrator', ko: '부산역에 도착했어요.', en: 'They arrived at Busan Station.' },
                    { sp: 'alex', ko: '빨리 바다를 보고 싶어요!', en: 'I want to see the sea right now!' },
                    { sp: 'minji', ko: '호텔 앞에 바다가 있어요!', en: "There's sea right in front of the hotel!" }
                ],
                check: { q: '호텔 앞에 뭐가 있어요?', en: 'What is in front of the hotel?', options: ['바다', '산', '학교'], answer: 0 }
            }
        ]
    },
    patterns: [
        {
            form: 'V + 고 싶어요',
            meaning: 'want to V',
            note: 'Add 고 싶어요 to any verb stem, with or without batchim: 보다 → 보고 싶어요, 먹다 → 먹고 싶어요, 쉬다 → 쉬고 싶어요. Use it for yourself and to ask "you". For someone else, say 싶어 해요: 지안은 수영하고 싶어 해요.',
            examples: [
                { ko: '바다를 보고 싶어요.', en: 'I want to see the sea.' },
                { ko: '뭐 먹고 싶어요?', en: 'What do you want to eat?' },
                { ko: '호텔에서 쉬고 싶어요.', en: 'I want to rest at the hotel.' }
            ]
        },
        {
            form: 'Place + 표 + number + 장 주세요',
            meaning: 'buying tickets',
            note: '장 counts flat things: tickets, paper, photos. Use native numbers (한 장, 두 장, 세 장). Say the place first: 부산 표 = a ticket to Busan.',
            examples: [
                { ko: '부산 표 두 장 주세요.', en: 'Two tickets to Busan, please.' },
                { ko: '어른 한 장, 어린이 한 장이요.', en: 'One adult and one child.' }
            ]
        }
    ],
    sentences: [
        { ko: '바다를 보고 싶어요.', en: 'I want to see the sea.', blank: '보고', alts: ['보는', '봐', '볼'] },
        { ko: '부산에 가고 싶어요.', en: 'I want to go to Busan.', blank: '가고 싶어요', alts: ['갈 거예요', '갔어요', '가요'] },
        { ko: '뭐 먹고 싶어요?', en: 'What do you want to eat?', blank: '먹고', alts: ['먹을', '먹어', '먹는'] },
        { ko: '부산 표 두 장 주세요.', en: 'Two tickets to Busan, please.', blank: '장', alts: ['개', '명', '잔'] },
        { ko: '어른 두 장, 어린이 한 장이요.', en: 'Two adults and one child.', blank: '어린이', alts: ['바다', '호텔', '도시락'] },
        { ko: 'KTX는 정말 빨라요.', en: 'The KTX is really fast.', blank: '빨라요', alts: ['빠라요', '빠르어요', '빨러요'] },
        { ko: '기차가 부산에 도착했어요.', en: 'The train arrived in Busan.', blank: '도착했어요', alts: ['앉았어요', '먹었어요', '쉬었어요'] },
        { ko: '창문 옆에 앉고 싶어요.', en: 'I want to sit by the window.', blank: '앉고', alts: ['앉을', '앉아', '앉은'] },
        { ko: '호텔에서 쉬고 싶어요.', en: 'I want to rest at the hotel.', blank: '쉬고', alts: ['쉴', '쉬어', '쉬는'] },
        { ko: '도시락 네 개 주세요.', en: 'Four lunch boxes, please.', blank: '개', alts: ['장', '명', '마리'] },
        { ko: '여기가 서울역이에요.', en: 'This is Seoul Station.', blank: '역', alts: ['표', '기차', '자리'] },
        { ko: '방학에 여행을 가고 싶어요.', en: 'I want to go on a trip over the break.', blank: '여행', alts: ['호텔', '도시락', '표'] }
    ]
});

KG.unit({
    id: 'a2-04',
    level: 'A2',
    title: 'Can You Swim?',
    ko: '수영할 수 있어요?',
    icon: '🏄',
    goal: "Say what you can and can't do with -(으)ㄹ 수 있어요/없어요, and talk about skills at the beach.",
    vocab: [
        { ko: '해운대', en: 'Haeundae (a famous beach in Busan)', emoji: '🏖️', pos: 'noun' },
        { ko: '해변', en: 'beach', emoji: '🏝️', pos: 'noun' },
        { ko: '수영하다', en: 'to swim', emoji: '🏊', pos: 'verb', polite: '수영해요', forms: ['수영할'] },
        { ko: '서핑', en: 'surfing', emoji: '🏄', pos: 'noun', note: '서핑하다 = to surf.', forms: ['서핑을', '서핑은'] },
        { ko: '자전거', en: 'bicycle', emoji: '🚲', pos: 'noun', forms: ['자전거는', '자전거를'] },
        { ko: '타다', en: 'to ride, to get on', emoji: '🚴', pos: 'verb', polite: '타요', forms: ['탈'], note: '자전거를 타다 = ride a bike; 기차를 타다 = take the train.' },
        { ko: '사진', en: 'photo', emoji: '🖼️', pos: 'noun', forms: ['사진을'] },
        { ko: '찍다', en: 'to take (a photo)', emoji: '📸', pos: 'verb', polite: '찍어요', forms: ['찍을'] },
        { ko: '노래하다', en: 'to sing', emoji: '🎤', pos: 'verb', polite: '노래해요', forms: ['노래를'] },
        { ko: '노래방', en: 'karaoke room', emoji: '🎶', pos: 'noun' },
        { ko: '요리하다', en: 'to cook', emoji: '🍳', pos: 'verb', polite: '요리해요', forms: ['요리할', '요리도'] },
        { ko: '잘하다', en: 'to be good at', emoji: '👍', pos: 'verb', polite: '잘해요', forms: ['잘 못해요'], note: '잘 못해요 = not good at it.' },
        { ko: '배우다', en: 'to learn', emoji: '📚', pos: 'verb', polite: '배워요', forms: ['배우고'] }
    ],
    story: {
        title: 'A Day at Haeundae',
        extras: 'Every scene is in Busan around Haeundae Beach: the Busan skyline of tall glass towers, Gwangan Bridge and the open sea. N Seoul Tower must never appear.',
        scenes: [
            {
                img: 'a2-04-1',
                art: 'Haeundae beach on a sunny day: wide golden sand, rows of colourful umbrellas, blue waves and tall glass towers behind. Minji, Alex, Junho and Jian walk onto the sand in summer clothes, carrying towels and a beach ball. Many small beachgoers fill the background.',
                lines: [
                    { sp: 'narrator', ko: '여기는 해운대예요.', en: 'This is Haeundae.' },
                    { sp: 'narrator', ko: '해변에 사람이 많아요.', en: 'There are lots of people on the beach.' }
                ]
            },
            {
                img: 'a2-04-2',
                art: 'At the edge of the water. Alex, in swim trunks with goggles pushed up on his forehead, gives a confident thumbs-up. Jian looks up at him, then droops his shoulders sadly, holding a pink inflatable swim ring.',
                lines: [
                    { sp: 'jian', ko: '알렉스 형, 수영할 수 있어요?', en: 'Alex, can you swim?' },
                    { sp: 'alex', ko: '네, 수영할 수 있어요.', en: 'Yes, I can swim.' },
                    { sp: 'jian', ko: '저는 수영할 수 없어요. 배우고 싶어요!', en: "I can't swim. I want to learn!" }
                ],
                check: { q: '지안은 수영할 수 있어요?', en: 'Can Jian swim?', options: ['네', '아니요'], answer: 1 }
            },
            {
                img: 'a2-04-3',
                art: 'Junho rides a big curling wave on a surfboard, arms out for balance, looking cool and confident. On the sand, Jian jumps and cheers and Minji claps.',
                lines: [
                    { sp: 'narrator', ko: '준호는 서핑을 할 수 있어요.', en: 'Junho can surf.' },
                    { sp: 'jian', ko: '와! 형, 정말 잘해요!', en: "Wow! Bro, you're really good!" }
                ],
                check: { q: '누가 서핑을 할 수 있어요?', en: 'Who can surf?', options: ['준호', '지안', '민지'], answer: 0 }
            },
            {
                img: 'a2-04-4',
                art: 'Along the seaside bike path, with surfers riding waves in the sea beside it, Minji rides a rental bicycle smoothly ahead, smiling back over her shoulder. Behind her, Alex wobbles on his bicycle, legs sticking out, front wheel turning sideways, eyes wide with panic.',
                lines: [
                    { sp: 'alex', ko: '민지 씨도 서핑할 수 있어요?', en: 'Minji, can you surf too?' },
                    { sp: 'minji', ko: '아니요, 서핑은 못 해요. 그런데 자전거는 잘 탈 수 있어요!', en: "No, I can't surf. But I can ride a bike really well!" },
                    { sp: 'alex', ko: '아! 저는 자전거를 잘 못 타요!', en: "Ah! I'm not good at riding a bike!" }
                ],
                check: { q: '알렉스는 자전거를 잘 타요?', en: 'Is Alex good at riding a bike?', options: ['네', '아니요'], answer: 1 }
            },
            {
                img: 'a2-04-5',
                art: 'Minji, Alex and Junho pose arm in arm with the sea behind them, making V signs. Jian stands in front holding a smartphone sideways with both hands, tongue poking out in concentration as he takes their photo.',
                lines: [
                    { sp: 'jian', ko: '제가 사진을 찍을 수 있어요!', en: 'I can take the picture!' },
                    { sp: 'minji', ko: '좋아요! 하나, 둘, 셋!', en: 'Okay! One, two, three!' }
                ]
            },
            {
                img: 'a2-04-6',
                art: 'Evening in the small kitchen of their seaside guesthouse. Junho, wearing an apron, tosses sizzling meat and vegetables in a frying pan with a confident grin. Alex watches, impressed, and Jian sneaks a piece from a plate.',
                lines: [
                    { sp: 'alex', ko: '준호 씨, 요리할 수 있어요?', en: 'Junho, can you cook?' },
                    { sp: 'junho', ko: '그럼요! 오늘 저녁은 제가 만들 거예요.', en: "Of course! I'm making dinner tonight." },
                    { sp: 'narrator', ko: '준호는 요리도 잘해요.', en: "Junho's good at cooking, too." }
                ]
            },
            {
                img: 'a2-04-7',
                art: 'Late at night in a karaoke room with colourful disco lights and a big screen showing only a sunset video. Alex holds the microphone and sings with his eyes shut and mouth wide open. Minji and Junho cover their ears, laughing. Jian dances on the sofa with a tambourine.',
                lines: [
                    { sp: 'narrator', ko: '밤에는 노래방에 갔어요.', en: 'At night they went to a karaoke room.' },
                    { sp: 'alex', ko: '저는 노래를 잘할 수 있어요!', en: 'I can sing really well!' },
                    { sp: 'narrator', ko: '음... 알렉스는 노래를 잘 못해요.', en: "Hmm... Alex isn't very good at singing." }
                ],
                check: { q: '알렉스는 노래를 잘해요?', en: 'Is Alex good at singing?', options: ['네', '아니요'], answer: 1 }
            }
        ]
    },
    patterns: [
        {
            form: 'V + (으)ㄹ 수 있어요 / 없어요',
            meaning: "can / can't",
            note: 'Stem ends in a vowel → ㄹ 수 있어요 (타다 → 탈 수 있어요, 수영하다 → 수영할 수 있어요). Ends in a consonant → 을 수 있어요 (찍다 → 찍을 수 있어요). Stems ending in ㄹ just add 수 있어요 (만들다 → 만들 수 있어요). Use 없어요 for “can’t”.',
            examples: [
                { ko: '수영할 수 있어요?', en: 'Can you swim?' },
                { ko: '사진을 찍을 수 있어요.', en: 'I can take a photo.' },
                { ko: '저는 서핑할 수 없어요.', en: "I can't surf." }
            ]
        },
        {
            form: '못 + V  ·  잘하다 / 잘 못하다',
            meaning: "can't · good at / not good at",
            note: '못 before a verb is a short way to say “can’t”: 수영 못 해요 = 수영할 수 없어요. 잘하다 means "to be good at": 노래를 잘해요. Not good at: 잘 못해요 (or 잘 못 타요 for 타다).',
            examples: [
                { ko: '서핑은 못 해요.', en: "I can't surf." },
                { ko: '준호는 서핑을 잘해요.', en: 'Junho is good at surfing.' },
                { ko: '알렉스는 노래를 잘 못해요.', en: "Alex isn't good at singing." }
            ]
        }
    ],
    sentences: [
        { ko: '수영할 수 있어요?', en: 'Can you swim?', blank: '할', alts: ['하을', '했', '해'] },
        { ko: '저는 자전거를 탈 수 없어요.', en: "I can't ride a bike.", blank: '없어요', alts: ['있어요', '싶어요', '거예요'] },
        { ko: '사진을 찍을 수 있어요.', en: 'I can take a photo.', blank: '찍을', alts: ['찍', '찍는', '찍어'] },
        { ko: '준호는 서핑을 잘해요.', en: 'Junho is good at surfing.', blank: '잘해요', alts: ['못 해요', '싶어요', '없어요'] },
        { ko: '지안은 수영 못 해요.', en: "Jian can't swim.", blank: '못', alts: ['안', '네', '수'] },
        { ko: '자전거를 탈 수 있어요?', en: 'Can you ride a bike?', blank: '자전거', alts: ['사진', '노래', '해변'] },
        { ko: '저는 요리할 수 있어요.', en: 'I can cook.', blank: '요리할', alts: ['요리해', '요리하고', '요리했'] },
        { ko: '노래방에서 노래했어요.', en: 'I sang at a karaoke room.', blank: '에서', alts: ['에', '을', '가'] },
        { ko: '알렉스는 노래를 잘 못해요.', en: "Alex isn't good at singing.", blank: '잘', alts: ['안', '수', '도'] },
        { ko: '저도 수영을 배우고 싶어요.', en: 'I want to learn to swim too.', blank: '배우고', alts: ['배울', '배워', '배운'] },
        { ko: '해변에 사람이 많아요.', en: 'There are lots of people on the beach.', blank: '해변', alts: ['노래방', '자전거', '사진'] },
        { ko: '한국어를 할 수 있어요?', en: 'Can you speak Korean?', blank: '수', alts: ['고', '서', '면'] }
    ]
});

KG.unit({
    id: 'a2-05',
    level: 'A2',
    title: "How's the Weather?",
    ko: '날씨가 어때요?',
    icon: '🌦️',
    goal: 'Describe the weather and the four seasons, including the ㅂ irregular 더워요 and 추워요.',
    vocab: [
        { ko: '날씨', en: 'weather', emoji: '🌤️', pos: 'noun', forms: ['날씨가'] },
        { ko: '맑다', en: 'to be clear, sunny', emoji: '☀️', pos: 'adj', polite: '맑아요', forms: ['맑을'] },
        { ko: '흐리다', en: 'to be cloudy', emoji: '☁️', pos: 'adj', polite: '흐려요', forms: ['흐려요'] },
        { ko: '덥다', en: 'to be hot (weather)', emoji: '🥵', pos: 'adj', polite: '더워요', forms: ['더워요'], note: 'ㅂ irregular: 덥다 → 더워요, 더웠어요.' },
        { ko: '춥다', en: 'to be cold (weather)', emoji: '🥶', pos: 'adj', polite: '추워요', forms: ['추워요'], note: 'ㅂ irregular: 춥다 → 추워요, 추웠어요.' },
        { ko: '따뜻하다', en: 'to be warm', emoji: '🌷', pos: 'adj', polite: '따뜻해요', forms: ['따뜻해요'] },
        { ko: '비', en: 'rain', emoji: '🌧️', pos: 'noun', note: '비가 와요 = it rains.', forms: ['비가'] },
        { ko: '눈', en: 'snow', emoji: '❄️', pos: 'noun', note: '눈이 와요 = it snows. (눈 also means "eye".)', forms: ['눈도'] },
        { ko: '바람', en: 'wind', emoji: '🌬️', pos: 'noun', note: "바람이 불어요 = the wind blows, it's windy.", forms: ['바람이', '불어요'] },
        { ko: '우산', en: 'umbrella', emoji: '☂️', pos: 'noun' },
        { ko: '봄', en: 'spring', emoji: '🌸', pos: 'noun' },
        { ko: '여름', en: 'summer', emoji: '🌞', pos: 'noun' },
        { ko: '가을', en: 'autumn, fall', emoji: '🍁', pos: 'noun' },
        { ko: '겨울', en: 'winter', emoji: '⛄', pos: 'noun' }
    ],
    story: {
        title: 'Sun, Wind and Rain',
        extras: 'Every scene is in Busan around Haeundae Beach: the Busan skyline of tall glass towers, Gwangan Bridge and the open sea. N Seoul Tower must never appear.',
        scenes: [
            {
                img: 'a2-05-1',
                art: 'Morning in a hotel room with a big window over Haeundae beach: a bright sun, a clear blue sky without a single cloud, and a sparkling sea. Minji throws open the curtains, smiling. Alex, still in pajamas, shields his eyes from the sunlight.',
                lines: [
                    { sp: 'narrator', ko: '아침이에요. 날씨가 맑아요.', en: "It's morning. The weather is clear." },
                    { sp: 'minji', ko: '와, 날씨가 정말 좋아요!', en: 'Wow, the weather is really nice!' }
                ],
                check: { q: '아침에 날씨가 어때요?', en: "How's the weather in the morning?", options: ['맑아요', '비가 와요', '눈이 와요'], answer: 0 }
            },
            {
                img: 'a2-05-2',
                art: 'Noon on the beach. The sun blazes high overhead and heat shimmers rise off the sand. Jian, red-faced and sweaty, fans himself with his yellow cap. Junho wipes his forehead in the shade of a beach umbrella. Near them stands an ice-cream cart.',
                lines: [
                    { sp: 'narrator', ko: '낮에는 아주 더워요.', en: "In the daytime it's very hot." },
                    { sp: 'jian', ko: '형, 너무 더워요! 아이스크림 먹고 싶어요!', en: "Bro, it's too hot! I want ice cream!" }
                ]
            },
            {
                img: 'a2-05-3',
                art: "Late afternoon. Thick grey clouds roll in over the sea and cover the sun. A strong wind makes the beach umbrellas flap and blows Minji's hair across her face. Jian's yellow cap flies off and Alex runs after it.",
                lines: [
                    { sp: 'narrator', ko: '오후에는 날씨가 흐려요.', en: 'In the afternoon it gets cloudy.' },
                    { sp: 'narrator', ko: '바람이 많이 불어요.', en: "It's very windy." }
                ],
                check: { q: '오후에 날씨가 어때요?', en: "How's the weather in the afternoon?", options: ['맑아요', '흐려요', '더워요'], answer: 1 }
            },
            {
                img: 'a2-05-4',
                art: 'Heavy rain pours down on the beach. Junho, smiling and prepared, opens a big blue umbrella. Minji, Alex and Jian squeeze underneath it together, wet and laughing.',
                lines: [
                    { sp: 'alex', ko: '앗, 비가 와요! 우산 있어요?', en: "Oh no, it's raining! Does anyone have an umbrella?" },
                    { sp: 'junho', ko: '네, 우산 있어요. 여기요!', en: 'Yes, I have an umbrella. Here!' }
                ]
            },
            {
                img: 'a2-05-5',
                art: 'Inside a cozy beachside café, rain streaming down the window. Minji, Alex, Junho and Jian hold warm mugs. A thought bubble above Alex shows a city of tall buildings buried in deep snow, with Alex in a thick coat and scarf, shivering.',
                lines: [
                    { sp: 'minji', ko: '알렉스 씨, 미국은 날씨가 어때요?', en: "Alex, what's the weather like in the US?" },
                    { sp: 'alex', ko: '저는 시카고에서 왔어요. 시카고는 겨울에 정말 추워요.', en: "I'm from Chicago. Chicago is really cold in winter." },
                    { sp: 'alex', ko: '눈도 많이 와요.', en: 'It snows a lot, too.' }
                ],
                check: { q: '시카고는 겨울에 어때요?', en: "What's Chicago like in winter?", options: ['추워요', '더워요', '따뜻해요'], answer: 0 }
            },
            {
                img: 'a2-05-6',
                art: 'In the café, Minji counts on her fingers. Above her floats a four-part picture of the same Korean park in four seasons: pink cherry blossoms in spring, bright green trees under a hot sun in summer, red and yellow leaves in autumn, and white snow in winter. Alex listens, chin in hand.',
                lines: [
                    { sp: 'minji', ko: '한국은 봄에 따뜻해요. 여름에는 아주 더워요.', en: "In Korea it's warm in spring. In summer it's very hot." },
                    { sp: 'minji', ko: '가을에는 날씨가 정말 좋아요. 겨울에는 추워요.', en: "In autumn the weather is lovely. In winter it's cold." },
                    { sp: 'alex', ko: '저는 가을을 좋아해요!', en: 'I like autumn!' }
                ],
                check: { q: '한국은 여름에 어때요?', en: "What's Korea like in summer?", options: ['더워요', '추워요', '따뜻해요'], answer: 0 }
            },
            {
                img: 'a2-05-7',
                art: 'Evening: the rain has stopped. A rainbow arches over the sea under an orange sunset, and the wet sand gleams. Minji, Alex, Junho and Jian walk along the beach; Junho carries the folded blue umbrella and Jian points at the rainbow.',
                lines: [
                    { sp: 'narrator', ko: '저녁에 비가 그쳤어요.', en: 'In the evening the rain stopped.' },
                    { sp: 'jian', ko: '와, 무지개예요!', en: "Wow, it's a rainbow!" },
                    { sp: 'minji', ko: '내일은 날씨가 맑을 거예요.', en: 'Tomorrow the weather will be clear.' }
                ]
            }
        ]
    },
    patterns: [
        {
            form: '날씨가 어때요?',
            meaning: 'talking about the weather',
            note: "날씨가 맑아요 / 흐려요 (clear / cloudy). 비가 와요 and 눈이 와요 (it rains / it snows) use 오다. 바람이 불어요 = it's windy. Past: 비가 왔어요. Future guess: 맑을 거예요.",
            examples: [
                { ko: '오늘 날씨가 어때요?', en: "How's the weather today?" },
                { ko: '비가 와요.', en: "It's raining." },
                { ko: '바람이 많이 불어요.', en: "It's very windy." }
            ]
        },
        {
            form: 'ㅂ irregular: 덥다 → 더워요',
            meaning: 'ㅂ changes to 우 before 어요',
            note: 'Many adjectives ending in ㅂ drop it and add 워요: 덥다 → 더워요, 춥다 → 추워요, 맵다 → 매워요. Past: 더웠어요, 추웠어요. Future: 추울 거예요.',
            examples: [
                { ko: '여름에는 더워요.', en: "It's hot in summer." },
                { ko: '어제는 정말 추웠어요.', en: 'It was really cold yesterday.' }
            ]
        },
        {
            form: 'Season + 에(는)',
            meaning: 'in (a season)',
            note: '봄에, 여름에, 가을에, 겨울에. Add 는 when you compare seasons: 여름에는 더워요. 겨울에는 추워요.',
            examples: [
                { ko: '봄에는 따뜻해요.', en: "It's warm in spring." },
                { ko: '겨울에 눈이 와요.', en: 'It snows in winter.' }
            ]
        }
    ],
    sentences: [
        { ko: '오늘 날씨가 어때요?', en: "How's the weather today?", blank: '어때요', alts: ['얼마예요', '뭐예요', '어디예요'] },
        { ko: '여름에는 아주 더워요.', en: "It's very hot in summer.", blank: '더워요', alts: ['덥어요', '더와요', '덥워요'] },
        { ko: '겨울에는 정말 추워요.', en: "It's really cold in winter.", blank: '추워요', alts: ['춥어요', '추와요', '춥워요'] },
        { ko: '어제는 정말 추웠어요.', en: 'It was really cold yesterday.', blank: '추웠어요', alts: ['춥었어요', '추왔어요', '추워요'] },
        { ko: '비가 많이 와요.', en: "It's raining a lot.", blank: '비', alts: ['바람', '날씨', '봄'] },
        { ko: '바람이 불어요.', en: "It's windy.", blank: '불어요', alts: ['와요', '맑아요', '타요'] },
        { ko: '오늘은 날씨가 맑아요.', en: "It's clear today.", blank: '맑아요', alts: ['흐려요', '불어요', '와요'] },
        { ko: '오후에는 흐려요.', en: "It's cloudy in the afternoon.", blank: '흐려요', alts: ['흐리요', '흘러요', '흐래요'] },
        { ko: '시카고는 눈이 많이 와요.', en: 'It snows a lot in Chicago.', blank: '눈이', alts: ['눈을', '눈에', '눈는'] },
        { ko: '봄에는 날씨가 따뜻해요.', en: 'The weather is warm in spring.', blank: '봄', alts: ['겨울', '비', '바람'] },
        { ko: '우산 있어요?', en: 'Do you have an umbrella?', blank: '우산', alts: ['바람', '날씨', '눈'] },
        { ko: '내일은 맑을 거예요.', en: 'It will be clear tomorrow.', blank: '맑을', alts: ['맑', '맑은', '맑아'] }
    ]
});

KG.unit({
    id: 'a2-06',
    level: 'A2',
    title: 'Why?',
    ko: '왜요?',
    icon: '⏰',
    goal: 'Ask why with 왜요? and give reasons with -아서/-어서.',
    vocab: [
        { ko: '왜', en: 'why', emoji: '❓', pos: 'other', note: '왜요? = Why?' },
        { ko: '늦다', en: 'to be late', emoji: '⏰', pos: 'verb', polite: '늦어요', forms: ['늦었어요'] },
        { ko: '늦게', en: 'late (adverb)', emoji: '🌙', pos: 'other' },
        { ko: '일어나다', en: 'to get up, to wake up', emoji: '🛏️', pos: 'verb', polite: '일어나요', forms: ['일어났어요'] },
        { ko: '수업', en: 'class, lesson', emoji: '📖', pos: 'noun' },
        { ko: '놓치다', en: 'to miss (a bus, a train)', emoji: '🚌', pos: 'verb', polite: '놓쳐요', forms: ['놓쳐서'] },
        { ko: '뛰다', en: 'to run', emoji: '🏃', pos: 'verb', polite: '뛰어요', forms: ['뛰었어요'] },
        { ko: '시간', en: 'time', emoji: '⌛', pos: 'noun', note: '시간이 없어요 = I have no time.', forms: ['시간이'] },
        { ko: '배가 고프다', en: 'to be hungry', emoji: '🍽️', pos: 'adj', polite: '배가 고파요', note: 'ㅡ drops: 고프다 → 고파요, 고파서.', forms: ['배도 고파요'] },
        { ko: '피곤하다', en: 'to be tired', emoji: '😩', pos: 'adj', polite: '피곤해요', forms: ['피곤해서요'] },
        { ko: '아프다', en: 'to hurt, to be sick', emoji: '🤕', pos: 'adj', polite: '아파요', forms: ['아파요'], note: 'ㅡ drops: 아프다 → 아파요, 아파서.' },
        { ko: '그래서', en: "so, that's why", emoji: '➡️', pos: 'other' },
        { ko: '죄송해요', en: "I'm sorry (very polite)", emoji: '🙇', pos: 'expr' },
        { ko: '고마워요', en: 'thank you (friendly polite)', emoji: '🙏', pos: 'expr', note: 'From 고맙다 (ㅂ irregular, like 추워요).' }
    ],
    story: {
        title: 'A Very Bad Morning',
        extras: 'The teacher is a cheerful Korean woman in her forties with a short wavy brown bob, a navy cardigan over a white blouse and grey trousers. She is not the grandmother. A few other adult students sit in the background.',
        scenes: [
            {
                img: 'a2-06-1',
                art: "A classroom with a big round wall clock showing exactly nine o'clock. The teacher stands at the front holding a textbook. Minji sits next to an empty desk and glances at the door with a worried face.",
                lines: [
                    { sp: 'narrator', ko: '아홉 시예요. 수업 시간이에요.', en: "It's nine o'clock. It's class time." },
                    { sp: 'narrator', ko: '그런데 알렉스가 없어요.', en: "But Alex isn't here." }
                ]
            },
            {
                img: 'a2-06-2',
                art: 'The wall clock now shows nine thirty. The classroom door bursts open and Alex stumbles in, sweaty and out of breath, hair sticking up and one shoelace untied. The teacher folds her arms and raises an eyebrow. Minji covers her mouth.',
                lines: [
                    { sp: 'alex', ko: '죄송해요! 늦었어요!', en: "I'm sorry! I'm late!" },
                    { sp: 'staffF', as: '선생님', ko: '알렉스 씨, 왜 늦었어요?', en: 'Alex, why are you late?' }
                ],
                check: { q: '알렉스는 몇 시에 왔어요?', en: 'What time did Alex arrive?', options: ['아홉 시', '아홉 시 반', '열 시'], answer: 1 }
            },
            {
                img: 'a2-06-3',
                art: "Thought-bubble memory: late at night Alex sits at his desk under a lamp, buried in books, a clock showing two o'clock in the dark. Next to it, a second small bubble: morning sun pours in while Alex sleeps and his alarm clock rings and shakes on the nightstand.",
                lines: [
                    { sp: 'alex', ko: '어제 숙제가 많아서 늦게 잤어요.', en: 'I had a lot of homework yesterday, so I went to bed late.' },
                    { sp: 'alex', ko: '그래서 아침에 늦게 일어났어요.', en: 'So I woke up late this morning.' }
                ],
                check: { q: '알렉스는 왜 늦게 일어났어요?', en: 'Why did Alex wake up late?', options: ['늦게 자서', '아파서', '비가 와서'], answer: 0 }
            },
            {
                img: 'a2-06-4',
                art: 'Thought-bubble memory: a green city bus pulls away from a bus stop. Alex sprints after it with one arm stretched out, his red backpack bouncing, his face desperate.',
                lines: [
                    { sp: 'alex', ko: '그리고 버스를 놓쳐서 학교까지 뛰었어요.', en: 'And I missed the bus, so I ran all the way to school.' },
                    { sp: 'staffF', as: '선생님', ko: '아이고, 괜찮아요. 앉아요.', en: "Oh dear. It's okay. Have a seat." }
                ]
            },
            {
                img: 'a2-06-5',
                art: 'Alex slumps at his desk next to Minji, eyes half closed. Little wavy lines near his stomach show it is growling. Minji leans over and looks at him with concern.',
                lines: [
                    { sp: 'minji', ko: '알렉스 씨, 아침 먹었어요?', en: 'Alex, did you eat breakfast?' },
                    { sp: 'alex', ko: '아니요. 시간이 없어서 못 먹었어요.', en: "No. I didn't have time, so I couldn't eat." },
                    { sp: 'narrator', ko: '알렉스는 피곤해요. 배도 고파요.', en: "Alex is tired. He's hungry too." }
                ],
                check: { q: '알렉스는 왜 아침을 못 먹었어요?', en: "Why couldn't Alex eat breakfast?", options: ['시간이 없어서', '배가 아파서', '맛없어서'], answer: 0 }
            },
            {
                img: 'a2-06-6',
                art: 'During the break, Minji takes a sweet bread roll and a small carton of milk out of her bag and hands them to Alex. His face lights up and he takes them with both hands.',
                lines: [
                    { sp: 'minji', ko: '이 빵 먹어요. 우유도 있어요.', en: "Have this bread. There's milk too." },
                    { sp: 'alex', ko: '와, 정말 고마워요!', en: 'Wow, thank you so much!' }
                ]
            },
            {
                img: 'a2-06-7',
                art: 'Later in class, Alex has dozed off on his desk, cheek on his open textbook, an empty bread wrapper beside him. The teacher stands over him with her hands on her hips. Minji hides a laugh behind her hand.',
                lines: [
                    { sp: 'staffF', as: '선생님', ko: '알렉스 씨! 왜 자요? 아파요?', en: 'Alex! Why are you sleeping? Are you sick?' },
                    { sp: 'alex', ko: '아니요, 죄송해요... 너무 피곤해서요.', en: "No, I'm sorry... it's because I'm so tired." }
                ],
                check: { q: '알렉스는 왜 자요?', en: 'Why is Alex sleeping?', options: ['피곤해서', '배가 고파서', '추워서'], answer: 0 }
            }
        ]
    },
    patterns: [
        {
            form: 'V/A + 아서 / 어서 / 해서',
            meaning: 'because..., so... (reason)',
            note: 'Same vowel rule as 아요/어요: 늦다 → 늦어서, 자다 → 자서, 놓치다 → 놓쳐서, 피곤하다 → 피곤해서, 고프다 → 고파서. Never put past tense before 서: 늦게 자서 (not 잤어서). The tense goes at the end of the sentence: 늦게 자서 늦었어요.',
            examples: [
                { ko: '피곤해서 잤어요.', en: 'I was tired, so I slept.' },
                { ko: '버스를 놓쳐서 늦었어요.', en: 'I missed the bus, so I was late.' },
                { ko: '배가 고파서 빵을 먹었어요.', en: 'I was hungry, so I ate some bread.' }
            ]
        },
        {
            form: '왜요? → ...아서요 · 그래서',
            meaning: 'asking and answering why',
            note: "Answer 왜요? with just the reason + 요: 피곤해서요 (Because I'm tired). 그래서 links two separate sentences: 늦게 잤어요. 그래서 늦었어요.",
            examples: [
                { ko: '왜 늦었어요?', en: 'Why were you late?' },
                { ko: '시간이 없어서요.', en: "Because I didn't have time." },
                { ko: '늦게 일어났어요. 그래서 버스를 놓쳤어요.', en: 'I woke up late. So I missed the bus.' }
            ]
        }
    ],
    sentences: [
        { ko: '왜 늦었어요?', en: 'Why were you late?', blank: '왜', alts: ['뭐', '어디', '누구'] },
        { ko: '늦게 자서 늦었어요.', en: 'I went to bed late, so I was late.', blank: '자서', alts: ['잤어서', '자어서', '자요'] },
        { ko: '버스를 놓쳐서 뛰었어요.', en: 'I missed the bus, so I ran.', blank: '놓쳐서', alts: ['놓쳤어서', '놓치서', '놓쳐요'] },
        { ko: '피곤해서 잤어요.', en: 'I was tired, so I slept.', blank: '피곤해서', alts: ['피곤하서', '피곤했어서', '피곤해요'] },
        { ko: '배가 고파서 빵을 먹었어요.', en: 'I was hungry, so I ate some bread.', blank: '고파서', alts: ['고프어서', '고퍼서', '고팠어서'] },
        { ko: '배가 아파서 못 먹었어요.', en: "My stomach hurt, so I couldn't eat.", blank: '아파서', alts: ['아퍼서', '아프어서', '아팠어서'] },
        { ko: '시간이 없어서 못 먹었어요.', en: "I had no time, so I couldn't eat.", blank: '없어서', alts: ['없아서', '없었어서', '없고'] },
        { ko: '비가 와서 집에 있었어요.', en: 'It rained, so I stayed home.', blank: '와서', alts: ['오아서', '왔어서', '오서'] },
        { ko: '아침에 늦게 일어났어요.', en: 'I woke up late in the morning.', blank: '늦게', alts: ['늦어서', '늦다', '늦어요'] },
        { ko: '그래서 학교에 늦었어요.', en: 'So I was late for school.', blank: '그래서', alts: ['그럼', '아직', '왜'] },
        { ko: '죄송해요. 늦었어요.', en: "I'm sorry. I'm late.", blank: '죄송해요', alts: ['고마워요', '괜찮아요', '반가워요'] },
        { ko: '너무 피곤해서요.', en: "Because I'm so tired.", blank: '서요', alts: ['어요', '고요', '세요'] }
    ]
});

KG.unit({
    id: 'a2-07',
    level: 'A2',
    title: 'Can I Try It On?',
    ko: '입어 봐도 돼요?',
    icon: '👕',
    goal: 'Shop for clothes: try things on with -아/어 보다, ask permission with -아/어도 돼요?, and talk about colours and sizes.',
    vocab: [
        { ko: '옷', en: 'clothes', emoji: '👚', pos: 'noun' },
        { ko: '티셔츠', en: 'T-shirt', emoji: '👕', pos: 'noun' },
        { ko: '바지', en: 'trousers, pants', emoji: '👖', pos: 'noun' },
        { ko: '치마', en: 'skirt', emoji: '👗', pos: 'noun' },
        { ko: '신발', en: 'shoes', emoji: '👟', pos: 'noun' },
        { ko: '모자', en: 'hat, cap', emoji: '🧢', pos: 'noun', note: '모자를 쓰다 = to put on a hat (쓰다 → 써요, 써 보다).' },
        { ko: '입다', en: 'to wear, to put on (clothes)', emoji: '🧥', pos: 'verb', polite: '입어요', forms: ['입어 봐도'] },
        { ko: '신다', en: 'to wear, to put on (shoes)', emoji: '🥾', pos: 'verb', polite: '신어요', forms: ['신어 봐도'] },
        { ko: '크다', en: 'to be big', emoji: '🐘', pos: 'adj', polite: '커요', forms: ['커요'], note: 'ㅡ drops: 크다 → 커요.' },
        { ko: '작다', en: 'to be small', emoji: '🐭', pos: 'adj', polite: '작아요' },
        { ko: '사이즈', en: 'size', emoji: '📏', pos: 'noun' },
        { ko: '파란색', en: 'blue', emoji: '🔵', pos: 'noun', note: '색 = colour. Also 까만색 (black), 하얀색 (white).' },
        { ko: '빨간색', en: 'red', emoji: '🔴', pos: 'noun' },
        { ko: '노란색', en: 'yellow', emoji: '🟡', pos: 'noun' }
    ],
    story: {
        title: 'Market Day',
        extras: 'The clothes vendor is a friendly Korean woman in her fifties with a curly black perm, a flowered apron and a money pouch at her waist. The shoe-and-hat vendor is a young Korean man in his twenties with dyed brown hair, a black hoodie and a backwards black cap.',
        scenes: [
            {
                img: 'a2-07-1',
                art: 'A lively Seoul clothing market street: rows of small stalls packed with colourful T-shirts, jeans, skirts, hats and sneakers hanging from racks. Minji excitedly pulls Alex by the sleeve into the busy crowd.',
                lines: [
                    { sp: 'narrator', ko: '여기는 동대문 시장이에요.', en: 'This is Dongdaemun Market.' },
                    { sp: 'narrator', ko: '티셔츠, 바지, 치마, 모자... 옷이 정말 많아요.', en: 'T-shirts, trousers, skirts, hats... there are so many clothes.' }
                ]
            },
            {
                img: 'a2-07-2',
                art: 'At a T-shirt stall, Alex holds a bright blue T-shirt up against his chest. The clothes vendor nods and smiles, pointing to a small curtained fitting corner at the back of the stall.',
                lines: [
                    { sp: 'alex', ko: '와, 이 파란색 티셔츠 멋있어요.', en: 'Wow, this blue T-shirt looks cool.' },
                    { sp: 'alex', ko: '입어 봐도 돼요?', en: 'Can I try it on?' },
                    { sp: 'staffF', as: '직원', ko: '네, 입어 봐도 돼요.', en: 'Yes, you can try it on.' }
                ],
                check: { q: '알렉스는 무슨 색 티셔츠를 입어 봐요?', en: 'What colour T-shirt does Alex try on?', options: ['파란색', '빨간색', '노란색'], answer: 0 }
            },
            {
                img: 'a2-07-3',
                art: 'Alex steps out of the fitting corner wearing the blue T-shirt, which is far too small: it is tight, the sleeves are short and his belly peeks out. Minji bursts out laughing.',
                lines: [
                    { sp: 'minji', ko: '하하, 너무 작아요!', en: "Haha, it's way too small!" },
                    { sp: 'alex', ko: 'L 사이즈 있어요?', en: 'Do you have a large?' },
                    { sp: 'staffF', as: '직원', ko: '네, 여기 있어요.', en: 'Yes, here you go.' }
                ]
            },
            {
                img: 'a2-07-4',
                art: 'Alex now wears the same blue T-shirt in a bigger size, and it fits perfectly. He grins and holds out a plain bank card. The clothes vendor smiles and takes it.',
                lines: [
                    { sp: 'alex', ko: '이건 딱 좋아요! 얼마예요?', en: 'This one is just right! How much is it?' },
                    { sp: 'staffF', as: '직원', ko: '만 오천 원이에요.', en: "It's fifteen thousand won." },
                    { sp: 'alex', ko: '카드 돼요?', en: 'Can I pay by card?' }
                ],
                check: { q: '티셔츠는 얼마예요?', en: 'How much is the T-shirt?', options: ['오천 원', '만 오천 원', '오만 원'], answer: 1 }
            },
            {
                img: 'a2-07-5',
                art: 'At a shoe stall, Minji sits on a low stool trying on shiny black sneakers. One shoe is clearly too big: her heel slips out of the back. The shoe vendor kneels beside her holding the shoe box.',
                lines: [
                    { sp: 'minji', ko: '이 신발 신어 봐도 돼요?', en: 'Can I try on these shoes?' },
                    { sp: 'staffM', as: '직원', ko: '네, 신어 봐도 돼요.', en: 'Sure, go ahead and try them on.' },
                    { sp: 'minji', ko: '음... 조금 커요.', en: "Hmm... they're a little big." }
                ]
            },
            {
                img: 'a2-07-6',
                art: 'Back at the clothes stall, Minji twirls in front of a tall mirror in a red pleated skirt, smiling. Alex gives two thumbs up. The clothes vendor claps her hands.',
                lines: [
                    { sp: 'minji', ko: '이 빨간색 치마는 어때요?', en: 'How about this red skirt?' },
                    { sp: 'alex', ko: '와, 정말 예뻐요!', en: "Wow, it's really pretty!" },
                    { sp: 'narrator', ko: '민지는 빨간색 치마를 샀어요.', en: 'Minji bought the red skirt.' }
                ],
                check: { q: '민지는 뭘 샀어요?', en: 'What did Minji buy?', options: ['빨간색 치마', '파란색 바지', '노란색 모자'], answer: 0 }
            },
            {
                img: 'a2-07-7',
                art: 'At a hat stall in the orange light of sunset, Alex has put on a floppy yellow bucket hat so big that it covers his eyes. Minji, holding shopping bags, doubles over laughing. The shoe-and-hat vendor grins.',
                lines: [
                    { sp: 'alex', ko: '이 노란색 모자 써 봐도 돼요?', en: 'Can I try on this yellow hat?' },
                    { sp: 'staffM', as: '직원', ko: '네, 써 봐도 돼요.', en: 'Sure, try it on.' },
                    { sp: 'minji', ko: '하하! 모자가 너무 커요!', en: 'Haha! The hat is way too big!' }
                ],
                check: { q: '모자가 어때요?', en: "How's the hat?", options: ['너무 커요', '너무 작아요'], answer: 0 }
            }
        ]
    },
    patterns: [
        {
            form: 'V + 아/어 보다',
            meaning: 'try doing V',
            note: 'Use the 아/어 form of the verb, then 보다: 입다 → 입어 보다, 신다 → 신어 보다, 먹다 → 먹어 보다, 쓰다 → 써 보다. Then change 보다 as usual: 입어 봐요, 입어 봤어요 (I tried it on), 입어 보고 싶어요.',
            examples: [
                { ko: '이 티셔츠를 입어 봤어요.', en: 'I tried on this T-shirt.' },
                { ko: '한국 음식을 먹어 보고 싶어요.', en: 'I want to try Korean food.' }
            ]
        },
        {
            form: 'V + 아/어도 돼요?',
            meaning: 'May I V? / Is it OK to V?',
            note: 'The same 아/어 form + 도 돼요: 입어 봐도 돼요?, 사진을 찍어도 돼요?, 앉아도 돼요? Say yes with 네, 돼요 and no with 아니요, 안 돼요. Spelling tip: 돼요, never 되요.',
            examples: [
                { ko: '입어 봐도 돼요?', en: 'Can I try it on?' },
                { ko: '네, 신어 봐도 돼요.', en: 'Yes, you can try them on.' },
                { ko: '여기 앉아도 돼요?', en: 'May I sit here?' }
            ]
        },
        {
            form: '입다 · 신다 · 쓰다',
            meaning: 'three verbs for "wear"',
            note: '입다 for clothes (티셔츠, 바지, 치마), 신다 for shoes and socks, 쓰다 for hats and glasses.',
            examples: [
                { ko: '바지를 입어요.', en: 'I put on trousers.' },
                { ko: '신발을 신어요.', en: 'I put on shoes.' },
                { ko: '모자를 써요.', en: 'I put on a hat.' }
            ]
        }
    ],
    sentences: [
        { ko: '입어 봐도 돼요?', en: 'Can I try it on?', blank: '봐도', alts: ['봐서', '보고', '볼'] },
        { ko: '이 신발 신어 봐도 돼요?', en: 'Can I try on these shoes?', blank: '신어', alts: ['입어', '써', '먹어'] },
        { ko: '이 모자 써 봐도 돼요?', en: 'Can I try on this hat?', blank: '써', alts: ['입어', '신어', '쓰어'] },
        { ko: '파란색 티셔츠를 입어 봤어요.', en: 'I tried on a blue T-shirt.', blank: '봤어요', alts: ['봐요', '보고', '봐도'] },
        { ko: '티셔츠가 너무 작아요.', en: 'The T-shirt is too small.', blank: '작아요', alts: ['커요', '많아요', '비싸요'] },
        { ko: '신발이 조금 커요.', en: 'The shoes are a little big.', blank: '커요', alts: ['크어요', '카요', '컸요'] },
        { ko: 'L 사이즈 있어요?', en: 'Do you have a large size?', blank: '사이즈', alts: ['신발', '모자', '치마'] },
        { ko: '빨간색 치마를 샀어요.', en: 'I bought a red skirt.', blank: '치마', alts: ['모자', '바지', '티셔츠'] },
        { ko: '사진 찍어도 돼요?', en: 'May I take a picture?', blank: '찍어도', alts: ['찍아도', '찍어서', '찍고'] },
        { ko: '네, 입어 봐도 돼요.', en: 'Yes, you can try it on.', blank: '돼요', alts: ['되요', '대요', '돼어요'] },
        { ko: '바지를 입어 보고 싶어요.', en: 'I want to try on the trousers.', blank: '입어', alts: ['신어', '써', '입고'] },
        { ko: '카드 돼요?', en: 'Can I pay by card?', blank: '돼요', alts: ['되요', '해요', '있어요'] }
    ]
});

KG.unit({
    id: 'a2-08',
    level: 'A2',
    title: 'Where Does It Hurt?',
    ko: '어디가 아파요?',
    icon: '🤒',
    goal: 'Say where it hurts, describe a cold, and follow polite instructions with -(으)세요 at the doctor and the pharmacy.',
    vocab: [
        { ko: '머리', en: 'head', emoji: '🧠', pos: 'noun', forms: ['머리가'] },
        { ko: '목', en: 'throat, neck', emoji: '🧣', pos: 'noun', forms: ['목이', '목도'] },
        { ko: '입', en: 'mouth', emoji: '👄', pos: 'noun', forms: ['입을'] },
        { ko: '배', en: 'stomach, belly', emoji: '🫃', pos: 'noun', forms: ['배도', '배는'] },
        { ko: '감기', en: 'a cold', emoji: '🤧', pos: 'noun', note: '감기에 걸렸어요 = I caught a cold.', forms: ['감기예요'] },
        { ko: '열', en: 'fever', emoji: '🌡️', pos: 'noun', note: '열이 나요 = I have a fever. (열 is also the number ten.)', forms: ['열이'] },
        { ko: '기침', en: 'cough', emoji: '😷', pos: 'noun', note: '기침을 해요 = to cough.', forms: ['기침도'] },
        { ko: '병원', en: 'hospital, clinic', emoji: '🏥', pos: 'noun' },
        { ko: '의사', en: 'doctor', emoji: '🧑‍⚕️', pos: 'noun', note: 'Call a doctor 선생님 or 의사 선생님.', forms: ['의사 선생님'] },
        { ko: '약', en: 'medicine', emoji: '💊', pos: 'noun', forms: ['약을', '약도'] },
        { ko: '약국', en: 'pharmacy', emoji: '🏪', pos: 'noun', note: '약사 = pharmacist.' },
        { ko: '번', en: 'times (counter)', emoji: '🔁', pos: 'other', note: '하루에 세 번 = three times a day.' },
        { ko: '푹', en: 'deeply, well (rest or sleep)', emoji: '😌', pos: 'other' },
        { ko: '드세요', en: 'please have (eat / drink / take)', emoji: '🥄', pos: 'expr', note: 'The polite command of 먹다 and 마시다.' }
    ],
    story: {
        title: 'Jian Catches a Cold',
        extras: 'The doctor is a calm Korean man in his forties with short grey-streaked hair, rimless glasses and a white coat with a stethoscope. The pharmacist is a young Korean woman with a low bun, a white gown and a friendly smile.',
        scenes: [
            {
                img: 'a2-08-1',
                art: "Morning in Jian's bedroom. Jian lies in bed under a blanket, his face flushed red, a box of tissues beside his pillow. Grandma sits on the edge of the bed with her hand on his forehead, looking worried. Nabi the cat curls up at the foot of the bed.",
                lines: [
                    { sp: 'narrator', ko: '지안이 아파요.', en: 'Jian is sick.' },
                    { sp: 'halmeoni', ko: '어디가 아파요?', en: 'Where does it hurt?' },
                    { sp: 'jian', ko: '머리가 아파요. 목도 아파요...', en: 'My head hurts. My throat hurts too...' }
                ],
                check: { q: '지안은 어디가 아파요?', en: "Where does Jian hurt?", options: ['머리하고 목', '배', '다리'], answer: 0 }
            },
            {
                img: 'a2-08-2',
                art: "Grandma holds a thermometer whose tip glows red and stares at it with wide, alarmed eyes. Jian coughs into his elbow. Nabi the cat watches from the blanket.",
                lines: [
                    { sp: 'halmeoni', ko: '아이고, 열이 나요!', en: 'Oh dear, you have a fever!' },
                    { sp: 'narrator', ko: '지안은 기침도 해요.', en: 'Jian is coughing too.' },
                    { sp: 'halmeoni', ko: '병원에서 의사 선생님을 만날 거예요.', en: "We're going to see the doctor at the clinic." }
                ],
                check: { q: '지안은 열이 나요?', en: 'Does Jian have a fever?', options: ['네', '아니요'], answer: 0 }
            },
            {
                img: 'a2-08-3',
                art: 'A bright clinic examination room. The doctor shines a small penlight into the open mouth of Jian, who says ah with his tongue out. Grandma sits on a chair nearby, holding the yellow cap of Jian.',
                lines: [
                    { sp: 'staffM', as: '의사', ko: '어디가 아파요? 배도 아파요?', en: 'Where does it hurt? Does your tummy hurt too?' },
                    { sp: 'jian', ko: '아니요, 배는 안 아파요. 목이 아파요.', en: "No, my tummy doesn't hurt. My throat hurts." },
                    { sp: 'staffM', as: '의사', ko: '자, 입을 벌리세요. 아~ 하세요.', en: 'Okay, open your mouth. Say "ah".' }
                ]
            },
            {
                img: 'a2-08-4',
                art: 'The doctor sits at his desk, smiling kindly. A thought bubble beside him shows Jian sleeping peacefully in bed next to a big glass of water. Grandma nods and bows her head slightly; Jian sniffles.',
                lines: [
                    { sp: 'staffM', as: '의사', ko: '감기예요. 집에서 푹 쉬세요.', en: "It's a cold. Get plenty of rest at home." },
                    { sp: 'staffM', as: '의사', ko: '그리고 물을 많이 드세요.', en: 'And drink lots of water.' },
                    { sp: 'halmeoni', ko: '네, 감사합니다.', en: 'Yes, thank you.' }
                ]
            },
            {
                img: 'a2-08-5',
                art: 'Inside a small neighbourhood pharmacy with shelves of colourful medicine boxes (no readable labels). The pharmacist hands a small white paper bag across the counter to Grandma and holds up three fingers. Jian, wearing a white face mask, leans against Grandma.',
                lines: [
                    { sp: 'narrator', ko: '할머니하고 지안은 약국에 갔어요.', en: 'Grandma and Jian went to the pharmacy.' },
                    { sp: 'staffF', as: '약사', ko: '이 약을 하루에 세 번 드세요.', en: 'Take this medicine three times a day.' },
                    { sp: 'halmeoni', ko: '네, 감사합니다.', en: 'All right, thank you.' }
                ],
                check: { q: '약을 하루에 몇 번 먹어요?', en: 'How many times a day does he take the medicine?', options: ['한 번', '두 번', '세 번'], answer: 2 }
            },
            {
                img: 'a2-08-6',
                art: "Evening at home. Grandma sits by Jian's bed holding a bowl of warm rice porridge and a spoon; a glass of water and the white medicine bag sit on the nightstand. Jian, propped up on pillows, smiles weakly. Nabi the cat sits on the blanket.",
                lines: [
                    { sp: 'halmeoni', ko: '죽 먹어요. 그리고 이 약도 먹어요.', en: 'Eat your porridge. And take this medicine too.' },
                    { sp: 'jian', ko: '네. 할머니, 고마워요.', en: 'Okay. Thank you, Grandma.' }
                ]
            },
            {
                img: 'a2-08-7',
                art: 'The next morning, sunshine fills the room. Jian, healthy again, bounces on his bed with his yellow cap on backwards while Nabi the cat leaps out of the way. Grandma yawns in the doorway, looking tired but relieved.',
                lines: [
                    { sp: 'narrator', ko: '다음 날 아침, 지안은 안 아파요.', en: "The next morning, Jian isn't sick anymore." },
                    { sp: 'jian', ko: '할머니, 이제 괜찮아요!', en: "Grandma, I'm okay now!" },
                    { sp: 'jian', ko: '할머니도 푹 쉬세요!', en: 'You get some good rest too, Grandma!' }
                ],
                check: { q: '지안은 오늘 아파요?', en: 'Is Jian sick today?', options: ['네', '아니요'], answer: 1 }
            }
        ]
    },
    patterns: [
        {
            form: 'Body part + 이/가 아파요',
            meaning: 'my ___ hurts',
            note: '이 after a consonant (목이, 입이), 가 after a vowel (머리가, 배가). Ask 어디가 아파요? Add 도 for "too": 목도 아파요. Other symptoms: 열이 나요 (fever), 기침을 해요 (cough), 감기에 걸렸어요 (caught a cold).',
            examples: [
                { ko: '머리가 아파요.', en: 'My head hurts.' },
                { ko: '목이 아파요.', en: 'My throat hurts.' },
                { ko: '열이 나요.', en: 'I have a fever.' }
            ]
        },
        {
            form: 'V + (으)세요',
            meaning: 'please do V (polite instruction)',
            note: 'Stem ends in a vowel → 세요 (쉬다 → 쉬세요, 가다 → 가세요). Ends in a consonant → 으세요 (앉다 → 앉으세요). 먹다 and 마시다 become 드세요. It is respectful: doctors and staff use it with everyone, and you use it with adults and elders. Grandma just says 먹어요 to little Jian.',
            examples: [
                { ko: '집에서 푹 쉬세요.', en: 'Get plenty of rest at home.' },
                { ko: '물을 많이 드세요.', en: 'Drink lots of water.' },
                { ko: '여기 앉으세요.', en: 'Please sit here.' }
            ]
        }
    ],
    sentences: [
        { ko: '어디가 아파요?', en: 'Where does it hurt?', blank: '어디', alts: ['누구', '언제', '왜'] },
        { ko: '머리가 아파요.', en: 'My head hurts.', blank: '가', alts: ['이', '를', '은'] },
        { ko: '목이 아파요.', en: 'My throat hurts.', blank: '이', alts: ['가', '을', '는'] },
        { ko: '열이 나요.', en: 'I have a fever.', blank: '열', alts: ['목', '입', '약'] },
        { ko: '감기에 걸렸어요.', en: 'I caught a cold.', blank: '감기', alts: ['약', '열', '번'] },
        { ko: '집에서 푹 쉬세요.', en: 'Get plenty of rest at home.', blank: '쉬세요', alts: ['쉬으세요', '쉬어세요', '쉰세요'] },
        { ko: '물을 많이 드세요.', en: 'Drink lots of water.', blank: '드세요', alts: ['드어요', '들세요', '드으세요'] },
        { ko: '여기 앉으세요.', en: 'Please sit here.', blank: '앉으세요', alts: ['앉세요', '앉아세요', '앉는세요'] },
        { ko: '하루에 세 번 드세요.', en: 'Take it three times a day.', blank: '번', alts: ['개', '장', '명'] },
        { ko: '약국에서 약을 샀어요.', en: 'I bought medicine at the pharmacy.', blank: '약국', alts: ['학교', '노래방', '해변'] },
        { ko: '기침을 많이 해요.', en: 'I cough a lot.', blank: '기침', alts: ['열', '목', '감기'] },
        { ko: '병원에 갈 거예요.', en: "I'm going to go to the doctor.", blank: '병원', alts: ['약', '목', '열'] }
    ]
});

KG.unit({
    id: 'a2-09',
    level: 'A2',
    title: 'Taking the Subway',
    ko: '지하철 타고 가요',
    icon: '🚇',
    goal: 'Get around by subway, bus and taxi: say how you travel with (으)로, ask how long it takes, and put steps in order with -고.',
    vocab: [
        { ko: '지하철', en: 'subway', emoji: '🚇', pos: 'noun', forms: ['지하철로'] },
        { ko: '버스', en: 'bus', emoji: '🚌', pos: 'noun', forms: ['버스로'] },
        { ko: '택시', en: 'taxi', emoji: '🚕', pos: 'noun', forms: ['택시로'] },
        { ko: '걸어서', en: 'on foot', emoji: '🚶', pos: 'other', note: '걸어서 가요 = I walk there (from 걷다, to walk).' },
        { ko: '교통카드', en: 'transit card', emoji: '💳', pos: 'noun', note: '카드를 찍어요 = tap the card.' },
        { ko: '호선', en: 'subway line (number)', emoji: '🛤️', pos: 'noun', note: '2호선 = Line 2, 3호선 = Line 3.' },
        { ko: '갈아타다', en: 'to transfer, to change (trains)', emoji: '🔁', pos: 'verb', polite: '갈아타요', forms: ['갈아타세요', '갈아타요'] },
        { ko: '내리다', en: 'to get off', emoji: '⬇️', pos: 'verb', polite: '내려요', forms: ['내렸어요'] },
        { ko: '출구', en: 'exit', emoji: '🚪', pos: 'noun', note: '5번 출구 = Exit 5.' },
        { ko: '오른쪽', en: 'right side', emoji: '👉', pos: 'noun', note: '왼쪽 = left side.', forms: ['오른쪽으로'] },
        { ko: '얼마나', en: 'how (long, much)', emoji: '⏱️', pos: 'other' },
        { ko: '걸리다', en: 'to take (time)', emoji: '⏳', pos: 'verb', polite: '걸려요', forms: ['걸렸어요'] },
        { ko: '혼자', en: 'alone, by oneself', emoji: '🧍', pos: 'other' },
        { ko: '경복궁', en: 'Gyeongbokgung Palace', emoji: '🏯', pos: 'noun', forms: ['경복궁역'] }
    ],
    story: {
        title: 'Alex Rides Alone',
        extras: 'The station attendant is a Korean man in his thirties in a navy subway uniform and cap. The subway passenger is a kind Korean woman in her fifties with short permed brown hair, a beige coat and a shopping bag; she is not the grandmother.',
        scenes: [
            {
                img: 'a2-09-1',
                art: 'Saturday morning in the small dorm room of Alex. Alex ties his sneakers at the door, red backpack on, smiling with determination. One single thought bubble above him shows a subway train. One picture, not a comic strip or collage.',
                lines: [
                    { sp: 'narrator', ko: '토요일이에요. 민지가 경복궁 앞에서 기다려요.', en: "It's Saturday. Minji is waiting in front of Gyeongbokgung Palace." },
                    { sp: 'alex', ko: '버스로 가요? 택시로 가요? 아니요, 오늘은 혼자 지하철로 갈 거예요!', en: "By bus? By taxi? No, today I'm taking the subway on my own!" }
                ]
            },
            {
                img: 'a2-09-2',
                art: 'A clean Seoul subway station. Alex taps a transit card on the round reader of a ticket gate, which glows green. Behind him, a big wall map of colourful subway lines and dots (no readable text). Alex glances at it and scratches his head.',
                lines: [
                    { sp: 'narrator', ko: '알렉스는 교통카드를 찍고 들어가요.', en: 'Alex taps his transit card and goes in.' },
                    { sp: 'alex', ko: '음... 경복궁은 어떻게 가요?', en: 'Hmm... how do I get to Gyeongbokgung?' }
                ]
            },
            {
                img: 'a2-09-3',
                art: 'Alex talks with the station attendant, who traces a route in the air with his finger. Beside them a simple diagram floats: a green line, a dot where it meets an orange line, and the orange line continuing. Alex nods, counting on his fingers.',
                lines: [
                    { sp: 'alex', ko: '저기요, 경복궁에 어떻게 가요?', en: 'Excuse me, how do I get to Gyeongbokgung?' },
                    { sp: 'staffM', as: '역무원', ko: '2호선을 타고 을지로3가역에서 3호선으로 갈아타세요.', en: 'Take Line 2, then change to Line 3 at Euljiro 3-ga Station.' },
                    { sp: 'alex', ko: '네, 감사합니다!', en: 'Okay, thank you!' }
                ],
                check: { q: '알렉스는 몇 호선으로 갈아타요?', en: 'Which line does Alex change to?', options: ['2호선', '3호선', '5호선'], answer: 1 }
            },
            {
                img: 'a2-09-4',
                art: 'Inside a subway car. Alex holds a strap and leans toward the kind passenger, who smiles and holds up three fingers and then makes a zero with her hand. The dark tunnel streaks past the windows.',
                lines: [
                    { sp: 'alex', ko: '저기요, 경복궁까지 얼마나 걸려요?', en: 'Excuse me, how long does it take to Gyeongbokgung?' },
                    { sp: 'staffF', as: '승객', ko: '삼십 분 걸려요.', en: 'It takes thirty minutes.' }
                ],
                check: { q: '경복궁까지 얼마나 걸려요?', en: 'How long does it take to Gyeongbokgung?', options: ['십 분', '삼십 분', '한 시간'], answer: 1 }
            },
            {
                img: 'a2-09-5',
                art: 'A busy underground transfer corridor. Alex walks quickly among commuters, following orange arrows painted on the floor (no text). He looks a little lost but hopeful, checking left and right.',
                lines: [
                    { sp: 'narrator', ko: '알렉스는 을지로3가역에서 3호선으로 갈아타요.', en: 'Alex changes to Line 3 at Euljiro 3-ga Station.' },
                    { sp: 'alex', ko: '3호선은 주황색이에요. 이쪽이에요!', en: "Line 3 is orange. It's this way!" }
                ]
            },
            {
                img: 'a2-09-6',
                art: 'Alex climbs the stairs of a subway exit up into bright daylight, phone pressed to his ear. Ahead and to the right, the stone walls and wooden gate of the palace are visible.',
                lines: [
                    { sp: 'narrator', ko: '알렉스는 경복궁역에서 내렸어요.', en: 'Alex got off at Gyeongbokgung Station.' },
                    { sp: 'minji', ko: '5번 출구로 나와요. 그리고 오른쪽으로 걸어서 오 분이에요!', en: "Come out of Exit 5. Then it's five minutes' walk to the right!" }
                ],
                check: { q: '알렉스는 몇 번 출구로 나가요?', en: 'Which exit does Alex go out of?', options: ['1번', '3번', '5번'], answer: 2 }
            },
            {
                img: 'a2-09-7',
                art: 'In front of the grand gate of Gyeongbokgung Palace with mountains behind, Minji waves happily. Alex jogs up, proudly holding up his transit card, a little sweaty. Tourists in colourful hanbok stroll in the background.',
                lines: [
                    { sp: 'alex', ko: '민지 씨! 지하철 타고 혼자 왔어요!', en: 'Minji! I came by subway all by myself!' },
                    { sp: 'minji', ko: '와, 대단해요! 얼마나 걸렸어요?', en: 'Wow, amazing! How long did it take?' },
                    { sp: 'alex', ko: '음... 한 시간 걸렸어요.', en: 'Um... it took an hour.' }
                ],
                check: { q: '알렉스는 얼마나 걸렸어요?', en: 'How long did it take Alex?', options: ['삼십 분', '한 시간', '두 시간'], answer: 1 }
            }
        ]
    },
    patterns: [
        {
            form: 'N + (으)로',
            meaning: 'by (a means of transport) / toward (a direction)',
            note: 'After a vowel or ㄹ → 로 (버스로, 택시로, 지하철로, 5번 출구로). After any other consonant → 으로 (3호선으로, 오른쪽으로). On foot is 걸어서, with no 로.',
            examples: [
                { ko: '지하철로 가요.', en: 'I go by subway.' },
                { ko: '3호선으로 갈아타세요.', en: 'Change to Line 3.' },
                { ko: '오른쪽으로 가세요.', en: 'Go to the right.' }
            ]
        },
        {
            form: 'V + 고 (and then)',
            meaning: 'do one thing, then the next',
            note: 'Put 고 on the first verb stem to list steps in order: 지하철을 타고 가요. 2호선을 타고 3호선으로 갈아타요. The tense goes only on the last verb: 카드를 찍고 들어갔어요.',
            examples: [
                { ko: '지하철 타고 가요.', en: 'I take the subway there.' },
                { ko: '카드를 찍고 들어가요.', en: 'I tap my card and go in.' }
            ]
        },
        {
            form: '얼마나 걸려요?',
            meaning: 'How long does it take?',
            note: 'Answer with a time + 걸려요: 삼십 분 걸려요, 한 시간 걸려요. 까지 means "up to, as far as": 경복궁까지. Past: 한 시간 걸렸어요.',
            examples: [
                { ko: '경복궁까지 얼마나 걸려요?', en: 'How long does it take to Gyeongbokgung?' },
                { ko: '버스로 이십 분 걸려요.', en: 'It takes twenty minutes by bus.' }
            ]
        }
    ],
    sentences: [
        { ko: '지하철로 가요.', en: 'I go by subway.', blank: '로', alts: ['으로', '을', '에서'] },
        { ko: '저는 걸어서 가요.', en: 'I walk there.', blank: '걸어서', alts: ['걸어로', '걷고', '걸으로'] },
        { ko: '오른쪽으로 가세요.', en: 'Go to the right.', blank: '으로', alts: ['로', '를', '에서'] },
        { ko: '3호선으로 갈아타세요.', en: 'Change to Line 3.', blank: '갈아타세요', alts: ['내리세요', '앉으세요', '드세요'] },
        { ko: '경복궁역에서 내려요.', en: 'I get off at Gyeongbokgung Station.', blank: '내려요', alts: ['내러요', '내레요', '내리요'] },
        { ko: '얼마나 걸려요?', en: 'How long does it take?', blank: '얼마나', alts: ['얼마', '어디', '누구'] },
        { ko: '삼십 분 걸려요.', en: 'It takes thirty minutes.', blank: '걸려요', alts: ['걸러요', '걸리요', '걸랴요'] },
        { ko: '지하철을 타고 가요.', en: 'I take the subway there.', blank: '타고', alts: ['탈', '타는', '타요'] },
        { ko: '카드를 찍고 들어가요.', en: 'I tap my card and go in.', blank: '찍고', alts: ['찍을', '찍는', '찍어요'] },
        { ko: '택시로 십 분 걸려요.', en: 'It takes ten minutes by taxi.', blank: '택시', alts: ['출구', '오른쪽', '호선'] },
        { ko: '경복궁까지 얼마나 걸려요?', en: 'How long does it take to Gyeongbokgung?', blank: '까지', alts: ['을', '이', '를'] },
        { ko: '혼자 왔어요.', en: 'I came by myself.', blank: '혼자', alts: ['얼마나', '오른쪽', '같이'] }
    ]
});

KG.unit({
    id: 'a2-10',
    level: 'A2',
    title: 'Shall We Go Together?',
    ko: '같이 갈까요?',
    icon: '🎬',
    goal: 'Make plans on the phone: suggest things with -(으)ㄹ까요?, say “let’s” with -아/어요, and set a time and place.',
    vocab: [
        { ko: '여보세요', en: 'hello (on the phone)', emoji: '📞', pos: 'expr' },
        { ko: '전화', en: 'phone call', emoji: '☎️', pos: 'noun', note: '전화하다 = to call.', forms: ['전화해요'] },
        { ko: '시간 있어요?', en: 'are you free? (do you have time?)', emoji: '🕒', pos: 'expr' },
        { ko: '약속', en: 'plans, appointment, promise', emoji: '🤙', pos: 'noun', note: '약속 있어요? = Do you have plans?' },
        { ko: '영화', en: 'movie', emoji: '🎬', pos: 'noun' },
        { ko: '영화관', en: 'movie theater', emoji: '🎦', pos: 'noun' },
        { ko: '공포 영화', en: 'horror movie', emoji: '👻', pos: 'noun' },
        { ko: '무슨', en: 'what kind of, which', emoji: '❔', pos: 'other' },
        { ko: '만나다', en: 'to meet', emoji: '🤝', pos: 'verb', polite: '만나요', forms: ['만날까요'] },
        { ko: '예매하다', en: 'to book (tickets)', emoji: '🎟️', pos: 'verb', polite: '예매해요', forms: ['예매했어요'] },
        { ko: '팝콘', en: 'popcorn', emoji: '🍿', pos: 'noun' },
        { ko: '이따가', en: 'later (today)', emoji: '🔜', pos: 'other', note: '이따가 봐요 = See you later.' },
        { ko: '그래요', en: 'okay, sounds good', emoji: '👌', pos: 'expr' },
        { ko: '다음에', en: 'next time', emoji: '🔄', pos: 'other', forms: ['다음에는'] }
    ],
    story: {
        title: 'Movie Night',
        scenes: [
            {
                img: 'a2-10-1',
                art: 'Split picture. Left: Junho at his office desk at lunchtime, tie loosened, phone at his ear, smiling. Right: Minji in a quiet university library, answering her phone with a hand cupped over her mouth.',
                lines: [
                    { sp: 'narrator', ko: '준호가 회사에서 전화해요.', en: 'Junho makes a call from his office.' },
                    { sp: 'minji', ko: '여보세요? 오빠?', en: 'Hello? Junho?' },
                    { sp: 'junho', ko: '오늘 저녁에 시간 있어요?', en: 'Are you free this evening?' }
                ]
            },
            {
                img: 'a2-10-2',
                art: 'Split picture. Junho grins in his office; a thought bubble above him shows a spooky old house with a pale ghost in the window. Minji in the library raises her eyebrows in surprise.',
                lines: [
                    { sp: 'junho', ko: '같이 영화 볼까요?', en: 'Shall we see a movie together?' },
                    { sp: 'minji', ko: '좋아요! 무슨 영화 볼까요?', en: 'Sure! What movie shall we see?' },
                    { sp: 'junho', ko: '공포 영화 어때요?', en: 'How about a horror movie?' }
                ],
                check: { q: '오늘 저녁에 뭐 할 거예요?', en: 'What are they going to do this evening?', options: ['영화를 볼 거예요', '등산할 거예요', '수영할 거예요'], answer: 0 }
            },
            {
                img: 'a2-10-3',
                art: 'Split picture. Minji gives a cheerful thumbs-up toward her phone. Junho at his desk nods and gives a thumbs-up back.',
                lines: [
                    { sp: 'minji', ko: '알렉스 씨도 같이 갈까요?', en: 'Shall we invite Alex too?' },
                    { sp: 'junho', ko: '그래요. 같이 가요!', en: "Sure. Let's all go together!" }
                ]
            },
            {
                img: 'a2-10-4',
                art: 'Split picture. Left: Alex lying on the bed in his dorm room with a comic book, sitting up excitedly with his phone at his ear. Right: Minji on her phone outside the library steps.',
                lines: [
                    { sp: 'alex', ko: '여보세요?', en: 'Hello?' },
                    { sp: 'minji', ko: '알렉스 씨, 오늘 저녁에 약속 있어요? 오빠하고 같이 영화 볼까요?', en: 'Alex, do you have plans this evening? Shall we see a movie with my brother?' },
                    { sp: 'alex', ko: '약속 없어요. 좋아요! 몇 시에 만날까요?', en: 'No plans. Sounds great! What time shall we meet?' }
                ],
                check: { q: '알렉스는 오늘 저녁에 약속이 있어요?', en: 'Does Alex have plans this evening?', options: ['네', '아니요'], answer: 1 }
            },
            {
                img: 'a2-10-5',
                art: "Minji, on the phone, holds up seven fingers. A thought bubble shows the glowing entrance of a movie theater at night and a round clock pointing to seven o'clock.",
                lines: [
                    { sp: 'minji', ko: '일곱 시에 영화관 앞에서 만나요.', en: "Let's meet in front of the movie theater at seven." },
                    { sp: 'alex', ko: '일곱 시요? 그래요. 이따가 봐요!', en: 'Seven? Okay. See you later!' }
                ],
                check: { q: '몇 시에 만나요?', en: 'What time are they meeting?', options: ['여섯 시', '일곱 시', '여덟 시'], answer: 1 }
            },
            {
                img: 'a2-10-6',
                art: 'The bright lobby of a movie theater in the evening. Junho proudly holds up three movie tickets fanned out in his hand. Alex stands at the snack counter pointing at a huge bucket of popcorn. Minji laughs beside him.',
                lines: [
                    { sp: 'junho', ko: '표는 제가 예매했어요.', en: 'I booked the tickets.' },
                    { sp: 'alex', ko: '그럼 팝콘은 제가 살까요?', en: 'Then shall I buy the popcorn?' },
                    { sp: 'minji', ko: '좋아요! 콜라도 사요.', en: "Great! Let's get cola too." }
                ],
                check: { q: '누가 팝콘을 사요?', en: 'Who is buying the popcorn?', options: ['준호', '알렉스', '민지'], answer: 1 }
            },
            {
                img: 'a2-10-7',
                art: 'Inside a dark movie theater lit only by the screen, which shows a gloomy, shadowy hallway. Junho, who chose the horror film, hides his face behind the popcorn bucket, trembling. Alex and Minji, sitting on either side of him, giggle at him.',
                lines: [
                    { sp: 'narrator', ko: '영화가 정말 무서워요!', en: 'The movie is really scary!' },
                    { sp: 'junho', ko: '다음에는... 코미디 영화 볼까요?', en: 'Next time... shall we watch a comedy?' },
                    { sp: 'minji', ko: '하하, 그래요!', en: 'Haha, okay!' }
                ]
            }
        ]
    },
    patterns: [
        {
            form: 'V + (으)ㄹ까요?',
            meaning: 'Shall we...? / Shall I...?',
            note: 'Stem ends in a vowel → ㄹ까요 (가다 → 갈까요, 보다 → 볼까요). Ends in a consonant → 을까요 (먹다 → 먹을까요). Stems ending in ㄹ just add 까요 (놀다 → 놀까요). Use it to suggest something, or to offer: 제가 살까요? = Shall I buy it?',
            examples: [
                { ko: '같이 영화 볼까요?', en: 'Shall we see a movie together?' },
                { ko: '몇 시에 만날까요?', en: 'What time shall we meet?' },
                { ko: '뭐 먹을까요?', en: 'What shall we eat?' }
            ]
        },
        {
            form: 'V + 아/어요 = “let’s”',
            meaning: "Let's... (suggesting or agreeing)",
            note: 'The normal 해요 form also means “let’s” when you suggest doing something together, often with 같이: 같이 가요! 일곱 시에 만나요. Context tells you whether it means “we do” or “let’s do”.',
            examples: [
                { ko: '같이 가요!', en: "Let's go together!" },
                { ko: '영화관 앞에서 만나요.', en: "Let's meet in front of the movie theater." }
            ]
        },
        {
            form: '여보세요 · 시간 있어요?',
            meaning: 'phone phrases for making plans',
            note: '여보세요? = Hello? (only on the phone). 시간 있어요? = Are you free? 약속 있어요? = Do you have plans? 이따가 봐요 = See you later.',
            examples: [
                { ko: '여보세요? 민지 씨?', en: 'Hello? Minji?' },
                { ko: '오늘 저녁에 시간 있어요?', en: 'Are you free this evening?' }
            ]
        }
    ],
    sentences: [
        { ko: '같이 영화 볼까요?', en: 'Shall we see a movie together?', blank: '볼까요', alts: ['봘까요', '보을까요', '봐까요'] },
        { ko: '뭐 먹을까요?', en: 'What shall we eat?', blank: '먹을까요', alts: ['먹까요', '먹어까요', '먹는까요'] },
        { ko: '몇 시에 만날까요?', en: 'What time shall we meet?', blank: '만날까요', alts: ['만나을까요', '만나까요', '만났까요'] },
        { ko: '일곱 시에 만나요.', en: "Let's meet at seven.", blank: '시에', alts: ['시를', '시가', '시는'] },
        { ko: '오늘 저녁에 시간 있어요?', en: 'Are you free this evening?', blank: '시간', alts: ['팝콘', '영화관', '전화'] },
        { ko: '여보세요? 민지 씨?', en: 'Hello? Minji?', blank: '여보세요', alts: ['안녕히 가세요', '죄송해요', '고마워요'] },
        { ko: '오늘 약속 있어요?', en: 'Do you have plans today?', blank: '약속', alts: ['영화관', '팝콘', '오른쪽'] },
        { ko: '제가 팝콘을 살까요?', en: 'Shall I buy the popcorn?', blank: '살까요', alts: ['사을까요', '샀까요', '사까요'] },
        { ko: '같이 가요!', en: "Let's go together!", blank: '같이', alts: ['혼자', '왜', '얼마나'] },
        { ko: '무슨 영화 볼까요?', en: 'What movie shall we see?', blank: '무슨', alts: ['누구', '어디', '얼마나'] },
        { ko: '이따가 봐요!', en: 'See you later!', blank: '이따가', alts: ['어제', '지난', '아직'] },
        { ko: '영화관 앞에서 만나요.', en: "Let's meet in front of the movie theater.", blank: '앞에서', alts: ['앞에', '앞을', '앞이'] }
    ]
});

KG.unit({
    id: 'a2-11',
    level: 'A2',
    title: 'This One Is Tastier',
    ko: '이게 더 맛있어요',
    icon: '🍢',
    goal: 'Compare things with 보다 더, pick the best with 제일 and 가장, and say "but" with -지만.',
    vocab: [
        { ko: '야시장', en: 'night market', emoji: '🏮', pos: 'noun' },
        { ko: '떡볶이', en: 'tteokbokki (spicy rice cakes)', emoji: '🌶️', pos: 'noun', forms: ['떡볶이가', '떡볶이보다'] },
        { ko: '호떡', en: 'hotteok (sweet filled pancake)', emoji: '🥞', pos: 'noun' },
        { ko: '어묵', en: 'fish cake', emoji: '🍢', pos: 'noun' },
        { ko: '보다', en: 'than', emoji: '⚖️', pos: 'other', note: 'Attach it to the thing you compare against: 떡볶이보다 = than tteokbokki.' },
        { ko: '더', en: 'more', emoji: '➕', pos: 'other' },
        { ko: '제일', en: 'the most, the best', emoji: '🥇', pos: 'other' },
        { ko: '가장', en: 'the most (a bit more formal)', emoji: '🏆', pos: 'other' },
        { ko: '싸다', en: 'to be cheap', emoji: '🪙', pos: 'adj', polite: '싸요', note: '비싸다 = to be expensive.' },
        { ko: '뜨겁다', en: 'to be hot (to the touch)', emoji: '🔥', pos: 'adj', polite: '뜨거워요', forms: ['뜨겁지만'], note: 'ㅂ irregular, like 더워요. Use 덥다 for weather, 뜨겁다 for food and things.' },
        { ko: '줄', en: 'line, queue', emoji: '🧍', pos: 'noun', forms: ['줄이'] },
        { ko: '길다', en: 'to be long', emoji: '📏', pos: 'adj', polite: '길어요' },
        { ko: '고르다', en: 'to choose, to pick', emoji: '👆', pos: 'verb', polite: '골라요', forms: ['골라요'], note: '르 irregular: 고르다 → 골라요.' }
    ],
    story: {
        title: 'The Night Market',
        extras: 'The food-stall owners are middle-aged Korean vendors in aprons and arm sleeves; shoppers in the background are small and generic.',
        scenes: [
            {
                img: 'a2-11-1',
                art: 'A glowing night market street lined with food stalls under strings of warm lanterns: steaming pans of red tteokbokki, griddles of hotteok, trays of kimbap rolls and pots of fish-cake skewers. Minji, Alex, Junho and Jian walk in, eyes wide, sniffing the air.',
                lines: [
                    { sp: 'narrator', ko: '여기는 야시장이에요.', en: 'This is a night market.' },
                    { sp: 'narrator', ko: '음식이 정말 많아요!', en: 'There is so much food!' }
                ]
            },
            {
                img: 'a2-11-2',
                art: "At a tteokbokki stall, Alex's face is bright red and sweaty; he fans his open mouth with his hand. Minji happily eats another piece of red tteokbokki from a toothpick.",
                lines: [
                    { sp: 'alex', ko: '와, 떡볶이가 정말 매워요!', en: 'Whoa, the tteokbokki is really spicy!' },
                    { sp: 'minji', ko: '맵지만 맛있어요!', en: "It's spicy, but it's tasty!" }
                ],
                check: { q: '떡볶이는 어때요?', en: "How's the tteokbokki?", options: ['매워요', '달아요', '차가워요'], answer: 0 }
            },
            {
                img: 'a2-11-3',
                art: 'Alex happily munches a fat roll of kimbap, relieved. Junho holds a plate of red tteokbokki in one hand and a plate of kimbap in the other, raising and lowering them like a balance scale.',
                lines: [
                    { sp: 'alex', ko: '저는 떡볶이보다 김밥이 더 좋아요.', en: 'I like kimbap more than tteokbokki.' },
                    { sp: 'junho', ko: '김밥이 더 싸요. 그리고 안 매워요!', en: "Kimbap is cheaper. And it's not spicy!" }
                ]
            },
            {
                img: 'a2-11-4',
                art: 'A hotteok stall with a very long line of people, much longer than the short lines at the other stalls. Jian eagerly drags Junho by the hand toward the end of the line; Junho sighs.',
                lines: [
                    { sp: 'narrator', ko: '호떡 가게 줄이 제일 길어요.', en: 'The hotteok stall has the longest line.' },
                    { sp: 'jian', ko: '줄이 길지만 호떡 먹고 싶어요!', en: 'The line is long, but I want hotteok!' }
                ],
                check: { q: '어느 가게 줄이 제일 길어요?', en: 'Which stall has the longest line?', options: ['호떡 가게', '떡볶이 가게', '김밥 가게'], answer: 0 }
            },
            {
                img: 'a2-11-5',
                art: 'Jian bites into a hotteok and a puff of steam bursts out; his eyes go wide and he blows on it. Dark brown sugar syrup drips from the pancake. Minji laughs beside him.',
                lines: [
                    { sp: 'jian', ko: '앗, 뜨거워요!', en: "Ow, it's hot!" },
                    { sp: 'jian', ko: '뜨겁지만 정말 맛있어요!', en: "It's hot, but it's really good!" }
                ],
                check: { q: '호떡은 어때요?', en: "How's the hotteok?", options: ['뜨거워요', '차가워요', '매워요'], answer: 0 }
            },
            {
                img: 'a2-11-6',
                art: 'The four stand around a small standing table covered with empty paper plates and skewers. Each holds up a different food: Alex a piece of kimbap, Jian a half-eaten hotteok, Minji a toothpick of tteokbokki, Junho a fish-cake skewer.',
                lines: [
                    { sp: 'minji', ko: '하나만 골라요. 뭐가 제일 맛있었어요?', en: 'Pick just one. What was the tastiest?' },
                    { sp: 'jian', ko: '호떡이 제일 맛있었어요!', en: 'The hotteok was the tastiest!' },
                    { sp: 'alex', ko: '저는 김밥이 가장 좋았어요.', en: 'I liked the kimbap best.' }
                ],
                check: { q: '지안은 뭐가 제일 맛있었어요?', en: 'What did Jian think was tastiest?', options: ['호떡', '김밥', '떡볶이'], answer: 0 }
            },
            {
                img: 'a2-11-7',
                art: 'Late at night beside a fish-cake stall, steam rising into the cold air. Junho hands Alex a paper cup of hot broth and a fish-cake skewer. Alex sips and closes his eyes in bliss. Minji laughs, and Jian yawns, full and sleepy.',
                lines: [
                    { sp: 'junho', ko: '날씨는 춥지만 어묵은 따뜻해요.', en: "The weather is cold, but the fish cake is warm." },
                    { sp: 'alex', ko: '와, 어묵이 김밥보다 더 맛있어요!', en: 'Wow, fish cake is even tastier than kimbap!' },
                    { sp: 'minji', ko: '하하, 알렉스 씨는 다 좋아해요!', en: 'Haha, Alex, you like everything!' }
                ]
            }
        ]
    },
    patterns: [
        {
            form: 'A + 보다 (더) + adjective',
            meaning: 'more ... than A',
            note: '보다 goes on the thing you compare against. 더 (more) is optional but common. Word order is free: 김밥이 떡볶이보다 싸요 = 떡볶이보다 김밥이 싸요.',
            examples: [
                { ko: '김밥이 떡볶이보다 더 싸요.', en: 'Kimbap is cheaper than tteokbokki.' },
                { ko: '저는 떡볶이보다 김밥이 더 좋아요.', en: 'I like kimbap more than tteokbokki.' },
                { ko: '오늘이 어제보다 더 추워요.', en: "Today is colder than yesterday." }
            ]
        },
        {
            form: '제일 / 가장 + adjective',
            meaning: 'the most ...',
            note: '제일 and 가장 both mean "the most". 제일 is more common in conversation. 뭐가 제일 맛있어요? = What is the tastiest?',
            examples: [
                { ko: '호떡 가게 줄이 제일 길어요.', en: 'The hotteok stall has the longest line.' },
                { ko: '뭐가 제일 맛있었어요?', en: 'What was the tastiest?' }
            ]
        },
        {
            form: 'A/V + 지만',
            meaning: 'but, although',
            note: 'Add 지만 straight to the stem, with or without batchim: 맵다 → 맵지만, 비싸다 → 비싸지만, 길다 → 길지만. No irregular change before 지: 뜨겁지만, 춥지만.',
            examples: [
                { ko: '맵지만 맛있어요.', en: "It's spicy, but it's tasty." },
                { ko: '줄이 길지만 기다릴 거예요.', en: "The line is long, but I'll wait." }
            ]
        }
    ],
    sentences: [
        { ko: '김밥이 떡볶이보다 싸요.', en: 'Kimbap is cheaper than tteokbokki.', blank: '보다', alts: ['하고', '에서', '도'] },
        { ko: '이게 더 맛있어요.', en: 'This one is tastier.', blank: '더', alts: ['왜', '뭐', '어디'] },
        { ko: '호떡이 제일 맛있어요.', en: 'Hotteok is the tastiest.', blank: '제일', alts: ['보다', '아직', '얼마나'] },
        { ko: '맵지만 맛있어요.', en: "It's spicy, but it's tasty.", blank: '지만', alts: ['아서', '세요', '까요'] },
        { ko: '뜨겁지만 정말 맛있어요.', en: "It's hot, but it's really tasty.", blank: '뜨겁지만', alts: ['뜨거워지만', '뜨거지만', '뜨겁워지만'] },
        { ko: '줄이 제일 길어요.', en: 'This line is the longest.', blank: '길어요', alts: ['짧아요', '싸요', '뜨거워요'] },
        { ko: '오늘이 어제보다 더 추워요.', en: 'Today is colder than yesterday.', blank: '추워요', alts: ['춥어요', '추와요', '추웠어요'] },
        { ko: '저는 떡볶이보다 김밥이 더 좋아요.', en: 'I like kimbap more than tteokbokki.', blank: '김밥이', alts: ['김밥을', '김밥에', '김밥로'] },
        { ko: '뭐가 제일 맛있었어요?', en: 'What was the tastiest?', blank: '뭐가', alts: ['뭐를', '뭐에', '누가'] },
        { ko: '이 가게는 비싸지만 맛있어요.', en: 'This place is expensive, but it is tasty.', blank: '비싸지만', alts: ['비싸서', '비싸요', '비싸까요'] },
        { ko: '하나 골라요.', en: 'Pick one.', blank: '골라요', alts: ['고르어요', '골러요', '고라요'] },
        { ko: '어묵이 가장 따뜻해요.', en: 'The fish cake is the warmest.', blank: '가장', alts: ['보다', '아직', '왜'] }
    ]
});

KG.unit({
    id: 'a2-12',
    level: 'A2',
    title: "Grandma's Birthday",
    ko: '할머니 생신',
    icon: '🎂',
    goal: 'Talk politely about elders with -(으)시- and special honorific words, and ask for help with -아/어 주세요.',
    vocab: [
        { ko: '생신', en: 'birthday (honorific)', emoji: '🎂', pos: 'noun', note: '생일 → 생신 for elders.' },
        { ko: '연세', en: 'age (honorific)', emoji: '👵', pos: 'noun', note: '나이 → 연세. 연세가 어떻게 되세요? = How old are you? (to an elder)' },
        { ko: '생신 축하드려요', en: 'happy birthday (to an elder)', emoji: '🎉', pos: 'expr', forms: ['축하드려요'] },
        { ko: '계시다', en: 'to be (somewhere) — honorific of 있다', emoji: '🏠', pos: 'verb', polite: '계세요', forms: ['계세요'] },
        { ko: '주무시다', en: 'to sleep — honorific of 자다', emoji: '😴', pos: 'verb', polite: '주무세요', forms: ['주무세요'] },
        { ko: '드시다', en: 'to eat, to drink — honorific of 먹다 / 마시다', emoji: '🍽️', pos: 'verb', polite: '드세요', forms: ['드세요'] },
        { ko: '선물', en: 'present, gift', emoji: '🎁', pos: 'noun' },
        { ko: '케이크', en: 'cake', emoji: '🍰', pos: 'noun' },
        { ko: '꽃', en: 'flower', emoji: '💐', pos: 'noun', forms: ['꽃을'] },
        { ko: '미역국', en: 'seaweed soup (eaten on birthdays)', emoji: '🍲', pos: 'noun', forms: ['미역국을'] },
        { ko: '만들다', en: 'to make', emoji: '👩‍🍳', pos: 'verb', polite: '만들어요' },
        { ko: '도와주다', en: 'to help (someone)', emoji: '🤝', pos: 'verb', polite: '도와줘요', forms: ['도와주세요'], note: 'From 돕다 (ㅂ irregular → 도와).' },
        { ko: '촛불', en: 'candle (flame)', emoji: '🕯️', pos: 'noun', forms: ['촛불을'] },
        { ko: '끄다', en: 'to blow out, to turn off', emoji: '💨', pos: 'verb', polite: '꺼요', forms: ['끄세요', '끄셨어요'], note: 'ㅡ drops: 끄다 → 꺼요. Honorific: 끄세요.' }
    ],
    story: {
        title: 'A Surprise for Grandma',
        scenes: [
            {
                img: 'a2-12-1',
                art: "Early morning in the family kitchen. Minji, Junho and Jian huddle together and whisper; Jian presses a finger to his lips. Through a half-open door in the background, Grandma is asleep in her bed. Nabi the cat sits on a kitchen chair, watching.",
                lines: [
                    { sp: 'narrator', ko: '오늘은 할머니 생신이에요.', en: "Today is Grandma's birthday." },
                    { sp: 'jian', ko: '할머니는 어디 계세요?', en: 'Where is Grandma?' },
                    { sp: 'minji', ko: '방에 계세요. 아직 주무세요. 쉿!', en: "She's in her room. She's still sleeping. Shh!" }
                ],
                check: { q: '할머니는 지금 뭐 하세요?', en: 'What is Grandma doing now?', options: ['주무세요', '드세요', '노래하세요'], answer: 0 }
            },
            {
                img: 'a2-12-2',
                art: 'Junho, wearing an apron, stirs a big pot of dark-green seaweed soup on the stove. Jian stands on tiptoe on a stool, stretching for a big bowl on a high shelf. Minji arranges a vase on the dining table.',
                lines: [
                    { sp: 'narrator', ko: '준호가 미역국을 만들어요. 한국에서는 생일에 미역국을 먹어요.', en: 'Junho is making seaweed soup. In Korea, people eat seaweed soup on birthdays.' },
                    { sp: 'jian', ko: '형, 좀 도와주세요! 너무 높아요.', en: "Bro, please help me! It's too high." }
                ]
            },
            {
                img: 'a2-12-3',
                art: 'At the front door, Alex arrives holding a cake box tied with a ribbon in one hand and a bouquet of pink and yellow flowers in the other. Minji opens the door, smiling, with a finger to her lips.',
                lines: [
                    { sp: 'alex', ko: '안녕하세요! 케이크하고 꽃을 사 왔어요.', en: 'Hi! I brought a cake and flowers.' },
                    { sp: 'minji', ko: '고마워요! 할머니는 꽃을 정말 좋아하세요.', en: 'Thank you! Grandma really loves flowers.' }
                ],
                check: { q: '할머니는 뭘 좋아하세요?', en: 'What does Grandma love?', options: ['꽃', '공포 영화', '떡볶이'], answer: 0 }
            },
            {
                img: 'a2-12-4',
                art: "Minji, Alex, Junho and Jian crouch behind the living-room sofa, holding the cake, the flowers and party poppers. Jian peeks over the sofa toward the hallway, where Grandma's shadow is approaching.",
                lines: [
                    { sp: 'alex', ko: '할머니 연세가 어떻게 되세요?', en: 'How old is your grandma?' },
                    { sp: 'minji', ko: '올해 일흔다섯이세요.', en: "She's seventy-five this year." },
                    { sp: 'jian', ko: '쉿! 할머니가 오세요!', en: "Shh! Grandma's coming!" }
                ],
                check: { q: '할머니는 연세가 어떻게 되세요?', en: 'How old is Grandma?', options: ['예순다섯', '일흔다섯', '여든다섯'], answer: 1 }
            },
            {
                img: 'a2-12-5',
                art: 'Grandma steps into the living room and freezes in happy surprise, both hands on her cheeks, as Minji, Alex, Junho and Jian jump up and pop party poppers. Colourful confetti and paper streamers fly through the air; Nabi the cat leaps up in surprise.',
                lines: [
                    { sp: 'minji', ko: '할머니, 생신 축하드려요!', en: 'Happy birthday, Grandma!' },
                    { sp: 'jian', ko: '축하드려요!', en: 'Happy birthday!' },
                    { sp: 'halmeoni', ko: '아이고, 이게 다 뭐예요? 정말 고마워요!', en: 'Oh my, what is all this? Thank you so much!' }
                ]
            },
            {
                img: 'a2-12-6',
                art: 'Grandma sits at the dining table in front of a cake glowing with candles, cheeks puffed out as she blows them out. Minji, Alex, Junho and Jian clap around her, and Jian bounces on his chair.',
                lines: [
                    { sp: 'jian', ko: '할머니, 촛불을 끄세요!', en: 'Grandma, blow out the candles!' },
                    { sp: 'narrator', ko: '할머니가 촛불을 끄셨어요.', en: 'Grandma blew out the candles.' }
                ],
                check: { q: '누가 촛불을 끄셨어요?', en: 'Who blew out the candles?', options: ['할머니', '지안', '알렉스'], answer: 0 }
            },
            {
                img: 'a2-12-7',
                art: 'The whole family gathers around the dining table with bowls of seaweed soup and the cake. Grandma holds a framed collage of photos from the Busan trip: the beach, the KTX train, everyone under one umbrella, the rainbow over the sea (pictures only, no writing). She laughs with happy tears, Nabi the cat on her lap. Alex, Minji, Junho and Jian smile around her.',
                lines: [
                    { sp: 'junho', ko: '할머니, 미역국 드세요.', en: 'Grandma, please have some seaweed soup.' },
                    { sp: 'alex', ko: '할머니, 이건 제 선물이에요. 부산 사진이에요!', en: "Grandma, this is my present. It's photos from Busan!" },
                    { sp: 'halmeoni', ko: '아이고, 정말 예뻐요. 다들 고마워요!', en: "Oh, they're beautiful. Thank you, everyone!" }
                ]
            }
        ]
    },
    patterns: [
        {
            form: 'V/A + (으)세요 · (으)셨어요',
            meaning: 'honorific: talking about someone you respect',
            note: 'When the subject is an elder (Grandma, a teacher), add 시: vowel stem → 세요 (오다 → 오세요, 좋아하다 → 좋아하세요), consonant stem → 으세요 (웃다 → 웃으세요). Past: 오셨어요, 끄셨어요. Never use it about yourself.',
            examples: [
                { ko: '할머니는 꽃을 좋아하세요.', en: 'Grandma loves flowers.' },
                { ko: '할머니가 오세요!', en: "Grandma's coming!" },
                { ko: '할머니가 촛불을 끄셨어요.', en: 'Grandma blew out the candles.' }
            ]
        },
        {
            form: '드세요 · 주무세요 · 계세요 · 생신 · 연세',
            meaning: 'special words for elders',
            note: 'Some words change completely: 먹다 / 마시다 → 드시다, 자다 → 주무시다, 있다 → 계시다, 생일 → 생신, 나이 → 연세.',
            examples: [
                { ko: '할머니, 미역국 드세요.', en: 'Grandma, please have some seaweed soup.' },
                { ko: '할머니는 방에 계세요.', en: 'Grandma is in her room.' },
                { ko: '연세가 어떻게 되세요?', en: 'How old are you? (to an elder)' }
            ]
        },
        {
            form: 'V + 아/어 주세요',
            meaning: 'please do ... for me',
            note: 'Use the 아/어 form + 주세요 to ask someone to do something for you: 사다 → 사 주세요, 만들다 → 만들어 주세요, 돕다 → 도와주세요. Use it with older people and strangers; 좀 makes it softer.',
            examples: [
                { ko: '좀 도와주세요.', en: 'Please help me.' },
                { ko: '케이크를 사 주세요.', en: 'Please buy a cake (for us).' }
            ]
        }
    ],
    sentences: [
        { ko: '할머니는 지금 주무세요.', en: 'Grandma is sleeping now.', blank: '주무세요', alts: ['자세요', '드세요', '계세요'] },
        { ko: '할머니, 미역국 드세요.', en: 'Grandma, please have some seaweed soup.', blank: '드세요', alts: ['주무세요', '계세요', '먹어요'] },
        { ko: '할머니는 방에 계세요.', en: 'Grandma is in her room.', blank: '계세요', alts: ['있으세요', '주무세요', '드세요'] },
        { ko: '할머니 연세가 어떻게 되세요?', en: 'How old is your grandmother?', blank: '연세', alts: ['나이', '생신', '선물'] },
        { ko: '할머니, 생신 축하드려요!', en: 'Happy birthday, Grandma!', blank: '생신', alts: ['생일', '연세', '선물'] },
        { ko: '할머니는 꽃을 좋아하세요.', en: 'Grandma loves flowers.', blank: '좋아하세요', alts: ['좋아해세요', '좋아하으세요', '좋아세요'] },
        { ko: '할머니가 웃으세요.', en: 'Grandma is smiling.', blank: '웃으세요', alts: ['웃세요', '웃어세요', '웃는세요'] },
        { ko: '좀 도와주세요.', en: 'Please help me.', blank: '도와주세요', alts: ['돕아주세요', '도워주세요', '돕주세요'] },
        { ko: '케이크를 사 주세요.', en: 'Please buy a cake.', blank: '사', alts: ['사서', '살', '사고'] },
        { ko: '할머니가 촛불을 끄셨어요.', en: 'Grandma blew out the candles.', blank: '끄셨어요', alts: ['껐셨어요', '끄었어요', '꺼셨어요'] },
        { ko: '이건 제 선물이에요.', en: 'This is my present.', blank: '선물', alts: ['연세', '생신', '촛불'] },
        { ko: '할머니가 오세요!', en: "Grandma's coming!", blank: '오세요', alts: ['와세요', '오으세요', '왔세요'] }
    ]
});
