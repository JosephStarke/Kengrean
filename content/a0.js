// A0 — Learn Like a Baby: pure comprehensible input. Picture stories with lots of
// repetition, circling questions and loanwords; every episode opens by reviewing the
// last one, and every fourth episode is a review round. No reading needed.
KG.level({
    id: 'A0',
    title: 'Learn Like a Baby',
    ko: '아기처럼 배워요',
    blurb: 'No reading needed. Watch short picture stories, guess the meaning from the pictures, and repeat what you hear. The same words come back again and again, like learning as a baby.',
    roundTitles: ['Food & likes', 'Things, places & doing', 'Me & numbers']
});

// =====================
// Round 1 — food & likes
// =====================
KG.unit({
    id: 'a0-01',
    level: 'A0',
    round: 1,
    title: 'Eat and Drink',
    ko: '먹어요, 마셔요',
    icon: '🍌',
    goal: 'Say hello, name foods and drinks, and say who eats or drinks what — and what they do not.',
    vocab: [
        { ko: '안녕하세요', en: 'hello', emoji: '👋', pos: 'expr' },
        { ko: '바나나', en: 'banana', emoji: '🍌', pos: 'noun' },
        { ko: '사과', en: 'apple', emoji: '🍎', pos: 'noun' },
        { ko: '피자', en: 'pizza', emoji: '🍕', pos: 'noun' },
        { ko: '빵', en: 'bread', emoji: '🍞', pos: 'noun' },
        { ko: '우유', en: 'milk', emoji: '🥛', pos: 'noun' },
        { ko: '물', en: 'water', emoji: '💧', pos: 'noun' },
        { ko: '커피', en: 'coffee', emoji: '☕', pos: 'noun' },
        { ko: '콜라', en: 'cola', emoji: '🥤', pos: 'noun' },
        { ko: '먹다', en: 'to eat', emoji: '🍴', pos: 'verb', polite: '먹어요' },
        { ko: '마시다', en: 'to drink', emoji: '🍹', pos: 'verb', polite: '마셔요' },
        { ko: '안', en: 'not (before a verb)', emoji: '🙅', pos: 'other', note: "안 먹어요 = I don't eat it." },
        { ko: '네', en: 'yes', emoji: '⭕', pos: 'expr' },
        { ko: '아니요', en: 'no', emoji: '❌', pos: 'expr' }
    ],
    story: {
        title: 'Snack Time',
        extras: "Every scene takes place in the same bright family kitchen in Minji's apartment: a round wooden table, a big sunny window and a white fridge. No cup, can, box or package shows any letters or logos.",
        scenes: [
            {
                img: 'a0-01-1',
                art: 'Bright family kitchen with a round wooden table by a big sunny window. Jian stands next to the table, waving at the viewer with a huge smile. Nabi the cat sits on a chair beside him. On the table: a bunch of bananas, a red apple, a pizza on a plate, a loaf of bread, a glass of milk, a glass of water, a mug of coffee and a red can of cola.',
                lines: [
                    { sp: 'narrator', ko: '여러분, 안녕하세요!', en: 'Hello, everyone!' },
                    { sp: 'narrator', ko: '지안이에요.', en: 'This is Jian.' },
                    { sp: 'jian', ko: '안녕하세요!', en: 'Hello!' },
                    { sp: 'narrator', ko: '바나나, 사과, 피자, 빵… 우유, 물, 커피, 콜라!', en: 'Bananas, an apple, pizza, bread… milk, water, coffee, cola!' }
                ]
            },
            {
                img: 'a0-01-2',
                art: 'Close-up of Jian at the kitchen table holding up one peeled yellow banana toward the viewer and taking a big happy bite. His cheeks are full.',
                lines: [
                    { sp: 'narrator', ko: '바나나. 바나나.', en: 'Banana. Banana.' },
                    { sp: 'narrator', ko: '바나나예요.', en: "It's a banana." },
                    { sp: 'narrator', ko: '먹어요. 바나나 먹어요.', en: 'Eat. He eats the banana.' },
                    { sp: 'narrator', ko: '지안은 바나나 먹어요.', en: 'Jian eats a banana.' },
                    { sp: 'jian', ko: '바나나 먹어요!', en: "I'm eating a banana!" }
                ],
                check: { q: '지안은 바나나 먹어요?', en: 'Does Jian eat a banana?', options: ['네', '아니요'], answer: 0 }
            },
            {
                img: 'a0-01-3',
                art: 'Jian sits at the kitchen table with a slice of cheese pizza in one hand and a shiny red apple with a bite taken out of it in the other. He chews happily.',
                lines: [
                    { sp: 'narrator', ko: '사과. 사과예요.', en: "Apple. It's an apple." },
                    { sp: 'narrator', ko: '지안은 사과 먹어요.', en: 'Jian eats an apple.' },
                    { sp: 'narrator', ko: '피자. 피자예요.', en: "Pizza. It's pizza." },
                    { sp: 'narrator', ko: '지안은 피자 먹어요.', en: 'Jian eats pizza.' },
                    { sp: 'jian', ko: '사과 먹어요. 피자 먹어요!', en: 'I eat an apple. I eat pizza!' }
                ],
                check: { q: '지안은 피자 먹어요?', en: 'Does Jian eat pizza?', options: ['네', '아니요'], answer: 0 }
            },
            {
                img: 'a0-01-4',
                art: 'Jian drinks a big glass of white milk with both hands, eyes closed happily. He has a funny white milk mustache.',
                lines: [
                    { sp: 'narrator', ko: '우유. 우유예요.', en: "Milk. It's milk." },
                    { sp: 'narrator', ko: '마셔요. 우유 마셔요.', en: 'Drink. He drinks milk.' },
                    { sp: 'narrator', ko: '지안은 우유 마셔요.', en: 'Jian drinks milk.' },
                    { sp: 'jian', ko: '우유 마셔요!', en: "I'm drinking milk!" }
                ],
                check: { q: '지안은 우유 마셔요?', en: 'Does Jian drink milk?', options: ['네', '아니요'], answer: 0 }
            },
            {
                img: 'a0-01-5',
                art: 'Grandma sits at the kitchen table, smiling. She eats a slice of bread with one hand and holds a clear glass of water in the other. Jian sits next to her.',
                lines: [
                    { sp: 'narrator', ko: '할머니예요.', en: 'This is Grandma.' },
                    { sp: 'narrator', ko: '빵. 빵이에요. 할머니는 빵 먹어요.', en: "Bread. It's bread. Grandma eats bread." },
                    { sp: 'narrator', ko: '물. 물이에요. 할머니는 물 마셔요.', en: "Water. It's water. Grandma drinks water." },
                    { sp: 'halmeoni', ko: '빵 먹어요. 물 마셔요.', en: 'I eat bread. I drink water.' }
                ],
                check: { q: '할머니는 물 마셔요?', en: 'Does Grandma drink water?', options: ['네', '아니요'], answer: 0 }
            },
            {
                img: 'a0-01-6',
                art: 'Junho sits at the kitchen table calmly sipping from a steaming mug of black coffee. Next to him, Jian sniffs a second mug of coffee, scrunches up his face in disgust, shakes his head and pushes the mug away with both hands.',
                lines: [
                    { sp: 'narrator', ko: '준호예요. 커피. 커피예요.', en: "This is Junho. Coffee. It's coffee." },
                    { sp: 'narrator', ko: '준호는 커피 마셔요.', en: 'Junho drinks coffee.' },
                    { sp: 'jian', ko: '커피? 안 마셔요!', en: "Coffee? I don't drink it!" },
                    { sp: 'narrator', ko: '지안은 커피 안 마셔요.', en: "Jian doesn't drink coffee." },
                    { sp: 'narrator', ko: '안 마셔요. 안 마셔요.', en: "He doesn't drink it. He doesn't drink it." }
                ],
                check: { q: '지안은 커피 마셔요?', en: 'Does Jian drink coffee?', options: ['네', '아니요'], answer: 1 }
            },
            {
                img: 'a0-01-7',
                art: 'Grandma gently takes a red can of cola away from Jian, shaking her head, and slides a glass of milk toward him instead. Jian looks at the cola and pouts, but holds the milk.',
                lines: [
                    { sp: 'narrator', ko: '콜라. 콜라예요.', en: "Cola. It's cola." },
                    { sp: 'narrator', ko: '지안은 콜라 안 마셔요.', en: "Jian doesn't drink cola." },
                    { sp: 'narrator', ko: '우유 마셔요. 콜라 안 마셔요.', en: "He drinks milk. He doesn't drink cola." },
                    { sp: 'jian', ko: '네… 우유 마셔요.', en: "Okay… I'll drink milk." }
                ],
                check: { q: '지안은 콜라 마셔요?', en: 'Does Jian drink cola?', options: ['네', '아니요'], answer: 1 }
            },
            {
                img: 'a0-01-8',
                art: 'Nabi the cat drinks water from her little bowl on the kitchen floor. Jian crouches beside her, laughing and holding out a slice of pizza on a small plate, but Nabi ignores the pizza completely and keeps drinking.',
                lines: [
                    { sp: 'narrator', ko: '나비예요.', en: 'This is Nabi.' },
                    { sp: 'jian', ko: '나비, 피자 먹어요?', en: 'Nabi, do you eat pizza?' },
                    { sp: 'narrator', ko: '아니요. 나비는 피자 안 먹어요.', en: "No. Nabi doesn't eat pizza." },
                    { sp: 'narrator', ko: '나비는 물 마셔요.', en: 'Nabi drinks water.' }
                ],
                check: { q: '나비는 피자 먹어요?', en: 'Does Nabi eat pizza?', options: ['네', '아니요'], answer: 1 }
            }
        ]
    },
    patterns: [
        {
            form: 'N + 먹어요 / 마셔요',
            meaning: 'eat N / drink N',
            note: 'The food comes first and the verb comes last. Korean leaves out I / he / she when it is clear, so 바나나 먹어요 can mean I eat, you eat or she eats a banana. To say who, add 는 after a vowel or 은 after a consonant: 할머니는, 지안은. Raise your voice at the end to ask.',
            examples: [
                { ko: '바나나 먹어요.', en: 'I eat a banana.' },
                { ko: '지안은 우유 마셔요.', en: 'Jian drinks milk.' },
                { ko: '커피 마셔요?', en: 'Do you drink coffee?' }
            ]
        },
        {
            form: '안 + verb',
            meaning: 'not (do)',
            note: 'Put 안 right in front of the verb, with a space: 안 먹어요, 안 마셔요. Say the yes and no sentences side by side to feel the difference.',
            examples: [
                { ko: '콜라 안 마셔요.', en: "I don't drink cola." },
                { ko: '나비는 피자 안 먹어요.', en: "Nabi doesn't eat pizza." },
                { ko: '우유 마셔요. 콜라 안 마셔요.', en: "I drink milk. I don't drink cola." }
            ]
        },
        {
            form: '네 / 아니요',
            meaning: 'yes / no',
            note: 'Answer by repeating the verb: 먹어요? → 네, 먹어요. or 아니요, 안 먹어요.',
            examples: [
                { ko: '바나나 먹어요? 네, 먹어요.', en: 'Do you eat bananas? Yes, I do.' },
                { ko: '커피 마셔요? 아니요, 안 마셔요.', en: "Do you drink coffee? No, I don't." }
            ]
        }
    ],
    sentences: [
        { ko: '바나나 먹어요.', en: 'I eat a banana.', blank: '먹어요', alts: ['마셔요', '아니요', '안녕하세요'] },
        { ko: '우유 마셔요.', en: 'I drink milk.', blank: '마셔요', alts: ['먹어요', '네', '빵'] },
        { ko: '사과 먹어요.', en: 'I eat an apple.', blank: '사과', alts: ['물', '커피', '우유'] },
        { ko: '물 마셔요.', en: 'I drink water.', blank: '물', alts: ['빵', '피자', '사과'] },
        { ko: '커피 안 마셔요.', en: "I don't drink coffee.", blank: '안', alts: ['네', '빵', '물'] },
        { ko: '피자 안 먹어요.', en: "I don't eat pizza.", blank: '먹어요', alts: ['마셔요', '안녕하세요', '아니요'] },
        { ko: '지안은 빵 먹어요.', en: 'Jian eats bread.', blank: '빵', alts: ['콜라', '물', '우유'] },
        { ko: '할머니는 물 마셔요.', en: 'Grandma drinks water.', blank: '마셔요', alts: ['먹어요', '안', '아니요'] },
        { ko: '콜라 마셔요?', en: 'Do you drink cola?' },
        { ko: '네, 마셔요.', en: 'Yes, I drink it.', blank: '네', alts: ['아니요', '안', '물'] },
        { ko: '아니요, 안 먹어요.', en: "No, I don't eat it.", blank: '아니요', alts: ['네', '빵', '안녕하세요'] },
        { ko: '여러분, 안녕하세요!', en: 'Hello, everyone!', blank: '안녕하세요', alts: ['먹어요', '마셔요', '아니요'] }
    ]
});

