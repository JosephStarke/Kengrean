// Hangul helpers: build/split syllable blocks, batchim-aware particles, and an
// approximate Revised Romanization for learner hints.
KG.hangul = (() => {
    const BASE = 0xAC00;
    const CHO = 'ㄱㄲㄴㄷㄸㄹㅁㅂㅃㅅㅆㅇㅈㅉㅊㅋㅌㅍㅎ'.split('');
    const JUNG = 'ㅏㅐㅑㅒㅓㅔㅕㅖㅗㅘㅙㅚㅛㅜㅝㅞㅟㅠㅡㅢㅣ'.split('');
    const JONG = ['', 'ㄱ', 'ㄲ', 'ㄳ', 'ㄴ', 'ㄵ', 'ㄶ', 'ㄷ', 'ㄹ', 'ㄺ', 'ㄻ', 'ㄼ', 'ㄽ', 'ㄾ', 'ㄿ', 'ㅀ', 'ㅁ', 'ㅂ', 'ㅄ', 'ㅅ', 'ㅆ', 'ㅇ', 'ㅈ', 'ㅊ', 'ㅋ', 'ㅌ', 'ㅍ', 'ㅎ'];

    const ROM_CHO = ['g', 'kk', 'n', 'd', 'tt', 'r', 'm', 'b', 'pp', 's', 'ss', '', 'j', 'jj', 'ch', 'k', 't', 'p', 'h'];
    const ROM_JUNG = ['a', 'ae', 'ya', 'yae', 'eo', 'e', 'yeo', 'ye', 'o', 'wa', 'wae', 'oe', 'yo', 'u', 'wo', 'we', 'wi', 'yu', 'eu', 'ui', 'i'];
    // Sound of a final consonant at the end of a word or before another consonant.
    const ROM_JONG = { '': '', 'ㄱ': 'k', 'ㄲ': 'k', 'ㄳ': 'k', 'ㄴ': 'n', 'ㄵ': 'n', 'ㄶ': 'n', 'ㄷ': 't', 'ㄹ': 'l', 'ㄺ': 'k', 'ㄻ': 'm', 'ㄼ': 'l', 'ㄽ': 'l', 'ㄾ': 'l', 'ㄿ': 'p', 'ㅀ': 'l', 'ㅁ': 'm', 'ㅂ': 'p', 'ㅄ': 'p', 'ㅅ': 't', 'ㅆ': 't', 'ㅇ': 'ng', 'ㅈ': 't', 'ㅊ': 't', 'ㅋ': 'k', 'ㅌ': 't', 'ㅍ': 'p', 'ㅎ': 't' };
    // Compound finals split when the next block starts with ㅇ: 읽어 → il-geo.
    const SPLIT = { 'ㄳ': ['ㄱ', 'ㅅ'], 'ㄵ': ['ㄴ', 'ㅈ'], 'ㄶ': ['ㄴ', 'ㅎ'], 'ㄺ': ['ㄹ', 'ㄱ'], 'ㄻ': ['ㄹ', 'ㅁ'], 'ㄼ': ['ㄹ', 'ㅂ'], 'ㄽ': ['ㄹ', 'ㅅ'], 'ㄾ': ['ㄹ', 'ㅌ'], 'ㄿ': ['ㄹ', 'ㅍ'], 'ㅀ': ['ㄹ', 'ㅎ'], 'ㅄ': ['ㅂ', 'ㅅ'] };

    const isSyllable = (ch) => {
        const c = ch.charCodeAt(0);
        return c >= BASE && c <= 0xD7A3;
    };

    function decompose(ch) {
        if (!isSyllable(ch)) return null;
        const code = ch.charCodeAt(0) - BASE;
        return { cho: CHO[Math.floor(code / 588)], jung: JUNG[Math.floor((code % 588) / 28)], jong: JONG[code % 28] };
    }

    function compose(cho, jung, jong = '') {
        const i = CHO.indexOf(cho);
        const m = JUNG.indexOf(jung);
        const f = JONG.indexOf(jong || '');
        if (i < 0 || m < 0 || f < 0) return (cho || '') + (jung || '') + (jong || '');
        return String.fromCharCode(BASE + i * 588 + m * 28 + f);
    }

    function lastSyllable(word) {
        const chars = [...word.replace(/[^가-힣]/g, '')];
        return chars[chars.length - 1] || '';
    }

    function hasBatchim(word) {
        const parts = decompose(lastSyllable(word));
        return !!parts && parts.jong !== '';
    }

    const particles = {
        copula: (n) => n + (hasBatchim(n) ? '이에요' : '예요'),
        topic: (n) => n + (hasBatchim(n) ? '은' : '는'),
        subject: (n) => n + (hasBatchim(n) ? '이' : '가'),
        object: (n) => n + (hasBatchim(n) ? '을' : '를')
    };

    function romanizeWord(word) {
        const blocks = [...word].map((ch) => decompose(ch) || { raw: ch });
        let out = '';
        for (let i = 0; i < blocks.length; i++) {
            const b = blocks[i];
            if (b.raw) {
                out += b.raw;
                continue;
            }
            const next = blocks[i + 1];
            const prev = blocks[i - 1];
            // Liaison: the previous block's final consonant moved into this block.
            const cho = prev && !prev.raw && prev.carry ? prev.carry : b.cho;
            let initial = ROM_CHO[CHO.indexOf(cho)];
            // Liquid assimilation: ㄹ+ㄹ, ㄴ+ㄹ and ㄹ+ㄴ are all said "ll" (설날 → seollal).
            const liquid = prev && !prev.raw && ((prev.jong === 'ㄹ' && (b.cho === 'ㄹ' || b.cho === 'ㄴ')) || (prev.jong === 'ㄴ' && b.cho === 'ㄹ'));
            if (liquid) initial = 'l';
            out += initial + ROM_JUNG[JUNG.indexOf(b.jung)];

            const final = b.jong;
            if (final && next && !next.raw && next.cho === 'ㅇ') {
                if (SPLIT[final]) {
                    out += ROM_JONG[SPLIT[final][0]];
                    b.carry = SPLIT[final][1] === 'ㅎ' ? 'ㅇ' : SPLIT[final][1];
                } else if (final === 'ㅇ') {
                    out += 'ng';
                } else {
                    b.carry = final === 'ㅎ' ? 'ㅇ' : final;
                }
                continue;
            }
            let sound = ROM_JONG[final];
            // Nasalisation before ㄴ / ㅁ: 합니다 → hamnida, 한국말 → hangungmal.
            if (next && !next.raw && (next.cho === 'ㄴ' || next.cho === 'ㅁ')) {
                sound = { k: 'ng', t: 'n', p: 'm' }[sound] || sound;
            }
            if (next && !next.raw && ((final === 'ㄹ' && (next.cho === 'ㄹ' || next.cho === 'ㄴ')) || (final === 'ㄴ' && next.cho === 'ㄹ'))) sound = 'l';
            out += sound;
        }
        return out;
    }

    function romanize(text) {
        return text.split(/(\s+)/).map((part) => (/[가-힣]/.test(part) ? romanizeWord(part) : part)).join('');
    }

    return { CHO, JUNG, JONG, isSyllable, decompose, compose, hasBatchim, particles, romanize };
})();
