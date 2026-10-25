// Hangul helpers: build/split syllable blocks, batchim-aware particles, and a
// "sounds-like" romanization for learner hints.
KG.hangul = (() => {
    const BASE = 0xAC00;
    const CHO = 'ㄱㄲㄴㄷㄸㄹㅁㅂㅃㅅㅆㅇㅈㅉㅊㅋㅌㅍㅎ'.split('');
    const JUNG = 'ㅏㅐㅑㅒㅓㅔㅕㅖㅗㅘㅙㅚㅛㅜㅝㅞㅟㅠㅡㅢㅣ'.split('');
    const JONG = ['', 'ㄱ', 'ㄲ', 'ㄳ', 'ㄴ', 'ㄵ', 'ㄶ', 'ㄷ', 'ㄹ', 'ㄺ', 'ㄻ', 'ㄼ', 'ㄽ', 'ㄾ', 'ㄿ', 'ㅀ', 'ㅁ', 'ㅂ', 'ㅄ', 'ㅅ', 'ㅆ', 'ㅇ', 'ㅈ', 'ㅊ', 'ㅋ', 'ㅌ', 'ㅍ', 'ㅎ'];

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

    // =====================
    // Pronunciation: apply Korean sound-change rules to a run of syllables
    // =====================
    // How a final consonant actually sounds before another consonant or at the end.
    const REP = {
        'ㄱ': 'ㄱ', 'ㄲ': 'ㄱ', 'ㅋ': 'ㄱ', 'ㄳ': 'ㄱ', 'ㄺ': 'ㄱ',
        'ㄴ': 'ㄴ', 'ㄵ': 'ㄴ', 'ㄶ': 'ㄴ',
        'ㄷ': 'ㄷ', 'ㅅ': 'ㄷ', 'ㅆ': 'ㄷ', 'ㅈ': 'ㄷ', 'ㅊ': 'ㄷ', 'ㅌ': 'ㄷ', 'ㅎ': 'ㄷ',
        'ㄹ': 'ㄹ', 'ㄼ': 'ㄹ', 'ㄽ': 'ㄹ', 'ㄾ': 'ㄹ', 'ㅀ': 'ㄹ',
        'ㅁ': 'ㅁ', 'ㄻ': 'ㅁ',
        'ㅂ': 'ㅂ', 'ㅍ': 'ㅂ', 'ㄿ': 'ㅂ', 'ㅄ': 'ㅂ',
        'ㅇ': 'ㅇ'
    };
    // Compound finals: the first part stays, the second moves to a following vowel (읽어 → 일거).
    const SPLIT = { 'ㄳ': ['ㄱ', 'ㅅ'], 'ㄵ': ['ㄴ', 'ㅈ'], 'ㄶ': ['ㄴ', 'ㅎ'], 'ㄺ': ['ㄹ', 'ㄱ'], 'ㄻ': ['ㄹ', 'ㅁ'], 'ㄼ': ['ㄹ', 'ㅂ'], 'ㄽ': ['ㄹ', 'ㅅ'], 'ㄾ': ['ㄹ', 'ㅌ'], 'ㄿ': ['ㄹ', 'ㅍ'], 'ㅀ': ['ㄹ', 'ㅎ'], 'ㅄ': ['ㅂ', 'ㅅ'] };
    const TENSE = { 'ㄱ': 'ㄲ', 'ㄷ': 'ㄸ', 'ㅂ': 'ㅃ', 'ㅅ': 'ㅆ', 'ㅈ': 'ㅉ' };
    const ASPIRATE = { 'ㄱ': 'ㅋ', 'ㄷ': 'ㅌ', 'ㅂ': 'ㅍ', 'ㅈ': 'ㅊ' };
    const NASAL = { 'ㄱ': 'ㅇ', 'ㄷ': 'ㄴ', 'ㅂ': 'ㅁ' };
    const STOPS = new Set(['ㄱ', 'ㄷ', 'ㅂ']);
    // Bound nouns said tense after a future -ㄹ: 할 거예요 → 할 꺼예요, 할 수 있어요 → 할 쑤.
    const AFTER_L_TENSE = new Set(['거', '것', '걸', '건', '수', '게', '데', '줄', '지']);

    function syllableOf(s) {
        return compose(s.cho, s.jung, s.jong);
    }

    function applyRules(sylls) {
        for (let i = 0; i < sylls.length - 1; i++) {
            const a = sylls[i];
            const b = sylls[i + 1];
            if (b.phraseStart || !a.jong) continue;
            let f = a.jong;
            const c = b.cho;

            // Across a space only tensing, nasalisation and -ㄹ + bound noun apply (몇 개 → 멷 깨).
            if (b.wordStart) {
                const r = REP[f];
                if (f === 'ㄹ' && AFTER_L_TENSE.has(syllableOf(b)) && TENSE[c]) b.cho = TENSE[c];
                else if (STOPS.has(r) && TENSE[c]) {
                    b.cho = TENSE[c];
                    b.tensed = true;
                }
                a.jong = STOPS.has(r) && (c === 'ㄴ' || c === 'ㅁ') ? NASAL[r] : r;
                continue;
            }

            // ㅎ finals: 좋다 → 조타, 좋아요 → 조아요, 많이 → 마니, 좋네 → 존네.
            if (f === 'ㅎ' || f === 'ㄶ' || f === 'ㅀ') {
                const rest = f === 'ㅎ' ? '' : SPLIT[f][0];
                if (c === 'ㄱ' || c === 'ㄷ' || c === 'ㅈ') {
                    b.cho = ASPIRATE[c];
                    a.jong = rest;
                    continue;
                }
                if (c === 'ㅅ') {
                    b.cho = 'ㅆ';
                    a.jong = rest;
                    continue;
                }
                if (c === 'ㄴ') {
                    a.jong = rest || 'ㄴ';
                    if (rest === 'ㄹ') b.cho = 'ㄹ';
                    continue;
                }
                if (c === 'ㅇ') {
                    a.jong = rest;
                    if (!rest) continue;
                    f = rest;
                } else {
                    f = rest || 'ㄷ';
                }
            }

            // Stop + ㅎ becomes one aspirated sound: 축하 → 추카, 입학 → 이팍, 따뜻해요 → 따뜨태요.
            if (c === 'ㅎ') {
                const [keep, last] = SPLIT[f] || ['', f];
                const r = REP[last];
                if (STOPS.has(r)) {
                    b.cho = last === 'ㅈ' ? 'ㅊ' : ASPIRATE[r];
                    a.jong = keep;
                    continue;
                }
            }

            // Liaison: a final consonant moves to a following vowel (먹어요 → 머거요).
            if (c === 'ㅇ') {
                if (f === 'ㅇ') continue;
                if (SPLIT[f]) {
                    const [keep, move] = SPLIT[f];
                    a.jong = keep;
                    // 없어요 → 업써요: ㅅ after a stop is said tense.
                    b.cho = move === 'ㅎ' ? 'ㅇ' : STOPS.has(REP[keep]) && move === 'ㅅ' ? 'ㅆ' : move;
                    continue;
                }
                // Palatalisation: 같이 → 가치, 굳이 → 구지.
                let move = f;
                if (b.jung === 'ㅣ' && (f === 'ㄷ' || f === 'ㅌ')) move = f === 'ㄷ' ? 'ㅈ' : 'ㅊ';
                a.jong = '';
                b.cho = move;
                continue;
            }

            // Consonant meets consonant.
            let r = REP[f];
            if (f === 'ㄺ' && c === 'ㄱ') r = 'ㄹ';
            if (STOPS.has(r)) {
                if (c === 'ㄴ' || c === 'ㅁ') r = NASAL[r]; // 합니다 → 함니다
                else if (c === 'ㄹ') {
                    r = NASAL[r]; // 국립 → 궁닙
                    b.cho = 'ㄴ';
                } else if (TENSE[c]) {
                    b.cho = TENSE[c]; // 학교 → 학꾜
                    b.tensed = true;
                }
            } else if (r === 'ㄴ' && c === 'ㄹ') r = 'ㄹ'; // 신라 → 실라
            else if (r === 'ㄹ' && c === 'ㄴ') b.cho = 'ㄹ'; // 설날 → 설랄
            else if ((r === 'ㅁ' || r === 'ㅇ') && c === 'ㄹ') b.cho = 'ㄴ'; // 종로 → 종노
            if (f === 'ㄺ' && c === 'ㄱ') b.cho = 'ㄲ'; // 읽고 → 일꼬
            // -ㄹ게요 / -ㄹ걸요: 할게요 → 할께요.
            if (f === 'ㄹ' && (syllableOf(b) === '게' || syllableOf(b) === '걸') && i + 2 < sylls.length && !sylls[i + 2].wordStart) b.cho = 'ㄲ';
            a.jong = r;
        }
        for (const s of sylls) if (s.jong) s.jong = REP[s.jong] || s.jong;
        return sylls;
    }

    // =====================
    // Spelling the pronounced syllables in Latin letters
    // =====================
    const ROM_CHO = { 'ㄱ': 'g', 'ㄴ': 'n', 'ㄷ': 'd', 'ㄹ': 'r', 'ㅁ': 'm', 'ㅂ': 'b', 'ㅅ': 's', 'ㅆ': 'ss', 'ㅇ': '', 'ㅈ': 'j', 'ㅊ': 'ch', 'ㅋ': 'k', 'ㅌ': 't', 'ㅍ': 'p', 'ㅎ': 'h' };
    // Tense consonants: at the start of a word an English ear hears them as g/d/b/j
    // (딸기 → dalgi); between vowels they sound doubled (오빠 → oppa); after a stop, plain k/t/p.
    const TENSE_START = { 'ㄲ': 'g', 'ㄸ': 'd', 'ㅃ': 'b', 'ㅉ': 'j' };
    const TENSE_MID = { 'ㄲ': 'kk', 'ㄸ': 'tt', 'ㅃ': 'pp', 'ㅉ': 'jj' };
    const TENSE_AFTER_STOP = { 'ㄲ': 'k', 'ㄸ': 't', 'ㅃ': 'p', 'ㅉ': 'j' };
    const ROM_JUNG = { 'ㅏ': 'a', 'ㅐ': 'ae', 'ㅑ': 'ya', 'ㅒ': 'yae', 'ㅓ': 'eo', 'ㅔ': 'e', 'ㅕ': 'yeo', 'ㅖ': 'ye', 'ㅗ': 'o', 'ㅘ': 'wa', 'ㅙ': 'wae', 'ㅚ': 'we', 'ㅛ': 'yo', 'ㅜ': 'u', 'ㅝ': 'wo', 'ㅞ': 'we', 'ㅟ': 'wi', 'ㅠ': 'yu', 'ㅡ': 'eu', 'ㅢ': 'ui', 'ㅣ': 'i' };
    const DROP_Y = { 'ㅑ': 'a', 'ㅒ': 'ae', 'ㅕ': 'eo', 'ㅖ': 'e', 'ㅛ': 'o', 'ㅠ': 'u' };
    const SH_VOWELS = new Set(['ㅣ', 'ㅑ', 'ㅒ', 'ㅕ', 'ㅖ', 'ㅛ', 'ㅠ', 'ㅟ']);
    const ROM_JONG = { 'ㄱ': 'k', 'ㄴ': 'n', 'ㄷ': 't', 'ㄹ': 'l', 'ㅁ': 'm', 'ㅂ': 'p', 'ㅇ': 'ng' };

    function renderSyllable(s, prev, strict) {
        let initial;
        const cho = s.cho;
        const prevFinal = prev && !s.phraseStart ? prev.jong : null;
        if (TENSE_MID[cho]) {
            if (strict) initial = TENSE_MID[cho];
            else if (!prev || s.phraseStart || (s.wordStart && !prevFinal)) initial = TENSE_START[cho];
            else if (STOPS.has(prevFinal)) initial = TENSE_AFTER_STOP[cho];
            else initial = TENSE_MID[cho];
        } else if (cho === 'ㅆ' && s.tensed && STOPS.has(prevFinal)) {
            // 학생 [학쌩] → haksaeng: the stop before it already makes it sharp.
            initial = SH_VOWELS.has(s.jung) && !strict ? 'sh' : 's';
        } else if (cho === 'ㄹ') {
            initial = prevFinal === 'ㄹ' ? 'l' : 'r';
        } else if (cho === 'ㅅ' && SH_VOWELS.has(s.jung) && !strict) {
            initial = 'sh'; // 시 sounds like "shee"
        } else {
            initial = ROM_CHO[cho];
        }

        let vowel = ROM_JUNG[s.jung];
        if (!strict) {
            const yDrops = cho === 'ㅈ' || cho === 'ㅉ' || cho === 'ㅊ' || initial === 'sh';
            if (yDrops && DROP_Y[s.jung]) vowel = DROP_Y[s.jung];
            // ㅖ after a consonant is said "e" (시계 → shige); ㅢ after a consonant or mid-word is "i".
            if (s.jung === 'ㅖ' && cho !== 'ㅇ' && cho !== 'ㄹ') vowel = 'e';
            if (s.jung === 'ㅢ' && (cho !== 'ㅇ' || !(s.wordStart || s.phraseStart || !prev))) vowel = 'i';
            // The copula 예요 after a vowel is said 에요: 사과예요 → sagwaeyo, 뭐예요 → mwoeyo.
            if (s.jung === 'ㅖ' && cho === 'ㅇ' && prev && !s.wordStart && !s.phraseStart && !prev.jong && s.next === '요') vowel = 'e';
        }
        return initial + vowel + (ROM_JONG[s.jong] || '');
    }

    // Spell Korean the way it actually sounds: 없어요 → eopsseoyo, 딸기 → dalgi, 좋다 → jota.
    // `strict` keeps tense consonants doubled everywhere (for Hangul letter drills).
    function romanize(text, { strict = false } = {}) {
        const tokens = [];
        let sylls = [];
        let wordStart = true;
        let phraseStart = true;
        const flush = () => {
            if (!sylls.length) return;
            const pronounced = applyRules(sylls);
            tokens.push({ sylls: pronounced });
            sylls = [];
        };
        for (const ch of text) {
            const parts = decompose(ch);
            if (parts) {
                sylls.push({ ...parts, wordStart, phraseStart });
                wordStart = false;
                phraseStart = false;
            } else {
                if (/\s/.test(ch)) wordStart = true;
                else phraseStart = true;
                if (sylls.length && !/\s/.test(ch)) flush();
                sylls.length ? (sylls[sylls.length - 1].gapAfter = (sylls[sylls.length - 1].gapAfter || '') + ch) : tokens.push({ raw: ch });
            }
        }
        flush();

        let out = '';
        for (const token of tokens) {
            if (token.raw) {
                out += token.raw;
                continue;
            }
            token.sylls.forEach((s, i) => {
                const following = token.sylls[i + 1];
                s.next = following && !following.wordStart ? syllableOf(following) : '';
                out += renderSyllable(s, token.sylls[i - 1], strict) + (s.gapAfter || '');
            });
        }
        return out;
    }

    return { CHO, JUNG, JONG, isSyllable, decompose, compose, hasBatchim, particles, romanize };
})();