KG.unit({
    id: 'a0-02',
    level: 'A0',
    round: 1,
    title: 'I Like It',
    ko: '좋아해요',
    icon: '😍',
    goal: 'Say what you like, love and do not like, say whether food tastes good, and say "me too".',
    vocab: [
        { ko: '좋아하다', en: 'to like', emoji: '😍', pos: 'verb', polite: '좋아해요' },
        { ko: '사랑하다', en: 'to love', emoji: '❤️', pos: 'verb', polite: '사랑해요' },
        { ko: '맛있다', en: 'to be tasty, delicious', emoji: '😋', pos: 'adj', polite: '맛있어요', note: 'Sounds like 마시써요.' },
        { ko: '맛없다', en: 'to taste bad', emoji: '🤢', pos: 'adj', polite: '맛없어요', note: 'Sounds like 마덥써요.' },
        { ko: '저', en: 'I / me (polite)', emoji: '🙋', pos: 'other', note: '저는 = as for me, I' },
        { ko: '저도', en: 'me too', emoji: '🙌', pos: 'expr' },
        { ko: '할머니', en: 'grandma', emoji: '👵', pos: 'noun' },
        { ko: '주스', en: 'juice', emoji: '🧃', pos: 'noun' },
        { ko: '망고', en: 'mango', emoji: '🥭', pos: 'noun' },
        { ko: '딸기', en: 'strawberry', emoji: '🍓', pos: 'noun' },
        { ko: '케이크', en: 'cake', emoji: '🍰', pos: 'noun' }
    ],
    story: {
        title: "Grandma's Treats",
        extras: 'Every scene takes place in the same bright family kitchen as episode 1 (round wooden table, big sunny window). No cup, carton, box or package shows any letters or logos.',
        scenes: [
            {
                img: 'a0-02-1',
                art: 'The bright family kitchen. Jian eats a banana, with a glass of milk in front of him. Junho sips a mug of coffee. Jian glances at the coffee and shakes his head with a grimace.',
                lines: [
                    { sp: 'narrator', ko: '지안은 바나나 먹어요. 우유 마셔요.', en: 'Jian eats a banana. He drinks milk.' },
                    { sp: 'narrator', ko: '준호는 커피 마셔요.', en: 'Junho drinks coffee.' },
                    { sp: 'narrator', ko: '지안은 커피 마셔요? 아니요, 안 마셔요.', en: "Does Jian drink coffee? No, he doesn't." },
                    { sp: 'jian', ko: '커피 안 마셔요!', en: "I don't drink coffee!" }
                ],
                check: { q: '지안은 우유 마셔요?', en: 'Does Jian drink milk?', options: ['네', '아니요'], answer: 0 }
            },
            {
                img: 'a0-02-2',
                art: 'Jian hugs a big bunch of bananas to his chest with a dreamy smile. Little red hearts float around his head.',
                lines: [
                    { sp: 'narrator', ko: '좋아해요. 좋아해요.', en: 'Likes. Likes.' },
                    { sp: 'narrator', ko: '지안은 바나나 좋아해요.', en: 'Jian likes bananas.' },
                    { sp: 'jian', ko: '바나나 좋아해요!', en: 'I like bananas!' },
                    { sp: 'narrator', ko: '바나나 좋아해요? 네, 좋아해요!', en: 'Does he like bananas? Yes, he does!' }
                ],
                check: { q: '지안은 바나나 좋아해요?', en: 'Does Jian like bananas?', options: ['네', '아니요'], answer: 0 }
            },
            {
                img: 'a0-02-3',
                art: 'Minji comes into the kitchen holding a white bowl of bright red strawberries. She points at herself with her thumb and smiles.',
                lines: [
                    { sp: 'narrator', ko: '민지예요.', en: 'This is Minji.' },
                    { sp: 'narrator', ko: '딸기. 딸기예요.', en: "Strawberries. They're strawberries." },
                    { sp: 'minji', ko: '저는 딸기 좋아해요.', en: 'I like strawberries.' },
                    { sp: 'narrator', ko: '민지는 딸기 좋아해요.', en: 'Minji likes strawberries.' }
                ],
                check: { q: '민지는 딸기 좋아해요?', en: 'Does Minji like strawberries?', options: ['네', '아니요'], answer: 0 }
            },
            {
                img: 'a0-02-4',
                art: 'Minji eats a strawberry with her eyes closed in delight and gives a big thumbs-up.',
                lines: [
                    { sp: 'minji', ko: '음, 맛있어요!', en: 'Mmm, delicious!' },
                    { sp: 'narrator', ko: '맛있어요. 맛있어요.', en: 'Delicious. Delicious.' },
                    { sp: 'narrator', ko: '딸기 맛있어요.', en: 'The strawberries are delicious.' },
                    { sp: 'narrator', ko: '딸기 맛있어요? 네, 맛있어요!', en: 'Are the strawberries tasty? Yes, they are!' }
                ],
                check: { q: '딸기 맛있어요?', en: 'Are the strawberries tasty?', options: ['네', '아니요'], answer: 0 }
            },
            {
                img: 'a0-02-5',
                art: 'Jian runs up next to Minji, pointing at himself with both thumbs, mouth wide open, eager for strawberries. Minji laughs and pops a strawberry into his mouth.',
                lines: [
                    { sp: 'jian', ko: '저도! 저도 딸기 좋아해요!', en: 'Me too! I like strawberries too!' },
                    { sp: 'narrator', ko: '저도. 저도.', en: 'Me too. Me too.' },
                    { sp: 'narrator', ko: '민지는 딸기 좋아해요. 지안도 딸기 좋아해요.', en: 'Minji likes strawberries. Jian likes strawberries too.' }
                ],
                check: { q: '지안도 딸기 좋아해요?', en: 'Does Jian like strawberries too?', options: ['네', '아니요'], answer: 0 }
            },
            {
                img: 'a0-02-6',
                art: 'Grandma takes a sip of cola from a glass and makes a funny sour face, eyes squeezed shut and tongue sticking out. Jian and Minji giggle.',
                lines: [
                    { sp: 'narrator', ko: '할머니는 콜라 마셔요.', en: 'Grandma drinks cola.' },
                    { sp: 'halmeoni', ko: '으… 맛없어요!', en: 'Ugh… it tastes bad!' },
                    { sp: 'narrator', ko: '맛없어요. 맛없어요.', en: 'Tastes bad. Tastes bad.' },
                    { sp: 'narrator', ko: '할머니는 콜라 안 좋아해요.', en: "Grandma doesn't like cola." }
                ],
                check: { q: '할머니는 콜라 좋아해요?', en: 'Does Grandma like cola?', options: ['네', '아니요'], answer: 1 }
            },
            {
                img: 'a0-02-7',
                art: 'Grandma happily drinks a tall glass of orange mango juice. A whole ripe mango sits on the table next to her glass, and the glass of cola is pushed far away.',
                lines: [
                    { sp: 'narrator', ko: '망고. 망고예요.', en: "A mango. It's a mango." },
                    { sp: 'narrator', ko: '망고 주스. 주스예요.', en: "Mango juice. It's juice." },
                    { sp: 'halmeoni', ko: '망고 주스 좋아해요. 맛있어요!', en: "I like mango juice. It's delicious!" },
                    { sp: 'narrator', ko: '할머니는 콜라 안 좋아해요. 망고 주스 좋아해요.', en: "Grandma doesn't like cola. She likes mango juice." }
                ],
                check: { q: '할머니는 망고 주스 좋아해요?', en: 'Does Grandma like mango juice?', options: ['네', '아니요'], answer: 0 }
            },
            {
                img: 'a0-02-8',
                art: 'Grandma sets a big strawberry cake on the table. Jian throws his arms around Grandma in a big hug while Minji claps. Little hearts float above Jian and Grandma.',
                lines: [
                    { sp: 'narrator', ko: '케이크. 딸기 케이크예요.', en: "Cake. It's a strawberry cake." },
                    { sp: 'jian', ko: '와! 저는 케이크 좋아해요!', en: 'Wow! I like cake!' },
                    { sp: 'minji', ko: '저도 좋아해요!', en: 'I like it too!' },
                    { sp: 'jian', ko: '할머니, 사랑해요!', en: 'Grandma, I love you!' },
                    { sp: 'narrator', ko: '지안은 할머니 사랑해요.', en: 'Jian loves Grandma.' }
                ],
                check: { q: '지안은 할머니 사랑해요?', en: 'Does Jian love Grandma?', options: ['네', '아니요'], answer: 0 }
            }
        ]
    },
    patterns: [
        {
            form: 'N + 좋아해요 / 안 좋아해요',
            meaning: 'like N / not like N',
            note: "좋아해요 = like. Put 안 in front to say you don't like it: 안 좋아해요. For people and pets you love, use 사랑해요.",
            examples: [
                { ko: '바나나 좋아해요.', en: 'I like bananas.' },
                { ko: '할머니는 콜라 안 좋아해요.', en: "Grandma doesn't like cola." },
                { ko: '할머니, 사랑해요!', en: 'Grandma, I love you!' }
            ]
        },
        {
            form: '맛있어요 / 맛없어요',
            meaning: "it's tasty / it tastes bad",
            note: '맛 means taste. 맛있어요 (say 마시써요) = it has taste, so it is delicious. 맛없어요 (say 마덥써요) = it has no taste, so it is not good.',
            examples: [
                { ko: '딸기 맛있어요.', en: 'The strawberries are delicious.' },
                { ko: '으… 맛없어요!', en: 'Ugh… it tastes bad!' }
            ]
        },
        {
            form: '저는 / 저도',
            meaning: 'I (as for me) / me too',
            note: '저 = I, me (polite). 저는 = as for me. Change 는 to 도 to say me too: 저도 좋아해요. It works with names too: 지안도 좋아해요.',
            examples: [
                { ko: '저는 딸기 좋아해요.', en: 'I like strawberries.' },
                { ko: '저도 딸기 좋아해요!', en: 'I like strawberries too!' },
                { ko: '지안도 딸기 좋아해요.', en: 'Jian likes strawberries too.' }
            ]
        }
    ],
    sentences: [
        { ko: '바나나 좋아해요.', en: 'I like bananas.', blank: '좋아해요', alts: ['마셔요', '맛없어요', '아니요'] },
        { ko: '저는 딸기 좋아해요.', en: 'I like strawberries.', blank: '딸기', alts: ['우유', '커피', '물'] },
        { ko: '딸기 맛있어요.', en: 'The strawberries are delicious.', blank: '맛있어요', alts: ['맛없어요', '마셔요', '아니요'] },
        { ko: '콜라 맛없어요.', en: 'The cola tastes bad.', blank: '맛없어요', alts: ['맛있어요', '사랑해요', '네'] },
        { ko: '저는 콜라 안 좋아해요.', en: "I don't like cola.", blank: '안', alts: ['네', '도', '저'] },
        { ko: '저도 좋아해요.', en: 'I like it too.', blank: '저도', alts: ['저는', '아니요', '케이크'] },
        { ko: '할머니, 사랑해요!', en: 'Grandma, I love you!', blank: '사랑해요', alts: ['마셔요', '맛없어요', '먹어요'] },
        { ko: '망고 주스 마셔요.', en: 'I drink mango juice.', blank: '주스', alts: ['빵', '피자', '케이크'] },
        { ko: '케이크 좋아해요?', en: 'Do you like cake?' },
        { ko: '네, 좋아해요.', en: 'Yes, I like it.', blank: '네', alts: ['아니요', '안', '저도'] },
        { ko: '아니요, 안 좋아해요.', en: "No, I don't like it.", blank: '아니요', alts: ['네', '저도', '맛있어요'] },
        { ko: '지안도 딸기 좋아해요.', en: 'Jian likes strawberries too.', blank: '도', alts: ['는', '요', '안'] }
    ]
});

KG.unit({
    id: 'a0-03',
    level: 'A0',
    round: 1,
    title: 'What Is It?',
    ko: '이거 뭐예요?',
    icon: '❓',
    goal: 'Point at things near and far, ask what they are, say what they are not, and choose between two.',
    vocab: [
        { ko: '이거', en: 'this (thing near me)', emoji: '👇', pos: 'other' },
        { ko: '저거', en: 'that (thing over there)', emoji: '👆', pos: 'other' },
        { ko: '뭐', en: 'what', emoji: '❓', pos: 'other' },
        { ko: '아니다', en: 'to not be (N)', emoji: '❎', pos: 'adj', polite: '아니에요', note: '피자 아니에요 = It is not pizza.' },
        { ko: '아니면', en: 'or (between two choices)', emoji: '🔀', pos: 'other' },
        { ko: '토마토', en: 'tomato', emoji: '🍅', pos: 'noun' },
        { ko: '오렌지', en: 'orange', emoji: '🍊', pos: 'noun' },
        { ko: '초콜릿', en: 'chocolate', emoji: '🍫', pos: 'noun' },
        { ko: '아이스크림', en: 'ice cream', emoji: '🍦', pos: 'noun' },
        { ko: '햄버거', en: 'hamburger', emoji: '🍔', pos: 'noun' },
        { ko: '치킨', en: 'fried chicken', emoji: '🍗', pos: 'noun' }
    ],
    story: {
        title: 'The Grocery Bag',
        extras: 'Every scene takes place in the same bright family kitchen as the earlier episodes. The paper grocery bag, the chocolate wrapper and the ice-cream tub have no letters or logos.',
        scenes: [
            {
                img: 'a0-03-1',
                art: 'The bright family kitchen. Minji happily eats strawberries from a bowl and gives a thumbs-up. Grandma pushes a glass of cola away with a frown. Jian holds a plate with a slice of strawberry cake, smiling.',
                lines: [
                    { sp: 'narrator', ko: '민지는 딸기 좋아해요. 딸기 맛있어요!', en: 'Minji likes strawberries. Strawberries are delicious!' },
                    { sp: 'narrator', ko: '할머니는 콜라 안 좋아해요.', en: "Grandma doesn't like cola." },
                    { sp: 'narrator', ko: '지안은 케이크 좋아해요?', en: 'Does Jian like cake?' },
                    { sp: 'jian', ko: '네, 좋아해요! 케이크 맛있어요!', en: 'Yes, I do! Cake is delicious!' }
                ],
                check: { q: '할머니는 콜라 좋아해요?', en: 'Does Grandma like cola?', options: ['네', '아니요'], answer: 1 }
            },
            {
                img: 'a0-03-2',
                art: 'Junho has just come home and puts a big brown paper grocery bag on the kitchen table. Jian reaches into the bag and holds up a round red tomato right in front of his face, looking puzzled.',
                lines: [
                    { sp: 'jian', ko: '이거 뭐예요?', en: "What's this?" },
                    { sp: 'junho', ko: '토마토예요.', en: "It's a tomato." },
                    { sp: 'narrator', ko: '토마토. 토마토예요.', en: "Tomato. It's a tomato." },
                    { sp: 'jian', ko: '토마토? 이거 토마토예요?', en: 'Tomato? This is a tomato?' },
                    { sp: 'junho', ko: '네, 토마토예요.', en: "Yes, it's a tomato." }
                ],
                check: { q: '이거 뭐예요?', en: "What's this?", options: ['토마토', '사과'], answer: 0 }
            },
            {
                img: 'a0-03-3',
                art: 'Jian pulls a round orange out of the grocery bag and holds it up. A red apple lies on the table next to the bag. Junho points from the apple to the orange, raising his eyebrows as he asks.',
                lines: [
                    { sp: 'narrator', ko: '이거 뭐예요? 오렌지. 오렌지예요.', en: "What's this? An orange. It's an orange." },
                    { sp: 'junho', ko: '지안, 이거 사과예요? 아니면 오렌지예요?', en: 'Jian, is this an apple? Or is it an orange?' },
                    { sp: 'jian', ko: '오렌지예요!', en: "It's an orange!" },
                    { sp: 'narrator', ko: '네, 오렌지예요. 사과 아니에요.', en: "Yes, it's an orange. It's not an apple." }
                ],
                check: { q: '이거 사과예요? 아니면 오렌지예요?', en: 'Is this an apple, or an orange?', options: ['사과예요', '오렌지예요'], answer: 1 }
            },
            {
                img: 'a0-03-4',
                art: 'Jian holds up a dark-brown chocolate bar, half unwrapped so the little squares show, squinting at it as if it might be bread. Junho shakes his head and laughs.',
                lines: [
                    { sp: 'jian', ko: '이거 빵이에요?', en: 'Is this bread?' },
                    { sp: 'junho', ko: '아니요, 빵 아니에요. 초콜릿이에요.', en: "No, it's not bread. It's chocolate." },
                    { sp: 'narrator', ko: '초콜릿. 초콜릿이에요. 빵 아니에요.', en: "Chocolate. It's chocolate. It's not bread." },
                    { sp: 'jian', ko: '와! 초콜릿 좋아해요!', en: 'Wow! I like chocolate!' }
                ],
                check: { q: '이거 빵이에요?', en: 'Is this bread?', options: ['네', '아니요'], answer: 1 }
            },
            {
                img: 'a0-03-5',
                art: 'Wide view of the kitchen. Jian stands at the table and points far across the room at the counter by the fridge, where a tub of ice cream with a cone on top sits. Junho, beside Jian, looks where he is pointing.',
                lines: [
                    { sp: 'jian', ko: '저거 뭐예요?', en: "What's that over there?" },
                    { sp: 'junho', ko: '저거요? 아이스크림이에요.', en: "That? It's ice cream." },
                    { sp: 'narrator', ko: '아이스크림. 아이스크림이에요.', en: "Ice cream. It's ice cream." },
                    { sp: 'jian', ko: '아이스크림! 아이스크림 먹어요!', en: "Ice cream! Let's eat ice cream!" }
                ],
                check: { q: '저거 뭐예요?', en: "What's that over there?", options: ['아이스크림', '피자'], answer: 0 }
            },
            {
                img: 'a0-03-6',
                art: 'Junho holds up a big hamburger and, with a teasing grin, pretends it is pizza. Jian laughs, shakes his head and points at the hamburger.',
                lines: [
                    { sp: 'junho', ko: '이거 피자예요?', en: 'Is this pizza?' },
                    { sp: 'jian', ko: '아니요! 피자 아니에요!', en: "No! It's not pizza!" },
                    { sp: 'jian', ko: '햄버거예요!', en: "It's a hamburger!" },
                    { sp: 'narrator', ko: '햄버거. 햄버거예요. 피자 아니에요.', en: "A hamburger. It's a hamburger. It's not pizza." }
                ],
                check: { q: '이거 피자예요? 아니면 햄버거예요?', en: 'Is this pizza, or a hamburger?', options: ['피자예요', '햄버거예요'], answer: 1 }
            },
            {
                img: 'a0-03-7',
                art: 'Grandma puts a big plate of golden fried chicken on the table. Nabi the cat sits on a chair, staring at the chicken with huge round eyes and one paw reaching toward it.',
                lines: [
                    { sp: 'narrator', ko: '이거 뭐예요? 치킨이에요.', en: "What's this? It's fried chicken." },
                    { sp: 'narrator', ko: '치킨. 치킨. 치킨이에요.', en: "Chicken. Chicken. It's fried chicken." },
                    { sp: 'halmeoni', ko: '치킨 먹어요!', en: "Let's eat chicken!" },
                    { sp: 'narrator', ko: '나비도 치킨 좋아해요.', en: 'Nabi likes chicken too.' }
                ],
                check: { q: '나비는 치킨 좋아해요?', en: 'Does Nabi like chicken?', options: ['네', '아니요'], answer: 0 }
            },
            {
                img: 'a0-03-8',
                art: 'Jian sits at the full table, happily hugging a hamburger with one arm. With his other hand he pushes the red tomato away, making a face. Junho laughs.',
                lines: [
                    { sp: 'narrator', ko: '지안은 햄버거 좋아해요.', en: 'Jian likes hamburgers.' },
                    { sp: 'jian', ko: '이거 햄버거예요. 햄버거 좋아해요!', en: 'This is a hamburger. I like hamburgers!' },
                    { sp: 'junho', ko: '토마토는요? 토마토 좋아해요?', en: 'What about the tomato? Do you like tomatoes?' },
                    { sp: 'jian', ko: '아니요! 토마토 안 좋아해요!', en: "No! I don't like tomatoes!" }
                ],
                check: { q: '지안은 토마토 좋아해요?', en: 'Does Jian like tomatoes?', options: ['네', '아니요'], answer: 1 }
            }
        ]
    },
    patterns: [
        {
            form: '이거 / 저거 + 뭐예요?',
            meaning: 'What is this? / What is that over there?',
            note: '이거 = this, a thing you hold or touch. 저거 = that, a thing far away that you point at. 뭐 = what. Answer with the name of the thing: 토마토예요.',
            examples: [
                { ko: '이거 뭐예요?', en: "What's this?" },
                { ko: '저거 뭐예요?', en: "What's that over there?" },
                { ko: '아이스크림이에요.', en: "It's ice cream." }
            ]
        },
        {
            form: 'N + 예요 / 이에요 · N 아니에요',
            meaning: "it's N · it's not N",
            note: 'After a vowel say 예요 (피자예요, 토마토예요). After a consonant say 이에요 (빵이에요, 치킨이에요). To say what it is not, use 아니에요: 피자 아니에요. In careful speech you add 이/가 (피자가 아니에요) — you will meet that in A1. Careful: 아니요 on its own just means no.',
            examples: [
                { ko: '햄버거예요.', en: "It's a hamburger." },
                { ko: '초콜릿이에요.', en: "It's chocolate." },
                { ko: '아니요, 빵 아니에요.', en: "No, it's not bread." }
            ]
        },
        {
            form: 'A예요? 아니면 B예요?',
            meaning: 'Is it A, or B?',
            note: '아니면 = or. Give two choices, and the answer is one of them.',
            examples: [
                { ko: '사과예요? 아니면 오렌지예요?', en: 'Is it an apple, or an orange?' },
                { ko: '오렌지예요!', en: "It's an orange!" }
            ]
        }
    ],
    sentences: [
        { ko: '이거 뭐예요?', en: "What's this?", blank: '뭐', alts: ['네', '저', '안'] },
        { ko: '저거 뭐예요?', en: "What's that over there?", blank: '저거', alts: ['이거', '저는', '저도'] },
        { ko: '이거 토마토예요.', en: 'This is a tomato.', blank: '예요', alts: ['이에요', '는', '도'] },
        { ko: '이거 빵이에요.', en: 'This is bread.', blank: '이에요', alts: ['예요', '네', '안'] },
        { ko: '이거 치킨이에요.', en: 'This is fried chicken.', blank: '치킨', alts: ['커피', '우유', '물'] },
        { ko: '이거 피자 아니에요.', en: "This isn't pizza.", blank: '아니에요', alts: ['아니요', '이에요', '예요'] },
        { ko: '아니요, 햄버거예요.', en: "No, it's a hamburger.", blank: '아니요', alts: ['아니에요', '이거', '저거'] },
        { ko: '사과예요? 아니면 오렌지예요?', en: 'Is it an apple, or an orange?', blank: '아니면', alts: ['아니요', '저도', '안'] },
        { ko: '네, 오렌지예요.', en: "Yes, it's an orange." },
        { ko: '저거 아이스크림이에요.', en: 'That over there is ice cream.', blank: '저거', alts: ['뭐', '저도', '안'] },
        { ko: '토마토 안 좋아해요.', en: "I don't like tomatoes.", blank: '안', alts: ['뭐', '네', '이거'] },
        { ko: '초콜릿 좋아해요!', en: 'I like chocolate!', blank: '좋아해요', alts: ['아니에요', '마셔요', '뭐예요'] }
    ]
});

