// A2 — Everyday Korean: past and future, dates, wants and abilities, a trip to Busan,
// weather and feelings, reasons, advice, shopping, the doctor, the subway, suggestions, comparisons
// and polite honorifics for Grandma's birthday. Each round of three episodes ends
// with a review episode, and every episode opens with a review scene.
KG.level({
    id: 'A2',
    title: 'Everyday Korean',
    ko: '일상 한국어',
    blurb: 'Talk about yesterday and tomorrow, take a trip to Busan, shop, see a doctor, ride the subway and make plans with friends.',
    roundTitles: ['Past & plans', 'The Busan trip', 'Everyday problems', 'Plans, feelings & celebrations']
});

KG.unit({
    id: 'a2-01',
    level: 'A2',
    round: 1,
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
        { ko: '어땠어요?', en: 'how was it?', emoji: '🤔', pos: 'expr', note: 'The past of 어때요?' },
        { ko: '아니면', en: 'or (between two questions)', emoji: '🔀', pos: 'other', note: '산에 갔어요? 아니면 바다에 갔어요? = Did you go to the mountains, or to the sea?' }
    ],
    story: {
        title: 'Monday Morning',
        extras: "The teacher is a cheerful Korean woman in her forties with a short wavy brown bob, a navy cardigan over a white blouse and grey trousers. She is not the grandmother. Alex's two hiking friends are young men about his age, one Korean with a black baseball cap, one with dark skin and a blue windbreaker.",
        scenes: [
            {
                img: 'a2-01-0',
                art: 'One picture, not a collage: a sunny afternoon at Han River Park in Seoul, with the wide blue river, a long bridge and green lawns. Minji, Junho, Jian and Alex sit together on a big checkered picnic mat with two open boxes of crispy fried chicken. Jian holds a soccer ball under one arm and a chicken drumstick in his other hand. Alex takes a big happy bite of chicken.',
                lines: [
                    { sp: 'narrator', ko: '여기는 한강 공원이에요.', en: 'This is Han River Park.' },
                    { sp: 'narrator', ko: '민지, 준호, 지안, 알렉스가 소풍을 왔어요.', en: 'Minji, Junho, Jian and Alex have come for a picnic.' },
                    { sp: 'narrator', ko: '뭐 먹어요? 김밥? 아니요, 치킨을 먹어요!', en: 'What are they eating? Kimbap? No, they are eating chicken!' },
                    { sp: 'alex', ko: '와, 치킨이 정말 맛있어요!', en: 'Wow, the chicken is really good!' },
                    { sp: 'jian', ko: '형, 같이 축구 해요!', en: "Alex, let's play soccer together!" }
                ],
                check: { q: '뭐 먹어요?', en: 'What are they eating?', options: ['치킨', '라면', '김밥'], answer: 0 }
            },
            {
                img: 'a2-01-1',
                art: 'Monday morning at the university. Students with bags stream into a red-brick building. Minji waves brightly at Alex, who shuffles up yawning, his hair messy and his red backpack hanging off one shoulder.',
                lines: [
                    { sp: 'narrator', ko: '오늘은 월요일이에요.', en: 'Today is Monday.' },
                    { sp: 'narrator', ko: '민지하고 알렉스가 학교에 왔어요.', en: 'Minji and Alex came to school.' },
                    { sp: 'minji', ko: '알렉스 씨, 안녕하세요!', en: 'Hi, Alex!' },
                    { sp: 'narrator', ko: '민지는 웃어요. 알렉스도 웃어요? 아니요, 알렉스는 안 웃어요.', en: "Minji is smiling. Is Alex smiling too? No, Alex isn't smiling." }
                ],
                check: { q: '오늘은 무슨 요일이에요?', en: 'What day is it today?', options: ['월요일', '토요일', '일요일'], answer: 0 }
            },
            {
                img: 'a2-01-2',
                art: 'Minji and Alex sit side by side at desks in a bright classroom. A big thought bubble above Alex shows him on Saturday walking up a green mountain trail with two friends, all wearing hiking backpacks.',
                lines: [
                    { sp: 'minji', ko: '알렉스 씨, 지난 주말에 뭐 했어요?', en: 'Alex, what did you do last weekend?' },
                    { sp: 'alex', ko: '토요일에 친구들하고 등산했어요.', en: 'On Saturday I went hiking with friends.' },
                    { sp: 'narrator', ko: '알렉스는 토요일에 산에 갔어요.', en: 'On Saturday Alex went to a mountain.' },
                    { sp: 'narrator', ko: '바다에 갔어요? 아니면 산에 갔어요? 산에 갔어요!', en: 'Did he go to the sea, or to a mountain? A mountain!' },
                    { sp: 'narrator', ko: '친구 두 명하고 같이 갔어요.', en: 'He went with two friends.' }
                ],
                check: { q: '알렉스는 토요일에 뭐 했어요?', en: 'What did Alex do on Saturday?', options: ['등산했어요', '청소했어요', '잤어요'], answer: 0 }
            },
            {
                img: 'a2-01-3',
                art: 'Thought-bubble memory: Alex stands on a rocky mountain top, sweaty but grinning with both arms raised, the city tiny far below. In the classroom, Minji claps her hands, impressed.',
                lines: [
                    { sp: 'minji', ko: '등산은 어땠어요?', en: 'How was the hike?' },
                    { sp: 'alex', ko: '산이 아주 높았어요. 그래도 정말 재미있었어요!', en: 'The mountain was really high. But it was so much fun!' },
                    { sp: 'narrator', ko: '산이 높았어요? 네, 아주 높았어요.', en: 'Was the mountain high? Yes, very high.' },
                    { sp: 'narrator', ko: '등산이 재미없었어요? 아니요, 정말 재미있었어요!', en: 'Was the hike boring? No, it was really fun!' }
                ],
                check: { q: '등산은 어땠어요?', en: 'How was the hike?', options: ['재미있었어요', '재미없었어요'], answer: 0 }
            },
            {
                img: 'a2-01-4',
                art: 'Thought-bubble memory: Minji at home pushing a vacuum cleaner across the living-room floor while Nabi the cat watches from the sofa. A basket of freshly washed laundry sits by the washing machine.',
                lines: [
                    { sp: 'alex', ko: '민지 씨는요? 주말에 뭐 했어요?', en: 'How about you, Minji? What did you do on the weekend?' },
                    { sp: 'minji', ko: '토요일에 집을 청소했어요. 빨래도 했어요.', en: 'On Saturday I cleaned the house. I did the laundry too.' },
                    { sp: 'narrator', ko: '민지는 등산했어요? 아니요, 등산 안 했어요. 집을 청소했어요.', en: "Did Minji go hiking? No, she didn't. She cleaned the house." },
                    { sp: 'narrator', ko: '나비는 뭐 했어요? 나비는 소파에 있었어요.', en: 'What did Nabi do? Nabi stayed on the sofa.' }
                ],
                check: { q: '민지는 토요일에 뭐 했어요?', en: 'What did Minji do on Saturday?', options: ['등산했어요', '청소했어요', '놀았어요'], answer: 1 }
            },
            {
                img: 'a2-01-5',
                art: 'Thought-bubble memory: a sunny Sunday in a green park. Minji and Jian kick a soccer ball on the grass; Jian laughs with his yellow cap on backwards. Grandma sits on a bench nearby, smiling.',
                lines: [
                    { sp: 'minji', ko: '일요일에는 동생하고 공원에 갔어요.', en: 'On Sunday I went to the park with my little brother.' },
                    { sp: 'minji', ko: '공원에서 같이 놀았어요.', en: 'We played together in the park.' },
                    { sp: 'narrator', ko: '민지하고 지안은 공원에서 축구를 했어요.', en: 'Minji and Jian played soccer in the park.' },
                    { sp: 'narrator', ko: '할머니도 축구를 했어요? 아니요! 할머니는 웃었어요.', en: 'Did Grandma play soccer too? No! Grandma just smiled.' }
                ],
                check: { q: '일요일에 민지는 어디에 갔어요?', en: 'Where did Minji go on Sunday?', options: ['공원', '산', '학교'], answer: 0 }
            },
            {
                img: 'a2-01-6',
                art: "Thought-bubble memory: Alex fast asleep in bed under a tangled blanket, the sun high outside his window and a wall clock showing two o'clock. In the classroom, Minji laughs with a hand over her mouth.",
                lines: [
                    { sp: 'minji', ko: '알렉스 씨는 어제 뭐 했어요?', en: 'Alex, what did you do yesterday?' },
                    { sp: 'alex', ko: '어제요? 하루 종일 잤어요!', en: 'Yesterday? I slept all day!' },
                    { sp: 'narrator', ko: '알렉스는 어제 공부했어요? 아니요. 하루 종일 잤어요.', en: 'Did Alex study yesterday? No. He slept all day.' },
                    { sp: 'narrator', ko: '민지가 웃었어요.', en: 'Minji laughed.' }
                ],
                check: { q: '알렉스는 어제 뭐 했어요?', en: 'What did Alex do yesterday?', options: ['잤어요', '공부했어요', '등산했어요'], answer: 0 }
            },
            {
                img: 'a2-01-7',
                art: 'The teacher, a woman in her forties holding a stack of papers, stands at the front of the classroom. Alex slaps a hand to his forehead in shock. Minji proudly holds up her finished homework sheet covered in neat lines (no readable writing).',
                lines: [
                    { sp: 'staffF', as: '선생님', ko: '여러분, 숙제했어요?', en: 'Everyone, did you do your homework?' },
                    { sp: 'minji', ko: '네, 저는 했어요!', en: 'Yes, I did mine!' },
                    { sp: 'alex', ko: '아! 저는 숙제를 안 했어요...', en: "Oh no! I didn't do my homework..." },
                    { sp: 'narrator', ko: '민지는 숙제를 했어요. 알렉스는요? 알렉스는 숙제를 안 했어요!', en: "Minji did her homework. And Alex? Alex didn't do his homework!" }
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
        { ko: '저는 숙제를 안 했어요.', en: "I didn't do my homework.", blank: '안', alts: ['도', '네', '뭐'] },
        { ko: '등산했어요? 아니면 잤어요?', en: 'Did you go hiking, or did you sleep?', blank: '아니면', alts: ['하고', '에서', '를'] }
    ]
});

KG.unit({
    id: 'a2-02',
    level: 'A2',
    round: 1,
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
        { ko: '회', en: 'raw fish, sashimi', emoji: '🍣', pos: 'noun', forms: ['회를', '회요'] },
        { ko: '몇 월 며칠', en: 'what date? (which month, which day)', emoji: '📆', pos: 'expr', note: 'Always written 며칠, never 몇 일.' },
        { ko: '월', en: 'month (after a number)', emoji: '🗓️', pos: 'noun', note: 'Sino numbers + 월: 일월, 이월 … 6월 is 유월 and 10월 is 시월.', forms: ['유월'] },
        { ko: '생일', en: 'birthday', emoji: '🎈', pos: 'noun', note: '생일 축하해요! = Happy birthday!', forms: ['생일이에요'] }
    ],
    story: {
        title: 'The Big Plan',
        scenes: [
            {
                img: 'a2-02-0',
                art: "One picture, not a collage: Monday evening in Alex's small dorm room. Dusty hiking boots and a hiking backpack lie by the door, and the bed behind him is still unmade. Alex sits at his desk under a lamp, writing his homework quickly with a pencil, a determined look on his face.",
                lines: [
                    { sp: 'narrator', ko: '알렉스는 토요일에 등산했어요.', en: 'Alex went hiking on Saturday.' },
                    { sp: 'narrator', ko: '일요일에는 뭐 했어요? 하루 종일 잤어요!', en: 'What did he do on Sunday? He slept all day!' },
                    { sp: 'narrator', ko: '숙제는 했어요? 아니요, 안 했어요.', en: "Did he do his homework? No, he didn't." },
                    { sp: 'alex', ko: '오늘은 숙제를 해요!', en: "Today I'm doing my homework!" }
                ],
                check: { q: '알렉스는 토요일에 뭐 했어요?', en: 'What did Alex do on Saturday?', options: ['등산했어요', '청소했어요', '빨래했어요'], answer: 0 }
            },
            {
                img: 'a2-02-1',
                art: 'Friday afternoon at an outdoor campus café. Minji and Alex sit at a table with iced coffees, their textbooks closed and pushed aside, both stretching and smiling with relief.',
                lines: [
                    { sp: 'narrator', ko: '오늘은 금요일이에요.', en: 'Today is Friday.' },
                    { sp: 'narrator', ko: '민지하고 알렉스는 카페에 있어요.', en: 'Minji and Alex are at a café.' },
                    { sp: 'narrator', ko: '커피를 마셔요. 책은 안 읽어요.', en: "They're drinking coffee. They aren't reading their books." },
                    { sp: 'narrator', ko: '다음 주는 방학이에요.', en: 'Next week is the break.' },
                    { sp: 'alex', ko: '와, 방학이에요! 정말 좋아요!', en: "Wow, it's the break! That's great!" }
                ],
                check: { q: '다음 주는 뭐예요?', en: 'What is next week?', options: ['방학', '수업', '주말'], answer: 0 }
            },
            {
                img: 'a2-02-2',
                art: 'At the café table, Alex scratches his head, unsure. A thought bubble above Minji shows her in an apron behind a café counter, making coffee.',
                lines: [
                    { sp: 'minji', ko: '알렉스 씨, 이번 방학에 뭐 할 거예요?', en: 'Alex, what are you going to do this break?' },
                    { sp: 'alex', ko: '아직 몰라요. 민지 씨는요?', en: "I don't know yet. How about you, Minji?" },
                    { sp: 'minji', ko: '저는 카페에서 아르바이트를 할 거예요.', en: "I'm going to work part-time at a café." },
                    { sp: 'narrator', ko: '민지는 방학에 놀 거예요? 아니요, 아르바이트를 할 거예요.', en: "Is Minji going to have fun over the break? No, she's going to work part-time." }
                ],
                check: { q: '민지는 방학에 뭐 할 거예요?', en: 'What will Minji do over the break?', options: ['아르바이트를 할 거예요', '등산할 거예요', '잘 거예요'], answer: 0 }
            },
            {
                img: 'a2-02-3',
                art: 'Minji shows Alex a photo on her phone: a curved sandy beach, bright blue sea, tall buildings and a long bridge. Alex leans in, eyes wide with excitement.',
                lines: [
                    { sp: 'minji', ko: '그리고 다음 주 금요일에 부산에 갈 거예요.', en: "And next Friday I'm going to Busan." },
                    { sp: 'minji', ko: '알렉스 씨도 같이 갈 거예요?', en: 'Will you come too, Alex?' },
                    { sp: 'alex', ko: '부산이요? 네, 좋아요!', en: 'Busan? Yes, sounds great!' },
                    { sp: 'alex', ko: '그런데 다음 주 금요일은 몇 월 며칠이에요?', en: 'But what date is next Friday?' },
                    { sp: 'minji', ko: '유월 이십구 일이에요.', en: "It's June 29th." },
                    { sp: 'alex', ko: '와, 유월 이십구 일은 제 생일이에요!', en: 'Wow, June 29th is my birthday!' }
                ],
                check: { q: '민지는 어디에 갈 거예요?', en: 'Where is Minji going to go?', options: ['부산', '서울', '미국'], answer: 0 }
            },
            {
                img: 'a2-02-4',
                art: 'Evening in the family living room. Junho, just home from work with his briefcase on the floor, flops onto the sofa with his feet up and a relaxed smile. Minji leans over the back of the sofa to talk to him. Nabi the cat sleeps on a cushion.',
                lines: [
                    { sp: 'narrator', ko: '준호가 회사에서 왔어요. 소파에서 쉬어요.', en: "Junho has come home from work. He's resting on the sofa." },
                    { sp: 'minji', ko: '오빠, 다음 주에 바빠요?', en: 'Junho, are you busy next week?' },
                    { sp: 'junho', ko: '아니요, 다음 주는 휴가예요. 집에서 쉴 거예요.', en: "No, next week I'm off work. I'm going to rest at home." },
                    { sp: 'junho', ko: '내일은 하루 종일 잘 거예요!', en: "Tomorrow I'm going to sleep all day!" },
                    { sp: 'narrator', ko: '나비도 자요.', en: 'Nabi is sleeping too.' }
                ],
                check: { q: '준호는 다음 주에 바빠요?', en: 'Is Junho busy next week?', options: ['네, 바빠요', '아니요, 휴가예요'], answer: 1 }
            },
            {
                img: 'a2-02-5',
                art: 'Junho sits up on the sofa with a big grin and a thumbs-up. Jian bursts into the room, jumping with both arms in the air, his yellow cap flying off his head. Minji laughs.',
                lines: [
                    { sp: 'minji', ko: '그럼 오빠도 같이 부산에 갈 거예요?', en: 'Then will you come to Busan with us too?' },
                    { sp: 'junho', ko: '부산이요? 좋아요! 저도 갈 거예요.', en: "Busan? Great! I'll go too." },
                    { sp: 'jian', ko: '저도요! 저도 갈 거예요!', en: "Me too! I'm going too!" },
                    { sp: 'narrator', ko: '준호도 갈 거예요. 지안도 갈 거예요. 모두 부산에 갈 거예요!', en: 'Junho is going. Jian is going. Everyone is going to Busan!' }
                ],
                check: { q: '지안도 부산에 갈 거예요?', en: 'Is Jian going to Busan too?', options: ['네', '아니요'], answer: 0 }
            },
            {
                img: 'a2-02-6',
                art: 'Grandma sits in her armchair knitting, Nabi the cat curled up on her lap. Minji kneels beside her. Grandma gently shakes her head with a warm smile and strokes Nabi.',
                lines: [
                    { sp: 'minji', ko: '할머니도 같이 갈 거예요?', en: 'Grandma, will you come too?' },
                    { sp: 'halmeoni', ko: '할머니는 나비하고 집에 있을 거예요.', en: "Grandma's going to stay home with Nabi." },
                    { sp: 'narrator', ko: '할머니는 부산에 안 갈 거예요. 나비도 안 갈 거예요.', en: "Grandma isn't going to Busan. Nabi isn't going either." }
                ],
                check: { q: '할머니는 부산에 갈 거예요?', en: 'Is Grandma going to Busan?', options: ['네', '아니요'], answer: 1 }
            },
            {
                img: 'a2-02-7',
                art: 'Back at the campus café the next day. Minji happily mimes eating with chopsticks, a thought bubble above her showing a plate of sliced raw fish. Alex makes a nervous face; a thought bubble above him shows a plate of kimbap rolls.',
                lines: [
                    { sp: 'alex', ko: '부산에서 뭐 할 거예요?', en: 'What are we going to do in Busan?' },
                    { sp: 'minji', ko: '회를 먹을 거예요!', en: "We're going to eat raw fish!" },
                    { sp: 'alex', ko: '회요? 저는... 김밥을 먹을 거예요.', en: "Raw fish? I'll... have kimbap." },
                    { sp: 'narrator', ko: '알렉스는 회를 먹을 거예요? 아니면 김밥을 먹을 거예요? 김밥이요!', en: 'Will Alex eat raw fish, or kimbap? Kimbap!' }
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
        },
        {
            form: 'N월 N일 · 몇 월 며칠이에요?',
            meaning: 'saying the date',
            note: 'Dates use Sino-Korean numbers: 월 for the month, 일 for the day. 6월 29일 = 유월 이십구 일 (June 29th). Two months change sound: 6월 = 유월 and 10월 = 시월 (not 육월, 십월). Ask 몇 월 며칠이에요? (written 며칠, never 몇 일). A date takes 에: 유월 이십구 일에 가요.',
            examples: [
                { ko: '오늘은 몇 월 며칠이에요?', en: "What's the date today?" },
                { ko: '유월 이십구 일이에요.', en: "It's June 29th." },
                { ko: '제 생일은 시월 삼 일이에요.', en: 'My birthday is October 3rd.' }
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
        { ko: '아직 몰라요.', en: "I don't know yet.", blank: '아직', alts: ['어제', '다음', '이번'] },
        { ko: '오늘은 몇 월 며칠이에요?', en: "What's the date today?", blank: '며칠', alts: ['몇 일', '몇 개', '언제'] },
        { ko: '제 생일은 유월 이십구 일이에요.', en: 'My birthday is June 29th.', blank: '유월', alts: ['육월', '유일', '육일'] },
        { ko: '생일 축하해요!', en: 'Happy birthday!', blank: '축하해요', alts: ['고마워요', '미안해요', '반가워요'] }
    ]
});

KG.unit({
    id: 'a2-03',
    level: 'A2',
    round: 1,
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
                img: 'a2-03-0',
                art: "One picture, not a collage: Thursday night in Minji's bedroom. An open suitcase lies on the floor, half packed with summer clothes, and Nabi the cat sits right inside it. Minji, holding a folded T-shirt, laughs at Nabi. Jian bounces on the bed wearing a pink inflatable swim ring around his waist. Grandma watches from the doorway, smiling.",
                lines: [
                    { sp: 'narrator', ko: '내일은 금요일이에요. 내일 부산에 갈 거예요!', en: "Tomorrow is Friday. Tomorrow they're going to Busan!" },
                    { sp: 'narrator', ko: '나비도 부산에 갈 거예요? 아니요! 나비는 할머니하고 집에 있을 거예요.', en: 'Is Nabi going to Busan too? No! Nabi is staying home with Grandma.' },
                    { sp: 'jian', ko: '누나, 내일은 알렉스 형 생일이에요!', en: "Sis, tomorrow is Alex's birthday!" },
                    { sp: 'minji', ko: '네, 유월 이십구 일! 케이크도 살 거예요.', en: "Yes, June 29th! We'll buy a cake too." }
                ],
                check: { q: '나비도 부산에 갈 거예요?', en: 'Is Nabi going to Busan too?', options: ['네', '아니요'], answer: 1 }
            },
            {
                img: 'a2-03-1',
                art: 'The bright glass-roofed hall of Seoul Station, busy with travellers pulling suitcases. Minji, Alex, Junho and Jian stand together with their bags; Jian bounces on his toes with excitement.',
                lines: [
                    { sp: 'narrator', ko: '여기는 서울역이에요.', en: 'This is Seoul Station.' },
                    { sp: 'narrator', ko: '오늘 부산에 여행을 가요!', en: "Today they're going on a trip to Busan!" },
                    { sp: 'narrator', ko: '민지, 알렉스, 준호, 지안이 있어요. 할머니는 없어요.', en: "Minji, Alex, Junho and Jian are here. Grandma isn't." },
                    { sp: 'jian', ko: '빨리 가요!', en: "Let's go, quick!" }
                ],
                check: { q: '여기는 어디예요?', en: 'Where is this?', options: ['서울역', '부산역', '공원'], answer: 0 }
            },
            {
                img: 'a2-03-2',
                art: 'At a train ticket counter, Junho leans toward a smiling female clerk behind the glass and holds up four fingers. Jian stands on tiptoe beside him, peeking over the counter. A wall clock shows 9:30.',
                lines: [
                    { sp: 'narrator', ko: '지금 아홉 시 반이에요.', en: "It's nine thirty now." },
                    { sp: 'junho', ko: '부산 표 네 장 주세요.', en: 'Four tickets to Busan, please.' },
                    { sp: 'staffF', as: '직원', ko: '어른 세 장, 어린이 한 장이요?', en: 'Three adults and one child?' },
                    { sp: 'junho', ko: '네, 맞아요.', en: "Yes, that's right." },
                    { sp: 'narrator', ko: '어른은 세 명, 어린이는 한 명이에요. 어린이는 누구예요? 지안이에요!', en: 'Three adults and one child. Who is the child? Jian!' }
                ],
                check: { q: '표가 몇 장이에요?', en: 'How many tickets are there?', options: ['두 장', '세 장', '네 장'], answer: 2 }
            },
            {
                img: 'a2-03-3',
                art: 'A small station shop with rows of colourful lunch boxes in a glass case. Jian presses his face to the glass and points at a lunch box. Minji laughs and takes out her wallet; a male shopkeeper smiles behind the counter.',
                lines: [
                    { sp: 'narrator', ko: '역 안에 가게가 있어요. 도시락이 정말 많아요!', en: "There's a shop in the station. It has so many lunch boxes!" },
                    { sp: 'jian', ko: '누나, 도시락 먹고 싶어요!', en: 'Sis, I want a lunch box!' },
                    { sp: 'minji', ko: '좋아요. 여기요, 도시락 네 개 주세요.', en: 'Okay. Excuse me, four lunch boxes, please.' },
                    { sp: 'staffM', as: '사장님', ko: '네, 여기 있어요!', en: 'Sure, here you go!' }
                ],
                check: { q: '도시락을 몇 개 사요?', en: 'How many lunch boxes do they buy?', options: ['두 개', '세 개', '네 개'], answer: 2 }
            },
            {
                img: 'a2-03-4',
                art: 'Inside a sleek KTX carriage. Fields and mountains blur past the window in streaks of green. Alex presses his hand to the glass in amazement while Jian squeezes in next to him, eager to see.',
                lines: [
                    { sp: 'narrator', ko: 'KTX는 아주 빨라요.', en: 'The KTX is very fast.' },
                    { sp: 'alex', ko: '와! 기차가 정말 빨라요!', en: 'Wow! The train is really fast!' },
                    { sp: 'jian', ko: '형, 저도 창문 옆에 앉고 싶어요!', en: 'Alex, I want to sit by the window too!' },
                    { sp: 'narrator', ko: '알렉스는 창문 옆에 앉았어요. 지안도 창문 옆에 앉고 싶어요!', en: 'Alex is sitting by the window. Jian wants to sit by the window too!' }
                ],
                check: { q: 'KTX는 빨라요?', en: 'Is the KTX fast?', options: ['네, 아주 빨라요', '아니요, 안 빨라요'], answer: 0 }
            },
            {
                img: 'a2-03-5',
                art: 'The four friends eat from open lunch boxes on their seat-back trays. A thought bubble above Alex shows a wide blue sea with rolling waves. A thought bubble above Junho shows himself stretched out happily on a big white hotel bed.',
                lines: [
                    { sp: 'narrator', ko: '모두 기차에서 도시락을 먹어요. 맛있어요!', en: 'Everyone is eating lunch boxes on the train. Delicious!' },
                    { sp: 'minji', ko: '부산에서 뭐 하고 싶어요?', en: 'What do you want to do in Busan?' },
                    { sp: 'alex', ko: '저는 바다를 보고 싶어요!', en: 'I want to see the sea!' },
                    { sp: 'junho', ko: '저는 호텔에서 쉬고 싶어요.', en: 'I want to rest at the hotel.' },
                    { sp: 'narrator', ko: '알렉스는 바다를 보고 싶어요. 준호는요? 준호는 쉬고 싶어요.', en: 'Alex wants to see the sea. And Junho? Junho wants to rest.' }
                ],
                check: { q: '알렉스는 뭘 보고 싶어 해요?', en: 'What does Alex want to see?', options: ['바다', '산', '호텔'], answer: 0 }
            },
            {
                img: 'a2-03-6',
                art: "Junho has fallen asleep in his seat with his head tilted back and mouth open, an empty lunch box on his lap. Jian tugs Alex's sleeve. Alex smiles and taps his wristwatch, which shows eleven o'clock.",
                lines: [
                    { sp: 'narrator', ko: '준호는 자요.', en: 'Junho is sleeping.' },
                    { sp: 'narrator', ko: '준호는 호텔에서 쉬고 싶어요. 그런데 지금 기차에서 자요!', en: "Junho wants to rest at the hotel. But right now he's sleeping on the train!" },
                    { sp: 'jian', ko: '형, 부산에 언제 도착해요?', en: 'Alex, when do we get to Busan?' },
                    { sp: 'alex', ko: '열두 시 반에 도착해요.', en: 'We arrive at twelve thirty.' },
                    { sp: 'narrator', ko: '지금은 열한 시예요.', en: "It's eleven o'clock now." }
                ],
                check: { q: '기차는 몇 시에 도착해요?', en: 'What time does the train arrive?', options: ['열 시', '열두 시 반', '세 시'], answer: 1 }
            },
            {
                img: 'a2-03-7',
                art: 'Outside Busan Station under a bright sky. Seagulls fly over a harbour with boats in the distance, and a tall hotel stands by the blue sea. Alex stretches his arms wide, breathing in the sea air. Minji points toward the hotel. Sleepy Junho drags two suitcases behind them.',
                lines: [
                    { sp: 'narrator', ko: '부산역에 도착했어요.', en: 'They arrived at Busan Station.' },
                    { sp: 'narrator', ko: '열두 시 반이에요. 여기는 서울이에요? 아니요, 부산이에요!', en: "It's twelve thirty. Is this Seoul? No, it's Busan!" },
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
    id: 'a2-r1',
    level: 'A2',
    round: 1,
    review: true,
    title: "Alex's Birthday",
    ko: '생일 축하해요!',
    icon: '🎉',
    goal: 'Review Round 1: the past tense, plans, wants and dates, at a birthday dinner in Busan.',
    vocab: [
        { ko: '생일', en: 'birthday', emoji: '🎈', pos: 'noun', note: '생일 축하해요! = Happy birthday!' },
        { ko: '몇 월 며칠', en: 'what date? (which month, which day)', emoji: '📆', pos: 'expr' },
        { ko: '부산', en: 'Busan (big port city in the south)', emoji: '🌊', pos: 'noun' },
        { ko: '호텔', en: 'hotel', emoji: '🏨', pos: 'noun' },
        { ko: '바다', en: 'sea, ocean', emoji: '🌊', pos: 'noun' },
        { ko: '회', en: 'raw fish, sashimi', emoji: '🍣', pos: 'noun', forms: ['회를', '회가', '회도'] },
        { ko: '케이크', en: 'cake', emoji: '🍰', pos: 'noun' },
        { ko: '웃다', en: 'to laugh, to smile', emoji: '😆', pos: 'verb', polite: '웃어요' },
        { ko: '재미있다', en: 'to be fun, to be interesting', emoji: '😄', pos: 'adj', polite: '재미있어요', forms: ['재미있었어요', '재미있을'] },
        { ko: '어땠어요?', en: 'how was it?', emoji: '🤔', pos: 'expr', forms: ['어땠어요'] },
        { ko: '아니면', en: 'or (between two questions)', emoji: '🔀', pos: 'other' },
        { ko: '놀다', en: 'to play, to hang out', emoji: '🤸', pos: 'verb', polite: '놀아요', forms: ['놀고', '놀 거예요'] }
    ],
    story: {
        title: 'A Birthday in Busan',
        extras: 'Every scene is in Busan, never Seoul: Haeundae Beach with its golden sand and tall glass towers, and Gwangalli Beach with the long Gwangan Bridge lit up over the sea at night. N Seoul Tower must never appear. The raw-fish restaurant owner is a sturdy, cheerful Korean man in his sixties with a grey crew cut, a navy apron and black rubber boots.',
        scenes: [
            {
                img: 'a2-r1-1',
                art: 'Afternoon in a hotel room in Busan with a big window over Haeundae Beach: golden sand, a bright blue sea and tall glass towers. Alex stands out on the small balcony with his back to the room, looking at the sea. Inside, Minji and Jian whisper by the door; Jian holds a finger to his lips. Open suitcases lie on the floor.',
                lines: [
                    { sp: 'narrator', ko: '여기는 부산 호텔이에요.', en: 'This is the hotel in Busan.' },
                    { sp: 'narrator', ko: '알렉스는 바다를 봐요.', en: 'Alex is looking at the sea.' },
                    { sp: 'jian', ko: '누나, 오늘 몇 월 며칠이에요?', en: "Sis, what's the date today?" },
                    { sp: 'minji', ko: '유월 이십구 일이에요. 오늘은 알렉스 씨 생일이에요!', en: "It's June 29th. Today is Alex's birthday!" },
                    { sp: 'jian', ko: '그럼 케이크 먹을 거예요?', en: 'Then are we going to have cake?' },
                    { sp: 'minji', ko: '쉿! 저녁에 먹을 거예요.', en: "Shh! We'll have it this evening." }
                ],
                check: { q: '오늘은 누구 생일이에요?', en: 'Whose birthday is it today?', options: ['알렉스', '지안', '민지'], answer: 0 }
            },
            {
                img: 'a2-r1-2',
                art: 'Late afternoon in the hotel corridor in Busan. Junho comes back from a bakery, hiding a white cake box behind his back with a big grin. Minji and Jian give him two thumbs up. Through the window at the end of the corridor, Haeundae Beach and the sea are visible.',
                lines: [
                    { sp: 'junho', ko: '케이크 샀어요!', en: 'I got the cake!' },
                    { sp: 'narrator', ko: '준호는 뭘 샀어요? 표를 샀어요? 아니요, 케이크를 샀어요!', en: 'What did Junho buy? Tickets? No, a cake!' },
                    { sp: 'minji', ko: '오빠, 고마워요! 저녁에는 뭐 먹을 거예요?', en: 'Thanks, Junho! What are we having for dinner?' },
                    { sp: 'junho', ko: '회를 먹을 거예요. 부산은 회가 정말 맛있어요!', en: "We're having raw fish. The raw fish in Busan is really good!" }
                ],
                check: { q: '준호는 뭘 샀어요?', en: 'What did Junho buy?', options: ['케이크', '표', '도시락'], answer: 0 }
            },
            {
                img: 'a2-r1-3',
                art: 'Evening at Gwangalli Beach in Busan. Through the big window of a seaside raw-fish restaurant, the long Gwangan Bridge glows with colourful lights over the dark sea. Minji, Alex, Junho and Jian sit around a table. The restaurant owner sets down a big platter of sliced raw fish, and Alex stares at it nervously.',
                lines: [
                    { sp: 'narrator', ko: '저녁이에요. 여기는 바다 앞 식당이에요.', en: "It's evening. This is a restaurant by the sea." },
                    { sp: 'narrator', ko: '저기 광안대교가 있어요. 정말 예뻐요!', en: "Over there is Gwangan Bridge. It's so pretty!" },
                    { sp: 'staffM', as: '사장님', ko: '회 여기 있어요!', en: "Here's your raw fish!" },
                    { sp: 'minji', ko: '알렉스 씨, 회 먹고 싶어요? 아니면 김밥 먹고 싶어요?', en: 'Alex, do you want raw fish, or kimbap?' },
                    { sp: 'alex', ko: '음... 오늘은 제 생일이에요. 회를 먹을 거예요!', en: "Hmm... today's my birthday. I'm going to eat raw fish!" }
                ],
                check: { q: '알렉스는 오늘 뭐 먹을 거예요?', en: 'What is Alex going to eat today?', options: ['회', '김밥', '도시락'], answer: 0 }
            },
            {
                img: 'a2-r1-4',
                art: 'At the restaurant table in Busan, Alex has just tasted a piece of raw fish with his chopsticks; his eyes are wide and sparkling with delight. Jian leans in, curious. Minji and Junho laugh. Gwangan Bridge glows through the window behind them.',
                lines: [
                    { sp: 'narrator', ko: '알렉스가 회를 먹었어요.', en: 'Alex ate the raw fish.' },
                    { sp: 'narrator', ko: '맛있어요? 아니면 맛없어요?', en: 'Is it good, or is it bad?' },
                    { sp: 'alex', ko: '와! 정말 맛있어요!', en: "Wow! It's really good!" },
                    { sp: 'jian', ko: '형, 회 좋아해요?', en: 'Do you like raw fish?' },
                    { sp: 'alex', ko: '네, 좋아해요! 내일도 먹고 싶어요!', en: 'Yes, I like it! I want to have it tomorrow too!' }
                ],
                check: { q: '알렉스는 회를 좋아해요?', en: 'Does Alex like raw fish?', options: ['네', '아니요'], answer: 0 }
            },
            {
                img: 'a2-r1-5',
                art: 'The restaurant lights are dimmed. Junho carries a birthday cake with glowing candles to the table. Minji and Jian clap and sing. Alex grins with both hands on his cheeks in happy surprise. Behind the window, Gwangan Bridge sparkles over the sea of Busan.',
                lines: [
                    { sp: 'narrator', ko: '와, 케이크예요!', en: 'Wow, a cake!' },
                    { sp: 'minji', ko: '알렉스 씨, 생일 축하해요!', en: 'Happy birthday, Alex!' },
                    { sp: 'jian', ko: '형, 생일 축하해요!', en: 'Happy birthday, Alex!' },
                    { sp: 'alex', ko: '와, 정말 고마워요!', en: 'Wow, thank you so much!' },
                    { sp: 'narrator', ko: '알렉스가 웃어요.', en: 'Alex is smiling.' }
                ],
                check: { q: '알렉스는 지금 뭐 해요?', en: 'What is Alex doing now?', options: ['웃어요', '자요', '청소해요'], answer: 0 }
            },
            {
                img: 'a2-r1-6',
                art: "Night on the sand of Gwangalli Beach in Busan. Gwangan Bridge glows in rainbow colours over the calm sea. Alex and Minji walk barefoot along the water's edge holding their sneakers, both smiling. Junho and Jian, small in the background, run away from a little wave.",
                lines: [
                    { sp: 'minji', ko: '알렉스 씨, 오늘 생일 어땠어요?', en: 'Alex, how was your birthday today?' },
                    { sp: 'alex', ko: '정말 재미있었어요! 회도 맛있었어요.', en: 'It was so much fun! The raw fish was delicious, too.' },
                    { sp: 'minji', ko: '내일은 뭐 하고 싶어요?', en: 'What do you want to do tomorrow?' },
                    { sp: 'alex', ko: '바다에서 놀고 싶어요!', en: 'I want to play in the sea!' },
                    { sp: 'narrator', ko: '내일은 바다에서 놀 거예요!', en: "Tomorrow they're going to play in the sea!" }
                ],
                check: { q: '알렉스는 내일 뭐 하고 싶어요?', en: 'What does Alex want to do tomorrow?', options: ['바다에서 놀고 싶어요', '집에서 쉬고 싶어요', '숙제하고 싶어요'], answer: 0 }
            },
            {
                img: 'a2-r1-7',
                art: 'Late at night back in the hotel room in Busan. Jian and Junho are fast asleep on one bed, Jian sprawled across Junho. A half-eaten birthday cake sits on the table. Alex sits by the big window in the dark, looking out at the lights of Haeundae Beach and smiling.',
                lines: [
                    { sp: 'narrator', ko: '밤 열한 시예요.', en: "It's eleven at night." },
                    { sp: 'narrator', ko: '지안하고 준호는 자요. 알렉스도 자요? 아니요, 바다를 봐요.', en: "Jian and Junho are asleep. Is Alex asleep too? No, he's looking at the sea." },
                    { sp: 'alex', ko: '오늘 정말 재미있었어요. 내일도 재미있을 거예요!', en: 'Today was so much fun. Tomorrow will be fun too!' }
                ],
                check: { q: '지안은 지금 뭐 해요?', en: 'What is Jian doing now?', options: ['자요', '먹어요', '놀아요'], answer: 0 }
            }
        ]
    },
    patterns: [
        {
            form: 'V/A + 았어요 / 었어요 · 했어요',
            meaning: 'the past tense (review)',
            note: 'ㅏ or ㅗ stems take 았어요 (샀어요, 놀았어요), other stems take 었어요 (먹었어요, 웃었어요), and 하다 becomes 했어요. 어땠어요? asks how something was.',
            examples: [
                { ko: '준호가 케이크를 샀어요.', en: 'Junho bought a cake.' },
                { ko: '알렉스가 회를 먹었어요.', en: 'Alex ate raw fish.' },
                { ko: '생일 어땠어요?', en: 'How was your birthday?' }
            ]
        },
        {
            form: 'V + (으)ㄹ 거예요 · V + 고 싶어요 · 아니면',
            meaning: 'plans, wants and choices (review)',
            note: '(으)ㄹ 거예요 says what you are going to do; 고 싶어요 says what you want to do. 아니면 (or) joins two questions: 회 먹고 싶어요? 아니면 김밥 먹고 싶어요?',
            examples: [
                { ko: '저녁에 회를 먹을 거예요.', en: "We're going to eat raw fish this evening." },
                { ko: '바다에서 놀고 싶어요.', en: 'I want to play in the sea.' },
                { ko: '회 먹어요? 아니면 김밥 먹어요?', en: 'Are you having raw fish, or kimbap?' }
            ]
        },
        {
            form: '몇 월 며칠이에요? · 생일 축하해요!',
            meaning: 'dates and birthdays (review)',
            note: 'Sino numbers + 월 + 일: 유월 이십구 일 (June 29th). Remember 6월 = 유월 and 10월 = 시월.',
            examples: [
                { ko: '오늘 몇 월 며칠이에요?', en: "What's the date today?" },
                { ko: '오늘은 알렉스 씨 생일이에요.', en: "Today is Alex's birthday." },
                { ko: '생일 축하해요!', en: 'Happy birthday!' }
            ]
        }
    ],
    sentences: [
        { ko: '내일은 몇 월 며칠이에요?', en: "What's the date tomorrow?", blank: '며칠', alts: ['몇 일', '몇 시', '몇 개'] },
        { ko: '유월 이십구 일이에요.', en: "It's June 29th.", blank: '유월', alts: ['육월', '유일', '육일'] },
        { ko: '오늘은 알렉스 씨 생일이에요.', en: "Today is Alex's birthday.", blank: '생일', alts: ['생신', '여행', '휴가'] },
        { ko: '알렉스 씨, 생일 축하해요!', en: 'Happy birthday, Alex!', blank: '축하해요', alts: ['고마워요', '미안해요', '괜찮아요'] },
        { ko: '준호가 케이크를 샀어요.', en: 'Junho bought a cake.', blank: '샀어요', alts: ['사었어요', '사요', '살 거예요'] },
        { ko: '알렉스가 회를 먹었어요.', en: 'Alex ate raw fish.', blank: '먹었어요', alts: ['먹았어요', '먹어요', '먹고 싶어요'] },
        { ko: '저녁에 회를 먹을 거예요.', en: "We're going to eat raw fish this evening.", blank: '먹을', alts: ['먹', '먹었', '먹고'] },
        { ko: '회 먹어요? 아니면 김밥 먹어요?', en: 'Are you having raw fish, or kimbap?', blank: '아니면', alts: ['하고', '에서', '도'] },
        { ko: '생일 어땠어요?', en: 'How was your birthday?', blank: '어땠어요', alts: ['어때요', '뭐예요', '몇 월이에요'] },
        { ko: '바다에서 놀고 싶어요.', en: 'I want to play in the sea.', blank: '놀고', alts: ['놀', '놀아', '놀았'] },
        { ko: '내일도 재미있을 거예요.', en: 'Tomorrow will be fun too.', blank: '있을', alts: ['있', '있었', '있고'] },
        { ko: '알렉스가 웃었어요.', en: 'Alex laughed.', blank: '웃었어요', alts: ['웃았어요', '웃어요', '웃을 거예요'] }
    ]
});

KG.unit({
    id: 'a2-04',
    level: 'A2',
    round: 2,
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
        { ko: '배우다', en: 'to learn', emoji: '📚', pos: 'verb', polite: '배워요', forms: ['배우고'] },
        { ko: '신나다', en: 'to be excited, to have a blast', emoji: '🤩', pos: 'verb', polite: '신나요', forms: ['신나요', '신났어요'], note: 'For fun, exciting things: 와, 신나요!' }
    ],
    story: {
        title: 'A Day at Haeundae',
        extras: 'Every scene is in Busan around Haeundae Beach: the Busan skyline of tall glass towers, Gwangan Bridge and the open sea. N Seoul Tower must never appear.',
        scenes: [
            {
                img: 'a2-04-0',
                art: 'One picture, not a collage: the next morning on the balcony of the hotel in Busan, high above Haeundae Beach, with golden sand, a blue sea and tall glass towers below. Alex, in a T-shirt and shorts, eats a leftover slice of birthday cake from a paper plate and grins. Jian stands beside him in swim trunks with a pink inflatable swim ring around his waist, pointing down at the beach. Minji laughs, holding a cup of coffee.',
                lines: [
                    { sp: 'narrator', ko: '어제는 알렉스 생일이었어요.', en: "Yesterday was Alex's birthday." },
                    { sp: 'narrator', ko: '저녁에 뭐 먹었어요? 회를 먹었어요. 케이크도 먹었어요!', en: 'What did they eat in the evening? Raw fish. And cake too!' },
                    { sp: 'alex', ko: '어제 정말 재미있었어요. 케이크가 아직 있어요!', en: "Yesterday was so much fun. There's still some cake!" },
                    { sp: 'jian', ko: '형, 빨리 바다에 가요!', en: "Alex, let's go to the sea, quick!" }
                ],
                check: { q: '어제는 누구 생일이었어요?', en: 'Whose birthday was it yesterday?', options: ['알렉스', '민지', '지안'], answer: 0 }
            },
            {
                img: 'a2-04-1',
                art: 'Haeundae beach on a sunny day: wide golden sand, rows of colourful umbrellas, blue waves and tall glass towers behind. Minji, Alex, Junho and Jian walk onto the sand in summer clothes, carrying towels and a beach ball. Many small beachgoers fill the background.',
                lines: [
                    { sp: 'narrator', ko: '여기는 해운대예요.', en: 'This is Haeundae.' },
                    { sp: 'narrator', ko: '해운대는 서울에 있어요? 아니요, 부산에 있어요!', en: 'Is Haeundae in Seoul? No, it is in Busan!' },
                    { sp: 'narrator', ko: '해변에 사람이 많아요.', en: 'There are lots of people on the beach.' },
                    { sp: 'jian', ko: '와, 바다예요! 신나요!', en: "Wow, it's the sea! This is so exciting!" }
                ],
                check: { q: '해운대는 어디에 있어요?', en: 'Where is Haeundae?', options: ['부산', '서울'], answer: 0 }
            },
            {
                img: 'a2-04-2',
                art: 'At the edge of the water. Alex, in swim trunks with goggles pushed up on his forehead, gives a confident thumbs-up. Jian looks up at him, then droops his shoulders sadly, holding a pink inflatable swim ring.',
                lines: [
                    { sp: 'jian', ko: '알렉스 형, 수영할 수 있어요?', en: 'Alex, can you swim?' },
                    { sp: 'alex', ko: '네, 수영할 수 있어요.', en: 'Yes, I can swim.' },
                    { sp: 'jian', ko: '저는 수영할 수 없어요. 배우고 싶어요!', en: "I can't swim. I want to learn!" },
                    { sp: 'narrator', ko: '알렉스는 수영할 수 있어요. 지안은요? 지안은 수영할 수 없어요.', en: "Alex can swim. And Jian? Jian can't swim." }
                ],
                check: { q: '지안은 수영할 수 있어요?', en: 'Can Jian swim?', options: ['네', '아니요'], answer: 1 }
            },
            {
                img: 'a2-04-3',
                art: 'Junho rides a big curling wave on a surfboard, arms out for balance, looking cool and confident. On the sand, Jian jumps and cheers and Minji claps.',
                lines: [
                    { sp: 'narrator', ko: '준호는 서핑을 할 수 있어요.', en: 'Junho can surf.' },
                    { sp: 'jian', ko: '와! 형, 정말 잘해요!', en: "Wow! Bro, you're really good!" },
                    { sp: 'narrator', ko: '준호는 서핑을 잘해요? 네, 정말 잘해요!', en: 'Is Junho good at surfing? Yes, really good!' },
                    { sp: 'minji', ko: '오빠, 멋있어요!', en: 'Junho, you look so cool!' }
                ],
                check: { q: '누가 서핑을 할 수 있어요?', en: 'Who can surf?', options: ['준호', '지안', '민지'], answer: 0 }
            },
            {
                img: 'a2-04-4',
                art: 'Along the seaside bike path, with surfers riding waves in the sea beside it, Minji rides a rental bicycle smoothly ahead, smiling back over her shoulder. Behind her, Alex wobbles on his bicycle, legs sticking out, front wheel turning sideways, eyes wide with panic.',
                lines: [
                    { sp: 'alex', ko: '민지 씨도 서핑할 수 있어요?', en: 'Minji, can you surf too?' },
                    { sp: 'minji', ko: '아니요, 서핑은 못 해요. 그런데 자전거는 잘 탈 수 있어요!', en: "No, I can't surf. But I can ride a bike really well!" },
                    { sp: 'alex', ko: '아! 저는 자전거를 잘 못 타요!', en: "Ah! I'm not good at riding a bike!" },
                    { sp: 'narrator', ko: '민지는 자전거를 잘 타요. 알렉스는요? 알렉스는 자전거를 잘 못 타요!', en: "Minji rides a bike well. And Alex? Alex isn't good at it!" }
                ],
                check: { q: '알렉스는 자전거를 잘 타요?', en: 'Is Alex good at riding a bike?', options: ['네', '아니요'], answer: 1 }
            },
            {
                img: 'a2-04-5',
                art: 'Minji, Alex and Junho pose arm in arm with the sea behind them, making V signs. Jian stands in front holding a smartphone sideways with both hands, tongue poking out in concentration as he takes their photo.',
                lines: [
                    { sp: 'narrator', ko: '바다 앞에서 사진을 찍어요.', en: "They're taking a photo in front of the sea." },
                    { sp: 'jian', ko: '제가 사진을 찍을 수 있어요!', en: 'I can take the picture!' },
                    { sp: 'minji', ko: '좋아요! 하나, 둘, 셋!', en: 'Okay! One, two, three!' },
                    { sp: 'narrator', ko: '누가 사진을 찍어요? 민지? 아니요, 지안이 찍어요!', en: 'Who is taking the photo? Minji? No, Jian is!' }
                ],
                check: { q: '누가 사진을 찍어요?', en: 'Who is taking the photo?', options: ['지안', '민지', '준호'], answer: 0 }
            },
            {
                img: 'a2-04-6',
                art: 'Evening in the small kitchen of their seaside guesthouse. Junho, wearing an apron, tosses sizzling meat and vegetables in a frying pan with a confident grin. Alex watches, impressed, and Jian sneaks a piece from a plate.',
                lines: [
                    { sp: 'alex', ko: '준호 씨, 요리할 수 있어요?', en: 'Junho, can you cook?' },
                    { sp: 'junho', ko: '그럼요! 오늘 저녁은 제가 만들 거예요.', en: "Of course! I'm making dinner tonight." },
                    { sp: 'narrator', ko: '준호는 요리도 잘해요.', en: "Junho's good at cooking, too." },
                    { sp: 'narrator', ko: '지안은 고기를 먹어요. 하하, 맛있어요?', en: 'Jian is eating the meat. Haha, is it good?' },
                    { sp: 'jian', ko: '네! 형, 정말 맛있어요!', en: "Yes! It's really good, bro!" }
                ],
                check: { q: '누가 요리를 잘해요?', en: 'Who is good at cooking?', options: ['준호', '알렉스', '지안'], answer: 0 }
            },
            {
                img: 'a2-04-7',
                art: 'Late at night in a karaoke room with colourful disco lights and a big screen showing only a sunset video. Alex holds the microphone and sings with his eyes shut and mouth wide open. Minji and Junho cover their ears, laughing. Jian dances on the sofa with a tambourine.',
                lines: [
                    { sp: 'narrator', ko: '밤에는 노래방에 갔어요.', en: 'At night they went to a karaoke room.' },
                    { sp: 'alex', ko: '저는 노래를 잘할 수 있어요!', en: 'I can sing really well!' },
                    { sp: 'narrator', ko: '음... 알렉스는 노래를 잘 못해요.', en: "Hmm... Alex isn't very good at singing." },
                    { sp: 'narrator', ko: '민지하고 준호는 웃어요.', en: 'Minji and Junho are laughing.' },
                    { sp: 'narrator', ko: '그래도 모두 정말 신나요!', en: 'But everyone is having a blast!' }
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
        { ko: '한국어를 할 수 있어요?', en: 'Can you speak Korean?', blank: '수', alts: ['고', '서', '면'] },
        { ko: '지안은 정말 신나요.', en: 'Jian is really excited.', blank: '신나요', alts: ['신내요', '신나어요', '신났요'] }
    ]
});

KG.unit({
    id: 'a2-05',
    level: 'A2',
    round: 2,
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
        { ko: '겨울', en: 'winter', emoji: '⛄', pos: 'noun' },
        { ko: '기분', en: 'mood, how you feel', emoji: '😊', pos: 'noun', note: '기분이 좋아요 = I feel great. 기분이 안 좋아요 = I feel down.', forms: ['기분이', '기분도'] }
    ],
    story: {
        title: 'Sun, Wind and Rain',
        extras: 'Every scene is in Busan around Haeundae Beach: the Busan skyline of tall glass towers, Gwangan Bridge and the open sea. N Seoul Tower must never appear.',
        scenes: [
            {
                img: 'a2-05-0',
                art: "One picture, not a collage: late at night in the hotel room in Busan, with the lights of Haeundae Beach and its tall glass towers glowing through the big window. Jian is fast asleep on a bed, still holding a tambourine. Junho is asleep on the other bed, and a surfboard leans against the wall. Alex and Minji sit on the floor, looking at photos on Minji's phone and laughing.",
                lines: [
                    { sp: 'narrator', ko: '밤이에요. 여기는 부산 호텔이에요.', en: "It's night. This is the hotel in Busan." },
                    { sp: 'narrator', ko: '오늘 해운대에서 정말 많이 놀았어요.', en: 'Today they played a lot at Haeundae.' },
                    { sp: 'narrator', ko: '준호는 서핑을 했어요. 밤에는 노래방에도 갔어요!', en: 'Junho went surfing. At night they even went to karaoke!' },
                    { sp: 'minji', ko: '알렉스 씨, 오늘 어땠어요?', en: 'Alex, how was today?' },
                    { sp: 'alex', ko: '정말 신났어요! 그런데 저는 노래를 잘 못해요...', en: "It was a blast! But I'm not good at singing..." }
                ],
                check: { q: '누가 서핑을 했어요?', en: 'Who went surfing?', options: ['준호', '지안', '알렉스'], answer: 0 }
            },
            {
                img: 'a2-05-1',
                art: 'Morning in a hotel room with a big window over Haeundae beach: a bright sun, a clear blue sky without a single cloud, and a sparkling sea. Minji throws open the curtains, smiling. Alex, still in pajamas, shields his eyes from the sunlight.',
                lines: [
                    { sp: 'narrator', ko: '아침이에요. 날씨가 맑아요.', en: "It's morning. The weather is clear." },
                    { sp: 'narrator', ko: '비가 와요? 아니요, 날씨가 맑아요!', en: 'Is it raining? No, the weather is clear!' },
                    { sp: 'minji', ko: '와, 날씨가 정말 좋아요!', en: 'Wow, the weather is really nice!' },
                    { sp: 'narrator', ko: '민지는 기분이 좋아요.', en: 'Minji is in a great mood.' }
                ],
                check: { q: '아침에 날씨가 어때요?', en: "How's the weather in the morning?", options: ['맑아요', '비가 와요', '눈이 와요'], answer: 0 }
            },
            {
                img: 'a2-05-2',
                art: 'Noon on the beach. The sun blazes high overhead and heat shimmers rise off the sand. Jian, red-faced and sweaty, fans himself with his yellow cap. Junho wipes his forehead in the shade of a beach umbrella. Near them stands an ice-cream cart.',
                lines: [
                    { sp: 'narrator', ko: '낮에는 아주 더워요.', en: "In the daytime it's very hot." },
                    { sp: 'narrator', ko: '추워요? 아니요, 정말 더워요!', en: "Is it cold? No, it's really hot!" },
                    { sp: 'jian', ko: '형, 너무 더워요! 아이스크림 먹고 싶어요!', en: "Bro, it's too hot! I want ice cream!" },
                    { sp: 'junho', ko: '저도 더워요. 아이스크림 먹어요!', en: "I'm hot too. Let's have ice cream!" }
                ],
                check: { q: '낮에는 날씨가 어때요?', en: "What's the weather like at midday?", options: ['더워요', '추워요', '비가 와요'], answer: 0 }
            },
            {
                img: 'a2-05-3',
                art: "Late afternoon. Thick grey clouds roll in over the sea and cover the sun. A strong wind makes the beach umbrellas flap and blows Minji's hair across her face. Jian's yellow cap flies off and Alex runs after it.",
                lines: [
                    { sp: 'narrator', ko: '오후에는 날씨가 흐려요.', en: 'In the afternoon it gets cloudy.' },
                    { sp: 'narrator', ko: '날씨가 맑아요? 아니요, 지금은 흐려요.', en: "Is the weather clear? No, now it's cloudy." },
                    { sp: 'narrator', ko: '바람이 많이 불어요.', en: "It's very windy." },
                    { sp: 'jian', ko: '앗, 제 모자!', en: 'Oh no, my cap!' }
                ],
                check: { q: '오후에 날씨가 어때요?', en: "How's the weather in the afternoon?", options: ['맑아요', '흐려요', '더워요'], answer: 1 }
            },
            {
                img: 'a2-05-4',
                art: 'Heavy rain pours down on the beach. Junho, smiling and prepared, opens a big blue umbrella. Minji, Alex and Jian squeeze underneath it together, wet and laughing.',
                lines: [
                    { sp: 'alex', ko: '앗, 비가 와요! 우산 있어요?', en: "Oh no, it's raining! Does anyone have an umbrella?" },
                    { sp: 'junho', ko: '네, 우산 있어요. 여기요!', en: 'Yes, I have an umbrella. Here!' },
                    { sp: 'narrator', ko: '우산이 하나예요. 모두 우산 아래에 있어요!', en: "There's one umbrella. Everyone is under it!" },
                    { sp: 'narrator', ko: '비가 와요. 그래도 모두 웃어요.', en: "It's raining. But everyone is laughing." }
                ],
                check: { q: '누가 우산이 있어요?', en: 'Who has an umbrella?', options: ['준호', '알렉스', '민지'], answer: 0 }
            },
            {
                img: 'a2-05-5',
                art: 'Inside a cozy beachside café, rain streaming down the window. Minji, Alex, Junho and Jian hold warm mugs. A thought bubble above Alex shows a city of tall buildings buried in deep snow, with Alex in a thick coat and scarf, shivering.',
                lines: [
                    { sp: 'narrator', ko: '비가 와요. 모두 카페에 있어요.', en: "It's raining. Everyone is in a café." },
                    { sp: 'minji', ko: '알렉스 씨, 미국은 날씨가 어때요?', en: "Alex, what's the weather like in the US?" },
                    { sp: 'alex', ko: '저는 시카고에서 왔어요. 시카고는 겨울에 정말 추워요.', en: "I'm from Chicago. Chicago is really cold in winter." },
                    { sp: 'alex', ko: '눈도 많이 와요.', en: 'It snows a lot, too.' },
                    { sp: 'narrator', ko: '시카고는 겨울에 따뜻해요? 아니요, 정말 추워요!', en: "Is Chicago warm in winter? No, it's really cold!" }
                ],
                check: { q: '시카고는 겨울에 어때요?', en: "What's Chicago like in winter?", options: ['추워요', '더워요', '따뜻해요'], answer: 0 }
            },
            {
                img: 'a2-05-6',
                art: 'In the café, Minji counts on her fingers. Above her floats a four-part picture of the same Korean park in four seasons: pink cherry blossoms in spring, bright green trees under a hot sun in summer, red and yellow leaves in autumn, and white snow in winter. Alex listens, chin in hand.',
                lines: [
                    { sp: 'narrator', ko: '봄, 여름, 가을, 겨울!', en: 'Spring, summer, autumn, winter!' },
                    { sp: 'minji', ko: '한국은 봄에 따뜻해요. 여름에는 아주 더워요.', en: "In Korea it's warm in spring. In summer it's very hot." },
                    { sp: 'minji', ko: '가을에는 날씨가 정말 좋아요. 겨울에는 추워요.', en: "In autumn the weather is lovely. In winter it's cold." },
                    { sp: 'alex', ko: '저는 가을을 좋아해요!', en: 'I like autumn!' },
                    { sp: 'minji', ko: '저도요! 가을에는 기분이 좋아요.', en: 'Me too! Autumn puts me in a good mood.' }
                ],
                check: { q: '한국은 여름에 어때요?', en: "What's Korea like in summer?", options: ['더워요', '추워요', '따뜻해요'], answer: 0 }
            },
            {
                img: 'a2-05-7',
                art: 'Evening: the rain has stopped. A rainbow arches over the sea under an orange sunset, and the wet sand gleams. Minji, Alex, Junho and Jian walk along the beach; Junho carries the folded blue umbrella and Jian points at the rainbow.',
                lines: [
                    { sp: 'narrator', ko: '저녁에 비가 그쳤어요.', en: 'In the evening the rain stopped.' },
                    { sp: 'jian', ko: '와, 무지개예요!', en: "Wow, it's a rainbow!" },
                    { sp: 'narrator', ko: '무지개가 정말 예뻐요!', en: 'The rainbow is so pretty!' },
                    { sp: 'minji', ko: '내일은 날씨가 맑을 거예요.', en: 'Tomorrow the weather will be clear.' },
                    { sp: 'alex', ko: '와, 기분이 정말 좋아요!', en: 'Wow, I feel so good!' }
                ],
                check: { q: '저녁에 비가 와요?', en: 'Is it raining in the evening?', options: ['네, 많이 와요', '아니요, 그쳤어요'], answer: 1 }
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
        },
        {
            form: '기분이 좋아요 · 신나요',
            meaning: 'saying how you feel',
            note: '기분 is your mood: 기분이 좋아요 (I feel good), 기분이 안 좋아요 (I feel down). 신나요 is for fun, exciting things. Past: 기분이 좋았어요, 신났어요.',
            examples: [
                { ko: '날씨가 좋아요. 기분도 좋아요!', en: 'The weather is nice. I feel great too!' },
                { ko: '비가 와요. 기분이 안 좋아요.', en: "It's raining. I feel down." },
                { ko: '바다에 가요! 정말 신나요!', en: "We're going to the sea! So exciting!" }
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
        { ko: '내일은 맑을 거예요.', en: 'It will be clear tomorrow.', blank: '맑을', alts: ['맑', '맑은', '맑아'] },
        { ko: '오늘은 기분이 좋아요.', en: 'I feel great today.', blank: '기분이', alts: ['기분을', '기분에', '날씨를'] }
    ]
});

KG.unit({
    id: 'a2-06',
    level: 'A2',
    round: 2,
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
        { ko: '고마워요', en: 'thank you (friendly polite)', emoji: '🙏', pos: 'expr', note: 'From 고맙다 (ㅂ irregular, like 추워요).' },
        { ko: '걱정되다', en: 'to be worried', emoji: '😟', pos: 'verb', polite: '걱정돼요', forms: ['걱정돼요', '걱정됐어요'], note: '되어요 shortens to 돼요 (never 되요).' }
    ],
    story: {
        title: 'A Very Bad Morning',
        extras: 'The teacher is a cheerful Korean woman in her forties with a short wavy brown bob, a navy cardigan over a white blouse and grey trousers. She is not the grandmother. A few other adult students sit in the background.',
        scenes: [
            {
                img: 'a2-06-0',
                art: "One picture, not a collage: Sunday evening inside a KTX train going back from Busan to Seoul. Outside the window the sky is orange after the rain. Minji, Junho and Jian are asleep in their seats; Jian's yellow cap has slipped over his eyes, and Junho's folded blue umbrella hangs on his seat. Alex is the only one awake, with a thick textbook and homework sheets open on his tray, sighing.",
                lines: [
                    { sp: 'narrator', ko: '부산 여행이 끝났어요. 지금은 KTX 안이에요.', en: "The Busan trip is over. Now they're on the KTX." },
                    { sp: 'narrator', ko: '부산은 날씨가 어땠어요? 맑았어요. 더웠어요. 비도 왔어요!', en: 'How was the weather in Busan? Sunny. Hot. And it rained, too!' },
                    { sp: 'narrator', ko: '민지, 준호, 지안은 자요. 알렉스는요?', en: 'Minji, Junho and Jian are sleeping. And Alex?' },
                    { sp: 'alex', ko: '아, 숙제가 정말 많아요...', en: 'Ugh, I have so much homework...' }
                ],
                check: { q: '부산에서 비가 왔어요?', en: 'Did it rain in Busan?', options: ['네', '아니요'], answer: 0 }
            },
            {
                img: 'a2-06-1',
                art: "A classroom with a big round wall clock showing exactly nine o'clock. The teacher stands at the front holding a textbook. Minji sits next to an empty desk and glances at the door with a worried face.",
                lines: [
                    { sp: 'narrator', ko: '아홉 시예요. 수업 시간이에요.', en: "It's nine o'clock. It's class time." },
                    { sp: 'narrator', ko: '그런데 알렉스가 없어요.', en: "But Alex isn't here." },
                    { sp: 'narrator', ko: '알렉스는 어디에 있어요? 민지는 몰라요.', en: "Where is Alex? Minji doesn't know." },
                    { sp: 'minji', ko: '알렉스 씨가 안 왔어요. 걱정돼요...', en: "Alex hasn't come. I'm worried..." }
                ],
                check: { q: '민지는 기분이 어때요?', en: 'How is Minji feeling?', options: ['걱정돼요', '신나요'], answer: 0 }
            },
            {
                img: 'a2-06-2',
                art: 'The wall clock now shows nine thirty. The classroom door bursts open and Alex stumbles in, sweaty and out of breath, hair sticking up and one shoelace untied. The teacher folds her arms and raises an eyebrow. Minji covers her mouth.',
                lines: [
                    { sp: 'narrator', ko: '아홉 시 반이에요. 알렉스가 왔어요!', en: "It's nine thirty. Alex has arrived!" },
                    { sp: 'alex', ko: '죄송해요! 늦었어요!', en: "I'm sorry! I'm late!" },
                    { sp: 'staffF', as: '선생님', ko: '알렉스 씨, 왜 늦었어요?', en: 'Alex, why are you late?' },
                    { sp: 'narrator', ko: '아홉 시에 왔어요? 아니요, 아홉 시 반에 왔어요. 늦었어요!', en: "Did he come at nine? No, at nine thirty. He's late!" }
                ],
                check: { q: '알렉스는 몇 시에 왔어요?', en: 'What time did Alex arrive?', options: ['아홉 시', '아홉 시 반', '열 시'], answer: 1 }
            },
            {
                img: 'a2-06-3',
                art: "Thought-bubble memory: late at night Alex sits at his desk under a lamp, buried in books, a clock showing two o'clock in the dark. Next to it, a second small bubble: morning sun pours in while Alex sleeps and his alarm clock rings and shakes on the nightstand.",
                lines: [
                    { sp: 'alex', ko: '어제 숙제가 많아서 늦게 잤어요.', en: 'I had a lot of homework yesterday, so I went to bed late.' },
                    { sp: 'alex', ko: '그래서 아침에 늦게 일어났어요.', en: 'So I woke up late this morning.' },
                    { sp: 'narrator', ko: '밤 두 시까지 숙제했어요.', en: 'He did homework until two at night.' },
                    { sp: 'narrator', ko: '왜 늦게 일어났어요? 늦게 자서 늦게 일어났어요.', en: 'Why did he wake up late? He went to bed late, so he woke up late.' }
                ],
                check: { q: '알렉스는 왜 늦게 일어났어요?', en: 'Why did Alex wake up late?', options: ['늦게 자서', '아파서', '비가 와서'], answer: 0 }
            },
            {
                img: 'a2-06-4',
                art: 'Thought-bubble memory: a green city bus pulls away from a bus stop. Alex sprints after it with one arm stretched out, his red backpack bouncing, his face desperate.',
                lines: [
                    { sp: 'alex', ko: '그리고 버스를 놓쳐서 학교까지 뛰었어요.', en: 'And I missed the bus, so I ran all the way to school.' },
                    { sp: 'narrator', ko: '버스를 탔어요? 아니요, 버스를 놓쳤어요. 그래서 뛰었어요.', en: 'Did he catch the bus? No, he missed it. So he ran.' },
                    { sp: 'staffF', as: '선생님', ko: '아이고, 괜찮아요. 앉아요.', en: "Oh dear. It's okay. Have a seat." }
                ],
                check: { q: '알렉스는 버스를 탔어요?', en: 'Did Alex catch the bus?', options: ['네, 탔어요', '아니요, 놓쳤어요'], answer: 1 }
            },
            {
                img: 'a2-06-5',
                art: 'Alex slumps at his desk next to Minji, eyes half closed. Little wavy lines near his stomach show it is growling. Minji leans over and looks at him with concern.',
                lines: [
                    { sp: 'minji', ko: '알렉스 씨, 아침 먹었어요?', en: 'Alex, did you eat breakfast?' },
                    { sp: 'alex', ko: '아니요. 시간이 없어서 못 먹었어요.', en: "No. I didn't have time, so I couldn't eat." },
                    { sp: 'narrator', ko: '알렉스는 피곤해요. 배도 고파요.', en: "Alex is tired. He's hungry too." },
                    { sp: 'narrator', ko: '알렉스는 기분이 좋아요? 아니요, 기분이 안 좋아요.', en: 'Is Alex in a good mood? No, he feels down.' }
                ],
                check: { q: '알렉스는 왜 아침을 못 먹었어요?', en: "Why couldn't Alex eat breakfast?", options: ['시간이 없어서', '배가 아파서', '맛없어서'], answer: 0 }
            },
            {
                img: 'a2-06-6',
                art: 'During the break, Minji takes a sweet bread roll and a small carton of milk out of her bag and hands them to Alex. His face lights up and he takes them with both hands.',
                lines: [
                    { sp: 'narrator', ko: '민지 가방에 빵하고 우유가 있어요.', en: "There's bread and milk in Minji's bag." },
                    { sp: 'minji', ko: '이 빵 먹어요. 우유도 있어요.', en: "Have this bread. There's milk too." },
                    { sp: 'alex', ko: '와, 정말 고마워요!', en: 'Wow, thank you so much!' },
                    { sp: 'narrator', ko: '알렉스가 웃어요. 이제 기분이 좋아요!', en: 'Alex smiles. Now he feels good!' }
                ],
                check: { q: '민지 가방에 뭐가 있어요?', en: "What's in Minji's bag?", options: ['빵하고 우유', '김밥하고 물', '책하고 우산'], answer: 0 }
            },
            {
                img: 'a2-06-7',
                art: 'Later in class, Alex has dozed off on his desk, cheek on his open textbook, an empty bread wrapper beside him. The teacher stands over him with her hands on her hips. Minji hides a laugh behind her hand.',
                lines: [
                    { sp: 'narrator', ko: '수업 시간이에요. 그런데 알렉스는 자요!', en: "It's class time. But Alex is sleeping!" },
                    { sp: 'staffF', as: '선생님', ko: '알렉스 씨! 왜 자요? 아파요?', en: 'Alex! Why are you sleeping? Are you sick?' },
                    { sp: 'alex', ko: '아니요, 죄송해요... 너무 피곤해서요.', en: "No, I'm sorry... it's because I'm so tired." },
                    { sp: 'narrator', ko: '민지는 웃어요. 알렉스는 정말 피곤해요!', en: 'Minji laughs. Alex is really tired!' }
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
                { ko: '배가 고파서 빵을 먹었어요.', en: 'I was hungry, so I ate some bread.' },
                { ko: '알렉스 씨가 안 와서 걱정돼요.', en: "Alex hasn't come, so I'm worried." }
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
        { ko: '너무 피곤해서요.', en: "Because I'm so tired.", blank: '서요', alts: ['어요', '고요', '세요'] },
        { ko: '알렉스 씨가 없어서 걱정돼요.', en: "Alex isn't here, so I'm worried.", blank: '걱정돼요', alts: ['걱정되요', '걱정해서요', '걱정돼서'] }
    ]
});

KG.unit({
    id: 'a2-r2',
    level: 'A2',
    round: 2,
    review: true,
    title: "Jian's Swimming Day",
    ko: '수영할 수 있어요!',
    icon: '🏊',
    goal: 'Review Round 2: abilities, weather, feelings and reasons, on a hot day at the Han River pool.',
    vocab: [
        { ko: '수영하다', en: 'to swim', emoji: '🏊', pos: 'verb', polite: '수영해요', forms: ['수영할', '수영을'] },
        { ko: '배우다', en: 'to learn', emoji: '📚', pos: 'verb', polite: '배워요' },
        { ko: '잘하다', en: 'to be good at', emoji: '👍', pos: 'verb', polite: '잘해요', forms: ['잘했어요'] },
        { ko: '날씨', en: 'weather', emoji: '🌤️', pos: 'noun', forms: ['날씨가'] },
        { ko: '덥다', en: 'to be hot (weather)', emoji: '🥵', pos: 'adj', polite: '더워요', note: 'ㅂ irregular: 덥다 → 더워요.' },
        { ko: '흐리다', en: 'to be cloudy', emoji: '☁️', pos: 'adj', polite: '흐려요' },
        { ko: '비', en: 'rain', emoji: '🌧️', pos: 'noun', note: '비가 와요 = it rains.', forms: ['비가'] },
        { ko: '신나다', en: 'to be excited, to have a blast', emoji: '🤩', pos: 'verb', polite: '신나요' },
        { ko: '걱정되다', en: 'to be worried', emoji: '😟', pos: 'verb', polite: '걱정돼요' },
        { ko: '기분', en: 'mood, how you feel', emoji: '😊', pos: 'noun', forms: ['기분이'] },
        { ko: '왜', en: 'why', emoji: '❓', pos: 'other' },
        { ko: '늦다', en: 'to be late', emoji: '⏰', pos: 'verb', polite: '늦어요', forms: ['늦었어요', '늦어서'] }
    ],
    story: {
        title: 'A Day at the Pool',
        extras: 'Every scene is at the big outdoor swimming pool in Han River Park in Seoul on a summer Saturday: a wide blue pool with striped sun umbrellas, green lawns, and the Han River with a long bridge behind it. The snack-bar worker is a young Korean man with a white cap and an orange apron.',
        scenes: [
            {
                img: 'a2-r2-1',
                art: 'A hot, sunny Saturday morning at the outdoor swimming pool in Han River Park, Seoul: a big blue pool, striped sun umbrellas, and the wide river with a long bridge behind it. Minji, Alex and Jian arrive in swimwear, carrying towels. Jian, wearing his pink inflatable swim ring and his yellow cap backwards, jumps with both arms in the air.',
                lines: [
                    { sp: 'narrator', ko: '토요일이에요. 날씨가 맑아요. 아주 더워요!', en: "It's Saturday. The weather is clear. It's very hot!" },
                    { sp: 'narrator', ko: '여기는 한강 수영장이에요.', en: 'This is the Han River swimming pool.' },
                    { sp: 'jian', ko: '와, 수영장이에요! 정말 신나요!', en: "Wow, a swimming pool! I'm so excited!" },
                    { sp: 'narrator', ko: '지안은 신나요. 기분이 아주 좋아요.', en: "Jian is excited. He's in a great mood." }
                ],
                check: { q: '오늘 날씨가 어때요?', en: "What's the weather like today?", options: ['더워요', '추워요', '눈이 와요'], answer: 0 }
            },
            {
                img: 'a2-r2-2',
                art: 'At the pool entrance, Minji and Alex stand holding their towels. Jian looks all around with a puzzled face, one hand shading his eyes as if searching for someone. Minji shrugs and laughs.',
                lines: [
                    { sp: 'jian', ko: '누나, 준호 형은 왜 안 왔어요?', en: "Sis, why didn't Junho come?" },
                    { sp: 'minji', ko: '오빠는 피곤해서 아직 자요.', en: "He's tired, so he's still asleep." },
                    { sp: 'narrator', ko: '준호는 왜 안 왔어요? 피곤해서 안 왔어요.', en: "Why didn't Junho come? Because he's tired." },
                    { sp: 'alex', ko: '하하! 준호 씨는 오늘도 하루 종일 잘 거예요!', en: 'Haha! Junho will sleep all day today too!' }
                ],
                check: { q: '준호는 왜 안 왔어요?', en: "Why didn't Junho come?", options: ['피곤해서', '아파서', '비가 와서'], answer: 0 }
            },
            {
                img: 'a2-r2-3',
                art: 'At the edge of the pool, Jian stands in his pink swim ring and looks down at the water with a nervous face, hands clasped together. Alex is already in the water up to his chest, smiling and holding out both arms to him.',
                lines: [
                    { sp: 'narrator', ko: '알렉스는 수영을 잘해요. 지안은요?', en: 'Alex is good at swimming. And Jian?' },
                    { sp: 'jian', ko: '형, 저는 아직 수영할 수 없어요... 걱정돼요.', en: "Alex, I still can't swim... I'm worried." },
                    { sp: 'alex', ko: '괜찮아요! 제가 있어요. 같이 해요!', en: "It's okay! I'm here. Let's do it together!" }
                ],
                check: { q: '지안은 기분이 어때요?', en: 'How does Jian feel?', options: ['걱정돼요', '신나요', '피곤해요'], answer: 0 }
            },
            {
                img: 'a2-r2-4',
                art: "In the pool, Jian kicks his legs and splashes, holding on to Alex's hands, now laughing. At the side of the pool, Minji crouches and takes a photo of them with her phone.",
                lines: [
                    { sp: 'narrator', ko: '지안이 수영을 배워요.', en: 'Jian is learning to swim.' },
                    { sp: 'narrator', ko: '지안은 걱정돼요? 아니요! 지금은 웃어요.', en: "Is Jian worried? No! Now he's laughing." },
                    { sp: 'minji', ko: '와, 잘해요! 제가 사진을 찍어요. 하나, 둘, 셋!', en: "Wow, you're doing great! I'll take a photo. One, two, three!" }
                ],
                check: { q: '누가 사진을 찍어요?', en: 'Who is taking a photo?', options: ['민지', '알렉스', '지안'], answer: 0 }
            },
            {
                img: 'a2-r2-5',
                art: 'Afternoon. Dark grey clouds cover the sky over the Han River, and a strong wind bends the pool umbrellas sideways. Rain starts to pour and swimmers climb out of the pool. Minji, Alex and Jian run toward a covered snack bar, holding towels over their heads.',
                lines: [
                    { sp: 'narrator', ko: '오후에는 날씨가 흐려요. 바람이 많이 불어요.', en: "In the afternoon it gets cloudy. It's very windy." },
                    { sp: 'narrator', ko: '그리고... 비가 와요!', en: "And... it's raining!" },
                    { sp: 'alex', ko: '우산 있어요?', en: 'Do you have an umbrella?' },
                    { sp: 'minji', ko: '아니요, 우산이 없어요! 빨리 뛰어요!', en: "No, I don't have one! Run, quick!" }
                ],
                check: { q: '민지는 우산이 있어요?', en: 'Does Minji have an umbrella?', options: ['네', '아니요'], answer: 1 }
            },
            {
                img: 'a2-r2-6',
                art: 'Under the roof of the pool snack bar, rain pours down past the edge of the roof. Minji, Alex and Jian sit at a small table wrapped in towels, eating steaming cups of instant ramyeon. Jian slurps his noodles happily. The snack-bar worker smiles behind the counter.',
                lines: [
                    { sp: 'jian', ko: '누나, 배가 고파요!', en: "Sis, I'm hungry!" },
                    { sp: 'narrator', ko: '왜 배가 고파요? 수영을 많이 해서 배가 고파요.', en: "Why is he hungry? He swam a lot, so he's hungry." },
                    { sp: 'staffM', as: '직원', ko: '라면 여기 있어요!', en: "Here's your ramyeon!" },
                    { sp: 'narrator', ko: '비가 와요. 그래도 라면이 정말 맛있어요!', en: "It's raining. But the ramyeon is really tasty!" }
                ],
                check: { q: '지안은 왜 배가 고파요?', en: 'Why is Jian hungry?', options: ['수영을 많이 해서', '늦게 일어나서', '아파서'], answer: 0 }
            },
            {
                img: 'a2-r2-7',
                art: 'Evening. The rain has stopped and the sky over the Han River is pink and orange. Junho runs up to the pool snack bar out of breath, his hair messy, holding a bag of ice creams. Minji and Alex laugh at him. Jian proudly mimes swimming with his arms.',
                lines: [
                    { sp: 'narrator', ko: '저녁이에요. 비가 그쳤어요.', en: "It's evening. The rain has stopped." },
                    { sp: 'junho', ko: '늦어서 미안해요!', en: "Sorry I'm late!" },
                    { sp: 'minji', ko: '오빠, 왜 늦었어요?', en: 'Junho, why are you so late?' },
                    { sp: 'junho', ko: '음... 늦게 일어나서요.', en: 'Um... because I woke up late.' },
                    { sp: 'jian', ko: '형! 저 수영할 수 있어요!', en: 'Bro! I can swim!' },
                    { sp: 'junho', ko: '와, 정말요? 잘했어요!', en: 'Wow, really? Well done!' }
                ],
                check: { q: '준호는 왜 늦었어요?', en: 'Why was Junho late?', options: ['늦게 일어나서', '버스를 놓쳐서', '배가 아파서'], answer: 0 }
            }
        ]
    },
    patterns: [
        {
            form: 'V + (으)ㄹ 수 있어요 / 없어요 · 잘해요',
            meaning: 'can, cannot, good at (review)',
            note: '수영할 수 있어요 = I can swim. 수영할 수 없어요 or 수영 못 해요 = I cannot swim. 잘해요 = is good at it; 잘 못해요 = is not good at it.',
            examples: [
                { ko: '지안은 수영할 수 없어요.', en: "Jian can't swim." },
                { ko: '알렉스는 수영을 잘해요.', en: 'Alex is good at swimming.' },
                { ko: '저 수영할 수 있어요!', en: 'I can swim!' }
            ]
        },
        {
            form: '날씨 · 기분이 좋아요 · 신나요 · 걱정돼요',
            meaning: 'weather and feelings (review)',
            note: 'Weather: 맑아요, 흐려요, 더워요, 비가 와요, 바람이 불어요. Feelings: 기분이 좋아요 (I feel good), 신나요 (I am excited), 걱정돼요 (I am worried).',
            examples: [
                { ko: '날씨가 아주 더워요.', en: "It's very hot." },
                { ko: '정말 신나요!', en: "I'm so excited!" },
                { ko: '조금 걱정돼요.', en: "I'm a little worried." }
            ]
        },
        {
            form: '왜요? → V/A + 아서 / 어서 (요)',
            meaning: 'asking and giving reasons (review)',
            note: '피곤하다 → 피곤해서, 일어나다 → 일어나서, 수영을 많이 하다 → 수영을 많이 해서. The tense goes at the end of the sentence: 늦게 일어나서 늦었어요. A short answer ends in 서요.',
            examples: [
                { ko: '왜 늦었어요?', en: 'Why were you late?' },
                { ko: '늦게 일어나서요.', en: 'Because I woke up late.' },
                { ko: '수영을 많이 해서 배가 고파요.', en: "I swam a lot, so I'm hungry." }
            ]
        }
    ],
    sentences: [
        { ko: '저는 수영할 수 없어요.', en: "I can't swim.", blank: '없어요', alts: ['있어요', '싶어요', '거예요'] },
        { ko: '알렉스는 수영을 잘해요.', en: 'Alex is good at swimming.', blank: '잘해요', alts: ['잘 못해요', '못 해요', '싫어해요'] },
        { ko: '수영을 배우고 싶어요.', en: 'I want to learn to swim.', blank: '배우고', alts: ['배울', '배워', '배웠'] },
        { ko: '오늘은 날씨가 아주 더워요.', en: "It's very hot today.", blank: '더워요', alts: ['덥어요', '더와요', '추워요'] },
        { ko: '오후에 비가 와요.', en: "It's raining in the afternoon.", blank: '와요', alts: ['불어요', '맑아요', '흐려요'] },
        { ko: '정말 신나요!', en: "I'm so excited!", blank: '신나요', alts: ['신내요', '신나어요', '걱정돼요'] },
        { ko: '조금 걱정돼요.', en: "I'm a little worried.", blank: '걱정돼요', alts: ['걱정되요', '걱정되서', '신나요'] },
        { ko: '지안은 기분이 좋아요.', en: 'Jian is in a good mood.', blank: '기분이', alts: ['기분을', '기분에', '날씨를'] },
        { ko: '준호는 피곤해서 안 왔어요.', en: "Junho was tired, so he didn't come.", blank: '피곤해서', alts: ['피곤하서', '피곤했어서', '피곤해요'] },
        { ko: '늦게 일어나서 늦었어요.', en: 'I woke up late, so I was late.', blank: '일어나서', alts: ['일어났어서', '일어나어서', '일어나요'] },
        { ko: '수영을 많이 해서 배가 고파요.', en: "I swam a lot, so I'm hungry.", blank: '해서', alts: ['했어서', '하서', '하고'] },
        { ko: '늦어서 미안해요.', en: "Sorry I'm late.", blank: '늦어서', alts: ['늦었어서', '늦아서', '늦고'] }
    ]
});

KG.unit({
    id: 'a2-07',
    level: 'A2',
    round: 3,
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
                img: 'a2-07-0',
                art: 'One picture, not a collage: Sunday morning in the family living room. Jian lies on his tummy on a big floor cushion, kicking his legs and paddling his arms as if he is swimming, his pink swim ring beside him. Grandma sits in her armchair, laughing and clapping. Nabi the cat watches Jian with wide eyes. Minji stands by the front door with her bag, ready to go out.',
                lines: [
                    { sp: 'narrator', ko: '어제 지안은 한강 수영장에 갔어요.', en: 'Yesterday Jian went to the Han River pool.' },
                    { sp: 'narrator', ko: '수영을 배웠어요. 지금은 집에서 수영해요!', en: 'He learned to swim. Now he is swimming at home!' },
                    { sp: 'jian', ko: '할머니! 저 수영할 수 있어요!', en: 'Grandma! I can swim!' },
                    { sp: 'halmeoni', ko: '아이고, 잘했어요!', en: 'Oh my, well done!' },
                    { sp: 'minji', ko: '할머니, 저는 알렉스 씨하고 시장에 갈 거예요!', en: "Grandma, I'm going to the market with Alex!" }
                ],
                check: { q: '지안은 어제 뭐 배웠어요?', en: 'What did Jian learn yesterday?', options: ['수영', '서핑', '요리'], answer: 0 }
            },
            {
                img: 'a2-07-1',
                art: 'A lively Seoul clothing market street: rows of small stalls packed with colourful T-shirts, jeans, skirts, hats and sneakers hanging from racks. Minji excitedly pulls Alex by the sleeve into the busy crowd.',
                lines: [
                    { sp: 'narrator', ko: '여기는 동대문 시장이에요.', en: 'This is Dongdaemun Market.' },
                    { sp: 'narrator', ko: '티셔츠, 바지, 치마, 모자... 옷이 정말 많아요.', en: 'T-shirts, trousers, skirts, hats... there are so many clothes.' },
                    { sp: 'minji', ko: '알렉스 씨, 빨리 와요!', en: 'Alex, come on, quick!' },
                    { sp: 'narrator', ko: '신발도 있어요? 네, 신발도 많아요!', en: 'Are there shoes too? Yes, lots of shoes!' }
                ],
                check: { q: '시장에 뭐가 많아요?', en: 'What is there a lot of at the market?', options: ['옷', '책', '컴퓨터'], answer: 0 }
            },
            {
                img: 'a2-07-2',
                art: 'At a T-shirt stall, Alex holds a bright blue T-shirt up against his chest. The clothes vendor nods and smiles, pointing to a small curtained fitting corner at the back of the stall.',
                lines: [
                    { sp: 'alex', ko: '와, 이 파란색 티셔츠 멋있어요.', en: 'Wow, this blue T-shirt looks cool.' },
                    { sp: 'narrator', ko: '빨간색 티셔츠예요? 아니요, 파란색 티셔츠예요.', en: 'Is it a red T-shirt? No, a blue T-shirt.' },
                    { sp: 'alex', ko: '입어 봐도 돼요?', en: 'Can I try it on?' },
                    { sp: 'staffF', as: '직원', ko: '네, 입어 봐도 돼요.', en: 'Yes, you can try it on.' }
                ],
                check: { q: '알렉스는 무슨 색 티셔츠를 입어 봐요?', en: 'What colour T-shirt does Alex try on?', options: ['파란색', '빨간색', '노란색'], answer: 0 }
            },
            {
                img: 'a2-07-3',
                art: 'Alex steps out of the fitting corner wearing the blue T-shirt, which is far too small: it is tight, the sleeves are short and his belly peeks out. Minji bursts out laughing.',
                lines: [
                    { sp: 'narrator', ko: '알렉스가 티셔츠를 입어 봤어요. 티셔츠가 커요? 아니요, 너무 작아요!', en: 'Alex tried on the T-shirt. Is it big? No, way too small!' },
                    { sp: 'minji', ko: '하하, 너무 작아요!', en: "Haha, it's way too small!" },
                    { sp: 'alex', ko: 'L 사이즈 있어요?', en: 'Do you have a large?' },
                    { sp: 'staffF', as: '직원', ko: '네, 여기 있어요.', en: 'Yes, here you go.' }
                ],
                check: { q: '티셔츠가 어때요?', en: "How's the T-shirt?", options: ['너무 작아요', '너무 커요', '딱 좋아요'], answer: 0 }
            },
            {
                img: 'a2-07-4',
                art: 'Alex now wears the same blue T-shirt in a bigger size, and it fits perfectly. He grins and holds out a plain bank card. The clothes vendor smiles and takes it.',
                lines: [
                    { sp: 'alex', ko: '이건 딱 좋아요! 얼마예요?', en: 'This one is just right! How much is it?' },
                    { sp: 'staffF', as: '직원', ko: '만 오천 원이에요.', en: "It's fifteen thousand won." },
                    { sp: 'alex', ko: '카드 돼요?', en: 'Can I pay by card?' },
                    { sp: 'staffF', as: '직원', ko: '네, 돼요.', en: 'Yes, you can.' },
                    { sp: 'narrator', ko: '알렉스는 파란색 티셔츠를 샀어요.', en: 'Alex bought the blue T-shirt.' }
                ],
                check: { q: '티셔츠는 얼마예요?', en: 'How much is the T-shirt?', options: ['오천 원', '만 오천 원', '오만 원'], answer: 1 }
            },
            {
                img: 'a2-07-5',
                art: 'At a shoe stall, Minji sits on a low stool trying on shiny black sneakers. One shoe is clearly too big: her heel slips out of the back. The shoe vendor kneels beside her holding the shoe box.',
                lines: [
                    { sp: 'minji', ko: '이 신발 신어 봐도 돼요?', en: 'Can I try on these shoes?' },
                    { sp: 'staffM', as: '직원', ko: '네, 신어 봐도 돼요.', en: 'Sure, go ahead and try them on.' },
                    { sp: 'minji', ko: '음... 조금 커요.', en: "Hmm... they're a little big." },
                    { sp: 'narrator', ko: '신발이 작아요? 아니요, 조금 커요.', en: "Are the shoes small? No, they're a little big." }
                ],
                check: { q: '신발이 어때요?', en: 'How are the shoes?', options: ['조금 커요', '조금 작아요'], answer: 0 }
            },
            {
                img: 'a2-07-6',
                art: 'Back at the clothes stall, Minji twirls in front of a tall mirror in a red pleated skirt, smiling. Alex gives two thumbs up. The clothes vendor claps her hands.',
                lines: [
                    { sp: 'minji', ko: '이 빨간색 치마는 어때요?', en: 'How about this red skirt?' },
                    { sp: 'alex', ko: '와, 정말 예뻐요!', en: "Wow, it's really pretty!" },
                    { sp: 'narrator', ko: '치마가 커요? 작아요? 아니요, 딱 좋아요!', en: "Is the skirt big? Small? No, it's just right!" },
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
                    { sp: 'minji', ko: '하하! 모자가 너무 커요!', en: 'Haha! The hat is way too big!' },
                    { sp: 'narrator', ko: '모자는 무슨 색이에요? 노란색이에요.', en: 'What colour is the hat? Yellow.' }
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
    round: 3,
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
                img: 'a2-08-0',
                art: 'One picture, not a collage: that evening in the family living room. Minji twirls in her new red pleated skirt, holding a shopping bag from the market. Grandma claps her hands in her armchair. Jian sits on the sofa wrapped in a blanket, sneezing into a tissue, his cheeks a little red. Nabi the cat sits beside him.',
                lines: [
                    { sp: 'narrator', ko: '민지는 오늘 동대문 시장에 갔어요.', en: 'Today Minji went to Dongdaemun Market.' },
                    { sp: 'narrator', ko: '뭐 샀어요? 빨간색 치마를 샀어요.', en: 'What did she buy? A red skirt.' },
                    { sp: 'halmeoni', ko: '아이고, 정말 예뻐요!', en: "Oh my, it's so pretty!" },
                    { sp: 'narrator', ko: '그런데 지안은 괜찮아요?', en: 'But is Jian okay?' },
                    { sp: 'jian', ko: '에취!', en: 'Achoo!' }
                ],
                check: { q: '민지는 무슨 색 치마를 샀어요?', en: 'What colour skirt did Minji buy?', options: ['빨간색', '파란색', '노란색'], answer: 0 }
            },
            {
                img: 'a2-08-1',
                art: "Morning in Jian's bedroom. Jian lies in bed under a blanket, his face flushed red, a box of tissues beside his pillow. Grandma sits on the edge of the bed with her hand on his forehead, looking worried. Nabi the cat curls up at the foot of the bed.",
                lines: [
                    { sp: 'narrator', ko: '아침이에요. 지안은 침대에 있어요.', en: "It's morning. Jian is in bed." },
                    { sp: 'narrator', ko: '지안이 아파요.', en: 'Jian is sick.' },
                    { sp: 'halmeoni', ko: '어디가 아파요?', en: 'Where does it hurt?' },
                    { sp: 'jian', ko: '머리가 아파요. 목도 아파요...', en: 'My head hurts. My throat hurts too...' },
                    { sp: 'narrator', ko: '할머니는 지안이 걱정돼요.', en: 'Grandma is worried about Jian.' }
                ],
                check: { q: '지안은 어디가 아파요?', en: 'Where does Jian hurt?', options: ['머리하고 목', '배', '다리'], answer: 0 }
            },
            {
                img: 'a2-08-2',
                art: 'Grandma holds a thermometer whose tip glows red and stares at it with wide, alarmed eyes. Jian coughs into his elbow. Nabi the cat watches from the blanket.',
                lines: [
                    { sp: 'halmeoni', ko: '아이고, 열이 나요!', en: 'Oh dear, you have a fever!' },
                    { sp: 'narrator', ko: '지안은 기침도 해요.', en: 'Jian is coughing too.' },
                    { sp: 'narrator', ko: '열이 나요? 네, 열이 많이 나요.', en: 'Does he have a fever? Yes, a high one.' },
                    { sp: 'halmeoni', ko: '병원에서 의사 선생님을 만날 거예요.', en: "We're going to see the doctor at the clinic." }
                ],
                check: { q: '지안은 열이 나요?', en: 'Does Jian have a fever?', options: ['네', '아니요'], answer: 0 }
            },
            {
                img: 'a2-08-3',
                art: 'A bright clinic examination room. The doctor shines a small penlight into the open mouth of Jian, who says ah with his tongue out. Grandma sits on a chair nearby, holding the yellow cap of Jian.',
                lines: [
                    { sp: 'narrator', ko: '여기는 병원이에요.', en: 'This is the clinic.' },
                    { sp: 'staffM', as: '의사', ko: '어디가 아파요? 배도 아파요?', en: 'Where does it hurt? Does your tummy hurt too?' },
                    { sp: 'jian', ko: '아니요, 배는 안 아파요. 목이 아파요.', en: "No, my tummy doesn't hurt. My throat hurts." },
                    { sp: 'staffM', as: '의사', ko: '자, 입을 벌리세요. 아~ 하세요.', en: 'Okay, open your mouth. Say "ah".' },
                    { sp: 'jian', ko: '아~', en: 'Ahh~' }
                ],
                check: { q: '지안은 배가 아파요?', en: 'Does Jian have a stomachache?', options: ['네', '아니요'], answer: 1 }
            },
            {
                img: 'a2-08-4',
                art: 'The doctor sits at his desk, smiling kindly. A thought bubble beside him shows Jian sleeping peacefully in bed next to a big glass of water. Grandma nods and bows her head slightly; Jian sniffles.',
                lines: [
                    { sp: 'staffM', as: '의사', ko: '감기예요. 집에서 푹 쉬세요.', en: "It's a cold. Get plenty of rest at home." },
                    { sp: 'staffM', as: '의사', ko: '그리고 물을 많이 드세요.', en: 'And drink lots of water.' },
                    { sp: 'staffM', as: '의사', ko: '오늘은 학교에 안 가는 게 좋아요.', en: "It's best not to go to school today." },
                    { sp: 'halmeoni', ko: '네, 감사합니다.', en: 'Yes, thank you.' },
                    { sp: 'narrator', ko: '푹 쉬는 게 좋아요. 물을 많이 마시는 게 좋아요.', en: "It's best to rest well. It's good to drink lots of water." }
                ],
                check: { q: '의사 선생님은 뭐라고 해요?', en: 'What does the doctor say?', options: ['푹 쉬세요', '학교에 가세요', '수영하세요'], answer: 0 }
            },
            {
                img: 'a2-08-5',
                art: 'Inside a small neighbourhood pharmacy with shelves of colourful medicine boxes (no readable labels). The pharmacist hands a small white paper bag across the counter to Grandma and holds up three fingers. Jian, wearing a white face mask, leans against Grandma.',
                lines: [
                    { sp: 'narrator', ko: '할머니하고 지안은 약국에 갔어요.', en: 'Grandma and Jian went to the pharmacy.' },
                    { sp: 'staffF', as: '약사', ko: '이 약을 하루에 세 번 드세요.', en: 'Take this medicine three times a day.' },
                    { sp: 'staffF', as: '약사', ko: '그리고 밥을 잘 먹는 게 좋아요.', en: "And it's good to eat well." },
                    { sp: 'halmeoni', ko: '네, 감사합니다.', en: 'All right, thank you.' }
                ],
                check: { q: '약을 하루에 몇 번 먹어요?', en: 'How many times a day does he take the medicine?', options: ['한 번', '두 번', '세 번'], answer: 2 }
            },
            {
                img: 'a2-08-6',
                art: "Evening at home. Grandma sits by Jian's bed holding a bowl of warm rice porridge and a spoon; a glass of water and the white medicine bag sit on the nightstand. Jian, propped up on pillows, smiles weakly. Nabi the cat sits on the blanket.",
                lines: [
                    { sp: 'narrator', ko: '저녁이에요. 죽하고 물하고 약이 있어요.', en: "It's evening. There's porridge, water and medicine." },
                    { sp: 'halmeoni', ko: '죽 먹어요. 그리고 이 약도 먹어요.', en: 'Eat your porridge. And take this medicine too.' },
                    { sp: 'jian', ko: '네. 할머니, 고마워요.', en: 'Okay. Thank you, Grandma.' },
                    { sp: 'halmeoni', ko: '오늘은 푹 자는 게 좋아요.', en: "It's best to sleep well tonight." }
                ],
                check: { q: '지안은 저녁에 뭐 먹어요?', en: 'What does Jian eat in the evening?', options: ['죽', '떡볶이', '아이스크림'], answer: 0 }
            },
            {
                img: 'a2-08-7',
                art: 'The next morning, sunshine fills the room. Jian, healthy again, bounces on his bed with his yellow cap on backwards while Nabi the cat leaps out of the way. Grandma yawns in the doorway, looking tired but relieved.',
                lines: [
                    { sp: 'narrator', ko: '다음 날 아침, 지안은 안 아파요.', en: "The next morning, Jian isn't sick anymore." },
                    { sp: 'narrator', ko: '열이 나요? 아니요! 기침도 안 해요.', en: "Does he have a fever? No! He isn't coughing either." },
                    { sp: 'jian', ko: '할머니, 이제 괜찮아요!', en: "Grandma, I'm okay now!" },
                    { sp: 'jian', ko: '할머니도 푹 쉬세요!', en: 'You get some good rest too, Grandma!' },
                    { sp: 'narrator', ko: '할머니는 피곤해요. 그래도 기분이 좋아요.', en: "Grandma is tired. But she's happy." }
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
        },
        {
            form: 'V + 는 게 좋아요',
            meaning: "it's best to V (advice)",
            note: 'Add 는 게 좋아요 to a verb stem, with or without batchim: 쉬다 → 쉬는 게 좋아요, 먹다 → 먹는 게 좋아요. Stems ending in ㄹ drop it: 놀다 → 노는 게 좋아요. For "better not", put 안 first: 안 가는 게 좋아요. It sounds softer than the -(으)세요 instruction.',
            examples: [
                { ko: '집에서 푹 쉬는 게 좋아요.', en: "It's best to get plenty of rest at home." },
                { ko: '물을 많이 마시는 게 좋아요.', en: "It's good to drink lots of water." },
                { ko: '오늘은 학교에 안 가는 게 좋아요.', en: "It's best not to go to school today." }
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
        { ko: '병원에 갈 거예요.', en: "I'm going to go to the doctor.", blank: '병원', alts: ['약', '목', '열'] },
        { ko: '푹 쉬는 게 좋아요.', en: "It's best to get plenty of rest.", blank: '쉬는', alts: ['쉬', '쉴', '쉬고'] },
        { ko: '물을 많이 마시는 게 좋아요.', en: "It's good to drink lots of water.", blank: '마시는', alts: ['마셔', '마실', '마시고'] }
    ]
});

KG.unit({
    id: 'a2-09',
    level: 'A2',
    round: 3,
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
                img: 'a2-09-0',
                art: "One picture, not a collage: a few days later in the family living room. Now Grandma sits wrapped in a blanket in her armchair, wearing a white face mask, with a box of tissues beside her. Jian, healthy and full of energy with his yellow cap on backwards, proudly hands her the small white medicine bag from the pharmacy. Nabi the cat curls up on Grandma's lap.",
                lines: [
                    { sp: 'narrator', ko: '지안은 감기에 걸렸어요. 그런데 지금은 괜찮아요.', en: "Jian caught a cold. But he's fine now." },
                    { sp: 'narrator', ko: '이번에는 누가 아파요? 할머니가 아파요!', en: 'Who is sick this time? Grandma is!' },
                    { sp: 'jian', ko: '할머니, 약 드세요. 그리고 푹 쉬는 게 좋아요!', en: "Grandma, take your medicine. And it's best to rest well!" },
                    { sp: 'halmeoni', ko: '아이고, 고마워요, 의사 선생님!', en: 'Oh my, thank you, doctor!' }
                ],
                check: { q: '지금 누가 아파요?', en: 'Who is sick now?', options: ['할머니', '지안', '민지'], answer: 0 }
            },
            {
                img: 'a2-09-1',
                art: 'Saturday morning in the small dorm room of Alex. Alex ties his sneakers at the door, red backpack on, smiling with determination. One single thought bubble above him shows a subway train. One picture, not a comic strip or collage.',
                lines: [
                    { sp: 'narrator', ko: '토요일이에요. 민지가 경복궁 앞에서 기다려요.', en: "It's Saturday. Minji is waiting in front of Gyeongbokgung Palace." },
                    { sp: 'alex', ko: '버스로 가요? 택시로 가요? 아니요, 오늘은 혼자 지하철로 갈 거예요!', en: "By bus? By taxi? No, today I'm taking the subway on my own!" },
                    { sp: 'narrator', ko: '알렉스는 혼자 가요? 네, 혼자 가요!', en: 'Is Alex going alone? Yes, all by himself!' }
                ],
                check: { q: '알렉스는 뭐로 갈 거예요?', en: 'How is Alex going to go?', options: ['지하철로', '버스로', '택시로'], answer: 0 }
            },
            {
                img: 'a2-09-2',
                art: 'A clean Seoul subway station. Alex taps a transit card on the round reader of a ticket gate, which glows green. Behind him, a big wall map of colourful subway lines and dots (no readable text). Alex glances at it and scratches his head.',
                lines: [
                    { sp: 'narrator', ko: '여기는 지하철역이에요.', en: 'This is a subway station.' },
                    { sp: 'narrator', ko: '알렉스는 교통카드를 찍고 들어가요.', en: 'Alex taps his transit card and goes in.' },
                    { sp: 'alex', ko: '음... 경복궁은 어떻게 가요?', en: 'Hmm... how do I get to Gyeongbokgung?' },
                    { sp: 'narrator', ko: '지도가 있어요. 그런데 알렉스는 잘 몰라요.', en: "There's a map. But Alex isn't sure." }
                ],
                check: { q: '알렉스는 뭘 찍어요?', en: 'What does Alex tap?', options: ['교통카드', '사진', '표'], answer: 0 }
            },
            {
                img: 'a2-09-3',
                art: 'Alex talks with the station attendant, who traces a route in the air with his finger. Beside them a simple diagram floats: a green line, a dot where it meets an orange line, and the orange line continuing. Alex nods, counting on his fingers.',
                lines: [
                    { sp: 'alex', ko: '저기요, 경복궁에 어떻게 가요?', en: 'Excuse me, how do I get to Gyeongbokgung?' },
                    { sp: 'staffM', as: '역무원', ko: '2호선을 타고 을지로3가역에서 3호선으로 갈아타세요.', en: 'Take Line 2, then change to Line 3 at Euljiro 3-ga Station.' },
                    { sp: 'alex', ko: '네, 감사합니다!', en: 'Okay, thank you!' },
                    { sp: 'narrator', ko: '2호선을 타요. 그리고 3호선으로 갈아타요.', en: 'He takes Line 2. Then he changes to Line 3.' }
                ],
                check: { q: '알렉스는 몇 호선으로 갈아타요?', en: 'Which line does Alex change to?', options: ['2호선', '3호선', '5호선'], answer: 1 }
            },
            {
                img: 'a2-09-4',
                art: 'Inside a subway car. Alex holds a strap and leans toward the kind passenger, who smiles and holds up three fingers and then makes a zero with her hand. The dark tunnel streaks past the windows.',
                lines: [
                    { sp: 'alex', ko: '저기요, 경복궁까지 얼마나 걸려요?', en: 'Excuse me, how long does it take to Gyeongbokgung?' },
                    { sp: 'staffF', as: '승객', ko: '삼십 분 걸려요.', en: 'It takes thirty minutes.' },
                    { sp: 'alex', ko: '삼십 분이요? 감사합니다!', en: 'Thirty minutes? Thank you!' },
                    { sp: 'narrator', ko: '한 시간 걸려요? 아니요, 삼십 분 걸려요.', en: 'Does it take an hour? No, thirty minutes.' }
                ],
                check: { q: '경복궁까지 얼마나 걸려요?', en: 'How long does it take to Gyeongbokgung?', options: ['십 분', '삼십 분', '한 시간'], answer: 1 }
            },
            {
                img: 'a2-09-5',
                art: 'A busy underground transfer corridor. Alex walks quickly among commuters, following orange arrows painted on the floor (no text). He looks a little lost but hopeful, checking left and right.',
                lines: [
                    { sp: 'narrator', ko: '알렉스는 을지로3가역에서 3호선으로 갈아타요.', en: 'Alex changes to Line 3 at Euljiro 3-ga Station.' },
                    { sp: 'alex', ko: '3호선은 주황색이에요. 이쪽이에요!', en: "Line 3 is orange. It's this way!" },
                    { sp: 'narrator', ko: '사람이 정말 많아요. 알렉스는 혼자예요. 그래도 괜찮아요!', en: "There are so many people. Alex is on his own. But he's okay!" }
                ],
                check: { q: '3호선은 무슨 색이에요?', en: 'What colour is Line 3?', options: ['주황색', '파란색', '빨간색'], answer: 0 }
            },
            {
                img: 'a2-09-6',
                art: 'Alex climbs the stairs of a subway exit up into bright daylight, phone pressed to his ear. Ahead and to the right, the stone walls and wooden gate of the palace are visible.',
                lines: [
                    { sp: 'narrator', ko: '알렉스는 경복궁역에서 내렸어요.', en: 'Alex got off at Gyeongbokgung Station.' },
                    { sp: 'minji', ko: '5번 출구로 나와요. 그리고 오른쪽으로 걸어서 오 분이에요!', en: "Come out of Exit 5. Then it's five minutes' walk to the right!" },
                    { sp: 'narrator', ko: '왼쪽으로 가요? 아니요, 오른쪽으로 가요.', en: 'Does he go left? No, right.' },
                    { sp: 'alex', ko: '네, 알았어요!', en: 'Okay, got it!' }
                ],
                check: { q: '알렉스는 몇 번 출구로 나가요?', en: 'Which exit does Alex go out of?', options: ['1번', '3번', '5번'], answer: 2 }
            },
            {
                img: 'a2-09-7',
                art: 'In front of the grand gate of Gyeongbokgung Palace with mountains behind, Minji waves happily. Alex jogs up, proudly holding up his transit card, a little sweaty. Tourists in colourful hanbok stroll in the background.',
                lines: [
                    { sp: 'alex', ko: '민지 씨! 지하철 타고 혼자 왔어요!', en: 'Minji! I came by subway all by myself!' },
                    { sp: 'minji', ko: '와, 대단해요! 얼마나 걸렸어요?', en: 'Wow, amazing! How long did it take?' },
                    { sp: 'alex', ko: '음... 한 시간 걸렸어요.', en: 'Um... it took an hour.' },
                    { sp: 'narrator', ko: '삼십 분 걸렸어요? 아니요, 한 시간 걸렸어요! 그래도 알렉스는 기분이 좋아요.', en: 'Did it take thirty minutes? No, an hour! But Alex is in a great mood.' }
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
    id: 'a2-r3',
    level: 'A2',
    round: 3,
    review: true,
    title: 'Winter Clothes',
    ko: '겨울옷을 사요',
    icon: '🧥',
    goal: 'Review Round 3: ride the subway, try on clothes, and get advice for a cold.',
    vocab: [
        { ko: '옷', en: 'clothes', emoji: '👚', pos: 'noun', note: '겨울옷 = winter clothes.', forms: ['겨울옷'] },
        { ko: '입다', en: 'to wear, to put on (clothes)', emoji: '🧥', pos: 'verb', polite: '입어요', forms: ['입어 봐도', '입어 보세요'] },
        { ko: '모자', en: 'hat, cap', emoji: '🧢', pos: 'noun', note: '모자를 쓰다 = to put on a hat.' },
        { ko: '크다', en: 'to be big', emoji: '🐘', pos: 'adj', polite: '커요' },
        { ko: '사이즈', en: 'size', emoji: '📏', pos: 'noun' },
        { ko: '지하철', en: 'subway', emoji: '🚇', pos: 'noun', forms: ['지하철로'] },
        { ko: '걸리다', en: 'to take (time)', emoji: '⏳', pos: 'verb', polite: '걸려요' },
        { ko: '출구', en: 'exit', emoji: '🚪', pos: 'noun', note: '6번 출구 = Exit 6.' },
        { ko: '감기', en: 'a cold', emoji: '🤧', pos: 'noun', note: '감기에 걸렸어요 = I caught a cold.' },
        { ko: '열', en: 'fever', emoji: '🌡️', pos: 'noun', note: '열이 나요 = I have a fever.' },
        { ko: '약국', en: 'pharmacy', emoji: '🏪', pos: 'noun' },
        { ko: '푹', en: 'deeply, well (rest or sleep)', emoji: '😌', pos: 'other' }
    ],
    story: {
        title: 'A Warm Coat',
        extras: 'Myeongdong is a busy Seoul shopping street lined with small clothing shops and steaming street-food carts; no sign has readable writing. The clothing-shop clerk is a young Korean woman with a high black ponytail, a cream knit sweater and a black apron. The pharmacist is a young Korean woman with a low bun, a white gown and a friendly smile.',
        scenes: [
            {
                img: 'a2-r3-1',
                art: 'A cold, windy autumn morning on the university campus in Seoul. Red and yellow leaves blow through the air. Alex shivers in his thin green jacket, arms wrapped around himself. Minji, wearing a thick scarf over her mustard-yellow cardigan, looks at him with concern.',
                lines: [
                    { sp: 'narrator', ko: '가을이에요. 날씨가 추워요. 바람도 많이 불어요.', en: "It's autumn. The weather is cold. It's very windy too." },
                    { sp: 'minji', ko: '알렉스 씨, 안 추워요?', en: "Alex, aren't you cold?" },
                    { sp: 'alex', ko: '추워요! 그런데 겨울옷이 없어요.', en: "I'm cold! But I don't have any winter clothes." },
                    { sp: 'minji', ko: '그럼 같이 명동에 가요! 옷 가게가 많아요.', en: "Then let's go to Myeongdong together! There are lots of clothes shops." }
                ],
                check: { q: '알렉스는 겨울옷이 있어요?', en: 'Does Alex have winter clothes?', options: ['네', '아니요'], answer: 1 }
            },
            {
                img: 'a2-r3-2',
                art: 'Inside a Seoul subway car. Minji and Alex sit side by side; Alex holds his transit card and looks up at the colourful line map above the doors (no readable text). A few passengers sit across from them.',
                lines: [
                    { sp: 'narrator', ko: '민지하고 알렉스는 지하철을 타요.', en: 'Minji and Alex take the subway.' },
                    { sp: 'narrator', ko: '버스로 가요? 아니면 지하철로 가요? 지하철로 가요!', en: 'Do they go by bus, or by subway? By subway!' },
                    { sp: 'alex', ko: '명동까지 얼마나 걸려요?', en: 'How long does it take to Myeongdong?' },
                    { sp: 'minji', ko: '이십 분 걸려요. 4호선 명동역에서 내려요.', en: 'It takes twenty minutes. We get off at Myeongdong Station on Line 4.' }
                ],
                check: { q: '명동까지 얼마나 걸려요?', en: 'How long does it take to Myeongdong?', options: ['이십 분', '한 시간', '오 분'], answer: 0 }
            },
            {
                img: 'a2-r3-3',
                art: 'Minji and Alex climb the stairs of a subway exit up into a busy shopping street in Myeongdong, Seoul, lined with clothing shops and steaming street-food carts. Minji points to the right. Shoppers fill the street.',
                lines: [
                    { sp: 'narrator', ko: '명동역에서 내렸어요.', en: 'They got off at Myeongdong Station.' },
                    { sp: 'minji', ko: '6번 출구로 나가요. 그리고 오른쪽으로 가요!', en: "Let's go out of Exit 6. Then go to the right!" },
                    { sp: 'narrator', ko: '왼쪽으로 가요? 아니요, 오른쪽으로 가요.', en: 'Do they go left? No, right.' },
                    { sp: 'alex', ko: '와, 사람이 정말 많아요!', en: 'Wow, there are so many people!' }
                ],
                check: { q: '몇 번 출구로 나가요?', en: 'Which exit do they take?', options: ['6번', '3번', '5번'], answer: 0 }
            },
            {
                img: 'a2-r3-4',
                art: 'Inside a small clothing shop. Alex has put on a long black winter coat that is far too big: the sleeves hang past his hands and the hem nearly touches the floor. Minji laughs. The shop clerk holds up a smaller bright blue puffy coat on a hanger.',
                lines: [
                    { sp: 'alex', ko: '이 까만색 옷 입어 봐도 돼요?', en: 'May I try on this black coat?' },
                    { sp: 'staffF', as: '직원', ko: '네, 입어 보세요.', en: 'Sure, try it on.' },
                    { sp: 'minji', ko: '하하, 너무 커요!', en: "Haha, it's way too big!" },
                    { sp: 'narrator', ko: '옷이 작아요? 아니요, 너무 커요!', en: 'Is the coat small? No, way too big!' },
                    { sp: 'staffF', as: '직원', ko: '이 파란색 옷은 M 사이즈예요. 입어 보세요.', en: 'This blue one is a medium. Try it on.' }
                ],
                check: { q: '까만색 옷이 어때요?', en: "How's the black coat?", options: ['너무 커요', '너무 작아요', '딱 좋아요'], answer: 0 }
            },
            {
                img: 'a2-r3-5',
                art: 'Alex smiles in front of a tall mirror, now wearing the bright blue puffy winter coat, which fits perfectly, and a red knit hat. Minji gives a thumbs-up. The shop clerk smiles behind the counter, holding a card machine.',
                lines: [
                    { sp: 'alex', ko: '이건 딱 좋아요! 정말 따뜻해요.', en: "This one is just right! It's really warm." },
                    { sp: 'minji', ko: '빨간색 모자도 예뻐요!', en: 'The red hat is pretty too!' },
                    { sp: 'alex', ko: '얼마예요?', en: 'How much is it?' },
                    { sp: 'staffF', as: '직원', ko: '옷은 팔만 원, 모자는 만 원이에요.', en: 'The coat is 80,000 won and the hat is 10,000 won.' },
                    { sp: 'narrator', ko: '알렉스는 파란색 옷하고 빨간색 모자를 샀어요.', en: 'Alex bought the blue coat and the red hat.' }
                ],
                check: { q: '알렉스는 무슨 색 모자를 샀어요?', en: 'What colour hat did Alex buy?', options: ['빨간색', '노란색', '파란색'], answer: 0 }
            },
            {
                img: 'a2-r3-6',
                art: "The next morning in Alex's small dorm room. Alex lies in bed coughing, his face red with fever, a thermometer in his mouth and a pile of used tissues beside the pillow. His new bright blue coat and red knit hat hang on a hook on the wall. Minji stands in the doorway holding a bag of oranges, looking worried.",
                lines: [
                    { sp: 'narrator', ko: '다음 날 아침이에요. 알렉스가 아파요.', en: "It's the next morning. Alex is sick." },
                    { sp: 'narrator', ko: '열이 나요. 기침도 해요.', en: "He has a fever. He's coughing too." },
                    { sp: 'alex', ko: '아이고, 감기에 걸렸어요...', en: 'Ugh, I caught a cold...' },
                    { sp: 'minji', ko: '괜찮아요? 걱정돼요. 약국에 가요!', en: "Are you okay? I'm worried. Let's go to the pharmacy!" }
                ],
                check: { q: '알렉스는 어때요?', en: 'How is Alex?', options: ['감기에 걸렸어요', '배가 고파요', '신나요'], answer: 0 }
            },
            {
                img: 'a2-r3-7',
                art: 'A small neighbourhood pharmacy near the university with shelves of colourful medicine boxes (no readable labels). Alex, wearing his new bright blue coat, his red knit hat and a white face mask, stands at the counter with Minji. The pharmacist hands him a small white paper bag and holds up three fingers.',
                lines: [
                    { sp: 'staffF', as: '약사', ko: '감기예요. 이 약을 하루에 세 번 드세요.', en: "It's a cold. Take this medicine three times a day." },
                    { sp: 'staffF', as: '약사', ko: '그리고 집에서 푹 쉬는 게 좋아요.', en: "And it's best to rest well at home." },
                    { sp: 'alex', ko: '네, 감사합니다.', en: 'Okay, thank you.' },
                    { sp: 'minji', ko: '알렉스 씨, 옷은 정말 따뜻해요. 그런데 감기에 걸렸어요!', en: 'Alex, the coat is really warm. But you caught a cold!' },
                    { sp: 'alex', ko: '하하... 에취!', en: 'Haha... achoo!' }
                ],
                check: { q: '약을 하루에 몇 번 먹어요?', en: 'How many times a day does he take the medicine?', options: ['세 번', '두 번', '한 번'], answer: 0 }
            }
        ]
    },
    patterns: [
        {
            form: 'V + 아/어 봐도 돼요? · 입다 / 신다 / 쓰다',
            meaning: 'trying things on (review)',
            note: '입어 봐도 돼요? = May I try it on? The clerk answers 네, 입어 보세요. Clothes → 입다, shoes → 신다, hats → 쓰다 (써 봐도 돼요?).',
            examples: [
                { ko: '이 옷 입어 봐도 돼요?', en: 'May I try on these clothes?' },
                { ko: '네, 입어 보세요.', en: 'Sure, try it on.' },
                { ko: '모자를 써 봤어요.', en: 'I tried on a hat.' }
            ]
        },
        {
            form: 'N + (으)로 · 얼마나 걸려요?',
            meaning: 'getting around (review)',
            note: '로 after a vowel or ㄹ (지하철로, 6번 출구로), 으로 after other consonants (오른쪽으로, 3호선으로). Ask how long with 얼마나 걸려요? and answer with a time + 걸려요.',
            examples: [
                { ko: '지하철로 가요.', en: 'We go by subway.' },
                { ko: '이십 분 걸려요.', en: 'It takes twenty minutes.' },
                { ko: '6번 출구로 나가요.', en: 'Go out of Exit 6.' }
            ]
        },
        {
            form: 'V + (으)세요 · V + 는 게 좋아요',
            meaning: 'instructions and advice (review)',
            note: '드세요, 쉬세요 and 보세요 tell someone politely what to do. 는 게 좋아요 is softer advice: 푹 쉬는 게 좋아요.',
            examples: [
                { ko: '하루에 세 번 드세요.', en: 'Take it three times a day.' },
                { ko: '집에서 푹 쉬는 게 좋아요.', en: "It's best to rest well at home." }
            ]
        }
    ],
    sentences: [
        { ko: '이 옷 입어 봐도 돼요?', en: 'May I try on these clothes?', blank: '입어', alts: ['신어', '써', '먹어'] },
        { ko: '네, 입어 보세요.', en: 'Sure, try it on.', blank: '보세요', alts: ['보으세요', '봐세요', '보고'] },
        { ko: '옷이 너무 커요.', en: 'The coat is too big.', blank: '커요', alts: ['크어요', '컸요', '작아요'] },
        { ko: '빨간색 모자를 써 봤어요.', en: 'I tried on a red hat.', blank: '써', alts: ['입어', '신어', '쓰어'] },
        { ko: '파란색 옷을 샀어요.', en: 'I bought the blue coat.', blank: '파란색', alts: ['빨간색', '노란색', '까만색'] },
        { ko: '명동까지 얼마나 걸려요?', en: 'How long does it take to Myeongdong?', blank: '얼마나', alts: ['얼마', '어디', '몇'] },
        { ko: '지하철로 이십 분 걸려요.', en: 'It takes twenty minutes by subway.', blank: '로', alts: ['으로', '에서', '를'] },
        { ko: '6번 출구로 나가요.', en: 'Go out of Exit 6.', blank: '출구', alts: ['호선', '오른쪽', '표'] },
        { ko: '감기에 걸렸어요.', en: 'I caught a cold.', blank: '걸렸어요', alts: ['걸렀어요', '걸려요', '걸릴 거예요'] },
        { ko: '열이 나요. 기침도 해요.', en: "I have a fever. I'm coughing too.", blank: '도', alts: ['를', '가', '에'] },
        { ko: '이 약을 하루에 세 번 드세요.', en: 'Take this medicine three times a day.', blank: '번', alts: ['개', '장', '시'] },
        { ko: '집에서 푹 쉬는 게 좋아요.', en: "It's best to rest well at home.", blank: '쉬는', alts: ['쉬', '쉴', '쉬고'] }
    ]
});

KG.unit({
    id: 'a2-10',
    level: 'A2',
    round: 4,
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
                img: 'a2-10-0',
                art: "One picture, not a collage: a sunny but cold autumn day outside the university library in Seoul, with red and yellow leaves on the ground. Alex, healthy again and smiling, walks in his new bright blue puffy coat and red knit hat. Minji walks beside him carrying her books, laughing. A small white paper medicine bag peeks out of Alex's coat pocket.",
                lines: [
                    { sp: 'narrator', ko: '알렉스는 명동에서 겨울옷을 샀어요.', en: 'Alex bought winter clothes in Myeongdong.' },
                    { sp: 'narrator', ko: '빨간색 모자도 샀어요.', en: 'He bought a red hat too.' },
                    { sp: 'narrator', ko: '그리고 감기에 걸렸어요! 지금은요? 지금은 괜찮아요.', en: "And he caught a cold! And now? Now he's fine." },
                    { sp: 'alex', ko: '이 옷 정말 따뜻해요!', en: 'This coat is really warm!' }
                ],
                check: { q: '알렉스는 지금 아파요?', en: 'Is Alex sick now?', options: ['네', '아니요'], answer: 1 }
            },
            {
                img: 'a2-10-1',
                art: 'Split picture. Left: Junho at his office desk at lunchtime, tie loosened, phone at his ear, smiling. Right: Minji in a quiet university library, answering her phone with a hand cupped over her mouth.',
                lines: [
                    { sp: 'narrator', ko: '준호가 회사에서 전화해요.', en: 'Junho makes a call from his office.' },
                    { sp: 'narrator', ko: '민지는 어디에 있어요? 도서관에 있어요.', en: 'Where is Minji? In the library.' },
                    { sp: 'minji', ko: '여보세요? 오빠?', en: 'Hello? Junho?' },
                    { sp: 'junho', ko: '오늘 저녁에 시간 있어요?', en: 'Are you free this evening?' }
                ],
                check: { q: '민지는 어디에 있어요?', en: 'Where is Minji?', options: ['도서관', '회사', '영화관'], answer: 0 }
            },
            {
                img: 'a2-10-2',
                art: 'Split picture. Junho grins in his office; a thought bubble above him shows a spooky old house with a pale ghost in the window. Minji in the library raises her eyebrows in surprise.',
                lines: [
                    { sp: 'junho', ko: '같이 영화 볼까요?', en: 'Shall we see a movie together?' },
                    { sp: 'minji', ko: '좋아요! 무슨 영화 볼까요?', en: 'Sure! What movie shall we see?' },
                    { sp: 'junho', ko: '공포 영화 어때요?', en: 'How about a horror movie?' },
                    { sp: 'minji', ko: '공포 영화요? 음... 좋아요!', en: 'A horror movie? Hmm... okay!' },
                    { sp: 'narrator', ko: '코미디 영화? 아니요, 공포 영화예요!', en: 'A comedy? No, a horror movie!' }
                ],
                check: { q: '오늘 저녁에 뭐 할 거예요?', en: 'What are they going to do this evening?', options: ['영화를 볼 거예요', '등산할 거예요', '수영할 거예요'], answer: 0 }
            },
            {
                img: 'a2-10-3',
                art: 'Split picture. Minji gives a cheerful thumbs-up toward her phone. Junho at his desk nods and gives a thumbs-up back.',
                lines: [
                    { sp: 'minji', ko: '알렉스 씨도 같이 갈까요?', en: 'Shall we invite Alex too?' },
                    { sp: 'junho', ko: '그래요. 같이 가요!', en: "Sure. Let's all go together!" },
                    { sp: 'narrator', ko: '민지하고 준호는 같이 영화를 볼 거예요. 알렉스도요!', en: 'Minji and Junho are going to see a movie together. Alex too!' }
                ],
                check: { q: '누가 같이 가요?', en: 'Who else is going with them?', options: ['알렉스', '할머니', '지안'], answer: 0 }
            },
            {
                img: 'a2-10-4',
                art: 'Split picture. Left: Alex lying on the bed in his dorm room with a comic book, sitting up excitedly with his phone at his ear. Right: Minji on her phone outside the library steps.',
                lines: [
                    { sp: 'narrator', ko: '이번에는 민지가 전화해요. 알렉스는 방에 있어요.', en: 'This time Minji makes the call. Alex is in his room.' },
                    { sp: 'alex', ko: '여보세요?', en: 'Hello?' },
                    { sp: 'minji', ko: '알렉스 씨, 오늘 저녁에 약속 있어요? 오빠하고 같이 영화 볼까요?', en: 'Alex, do you have plans this evening? Shall we see a movie with my brother?' },
                    { sp: 'alex', ko: '약속 없어요. 좋아요! 몇 시에 만날까요?', en: 'No plans. Sounds great! What time shall we meet?' },
                    { sp: 'narrator', ko: '알렉스는 신나요!', en: 'Alex is excited!' }
                ],
                check: { q: '알렉스는 오늘 저녁에 약속이 있어요?', en: 'Does Alex have plans this evening?', options: ['네', '아니요'], answer: 1 }
            },
            {
                img: 'a2-10-5',
                art: "Minji, on the phone, holds up seven fingers. A thought bubble shows the glowing entrance of a movie theater at night and a round clock pointing to seven o'clock.",
                lines: [
                    { sp: 'minji', ko: '일곱 시에 영화관 앞에서 만나요.', en: "Let's meet in front of the movie theater at seven." },
                    { sp: 'alex', ko: '일곱 시요? 그래요. 이따가 봐요!', en: 'Seven? Okay. See you later!' },
                    { sp: 'narrator', ko: '몇 시에 만나요? 여섯 시? 아니요, 일곱 시에 만나요.', en: 'What time are they meeting? Six? No, seven.' },
                    { sp: 'narrator', ko: '어디에서 만나요? 영화관 앞에서 만나요.', en: 'Where are they meeting? In front of the movie theater.' }
                ],
                check: { q: '몇 시에 만나요?', en: 'What time are they meeting?', options: ['여섯 시', '일곱 시', '여덟 시'], answer: 1 }
            },
            {
                img: 'a2-10-6',
                art: 'The bright lobby of a movie theater in the evening. Junho proudly holds up three movie tickets fanned out in his hand. Alex stands at the snack counter pointing at a huge bucket of popcorn. Minji laughs beside him.',
                lines: [
                    { sp: 'narrator', ko: '일곱 시예요. 여기는 영화관이에요.', en: "It's seven. This is the movie theater." },
                    { sp: 'junho', ko: '표는 제가 예매했어요.', en: 'I booked the tickets.' },
                    { sp: 'alex', ko: '그럼 팝콘은 제가 살까요?', en: 'Then shall I buy the popcorn?' },
                    { sp: 'minji', ko: '좋아요! 콜라도 사요.', en: "Great! Let's get cola too." },
                    { sp: 'narrator', ko: '표가 몇 장 있어요? 세 장 있어요.', en: 'How many tickets are there? Three.' }
                ],
                check: { q: '누가 팝콘을 사요?', en: 'Who is buying the popcorn?', options: ['준호', '알렉스', '민지'], answer: 1 }
            },
            {
                img: 'a2-10-7',
                art: 'Inside a dark movie theater lit only by the screen, which shows a gloomy, shadowy hallway. Junho, who chose the horror film, hides his face behind the popcorn bucket, trembling. Alex and Minji, sitting on either side of him, giggle at him.',
                lines: [
                    { sp: 'narrator', ko: '영화가 정말 무서워요!', en: 'The movie is really scary!' },
                    { sp: 'narrator', ko: '준호는 무서워해요. 알렉스하고 민지는요? 두 사람은 웃어요!', en: 'Junho is scared. And Alex and Minji? The two of them are laughing!' },
                    { sp: 'junho', ko: '다음에는... 코미디 영화 볼까요?', en: 'Next time... shall we watch a comedy?' },
                    { sp: 'minji', ko: '하하, 그래요!', en: 'Haha, okay!' }
                ],
                check: { q: '누가 무서워해요?', en: 'Who is scared?', options: ['준호', '민지', '알렉스'], answer: 0 }
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
    round: 4,
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
                img: 'a2-11-0',
                art: "One picture, not a collage: the next evening at the glowing entrance of a night market lined with warm lanterns and food stalls. Junho yawns hugely, with dark circles under his eyes. Minji and Alex laugh at him. Jian tugs Junho's hand toward the food stalls.",
                lines: [
                    { sp: 'narrator', ko: '어제 준호하고 민지하고 알렉스는 영화를 봤어요.', en: 'Yesterday Junho, Minji and Alex saw a movie.' },
                    { sp: 'narrator', ko: '코미디 영화를 봤어요? 아니요, 공포 영화를 봤어요!', en: 'Did they see a comedy? No, a horror movie!' },
                    { sp: 'minji', ko: '오빠, 어제 잘 잤어요?', en: 'Junho, did you sleep well last night?' },
                    { sp: 'junho', ko: '아니요... 영화가 너무 무서워서 못 잤어요.', en: "No... the movie was so scary I couldn't sleep." }
                ],
                check: { q: '준호는 왜 못 잤어요?', en: "Why couldn't Junho sleep?", options: ['영화가 무서워서', '배가 고파서', '더워서'], answer: 0 }
            },
            {
                img: 'a2-11-1',
                art: 'A glowing night market street lined with food stalls under strings of warm lanterns: steaming pans of red tteokbokki, griddles of hotteok, trays of kimbap rolls and pots of fish-cake skewers. Minji, Alex, Junho and Jian walk in, eyes wide, sniffing the air.',
                lines: [
                    { sp: 'narrator', ko: '여기는 야시장이에요.', en: 'This is a night market.' },
                    { sp: 'narrator', ko: '음식이 정말 많아요!', en: 'There is so much food!' },
                    { sp: 'narrator', ko: '떡볶이도 있어요. 호떡도 있어요. 김밥하고 어묵도 있어요.', en: "There's tteokbokki. There's hotteok. There's kimbap and fish cake too." },
                    { sp: 'jian', ko: '와! 뭐 먹을까요?', en: 'Wow! What shall we eat?' }
                ],
                check: { q: '여기는 어디예요?', en: 'Where is this?', options: ['야시장', '영화관', '병원'], answer: 0 }
            },
            {
                img: 'a2-11-2',
                art: "At a tteokbokki stall, Alex's face is bright red and sweaty; he fans his open mouth with his hand. Minji happily eats another piece of red tteokbokki from a toothpick.",
                lines: [
                    { sp: 'alex', ko: '와, 떡볶이가 정말 매워요!', en: 'Whoa, the tteokbokki is really spicy!' },
                    { sp: 'minji', ko: '맵지만 맛있어요!', en: "It's spicy, but it's tasty!" },
                    { sp: 'narrator', ko: '떡볶이가 매워요? 네, 정말 매워요! 그래도 민지는 괜찮아요.', en: 'Is the tteokbokki spicy? Yes, really spicy! But Minji is fine.' }
                ],
                check: { q: '떡볶이는 어때요?', en: "How's the tteokbokki?", options: ['매워요', '달아요', '차가워요'], answer: 0 }
            },
            {
                img: 'a2-11-3',
                art: 'Alex happily munches a fat roll of kimbap, relieved. Junho holds a plate of red tteokbokki in one hand and a plate of kimbap in the other, raising and lowering them like a balance scale.',
                lines: [
                    { sp: 'alex', ko: '저는 떡볶이보다 김밥이 더 좋아요.', en: 'I like kimbap more than tteokbokki.' },
                    { sp: 'junho', ko: '김밥이 더 싸요. 그리고 안 매워요!', en: "Kimbap is cheaper. And it's not spicy!" },
                    { sp: 'narrator', ko: '떡볶이가 더 매워요? 김밥이 더 매워요? 떡볶이가 더 매워요!', en: 'Which is spicier, tteokbokki or kimbap? Tteokbokki!' }
                ],
                check: { q: '알렉스는 뭐가 더 좋아요?', en: 'What does Alex like more?', options: ['김밥', '떡볶이'], answer: 0 }
            },
            {
                img: 'a2-11-4',
                art: 'A hotteok stall with a very long line of people, much longer than the short lines at the other stalls. Jian eagerly drags Junho by the hand toward the end of the line; Junho sighs.',
                lines: [
                    { sp: 'narrator', ko: '호떡 가게 줄이 제일 길어요.', en: 'The hotteok stall has the longest line.' },
                    { sp: 'narrator', ko: '줄이 짧아요? 아니요, 정말 길어요!', en: 'Is the line short? No, really long!' },
                    { sp: 'jian', ko: '줄이 길지만 호떡 먹고 싶어요!', en: 'The line is long, but I want hotteok!' },
                    { sp: 'junho', ko: '아이고... 그래요, 기다려요.', en: "Oh boy... okay, let's wait." }
                ],
                check: { q: '어느 가게 줄이 제일 길어요?', en: 'Which stall has the longest line?', options: ['호떡 가게', '떡볶이 가게', '김밥 가게'], answer: 0 }
            },
            {
                img: 'a2-11-5',
                art: 'Jian bites into a hotteok and a puff of steam bursts out; his eyes go wide and he blows on it. Dark brown sugar syrup drips from the pancake. Minji laughs beside him.',
                lines: [
                    { sp: 'narrator', ko: '지안이 호떡을 먹어요.', en: 'Jian is eating a hotteok.' },
                    { sp: 'jian', ko: '앗, 뜨거워요!', en: "Ow, it's hot!" },
                    { sp: 'jian', ko: '뜨겁지만 정말 맛있어요!', en: "It's hot, but it's really good!" },
                    { sp: 'minji', ko: '천천히 먹어요!', en: 'Eat slowly!' }
                ],
                check: { q: '호떡은 어때요?', en: "How's the hotteok?", options: ['뜨거워요', '차가워요', '매워요'], answer: 0 }
            },
            {
                img: 'a2-11-6',
                art: 'The four stand around a small standing table covered with empty paper plates and skewers. Each holds up a different food: Alex a piece of kimbap, Jian a half-eaten hotteok, Minji a toothpick of tteokbokki, Junho a fish-cake skewer.',
                lines: [
                    { sp: 'minji', ko: '하나만 골라요. 뭐가 제일 맛있었어요?', en: 'Pick just one. What was the tastiest?' },
                    { sp: 'jian', ko: '호떡이 제일 맛있었어요!', en: 'The hotteok was the tastiest!' },
                    { sp: 'alex', ko: '저는 김밥이 가장 좋았어요.', en: 'I liked the kimbap best.' },
                    { sp: 'junho', ko: '저는 어묵이 제일 좋아요!', en: 'I like the fish cake best!' },
                    { sp: 'minji', ko: '저는요? 떡볶이요!', en: 'Me? Tteokbokki!' }
                ],
                check: { q: '지안은 뭐가 제일 맛있었어요?', en: 'What did Jian think was tastiest?', options: ['호떡', '김밥', '떡볶이'], answer: 0 }
            },
            {
                img: 'a2-11-7',
                art: 'Late at night beside a fish-cake stall, steam rising into the cold air. Junho hands Alex a paper cup of hot broth and a fish-cake skewer. Alex sips and closes his eyes in bliss. Minji laughs, and Jian yawns, full and sleepy.',
                lines: [
                    { sp: 'junho', ko: '날씨는 춥지만 어묵은 따뜻해요.', en: 'The weather is cold, but the fish cake is warm.' },
                    { sp: 'alex', ko: '와, 어묵이 김밥보다 더 맛있어요!', en: 'Wow, fish cake is even tastier than kimbap!' },
                    { sp: 'minji', ko: '하하, 알렉스 씨는 다 좋아해요!', en: 'Haha, Alex, you like everything!' },
                    { sp: 'narrator', ko: '지안은 피곤해요. 오늘 정말 많이 먹었어요!', en: 'Jian is tired. He ate so much today!' }
                ],
                check: { q: '날씨가 어때요?', en: "What's the weather like?", options: ['추워요', '더워요'], answer: 0 }
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
                { ko: '오늘이 어제보다 더 추워요.', en: 'Today is colder than yesterday.' }
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
    round: 4,
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
                img: 'a2-12-0',
                art: 'One picture, not a collage: late that evening in the family living room. Jian, still wearing his yellow cap, proudly holds out a paper bag of warm hotteok to Grandma in her armchair, and Grandma takes a happy bite of one. Behind them, Minji and Junho, just back from the night market, take off their coats. Nabi the cat sniffs the paper bag.',
                lines: [
                    { sp: 'narrator', ko: '오늘 민지하고 준호하고 지안은 야시장에 갔어요.', en: 'Today Minji, Junho and Jian went to the night market.' },
                    { sp: 'jian', ko: '할머니, 호떡 사 왔어요! 호떡이 제일 맛있어요!', en: 'Grandma, we brought you hotteok! Hotteok is the tastiest!' },
                    { sp: 'halmeoni', ko: '음, 정말 맛있어요! 고마워요.', en: "Mm, it's delicious! Thank you." },
                    { sp: 'narrator', ko: '그리고 내일은 십일월 십오 일, 할머니 생신이에요!', en: "And tomorrow, November 15th, is Grandma's birthday!" }
                ],
                check: { q: '할머니는 뭘 드세요?', en: 'What is Grandma eating?', options: ['호떡', '떡볶이', '김밥'], answer: 0 }
            },
            {
                img: 'a2-12-1',
                art: 'Early morning in the family kitchen. Minji, Junho and Jian huddle together and whisper; Jian presses a finger to his lips. Through a half-open door in the background, Grandma is asleep in her bed. Nabi the cat sits on a kitchen chair, watching.',
                lines: [
                    { sp: 'narrator', ko: '오늘은 십일월 십오 일이에요.', en: 'Today is November 15th.' },
                    { sp: 'narrator', ko: '오늘은 할머니 생신이에요.', en: "Today is Grandma's birthday." },
                    { sp: 'jian', ko: '할머니는 어디 계세요?', en: 'Where is Grandma?' },
                    { sp: 'minji', ko: '방에 계세요. 아직 주무세요. 쉿!', en: "She's in her room. She's still sleeping. Shh!" },
                    { sp: 'narrator', ko: '할머니는 주무세요. 나비는요? 나비는 의자에 있어요.', en: 'Grandma is sleeping. And Nabi? Nabi is on a chair.' }
                ],
                check: { q: '할머니는 지금 뭐 하세요?', en: 'What is Grandma doing now?', options: ['주무세요', '드세요', '노래하세요'], answer: 0 }
            },
            {
                img: 'a2-12-2',
                art: 'Junho, wearing an apron, stirs a big pot of dark-green seaweed soup on the stove. Jian stands on tiptoe on a stool, stretching for a big bowl on a high shelf. Minji arranges a vase on the dining table.',
                lines: [
                    { sp: 'narrator', ko: '준호가 미역국을 만들어요. 한국에서는 생일에 미역국을 먹어요.', en: 'Junho is making seaweed soup. In Korea, people eat seaweed soup on birthdays.' },
                    { sp: 'jian', ko: '형, 좀 도와주세요! 너무 높아요.', en: "Bro, please help me! It's too high." },
                    { sp: 'narrator', ko: '민지도 바빠요. 모두 정말 바빠요!', en: 'Minji is busy too. Everyone is really busy!' }
                ],
                check: { q: '준호는 뭘 만들어요?', en: 'What is Junho making?', options: ['미역국', '떡볶이', '케이크'], answer: 0 }
            },
            {
                img: 'a2-12-3',
                art: 'At the front door, Alex arrives holding a cake box tied with a ribbon in one hand and a bouquet of pink and yellow flowers in the other. Minji opens the door, smiling, with a finger to her lips.',
                lines: [
                    { sp: 'narrator', ko: '알렉스가 왔어요.', en: 'Alex has arrived.' },
                    { sp: 'alex', ko: '안녕하세요! 케이크하고 꽃을 사 왔어요.', en: 'Hi! I brought a cake and flowers.' },
                    { sp: 'minji', ko: '고마워요! 할머니는 꽃을 정말 좋아하세요.', en: 'Thank you! Grandma really loves flowers.' },
                    { sp: 'minji', ko: '그런데 쉿! 할머니는 아직 주무세요.', en: 'But shh! Grandma is still sleeping.' }
                ],
                check: { q: '할머니는 뭘 좋아하세요?', en: 'What does Grandma love?', options: ['꽃', '공포 영화', '떡볶이'], answer: 0 }
            },
            {
                img: 'a2-12-4',
                art: "Minji, Alex, Junho and Jian crouch behind the living-room sofa, holding the cake, the flowers and party poppers. Jian peeks over the sofa toward the hallway, where Grandma's shadow is approaching.",
                lines: [
                    { sp: 'alex', ko: '할머니 연세가 어떻게 되세요?', en: 'How old is your grandma?' },
                    { sp: 'minji', ko: '올해 일흔다섯이세요.', en: "She's seventy-five this year." },
                    { sp: 'narrator', ko: '모두 소파 뒤에 있어요. 지안은 신나요!', en: 'Everyone is behind the sofa. Jian is so excited!' },
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
                    { sp: 'halmeoni', ko: '아이고, 이게 다 뭐예요? 정말 고마워요!', en: 'Oh my, what is all this? Thank you so much!' },
                    { sp: 'narrator', ko: '할머니는 기분이 정말 좋으세요.', en: 'Grandma is so happy.' }
                ],
                check: { q: '할머니는 기분이 어떠세요?', en: 'How does Grandma feel?', options: ['좋으세요', '안 좋으세요'], answer: 0 }
            },
            {
                img: 'a2-12-6',
                art: 'Grandma sits at the dining table in front of a cake glowing with candles, cheeks puffed out as she blows them out. Minji, Alex, Junho and Jian clap around her, and Jian bounces on his chair.',
                lines: [
                    { sp: 'jian', ko: '할머니, 촛불을 끄세요!', en: 'Grandma, blow out the candles!' },
                    { sp: 'narrator', ko: '케이크에 촛불이 많아요.', en: 'There are lots of candles on the cake.' },
                    { sp: 'narrator', ko: '할머니가 촛불을 끄셨어요.', en: 'Grandma blew out the candles.' },
                    { sp: 'narrator', ko: '민지, 알렉스, 준호, 지안이 웃어요.', en: 'Minji, Alex, Junho and Jian are smiling.' }
                ],
                check: { q: '누가 촛불을 끄셨어요?', en: 'Who blew out the candles?', options: ['할머니', '지안', '알렉스'], answer: 0 }
            },
            {
                img: 'a2-12-7',
                art: 'The whole family gathers around the dining table with bowls of seaweed soup and the cake. Grandma holds a framed collage of photos from the Busan trip: the beach, the KTX train, everyone under one umbrella, the rainbow over the sea (pictures only, no writing). She laughs with happy tears, Nabi the cat on her lap. Alex, Minji, Junho and Jian smile around her.',
                lines: [
                    { sp: 'junho', ko: '할머니, 미역국 드세요.', en: 'Grandma, please have some seaweed soup.' },
                    { sp: 'alex', ko: '할머니, 이건 제 선물이에요. 부산 사진이에요!', en: "Grandma, this is my present. It's photos from Busan!" },
                    { sp: 'halmeoni', ko: '아이고, 정말 예뻐요. 다들 고마워요!', en: "Oh, they're beautiful. Thank you, everyone!" },
                    { sp: 'narrator', ko: '할머니는 사진을 보세요. 그리고 웃으세요.', en: 'Grandma looks at the photos. And she smiles.' }
                ],
                check: { q: '알렉스 선물은 뭐예요?', en: "What is Alex's present?", options: ['부산 사진', '꽃', '미역국'], answer: 0 }
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
        { ko: '할머니가 오세요!', en: "Grandma's coming!", blank: '오세요', alts: ['와세요', '오으세요', '왔세요'] },
        { ko: '할머니 생신은 십일월 십오 일이에요.', en: "Grandma's birthday is November 15th.", blank: '생신', alts: ['생일', '연세', '선물'] }
    ]
});

KG.unit({
    id: 'a2-r4',
    level: 'A2',
    round: 4,
    review: true,
    title: 'The First Snow',
    ko: '눈이 와요!',
    icon: '⛄',
    goal: 'Review Round 4: make plans on the phone, compare things, and speak politely to Grandma on a snowy day.',
    vocab: [
        { ko: '여보세요', en: 'hello (on the phone)', emoji: '📞', pos: 'expr' },
        { ko: '시간 있어요?', en: 'are you free? (do you have time?)', emoji: '🕒', pos: 'expr' },
        { ko: '만나다', en: 'to meet', emoji: '🤝', pos: 'verb', polite: '만나요', forms: ['만날까요'] },
        { ko: '만들다', en: 'to make', emoji: '👩‍🍳', pos: 'verb', polite: '만들어요', forms: ['만들까요'] },
        { ko: '다음에', en: 'next time', emoji: '🔄', pos: 'other', forms: ['다음에도'] },
        { ko: '눈', en: 'snow', emoji: '❄️', pos: 'noun', note: '눈이 와요 = it snows. 눈 + 사람 = 눈사람, a snowman.', forms: ['눈이', '눈사람'] },
        { ko: '보다', en: 'than', emoji: '⚖️', pos: 'other', forms: ['눈사람보다'] },
        { ko: '더', en: 'more', emoji: '➕', pos: 'other' },
        { ko: '제일', en: 'the most, the best', emoji: '🥇', pos: 'other' },
        { ko: '호떡', en: 'hotteok (sweet filled pancake)', emoji: '🥞', pos: 'noun' },
        { ko: '뜨겁다', en: 'to be hot (to the touch)', emoji: '🔥', pos: 'adj', polite: '뜨거워요', forms: ['뜨겁지만'] },
        { ko: '드시다', en: 'to eat, to drink — honorific of 먹다 / 마시다', emoji: '🍽️', pos: 'verb', polite: '드세요', forms: ['드세요'] }
    ],
    story: {
        title: 'Snowman Day',
        extras: 'The outdoor scenes are in a small neighbourhood park in Seoul near the family home, with bare trees, wooden benches and a little playground, all covered in fresh white snow.',
        scenes: [
            {
                img: 'a2-r4-1',
                art: "Early Saturday morning in Alex's small dorm room in Seoul. Big snowflakes fall outside the window. Alex, still in pajamas with messy hair, sits up in bed holding his phone to his ear, his eyes wide as he looks at the snow. His bright blue puffy coat and red knit hat hang on a hook on the wall.",
                lines: [
                    { sp: 'alex', ko: '여보세요?', en: 'Hello?' },
                    { sp: 'minji', ko: '알렉스 씨! 지금 눈이 와요!', en: "Alex! It's snowing right now!" },
                    { sp: 'narrator', ko: '눈이 많이 와요. 알렉스는 신나요!', en: "It's snowing a lot. Alex is excited!" },
                    { sp: 'minji', ko: '오늘 시간 있어요? 같이 공원에서 눈사람을 만들까요?', en: 'Are you free today? Shall we make a snowman in the park?' },
                    { sp: 'alex', ko: '좋아요! 몇 시에 만날까요?', en: 'Great! What time shall we meet?' }
                ],
                check: { q: '날씨가 어때요?', en: "What's the weather like?", options: ['눈이 와요', '비가 와요', '더워요'], answer: 0 }
            },
            {
                img: 'a2-r4-2',
                art: "A small neighbourhood park in Seoul covered in fresh white snow, with bare trees and benches. Minji, Alex and Jian build snowmen in warm coats, hats and mittens; Alex wears his bright blue puffy coat and red knit hat. Jian's snowman is small and round. Alex's snowman is huge, taller than Alex himself. Minji laughs.",
                lines: [
                    { sp: 'narrator', ko: '여기는 공원이에요. 눈이 정말 많아요!', en: "This is the park. There's so much snow!" },
                    { sp: 'narrator', ko: '민지, 알렉스, 지안이 눈사람을 만들어요.', en: 'Minji, Alex and Jian are making snowmen.' },
                    { sp: 'jian', ko: '형 눈사람이 제 눈사람보다 더 커요!', en: 'Your snowman is bigger than mine!' },
                    { sp: 'alex', ko: '하하, 제 눈사람이 제일 커요!', en: 'Haha, mine is the biggest!' }
                ],
                check: { q: '누구 눈사람이 더 커요?', en: 'Whose snowman is bigger?', options: ['알렉스', '지안'], answer: 0 }
            },
            {
                img: 'a2-r4-3',
                art: 'Junho walks up through the snow carrying a paper bag of steaming hotteok, with a big smile. Jian runs to him with his arms wide open. Minji and Alex wave, their cheeks red from the cold. The two snowmen stand behind them in the snowy park.',
                lines: [
                    { sp: 'junho', ko: '추워요? 호떡 먹을까요?', en: 'Cold? Shall we have some hotteok?' },
                    { sp: 'jian', ko: '네! 형, 고마워요!', en: 'Yes! Thanks, bro!' },
                    { sp: 'narrator', ko: '호떡이 뜨거워요? 네, 아주 뜨거워요!', en: 'Is the hotteok hot? Yes, very hot!' },
                    { sp: 'alex', ko: '뜨겁지만 정말 맛있어요!', en: "It's hot, but it's really good!" }
                ],
                check: { q: '준호는 뭘 사 왔어요?', en: 'What did Junho bring?', options: ['호떡', '떡볶이', '어묵'], answer: 0 }
            },
            {
                img: 'a2-r4-4',
                art: 'Grandma comes slowly into the snowy park in a long padded coat over her lavender vest, with a warm scarf and a knit hat, holding a thermos. Minji takes her arm. Jian brushes the snow off a bench for her.',
                lines: [
                    { sp: 'narrator', ko: '할머니도 공원에 오셨어요.', en: 'Grandma came to the park too.' },
                    { sp: 'minji', ko: '할머니, 안 추우세요?', en: "Grandma, aren't you cold?" },
                    { sp: 'halmeoni', ko: '할머니는 괜찮아요.', en: "Grandma's fine." },
                    { sp: 'jian', ko: '할머니, 여기 앉으세요!', en: 'Grandma, sit here!' }
                ],
                check: { q: '할머니는 어디에 앉으세요?', en: 'Where does Grandma sit?', options: ['의자', '눈사람', '나무'], answer: 0 }
            },
            {
                img: 'a2-r4-5',
                art: 'Grandma sits on the bench and pours warm tea from her thermos into paper cups. Junho hands a cup to Alex with both hands. Steam rises from the cups. Jian puts his yellow cap on top of his small snowman.',
                lines: [
                    { sp: 'halmeoni', ko: '자, 차 마셔요. 따뜻해요.', en: "Here, have some tea. It's warm." },
                    { sp: 'junho', ko: '할머니도 드세요.', en: 'You have some too, Grandma.' },
                    { sp: 'alex', ko: '할머니, 감사합니다! 차가 정말 따뜻해요.', en: 'Thank you, Grandma! The tea is really warm.' },
                    { sp: 'narrator', ko: '지안 눈사람이 모자를 써요!', en: "Jian's snowman is wearing a hat!" }
                ],
                check: { q: '컵에 뭐가 있어요?', en: 'What is in the cups?', options: ['차', '커피', '주스'], answer: 0 }
            },
            {
                img: 'a2-r4-6',
                art: "A while later the snowmen are finished. Alex's huge snowman now wears Alex's red knit hat. Alex, bare-headed, rubs his cold red ears. Grandma laughs and points at the big snowman. Minji takes a photo with her phone.",
                lines: [
                    { sp: 'minji', ko: '할머니, 뭐가 제일 예뻐요?', en: 'Grandma, which one is the prettiest?' },
                    { sp: 'halmeoni', ko: '알렉스 눈사람이 제일 예뻐요! 모자가 멋있어요.', en: "Alex's snowman is the prettiest! The hat looks great." },
                    { sp: 'narrator', ko: '알렉스 모자는 어디에 있어요? 눈사람이 써요!', en: "Where is Alex's hat? The snowman is wearing it!" },
                    { sp: 'alex', ko: '눈사람은 따뜻하지만 저는 추워요!', en: "The snowman is warm, but I'm cold!" }
                ],
                check: { q: '알렉스 모자는 누가 써요?', en: "Who is wearing Alex's hat?", options: ['눈사람', '알렉스', '지안'], answer: 0 }
            },
            {
                img: 'a2-r4-7',
                art: 'Evening in the warm family living room. Everyone sits on the floor around a low table with mugs of hot drinks, cheeks still pink. Alex is wrapped in a blanket. Grandma smiles with Nabi the cat on her lap. Through the window, snow keeps falling.',
                lines: [
                    { sp: 'minji', ko: '오늘 뭐가 제일 재미있었어요?', en: 'What was the most fun today?' },
                    { sp: 'jian', ko: '눈사람이 제일 재미있었어요!', en: 'The snowman was the most fun!' },
                    { sp: 'alex', ko: '저는 호떡이 제일 좋았어요.', en: 'I liked the hotteok best.' },
                    { sp: 'junho', ko: '다음에도 같이 눈사람 만들어요!', en: "Let's make snowmen together again next time!" },
                    { sp: 'halmeoni', ko: '아이고, 오늘 정말 좋았어요.', en: 'Oh my, today was really lovely.' }
                ],
                check: { q: '지안은 뭐가 제일 재미있었어요?', en: 'What was the most fun for Jian?', options: ['눈사람', '호떡', '차'], answer: 0 }
            }
        ]
    },
    patterns: [
        {
            form: 'V + (으)ㄹ까요? · V + 아/어요 (let us)',
            meaning: 'suggesting plans (review)',
            note: '같이 눈사람 만들까요? = Shall we make a snowman together? 몇 시에 만날까요? = What time shall we meet? Agree with 좋아요! or 그래요!, and suggest with the plain 해요 form: 같이 만들어요!',
            examples: [
                { ko: '오늘 시간 있어요?', en: 'Are you free today?' },
                { ko: '같이 눈사람 만들까요?', en: 'Shall we make a snowman together?' },
                { ko: '다음에도 같이 만들어요!', en: "Let's make one together again next time!" }
            ]
        },
        {
            form: 'A보다 더 · 제일 · A/V + 지만',
            meaning: 'comparing (review)',
            note: '보다 goes on the thing you compare against, 더 means more and 제일 means the most. 지만 means but: 뜨겁지만 맛있어요.',
            examples: [
                { ko: '형 눈사람이 제 눈사람보다 더 커요.', en: 'Your snowman is bigger than mine.' },
                { ko: '알렉스 눈사람이 제일 커요.', en: "Alex's snowman is the biggest." },
                { ko: '뜨겁지만 정말 맛있어요.', en: "It's hot, but it's really good." }
            ]
        },
        {
            form: '(으)세요 · (으)셨어요 · 드세요',
            meaning: 'speaking politely to and about Grandma (review)',
            note: 'Add 시 when an elder is the subject: 춥다 → 추우세요?, 앉다 → 앉으세요, 오다 → 오셨어요. Special words: 드세요 (eat, drink), 주무세요 (sleep), 계세요 (be somewhere).',
            examples: [
                { ko: '할머니, 안 추우세요?', en: "Grandma, aren't you cold?" },
                { ko: '할머니도 공원에 오셨어요.', en: 'Grandma came to the park too.' },
                { ko: '할머니도 드세요.', en: 'Please have some too, Grandma.' }
            ]
        }
    ],
    sentences: [
        { ko: '오늘 시간 있어요?', en: 'Are you free today?', blank: '시간', alts: ['팝콘', '눈사람', '선물'] },
        { ko: '같이 눈사람 만들까요?', en: 'Shall we make a snowman together?', blank: '만들까요', alts: ['만들을까요', '만드까요', '만들었까요'] },
        { ko: '형 눈사람이 더 커요.', en: 'Your snowman is bigger.', blank: '더', alts: ['제일', '왜', '보다'] },
        { ko: '제 눈사람보다 더 커요.', en: "It's bigger than my snowman.", blank: '보다', alts: ['하고', '에서', '도'] },
        { ko: '알렉스 눈사람이 제일 커요.', en: "Alex's snowman is the biggest.", blank: '제일', alts: ['보다', '더', '아직'] },
        { ko: '호떡이 뜨겁지만 맛있어요.', en: "The hotteok is hot, but it's tasty.", blank: '뜨겁지만', alts: ['뜨거워서', '뜨거지만', '뜨거워요'] },
        { ko: '눈사람은 따뜻하지만 저는 추워요.', en: "The snowman is warm, but I'm cold.", blank: '지만', alts: ['아서', '고', '까요'] },
        { ko: '할머니, 안 추우세요?', en: "Grandma, aren't you cold?", blank: '추우세요', alts: ['춥으세요', '추워세요', '춥세요'] },
        { ko: '할머니도 공원에 오셨어요.', en: 'Grandma came to the park too.', blank: '오셨어요', alts: ['왔셨어요', '오었어요', '오세요'] },
        { ko: '할머니도 차 드세요.', en: 'Please have some tea too, Grandma.', blank: '드세요', alts: ['먹어요', '주무세요', '계세요'] },
        { ko: '오늘 뭐가 제일 재미있었어요?', en: 'What was the most fun today?', blank: '뭐가', alts: ['뭐를', '뭐에', '누구를'] },
        { ko: '다음에도 같이 만들어요!', en: "Let's make one together again next time!", blank: '다음에도', alts: ['어제도', '지난 주말에', '아직'] }
    ]
});
