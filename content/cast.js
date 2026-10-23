// Recurring characters: display names, neural voices for audio, and the fixed look
// used in every illustration prompt so people stay recognisable across stories.
KG.setCast({
    narrator: {
        name: 'Narrator', ko: '이야기',
        voice: { id: 'ko-KR-SunHiNeural', rate: '-8%' },
        color: '#8D99AE'
    },
    minji: {
        name: 'Minji', ko: '민지',
        voice: { id: 'ko-KR-SunHiNeural' },
        color: '#FF6B6B',
        look: 'Minji: a cheerful 21-year-old Korean woman with shoulder-length straight black hair and short bangs, a mustard-yellow cardigan over a white T-shirt, light-blue jeans and white sneakers'
    },
    alex: {
        name: 'Alex', ko: '알렉스',
        voice: { id: 'ko-KR-HyunsuMultilingualNeural' },
        color: '#4ECDC4',
        look: 'Alex: a friendly 22-year-old American man with short curly light-brown hair and freckles, a green zip-up jacket over a grey T-shirt, dark jeans and a red backpack'
    },
    junho: {
        name: 'Junho', ko: '준호',
        voice: { id: 'ko-KR-InJoonNeural' },
        color: '#5C7AEA',
        look: 'Junho: a tall 27-year-old Korean man with short neat black hair, a light-blue button-up shirt with sleeves rolled up, navy trousers and a silver wristwatch'
    },
    jian: {
        name: 'Jian', ko: '지안',
        voice: { id: 'ko-KR-SunHiNeural', pitch: '+28Hz', rate: '+4%' },
        color: '#FF9F1C',
        look: 'Jian: an energetic 8-year-old Korean boy with a messy black bowl haircut, a red T-shirt with a white star, blue shorts and a yellow cap worn backwards'
    },
    halmeoni: {
        name: 'Grandma', ko: '할머니',
        voice: { id: 'ko-KR-SunHiNeural', pitch: '-14Hz', rate: '-12%' },
        color: '#A076F9',
        look: 'Grandma: a warm, smiling Korean grandmother with short permed grey hair, small round glasses, a lavender knitted vest over a cream blouse'
    },
    nabi: {
        name: 'Nabi', ko: '나비',
        voice: null,
        color: '#F4A259',
        look: 'Nabi: a round, fluffy orange tabby cat with a white chest and a little red collar with a bell'
    },
    staffM: {
        name: 'Staff', ko: '직원',
        voice: { id: 'ko-KR-InJoonNeural', pitch: '-6Hz', rate: '-4%' },
        color: '#6C757D'
    },
    staffF: {
        name: 'Staff', ko: '직원',
        voice: { id: 'ko-KR-SunHiNeural', pitch: '+6Hz' },
        color: '#E56B9F'
    }
});