KG.unit({
    id: 'a0-04',
    level: 'A0',
    round: 1,
    review: true,
    title: 'Review: Taste Test',
    ko: '뭐 먹어요?',
    icon: '🙈',
    goal: 'Review round 1: guess foods and drinks in a blindfold taste test, using only words you already know.',
    vocab: [
        { ko: '먹다', en: 'to eat', emoji: '🍴', pos: 'verb', polite: '먹어요' },
        { ko: '마시다', en: 'to drink', emoji: '🍹', pos: 'verb', polite: '마셔요' },
        { ko: '안', en: 'not (before a verb)', emoji: '🙅', pos: 'other', note: "안 먹어요 = I don't eat it." },
        { ko: '좋아하다', en: 'to like', emoji: '😍', pos: 'verb', polite: '좋아해요' },
        { ko: '맛있다', en: 'to be tasty, delicious', emoji: '😋', pos: 'adj', polite: '맛있어요', note: 'Sounds like 마시써요.' },
        { ko: '맛없다', en: 'to taste bad', emoji: '🤢', pos: 'adj', polite: '맛없어요', note: 'Sounds like 마덥써요.' },
        { ko: '이거', en: 'this (thing near me)', emoji: '👇', pos: 'other' },
        { ko: '저거', en: 'that (thing over there)', emoji: '👆', pos: 'other' },
        { ko: '뭐', en: 'what', emoji: '❓', pos: 'other' },
        { ko: '아니다', en: 'to not be (N)', emoji: '❎', pos: 'adj', polite: '아니에요', note: '피자 아니에요 = It is not pizza.' },
        { ko: '아니면', en: 'or (between two choices)', emoji: '🔀', pos: 'other' },
        { ko: '바나나', en: 'banana', emoji: '🍌', pos: 'noun' },
        { ko: '망고', en: 'mango', emoji: '🥭', pos: 'noun' },
        { ko: '우유', en: 'milk', emoji: '🥛', pos: 'noun' }
    ],
    story: {
        title: 'Taste Test',
        extras: 'Every scene takes place at the same family kitchen table. The blindfold is a soft blue cloth tied over the eyes, like in a party game. No cup, carton or package shows any letters or logos.',
        scenes: [
            {
                img: 'a0-04-1',
                art: 'The family kitchen table is full of food: a bunch of bananas, a cut mango, red apples, bread, a strawberry cake, a glass of milk, a glass of orange juice and a red can of cola. Jian sits at the table wearing a soft blue blindfold, grinning. Minji and Junho stand behind the table, smiling mischievously.',
                lines: [
                    { sp: 'narrator', ko: '여러분, 안녕하세요!', en: 'Hello, everyone!' },
                    { sp: 'narrator', ko: '바나나, 망고, 사과, 빵, 케이크.', en: 'Bananas, mango, apples, bread, cake.' },
                    { sp: 'narrator', ko: '우유, 주스, 콜라.', en: 'Milk, juice, cola.' },
                    { sp: 'narrator', ko: '지안은 뭐 먹어요? 뭐 마셔요?', en: 'What will Jian eat? What will he drink?' }
                ]
            },
            {
                img: 'a0-04-2',
                art: 'Minji holds a piece of banana to blindfolded Jian, who chews it with a big smile. Junho holds up a mango in one hand and a banana in the other, as if asking which one.',
                lines: [
                    { sp: 'minji', ko: '지안, 먹어요!', en: 'Jian, eat!' },
                    { sp: 'jian', ko: '음… 맛있어요!', en: 'Mmm… delicious!' },
                    { sp: 'junho', ko: '이거 뭐예요? 바나나예요? 아니면 망고예요?', en: 'What is it? A banana? Or a mango?' },
                    { sp: 'jian', ko: '바나나예요!', en: "It's a banana!" },
                    { sp: 'narrator', ko: '네, 바나나예요!', en: "Yes, it's a banana!" }
                ],
                check: { q: '바나나예요? 아니면 망고예요?', en: 'Is it a banana, or a mango?', options: ['바나나예요', '망고예요'], answer: 0 }
            },
            {
                img: 'a0-04-3',
                art: 'Blindfolded Jian chews a juicy slice of yellow mango and confidently holds up one finger, guessing. Minji, holding the rest of the mango, shakes her head and laughs.',
                lines: [
                    { sp: 'narrator', ko: '이거 뭐예요?', en: 'What is it?' },
                    { sp: 'jian', ko: '음… 사과예요!', en: "Hmm… it's an apple!" },
                    { sp: 'minji', ko: '아니요, 사과 아니에요! 망고예요.', en: "No, it's not an apple! It's a mango." },
                    { sp: 'jian', ko: '망고? 망고 맛있어요!', en: 'Mango? Mango is delicious!' }
                ],
                check: { q: '이거 사과예요?', en: 'Is this an apple?', options: ['네', '아니요'], answer: 1 }
            },
            {
                img: 'a0-04-4',
                art: 'Junho hands a glass of white milk to blindfolded Jian, who sips it. A glass of orange juice stands on the table next to it, untouched.',
                lines: [
                    { sp: 'junho', ko: '지안, 마셔요.', en: 'Jian, drink.' },
                    { sp: 'jian', ko: '음… 이거 우유예요!', en: 'Hmm… this is milk!' },
                    { sp: 'junho', ko: '네, 우유예요. 주스 아니에요.', en: "Yes, it's milk. It's not juice." },
                    { sp: 'narrator', ko: '지안은 우유 마셔요. 우유 좋아해요.', en: 'Jian drinks milk. He likes milk.' }
                ],
                check: { q: '지안은 우유 마셔요? 아니면 주스 마셔요?', en: 'Does Jian drink milk, or juice?', options: ['우유 마셔요', '주스 마셔요'], answer: 0 }
            },
            {
                img: 'a0-04-5',
                art: "Junho grins mischievously as blindfolded Jian sips from a mug of black coffee. Jian's face scrunches up in disgust, his tongue sticking out. Minji covers her mouth, laughing.",
                lines: [
                    { sp: 'narrator', ko: '이거 커피예요!', en: 'This is coffee!' },
                    { sp: 'jian', ko: '으… 맛없어요!', en: 'Ugh… it tastes bad!' },
                    { sp: 'jian', ko: '이거 커피예요? 저는 커피 안 마셔요!', en: "Is this coffee? I don't drink coffee!" },
                    { sp: 'junho', ko: '하하! 네, 커피예요.', en: "Haha! Yes, it's coffee." },
                    { sp: 'narrator', ko: '지안은 커피 안 좋아해요.', en: "Jian doesn't like coffee." }
                ],
                check: { q: '지안은 커피 좋아해요?', en: 'Does Jian like coffee?', options: ['네', '아니요'], answer: 1 }
            },
            {
                img: 'a0-04-6',
                art: 'Minji points far across the table in surprise: at the far end, Nabi the cat has climbed onto the table and is licking the cream on the strawberry cake.',
                lines: [
                    { sp: 'minji', ko: '어? 저거 뭐예요?', en: "Huh? What's that over there?" },
                    { sp: 'narrator', ko: '나비예요! 나비는 케이크 먹어요!', en: "It's Nabi! Nabi is eating the cake!" },
                    { sp: 'minji', ko: '나비! 케이크 맛있어요?', en: 'Nabi! Is the cake tasty?' },
                    { sp: 'narrator', ko: '나비는 케이크 좋아해요.', en: 'Nabi likes cake.' }
                ],
                check: { q: '나비는 케이크 먹어요?', en: 'Is Nabi eating the cake?', options: ['네', '아니요'], answer: 0 }
            },
            {
                img: 'a0-04-7',
                art: 'Now Grandma wears the soft blue blindfold. Jian, without his blindfold, feeds her a bright red strawberry. Grandma smiles as she chews.',
                lines: [
                    { sp: 'jian', ko: '할머니, 이거 뭐예요?', en: 'Grandma, what is this?' },
                    { sp: 'halmeoni', ko: '음… 딸기예요!', en: "Mmm… it's a strawberry!" },
                    { sp: 'jian', ko: '네! 딸기예요!', en: "Yes! It's a strawberry!" },
                    { sp: 'halmeoni', ko: '맛있어요. 저는 딸기 좋아해요.', en: "It's delicious. I like strawberries." },
                    { sp: 'jian', ko: '저도 딸기 좋아해요!', en: 'I like strawberries too!' }
                ],
                check: { q: '할머니는 딸기 좋아해요?', en: 'Does Grandma like strawberries?', options: ['네', '아니요'], answer: 0 }
            },
            {
                img: 'a0-04-8',
                art: 'The whole family laughs around the kitchen table: Jian drinks milk, Grandma eats strawberries, Minji eats a banana and Junho sips his coffee. Jian hugs Grandma with one arm.',
                lines: [
                    { sp: 'narrator', ko: '지안은 우유 마셔요. 커피 안 마셔요.', en: "Jian drinks milk. He doesn't drink coffee." },
                    { sp: 'narrator', ko: '할머니는 딸기 먹어요. 민지는 바나나 먹어요.', en: 'Grandma eats strawberries. Minji eats a banana.' },
                    { sp: 'narrator', ko: '준호는 커피 마셔요? 네, 커피 마셔요.', en: 'Does Junho drink coffee? Yes, he drinks coffee.' },
                    { sp: 'jian', ko: '할머니, 사랑해요!', en: 'Grandma, I love you!' }
                ],
                check: { q: '준호는 커피 마셔요?', en: 'Does Junho drink coffee?', options: ['네', '아니요'], answer: 0 }
            }
        ]
    },
    patterns: [
        {
            form: 'N 먹어요 / 마셔요 · 안 먹어요 / 안 마셔요',
            meaning: 'eat / drink N · do not eat / drink',
            note: 'Round 1 recap: the thing first, the verb last, and 안 right before the verb for not.',
            examples: [
                { ko: '지안은 우유 마셔요.', en: 'Jian drinks milk.' },
                { ko: '저는 커피 안 마셔요!', en: "I don't drink coffee!" },
                { ko: '나비는 케이크 먹어요.', en: 'Nabi eats the cake.' }
            ]
        },
        {
            form: 'N 좋아해요? — 네, 좋아해요. / 아니요, 안 좋아해요.',
            meaning: 'Do you like N? — Yes, I do. / No, I do not.',
            note: 'Add 맛있어요 or 맛없어요 to say how it tastes, and 저도 to agree.',
            examples: [
                { ko: '망고 맛있어요!', en: 'Mango is delicious!' },
                { ko: '으… 맛없어요!', en: 'Ugh… it tastes bad!' },
                { ko: '저도 딸기 좋아해요!', en: 'I like strawberries too!' }
            ]
        },
        {
            form: '이거 뭐예요? — A예요? 아니면 B예요?',
            meaning: 'What is this? — Is it A, or B?',
            note: 'Answer with N예요 / N이에요, or say what it is not with N 아니에요.',
            examples: [
                { ko: '이거 뭐예요?', en: 'What is this?' },
                { ko: '바나나예요? 아니면 망고예요?', en: 'Is it a banana, or a mango?' },
                { ko: '사과 아니에요. 망고예요.', en: "It's not an apple. It's a mango." }
            ]
        }
    ],
    sentences: [
        { ko: '이거 뭐예요?', en: 'What is this?', blank: '이거', alts: ['저도', '안', '네'] },
        { ko: '바나나예요? 아니면 망고예요?', en: 'Is it a banana, or a mango?', blank: '아니면', alts: ['아니요', '아니에요', '안'] },
        { ko: '사과 아니에요.', en: "It's not an apple.", blank: '아니에요', alts: ['아니요', '이에요', '맛있어요'] },
        { ko: '망고 맛있어요!', en: 'The mango is delicious!', blank: '맛있어요', alts: ['맛없어요', '마셔요', '아니에요'] },
        { ko: '으, 맛없어요!', en: 'Ugh, it tastes bad!', blank: '맛없어요', alts: ['맛있어요', '좋아해요', '사랑해요'] },
        { ko: '우유 마셔요.', en: 'I drink milk.', blank: '우유', alts: ['빵', '바나나', '케이크'] },
        { ko: '저는 커피 안 마셔요.', en: "I don't drink coffee.", blank: '안', alts: ['네', '도', '뭐'] },
        { ko: '나비는 케이크 먹어요.', en: 'Nabi eats the cake.', blank: '먹어요', alts: ['마셔요', '아니에요', '저도'] },
        { ko: '저는 딸기 좋아해요.', en: 'I like strawberries.', blank: '좋아해요', alts: ['마셔요', '아니에요', '맛없어요'] },
        { ko: '저도 딸기 좋아해요!', en: 'I like strawberries too!', blank: '저도', alts: ['저는', '이거', '뭐'] },
        { ko: '커피 좋아해요?', en: 'Do you like coffee?' },
        { ko: '아니요, 안 좋아해요.', en: "No, I don't like it.", blank: '아니요', alts: ['네', '저도', '이거'] }
    ]
});

