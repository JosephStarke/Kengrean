// Practice: question modes, the quiz session runner, arcade games (flashcards, memory,
// bubble pop, speed round) and the practice hub.
KG.games = (() => {
    const h = KG.h;
    const ui = KG.ui;
    const store = KG.store;
    const { shuffle, pick, sample, uniqueBy, wait } = KG.util;

    // =====================
    // Sources: what a game draws its words and sentences from
    // =====================
    function unitSentences(u) {
        const examples = u.patterns.flatMap((p) => p.examples.map((e) => ({ ...e, unitId: u.id })));
        return [...u.sentences.map((s) => ({ ...s, unitId: u.id })), ...examples];
    }

    function fromUnits(units, title, levelId) {
        return {
            title,
            levelId,
            units,
            words: uniqueBy(units.flatMap((u) => u.vocab), (w) => w.ko),
            sentences: uniqueBy(units.flatMap(unitSentences), (s) => s.ko),
            letters: units.flatMap((u) => u.letters || []),
            blocks: units.flatMap((u) => u.blocks || [])
        };
    }

    function studiedUnits() {
        const started = KG.units.filter((u) => store.started(u.id));
        return started.length ? started : KG.units.slice(0, 1);
    }

    function resolveSource(key) {
        const [kind, id] = key.split(':');
        if (kind === 'unit' && KG.unitById[id]) {
            const u = KG.unitById[id];
            return { ...fromUnits([u], `${u.icon} ${u.title}`, u.level), back: `#/unit/${u.id}` };
        }
        if (kind === 'pack' && KG.packById[id]) {
            const p = KG.packById[id];
            return { title: `${p.icon} ${p.title}`, levelId: p.level, units: [], words: p.words, sentences: [], letters: [], blocks: [], back: `#/words/pack/${p.id}` };
        }
        if (kind === 'level' && KG.levels.some((l) => l.id === id)) {
            return { ...fromUnits(KG.unitsIn(id), `Level ${id}`, id), back: '#/practice' };
        }
        if (kind === 'review') {
            const all = allWords();
            const due = new Set(store.srsDue());
            let words = all.filter((w) => due.has(w.ko));
            if (words.length < 4) {
                const known = all.filter((w) => store.srsStrength(w.ko) >= 0).sort((a, b) => store.srsStrength(a.ko) - store.srsStrength(b.ko));
                words = uniqueBy([...words, ...known], (w) => w.ko).slice(0, 12);
            }
            return { title: '🔁 Daily review', levelId: null, units: [], words, sentences: [], letters: [], blocks: [], back: '#/practice', review: true };
        }
        const src = fromUnits(studiedUnits(), '📚 Everything studied', null);
        return { ...src, back: '#/practice' };
    }

    function allWords() {
        return uniqueBy([...KG.units.flatMap((u) => u.vocab), ...KG.packs.flatMap((p) => p.words)], (w) => w.ko);
    }

    function levelOf(item) {
        if (item.unitId) return KG.unitById[item.unitId].level;
        if (item.packId) return KG.packById[item.packId].level;
        return 'A1';
    }

    const romFor = (item) => ui.showRom(levelOf(item));

    // Wrong answers: same kind of item, distinct text and meaning.
    function distractors(item, pool, n, key) {
        const used = new Set([key(item), item.ko]);
        const out = [];
        for (const cand of [...shuffle(pool), ...shuffle(allWords())]) {
            if (out.length >= n) break;
            const k = key(cand);
            if (!k || used.has(k) || used.has(cand.ko)) continue;
            used.add(k);
            used.add(cand.ko);
            out.push(cand);
        }
        return out;
    }

    // =====================
    // Question builders
    // =====================
    function koChoice(w) {
        return h('span.choice-ko', ui.ko(w.ko, { rom: romFor(w) }));
    }
    function picChoice(w) {
        return h('span.choice-pic', h('span.choice-emoji', w.emoji || '💬'), h('span.choice-sub', w.en));
    }

    function choiceQ({ mode, item, prompt, options, answer, audio, autoplay = true, reveal, srs }) {
        return { type: 'choice', mode, item, prompt, options, answer, audio, autoplay, reveal, srs };
    }

    const Q = {
        listen(w, pool) {
            const opts = shuffle([w, ...distractors(w, pool, 3, (x) => x.en)]);
            return choiceQ({
                mode: 'listen', item: w,
                prompt: () => h('div.prompt', h('div.prompt-label', 'What do you hear?'), h('div.prompt-audio', ui.audioBtn(w.ko, { size: 'xl' }), ui.slowBtn(w.ko))),
                options: opts.map((o) => ({ key: o.ko, node: () => picChoice(o) })),
                answer: w.ko, audio: w.ko, reveal: w, srs: w.ko
            });
        },
        picture(w, pool) {
            if (!w.emoji) return Q.recall(w, pool);
            const opts = shuffle([w, ...distractors(w, pool, 3, (x) => x.ko)]);
            return choiceQ({
                mode: 'picture', item: w,
                prompt: () => h('div.prompt', h('div.prompt-label', 'Which word matches the picture?'), h('div.prompt-emoji', w.emoji)),
                options: opts.map((o) => ({ key: o.ko, node: () => koChoice(o) })),
                answer: w.ko, audio: w.ko, autoplay: false, reveal: w, srs: w.ko
            });
        },
        meaning(w, pool) {
            const opts = shuffle([w, ...distractors(w, pool, 3, (x) => x.en)]);
            return choiceQ({
                mode: 'meaning', item: w,
                prompt: () => h('div.prompt', h('div.prompt-label', 'What does this mean?'),
                    h('div.prompt-ko', ui.ko(w.ko, { rom: romFor(w) }), ui.audioBtn(w.ko)),
                    w.polite ? h('div.prompt-polite', { lang: 'ko' }, w.polite) : null),
                options: opts.map((o) => ({ key: o.ko, node: () => h('span.choice-en', o.en) })),
                answer: w.ko, audio: w.ko, reveal: w, srs: w.ko
            });
        },
        recall(w, pool) {
            const opts = shuffle([w, ...distractors(w, pool, 3, (x) => x.ko)]);
            return choiceQ({
                mode: 'recall', item: w,
                prompt: () => h('div.prompt', h('div.prompt-label', 'How do you say this in Korean?'),
                    h('div.prompt-en', w.emoji ? h('span.inline-emoji', w.emoji) : null, w.en)),
                options: opts.map((o) => ({ key: o.ko, node: () => koChoice(o) })),
                answer: w.ko, audio: w.ko, autoplay: false, reveal: w, srs: w.ko
            });
        },
        truefalse(w, pool) {
            const nouns = pool.filter((x) => x.pos === 'noun' && x.emoji && !x.ko.includes(' '));
            if (w.pos !== 'noun' || !w.emoji || w.ko.includes(' ') || nouns.length < 2) return Q.listen(w, pool);
            const truth = Math.random() < 0.5;
            const shown = truth ? w : distractors(w, nouns, 1, (x) => x.emoji)[0] || w;
            const isTrue = shown === w;
            const statement = `${KG.hangul.particles.copula(w.ko)}.`;
            return choiceQ({
                mode: 'truefalse', item: w,
                prompt: () => h('div.prompt', h('div.prompt-label', 'True or false?'),
                    h('div.prompt-emoji', shown.emoji),
                    h('div.prompt-ko', ui.ko(statement, { rom: romFor(w) }), ui.audioBtn(statement))),
                options: [
                    { key: 'true', node: () => h('span.choice-tf', '⭕ ', h('span', { lang: 'ko' }, '맞아요'), h('small', 'true')) },
                    { key: 'false', node: () => h('span.choice-tf', '❌ ', h('span', { lang: 'ko' }, '아니에요'), h('small', 'false')) }
                ],
                answer: String(isTrue), audio: statement,
                reveal: { ko: KG.hangul.particles.copula(shown.ko), en: `It's ${shown.en}.`, emoji: shown.emoji },
                srs: w.ko
            });
        },
        blank(s, pool) {
            if (!s.blank) return Q.dictation(s, pool);
            const at = s.ko.indexOf(s.blank);
            const opts = shuffle([s.blank, ...s.alts]);
            return choiceQ({
                mode: 'blank', item: s,
                prompt: () => h('div.prompt', h('div.prompt-label', 'Fill the gap'),
                    h('div.prompt-sentence', { lang: 'ko' }, s.ko.slice(0, at), h('span.gap', '＿＿'), s.ko.slice(at + s.blank.length)),
                    h('div.prompt-sub', s.en)),
                options: opts.map((o) => ({ key: o, node: () => h('span.choice-ko', { lang: 'ko' }, o) })),
                answer: s.blank, audio: s.ko, autoplay: false, reveal: s
            });
        },
        dictation(s, pool) {
            const others = sample(pool, 3, (x) => x.ko === s.ko || x.en === s.en);
            if (others.length < 2) return Q.build(s, pool);
            const opts = shuffle([s, ...others]);
            return choiceQ({
                mode: 'dictation', item: s,
                prompt: () => h('div.prompt', h('div.prompt-label', 'Listen — what was said?'), h('div.prompt-audio', ui.audioBtn(s.ko, { size: 'xl' }), ui.slowBtn(s.ko))),
                options: opts.map((o) => ({ key: o.ko, node: () => h('span.choice-en', o.en) })),
                answer: s.ko, audio: s.ko, reveal: s
            });
        },
        build(s, pool) {
            // Punctuation would give away the last tile, so tiles are bare words.
            const bare = (t) => t.replace(/[.,!?…]+$/, '');
            const tiles = s.ko.split(' ').map(bare);
            const extra = uniqueBy(shuffle(pool.flatMap((x) => x.ko.split(' ').map(bare))), (t) => t).filter((t) => t && !tiles.includes(t)).slice(0, tiles.length > 4 ? 1 : 2);
            return { type: 'build', mode: 'build', item: s, tiles: shuffle([...tiles, ...extra]), answer: tiles.join(' '), audio: s.ko, reveal: s };
        },
        letter(l, letters) {
            const opts = shuffle([l, ...sample(letters, 3, (x) => x.ch === l.ch)]);
            return choiceQ({
                mode: 'letter', item: l,
                prompt: () => h('div.prompt', h('div.prompt-label', 'Which letter makes this sound?'), h('div.prompt-audio', ui.audioBtn(l.say, { size: 'xl' }))),
                options: opts.map((o) => ({ key: o.ch, node: () => h('span.choice-letter', { lang: 'ko' }, o.ch) })),
                answer: l.ch, audio: l.say,
                reveal: { ko: l.ch, en: `${l.rom} — as in ${l.say}` }
            });
        },
        letterRom(l, letters) {
            const opts = shuffle([l, ...sample(letters, 3, (x) => x.rom === l.rom)]);
            return choiceQ({
                mode: 'letterRom', item: l,
                prompt: () => h('div.prompt', h('div.prompt-label', 'What sound does this letter make?'), h('div.prompt-letter', { lang: 'ko' }, l.ch)),
                options: opts.map((o) => ({ key: o.rom, node: () => h('span.choice-en', o.rom) })),
                answer: l.rom, audio: l.say, autoplay: false,
                reveal: { ko: l.ch, en: `${l.rom} — as in ${l.say}` }
            });
        },
        block(target, blocks) {
            const parts = KG.hangul.decompose(target);
            const all = blocks.map(KG.hangul.decompose).filter(Boolean);
            const rowOf = (key, fallback) => {
                const choices = uniqueBy(shuffle([parts[key], ...all.map((p) => p[key]), ...fallback]), (x) => x).filter((x) => x !== undefined);
                const others = choices.filter((x) => x !== parts[key]).slice(0, 3);
                return shuffle([parts[key], ...others]);
            };
            const rows = [
                { key: 'cho', label: 'First', options: rowOf('cho', ['ㄱ', 'ㄴ', 'ㅁ', 'ㅅ']) },
                { key: 'jung', label: 'Vowel', options: rowOf('jung', ['ㅏ', 'ㅗ', 'ㅜ', 'ㅣ']) }
            ];
            if (all.some((p) => p.jong)) rows.push({ key: 'jong', label: 'Bottom', options: rowOf('jong', ['', 'ㄴ', 'ㅁ', 'ㅇ']) });
            return { type: 'block', mode: 'block', item: { ko: target }, rows, answer: target, audio: target, reveal: { ko: target, en: KG.hangul.romanize(target) } };
        }
    };

    // =====================
    // Modes
    // =====================
    const wordsOf = (src) => src.words;
    const sentOf = (src) => src.sentences;

    function take(list, n) {
        const out = [];
        let pool = shuffle(list);
        while (out.length < n && list.length) {
            if (!pool.length) pool = shuffle(list);
            out.push(pool.pop());
        }
        return out;
    }

    const MODES = {
        mix: { name: 'Mixed Quiz', icon: '🎲', desc: 'A bit of everything.', needs: (s) => s.words.length >= 2, make: mixQuestions },
        listen: { name: 'Listen & Pick', icon: '🎧', desc: 'Hear a word, tap its picture.', needs: (s) => s.words.length >= 2, make: (s) => take(wordsOf(s), 10).map((w) => Q.listen(w, s.words)) },
        picture: { name: 'Picture Match', icon: '🖼️', desc: 'See it, name it in Korean.', needs: (s) => s.words.length >= 2, make: (s) => take(wordsOf(s).filter((w) => w.emoji), 10).map((w) => Q.picture(w, s.words)) },
        meaning: { name: 'Meaning', icon: '📖', desc: 'Korean → English.', needs: (s) => s.words.length >= 2, make: (s) => take(wordsOf(s), 10).map((w) => Q.meaning(w, s.words)) },
        recall: { name: 'Say It', icon: '💬', desc: 'English → Korean.', needs: (s) => s.words.length >= 2, make: (s) => take(wordsOf(s), 10).map((w) => Q.recall(w, s.words)) },
        truefalse: { name: 'True or False', icon: '⭕', desc: 'Does the sentence match the picture?', needs: (s) => s.words.filter((w) => w.pos === 'noun' && w.emoji).length >= 3, make: (s) => take(s.words.filter((w) => w.pos === 'noun' && w.emoji && !w.ko.includes(' ')), 10).map((w) => Q.truefalse(w, s.words)) },
        blank: { name: 'Fill the Gap', icon: '🧩', desc: 'Pick the missing piece.', needs: (s) => s.sentences.some((x) => x.blank), make: (s) => take(sentOf(s).filter((x) => x.blank), 10).map((x) => Q.blank(x, s.sentences)) },
        build: { name: 'Sentence Builder', icon: '🧱', desc: 'Tap the tiles into order.', needs: (s) => s.sentences.some((x) => x.ko.includes(' ')), make: (s) => take(sentOf(s).filter((x) => x.ko.includes(' ')), 8).map((x) => Q.build(x, s.sentences)) },
        dictation: { name: 'Listening', icon: '👂', desc: 'Hear a sentence, pick its meaning.', needs: (s) => s.sentences.length >= 3, make: (s) => take(sentOf(s), 10).map((x) => Q.dictation(x, s.sentences)) },
        letters: { name: 'Letter Sounds', icon: '🔤', desc: 'Match letters and sounds.', needs: (s) => s.letters.length >= 2, make: (s) => take(s.letters, 10).map((l, i) => (i % 2 ? Q.letterRom(l, s.letters) : Q.letter(l, s.letters))) },
        blocks: { name: 'Block Builder', icon: '🏗️', desc: 'Build the syllable you hear.', needs: (s) => s.blocks.length >= 3, make: (s) => take(s.blocks, 8).map((b) => Q.block(b, s.blocks)) }
    };

    const ARCADE = {
        flashcards: { name: 'Flashcards', icon: '🗂️', desc: 'Flip, recall, rate yourself.', needs: (s) => s.words.length >= 1 },
        memory: { name: 'Memory Match', icon: '🃏', desc: 'Pair words with pictures.', needs: (s) => s.words.filter((w) => w.emoji).length >= 4 },
        bubbles: { name: 'Bubble Pop', icon: '🫧', desc: 'Pop the word you hear!', needs: (s) => s.words.length >= 4 },
        speed: { name: 'Speed Round', icon: '⚡', desc: '60 seconds. How many?', needs: (s) => s.words.length >= 4 }
    };

    function mixQuestions(src) {
        const qs = [];
        const words = src.words;
        if (src.letters.length) {
            // Letters first, then blocks and real words.
            const late = [];
            take(src.letters, 4).forEach((l) => qs.push(Q.letter(l, src.letters)));
            take(src.letters, 3).forEach((l) => qs.push(Q.letterRom(l, src.letters)));
            if (src.blocks.length >= 3) take(src.blocks, 3).forEach((b) => late.push(Q.block(b, src.blocks)));
            take(words, 2).forEach((w) => late.push(Q.listen(w, words)));
            take(words.filter((w) => w.emoji), 2).forEach((w) => late.push(Q.picture(w, words)));
            return [...shuffle(qs), ...shuffle(late)];
        }
        const w = take(words, 9);
        [Q.listen, Q.listen, Q.picture, Q.picture, Q.meaning, Q.meaning, Q.recall, Q.recall, Q.truefalse].forEach((make, i) => {
            if (w[i]) qs.push(make(w[i], words));
        });
        const sents = src.sentences;
        if (sents.length) {
            take(sents.filter((s) => s.blank), 2).forEach((s) => qs.push(Q.blank(s, sents)));
            take(sents.filter((s) => s.ko.includes(' ')), 2).forEach((s) => qs.push(Q.build(s, sents)));
            take(sents, 1).forEach((s) => qs.push(Q.dictation(s, sents)));
        }
        // Words first (input), then sentences (output): easier start, harder finish.
        const wordQs = shuffle(qs.filter((q) => !['blank', 'build', 'dictation'].includes(q.mode)));
        const sentQs = shuffle(qs.filter((q) => ['blank', 'build', 'dictation'].includes(q.mode)));
        return [...wordQs, ...sentQs];
    }

    // =====================
    // Session runner (any list of questions)
    // =====================
    function runSession({ title, back, questions, onFinish, again }) {
        const total = questions.length;
        const queue = [...questions];
        const state = { done: 0, mistakes: 0, combo: 0, bestCombo: 0, xp: 0, current: null, locked: false };

        const bar = h('div.session-bar', ui.progressBar(0, total));
        const comboEl = h('div.combo');
        const area = h('div.q-area');
        const sheet = h('div.feedback', { hidden: true });
        const view = h('section.page.session',
            h('header.session-head',
                h('a.close', { href: back, 'aria-label': 'Quit' }, '×'),
                bar, comboEl),
            h('div.session-title', title),
            area, sheet);

        function updateBar() {
            KG.fill(bar, ui.progressBar(state.done, total));
            comboEl.textContent = state.combo >= 3 ? `🔥 ${state.combo}` : '';
        }

        function next() {
            sheet.hidden = true;
            state.locked = false;
            if (!queue.length) return finish();
            state.current = queue.shift();
            renderQuestion(state.current);
        }

        function renderQuestion(q) {
            KG.fill(area);
            area.classList.remove('shake');
            if (q.type === 'choice') renderChoice(q);
            else if (q.type === 'build') renderBuild(q);
            else if (q.type === 'block') renderBlock(q);
            if (q.autoplay && q.audio && store.setting('autoAudio')) setTimeout(() => KG.audio.play(q.audio), 250);
        }

        function renderChoice(q) {
            const grid = h(`div.choices.n${q.options.length}`);
            q.options.forEach((o, i) => {
                const btn = h('button.choice', { type: 'button', dataset: { key: o.key } }, h('span.choice-num', String(i + 1)), o.node());
                btn.addEventListener('click', () => {
                    if (state.locked) return;
                    const right = o.key === q.answer;
                    btn.classList.add(right ? 'right' : 'wrong');
                    if (!right) grid.querySelector(`[data-key="${CSS.escape(q.answer)}"]`)?.classList.add('right');
                    answered(q, right);
                });
                grid.append(btn);
            });
            area.append(q.prompt(), grid);
        }

        function renderBuild(q) {
            const answer = h('div.build-answer');
            const bank = h('div.build-bank');
            const placed = [];
            const redraw = () => {
                KG.fill(answer, ...(placed.length ? placed.map((t, i) => h('button.tile.placed', { type: 'button', lang: 'ko', onclick: () => { if (state.locked) return; placed.splice(i, 1); redraw(); } }, t.text)) : [h('span.build-hint', 'Tap the tiles below')]));
                bank.querySelectorAll('.tile').forEach((b) => { b.disabled = placed.some((t) => t.id === Number(b.dataset.id)); });
                check.disabled = !placed.length;
            };
            q.tiles.forEach((text, id) => bank.append(h('button.tile', { type: 'button', lang: 'ko', dataset: { id }, onclick: () => { if (state.locked) return; placed.push({ id, text }); redraw(); KG.audio.sfx(''); } }, text)));
            const check = ui.button('Check', () => {
                if (state.locked) return;
                const right = placed.map((t) => t.text).join(' ') === q.answer;
                answer.classList.add(right ? 'right' : 'wrong');
                answered(q, right);
            }, 'primary big');
            area.append(
                h('div.prompt', h('div.prompt-label', 'Build the sentence'), h('div.prompt-en', q.item.en), h('div.prompt-audio.sm', ui.audioBtn(q.audio), ui.slowBtn(q.audio))),
                answer, bank, h('div.center', check));
            redraw();
        }

        function renderBlock(q) {
            const choice = { cho: null, jung: null, jong: q.rows.length > 2 ? null : '' };
            const preview = h('div.block-preview', { lang: 'ko' }, '?');
            const rows = q.rows.map((r) => h('div.block-row-pick', h('span.mini-label', r.label),
                h('div.block-options', r.options.map((opt) => h('button.jamo', {
                    type: 'button', lang: 'ko', dataset: { row: r.key, val: opt },
                    onclick: (e) => {
                        if (state.locked) return;
                        choice[r.key] = opt;
                        e.currentTarget.parentElement.querySelectorAll('.jamo').forEach((b) => b.classList.toggle('on', b === e.currentTarget));
                        const ready = choice.cho && choice.jung && choice.jong !== null;
                        preview.textContent = choice.cho && choice.jung ? KG.hangul.compose(choice.cho, choice.jung, choice.jong || '') : (choice.cho || '') + (choice.jung || '') || '?';
                        check.disabled = !ready;
                    }
                }, opt || '∅')))));
            const check = ui.button('Check', () => {
                if (state.locked) return;
                const built = KG.hangul.compose(choice.cho, choice.jung, choice.jong || '');
                const right = built === q.answer;
                preview.classList.add(right ? 'right' : 'wrong');
                answered(q, right);
            }, 'primary big');
            check.disabled = true;
            area.append(
                h('div.prompt', h('div.prompt-label', 'Build the block you hear'), h('div.prompt-audio', ui.audioBtn(q.audio, { size: 'xl' }), ui.slowBtn(q.audio))),
                preview, ...rows, h('div.center', check));
        }

        function answered(q, right) {
            state.locked = true;
            if (q.srs) store.srsReview(q.srs, right);
            if (right) {
                state.done++;
                state.combo++;
                state.bestCombo = Math.max(state.bestCombo, state.combo);
                if (!q.retry) state.xp += 2;
                KG.audio.sfx('correct');
            } else {
                state.mistakes++;
                state.combo = 0;
                area.classList.add('shake');
                KG.audio.sfx('wrong');
                // Bring it back a little later (at most twice) so the learner gets another go.
                if ((q.tries || 0) < 2) {
                    const again = { ...q, retry: true, tries: (q.tries || 0) + 1 };
                    if (q.type === 'choice') again.options = shuffle(q.options);
                    if (q.type === 'build') again.tiles = shuffle(q.tiles);
                    queue.splice(Math.min(queue.length, 2 + Math.floor(Math.random() * 3)), 0, again);
                } else {
                    state.done++;
                }
            }
            updateBar();
            showFeedback(q, right);
        }

        function showFeedback(q, right) {
            const r = q.reveal || {};
            const goOn = ui.button('Continue', next, right ? 'good big' : 'bad big');
            sheet.className = `feedback ${right ? 'good' : 'bad'}`;
            KG.fill(sheet, 
                h('div.fb-head', right ? pick(['정답! Correct!', '잘했어요! Nice!', '좋아요! Great!', '맞아요! Right!']) : 'Not quite — here it is:'),
                r.ko ? h('div.fb-answer', r.emoji ? h('span.inline-emoji', r.emoji) : null, h('span', { lang: 'ko' }, r.ko), q.audio ? ui.audioBtn(q.audio, { size: 'sm' }) : null) : null,
                r.en ? h('div.fb-en', r.en) : null,
                goOn);
            sheet.hidden = false;
            if (q.audio) KG.audio.play(q.audio);
            goOn.focus({ preventScroll: true });
            if (right) {
                const token = state.done;
                setTimeout(() => { if (state.done === token && !sheet.hidden && document.body.contains(view)) next(); }, 1600);
            }
        }

        function finish() {
            const accuracy = Math.round((total / (total + state.mistakes)) * 100);
            const stars = state.mistakes <= 1 ? 3 : state.mistakes <= 3 ? 2 : 1;
            const bonus = 5 + stars * 3;
            store.addXp(state.xp + bonus);
            if (onFinish) onFinish({ stars, accuracy, mistakes: state.mistakes });
            if (stars === 3) ui.confetti();
            KG.fill(area, h('div.results',
                h('div.finish-emoji', stars === 3 ? '🏆' : stars === 2 ? '🎉' : '💪'),
                h('h2', stars === 3 ? 'Perfect run!' : stars === 2 ? 'Great job!' : 'Done — keep going!'),
                ui.stars(stars),
                h('div.result-stats',
                    h('div', h('b', `${accuracy}%`), h('span', 'accuracy')),
                    h('div', h('b', `+${state.xp + bonus}`), h('span', 'XP')),
                    h('div', h('b', String(state.bestCombo)), h('span', 'best combo'))),
                h('div.finish-actions',
                    again ? ui.button('🔁 Play again', again, 'ghost') : null,
                    h('a.btn.primary', { href: back }, 'Continue ›'))));
            sheet.hidden = true;
            KG.fill(bar, ui.progressBar(1, 1));
        }

        function onKey(e) {
            if (!document.body.contains(view)) {
                document.removeEventListener('keydown', onKey);
                return;
            }
            if (!sheet.hidden && (e.key === 'Enter' || e.key === ' ')) {
                e.preventDefault();
                next();
                return;
            }
            const n = Number(e.key);
            if (!state.locked && n >= 1 && n <= 4) area.querySelectorAll('.choice')[n - 1]?.click();
        }
        document.addEventListener('keydown', onKey);
        setTimeout(next, 0);
        return view;
    }

    // =====================
    // Flashcards
    // =====================
    function flashcards(src, back) {
        const deck = shuffle(src.words);
        const state = { i: 0, flipped: false, known: 0, again: 0, dir: store.setting('cardDir') || 'ko' };
        const cardHost = h('div.fc-host');
        const counter = h('div.fc-counter');
        const rate = h('div.fc-rate', { hidden: true },
            ui.button('😅 Again', () => grade(false), 'bad big'),
            ui.button('😊 Got it', () => grade(true), 'good big'));
        const dirBtn = h('div.seg', [['ko', '한 → EN'], ['en', 'EN → 한'], ['pic', '🖼️ → 한']].map(([key, label]) => h(`button.seg-btn${state.dir === key ? '.on' : ''}`, {
            type: 'button',
            onclick: (e) => {
                state.dir = key;
                store.setting('cardDir', key);
                dirBtn.querySelectorAll('.seg-btn').forEach((b) => b.classList.toggle('on', b === e.currentTarget));
                draw();
            }
        }, label)));

        function face(w, side) {
            const front = state.dir === 'ko' ? 'ko' : state.dir === 'en' ? 'en' : 'pic';
            const kind = side === 'front' ? front : 'full';
            if (kind === 'ko') return h('div.fc-face', ui.ko(w.ko, { rom: romFor(w), cls: 'xl' }), w.polite ? h('div.word-polite', w.polite) : null);
            if (kind === 'en') return h('div.fc-face', h('div.fc-en', w.en));
            if (kind === 'pic') return h('div.fc-face', h('div.fc-emoji', w.emoji || '💬'));
            return h('div.fc-face', h('div.fc-emoji.sm', w.emoji || ''), ui.ko(w.ko, { rom: true, cls: 'xl' }), w.polite ? h('div.word-polite', w.polite) : null, h('div.fc-en', w.en), w.note ? h('div.word-note', w.note) : null);
        }

        function draw() {
            if (state.i >= deck.length) return done();
            const w = deck[state.i];
            state.flipped = false;
            counter.textContent = `${state.i + 1} / ${deck.length}`;
            rate.hidden = true;
            const card = h('button.fc-card', { type: 'button', 'aria-label': 'Flip card', onclick: flip },
                h('div.fc-inner', h('div.fc-front', face(w, 'front'), h('span.fc-hint', 'tap to flip')), h('div.fc-back', face(w, 'back'))));
            KG.fill(cardHost, card, h('div.fc-audio', ui.audioBtn(w.ko, { label: 'Hear it' }), ui.slowBtn(w.ko)));
            if (state.dir === 'ko' && store.setting('autoAudio')) KG.audio.play(w.ko);
        }

        function flip() {
            const w = deck[state.i];
            state.flipped = !state.flipped;
            cardHost.querySelector('.fc-card').classList.toggle('flipped', state.flipped);
            if (state.flipped) {
                rate.hidden = false;
                if (state.dir !== 'ko') KG.audio.play(w.ko);
            }
        }

        function grade(knew) {
            const w = deck[state.i];
            store.srsReview(w.ko, knew);
            if (knew) state.known++;
            else {
                state.again++;
                deck.splice(Math.min(deck.length, state.i + 3 + Math.floor(Math.random() * 3)), 0, w);
            }
            state.i++;
            draw();
        }

        function done() {
            store.addXp(Math.min(20, 3 + state.known));
            rate.hidden = true;
            counter.textContent = '';
            KG.fill(cardHost, h('div.results',
                h('div.finish-emoji', '🗂️'),
                h('h2', 'Deck finished!'),
                h('div.result-stats', h('div', h('b', String(state.known)), h('span', 'got it')), h('div', h('b', String(state.again)), h('span', 'again'))),
                h('div.finish-actions', ui.button('🔁 Shuffle again', () => { deck.splice(0, deck.length, ...shuffle(src.words)); Object.assign(state, { i: 0, known: 0, again: 0 }); draw(); }, 'ghost'), h('a.btn.primary', { href: back }, 'Continue ›'))));
        }

        const view = ui.page({ back, title: 'Flashcards', sub: src.title, cls: 'flashcards' }, h('div.fc-top', dirBtn, counter), cardHost, rate);
        function onKey(e) {
            if (!document.body.contains(view)) return document.removeEventListener('keydown', onKey);
            if (e.code === 'Space') { e.preventDefault(); if (cardHost.querySelector('.fc-card')) flip(); }
            if (state.flipped && e.key === '1') grade(false);
            if (state.flipped && e.key === '2') grade(true);
        }
        document.addEventListener('keydown', onKey);
        setTimeout(draw, 0);
        return view;
    }

    // =====================
    // Memory match
    // =====================
    function memory(src, back) {
        const pairs = window.innerWidth > 720 ? 8 : 6;
        const words = sample(src.words.filter((w) => w.emoji), pairs);
        const state = { open: [], matched: 0, moves: 0, start: 0, timer: null };
        const info = h('div.mem-info');
        const grid = h('div.mem-grid');

        function setup() {
            clearInterval(state.timer);
            Object.assign(state, { open: [], matched: 0, moves: 0, start: Date.now() });
            const cards = shuffle(words.flatMap((w) => [{ w, side: 'ko' }, { w, side: 'pic' }]));
            KG.fill(grid, ...cards.map((c) => {
                const btn = h('button.mem-card', { type: 'button', 'aria-label': 'Hidden card' },
                    h('div.mem-inner', h('div.mem-back', '?'), h('div.mem-front', c.side === 'ko' ? h('span', { lang: 'ko' }, c.w.ko) : h('span.mem-pic', c.w.emoji, h('small', c.w.en)))));
                btn.addEventListener('click', () => flip(btn, c));
                return btn;
            }));
            state.timer = setInterval(updateInfo, 1000);
            updateInfo();
        }

        function updateInfo() {
            if (!document.body.contains(grid)) return clearInterval(state.timer);
            const secs = Math.round((Date.now() - state.start) / 1000);
            info.textContent = `Moves: ${state.moves} · Time: ${secs}s · Pairs: ${state.matched}/${words.length}`;
        }

        function flip(btn, c) {
            if (btn.classList.contains('open') || state.open.length === 2) return;
            btn.classList.add('open');
            if (c.side === 'ko') KG.audio.play(c.w.ko);
            state.open.push({ btn, c });
            if (state.open.length < 2) return;
            state.moves++;
            const [a, b] = state.open;
            if (a.c.w === b.c.w) {
                state.matched++;
                setTimeout(() => {
                    a.btn.classList.add('matched');
                    b.btn.classList.add('matched');
                    KG.audio.play(a.c.w.ko);
                    state.open = [];
                    if (state.matched === words.length) win();
                }, 350);
            } else {
                setTimeout(() => {
                    a.btn.classList.remove('open');
                    b.btn.classList.remove('open');
                    state.open = [];
                }, 900);
            }
            updateInfo();
        }

        function win() {
            clearInterval(state.timer);
            const secs = Math.round((Date.now() - state.start) / 1000);
            const score = Math.max(100, 1000 - state.moves * 20 - secs * 4);
            const record = store.best('memory', score);
            store.addXp(8);
            ui.confetti();
            KG.fill(grid, h('div.results.wide',
                h('div.finish-emoji', '🃏'),
                h('h2', record ? 'New best score!' : 'All pairs found!'),
                h('div.result-stats', h('div', h('b', String(state.moves)), h('span', 'moves')), h('div', h('b', `${secs}s`), h('span', 'time')), h('div', h('b', String(score)), h('span', `best ${store.data.best.memory}`))),
                h('div.finish-actions', ui.button('🔁 New board', () => { words.splice(0, words.length, ...sample(src.words.filter((w) => w.emoji), pairs)); setup(); }, 'ghost'), h('a.btn.primary', { href: back }, 'Continue ›'))));
        }

        setTimeout(setup, 0);
        return ui.page({ back, title: 'Memory Match', sub: src.title, cls: 'memory' }, info, grid);
    }

    // =====================
    // Bubble pop: hear a word, pop its bubble before it floats away
    // =====================
    function bubbles(src, back) {
        const state = { score: 0, lives: 3, round: 0, target: null, running: false, raf: 0, items: [], combo: 0, last: 0 };
        const field = h('div.bubble-field');
        const hud = h('div.bubble-hud');
        const replay = ui.button('🔊 Hear again', () => state.target && KG.audio.play(state.target.ko), 'ghost');
        const usePictures = src.levelId === 'A0';

        function drawHud() {
            KG.fill(hud, h('span', `⭐ ${state.score}`), h('span', '❤️'.repeat(state.lives) + '🤍'.repeat(3 - state.lives)), h('span', state.combo >= 3 ? `🔥 ${state.combo}` : ''));
        }

        function round() {
            if (!document.body.contains(field)) return;
            state.round++;
            const count = Math.min(5, 3 + Math.floor(state.round / 4));
            state.target = pick(src.words);
            const words = shuffle([state.target, ...distractors(state.target, src.words, count - 1, (x) => x.ko)]);
            const speed = 52 + state.round * 4; // pixels per second
            const width = field.clientWidth;
            const lane = width / words.length;
            field.querySelectorAll('.bubble-word').forEach((b) => b.remove());
            state.items = words.map((w, i) => {
                const size = 92 + Math.random() * 18;
                const el = h('button.bubble-word', { type: 'button', style: { width: `${size}px`, height: `${size}px` } },
                    h('span', { lang: 'ko' }, w.ko), usePictures && w.emoji ? h('small', w.emoji) : null);
                const item = { w, el, x: lane * i + (lane - size) / 2, y: field.clientHeight + Math.random() * 70, size, speed: speed * (0.8 + Math.random() * 0.45), wobble: Math.random() * Math.PI * 2 };
                el.style.transform = `translate(${item.x}px, ${item.y}px)`;
                el.addEventListener('pointerdown', (e) => { e.preventDefault(); tap(item); });
                field.append(el);
                return item;
            });
            setTimeout(() => KG.audio.play(state.target.ko), 300);
        }

        function tap(item) {
            if (!state.running || item.popped) return;
            if (item.w === state.target) {
                item.popped = true;
                item.el.classList.add('pop');
                state.combo++;
                state.score += 10 * Math.min(4, 1 + Math.floor(state.combo / 3));
                KG.audio.sfx('correct');
                store.srsReview(item.w.ko, true);
                drawHud();
                state.items.forEach((x) => { if (x !== item) x.el.classList.add('fade'); });
                state.items = [];
                setTimeout(round, 650);
            } else {
                item.el.classList.add('nope');
                setTimeout(() => item.el.classList.remove('nope'), 400);
                miss();
            }
        }

        function miss() {
            state.lives--;
            state.combo = 0;
            KG.audio.sfx('wrong');
            drawHud();
            if (state.lives <= 0) end();
        }

        function tick(t) {
            if (!state.running || !document.body.contains(field)) return;
            const dt = Math.min(0.25, (t - (state.last || t)) / 1000);
            state.last = t;
            for (const item of state.items) {
                item.y -= item.speed * dt;
                item.wobble += dt * 2;
                item.el.style.transform = `translate(${item.x + Math.sin(item.wobble) * 8}px, ${item.y}px)`;
            }
            const target = state.items.find((x) => x.w === state.target);
            if (target && target.y < -target.size) {
                target.el.classList.add('fade');
                ui.toast(`It was ${state.target.ko} — ${state.target.en}`);
                state.items = [];
                miss();
                if (state.running) setTimeout(round, 900);
            }
            state.raf = requestAnimationFrame(tick);
        }

        function start() {
            Object.assign(state, { score: 0, lives: 3, round: 0, running: true, combo: 0, last: 0 });
            field.querySelectorAll('.results, .bubble-start').forEach((n) => n.remove());
            drawHud();
            round();
            cancelAnimationFrame(state.raf);
            state.raf = requestAnimationFrame(tick);
        }

        function end() {
            state.running = false;
            cancelAnimationFrame(state.raf);
            field.querySelectorAll('.bubble-word').forEach((b) => b.remove());
            const record = store.best('bubbles', state.score);
            store.addXp(Math.min(20, 3 + Math.floor(state.score / 20)));
            field.append(h('div.results',
                h('div.finish-emoji', '🫧'),
                h('h2', record ? 'New high score!' : 'Game over'),
                h('div.result-stats', h('div', h('b', String(state.score)), h('span', 'score')), h('div', h('b', String(store.data.best.bubbles || 0)), h('span', 'best'))),
                h('div.finish-actions', ui.button('🔁 Play again', start, 'ghost'), h('a.btn.primary', { href: back }, 'Continue ›'))));
        }

        field.append(h('div.bubble-start', h('div.finish-emoji', '🫧'), h('p', 'Listen to the word, then pop the matching bubble before it floats away!'), ui.button('▶ Start', start, 'primary big')));
        drawHud();
        return ui.page({ back, title: 'Bubble Pop', sub: src.title, cls: 'bubbles' }, h('div.bubble-top', hud, replay), field);
    }

    // =====================
    // Speed round: 60 seconds of quick-fire questions
    // =====================
    function speed(src, back) {
        const DURATION = 60;
        const state = { score: 0, combo: 0, correct: 0, end: 0, running: false, timer: null };
        const area = h('div.q-area');
        const timeBar = h('div.time-bar', h('div.time-fill'));
        const hud = h('div.speed-hud');

        function drawHud() {
            KG.fill(hud, h('span', `⭐ ${state.score}`), h('span', state.combo >= 3 ? `🔥 x${Math.min(4, 1 + Math.floor(state.combo / 3))}` : ''));
        }

        function nextQ() {
            if (!state.running) return;
            const w = pick(src.words);
            const q = pick([Q.meaning, Q.recall, Q.listen])(w, src.words);
            KG.fill(area, q.prompt());
            const grid = h(`div.choices.n${q.options.length}`);
            q.options.forEach((o) => {
                const btn = h('button.choice', { type: 'button' }, o.node());
                btn.addEventListener('click', () => {
                    if (!state.running) return;
                    const right = o.key === q.answer;
                    btn.classList.add(right ? 'right' : 'wrong');
                    store.srsReview(w.ko, right);
                    if (right) {
                        state.combo++;
                        state.correct++;
                        state.score += 10 * Math.min(4, 1 + Math.floor(state.combo / 3));
                        KG.audio.sfx('correct');
                    } else {
                        state.combo = 0;
                        KG.audio.sfx('wrong');
                        grid.querySelectorAll('.choice')[q.options.findIndex((x) => x.key === q.answer)].classList.add('right');
                    }
                    drawHud();
                    setTimeout(nextQ, right ? 250 : 900);
                });
                grid.append(btn);
            });
            area.append(grid);
            if (q.mode === 'listen' || q.mode === 'meaning') KG.audio.play(w.ko);
        }

        function tick() {
            if (!document.body.contains(area)) return clearInterval(state.timer);
            const left = Math.max(0, state.end - Date.now());
            timeBar.firstChild.style.width = `${(left / (DURATION * 1000)) * 100}%`;
            timeBar.classList.toggle('low', left < 10000);
            if (left <= 0) end();
        }

        function start() {
            Object.assign(state, { score: 0, combo: 0, correct: 0, end: Date.now() + DURATION * 1000, running: true });
            clearInterval(state.timer);
            state.timer = setInterval(tick, 100);
            drawHud();
            nextQ();
        }

        function end() {
            state.running = false;
            clearInterval(state.timer);
            KG.audio.stop();
            const record = store.best('speed', state.score);
            store.addXp(Math.min(25, 3 + state.correct));
            if (record) ui.confetti();
            KG.fill(area, h('div.results',
                h('div.finish-emoji', '⚡'),
                h('h2', record ? 'New high score!' : "Time's up!"),
                h('div.result-stats', h('div', h('b', String(state.score)), h('span', 'score')), h('div', h('b', String(state.correct)), h('span', 'correct')), h('div', h('b', String(store.data.best.speed || 0)), h('span', 'best'))),
                h('div.finish-actions', ui.button('🔁 Again', start, 'ghost'), h('a.btn.primary', { href: back }, 'Continue ›'))));
        }

        area.append(h('div.results', h('div.finish-emoji', '⚡'), h('p', `${DURATION} seconds. Answer as many as you can — streaks multiply your points!`), ui.button('▶ Go!', start, 'primary big')));
        return ui.page({ back, title: 'Speed Round', sub: src.title, cls: 'speed' }, h('div.speed-top', timeBar, hud), area);
    }

    // =====================
    // Entry points
    // =====================
    function play(mode, sourceKey) {
        const src = resolveSource(sourceKey || 'studied');
        const back = src.back || '#/practice';
        if (!src.words.length && !src.letters.length) return emptyState(src, back);
        if (mode === 'flashcards') return flashcards(src, back);
        if (mode === 'memory') return src.words.filter((w) => w.emoji).length >= 4 ? memory(src, back) : emptyState(src, back);
        if (mode === 'bubbles') return bubbles(src, back);
        if (mode === 'speed') return speed(src, back);
        const def = MODES[mode] || MODES.mix;
        if (!def.needs(src)) return emptyState(src, back);
        const make = () => def.make(src);
        let view;
        const start = () => {
            view = runSession({ title: `${def.icon} ${def.name} · ${src.title}`, back, questions: make(), again: () => KG.app.show(start()) });
            return view;
        };
        return start();
    }

    function lesson(unitId) {
        const unit = KG.unitById[unitId];
        if (!unit) return KG.app.notFound();
        const src = resolveSource(`unit:${unitId}`);
        const start = () => runSession({
            title: `🎮 ${unit.title}`,
            back: `#/unit/${unit.id}`,
            questions: mixQuestions(src),
            onFinish: ({ stars }) => {
                store.markUnit(unit.id, 'stars', stars);
                store.srsAdd(unit.vocab);
            },
            again: () => KG.app.show(start())
        });
        return start();
    }

    function emptyState(src, back) {
        return ui.page({ back, title: 'Nothing to practice yet', cls: 'empty' },
            h('div.intro-card', h('p', `"${src.title}" doesn't have enough material for this game yet. Try a different source or start a lesson first.`)),
            h('div.center', h('a.btn.primary', { href: '#/learn' }, 'Go to lessons')));
    }

    function quickGames(unit) {
        const key = `unit:${unit.id}`;
        const list = unit.type === 'hangul'
            ? [['blocks', '🏗️', 'Block Builder'], ['letters', '🔤', 'Letter Sounds'], ['flashcards', '🗂️', 'Flashcards'], ['memory', '🃏', 'Memory'], ['bubbles', '🫧', 'Bubble Pop']]
            : [['flashcards', '🗂️', 'Flashcards'], ['build', '🧱', 'Sentence Builder'], ['dictation', '👂', 'Listening'], ['memory', '🃏', 'Memory'], ['bubbles', '🫧', 'Bubble Pop'], ['speed', '⚡', 'Speed Round'], ['truefalse', '⭕', 'True or False']];
        return list.map(([mode, icon, name]) => ({ icon, name, href: `#/play/${mode}/${key}` }));
    }

    // =====================
    // Practice hub
    // =====================
    function renderHub() {
        let sourceKey = store.setting('practiceSource') || 'studied';
        if (!resolveSourceValid(sourceKey)) sourceKey = 'studied';
        const host = h('div');

        function draw() {
            const src = resolveSource(sourceKey);
            const due = store.srsDue().length;
            const options = [
                ['studied', '📚 Everything studied'],
                ...KG.levels.map((l) => [`level:${l.id}`, `${l.id} · ${l.title}`]),
                ...KG.units.map((u) => [`unit:${u.id}`, `${u.icon} ${u.id.toUpperCase()} ${u.title}`]),
                ...KG.packs.map((p) => [`pack:${p.id}`, `${p.icon} Pack: ${p.title}`])
            ];
            const select = h('select.source-select', {
                'aria-label': 'Practice source',
                onchange: (e) => {
                    sourceKey = e.target.value;
                    store.setting('practiceSource', sourceKey);
                    draw();
                }
            }, options.map(([value, label]) => h('option', { value, selected: value === sourceKey }, label)));

            const tile = ([key, def]) => {
                const ok = def.needs(src);
                return h(`a.mode-tile${ok ? '' : '.off'}`, ok ? { href: `#/play/${key}/${sourceKey}` } : { 'aria-disabled': 'true', title: 'Not enough material in this source' },
                    h('span.mode-icon', def.icon), h('b', def.name), h('span', def.desc));
            };
            const quiz = Object.entries(MODES).filter(([k]) => !['letters', 'blocks'].includes(k));
            const hangul = Object.entries(MODES).filter(([k]) => ['letters', 'blocks'].includes(k));
            KG.fill(host, 
                h('a.review-card', { href: '#/play/mix/review:due' },
                    h('span.review-icon', '🔁'),
                    h('div', h('b', 'Daily review'), h('span', due ? `${due} word${due === 1 ? '' : 's'} ready to review` : 'All caught up — a quick refresher keeps words fresh')),
                    h('span.review-go', due ? String(due) : '✓')),
                h('div.source-row', h('label', 'Practice from'), select, h('span.source-count', `${src.words.length} words · ${src.sentences.length} sentences`)),
                h('h3.section-title', '🕹️ Arcade'),
                h('div.mode-grid', Object.entries(ARCADE).map(tile)),
                h('h3.section-title', '🎯 Quiz modes'),
                h('div.mode-grid', quiz.map(tile)),
                src.letters.length ? h('h3.section-title', '🔤 Hangul') : null,
                src.letters.length ? h('div.mode-grid', hangul.map(tile)) : null);
        }
        draw();
        return ui.page({ title: 'Practice', sub: 'Mix it up — every mode works with any lesson or word pack.', icon: '🎮', cls: 'hub' }, host);
    }

    function resolveSourceValid(key) {
        const [kind, id] = key.split(':');
        if (kind === 'unit') return !!KG.unitById[id];
        if (kind === 'pack') return !!KG.packById[id];
        if (kind === 'level') return KG.levels.some((l) => l.id === id);
        return kind === 'studied';
    }

    return { play, lesson, renderHub, quickGames, resolveSource, allWords };
})();
