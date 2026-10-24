// Learn: the level path, unit pages, the video-style story player, Hangul letter
// lessons, word lists and grammar pattern cards.
KG.learn = (() => {
    const h = KG.h;
    const ui = KG.ui;
    const store = KG.store;

    // =====================
    // What to do next
    // =====================
    function nextStepFor(unit) {
        const p = store.unit(unit.id);
        if (unit.type === 'hangul') {
            if (!p.story) return { icon: '🔤', label: 'Learn the letters', href: `#/letters/${unit.id}` };
            if (!p.words) return { icon: '📒', label: 'Read real words', href: `#/words/unit/${unit.id}` };
            if (!(p.stars > 0)) return { icon: '🎮', label: 'Practice', href: `#/lesson/${unit.id}` };
            return null;
        }
        if (!p.story) return { icon: '🎬', label: unit.review ? 'Watch the review episode' : 'Watch the story', href: `#/story/${unit.id}` };
        if (!p.words) return { icon: '📒', label: 'Learn the words', href: `#/words/unit/${unit.id}` };
        if (!p.patterns) return { icon: '💡', label: unit.level === 'A0' ? 'Key expressions' : 'Patterns', href: `#/patterns/${unit.id}` };
        if (!(p.stars > 0)) return { icon: '🎧', label: unit.review ? 'Round quiz' : 'Listening practice', href: `#/lesson/${unit.id}` };
        return null;
    }

    function upNext(levelId) {
        for (const unit of KG.unitsIn(levelId)) {
            const step = nextStepFor(unit);
            if (step) return { unit, step };
        }
        return null;
    }

    // =====================
    // Level path
    // =====================
    function currentLevel() {
        const saved = store.setting('level');
        if (saved && KG.levels.some((l) => l.id === saved)) return saved;
        const firstOpen = KG.units.find((u) => store.unitDone(u.id).done < store.unitDone(u.id).total);
        return firstOpen ? firstOpen.level : KG.levels[0].id;
    }

    function renderPath(levelId = currentLevel()) {
        store.setting('level', levelId);
        const level = KG.levels.find((l) => l.id === levelId);
        const units = KG.unitsIn(levelId);
        const rounds = KG.roundsIn(levelId);
        const doneCount = units.filter((u) => { const d = store.unitDone(u.id); return d.done === d.total; }).length;

        // The path is a list of steps: units, plus a review checkpoint after each round.
        const groups = rounds.length ? rounds : [{ units, n: 0 }];
        const steps = groups.flatMap((g) => [
            ...(g.n ? [{ type: 'head', round: g }] : []),
            ...g.units.map((u) => ({ type: 'unit', unit: u, done: (() => { const d = store.unitDone(u.id); return d.done === d.total; })() })),
            ...(g.n && !g.hasReviewEpisode ? [{ type: 'checkpoint', round: g, done: store.roundProgress(g.key).stars > 0 }] : [])
        ]);
        const next = steps.find((s) => s.type !== 'head' && !s.done);

        const tabs = h('div.level-tabs', { role: 'tablist' }, KG.levels.map((l) => h(`button.level-tab${l.id === levelId ? '.active' : ''}`, {
            type: 'button',
            role: 'tab',
            'aria-selected': l.id === levelId ? 'true' : 'false',
            onclick: () => KG.app.show(renderPath(l.id))
        }, h('b', { lang: l.badge ? 'ko' : null }, l.badge || l.id), h('span', l.title))));

        const header = h('div.level-card',
            h('div.level-card-top',
                h('div.level-badge', { lang: level.badge ? 'ko' : null }, level.badge || level.id),
                h('div',
                    h('h2', level.title, ' ', h('span.ko-sub', { lang: 'ko' }, level.ko)),
                    h('p', level.blurb))),
            h('div.level-progress', ui.progressBar(doneCount, units.length), h('span', `${doneCount} / ${units.length} units`)));

        const offsets = [0, 55, 85, 55, 0, -55, -85, -55];
        let i = 0;
        const path = h('div.path', steps.map((s) => {
            if (s.type === 'head') {
                return h('div.round-head', h('span.round-tag', `Round ${s.round.n}`), h('b', s.round.title));
            }
            const x = `${offsets[i++ % offsets.length]}px`;
            const isNext = next === s;
            if (s.type === 'checkpoint') {
                const rp = store.roundProgress(s.round.key);
                return h('div.path-row', { style: { '--x': x } },
                    h(`a.path-node.checkpoint${s.done ? '.complete' : ''}${isNext ? '.next' : ''}`, {
                        href: `#/round/${s.round.key}`,
                        style: { '--pct': s.done ? '100%' : rp.recap ? '50%' : '0%' },
                        'aria-label': `${s.round.title} review`
                    },
                    isNext ? h('span.path-flag', 'Review') : null,
                    h('span.path-icon', '🔁')),
                    h('div.path-label', h('b', `Review: ${s.round.title}`), h('span', 'recap + mixed quiz'), ui.stars(rp.stars)));
            }
            const u = s.unit;
            const d = store.unitDone(u.id);
            const pct = Math.round((d.done / d.total) * 100);
            return h('div.path-row', { style: { '--x': x } },
                h(`a.path-node${s.done ? '.complete' : ''}${isNext ? '.next' : ''}${u.review ? '.review-ep' : ''}`, {
                    href: `#/unit/${u.id}`,
                    style: { '--pct': `${pct}%` },
                    'aria-label': `${u.title}, ${d.done} of ${d.total} steps done`
                },
                isNext ? h('span.path-flag', store.started(u.id) ? 'Continue' : 'Start') : null,
                h('span.path-icon', u.icon)),
                h('div.path-label', h('b', u.title), h('span', { lang: 'ko' }, u.ko), ui.stars(d.stars)));
        }));

        const up = upNext(levelId);
        const upCard = up
            ? h('a.up-next', { href: up.step.href },
                h('span.up-icon', up.step.icon),
                h('div.up-text', h('small', 'Up next'), h('b', up.step.label), h('span', `${up.unit.icon} ${up.unit.title}`)),
                h('span.up-go', '▶'))
            : h('div.up-next.done',
                h('span.up-icon', '🏆'),
                h('div.up-text', h('small', 'Level complete'), h('b', 'Every episode done!'), h('span', 'Pick the next level above, or keep reviewing in Practice.')));

        return ui.page({ cls: 'learn' }, tabs, upCard, header, path);
    }

    // =====================
    // Round review: recap reel + mixed quiz over every unit in the round
    // =====================
    function renderRound(key) {
        const round = KG.round(key);
        if (!round) return KG.app.notFound();
        const rp = store.roundProgress(key);
        const words = round.units.reduce((n, u) => n + u.vocab.length, 0);
        const card = (href, icon, title, sub, done, extra) => h(`a.step-card${done ? '.done' : ''}`, { href },
            h('span.step-icon', icon), h('div.step-body', h('b', title), h('span', sub)), extra || h('span.step-check', done ? '✓' : '›'));
        return ui.page({ back: `#/learn/${round.level}`, title: `Review: ${round.title}`, sub: `${round.level} · Round ${round.n}`, icon: '🔁', cls: 'round' },
            h('p.goal', '🔁 Everything from this round comes back: rewatch the best moments, then prove you remember.'),
            h('div.steps',
                card(`#/recap/${key}`, '🎬', 'Recap reel', `Key scenes from ${round.units.length} episodes, back to back`, rp.recap),
                card(`#/round-quiz/${key}`, '🎮', 'Round quiz', `Mixed questions from all ${words} words and sentences`, rp.stars > 0, ui.stars(rp.stars)),
                card(`#/play/flashcards/round:${key}`, '🗂️', 'Flashcards', 'Every word from the round', false)),
            h('h3.section-title', 'Episodes in this round'),
            h('div.chip-row', round.units.map((u) => h('a.chip-game', { href: `#/unit/${u.id}` }, h('span', u.icon), u.title))));
    }

    // A story made of the most important scenes from every episode in the round.
    function renderRecap(key) {
        const round = KG.round(key);
        if (!round) return KG.app.notFound();
        const storyUnits = round.units.filter((u) => u.story && !u.review);
        const scenes = storyUnits.flatMap((u) => {
            // Skip each episode's opening recap scene (<id>-0): the reel replays new material.
            const main = u.story.scenes.filter((s) => !s.img.endsWith('-0'));
            const withChecks = main.filter((s) => s.check);
            return (withChecks.length >= 2 ? withChecks : main).slice(0, 2);
        });
        const recap = {
            id: `recap-${key}`,
            level: round.level,
            icon: '🔁',
            title: round.title,
            vocab: storyUnits.flatMap((u) => u.vocab),
            story: { title: `Recap: ${round.title}`, scenes }
        };
        const reviewEpisode = round.units.find((u) => u.review);
        return storyView(recap, {
            back: reviewEpisode ? `#/unit/${reviewEpisode.id}` : `#/round/${key}`,
            onFinish: () => {
                const first = !store.roundProgress(key).recap;
                store.markRound(key, 'recap');
                return first ? 8 : 3;
            },
            practiceHref: reviewEpisode ? `#/lesson/${reviewEpisode.id}` : `#/round-quiz/${key}`
        });
    }

    // =====================
    // Unit page
    // =====================
    function stepCard({ href, icon, title, sub, done, extra }) {
        return h(`a.step-card${done ? '.done' : ''}`, { href },
            h('span.step-icon', icon),
            h('div.step-body', h('b', title), h('span', sub)),
            h('span.step-next', 'Next'),
            extra || h('span.step-check', done ? '✓' : '›'));
    }

    function renderUnit(unitId) {
        const unit = KG.unitById[unitId];
        if (!unit) return KG.app.notFound();
        const p = store.unit(unitId);
        const isHangul = unit.type === 'hangul';
        const steps = isHangul ? [
            stepCard({ href: `#/letters/${unit.id}`, icon: '🔤', title: 'Learn the letters', sub: `${unit.letters.length} letters · tap to hear each one`, done: p.story }),
            stepCard({ href: `#/words/unit/${unit.id}`, icon: '📒', title: 'Read real words', sub: `${unit.vocab.length} words you can now sound out`, done: p.words }),
            stepCard({ href: `#/lesson/${unit.id}`, icon: '🎮', title: 'Practice', sub: 'Mixed quiz · earn up to 3 stars', done: p.stars > 0, extra: ui.stars(p.stars) })
        ] : [
            stepCard({ href: `#/story/${unit.id}`, icon: '🎬', title: `Watch: ${unit.story.title}`, sub: `${unit.story.scenes.length} scenes · listen first, guess from the pictures`, done: p.story }),
            stepCard({ href: `#/words/unit/${unit.id}`, icon: '📒', title: 'Words', sub: `${unit.vocab.length} words from the episode`, done: p.words }),
            stepCard({ href: `#/patterns/${unit.id}`, icon: '💡', title: unit.level === 'A0' ? 'Key expressions' : 'Patterns', sub: unit.patterns.map((x) => x.form).join(' · '), done: p.patterns }),
            stepCard({ href: `#/lesson/${unit.id}`, icon: '🎮', title: unit.review ? 'Round quiz' : 'Listening practice', sub: unit.review ? 'Questions from every episode in this round' : 'Listen and tap · earn up to 3 stars', done: p.stars > 0, extra: ui.stars(p.stars) })
        ];
        // Highlight the one step to do next.
        const nextStep = nextStepFor(unit);
        if (nextStep) steps.forEach((card) => { if (card.getAttribute('href') === nextStep.href) card.classList.add('next'); });
        const roundOfUnit = KG.roundOf(unit.id);
        if (unit.review && roundOfUnit) {
            steps.splice(1, 0, stepCard({ href: `#/recap/${roundOfUnit.key}`, icon: '🔁', title: 'Recap reel', sub: 'Key scenes from every episode in this round', done: store.roundProgress(roundOfUnit.key).recap }));
        }
        const games = KG.games.quickGames(unit).map((g) => h('a.chip-game', { href: g.href }, h('span', g.icon), g.name));
        const next = KG.nextUnit(unit.id);
        const round = KG.roundOf(unit.id);
        let hero = null;
        if (!isHangul) {
            const first = unit.story.scenes[0];
            const img = h('img', { src: `img/stories/${first.img}.webp`, alt: '', loading: 'lazy' });
            img.addEventListener('error', () => img.replaceWith(sceneFallback(unit, first)), { once: true });
            hero = h('a.story-hero', { href: `#/story/${unit.id}`, 'aria-label': `Watch ${unit.story.title}` },
                img,
                h('span.hero-play', '▶'),
                h('div.hero-caption', h('b', unit.story.title), h('span', `Episode · ${unit.story.scenes.length} scenes`)));
        }
        return ui.page({ back: '#/learn', title: unit.title, sub: h('span', { lang: 'ko' }, unit.ko), icon: unit.icon, cls: 'unit' },
            hero,
            h('p.goal', unit.review ? '🔁 Review episode — everything from this round comes back. ' : '🎯 ', unit.goal),
            round ? h('a.round-link', { href: round.hasReviewEpisode ? `#/learn/${unit.level}` : `#/round/${round.key}` },
                h('span.round-tag', `Round ${round.n}`), ` ${round.title}`, h('span', round.hasReviewEpisode ? '' : ' · review checkpoint ›')) : null,
            h('div.steps', steps),
            h('h3.section-title', 'Quick games for this unit'),
            h('div.chip-row', games),
            next ? h('a.next-unit', { href: `#/unit/${next.id}` }, 'Next: ', h('b', `${next.icon} ${next.title}`), ' ›') : null);
    }

    // =====================
    // Story player (plays like a video: picture + voices + subtitles)
    // =====================
    const PARTICLES = new Set(['', '은', '는', '이', '가', '을', '를', '도', '에', '에서', '하고', '의', '예요', '이에요', '요', '로', '으로', '만', '랑', '이랑', '께', '한테', '처럼', '보다', '까지', '부터']);

    function vocabForms(unit) {
        const forms = [];
        for (const w of unit.vocab) {
            for (const f of [w.ko, w.polite, ...(w.forms || [])]) if (f) forms.push({ form: f, w });
        }
        return forms.sort((a, b) => b.form.length - a.form.length);
    }

    // Wraps vocabulary in the line so learners can tap a word to see its meaning.
    function annotate(text, forms, onWord) {
        const out = [];
        let plain = '';
        let i = 0;
        const flush = () => {
            if (plain) out.push(plain);
            plain = '';
        };
        while (i < text.length) {
            const atStart = i === 0 || /[\s,.!?…"'(]/.test(text[i - 1]);
            let hit = null;
            if (atStart) {
                for (const f of forms) {
                    if (!text.startsWith(f.form, i)) continue;
                    if (f.form.length === 1) {
                        const rest = text.slice(i + 1).match(/^[가-힣]*/)[0];
                        if (!PARTICLES.has(rest)) continue;
                    }
                    hit = f;
                    break;
                }
            }
            if (hit) {
                flush();
                out.push(h('button.vocab-hit', { type: 'button', onclick: (e) => { e.stopPropagation(); onWord(hit.w, e.currentTarget); } }, hit.form));
                i += hit.form.length;
            } else {
                plain += text[i++];
            }
        }
        flush();
        return out;
    }

    function sceneFallback(unit, scene) {
        const text = scene.lines.map((l) => l.ko).join(' ');
        const icons = unit.vocab.filter((w) => w.emoji && [w.ko, w.polite, ...(w.forms || [])].some((f) => f && text.includes(f))).map((w) => w.emoji);
        return h('div.scene-fallback', h('div.fallback-emoji', (icons.length ? icons : [unit.icon]).slice(0, 3).join(' ')));
    }

    function renderStory(unitId) {
        const unit = KG.unitById[unitId];
        if (!unit || !unit.story) return KG.app.notFound();
        return storyView(unit, {
            back: `#/unit/${unit.id}`,
            practiceHref: `#/lesson/${unit.id}`,
            wordsHref: `#/words/unit/${unit.id}`,
            next: () => nextStepFor(unit),
            onFinish: () => {
                const firstTime = !store.unit(unit.id).story;
                store.markUnit(unit.id, 'story');
                return firstTime ? 10 : 3;
            }
        });
    }

    // The player itself; `unit` only needs id, level, icon, title, vocab and story.
    function storyView(unit, { back, onFinish, practiceHref, wordsHref, next }) {
        const scenes = unit.story.scenes;
        const rom = ui.showRom(unit.level);
        const forms = vocabForms(unit);
        const state = { scene: 0, line: 0, playing: false, run: 0, checks: 0, correct: 0, answered: new Set() };

        const stage = h('div.stage');
        const subs = h('div.subs', { 'aria-live': 'polite' });
        const popover = h('div.word-pop', { hidden: true });
        const dots = h('div.scene-dots', scenes.map((_, i) => h('button.scene-dot', { type: 'button', 'aria-label': `Scene ${i + 1}`, onclick: () => jump(i) })));
        const playBtn = h('button.ctrl.play', { type: 'button', 'aria-label': 'Play', onclick: () => (state.playing ? pause() : play()) }, '▶');
        const ccBtn = h('button.ctrl.cc', { type: 'button', onclick: cycleSubs });
        const slowBtn = h('button.ctrl.slow', { type: 'button', 'aria-label': 'Slow voice', onclick: toggleSlow }, '🐢');
        const shadowBtn = h('button.ctrl.shadow', { type: 'button', 'aria-label': 'Repeat after me', title: 'Repeat after me: pauses after each line so you can say it too', onclick: toggleShadow }, '🗣️');
        const yourTurn = h('div.your-turn', { hidden: true }, '🗣️ Your turn — say it!');
        const script = h('div.script');

        const images = scenes.map((s, i) => {
            const img = h('img.scene-img', { src: `img/stories/${s.img}.webp`, alt: s.art, loading: i < 2 ? 'eager' : 'lazy', draggable: 'false' });
            img.addEventListener('error', () => img.replaceWith(sceneFallback(unit, s)), { once: true });
            return h(`div.scene-frame.kb-${(i % 4) + 1}`, img);
        });
        images.forEach((f) => stage.append(f));
        const overlay = h('div.stage-overlay', h('button.big-play', { type: 'button', onclick: () => play(), 'aria-label': 'Play story' }, '▶'), h('div.stage-title', unit.story.title));
        stage.append(overlay);

        function subsMode() {
            return store.setting('subtitles') || 'tap';
        }
        function cycleSubs() {
            const order = ['tap', 'both', 'off'];
            store.setting('subtitles', order[(order.indexOf(subsMode()) + 1) % order.length]);
            renderSubs();
            renderCc();
        }
        function renderCc() {
            const label = { tap: 'KO · tap EN', both: 'KO + EN', off: 'No subs' }[subsMode()];
            ccBtn.textContent = label;
            ccBtn.setAttribute('aria-label', `Subtitles: ${label}`);
        }
        function toggleSlow() {
            store.setting('slow', !store.setting('slow'));
            slowBtn.classList.toggle('on', store.setting('slow'));
        }
        function toggleShadow() {
            store.setting('shadow', !store.setting('shadow'));
            shadowBtn.classList.toggle('on', store.setting('shadow'));
            ui.toast(store.setting('shadow') ? '🗣️ Repeat after me: on' : 'Repeat after me: off');
        }

        function showWord(w, anchor) {
            popover.hidden = false;
            KG.fill(popover, 
                ui.emoji(w, 'lg'),
                h('div', ui.ko(w.ko, { rom: true }), w.polite ? h('div.word-polite', w.polite) : null, h('div.word-en', w.en)),
                ui.audioBtn(w.ko),
                h('button.pop-close', { type: 'button', 'aria-label': 'Close', onclick: () => { popover.hidden = true; } }, '×'));
            const box = anchor.getBoundingClientRect();
            const host = subs.getBoundingClientRect();
            popover.style.left = `${Math.max(8, Math.min(box.left - host.left, host.width - 260))}px`;
            KG.audio.play(w.ko);
        }

        function lineNode(line, active) {
            const mode = subsMode();
            const en = h(`div.line-en${mode === 'tap' ? '.blur' : ''}`, { onclick: (e) => { e.stopPropagation(); e.currentTarget.classList.remove('blur'); } }, line.en);
            return h(`div.line${active ? '.active' : ''}`, { onclick: () => { pause(); KG.audio.play(line.ko, { speaker: line.sp }); } },
                ui.speakerChip(line.sp, line.as),
                h('div.line-text',
                    h('div.line-ko', { lang: 'ko' }, annotate(line.ko, forms, showWord)),
                    rom ? h('div.line-rom', KG.hangul.romanize(line.ko)) : null,
                    mode === 'off' ? null : en));
        }

        function renderSubs() {
            const scene = scenes[state.scene];
            if (subsMode() === 'off') {
                KG.fill(subs, h('div.subs-off', '🎧 Listening mode — subtitles hidden'));
            } else {
                // The active line plus the one before it, like stacked video captions.
                const from = Math.max(0, state.line - 1);
                KG.fill(subs, ...scene.lines.slice(from, state.line + 1).map((l, i) => lineNode(l, from + i === state.line)), popover);
            }
            renderScript();
        }

        function renderScript() {
            KG.fill(script, ...scenes.map((s, si) => h(`div.script-scene${si === state.scene ? '.current' : ''}`,
                h('b', `Scene ${si + 1}`),
                s.lines.map((l) => h('div.script-line', { onclick: () => KG.audio.play(l.ko, { speaker: l.sp }) },
                    ui.speakerChip(l.sp, l.as), h('span', { lang: 'ko' }, l.ko), h('span.script-en', l.en))))));
        }

        function showScene(i) {
            state.scene = i;
            // Fetch this scene's and the next scene's voices ahead of time.
            KG.audio.preload([...scenes[i].lines, ...(scenes[i + 1] ? scenes[i + 1].lines : [])].map((l) => ({ text: l.ko, speaker: l.sp })));
            images.forEach((f, j) => f.classList.toggle('on', j === i));
            dots.querySelectorAll('.scene-dot').forEach((d, j) => {
                d.classList.toggle('seen', j < i);
                d.classList.toggle('on', j === i);
            });
            popover.hidden = true;
            renderSubs();
        }

        function setPlaying(on) {
            state.playing = on;
            playBtn.textContent = on ? '❚❚' : '▶';
            playBtn.setAttribute('aria-label', on ? 'Pause' : 'Play');
            overlay.hidden = true;
        }

        function pause() {
            state.run++;
            setPlaying(false);
            KG.audio.stop();
        }

        async function play() {
            const run = ++state.run;
            setPlaying(true);
            const alive = () => run === state.run && document.body.contains(stage);
            while (alive()) {
                const scene = scenes[state.scene];
                renderSubs();
                const line = scene.lines[state.line];
                const started = Date.now();
                await KG.audio.play(line.ko, { speaker: line.sp });
                if (!alive()) return;
                if (store.setting('shadow')) {
                    // Repeat after me: leave room to say the line out loud.
                    yourTurn.hidden = false;
                    await KG.util.wait(Math.min(6000, (Date.now() - started) * 1.2 + 500));
                    yourTurn.hidden = true;
                } else {
                    await KG.util.wait(store.setting('slow') ? 900 : 600);
                }
                if (!alive()) return;
                if (state.line < scene.lines.length - 1) {
                    state.line++;
                    continue;
                }
                if (scene.check && !state.answered.has(state.scene)) {
                    setPlaying(false);
                    askCheck(scene);
                    return;
                }
                if (!advance()) return;
                await KG.util.wait(500);
            }
        }

        function advance() {
            if (state.scene < scenes.length - 1) {
                state.line = 0;
                showScene(state.scene + 1);
                return true;
            }
            finish();
            return false;
        }

        function jump(i) {
            pause();
            state.line = 0;
            showScene(i);
            play();
        }

        function askCheck(scene) {
            const c = scene.check;
            const box = h('div.check-card', { role: 'dialog', 'aria-label': 'Quick check' },
                h('div.check-label', '🤔 Quick check'),
                h('div.check-q', ui.ko(c.q), ui.audioBtn(c.q, { speaker: 'narrator' })),
                h('div.check-en', c.en),
                // Each answer can be heard before choosing.
                h('div.check-options', c.options.map((o, i) => h('div.check-cell',
                    h('button.check-opt', {
                        type: 'button',
                        lang: 'ko',
                        onclick: (e) => answer(i, e.currentTarget)
                    }, o),
                    ui.audioBtn(o, { size: 'sm' })))));
            const layer = h('div.check-layer', box);
            stage.append(layer);
            KG.audio.play(c.q, { speaker: 'narrator' });

            function answer(i, btn) {
                const right = i === c.answer;
                state.checks++;
                if (right) state.correct++;
                state.answered.add(state.scene);
                KG.audio.sfx(right ? 'correct' : 'wrong');
                btn.classList.add(right ? 'right' : 'wrong');
                box.querySelectorAll('.check-opt')[c.answer].classList.add('right');
                box.querySelectorAll('.check-opt').forEach((b) => { b.disabled = true; });
                setTimeout(() => {
                    layer.remove();
                    if (advance()) play();
                }, right ? 900 : 1700);
            }
        }

        function finish() {
            pause();
            const xp = onFinish();
            store.srsAdd(unit.vocab);
            store.addXp(xp);
            ui.confetti();
            const layer = h('div.check-layer.finish',
                h('div.check-card',
                    h('div.finish-emoji', '🎉'),
                    h('h2', 'Episode complete!'),
                    state.checks ? h('p', `Quick checks: ${state.correct} / ${state.checks}`) : null,
                    h('p.xp-gain', `+${xp} XP`),
                    h('div.finish-actions',
                        ...(() => {
                            const nx = next && next();
                            return nx
                                ? [h('a.btn.primary', { href: nx.href }, `${nx.icon} Next: ${nx.label} ›`), nx.href !== practiceHref ? h('a.btn', { href: practiceHref }, '🎧 Practice now') : null]
                                : [h('a.btn.primary', { href: practiceHref }, '🎧 Practice now'), wordsHref ? h('a.btn', { href: wordsHref }, '📒 Words') : null];
                        })(),
                        ui.button('🔁 Watch again', () => { layer.remove(); state.answered.clear(); state.line = 0; showScene(0); play(); }))));
            stage.append(layer);
        }

        // Keyboard: space = play/pause, arrows = scenes.
        function onKey(e) {
            if (!document.body.contains(stage)) {
                document.removeEventListener('keydown', onKey);
                return;
            }
            if (e.target.closest('input, textarea')) return;
            if (e.code === 'Space') {
                e.preventDefault();
                state.playing ? pause() : play();
            } else if (e.key === 'ArrowRight' && state.scene < scenes.length - 1) jump(state.scene + 1);
            else if (e.key === 'ArrowLeft' && state.scene > 0) jump(state.scene - 1);
        }
        document.addEventListener('keydown', onKey);

        renderCc();
        slowBtn.classList.toggle('on', !!store.setting('slow'));
        shadowBtn.classList.toggle('on', !!store.setting('shadow'));
        stage.append(yourTurn);
        showScene(0);
        overlay.hidden = false;

        const controls = h('div.controls',
            h('button.ctrl', { type: 'button', 'aria-label': 'Previous scene', onclick: () => jump(Math.max(0, state.scene - 1)) }, '⏮'),
            playBtn,
            h('button.ctrl', { type: 'button', 'aria-label': 'Next scene', onclick: () => (state.scene < scenes.length - 1 ? jump(state.scene + 1) : finish()) }, '⏭'),
            h('button.ctrl', { type: 'button', 'aria-label': 'Replay line', onclick: () => { pause(); const l = scenes[state.scene].lines[state.line]; KG.audio.play(l.ko, { speaker: l.sp }); } }, '↺'),
            slowBtn,
            shadowBtn,
            ccBtn);

        return ui.page({ back, title: unit.story.title, sub: `${unit.icon} ${unit.title}`, cls: 'story' },
            h('div.player', stage, dots, h('div.subs-wrap', subs), controls),
            h('p.tip', '💡 Watch & guess first. Then rewatch with 🗣️ Repeat after me and copy the rhythm. Tap a highlighted word for its meaning, or any line to hear it again.'),
            h('details.script-box', h('summary', '📜 Full script'), script));
    }

    // =====================
    // Hangul letter lessons
    // =====================
    function letterBlocks(unit, letter) {
        return (unit.blocks || []).filter((b) => {
            const p = KG.hangul.decompose(b);
            if (!p) return false;
            // Final-consonant lessons use whole syllables (악, 안…) as their "letters".
            if (KG.hangul.isSyllable(letter.ch)) return b === letter.ch || p.jong === KG.hangul.decompose(letter.ch).jong;
            return p.cho === letter.ch || p.jung === letter.ch;
        });
    }

    async function sayLetter(letter) {
        if (letter.name !== letter.say && /^[가-힣]+$/.test(letter.name)) {
            const finished = await KG.audio.play(letter.name);
            if (!finished) return;
            await KG.util.wait(500);
        }
        KG.audio.play(letter.say);
    }

    function renderLetters(unitId) {
        const unit = KG.unitById[unitId];
        if (!unit || unit.type !== 'hangul') return KG.app.notFound();
        let index = 0;
        const card = h('div.letter-card');
        const chips = h('div.letter-chips', unit.letters.map((l, i) => h('button.letter-chip', { type: 'button', onclick: () => show(i) }, l.ch)));
        const words = h('div.word-grid', unit.vocab.map((w) => ui.wordCard(w, { levelId: unit.level })));

        function show(i) {
            index = i;
            const l = unit.letters[i];
            const examples = letterBlocks(unit, l);
            const vocab = unit.vocab.filter((w) => [...w.ko].some((ch) => {
                const p = KG.hangul.decompose(ch);
                return p && (p.cho === l.ch || p.jung === l.ch || ch === l.ch);
            })).slice(0, 3);
            chips.querySelectorAll('.letter-chip').forEach((c, j) => c.classList.toggle('on', j === i));
            KG.fill(card, 
                h('div.letter-count', `${i + 1} / ${unit.letters.length}`),
                h('button.letter-big', { type: 'button', lang: 'ko', onclick: () => sayLetter(l), 'aria-label': `Hear ${l.ch}` }, l.ch),
                h('div.letter-meta', h('span.letter-rom', l.rom), h('span.letter-name', { lang: 'ko' }, `name: ${l.name}`)),
                h('div.letter-buttons', ui.button('🔊 Hear it', () => sayLetter(l), 'primary'), ui.button('🐢 Slow', () => KG.audio.play(l.say, { slow: true }))),
                h('p.letter-tip', l.tip),
                examples.length ? h('div.letter-examples', h('span.mini-label', 'Blocks with it'),
                    h('div.block-row', examples.map((b) => h('button.block-chip', { type: 'button', lang: 'ko', onclick: () => KG.audio.play(b) }, b)))) : null,
                vocab.length ? h('div.letter-examples', h('span.mini-label', 'In words'),
                    h('div.block-row', vocab.map((w) => h('button.word-chip', { type: 'button', onclick: () => KG.audio.play(w.ko) }, `${w.emoji} `, h('span', { lang: 'ko' }, w.ko))))) : null,
                h('div.letter-nav',
                    ui.button('‹ Back', () => show(Math.max(0, index - 1)), i === 0 ? 'ghost disabled' : 'ghost'),
                    i < unit.letters.length - 1 ? ui.button('Next ›', () => show(index + 1), 'primary') : ui.button('Done ✓', complete, 'primary')));
            sayLetter(l);
        }

        function complete() {
            const firstTime = !store.unit(unit.id).story;
            store.markUnit(unit.id, 'story');
            store.addXp(firstTime ? 10 : 2);
            ui.toast(firstTime ? '+10 XP · Letters learned!' : 'Nice review!', 'good');
            words.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }

        const view = ui.page({ back: `#/unit/${unit.id}`, title: unit.title, sub: h('span', { lang: 'ko' }, unit.ko), icon: unit.icon, cls: 'letters' },
            h('div.intro-card', h('b', 'How it works'), h('p', unit.intro)),
            chips, card,
            h('h3.section-title', 'Now read these words'),
            h('p.tip', 'Sound each one out, then tap to check yourself.'),
            words,
            h('div.center', h('a.btn.primary', { href: `#/lesson/${unit.id}` }, '🎮 Practice these letters')));
        setTimeout(() => show(0), 0);
        return view;
    }

    // =====================
    // Word lists (unit vocab or a word pack)
    // =====================
    function renderWords(kind, id) {
        const unit = kind === 'unit' ? KG.unitById[id] : null;
        const pack = kind === 'pack' ? KG.packById[id] : null;
        const source = unit || pack;
        if (!source) return KG.app.notFound();
        const words = unit ? unit.vocab : pack.words;
        const levelId = source.level;
        const sourceKey = `${kind}:${id}`;

        async function playAll(btn) {
            btn.disabled = true;
            for (const w of words) {
                if (!(await KG.audio.play(w.ko))) break;
                await KG.util.wait(450);
            }
            btn.disabled = false;
        }

        function done() {
            store.srsAdd(words);
            if (unit) {
                const firstTime = !store.unit(unit.id).words;
                store.markUnit(unit.id, 'words');
                if (firstTime) store.addXp(5);
                ui.toast(firstTime ? '+5 XP · Words added to your review deck' : 'Words added to review', 'good');
                location.hash = (nextStepFor(unit) || { href: `#/unit/${unit.id}` }).href;
            } else {
                ui.toast('Added to your review deck', 'good');
            }
        }

        const playBtn = ui.button('▶ Play all', (e) => playAll(e.currentTarget), 'ghost');
        return ui.page({
            back: unit ? `#/unit/${unit.id}` : '#/words',
            title: unit ? 'Words' : pack.title,
            sub: unit ? `${unit.icon} ${unit.title}` : h('span', { lang: 'ko' }, pack.ko),
            icon: pack ? pack.icon : null,
            cls: 'words'
        },
        h('div.action-row',
            playBtn,
            h('a.btn.ghost', { href: `#/play/flashcards/${sourceKey}` }, '🗂️ Flashcards'),
            h('a.btn.ghost', { href: `#/play/memory/${sourceKey}` }, '🃏 Memory'),
            h('a.btn.ghost', { href: `#/play/mix/${sourceKey}` }, '🎮 Quiz')),
        h('div.word-grid', words.map((w) => ui.wordCard(w, { levelId }))),
        h('div.center', ui.button(unit ? "✓ I've seen these" : '＋ Add to my review deck', done, 'primary big')));
    }

    // =====================
    // Grammar patterns
    // =====================
    function renderPatterns(unitId) {
        const unit = KG.unitById[unitId];
        if (!unit || !unit.patterns.length) return KG.app.notFound();
        const cards = unit.patterns.map((p, i) => h('article.pattern-card', { style: { '--hue': `${(i * 70 + 180) % 360}` } },
            h('div.pattern-form', { lang: 'ko' }, p.form),
            h('div.pattern-meaning', p.meaning),
            p.note ? h('p.pattern-note', p.note) : null,
            h('div.pattern-examples', p.examples.map((e) => h('div.example', { onclick: () => KG.audio.play(e.ko) },
                ui.audioBtn(e.ko, { size: 'sm' }),
                h('div', h('div.example-ko', { lang: 'ko' }, e.ko),
                    ui.showRom(unit.level) ? h('div.example-rom', KG.hangul.romanize(e.ko)) : null,
                    h('div.example-en', e.en)))))));
        return ui.page({ back: `#/unit/${unit.id}`, title: unit.level === 'A0' ? 'Key expressions' : 'Patterns', sub: `${unit.icon} ${unit.title}`, cls: 'patterns' },
            h('p.tip', '💡 You already heard these in the story. Here is the rule behind them — no need to memorise, just notice.'),
            ...cards,
            h('div.center', ui.button('✓ Got it — practice now', () => {
                const firstTime = !store.unit(unit.id).patterns;
                store.markUnit(unit.id, 'patterns');
                if (firstTime) store.addXp(5);
                location.hash = (nextStepFor(unit) || { href: `#/lesson/${unit.id}` }).href;
            }, 'primary big')));
    }

    return { nextStepFor, upNext, renderPath, renderRound, renderRecap, renderUnit, renderStory, renderLetters, renderWords, renderPatterns, sayLetter };
})();