// =====================
// Round 2 — things, places, doing
// =====================
KG.unit({
    id: 'a0-05',
    level: 'A0',
    round: 2,
    title: 'Is It Here?',
    ko: '있어요, 없어요',
    icon: '📱',
    goal: 'Say that something is here or not, point to here and over there, and ask where something is.',
    vocab: [
        { ko: '있다', en: 'to be there / to have', emoji: '✅', pos: 'verb', polite: '있어요' },
        { ko: '없다', en: 'to not be there / to not have', emoji: '🚫', pos: 'verb', polite: '없어요' },
        { ko: '여기', en: 'here', emoji: '📌', pos: 'other' },
        { ko: '저기', en: 'over there', emoji: '🔭', pos: 'other' },
        { ko: '어디', en: 'where', emoji: '📍', pos: 'other', note: '어디에 있어요? = Where is it?' },
        { ko: '핸드폰', en: 'cell phone', emoji: '📱', pos: 'noun' },
        { ko: '가방', en: 'bag', emoji: '🎒', pos: 'noun' },
        { ko: '컵', en: 'cup', emoji: '🍵', pos: 'noun' },
        { ko: '소파', en: 'sofa', emoji: '🛋️', pos: 'noun' },
        { ko: '테이블', en: 'table', emoji: '🍽️', pos: 'noun' },
        { ko: '텔레비전', en: 'television, TV', emoji: '📺', pos: 'noun' },
        { ko: '컴퓨터', en: 'computer', emoji: '💻', pos: 'noun' }
    ],
    story: {
        title: "Where's Junho's Phone?",
        extras: "Most scenes take place in the family's cozy living room: a big green sofa, a low wooden table, a big television on the wall, a desk with a computer in the corner, and an armchair by the window. Screens show no letters, and nothing shows any writing or logos.",
        scenes: [
            {
                img: 'a0-05-1',
                art: "Saturday morning in the family's cozy living room. Jian sits on the big green sofa eating a banana. A glass of mango juice stands on the low wooden table in front of him. Nabi the cat naps next to him.",
                lines: [
                    { sp: 'narrator', ko: '이거 뭐예요? 바나나예요.', en: "What's this? It's a banana." },
                    { sp: 'narrator', ko: '지안은 바나나 먹어요. 망고 주스 마셔요.', en: 'Jian eats a banana. He drinks mango juice.' },
                    { sp: 'narrator', ko: '바나나 좋아해요? 네, 좋아해요!', en: 'Does he like bananas? Yes, he does!' },
                    { sp: 'jian', ko: '맛있어요!', en: "It's delicious!" }
                ],
                check: { q: '지안은 주스 마셔요?', en: 'Does Jian drink juice?', options: ['네', '아니요'], answer: 0 }
            },
            {
                img: 'a0-05-2',
                art: 'Wide view of the cozy living room. Jian stands in the middle and points at each thing in turn: the big green sofa, the low wooden table with a cup on it, the big television on the wall, and a computer on a desk in the corner.',
                lines: [
                    { sp: 'narrator', ko: '소파. 소파 있어요.', en: 'A sofa. There is a sofa.' },
                    { sp: 'narrator', ko: '테이블. 테이블 있어요.', en: 'A table. There is a table.' },
                    { sp: 'narrator', ko: '컵. 테이블에 컵 있어요.', en: 'A cup. There is a cup on the table.' },
                    { sp: 'narrator', ko: '텔레비전. 텔레비전 있어요.', en: 'A TV. There is a TV.' },
                    { sp: 'narrator', ko: '컴퓨터. 컴퓨터 있어요.', en: 'A computer. There is a computer.' }
                ],
                check: { q: '텔레비전 있어요?', en: 'Is there a TV?', options: ['네', '아니요'], answer: 0 }
            },
            {
                img: 'a0-05-3',
                art: 'Junho stands in the living room, patting his empty trouser pockets with a worried face. His hands are empty and there is no phone anywhere in sight.',
                lines: [
                    { sp: 'narrator', ko: '준호예요.', en: 'This is Junho.' },
                    { sp: 'junho', ko: '어? 핸드폰… 핸드폰 없어요!', en: 'Huh? My phone… my phone is gone!' },
                    { sp: 'narrator', ko: '없어요. 없어요. 준호는 핸드폰 없어요.', en: "Not there. Not there. Junho doesn't have his phone." },
                    { sp: 'junho', ko: '핸드폰 어디에 있어요?', en: 'Where is my phone?' }
                ],
                check: { q: '준호는 핸드폰 있어요?', en: 'Does Junho have his phone?', options: ['네', '아니요'], answer: 1 }
            },
            {
                img: 'a0-05-4',
                art: 'Junho lifts the green sofa cushions and looks underneath: nothing there. Jian checks the low table: only a cup is on it. Both look puzzled.',
                lines: [
                    { sp: 'junho', ko: '소파에 있어요?', en: 'Is it on the sofa?' },
                    { sp: 'narrator', ko: '아니요. 소파에 없어요.', en: "No. It's not on the sofa." },
                    { sp: 'jian', ko: '테이블에 있어요?', en: 'Is it on the table?' },
                    { sp: 'narrator', ko: '테이블에 컵 있어요. 핸드폰 없어요.', en: "There's a cup on the table. No phone." }
                ],
                check: { q: '핸드폰 소파에 있어요?', en: 'Is the phone on the sofa?', options: ['네', '아니요'], answer: 1 }
            },
            {
                img: 'a0-05-5',
                art: "Minji opens Junho's black work bag on the sofa and shows what is inside: a banana, a chocolate bar and a travel cup. There is no phone in it.",
                lines: [
                    { sp: 'narrator', ko: '가방. 준호 가방이에요.', en: "A bag. It's Junho's bag." },
                    { sp: 'minji', ko: '가방에 있어요?', en: 'Is it in the bag?' },
                    { sp: 'narrator', ko: '가방에 바나나 있어요. 초콜릿 있어요. 컵 있어요.', en: 'In the bag there is a banana. There is chocolate. There is a cup.' },
                    { sp: 'minji', ko: '핸드폰 없어요!', en: 'No phone!' }
                ],
                check: { q: '가방에 초콜릿 있어요?', en: 'Is there chocolate in the bag?', options: ['네', '아니요'], answer: 0 }
            },
            {
                img: 'a0-05-6',
                art: 'In the kitchen, Jian opens the fridge and peeks inside with a cheeky grin. On the shelves: a carton of milk, a bottle of juice, some apples and a cake. No cola, and no phone.',
                lines: [
                    { sp: 'jian', ko: '여기 있어요?', en: 'Is it here?' },
                    { sp: 'narrator', ko: '여기 우유 있어요. 주스 있어요. 케이크 있어요.', en: 'Here there is milk. There is juice. There is cake.' },
                    { sp: 'narrator', ko: '콜라 없어요. 핸드폰도 없어요!', en: 'No cola. And no phone either!' },
                    { sp: 'jian', ko: '케이크 있어요! 케이크 먹어요!', en: "There's cake! Let's eat cake!" }
                ],
                check: { q: '여기 콜라 있어요?', en: 'Is there cola here?', options: ['네', '아니요'], answer: 1 }
            },
            {
                img: 'a0-05-7',
                art: 'Grandma stands at the living-room door and points far across the room at the armchair by the window. Nabi the cat is curled up asleep on the armchair cushion, and the corner of a smartphone peeks out from under her fluffy tummy.',
                lines: [
                    { sp: 'halmeoni', ko: '저기! 저기 있어요!', en: "Over there! It's over there!" },
                    { sp: 'narrator', ko: '저기. 저기 나비 있어요.', en: 'Over there. Nabi is over there.' },
                    { sp: 'narrator', ko: '핸드폰 저기 있어요!', en: 'The phone is over there!' }
                ],
                check: { q: '핸드폰 어디에 있어요?', en: 'Where is the phone?', options: ['저기', '가방에'], answer: 0 }
            },
            {
                img: 'a0-05-8',
                art: 'Junho holds up his smartphone with a big relieved smile. Nabi, now awake on the armchair, looks grumpy. Jian laughs and pats Nabi.',
                lines: [
                    { sp: 'junho', ko: '핸드폰! 여기 있어요!', en: 'My phone! Here it is!' },
                    { sp: 'narrator', ko: '핸드폰 어디에 있어요? 여기 있어요!', en: 'Where is the phone? Here it is!' },
                    { sp: 'narrator', ko: '준호는 핸드폰 있어요.', en: 'Junho has his phone.' },
                    { sp: 'jian', ko: '나비, 핸드폰 좋아해요?', en: 'Nabi, do you like phones?' }
                ],
                check: { q: '준호는 핸드폰 있어요?', en: 'Does Junho have his phone?', options: ['네', '아니요'], answer: 0 }
            }
        ]
    },
    patterns: [
        {
            form: 'N 있어요 / N 없어요',
            meaning: 'there is N, I have N / there is no N, I do not have N',
            note: '있어요 = it is here, I have it. 없어요 = it is not here, I do not have it. In everyday speech the little marker 이/가 is often dropped (핸드폰 있어요); you will add it in A1 (핸드폰이 있어요).',
            examples: [
                { ko: '케이크 있어요!', en: "There's cake!" },
                { ko: '콜라 없어요.', en: "There's no cola." },
                { ko: '준호는 핸드폰 없어요.', en: "Junho doesn't have his phone." }
            ]
        },
        {
            form: '여기 / 저기 / 어디',
            meaning: 'here / over there / where',
            note: '어디에 있어요? asks where something is. Point and answer 여기 있어요 (it is here) or 저기 있어요 (it is over there). 여기 있어요 is also what you say when you hand something to someone.',
            examples: [
                { ko: '핸드폰 어디에 있어요?', en: 'Where is the phone?' },
                { ko: '저기 있어요!', en: "It's over there!" },
                { ko: '여기 있어요.', en: 'Here it is.' }
            ]
        },
        {
            form: 'Place + 에 있어요',
            meaning: 'is in / on / at a place',
            note: '에 marks the place: 소파에 (on the sofa), 가방에 (in the bag), 테이블에 (on the table).',
            examples: [
                { ko: '소파에 있어요?', en: 'Is it on the sofa?' },
                { ko: '가방에 없어요.', en: "It's not in the bag." },
                { ko: '테이블에 컵 있어요.', en: "There's a cup on the table." }
            ]
        }
    ],
    sentences: [
        { ko: '핸드폰 있어요.', en: 'I have my phone.', blank: '있어요', alts: ['없어요', '먹어요', '마셔요'] },
        { ko: '콜라 없어요.', en: "There's no cola.", blank: '없어요', alts: ['있어요', '마셔요', '좋아해요'] },
        { ko: '핸드폰 어디에 있어요?', en: 'Where is the phone?', blank: '어디', alts: ['여기', '뭐', '저기'] },
        { ko: '여기 있어요.', en: "It's here.", blank: '여기', alts: ['저기', '어디', '이거'] },
        { ko: '저기 있어요!', en: "It's over there!", blank: '저기', alts: ['여기', '어디', '저거'] },
        { ko: '소파에 있어요.', en: "It's on the sofa.", blank: '에', alts: ['는', '도', '요'] },
        { ko: '가방에 없어요.', en: "It's not in the bag.", blank: '가방', alts: ['소파', '컴퓨터', '텔레비전'] },
        { ko: '테이블에 컵 있어요.', en: "There's a cup on the table.", blank: '컵', alts: ['소파', '텔레비전', '컴퓨터'] },
        { ko: '컴퓨터 있어요?', en: 'Is there a computer?' },
        { ko: '네, 있어요.', en: 'Yes, there is.', blank: '있어요', alts: ['없어요', '아니에요', '안'] },
        { ko: '아니요, 없어요.', en: "No, there isn't.", blank: '없어요', alts: ['있어요', '먹어요', '이에요'] },
        { ko: '핸드폰도 없어요.', en: "There's no phone either.", blank: '도', alts: ['는', '에', '요'] }
    ]
});

KG.unit({
    id: 'a0-06',
    level: 'A0',
    round: 2,
    title: 'Go and Buy',
    ko: '가요, 사요',
    icon: '🛒',
    goal: 'Say where people go and come, what they buy, and link sentences with 그리고 and 그런데.',
    vocab: [
        { ko: '가다', en: 'to go', emoji: '🚶', pos: 'verb', polite: '가요' },
        { ko: '오다', en: 'to come', emoji: '↩️', pos: 'verb', polite: '와요', note: '오 + 아요 blends into 와요.' },
        { ko: '사다', en: 'to buy', emoji: '💳', pos: 'verb', polite: '사요' },
        { ko: '학교', en: 'school', emoji: '🏫', pos: 'noun' },
        { ko: '카페', en: 'café', emoji: '🧋', pos: 'noun' },
        { ko: '마트', en: 'supermarket', emoji: '🛒', pos: 'noun' },
        { ko: '공원', en: 'park', emoji: '🌳', pos: 'noun' },
        { ko: '집', en: 'home, house', emoji: '🏠', pos: 'noun' },
        { ko: '그리고', en: 'and (then)', emoji: '➕', pos: 'other' },
        { ko: '그런데', en: 'but, however', emoji: '↪️', pos: 'other' }
    ],
    story: {
        title: 'Going Places',
        extras: 'The ice-cream seller in the park is a cheerful Korean man in his sixties with a white cap and a red-and-white striped apron, standing by a small white ice-cream cart. No building, shop, cart or package shows any signs, letters or logos.',
        scenes: [
            {
                img: 'a0-06-1',
                art: "Morning in the family living room. Jian, dressed for school, spreads his arms and looks around, confused. Grandma points across the room at Jian's small yellow school bag lying on the green sofa. A cup stands on the low table.",
                lines: [
                    { sp: 'jian', ko: '할머니, 가방 어디에 있어요?', en: 'Grandma, where is my bag?' },
                    { sp: 'halmeoni', ko: '저기 있어요. 소파에 있어요.', en: "It's over there. It's on the sofa." },
                    { sp: 'narrator', ko: '가방은 소파에 있어요. 테이블에 없어요.', en: "The bag is on the sofa. It's not on the table." }
                ],
                check: { q: '가방 어디에 있어요?', en: 'Where is the bag?', options: ['소파에', '테이블에'], answer: 0 }
            },
            {
                img: 'a0-06-2',
                art: 'Outside the apartment building on a sunny morning. Jian, wearing his yellow school bag, walks toward a school building in the distance, waving over his shoulder. Grandma waves from the doorway.',
                lines: [
                    { sp: 'narrator', ko: '학교. 학교예요.', en: "School. It's a school." },
                    { sp: 'narrator', ko: '가요. 가요.', en: 'Goes. Goes.' },
                    { sp: 'narrator', ko: '지안은 학교에 가요.', en: 'Jian goes to school.' },
                    { sp: 'jian', ko: '학교에 가요!', en: "I'm going to school!" }
                ],
                check: { q: '지안은 학교에 가요?', en: 'Does Jian go to school?', options: ['네', '아니요'], answer: 0 }
            },
            {
                img: 'a0-06-3',
                art: 'Minji sits at a small table in a cozy café with plants and warm lights, smiling and holding a cup of coffee.',
                lines: [
                    { sp: 'narrator', ko: '카페. 카페예요.', en: "A café. It's a café." },
                    { sp: 'narrator', ko: '민지는 카페에 가요.', en: 'Minji goes to a café.' },
                    { sp: 'narrator', ko: '그리고 커피 마셔요.', en: 'And she drinks coffee.' },
                    { sp: 'minji', ko: '음, 커피 맛있어요!', en: 'Mmm, the coffee is delicious!' }
                ],
                check: { q: '민지는 카페에 가요? 아니면 학교에 가요?', en: 'Does Minji go to the café, or to school?', options: ['카페에 가요', '학교에 가요'], answer: 0 }
            },
            {
                img: 'a0-06-4',
                art: 'A bright supermarket with fruit and milk on the shelves. Grandma pushes a small shopping cart and puts a bunch of bananas into it. A carton of milk and a loaf of bread are already in the cart.',
                lines: [
                    { sp: 'narrator', ko: '마트. 마트예요.', en: "A supermarket. It's a supermarket." },
                    { sp: 'narrator', ko: '할머니는 마트에 가요.', en: 'Grandma goes to the supermarket.' },
                    { sp: 'narrator', ko: '사요. 사요. 할머니는 바나나 사요.', en: 'Buys. Buys. Grandma buys bananas.' },
                    { sp: 'narrator', ko: '그리고 우유 사요. 빵 사요.', en: 'And she buys milk. She buys bread.' }
                ],
                check: { q: '할머니는 바나나 사요?', en: 'Does Grandma buy bananas?', options: ['네', '아니요'], answer: 0 }
            },
            {
                img: 'a0-06-5',
                art: 'In the supermarket, Grandma stands in front of an empty strawberry basket, looking disappointed. Right next to it is a big pile of ripe mangoes, and she reaches for one.',
                lines: [
                    { sp: 'halmeoni', ko: '딸기 사요…', en: "I'll buy strawberries…" },
                    { sp: 'narrator', ko: '그런데 딸기 없어요!', en: 'But there are no strawberries!' },
                    { sp: 'narrator', ko: '딸기 없어요. 그런데 망고 있어요.', en: 'There are no strawberries. But there are mangoes.' },
                    { sp: 'halmeoni', ko: '망고 사요!', en: "I'll buy mangoes!" }
                ],
                check: { q: '마트에 딸기 있어요?', en: 'Are there strawberries at the supermarket?', options: ['네', '아니요'], answer: 1 }
            },
            {
                img: 'a0-06-6',
                art: 'Afternoon in a green park with big trees and a small pond. Jian, still wearing his yellow school bag, runs happily across the grass. Grandma walks behind him smiling, holding her shopping bag with bananas and mangoes peeking out.',
                lines: [
                    { sp: 'narrator', ko: '공원. 공원이에요.', en: "A park. It's a park." },
                    { sp: 'narrator', ko: '지안은 공원에 가요. 할머니도 공원에 가요.', en: 'Jian goes to the park. Grandma goes to the park too.' },
                    { sp: 'jian', ko: '공원 좋아해요!', en: 'I like the park!' }
                ],
                check: { q: '할머니도 공원에 가요?', en: 'Does Grandma go to the park too?', options: ['네', '아니요'], answer: 0 }
            },
            {
                img: 'a0-06-7',
                art: 'In the park, Jian pulls Grandma by the hand toward a small white ice-cream cart. The ice-cream seller hands Jian a vanilla ice-cream cone. Grandma smiles and nods.',
                lines: [
                    { sp: 'jian', ko: '할머니! 아이스크림 사요!', en: "Grandma! Let's buy ice cream!" },
                    { sp: 'halmeoni', ko: '네, 사요!', en: "Okay, let's buy some!" },
                    { sp: 'staffM', as: '아이스크림 아저씨', ko: '여기 있어요!', en: 'Here you go!' },
                    { sp: 'narrator', ko: '지안은 아이스크림 먹어요. 맛있어요!', en: "Jian eats ice cream. It's delicious!" }
                ],
                check: { q: '할머니는 아이스크림 사요?', en: 'Does Grandma buy ice cream?', options: ['네', '아니요'], answer: 0 }
            },
            {
                img: 'a0-06-8',
                art: "Evening, seen from inside the family's front hallway. The front door opens and Grandma and Jian come in with the shopping bag. Nabi the cat runs to greet them.",
                lines: [
                    { sp: 'narrator', ko: '집. 집이에요.', en: "Home. It's home." },
                    { sp: 'narrator', ko: '와요. 와요. 할머니는 집에 와요.', en: 'Comes. Comes. Grandma comes home.' },
                    { sp: 'narrator', ko: '지안도 집에 와요.', en: 'Jian comes home too.' },
                    { sp: 'narrator', ko: '나비는 집에 있어요.', en: 'Nabi is at home.' }
                ],
                check: { q: '지안은 집에 와요?', en: 'Does Jian come home?', options: ['네', '아니요'], answer: 0 }
            }
        ]
    },
    patterns: [
        {
            form: 'Place + 에 가요 / 와요',
            meaning: 'go to / come to a place',
            note: '가요 = go (away from where you are). 와요 = come (toward where you are). 에 marks where you are going: 학교에 가요, 집에 와요.',
            examples: [
                { ko: '지안은 학교에 가요.', en: 'Jian goes to school.' },
                { ko: '민지는 카페에 가요.', en: 'Minji goes to a café.' },
                { ko: '할머니는 집에 와요.', en: 'Grandma comes home.' }
            ]
        },
        {
            form: 'N 사요',
            meaning: 'buy N',
            note: "The thing you buy comes first: 바나나 사요. Said excitedly to someone, it also means let's buy it: 아이스크림 사요!",
            examples: [
                { ko: '할머니는 바나나 사요.', en: 'Grandma buys bananas.' },
                { ko: '아이스크림 사요!', en: "Let's buy ice cream!" }
            ]
        },
        {
            form: '그리고 / 그런데',
            meaning: 'and (then) / but',
            note: 'Start the next sentence with 그리고 to add something, or with 그런데 when something is different from what you expect.',
            examples: [
                { ko: '바나나 사요. 그리고 우유 사요.', en: 'I buy bananas. And I buy milk.' },
                { ko: '딸기 사요. 그런데 딸기 없어요!', en: "I'll buy strawberries. But there are none!" }
            ]
        }
    ],
    sentences: [
        { ko: '학교에 가요.', en: 'I go to school.', blank: '가요', alts: ['와요', '사요', '마셔요'] },
        { ko: '집에 와요.', en: 'I come home.', blank: '와요', alts: ['가요', '사요', '먹어요'] },
        { ko: '마트에 가요.', en: 'I go to the supermarket.', blank: '마트', alts: ['우유', '커피', '바나나'] },
        { ko: '바나나 사요.', en: 'I buy bananas.', blank: '사요', alts: ['가요', '와요', '마셔요'] },
        { ko: '카페에 가요.', en: 'I go to a café.', blank: '에', alts: ['는', '도', '요'] },
        { ko: '민지는 카페에 가요.', en: 'Minji goes to a café.', blank: '카페', alts: ['커피', '우유', '물'] },
        { ko: '공원에 가요.', en: 'I go to the park.', blank: '공원', alts: ['핸드폰', '컵', '망고'] },
        { ko: '바나나 사요. 그리고 우유 사요.', en: 'I buy bananas. And I buy milk.', blank: '그리고', alts: ['그런데', '아니면', '여기'] },
        { ko: '그런데 딸기 없어요.', en: 'But there are no strawberries.', blank: '그런데', alts: ['그리고', '아니면', '저기'] },
        { ko: '아이스크림 사요!', en: "Let's buy ice cream!" },
        { ko: '할머니도 공원에 가요.', en: 'Grandma goes to the park too.', blank: '도', alts: ['요', '에', '안'] },
        { ko: '지안은 집에 와요.', en: 'Jian comes home.', blank: '집', alts: ['우유', '빵', '물'] }
    ]
});

