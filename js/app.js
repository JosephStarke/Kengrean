// App shell: hash router, header stats, word-pack library, profile/settings, boot.
KG.app = (() => {
    const h = KG.h;
    const ui = KG.ui;
    const store = KG.store;
    const main = () => document.getElementById('app');

    function show(view) {
        KG.audio.stop();
        main().replaceChildren(view);
        window.scrollTo({ top: 0 });
    }

    function notFound() {
        return ui.page({ title: 'Page not found', cls: 'empty' }, h('div.center', h('a.btn.primary', { href: '#/learn' }, 'Back to lessons')));
    }

    // =====================
    // Router
    // =====================
    const routes = [
        [/^#?\/?$/, () => KG.learn.renderPath()],
        [/^#\/learn(?:\/([A-Z]\d?))?$/, (lvl) => KG.learn.renderPath(lvl)],
        [/^#\/round\/([A-Z]\d?-\d+)$/, (key) => KG.learn.renderRound(key)],
        [/^#\/recap\/([A-Z]\d?-\d+)$/, (key) => KG.learn.renderRecap(key)],
        [/^#\/round-quiz\/([A-Z]\d?-\d+)$/, (key) => KG.games.roundQuiz(key)],
        [/^#\/unit\/([\w-]+)$/, (id) => KG.learn.renderUnit(id)],
        [/^#\/story\/([\w-]+)$/, (id) => KG.learn.renderStory(id)],
        [/^#\/letters\/([\w-]+)$/, (id) => KG.learn.renderLetters(id)],
        [/^#\/patterns\/([\w-]+)$/, (id) => KG.learn.renderPatterns(id)],
        [/^#\/words\/(unit|pack)\/([\w-]+)$/, (kind, id) => KG.learn.renderWords(kind, id)],
        [/^#\/words$/, () => renderLibrary()],
        [/^#\/lesson\/([\w-]+)$/, (id) => KG.games.lesson(id)],
        [/^#\/practice$/, () => KG.games.renderHub()],
        [/^#\/play\/(\w+)\/([\w:-]+)$/, (mode, key) => KG.games.play(mode, key)],
        [/^#\/me$/, () => renderMe()]
    ];

    function route() {
        const hash = decodeURIComponent(location.hash || '#/');
        for (const [pattern, render] of routes) {
            const m = hash.match(pattern);
            if (m) {
                show(render(...m.slice(1)) || notFound());
                highlightNav(hash);
                return;
            }
        }
        show(notFound());
    }

    function highlightNav(hash) {
        const section = /^#\/(practice|play)/.test(hash) ? 'practice' : /^#\/words$|^#\/words\/pack/.test(hash) ? 'words' : /^#\/me/.test(hash) ? 'me' : 'learn';
        document.querySelectorAll('.nav-link').forEach((a) => a.classList.toggle('active', a.dataset.section === section));
        document.body.classList.toggle('in-session', /^#\/(lesson|play|round-quiz)\//.test(hash));
    }

    // =====================
    // Header stats
    // =====================
    function renderStats() {
        const host = document.getElementById('stats');
        if (!host) return;
        const daily = store.dailyXp();
        const goal = store.data.goal;
        const pct = Math.min(100, Math.round((daily / goal) * 100));
        KG.fill(host,
            h('span.stat', { title: 'Day streak' }, '🔥 ', h('b', String(store.streak()))),
            h('span.stat', { title: 'Total XP' }, '⭐ ', h('b', String(store.data.xp))),
            // Today's goal as plain numbers, e.g. "Today 10/30 XP", with a small bar.
            h(`a.goal-pill${pct >= 100 ? '.met' : ''}`, { href: '#/me', title: `Today's goal: ${daily} of ${goal} XP` },
                h('span.goal-emoji', '🎯'),
                h('span.goal-label', pct >= 100 ? 'Goal met ✓' : 'Today'),
                h('b', `${Math.min(daily, goal)}/${goal}`),
                h('span.goal-xp', 'XP'),
                h('span.goal-bar', h('i', { style: { width: `${pct}%` } }))));
    }

    // =====================
    // Word library
    // =====================
    function renderLibrary() {
        const deck = Object.keys(store.data.srs).length;
        const due = store.srsDue().length;
        const byLevel = {};
        KG.packs.forEach((p) => (byLevel[p.level] = byLevel[p.level] || []).push(p));
        const levelBlocks = KG.levels.map((l) => h('div.level-words',
            h('a.lib-row', { href: `#/play/flashcards/level:${l.id}` },
                h('span.lib-badge', l.id),
                h('div', h('b', `${l.title} — course words`), h('span', `${KG.unitsIn(l.id).reduce((n, u) => n + u.vocab.length, 0)} words from the lessons`)),
                h('span.lib-go', '🗂️'))));
        return ui.page({ title: 'Words', sub: 'Your review deck, course words, and topic packs.', icon: '📚', cls: 'library' },
            h('a.review-card', { href: '#/play/flashcards/review:due' },
                h('span.review-icon', '🧠'),
                h('div', h('b', 'My review deck'), h('span', `${deck} words collected · ${due} due now`)),
                h('span.review-go', '›')),
            h('h3.section-title', 'Course words'),
            ...levelBlocks,
            ...Object.entries(byLevel).flatMap(([lvl, packs]) => [
                h('h3.section-title', `Topic packs · ${lvl}`),
                h('div.pack-grid', packs.map((p) => h('a.pack-card', { href: `#/words/pack/${p.id}` },
                    h('span.pack-icon', p.icon),
                    h('b', p.title),
                    h('span', { lang: 'ko' }, p.ko),
                    h('small', `${p.words.length} words`))))
            ]));
    }

    // =====================
    // Profile & settings
    // =====================
    function seg(name, options, onChange) {
        return h('div.seg', options.map(([value, label]) => h(`button.seg-btn${store.setting(name) === value ? '.on' : ''}`, {
            type: 'button',
            onclick: (e) => {
                store.setting(name, value);
                e.currentTarget.parentElement.querySelectorAll('.seg-btn').forEach((b) => b.classList.toggle('on', b === e.currentTarget));
                if (onChange) onChange(value);
            }
        }, label)));
    }

    function renderMe() {
        const d = store.data;
        const unitsDone = KG.units.filter((u) => { const x = store.unitDone(u.id); return x.done === x.total; }).length;
        const strong = Object.values(d.srs).filter((x) => x.box >= 3).length;
        const goalSeg = h('div.seg', [10, 30, 50, 100].map((g) => h(`button.seg-btn${d.goal === g ? '.on' : ''}`, {
            type: 'button',
            onclick: (e) => {
                d.goal = g;
                store.save();
                renderStats();
                e.currentTarget.parentElement.querySelectorAll('.seg-btn').forEach((b) => b.classList.toggle('on', b === e.currentTarget));
            }
        }, `${g} XP`)));
        const row = (label, control, hint) => h('div.setting', h('div', h('b', label), hint ? h('span', hint) : null), control);
        return ui.page({ title: 'Me', sub: 'Progress and settings', icon: '🙂', cls: 'me' },
            h('div.stat-grid',
                h('div.stat-box', h('b', String(store.streak())), h('span', '🔥 day streak')),
                h('div.stat-box', h('b', String(d.xp)), h('span', '⭐ total XP')),
                h('div.stat-box', h('b', `${unitsDone}/${KG.units.length}`), h('span', '🗺️ units done')),
                h('div.stat-box', h('b', `${strong}/${Object.keys(d.srs).length}`), h('span', '🧠 words strong'))),
            h('h3.section-title', 'Settings'),
            h('div.settings',
                row('Daily goal', goalSeg),
                row('Romanization', seg('romanization', [['auto', 'A0 & Hangul'], ['always', 'Always'], ['never', 'Never']]), 'Latin letters under Korean. Turn it off as soon as you can read Hangul.'),
                row('Story subtitles', seg('subtitles', [['tap', 'KO · tap EN'], ['both', 'KO + EN'], ['off', 'None']])),
                row('Slow voice', seg('slow', [[false, 'Normal'], [true, '🐢 Slow']])),
                row('Auto-play audio', seg('autoAudio', [[true, 'On'], [false, 'Off']]), 'Speak words automatically in quizzes and flashcards.'),
                row('Sound effects', seg('sfx', [[true, 'On'], [false, 'Off']]))),
            h('div.center', ui.button('Reset all progress', () => {
                if (confirm('Reset all progress, XP and your review deck? This cannot be undone.')) {
                    store.reset();
                    renderStats();
                    ui.toast('Progress reset');
                    location.hash = '#/learn';
                }
            }, 'ghost danger')),
            h('p.credits', 'Voices: Microsoft neural TTS (SunHi, InJoon, Hyunsu). Illustrations generated with GPT Image. Made for learning Korean through stories you can understand.'));
    }

    // =====================
    // Boot
    // =====================
    function boot() {
        store.load();
        renderStats();
        document.addEventListener('kg:xp', (e) => {
            renderStats();
            const daily = store.dailyXp();
            if (daily >= store.data.goal && daily - e.detail < store.data.goal) {
                ui.toast('🎯 Daily goal reached!', 'good');
                ui.confetti(80);
            }
        });
        window.addEventListener('hashchange', route);
        route();
    }

    return { boot, show, notFound, renderStats };
})();

document.addEventListener('DOMContentLoaded', KG.app.boot);
