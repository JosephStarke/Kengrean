// Shared UI pieces: Korean text with romanization, audio buttons, word cards,
// toasts, confetti and the page frame.
KG.ui = (() => {
    const h = KG.h;

    // Romanization: 'auto' shows it before Hangul is learned (A0 and the Hangul track).
    function showRom(levelId) {
        const mode = KG.store.setting('romanization');
        return mode === 'always' || (mode === 'auto' && (levelId === 'A0' || levelId === 'H'));
    }

    function ko(text, { rom = false, cls = '' } = {}) {
        return h(`span.ko${cls ? '.' + cls : ''}`, { lang: 'ko' },
            h('span.ko-text', text),
            rom ? h('span.rom', KG.hangul.romanize(text)) : null);
    }

    const SPEAKER_SVG = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3.5 9.2v5.6h3.8l4.9 4V5.2l-4.9 4z" fill="currentColor"/>'
        + '<path d="M15.6 8.6a4.8 4.8 0 0 1 0 6.8M18.2 6a8.4 8.4 0 0 1 0 12" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"/></svg>';

    function audioBtn(text, { speaker, label, size = '', slow } = {}) {
        const btn = h(`button.audio-btn${size ? '.' + size : ''}`, {
            type: 'button',
            'aria-label': `Play ${text}`,
            onclick: (e) => {
                e.stopPropagation();
                btn.classList.add('playing');
                KG.audio.play(text, { speaker, slow }).finally(() => btn.classList.remove('playing'));
            }
        }, h('span.audio-icon', { html: SPEAKER_SVG }), label ? h('span', label) : null);
        return btn;
    }

    function slowBtn(text, opts = {}) {
        return h('button.audio-btn.slow', {
            type: 'button',
            'aria-label': `Play ${text} slowly`,
            title: 'Slow',
            onclick: (e) => {
                e.stopPropagation();
                KG.audio.play(text, { ...opts, slow: true });
            }
        }, h('span.slow-icon', '🐢'));
    }

    function emoji(w, size = '') {
        return h(`span.emoji${size ? '.' + size : ''}`, { 'aria-hidden': 'true' }, w.emoji || '💬');
    }

    function wordCard(w, { levelId } = {}) {
        const strength = KG.store.srsStrength(w.ko);
        return h('button.word-card', { type: 'button', onclick: () => KG.audio.play(w.ko) },
            emoji(w, 'lg'),
            h('div.word-card-body',
                ko(w.ko, { rom: showRom(levelId) }),
                w.polite ? h('div.word-polite', ko(w.polite)) : null,
                h('div.word-en', w.en),
                w.note ? h('div.word-note', w.note) : null),
            h('div.strength', { title: 'Memory strength' },
                [0, 1, 2, 3, 4].map((i) => h(`i${strength > i ? '.on' : ''}`))));
    }

    function speakerChip(sp, as) {
        const member = KG.cast[sp] || {};
        const name = as || (sp === 'narrator' ? '' : member.ko);
        if (!name) return null;
        return h('span.speaker', { style: { background: member.color || '#888' } }, name);
    }

    function progressBar(value, max, cls = '') {
        const pct = max ? Math.round((value / max) * 100) : 0;
        return h(`div.bar${cls ? '.' + cls : ''}`, { role: 'progressbar', 'aria-valuenow': pct, 'aria-valuemin': 0, 'aria-valuemax': 100 },
            h('div.bar-fill', { style: { width: `${pct}%` } }));
    }

    function stars(n, max = 3) {
        return h('span.stars', { 'aria-label': `${n} of ${max} stars` },
            Array.from({ length: max }, (_, i) => h(`span.star${i < n ? '.on' : ''}`, '★')));
    }

    function toast(message, kind = '') {
        const t = h(`div.toast${kind ? '.' + kind : ''}`, message);
        document.body.append(t);
        requestAnimationFrame(() => t.classList.add('show'));
        setTimeout(() => {
            t.classList.remove('show');
            setTimeout(() => t.remove(), 400);
        }, 1800);
    }

    function confetti(count = 60) {
        const colors = ['#FF6B6B', '#4ECDC4', '#FFE66D', '#FF9F1C', '#A076F9'];
        const layer = h('div.confetti-layer', { 'aria-hidden': 'true' });
        for (let i = 0; i < count; i++) {
            layer.append(h('i.confetti', {
                style: {
                    left: `${Math.random() * 100}%`,
                    background: KG.util.pick(colors),
                    animationDelay: `${Math.random() * 0.6}s`,
                    animationDuration: `${1.6 + Math.random() * 1.4}s`,
                    transform: `rotate(${Math.random() * 360}deg)`
                }
            }));
        }
        document.body.append(layer);
        setTimeout(() => layer.remove(), 3500);
    }

    // A page: optional back link + title row + body.
    function page({ back, title, sub, icon, actions, cls = '' }, ...body) {
        return h(`section.page${cls ? '.' + cls : ''}`,
            (back || title) ? h('header.page-head',
                back ? h('a.back', { href: back, 'aria-label': 'Back' }, '‹') : null,
                icon ? h('span.page-icon', icon) : null,
                h('div.page-titles', title ? h('h1', title) : null, sub ? h('div.page-sub', sub) : null),
                actions || null) : null,
            ...body);
    }

    function button(label, onclick, cls = '') {
        return h(`button.btn${cls ? '.' + cls.split(' ').join('.') : ''}`, { type: 'button', onclick }, label);
    }

    return { showRom, ko, audioBtn, slowBtn, emoji, wordCard, speakerChip, progressBar, stars, toast, confetti, page, button };
})();