KG.unit({
    id: 'a0-07',
    level: 'A0',
    round: 2,
    title: "Let's Do It Together",
    ko: '같이 해요',
    icon: '🎮',
    goal: "Name fun activities with 해요, say what you don't do, and invite someone: 우리 같이 ___ 해요!",
    vocab: [
        { ko: '하다', en: 'to do', emoji: '🙌', pos: 'verb', polite: '해요' },
        { ko: '게임하다', en: 'to play (video) games', emoji: '🎮', pos: 'verb', polite: '게임해요', forms: ['게임'] },
        { ko: '공부하다', en: 'to study', emoji: '📚', pos: 'verb', polite: '공부해요', forms: ['공부'] },
        { ko: '요가하다', en: 'to do yoga', emoji: '🧘', pos: 'verb', polite: '요가해요', forms: ['요가'] },
        { ko: '운동하다', en: 'to exercise, work out', emoji: '🏃', pos: 'verb', polite: '운동해요', forms: ['운동'] },
        { ko: '쇼핑하다', en: 'to go shopping', emoji: '🛍️', pos: 'verb', polite: '쇼핑해요', forms: ['쇼핑'] },
        { ko: '수영하다', en: 'to swim', emoji: '🏊', pos: 'verb', polite: '수영해요', forms: ['수영'] },
        { ko: '파티하다', en: 'to have a party', emoji: '🎉', pos: 'verb', polite: '파티해요', forms: ['파티'] },
        { ko: '같이', en: 'together', emoji: '👯', pos: 'other', note: 'Sounds like 가치.' },
        { ko: '우리', en: 'we, us', emoji: '👨‍👩‍👦', pos: 'other' }
    ],
    story: {
        title: 'A Busy Saturday',
        extras: 'No screen, book, bag or sign shows any letters; the video game on the TV shows only colorful cartoon cars and shapes.',
        scenes: [
            {
                img: 'a0-07-1',
                art: 'The front door of the apartment. Grandma comes back from the supermarket holding a shopping bag with mangoes and bananas sticking out. Jian runs to the door to look inside the bag.',
                lines: [
                    { sp: 'narrator', ko: '할머니는 마트에 가요. 그리고 집에 와요.', en: 'Grandma goes to the supermarket. And she comes home.' },
                    { sp: 'narrator', ko: '할머니는 망고 사요. 바나나 사요.', en: 'Grandma buys mangoes. She buys bananas.' },
                    { sp: 'jian', ko: '와! 망고! 망고 먹어요!', en: "Wow! Mangoes! Let's eat mangoes!" }
                ],
                check: { q: '할머니는 뭐 사요?', en: 'What does Grandma buy?', options: ['망고', '커피'], answer: 0 }
            },
            {
                img: 'a0-07-2',
                art: 'Jian sits on the green sofa holding a game controller with both hands, leaning forward with excitement. The TV shows a colorful cartoon racing game.',
                lines: [
                    { sp: 'narrator', ko: '게임. 게임이에요.', en: "A game. It's a game." },
                    { sp: 'narrator', ko: '해요. 게임해요.', en: 'Do. He plays games.' },
                    { sp: 'narrator', ko: '지안은 게임해요.', en: 'Jian plays games.' },
                    { sp: 'jian', ko: '게임 좋아해요!', en: 'I like games!' }
                ],
                check: { q: '지안은 게임해요?', en: 'Is Jian playing games?', options: ['네', '아니요'], answer: 0 }
            },
            {
                img: 'a0-07-3',
                art: 'Minji studies at the dining table with open books and a pencil, looking focused. Behind her, Jian is still on the sofa playing his video game. Minji turns and points at the books.',
                lines: [
                    { sp: 'narrator', ko: '민지는 공부해요. 공부해요.', en: 'Minji studies. She studies.' },
                    { sp: 'narrator', ko: '지안은 공부 안 해요. 게임해요!', en: "Jian doesn't study. He plays games!" },
                    { sp: 'minji', ko: '지안, 공부해요!', en: 'Jian, study!' },
                    { sp: 'jian', ko: '아니요! 게임해요!', en: "No! I'm playing games!" }
                ],
                check: { q: '지안은 공부해요?', en: 'Does Jian study?', options: ['네', '아니요'], answer: 1 }
            },
            {
                img: 'a0-07-4',
                art: 'Grandma stands on a purple yoga mat in the living room doing a calm tree pose. Next to her, Nabi the cat stretches out long on the mat, as if doing yoga too.',
                lines: [
                    { sp: 'narrator', ko: '요가. 할머니는 요가해요.', en: 'Yoga. Grandma does yoga.' },
                    { sp: 'narrator', ko: '나비도 요가해요!', en: 'Nabi does yoga too!' },
                    { sp: 'halmeoni', ko: '저는 요가 좋아해요.', en: 'I like yoga.' }
                ],
                check: { q: '할머니는 요가해요? 아니면 게임해요?', en: 'Does Grandma do yoga, or play games?', options: ['요가해요', '게임해요'], answer: 0 }
            },
            {
                img: 'a0-07-5',
                art: 'A green park with big trees. Junho, his shirt sleeves rolled up and wearing sneakers, does push-ups on the grass, sweating but smiling.',
                lines: [
                    { sp: 'narrator', ko: '준호는 공원에 가요.', en: 'Junho goes to the park.' },
                    { sp: 'narrator', ko: '운동. 운동해요. 준호는 운동해요.', en: 'Exercise. He exercises. Junho works out.' },
                    { sp: 'junho', ko: '운동 좋아해요!', en: 'I like working out!' }
                ],
                check: { q: '준호는 어디에 가요?', en: 'Where does Junho go?', options: ['공원에', '카페에'], answer: 0 }
            },
            {
                img: 'a0-07-6',
                art: 'A bright shopping street. Minji walks happily with shopping bags on her arm, holding up a new yellow handbag in one hand and a cute cup in the other.',
                lines: [
                    { sp: 'narrator', ko: '민지는 쇼핑해요.', en: 'Minji goes shopping.' },
                    { sp: 'narrator', ko: '쇼핑. 쇼핑해요.', en: 'Shopping. She shops.' },
                    { sp: 'narrator', ko: '민지는 가방 사요. 그리고 컵 사요.', en: 'Minji buys a bag. And she buys a cup.' },
                    { sp: 'minji', ko: '쇼핑 좋아해요!', en: 'I like shopping!' }
                ],
                check: { q: '민지는 쇼핑해요?', en: 'Does Minji go shopping?', options: ['네', '아니요'], answer: 0 }
            },
            {
                img: 'a0-07-7',
                art: 'Back in the living room. Jian wears swim goggles on his forehead and a yellow swim ring around his waist; a thought bubble above him shows him swimming happily in a pool (picture only). Grandma smiles, shakes her head and holds up two game controllers.',
                lines: [
                    { sp: 'jian', ko: '할머니! 우리 같이 수영해요!', en: "Grandma! Let's swim together!" },
                    { sp: 'narrator', ko: '수영. 수영해요.', en: 'Swimming. To swim.' },
                    { sp: 'halmeoni', ko: '수영? 아니요, 수영 안 해요.', en: "Swimming? No, I don't swim." },
                    { sp: 'halmeoni', ko: '우리 같이 게임해요!', en: "Let's play games together!" },
                    { sp: 'jian', ko: '와! 같이 게임해요!', en: "Yay! Let's play together!" }
                ],
                check: { q: '할머니는 수영해요?', en: 'Does Grandma swim?', options: ['네', '아니요'], answer: 1 }
            },
            {
                img: 'a0-07-8',
                art: 'Evening in the living room. Junho comes in with a pizza and a bottle of cola, Minji carries a cake, and Grandma and Jian put down their game controllers. Everyone cheers. Nabi wears a tiny party hat.',
                lines: [
                    { sp: 'minji', ko: '우리 같이 파티해요!', en: "Let's have a party together!" },
                    { sp: 'narrator', ko: '파티. 파티해요!', en: 'A party. They have a party!' },
                    { sp: 'narrator', ko: '피자 먹어요. 케이크 먹어요. 콜라 마셔요.', en: 'They eat pizza. They eat cake. They drink cola.' },
                    { sp: 'jian', ko: '파티 좋아해요!', en: 'I like parties!' }
                ],
                check: { q: '같이 파티해요?', en: 'Do they have a party together?', options: ['네', '아니요'], answer: 0 }
            }
        ]
    },
    patterns: [
        {
            form: 'N + 해요',
            meaning: 'do N',
            note: '해요 means do. Many activity words, including English ones, become verbs with 해요: 게임해요, 요가해요, 쇼핑해요, 파티해요.',
            examples: [
                { ko: '지안은 게임해요.', en: 'Jian plays games.' },
                { ko: '할머니는 요가해요.', en: 'Grandma does yoga.' },
                { ko: '민지는 쇼핑해요.', en: 'Minji goes shopping.' }
            ]
        },
        {
            form: 'N 안 해요',
            meaning: 'not do N',
            note: 'With these verbs, 안 goes between the activity and 해요: 공부 안 해요, 수영 안 해요.',
            examples: [
                { ko: '지안은 공부 안 해요.', en: "Jian doesn't study." },
                { ko: '수영 안 해요.', en: "I don't swim." }
            ]
        },
        {
            form: '우리 같이 ___ 해요!',
            meaning: "Let's do ___ together!",
            note: "우리 = we. 같이 (say 가치) = together. Said as an invitation, 해요 means let's do it.",
            examples: [
                { ko: '우리 같이 게임해요!', en: "Let's play games together!" },
                { ko: '우리 같이 파티해요!', en: "Let's have a party!" }
            ]
        }
    ],
    sentences: [
        { ko: '지안은 게임해요.', en: 'Jian plays games.', blank: '게임해요', alts: ['공부해요', '요가해요', '수영해요'] },
        { ko: '할머니는 요가해요.', en: 'Grandma does yoga.', blank: '요가', alts: ['게임', '쇼핑', '파티'] },
        { ko: '민지는 공부해요.', en: 'Minji studies.', blank: '공부', alts: ['운동', '수영', '게임'] },
        { ko: '저는 공부 안 해요.', en: "I don't study.", blank: '안', alts: ['네', '도', '같이'] },
        { ko: '준호는 운동해요.', en: 'Junho works out.', blank: '운동해요', alts: ['쇼핑해요', '요가해요', '파티해요'] },
        { ko: '우리 같이 게임해요!', en: "Let's play games together!", blank: '같이', alts: ['저도', '여기', '안'] },
        { ko: '우리 같이 파티해요!', en: "Let's have a party together!", blank: '우리', alts: ['저는', '이거', '어디'] },
        { ko: '민지는 쇼핑해요.', en: 'Minji goes shopping.', blank: '쇼핑해요', alts: ['수영해요', '공부해요', '운동해요'] },
        { ko: '수영 좋아해요?', en: 'Do you like swimming?' },
        { ko: '아니요, 수영 안 해요.', en: "No, I don't swim.", blank: '아니요', alts: ['네', '같이', '우리'] },
        { ko: '같이 해요!', en: "Let's do it together!", blank: '해요', alts: ['있어요', '없어요', '아니에요'] },
        { ko: '공원에 가요. 그리고 운동해요.', en: 'I go to the park. And I work out.', blank: '그리고', alts: ['그런데', '아니면', '같이'] }
    ]
});

KG.unit({
    id: 'a0-08',
    level: 'A0',
    round: 2,
    review: true,
    title: 'Review: Party Time',
    ko: '우리 같이 파티해요',
    icon: '🎉',
    goal: 'Review round 2: shop for a party, find what is missing and play together, with words from rounds 1 and 2.',
    vocab: [
        { ko: '파티하다', en: 'to have a party', emoji: '🎉', pos: 'verb', polite: '파티해요', forms: ['파티'] },
        { ko: '게임하다', en: 'to play (video) games', emoji: '🎮', pos: 'verb', polite: '게임해요', forms: ['게임'] },
        { ko: '같이', en: 'together', emoji: '👯', pos: 'other', note: 'Sounds like 가치.' },
        { ko: '우리', en: 'we, us', emoji: '👨‍👩‍👦', pos: 'other' },
        { ko: '가다', en: 'to go', emoji: '🚶', pos: 'verb', polite: '가요' },
        { ko: '오다', en: 'to come', emoji: '↩️', pos: 'verb', polite: '와요', note: '오 + 아요 blends into 와요.' },
        { ko: '사다', en: 'to buy', emoji: '💳', pos: 'verb', polite: '사요' },
        { ko: '마트', en: 'supermarket', emoji: '🛒', pos: 'noun' },
        { ko: '있다', en: 'to be there / to have', emoji: '✅', pos: 'verb', polite: '있어요' },
        { ko: '없다', en: 'to not be there / to not have', emoji: '🚫', pos: 'verb', polite: '없어요' },
        { ko: '어디', en: 'where', emoji: '📍', pos: 'other', note: '어디에 있어요? = Where is it?' },
        { ko: '저기', en: 'over there', emoji: '🔭', pos: 'other' },
        { ko: '그리고', en: 'and (then)', emoji: '➕', pos: 'other' },
        { ko: '그런데', en: 'but, however', emoji: '↪️', pos: 'other' }
    ],
    story: {
        title: 'Party Shopping',
        extras: 'The supermarket is bright and clean. No building, shelf, box, can or package shows any signs, letters or logos, and the video game on the TV shows only colorful cartoon cars.',
        scenes: [
            {
                img: 'a0-08-1',
                art: 'The family living room. Minji claps her hands with excitement. Jian jumps up and down on the green sofa. Junho stands by the open fridge, which is almost empty, and shrugs.',
                lines: [
                    { sp: 'minji', ko: '우리 같이 파티해요!', en: "Let's have a party together!" },
                    { sp: 'jian', ko: '와! 파티 좋아해요!', en: 'Yay! I like parties!' },
                    { sp: 'junho', ko: '그런데 피자 없어요. 콜라도 없어요.', en: "But there's no pizza. And no cola either." },
                    { sp: 'jian', ko: '마트에 가요! 같이 가요!', en: "Let's go to the supermarket! Let's go together!" }
                ],
                check: { q: '피자 있어요?', en: 'Is there any pizza?', options: ['네', '아니요'], answer: 1 }
            },
            {
                img: 'a0-08-2',
                art: 'A sunny street. Junho and Jian walk side by side. Right next to them is a green park with big trees; across the street is a small café. Far down the street, Junho points at a big supermarket building.',
                lines: [
                    { sp: 'narrator', ko: '준호는 마트에 가요. 지안도 같이 가요.', en: 'Junho goes to the supermarket. Jian goes with him.' },
                    { sp: 'narrator', ko: '여기 공원 있어요. 저기 카페 있어요.', en: "Here there's a park. Over there there's a café." },
                    { sp: 'jian', ko: '마트 어디에 있어요?', en: 'Where is the supermarket?' },
                    { sp: 'junho', ko: '저기 있어요!', en: "It's over there!" }
                ],
                check: { q: '준호는 카페에 가요? 아니면 마트에 가요?', en: 'Is Junho going to the café, or to the supermarket?', options: ['카페에 가요', '마트에 가요'], answer: 1 }
            },
            {
                img: 'a0-08-3',
                art: 'Inside the supermarket. Junho puts a frozen pizza, a big bottle of cola and a bottle of orange juice into a shopping cart. Jian watches.',
                lines: [
                    { sp: 'narrator', ko: '마트예요. 준호는 피자 사요.', en: "It's the supermarket. Junho buys pizza." },
                    { sp: 'narrator', ko: '그리고 콜라 사요. 주스 사요.', en: 'And he buys cola. He buys juice.' },
                    { sp: 'junho', ko: '피자 있어요. 콜라 있어요. 주스 있어요!', en: "We've got pizza. We've got cola. We've got juice!" }
                ],
                check: { q: '준호는 피자 사요?', en: 'Does Junho buy pizza?', options: ['네', '아니요'], answer: 0 }
            },
            {
                img: 'a0-08-4',
                art: 'Jian hugs a tub of ice cream and a big chocolate bar and tries to sneak them into the cart, making puppy eyes. Junho shakes his head and points back at the freezer.',
                lines: [
                    { sp: 'narrator', ko: '지안은 아이스크림 좋아해요. 초콜릿 좋아해요.', en: 'Jian likes ice cream. He likes chocolate.' },
                    { sp: 'jian', ko: '아이스크림 사요! 초콜릿 사요!', en: "Let's buy ice cream! Let's buy chocolate!" },
                    { sp: 'junho', ko: '아니요. 아이스크림 안 사요.', en: "No. We're not buying ice cream." },
                    { sp: 'jian', ko: '그런데… 맛있어요!', en: "But… it's delicious!" }
                ],
                check: { q: '준호는 아이스크림 사요?', en: 'Does Junho buy ice cream?', options: ['네', '아니요'], answer: 1 }
            },
            {
                img: 'a0-08-5',
                art: 'The front hallway at home. Junho and Jian come in the door carrying shopping bags with a pizza box, cola and juice inside. Minji looks into the bags. Junho clutches his head in shock: there is no cake.',
                lines: [
                    { sp: 'narrator', ko: '준호는 집에 와요. 지안도 와요.', en: 'Junho comes home. Jian comes too.' },
                    { sp: 'minji', ko: '케이크 어디에 있어요?', en: 'Where is the cake?' },
                    { sp: 'junho', ko: '어? 케이크… 없어요!', en: "Huh? The cake… there isn't one!" },
                    { sp: 'jian', ko: '케이크 없어요?', en: 'No cake?' }
                ],
                check: { q: '케이크 있어요?', en: 'Is there a cake?', options: ['네', '아니요'], answer: 1 }
            },
            {
                img: 'a0-08-6',
                art: 'The front door opens again and Grandma comes in, smiling and holding up a big strawberry cake. Jian runs to hug her; Minji and Junho cheer.',
                lines: [
                    { sp: 'narrator', ko: '할머니도 집에 와요.', en: 'Grandma comes home too.' },
                    { sp: 'halmeoni', ko: '케이크 여기 있어요!', en: 'Here is the cake!' },
                    { sp: 'narrator', ko: '딸기 케이크예요!', en: "It's a strawberry cake!" },
                    { sp: 'jian', ko: '와! 할머니, 사랑해요!', en: 'Yay! Grandma, I love you!' }
                ],
                check: { q: '이거 뭐예요?', en: 'What is this?', options: ['케이크', '피자'], answer: 0 }
            },
            {
                img: 'a0-08-7',
                art: 'Party time in the living room: pizza, cola and the strawberry cake on the low table. Jian, Grandma, Minji and Junho sit on the sofa, all holding game controllers and laughing at the TV, which shows a colorful cartoon racing game.',
                lines: [
                    { sp: 'narrator', ko: '파티해요! 피자 먹어요. 콜라 마셔요.', en: "It's party time! They eat pizza. They drink cola." },
                    { sp: 'jian', ko: '우리 같이 게임해요!', en: "Let's play games together!" },
                    { sp: 'narrator', ko: '할머니도 게임해요. 같이 게임해요!', en: 'Grandma plays too. They play games together!' },
                    { sp: 'halmeoni', ko: '게임 좋아해요!', en: 'I like games!' }
                ],
                check: { q: '할머니도 게임해요?', en: 'Does Grandma play games too?', options: ['네', '아니요'], answer: 0 }
            },
            {
                img: 'a0-08-8',
                art: 'Jian looks around the living room. Minji laughs and points far across the room: Nabi the cat is curled up asleep inside the empty pizza box on the floor.',
                lines: [
                    { sp: 'jian', ko: '나비 어디에 있어요?', en: 'Where is Nabi?' },
                    { sp: 'minji', ko: '저기! 저기 있어요!', en: "Over there! She's over there!" },
                    { sp: 'narrator', ko: '나비도 파티해요!', en: 'Nabi is partying too!' }
                ],
                check: { q: '나비 어디에 있어요?', en: 'Where is Nabi?', options: ['저기', '마트에'], answer: 0 }
            }
        ]
    },
    patterns: [
        {
            form: 'N 있어요? — 네, 있어요. / 아니요, 없어요.',
            meaning: 'Is there N? Do you have N? — Yes. / No.',
            note: 'Round 2 recap. Ask where with 어디에 있어요? and answer 여기 있어요 or 저기 있어요.',
            examples: [
                { ko: '케이크 있어요?', en: 'Is there a cake?' },
                { ko: '아니요, 없어요.', en: "No, there isn't." },
                { ko: '나비 어디에 있어요? 저기 있어요!', en: "Where is Nabi? She's over there!" }
            ]
        },
        {
            form: 'Place + 에 가요 / 와요 · N 사요',
            meaning: 'go to / come to a place · buy N',
            note: 'Link sentences with 그리고 (and) and 그런데 (but).',
            examples: [
                { ko: '마트에 가요. 그리고 피자 사요.', en: 'I go to the supermarket. And I buy pizza.' },
                { ko: '준호는 집에 와요.', en: 'Junho comes home.' },
                { ko: '그런데 케이크 없어요!', en: "But there's no cake!" }
            ]
        },
        {
            form: '우리 같이 ___ 해요!',
            meaning: "Let's ___ together!",
            note: "It works with 가요 too: 같이 가요! means let's go together.",
            examples: [
                { ko: '우리 같이 파티해요!', en: "Let's have a party!" },
                { ko: '같이 가요!', en: "Let's go together!" }
            ]
        }
    ],
    sentences: [
        { ko: '우리 같이 파티해요!', en: "Let's have a party together!", blank: '파티해요', alts: ['공부해요', '없어요', '와요'] },
        { ko: '피자 없어요.', en: "There's no pizza.", blank: '없어요', alts: ['있어요', '사요', '와요'] },
        { ko: '같이 가요!', en: "Let's go together!", blank: '가요', alts: ['와요', '사요', '없어요'] },
        { ko: '마트 어디에 있어요?', en: 'Where is the supermarket?', blank: '어디', alts: ['뭐', '여기', '저기'] },
        { ko: '저기 있어요!', en: "It's over there!", blank: '저기', alts: ['여기', '어디', '뭐'] },
        { ko: '준호는 피자 사요.', en: 'Junho buys pizza.', blank: '사요', alts: ['가요', '와요', '있어요'] },
        { ko: '그리고 콜라 사요.', en: 'And he buys cola.', blank: '그리고', alts: ['그런데', '아니면', '어디'] },
        { ko: '아이스크림 안 사요.', en: "We're not buying ice cream.", blank: '안', alts: ['네', '같이', '도'] },
        { ko: '그런데 케이크 없어요!', en: "But there's no cake!", blank: '그런데', alts: ['그리고', '아니면', '우리'] },
        { ko: '준호는 집에 와요.', en: 'Junho comes home.', blank: '와요', alts: ['가요', '사요', '없어요'] },
        { ko: '케이크 여기 있어요!', en: 'Here is the cake!', blank: '여기', alts: ['어디', '뭐', '우리'] },
        { ko: '할머니도 게임해요.', en: 'Grandma plays games too.' }
    ]
});

// =====================
// Round 3 — me, numbers, polite basics
// =====================
KG.unit({
    id: 'a0-09',
    level: 'A0',
    round: 3,
    title: "I'm Jian",
    ko: '저는 지안이에요',
    icon: '🙋',
    goal: 'Say your name and who you are, meet someone, thank them, and say goodbye politely.',
    vocab: [
        { ko: '이름', en: 'name', emoji: '📛', pos: 'noun' },
        { ko: '학생', en: 'student', emoji: '🧑‍🎓', pos: 'noun' },
        { ko: '선생님', en: 'teacher', emoji: '👩‍🏫', pos: 'noun' },
        { ko: '사람', en: 'person', emoji: '🧍', pos: 'noun' },
        { ko: '한국', en: 'Korea', emoji: '🇰🇷', pos: 'noun' },
        { ko: '미국', en: 'the USA', emoji: '🇺🇸', pos: 'noun' },
        { ko: '만나서 반가워요', en: 'nice to meet you', emoji: '🤝', pos: 'expr', forms: ['반가워요'] },
        { ko: '감사합니다', en: 'thank you', emoji: '🙏', pos: 'expr' },
        { ko: '안녕히 가세요', en: 'goodbye (to someone who is leaving)', emoji: '👋🚶', pos: 'expr' },
        { ko: '안녕히 계세요', en: 'goodbye (to someone who is staying)', emoji: '👋🏠', pos: 'expr' }
    ],
    story: {
        title: "Jian's New Teacher",
        extras: "Jian's class teacher is a Korean woman in her thirties with a high black ponytail, a coral cardigan over a white blouse and a friendly smile. Mike, the new teacher, is a tall American man in his thirties with short blond hair, a neat short beard, rectangular glasses and a navy sweater. The classroom is bright, with small wooden desks, a green chalkboard with nothing written on it, and children's drawings (pictures only) on the walls. Other children are small background figures.",
        scenes: [
            {
                img: 'a0-09-1',
                art: "A sunny morning on the street. Jian walks to school wearing his yellow school bag, holding Grandma's hand. Grandma points ahead at a school building with a big front gate.",
                lines: [
                    { sp: 'narrator', ko: '지안은 학교에 가요.', en: 'Jian goes to school.' },
                    { sp: 'narrator', ko: '할머니도 같이 가요.', en: 'Grandma goes with him.' },
                    { sp: 'halmeoni', ko: '학교 저기 있어요!', en: 'The school is over there!' },
                    { sp: 'jian', ko: '학교 좋아해요!', en: 'I like school!' }
                ],
                check: { q: '지안은 어디에 가요?', en: 'Where is Jian going?', options: ['학교에', '마트에'], answer: 0 }
            },
            {
                img: 'a0-09-2',
                art: "Jian's bright classroom. The class teacher stands at the front with her hand on her chest, smiling at the children. Jian sits at a small desk in the front row and waves.",
                lines: [
                    { sp: 'staffF', as: '선생님', ko: '여러분, 안녕하세요!', en: 'Hello, everyone!' },
                    { sp: 'narrator', ko: '선생님. 선생님이에요.', en: "A teacher. She's a teacher." },
                    { sp: 'staffF', as: '선생님', ko: '저는 선생님이에요.', en: "I'm the teacher." },
                    { sp: 'narrator', ko: '지안은 학생이에요. 학생. 학생이에요.', en: "Jian is a student. Student. He's a student." }
                ],
                check: { q: '지안은 학생이에요?', en: 'Is Jian a student?', options: ['네', '아니요'], answer: 0 }
            },
            {
                img: 'a0-09-3',
                art: 'Jian stands up beside his desk and proudly points at himself with his thumb. The class teacher leans toward him with an encouraging smile.',
                lines: [
                    { sp: 'staffF', as: '선생님', ko: '이름이 뭐예요?', en: "What's your name?" },
                    { sp: 'jian', ko: '저는 지안이에요!', en: "I'm Jian!" },
                    { sp: 'narrator', ko: '이름. 이름. 이름은 지안이에요.', en: 'Name. Name. His name is Jian.' },
                    { sp: 'staffF', as: '선생님', ko: '지안, 반가워요!', en: 'Jian, nice to meet you!' }
                ],
                check: { q: '이름이 뭐예요?', en: 'What is his name?', options: ['지안', '민지'], answer: 0 }
            },
            {
                img: 'a0-09-4',
                art: 'The classroom door opens and Mike walks in, waving with a big smile. The children look surprised and excited. A small thought bubble above Mike shows the American flag (flag only).',
                lines: [
                    { sp: 'staffM', as: '마이크 선생님', ko: '안녕하세요! 저는 마이크예요.', en: "Hello! I'm Mike." },
                    { sp: 'narrator', ko: '마이크 선생님이에요.', en: "It's Teacher Mike." },
                    { sp: 'staffM', as: '마이크 선생님', ko: '저는 미국 사람이에요.', en: "I'm American." },
                    { sp: 'narrator', ko: '미국. 미국 사람. 마이크 선생님은 미국 사람이에요.', en: 'America. An American. Teacher Mike is American.' }
                ],
                check: { q: '마이크 선생님은 한국 사람이에요?', en: 'Is Teacher Mike Korean?', options: ['네', '아니요'], answer: 1 }
            },
            {
                img: 'a0-09-5',
                art: "Mike crouches down to Jian's eye level and shakes his hand. A small thought bubble above Jian shows the Korean flag, and one above Mike shows the American flag (flags only).",
                lines: [
                    { sp: 'staffM', as: '마이크 선생님', ko: '지안, 한국 사람이에요?', en: 'Jian, are you Korean?' },
                    { sp: 'jian', ko: '네! 저는 한국 사람이에요.', en: "Yes! I'm Korean." },
                    { sp: 'narrator', ko: '한국. 한국 사람. 지안은 한국 사람이에요.', en: 'Korea. A Korean. Jian is Korean.' },
                    { sp: 'staffM', as: '마이크 선생님', ko: '만나서 반가워요!', en: 'Nice to meet you!' },
                    { sp: 'jian', ko: '저도 반가워요!', en: 'Nice to meet you too!' }
                ],
                check: { q: '지안은 한국 사람이에요? 아니면 미국 사람이에요?', en: 'Is Jian Korean, or American?', options: ['한국 사람이에요', '미국 사람이에요'], answer: 0 }
            },
            {
                img: 'a0-09-6',
                art: 'Mike holds out a small chocolate bar to Jian. Jian takes it with both hands and bows his head politely, beaming.',
                lines: [
                    { sp: 'staffM', as: '마이크 선생님', ko: '지안, 초콜릿 좋아해요?', en: 'Jian, do you like chocolate?' },
                    { sp: 'jian', ko: '네, 좋아해요!', en: 'Yes, I do!' },
                    { sp: 'staffM', as: '마이크 선생님', ko: '여기 있어요.', en: 'Here you go.' },
                    { sp: 'jian', ko: '감사합니다!', en: 'Thank you!' },
                    { sp: 'narrator', ko: '감사합니다. 감사합니다.', en: 'Thank you. Thank you.' }
                ],
                check: { q: '지안은 초콜릿 좋아해요?', en: 'Does Jian like chocolate?', options: ['네', '아니요'], answer: 0 }
            },
            {
                img: 'a0-09-7',
                art: 'After school. Grandma comes to the classroom door to pick Jian up. Mike greets her with a polite bow, and Grandma bows back with a warm smile. Jian stands between them, holding his chocolate.',
                lines: [
                    { sp: 'narrator', ko: '할머니는 학교에 와요.', en: 'Grandma comes to the school.' },
                    { sp: 'staffM', as: '마이크 선생님', ko: '안녕하세요! 저는 마이크예요. 만나서 반가워요.', en: "Hello! I'm Mike. Nice to meet you." },
                    { sp: 'halmeoni', ko: '네, 반가워요! 저는 지안 할머니예요.', en: "Yes, nice to meet you! I'm Jian's grandma." }
                ],
                check: { q: '할머니는 학교에 와요?', en: 'Does Grandma come to the school?', options: ['네', '아니요'], answer: 0 }
            },
            {
                img: 'a0-09-8',
                art: 'Grandma and Jian walk out of the classroom door, turning back to wave goodbye. The class teacher and Mike stay inside the classroom, waving back.',
                lines: [
                    { sp: 'jian', ko: '선생님, 안녕히 계세요!', en: 'Goodbye, teachers!' },
                    { sp: 'halmeoni', ko: '안녕히 계세요!', en: 'Goodbye!' },
                    { sp: 'staffF', as: '선생님', ko: '안녕히 가세요!', en: 'Goodbye, take care!' },
                    { sp: 'narrator', ko: '지안은 집에 가요. 선생님은 학교에 있어요.', en: 'Jian goes home. The teachers stay at school.' }
                ],
                check: { q: '지안은 집에 가요?', en: 'Is Jian going home?', options: ['네', '아니요'], answer: 0 }
            }
        ]
    },
    patterns: [
        {
            form: '저는 N + 예요 / 이에요',
            meaning: 'I am N',
            note: 'After a vowel use 예요 (저는 마이크예요). After a consonant use 이에요 (저는 지안이에요, 저는 학생이에요). Ask a name with 이름이 뭐예요?',
            examples: [
                { ko: '저는 지안이에요.', en: "I'm Jian." },
                { ko: '저는 선생님이에요.', en: "I'm a teacher." },
                { ko: '이름이 뭐예요?', en: "What's your name?" }
            ]
        },
        {
            form: 'Country + 사람',
            meaning: 'a person from that country',
            note: '한국 사람 = Korean, 미국 사람 = American. Ask with a rising voice: 한국 사람이에요?',
            examples: [
                { ko: '저는 한국 사람이에요.', en: "I'm Korean." },
                { ko: '마이크 선생님은 미국 사람이에요.', en: 'Teacher Mike is American.' }
            ]
        },
        {
            form: '안녕히 가세요 / 안녕히 계세요',
            meaning: 'goodbye (you go) / goodbye (you stay)',
            note: 'Say 안녕히 가세요 to the person who is leaving, and 안녕히 계세요 to the person who stays. When you meet someone: 만나서 반가워요. To thank someone: 감사합니다.',
            examples: [
                { ko: '선생님, 안녕히 계세요!', en: 'Goodbye, teacher! (I leave, you stay.)' },
                { ko: '안녕히 가세요!', en: 'Goodbye! (You are leaving.)' },
                { ko: '감사합니다!', en: 'Thank you!' }
            ]
        }
    ],
    sentences: [
        { ko: '저는 지안이에요.', en: "I'm Jian.", blank: '이에요', alts: ['예요', '요', '는'] },
        { ko: '저는 마이크예요.', en: "I'm Mike.", blank: '예요', alts: ['이에요', '는', '도'] },
        { ko: '저는 학생이에요.', en: "I'm a student.", blank: '학생', alts: ['한국', '미국', '이름'] },
        { ko: '저는 선생님이에요.', en: "I'm a teacher.", blank: '선생님', alts: ['학생', '사람', '이름'] },
        { ko: '이름이 뭐예요?', en: "What's your name?", blank: '뭐', alts: ['어디', '이거', '저기'] },
        { ko: '저는 한국 사람이에요.', en: "I'm Korean.", blank: '한국', alts: ['미국', '학교', '카페'] },
        { ko: '마이크는 미국 사람이에요.', en: 'Mike is American.', blank: '사람', alts: ['이름', '학교', '마트'] },
        { ko: '만나서 반가워요.', en: 'Nice to meet you.', blank: '반가워요', alts: ['감사합니다', '맛있어요', '좋아해요'] },
        { ko: '선생님, 감사합니다!', en: 'Thank you, teacher!', blank: '감사합니다', alts: ['반가워요', '맛없어요', '없어요'] },
        { ko: '안녕히 가세요.', en: 'Goodbye (to someone leaving).', blank: '가세요', alts: ['계세요', '와요', '사요'] },
        { ko: '안녕히 계세요.', en: 'Goodbye (to someone staying).', blank: '계세요', alts: ['가세요', '있어요', '와요'] },
        { ko: '저도 반가워요.', en: 'Nice to meet you too.', blank: '저도', alts: ['저는', '우리', '여기'] }
    ]
});

KG.unit({
    id: 'a0-10',
    level: 'A0',
    round: 3,
    title: 'One, Two, Three',
    ko: '하나, 둘, 셋',
    icon: '🔢',
    goal: 'Count from one to ten with Korean counting numbers and ask how many.',
    vocab: [
        { ko: '하나', en: 'one (counting)', emoji: '1️⃣', pos: 'num' },
        { ko: '둘', en: 'two (counting)', emoji: '2️⃣', pos: 'num' },
        { ko: '셋', en: 'three (counting)', emoji: '3️⃣', pos: 'num' },
        { ko: '넷', en: 'four (counting)', emoji: '4️⃣', pos: 'num' },
        { ko: '다섯', en: 'five (counting)', emoji: '5️⃣', pos: 'num' },
        { ko: '여섯', en: 'six (counting)', emoji: '6️⃣', pos: 'num' },
        { ko: '일곱', en: 'seven (counting)', emoji: '7️⃣', pos: 'num' },
        { ko: '여덟', en: 'eight (counting)', emoji: '8️⃣', pos: 'num', note: 'Sounds like 여덜.' },
        { ko: '아홉', en: 'nine (counting)', emoji: '9️⃣', pos: 'num' },
        { ko: '열', en: 'ten (counting)', emoji: '🔟', pos: 'num' },
        { ko: '몇', en: 'how many', emoji: '🤔', pos: 'other' },
        { ko: '개', en: 'thing, piece (counter)', emoji: '📦', pos: 'noun', note: '사과 다섯 개 = five apples.' }
    ],
    story: {
        title: 'Counting with Grandma',
        extras: "Mike, Jian's teacher, is a tall American man in his thirties with short blond hair, a neat short beard, rectangular glasses and a navy sweater. All other scenes take place in the family's warm apartment. Objects are drawn clearly and separately so the exact number is easy to count.",
        scenes: [
            {
                img: 'a0-10-1',
                art: "Afternoon at the school gate. Mike stands at the gate, waving. Jian, holding Grandma's hand, waves back as they walk away toward home.",
                lines: [
                    { sp: 'narrator', ko: '마이크 선생님이에요. 미국 사람이에요.', en: "It's Teacher Mike. He's American." },
                    { sp: 'jian', ko: '선생님, 안녕히 계세요!', en: 'Goodbye, teacher!' },
                    { sp: 'staffM', as: '마이크 선생님', ko: '안녕히 가세요!', en: 'Goodbye!' },
                    { sp: 'narrator', ko: '지안은 집에 가요.', en: 'Jian goes home.' }
                ],
                check: { q: '마이크 선생님은 미국 사람이에요?', en: 'Is Teacher Mike American?', options: ['네', '아니요'], answer: 0 }
            },
            {
                img: 'a0-10-2',
                art: 'At the kitchen table, Grandma places red apples in a neat row, one by one: exactly three apples. Jian points at each apple as he counts, holding up three fingers with his other hand.',
                lines: [
                    { sp: 'narrator', ko: '사과. 사과 하나.', en: 'An apple. One apple.' },
                    { sp: 'narrator', ko: '사과 하나, 사과 둘, 사과 셋.', en: 'One apple, two apples, three apples.' },
                    { sp: 'jian', ko: '하나, 둘, 셋!', en: 'One, two, three!' },
                    { sp: 'narrator', ko: '하나, 둘, 셋. 사과 셋이에요.', en: 'One, two, three. There are three apples.' }
                ],
                check: { q: '사과 셋이에요?', en: 'Are there three apples?', options: ['네', '아니요'], answer: 0 }
            },
            {
                img: 'a0-10-3',
                art: 'Grandma holds up a bunch of exactly five bananas. Jian counts them, touching each banana, and holds up all five fingers of one hand.',
                lines: [
                    { sp: 'jian', ko: '하나, 둘, 셋, 넷, 다섯!', en: 'One, two, three, four, five!' },
                    { sp: 'narrator', ko: '넷. 다섯. 바나나 다섯.', en: 'Four. Five. Five bananas.' },
                    { sp: 'narrator', ko: '바나나 넷이에요? 아니요, 다섯이에요!', en: 'Are there four bananas? No, there are five!' },
                    { sp: 'jian', ko: '바나나 다섯! 맛있어요!', en: 'Five bananas! Yummy!' }
                ],
                check: { q: '바나나 넷이에요? 아니면 다섯이에요?', en: 'Are there four bananas, or five?', options: ['넷이에요', '다섯이에요'], answer: 1 }
            },
            {
                img: 'a0-10-4',
                art: 'A small white bowl with exactly six bright red strawberries sits on the table. Grandma points at the bowl with a questioning look. Jian counts the strawberries on his fingers.',
                lines: [
                    { sp: 'halmeoni', ko: '지안, 딸기 몇 개예요?', en: 'Jian, how many strawberries are there?' },
                    { sp: 'jian', ko: '하나, 둘, 셋, 넷, 다섯, 여섯!', en: 'One, two, three, four, five, six!' },
                    { sp: 'jian', ko: '여섯 개예요!', en: 'There are six!' },
                    { sp: 'narrator', ko: '몇 개예요? 여섯 개예요. 딸기 여섯 개.', en: 'How many? Six. Six strawberries.' }
                ],
                check: { q: '딸기 몇 개예요?', en: 'How many strawberries are there?', options: ['다섯 개', '여섯 개'], answer: 1 }
            },
            {
                img: 'a0-10-5',
                art: 'Grandma takes a baking tray out of the oven with exactly eight little round cakes on it, in two neat rows of four. Jian leans in, counting eagerly.',
                lines: [
                    { sp: 'narrator', ko: '케이크 몇 개예요?', en: 'How many cakes are there?' },
                    { sp: 'jian', ko: '하나, 둘, 셋, 넷, 다섯, 여섯, 일곱, 여덟!', en: 'One, two, three, four, five, six, seven, eight!' },
                    { sp: 'narrator', ko: '일곱. 여덟. 케이크 여덟 개예요!', en: 'Seven. Eight. There are eight cakes!' },
                    { sp: 'halmeoni', ko: '네, 여덟 개예요.', en: 'Yes, there are eight.' }
                ],
                check: { q: '케이크 몇 개예요?', en: 'How many cakes are there?', options: ['여덟 개', '여섯 개'], answer: 0 }
            },
            {
                img: 'a0-10-6',
                art: 'Jian grabs one little cake and eats it in one big bite, cheeks full. Exactly seven little cakes are left on the tray. Grandma laughs with her hands on her hips.',
                lines: [
                    { sp: 'narrator', ko: '지안은 케이크 하나 먹어요.', en: 'Jian eats one cake.' },
                    { sp: 'jian', ko: '음, 맛있어요!', en: 'Mmm, delicious!' },
                    { sp: 'narrator', ko: '케이크 몇 개 있어요? 일곱 개 있어요.', en: 'How many cakes are there now? There are seven.' }
                ],
                check: { q: '케이크 일곱 개 있어요?', en: 'Are there seven cakes?', options: ['네', '아니요'], answer: 0 }
            },
            {
                img: 'a0-10-7',
                art: 'The living room. Jian stands facing the wall with his hands over his eyes, counting. Behind him, Minji tiptoes toward the curtains and Junho crouches behind the green sofa, both grinning. Nabi watches from the armchair.',
                lines: [
                    { sp: 'jian', ko: '하나, 둘, 셋, 넷, 다섯…', en: 'One, two, three, four, five…' },
                    { sp: 'jian', ko: '여섯, 일곱, 여덟, 아홉, 열!', en: 'Six, seven, eight, nine, ten!' },
                    { sp: 'narrator', ko: '아홉. 열. 아홉, 열!', en: 'Nine. Ten. Nine, ten!' },
                    { sp: 'narrator', ko: '민지 어디에 있어요? 준호 어디에 있어요?', en: 'Where is Minji? Where is Junho?' }
                ],
                check: { q: '아홉, 그리고…?', en: 'Nine, and then…?', options: ['열', '여덟'], answer: 0 }
            },
            {
                img: 'a0-10-8',
                art: "Jian finds everyone, laughing: Minji's feet stick out from under the curtains right next to him, Junho peeks out from behind the sofa across the room, and Nabi hides under the low table. Jian points at them one by one.",
                lines: [
                    { sp: 'narrator', ko: '민지 여기 있어요! 준호 저기 있어요!', en: 'Minji is here! Junho is over there!' },
                    { sp: 'narrator', ko: '나비도 있어요!', en: 'Nabi is here too!' },
                    { sp: 'jian', ko: '하나, 둘, 셋!', en: 'One, two, three!' }
                ],
                check: { q: '나비 있어요?', en: 'Is Nabi there?', options: ['네', '아니요'], answer: 0 }
            }
        ]
    },
    patterns: [
        {
            form: '하나, 둘, 셋, 넷, 다섯, 여섯, 일곱, 여덟, 아홉, 열',
            meaning: 'one to ten (Korean counting numbers)',
            note: 'Use these to count things and people. 여덟 sounds like 여덜.',
            examples: [
                { ko: '하나, 둘, 셋!', en: 'One, two, three!' },
                { ko: '여섯, 일곱, 여덟, 아홉, 열!', en: 'Six, seven, eight, nine, ten!' }
            ]
        },
        {
            form: 'N + number',
            meaning: 'N, counted',
            note: 'The thing comes first and the number after it: 사과 하나 (one apple), 바나나 다섯 (five bananas).',
            examples: [
                { ko: '사과 하나, 사과 둘, 사과 셋.', en: 'One apple, two apples, three apples.' },
                { ko: '지안은 케이크 하나 먹어요.', en: 'Jian eats one cake.' }
            ]
        },
        {
            form: 'N 몇 개예요? — number + 개예요.',
            meaning: 'How many N? — There are ___.',
            note: '개 counts things. Before 개, the first four numbers get shorter: 한 개, 두 개, 세 개, 네 개. From 다섯 on they stay the same: 다섯 개, 여섯 개 … 열 개.',
            examples: [
                { ko: '딸기 몇 개예요?', en: 'How many strawberries are there?' },
                { ko: '여섯 개예요.', en: 'There are six.' },
                { ko: '케이크 일곱 개 있어요.', en: 'There are seven cakes.' }
            ]
        }
    ],
    sentences: [
        { ko: '사과 하나.', en: 'One apple.', blank: '하나', alts: ['둘', '셋', '열'] },
        { ko: '하나, 둘, 셋!', en: 'One, two, three!', blank: '둘', alts: ['넷', '열', '다섯'] },
        { ko: '바나나 다섯.', en: 'Five bananas.', blank: '다섯', alts: ['여섯', '셋', '열'] },
        { ko: '딸기 몇 개예요?', en: 'How many strawberries are there?', blank: '몇', alts: ['뭐', '어디', '열'] },
        { ko: '여섯 개예요.', en: 'There are six.', blank: '개', alts: ['요', '는', '도'] },
        { ko: '케이크 여덟 개예요.', en: 'There are eight cakes.', blank: '여덟', alts: ['일곱', '아홉', '여섯'] },
        { ko: '일곱 개 있어요.', en: 'There are seven.', blank: '일곱', alts: ['여덟', '다섯', '열'] },
        { ko: '아홉, 열!', en: 'Nine, ten!', blank: '열', alts: ['하나', '넷', '셋'] },
        { ko: '사과 셋이에요.', en: 'There are three apples.', blank: '셋', alts: ['둘', '넷', '열'] },
        { ko: '바나나 하나 먹어요.', en: 'I eat one banana.', blank: '하나', alts: ['둘', '열', '다섯'] },
        { ko: '컵 몇 개 있어요?', en: 'How many cups are there?' },
        { ko: '사과 열 개예요.', en: 'There are ten apples.', blank: '열', alts: ['셋', '둘', '넷'] }
    ]
});

KG.unit({
    id: 'a0-11',
    level: 'A0',
    round: 3,
    title: 'How Much Is It?',
    ko: '얼마예요?',
    icon: '💰',
    goal: 'Say numbers for money, ask how much something costs, and ask for it with 주세요.',
    vocab: [
        { ko: '일', en: 'one (money, numbers)', emoji: '1️⃣', pos: 'num' },
        { ko: '이', en: 'two (money, numbers)', emoji: '2️⃣', pos: 'num' },
        { ko: '삼', en: 'three (money, numbers)', emoji: '3️⃣', pos: 'num' },
        { ko: '사', en: 'four (money, numbers)', emoji: '4️⃣', pos: 'num' },
        { ko: '오', en: 'five (money, numbers)', emoji: '5️⃣', pos: 'num' },
        { ko: '육', en: 'six (money, numbers)', emoji: '6️⃣', pos: 'num' },
        { ko: '칠', en: 'seven (money, numbers)', emoji: '7️⃣', pos: 'num' },
        { ko: '팔', en: 'eight (money, numbers)', emoji: '8️⃣', pos: 'num' },
        { ko: '구', en: 'nine (money, numbers)', emoji: '9️⃣', pos: 'num' },
        { ko: '십', en: 'ten (money, numbers)', emoji: '🔟', pos: 'num' },
        { ko: '천', en: 'thousand', emoji: '💵', pos: 'num', note: 'Just 천 for 1,000 (never 일천): 천 원, 이천 원, 삼천 원. 백 = hundred: 오백 원.' },
        { ko: '원', en: 'won (Korean money)', emoji: '🪙', pos: 'noun' },
        { ko: '얼마', en: 'how much', emoji: '🏷️', pos: 'other' },
        { ko: '주세요', en: 'please give me', emoji: '🤲', pos: 'expr' }
    ],
    story: {
        title: 'At the Supermarket',
        extras: 'The fruit-stall clerk at the supermarket is a cheerful Korean woman in her forties with a short black bob, a green apron and a white headscarf (clearly not Grandma, who has grey hair and glasses). Price cards show only digits (like 3000). Banknotes are plain light-blue paper bills showing only the digits 1000. Nothing else shows any letters, signs or logos.',
        scenes: [
            {
                img: 'a0-11-1',
                art: 'Morning in the kitchen. Jian counts exactly five red apples in a basket on the table. Grandma stands at the open fridge, which has no bananas and no milk inside, holding her empty shopping bag.',
                lines: [
                    { sp: 'halmeoni', ko: '지안, 사과 몇 개 있어요?', en: 'Jian, how many apples are there?' },
                    { sp: 'jian', ko: '하나, 둘, 셋, 넷, 다섯! 다섯 개 있어요.', en: 'One, two, three, four, five! There are five.' },
                    { sp: 'narrator', ko: '그런데 바나나 없어요. 우유 없어요.', en: "But there are no bananas. There's no milk." },
                    { sp: 'halmeoni', ko: '마트에 가요!', en: "Let's go to the supermarket!" }
                ],
                check: { q: '사과 몇 개 있어요?', en: 'How many apples are there?', options: ['다섯 개', '열 개'], answer: 0 }
            },
            {
                img: 'a0-11-2',
                art: 'Inside the apartment elevator. A panel of ten round buttons shows the digits 1 to 10 (digits only, no letters). Jian points at the buttons one by one with a big grin while Grandma, holding her shopping bag, watches.',
                lines: [
                    { sp: 'narrator', ko: '일, 이, 삼, 사, 오.', en: 'One, two, three, four, five.' },
                    { sp: 'narrator', ko: '육, 칠, 팔, 구, 십.', en: 'Six, seven, eight, nine, ten.' },
                    { sp: 'jian', ko: '일, 이, 삼, 사, 오, 육, 칠, 팔, 구, 십!', en: 'One, two, three, four, five, six, seven, eight, nine, ten!' }
                ],
                check: { q: '일, 이, 삼, 그리고…?', en: 'One, two, three, and then…?', options: ['사', '넷'], answer: 0 }
            },
            {
                img: 'a0-11-3',
                art: 'Still in the elevator. Grandma hands Jian three light-blue 1,000-won banknotes (plain blue bills showing only the digits 1000). Jian fans them out, delighted.',
                lines: [
                    { sp: 'narrator', ko: '원. 천 원. 천 원이에요.', en: 'Won. A thousand won. It is a thousand won.' },
                    { sp: 'halmeoni', ko: '천 원, 이천 원, 삼천 원!', en: '1,000 won, 2,000 won, 3,000 won!' },
                    { sp: 'jian', ko: '삼천 원! 감사합니다!', en: '3,000 won! Thank you!' },
                    { sp: 'narrator', ko: '지안은 삼천 원 있어요.', en: 'Jian has 3,000 won.' }
                ],
                check: { q: '지안은 삼천 원 있어요?', en: 'Does Jian have 3,000 won?', options: ['네', '아니요'], answer: 0 }
            },
            {
                img: 'a0-11-4',
                art: 'A bright fruit stall in the supermarket with baskets of bananas, red apples, strawberries and mangoes, each with a small price card showing only digits (bananas 3000, apples 1000, strawberries 8000, mangoes 5000). Grandma points at the bananas; the clerk smiles and answers.',
                lines: [
                    { sp: 'halmeoni', ko: '바나나 얼마예요?', en: 'How much are the bananas?' },
                    { sp: 'staffF', as: '점원', ko: '바나나요? 삼천 원이에요.', en: 'The bananas? They are 3,000 won.' },
                    { sp: 'narrator', ko: '얼마예요? 얼마예요? 삼천 원이에요.', en: "How much? How much? It's 3,000 won." },
                    { sp: 'halmeoni', ko: '바나나 주세요.', en: 'Bananas, please.' },
                    { sp: 'narrator', ko: '주세요. 바나나 주세요.', en: 'Please give me. Bananas, please.' }
                ],
                check: { q: '바나나 얼마예요?', en: 'How much are the bananas?', options: ['삼천 원', '팔천 원'], answer: 0 }
            },
            {
                img: 'a0-11-5',
                art: 'Grandma holds up a carton of milk (price card 2000, digits only) and points at a pile of mangoes (price card 5000). The clerk answers with a smile.',
                lines: [
                    { sp: 'halmeoni', ko: '우유 얼마예요?', en: 'How much is the milk?' },
                    { sp: 'staffF', as: '점원', ko: '이천 원이에요.', en: "It's 2,000 won." },
                    { sp: 'halmeoni', ko: '망고는요?', en: 'And the mangoes?' },
                    { sp: 'staffF', as: '점원', ko: '망고는 오천 원이에요.', en: 'The mangoes are 5,000 won.' },
                    { sp: 'halmeoni', ko: '우유 주세요. 그리고 망고 주세요.', en: 'Milk, please. And a mango, please.' }
                ],
                check: { q: '망고 얼마예요?', en: 'How much is a mango?', options: ['오천 원', '이천 원'], answer: 0 }
            },
            {
                img: 'a0-11-6',
                art: 'Jian stands on tiptoe in front of a box of shiny strawberries (price card 8000). He looks at the three blue banknotes in his hand and frowns, thinking.',
                lines: [
                    { sp: 'jian', ko: '딸기 얼마예요?', en: 'How much are the strawberries?' },
                    { sp: 'staffF', as: '점원', ko: '팔천 원이에요.', en: "They're 8,000 won." },
                    { sp: 'jian', ko: '팔천 원? 음… 저는 삼천 원 있어요.', en: '8,000 won? Hmm… I have 3,000 won.' },
                    { sp: 'narrator', ko: '딸기 팔천 원이에요. 지안은 삼천 원 있어요.', en: 'The strawberries are 8,000 won. Jian has 3,000 won.' }
                ],
                check: { q: '딸기 삼천 원이에요?', en: 'Are the strawberries 3,000 won?', options: ['네', '아니요'], answer: 1 }
            },
            {
                img: 'a0-11-7',
                art: 'Jian holds up one red apple (price card 1000) and hands one blue banknote to the smiling clerk.',
                lines: [
                    { sp: 'jian', ko: '사과 얼마예요?', en: 'How much is an apple?' },
                    { sp: 'staffF', as: '점원', ko: '천 원이에요.', en: "It's 1,000 won." },
                    { sp: 'jian', ko: '사과 하나 주세요!', en: 'One apple, please!' },
                    { sp: 'staffF', as: '점원', ko: '네, 여기 있어요. 감사합니다!', en: 'Sure, here you go. Thank you!' }
                ],
                check: { q: '사과 얼마예요?', en: 'How much is an apple?', options: ['천 원', '오천 원'], answer: 0 }
            },
            {
                img: 'a0-11-8',
                art: 'Next to a small freezer of ice pops (price card 500, digits only), Jian licks the ice pop he just bought and proudly gives the red apple to Grandma. Grandma looks touched and hugs him.',
                lines: [
                    { sp: 'jian', ko: '아이스크림 얼마예요?', en: 'How much is the ice cream?' },
                    { sp: 'staffF', as: '점원', ko: '오백 원이에요.', en: "It's 500 won." },
                    { sp: 'narrator', ko: '백. 오백. 오백 원이에요.', en: 'Hundred. Five hundred. It is 500 won.' },
                    { sp: 'jian', ko: '할머니, 사과 여기 있어요!', en: 'Grandma, here is an apple for you!' },
                    { sp: 'halmeoni', ko: '아이고, 지안! 사랑해요!', en: 'Oh, Jian! I love you!' }
                ],
                check: { q: '아이스크림 얼마예요?', en: 'How much is the ice cream?', options: ['오백 원', '오천 원'], answer: 0 }
            }
        ]
    },
    patterns: [
        {
            form: '일, 이, 삼, 사, 오, 육, 칠, 팔, 구, 십',
            meaning: 'one to ten (numbers for money, prices and floors)',
            note: 'Korean has two sets of numbers. Count things with 하나, 둘, 셋. Use 일, 이, 삼 for money, prices and floor numbers.',
            examples: [
                { ko: '일, 이, 삼, 사, 오!', en: 'One, two, three, four, five!' },
                { ko: '육, 칠, 팔, 구, 십!', en: 'Six, seven, eight, nine, ten!' }
            ]
        },
        {
            form: 'N 얼마예요? — ___ 원이에요.',
            meaning: 'How much is N? — It is ___ won.',
            note: '백 = hundred, 천 = thousand. Put the number in front: 오백 (500), 이천 (2,000), 삼천 (3,000). For 100 and 1,000 just say 백 and 천, never 일백 or 일천.',
            examples: [
                { ko: '바나나 얼마예요?', en: 'How much are the bananas?' },
                { ko: '삼천 원이에요.', en: "It's 3,000 won." },
                { ko: '오백 원이에요.', en: "It's 500 won." }
            ]
        },
        {
            form: 'N 주세요',
            meaning: 'N, please (give me N)',
            note: 'The most useful shop word. Add a counting number to say how many: 사과 하나 주세요.',
            examples: [
                { ko: '바나나 주세요.', en: 'Bananas, please.' },
                { ko: '사과 하나 주세요!', en: 'One apple, please!' },
                { ko: '네, 여기 있어요.', en: 'Sure, here you are.' }
            ]
        }
    ],
    sentences: [
        { ko: '바나나 얼마예요?', en: 'How much are the bananas?', blank: '얼마', alts: ['뭐', '어디', '몇'] },
        { ko: '삼천 원이에요.', en: "It's 3,000 won.", blank: '삼천', alts: ['이천', '오천', '팔천'] },
        { ko: '천 원이에요.', en: "It's 1,000 won.", blank: '원', alts: ['개', '요', '도'] },
        { ko: '사과 하나 주세요.', en: 'One apple, please.', blank: '주세요', alts: ['있어요', '얼마예요', '먹어요'] },
        { ko: '우유 주세요.', en: 'Milk, please.', blank: '우유', alts: ['빵', '바나나', '사과'] },
        { ko: '아이스크림 오백 원이에요.', en: 'The ice cream is 500 won.', blank: '오백', alts: ['오천', '삼천', '이천'] },
        { ko: '딸기 팔천 원이에요.', en: 'The strawberries are 8,000 won.', blank: '팔천', alts: ['삼천', '오천', '천'] },
        { ko: '일, 이, 삼, 사, 오!', en: '1, 2, 3, 4, 5!', blank: '사', alts: ['넷', '셋', '다섯'] },
        { ko: '육, 칠, 팔, 구, 십!', en: '6, 7, 8, 9, 10!', blank: '팔', alts: ['여덟', '일곱', '아홉'] },
        { ko: '망고 얼마예요?', en: 'How much is the mango?' },
        { ko: '오천 원이에요.', en: "It's 5,000 won.", blank: '오천', alts: ['오백', '삼천', '이천'] },
        { ko: '여기 있어요. 감사합니다!', en: 'Here you are. Thank you!', blank: '감사합니다', alts: ['주세요', '얼마예요', '반가워요'] }
    ]
});

KG.unit({
    id: 'a0-12',
    level: 'A0',
    round: 3,
    review: true,
    title: 'Review: A Day at the Park',
    ko: '우리 같이 공원에 가요',
    icon: '🌳',
    goal: 'The A0 finale: a day at the park with words from all of A0 — eating, buying, counting, meeting and saying goodbye.',
    vocab: [
        { ko: '먹다', en: 'to eat', emoji: '🍴', pos: 'verb', polite: '먹어요' },
        { ko: '마시다', en: 'to drink', emoji: '🍹', pos: 'verb', polite: '마셔요' },
        { ko: '좋아하다', en: 'to like', emoji: '😍', pos: 'verb', polite: '좋아해요' },
        { ko: '있다', en: 'to be there / to have', emoji: '✅', pos: 'verb', polite: '있어요' },
        { ko: '없다', en: 'to not be there / to not have', emoji: '🚫', pos: 'verb', polite: '없어요' },
        { ko: '같이', en: 'together', emoji: '👯', pos: 'other', note: 'Sounds like 가치.' },
        { ko: '공원', en: 'park', emoji: '🌳', pos: 'noun' },
        { ko: '몇', en: 'how many', emoji: '🤔', pos: 'other' },
        { ko: '얼마', en: 'how much', emoji: '🏷️', pos: 'other' },
        { ko: '주세요', en: 'please give me', emoji: '🤲', pos: 'expr' },
        { ko: '만나서 반가워요', en: 'nice to meet you', emoji: '🤝', pos: 'expr', forms: ['반가워요'] },
        { ko: '감사합니다', en: 'thank you', emoji: '🙏', pos: 'expr' },
        { ko: '안녕히 가세요', en: 'goodbye (to someone who is leaving)', emoji: '👋🚶', pos: 'expr' },
        { ko: '안녕히 계세요', en: 'goodbye (to someone who is staying)', emoji: '👋🏠', pos: 'expr' }
    ],
    story: {
        title: 'A Day at the Park',
        extras: "The park café's barista is a young Korean woman in her twenties with long hair in a low braid, a navy-and-white striped shirt and a brown apron; she is the only café worker. Mike, Jian's teacher, is a tall American man in his thirties with short blond hair, a neat short beard, rectangular glasses and a navy sweater. Price stickers and cards show only digits; nothing shows letters, signs or logos.",
        scenes: [
            {
                img: 'a0-12-1',
                art: "Morning in the family kitchen. On the table are yesterday's groceries, each with a small price sticker showing only digits: bananas (3000), a carton of milk (2000) and a red apple (1000). Jian proudly holds up the apple. Minji stands in the doorway with a picnic basket, pointing outside toward a sunny park.",
                lines: [
                    { sp: 'jian', ko: '이거 사과예요. 천 원이에요!', en: "This is an apple. It's 1,000 won!" },
                    { sp: 'narrator', ko: '바나나 삼천 원. 우유 이천 원. 사과 천 원.', en: 'Bananas, 3,000 won. Milk, 2,000 won. Apple, 1,000 won.' },
                    { sp: 'minji', ko: '우리 같이 공원에 가요!', en: "Let's go to the park together!" },
                    { sp: 'jian', ko: '네! 공원 좋아해요!', en: 'Yes! I like the park!' }
                ],
                check: { q: '사과 얼마예요?', en: 'How much is the apple?', options: ['천 원', '삼천 원'], answer: 0 }
            },
            {
                img: 'a0-12-2',
                art: 'A small café kiosk at the edge of a green park. Junho hands a banknote to the smiling barista, who gives him a cup of coffee. Grandma, Minji and Jian wait behind him with the picnic basket.',
                lines: [
                    { sp: 'narrator', ko: '공원 카페예요. 준호는 커피 좋아해요.', en: "It's the park café. Junho likes coffee." },
                    { sp: 'junho', ko: '커피 하나 주세요.', en: 'One coffee, please.' },
                    { sp: 'staffF', as: '점원', ko: '네, 사천 원이에요.', en: "Sure, that's 4,000 won." },
                    { sp: 'junho', ko: '여기 있어요.', en: 'Here you are.' },
                    { sp: 'staffF', as: '점원', ko: '감사합니다!', en: 'Thank you!' }
                ],
                check: { q: '커피 얼마예요?', en: 'How much is the coffee?', options: ['사천 원', '사백 원'], answer: 0 }
            },
            {
                img: 'a0-12-3',
                art: 'The family sits on a picnic mat under a big tree. Grandma opens a box of cut yellow mango and a bowl with exactly ten strawberries. Jian points at the mango curiously.',
                lines: [
                    { sp: 'jian', ko: '할머니, 이거 뭐예요?', en: 'Grandma, what is this?' },
                    { sp: 'halmeoni', ko: '망고예요. 맛있어요!', en: "It's mango. It's delicious!" },
                    { sp: 'halmeoni', ko: '딸기 몇 개 있어요?', en: 'How many strawberries are there?' },
                    { sp: 'jian', ko: '하나, 둘, 셋… 아홉, 열! 열 개 있어요!', en: 'One, two, three… nine, ten! There are ten!' }
                ],
                check: { q: '딸기 몇 개 있어요?', en: 'How many strawberries are there?', options: ['열 개', '다섯 개'], answer: 0 }
            },
            {
                img: 'a0-12-4',
                art: 'On the grass near the mat: Junho does push-ups, Minji holds a yoga pose, and Jian sits playing a game on a smartphone. Grandma stands over Jian, pointing at Junho and Minji with a smile.',
                lines: [
                    { sp: 'narrator', ko: '준호는 운동해요. 민지는 요가해요.', en: 'Junho works out. Minji does yoga.' },
                    { sp: 'narrator', ko: '지안은 뭐 해요? 게임해요!', en: 'What is Jian doing? He is playing games!' },
                    { sp: 'halmeoni', ko: '지안, 우리 같이 운동해요!', en: "Jian, let's work out together!" },
                    { sp: 'jian', ko: '네…', en: 'Okay…' }
                ],
                check: { q: '지안은 뭐 해요?', en: 'What is Jian doing?', options: ['게임해요', '요가해요'], answer: 0 }
            },
            {
                img: 'a0-12-5',
                art: 'Mike, jogging through the park, stops and waves. Jian jumps up and points at him excitedly. Minji stands up and bows politely to Mike.',
                lines: [
                    { sp: 'jian', ko: '저기! 마이크 선생님!', en: 'Over there! Teacher Mike!' },
                    { sp: 'staffM', as: '마이크 선생님', ko: '지안, 안녕하세요!', en: 'Hello, Jian!' },
                    { sp: 'minji', ko: '안녕하세요. 저는 민지예요. 만나서 반가워요.', en: "Hello. I'm Minji. Nice to meet you." },
                    { sp: 'staffM', as: '마이크 선생님', ko: '저는 마이크예요. 저도 반가워요!', en: "I'm Mike. Nice to meet you too!" }
                ],
                check: { q: '마이크는 선생님이에요? 아니면 학생이에요?', en: 'Is Mike a teacher, or a student?', options: ['선생님이에요', '학생이에요'], answer: 0 }
            },
            {
                img: 'a0-12-6',
                art: 'Mike sits on the picnic mat with the family. Grandma offers him a banana, and Junho holds up his cup of coffee. Mike happily takes the banana but politely waves away the coffee, holding up a bottle of water instead.',
                lines: [
                    { sp: 'halmeoni', ko: '선생님, 바나나 먹어요?', en: 'Teacher, would you like a banana?' },
                    { sp: 'staffM', as: '마이크 선생님', ko: '네, 감사합니다! 음, 맛있어요!', en: 'Yes, thank you! Mmm, delicious!' },
                    { sp: 'junho', ko: '커피 마셔요?', en: 'Do you drink coffee?' },
                    { sp: 'staffM', as: '마이크 선생님', ko: '아니요, 커피 안 마셔요. 물 마셔요.', en: "No, I don't drink coffee. I drink water." }
                ],
                check: { q: '마이크 선생님은 커피 마셔요?', en: 'Does Teacher Mike drink coffee?', options: ['네', '아니요'], answer: 1 }
            },
            {
                img: 'a0-12-7',
                art: 'Back at the park café kiosk, Jian holds up five fingers to the barista, who is handing over ice-cream cones. A price card shows only the digits 2000. Behind Jian, Grandma, Minji, Junho and Mike wave.',
                lines: [
                    { sp: 'jian', ko: '아이스크림 얼마예요?', en: 'How much is the ice cream?' },
                    { sp: 'staffF', as: '점원', ko: '이천 원이에요.', en: "It's 2,000 won." },
                    { sp: 'jian', ko: '하나, 둘, 셋, 넷, 다섯! 아이스크림 다섯 개 주세요!', en: 'One, two, three, four, five! Five ice creams, please!' },
                    { sp: 'staffF', as: '점원', ko: '네! 여기 있어요.', en: 'Sure! Here you go.' }
                ],
                check: { q: '아이스크림 몇 개예요?', en: 'How many ice creams?', options: ['다섯 개', '열 개'], answer: 0 }
            },
            {
                img: 'a0-12-8',
                art: 'Late afternoon in the park. Mike walks away along the path, turning back to wave. The family stays on the picnic mat, eating ice cream and waving back. Jian waves the hardest.',
                lines: [
                    { sp: 'staffM', as: '마이크 선생님', ko: '감사합니다! 안녕히 계세요!', en: 'Thank you! Goodbye!' },
                    { sp: 'jian', ko: '선생님, 안녕히 가세요!', en: 'Goodbye, teacher!' },
                    { sp: 'narrator', ko: '마이크 선생님은 집에 가요. 지안은 공원에 있어요.', en: 'Teacher Mike goes home. Jian stays at the park.' },
                    { sp: 'narrator', ko: '여러분, 감사합니다! 안녕히 계세요!', en: 'Thank you, everyone! Goodbye!' }
                ],
                check: { q: '마이크 선생님은 집에 가요?', en: 'Is Teacher Mike going home?', options: ['네', '아니요'], answer: 0 }
            }
        ]
    },
    patterns: [
        {
            form: '우리 같이 ___!',
            meaning: "Let's ___ together!",
            note: 'Works with any verb from A0: 같이 가요, 같이 먹어요, 같이 운동해요.',
            examples: [
                { ko: '우리 같이 공원에 가요!', en: "Let's go to the park together!" },
                { ko: '우리 같이 운동해요!', en: "Let's work out together!" }
            ]
        },
        {
            form: 'N 얼마예요? · N 몇 개 있어요? · N 주세요',
            meaning: 'how much · how many · please give me',
            note: 'Prices use 일, 이, 삼 (사천 원). Counting uses 하나, 둘, 셋 (다섯 개).',
            examples: [
                { ko: '커피 하나 주세요.', en: 'One coffee, please.' },
                { ko: '딸기 몇 개 있어요?', en: 'How many strawberries are there?' },
                { ko: '아이스크림 다섯 개 주세요!', en: 'Five ice creams, please!' }
            ]
        },
        {
            form: '만나서 반가워요 · 감사합니다 · 안녕히 가세요 / 계세요',
            meaning: 'nice to meet you · thank you · goodbye',
            note: 'The polite basics for meeting, thanking and leaving. 가세요 to the one who leaves, 계세요 to the one who stays.',
            examples: [
                { ko: '저는 민지예요. 만나서 반가워요.', en: "I'm Minji. Nice to meet you." },
                { ko: '선생님, 안녕히 가세요!', en: 'Goodbye, teacher!' }
            ]
        }
    ],
    sentences: [
        { ko: '우리 같이 공원에 가요!', en: "Let's go to the park together!", blank: '공원', alts: ['우유', '커피', '사과'] },
        { ko: '커피 하나 주세요.', en: 'One coffee, please.', blank: '하나', alts: ['일', '열', '몇'] },
        { ko: '사천 원이에요.', en: "It's 4,000 won.", blank: '사천', alts: ['넷천', '사백', '삼천'] },
        { ko: '딸기 몇 개 있어요?', en: 'How many strawberries are there?', blank: '몇', alts: ['뭐', '얼마', '어디'] },
        { ko: '열 개 있어요!', en: 'There are ten!', blank: '열', alts: ['십', '일', '셋'] },
        { ko: '지안은 게임해요.', en: 'Jian plays games.', blank: '게임해요', alts: ['요가해요', '공부해요', '운동해요'] },
        { ko: '저는 민지예요.', en: "I'm Minji.", blank: '예요', alts: ['이에요', '는', '도'] },
        { ko: '만나서 반가워요.', en: 'Nice to meet you.' },
        { ko: '바나나 먹어요?', en: 'Would you like a banana?', blank: '먹어요', alts: ['마셔요', '가요', '주세요'] },
        { ko: '커피 안 마셔요.', en: "I don't drink coffee.", blank: '안', alts: ['네', '몇', '같이'] },
        { ko: '아이스크림 다섯 개 주세요!', en: 'Five ice creams, please!', blank: '다섯', alts: ['오', '넷', '열'] },
        { ko: '선생님, 안녕히 가세요!', en: 'Goodbye, teacher! (said to the one leaving)', blank: '가세요', alts: ['계세요', '와요', '주세요'] }
    ]
});
