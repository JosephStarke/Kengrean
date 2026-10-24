// Audio: plays pre-generated neural-voice clips (audio/*.mp3 via audio/manifest.js),
// falls back to the browser's Korean speech voice, and handles sound effects.
KG.DEFAULT_VOICE = { id: 'ko-KR-SunHiNeural' };
KG.manifest = { byKey: {}, byText: {} };

KG.setAudioManifest = function setAudioManifest(map) {
    const byText = {};
    const preferred = KG.audio.voiceKey(KG.DEFAULT_VOICE);
    for (const [key, file] of Object.entries(map)) {
        const split = key.indexOf('|');
        const voice = key.slice(0, split);
        const text = key.slice(split + 1);
        if (!byText[text] || voice === preferred) byText[text] = file;
    }
    KG.manifest = { byKey: map, byText };
};

KG.audio = {
    player: new Audio(),
    token: 0,
    sfxCache: {},

    // Must match voiceKey in tools/extract_tts.mjs.
    voiceKey(v) {
        return [v.id, v.pitch || '', v.rate || ''].join(',');
    },
    voiceFor(speaker) {
        const member = KG.cast[speaker];
        return (member && member.voice) || KG.DEFAULT_VOICE;
    },
    fileFor(text, speaker) {
        if (!text) return null;
        const clean = String(text).trim();
        const voice = this.voiceFor(speaker);
        const file = KG.manifest.byKey[`${this.voiceKey(voice)}|${clean}`] || KG.manifest.byText[clean];
        return file ? `audio/${file}.mp3` : null;
    },
    has(text) {
        return !!this.fileFor(text);
    },

    // Warm the browser cache for clips that are about to play, so they start instantly
    // and don't stutter while streaming.
    preloaded: new Set(),
    preload(items) {
        for (const item of items) {
            if (!item) continue;
            const { text, speaker } = typeof item === 'string' ? { text: item } : item;
            const src = this.fileFor(text, speaker);
            if (!src || this.preloaded.has(src)) continue;
            this.preloaded.add(src);
            fetch(src).catch(() => this.preloaded.delete(src));
        }
    },

    stop() {
        this.token++;
        this.player.pause();
        if (window.speechSynthesis) speechSynthesis.cancel();
    },

    // Resolves when the clip finishes (or is interrupted by another play/stop).
    play(text, { speaker, slow } = {}) {
        this.stop();
        const token = this.token;
        const rate = (slow ?? KG.store.setting('slow')) ? 0.75 : 1;
        const src = this.fileFor(text, speaker);
        document.dispatchEvent(new CustomEvent('kg:speaking', { detail: { text, on: true } }));
        const finish = () => document.dispatchEvent(new CustomEvent('kg:speaking', { detail: { text, on: false } }));
        if (!src) return this.speak(text, rate, token).finally(finish);
        return new Promise((resolve) => {
            const p = this.player;
            let settled = false;
            let guard = setTimeout(() => done(), 10000);
            const done = () => {
                if (settled) return;
                settled = true;
                clearTimeout(guard);
                p.onended = p.onerror = p.onloadedmetadata = null;
                resolve(token === this.token);
            };
            // Never wait forever on a clip that stalls (slow network, throttled background tab).
            p.onloadedmetadata = () => {
                if (!Number.isFinite(p.duration)) return;
                clearTimeout(guard);
                guard = setTimeout(done, (p.duration / rate) * 1000 + 1500);
            };
            p.onended = done;
            p.onerror = () => {
                if (settled) return;
                settled = true;
                clearTimeout(guard);
                p.onended = p.onerror = p.onloadedmetadata = null;
                this.speak(text, rate, token).then(resolve);
            };
            p.src = src;
            p.playbackRate = rate;
            p.preservesPitch = true;
            p.play().catch(() => {
                // Autoplay blocked until the first tap: resolve so sequences keep moving.
                clearTimeout(guard);
                guard = setTimeout(done, 400);
            });
        }).finally(finish);
    },

    // Browser speech fallback for anything without a generated clip.
    speak(text, rate, token) {
        return new Promise((resolve) => {
            if (!window.speechSynthesis || !/[가-힣]/.test(text)) {
                setTimeout(() => resolve(token === this.token), 300);
                return;
            }
            const u = new SpeechSynthesisUtterance(text);
            u.lang = 'ko-KR';
            u.rate = rate * 0.95;
            const ko = speechSynthesis.getVoices().find((v) => v.lang.startsWith('ko'));
            if (ko) u.voice = ko;
            u.onend = u.onerror = () => resolve(token === this.token);
            setTimeout(() => resolve(token === this.token), 8000);
            speechSynthesis.speak(u);
        });
    },

    sfx(name) {
        if (!KG.store.setting('sfx')) return;
        const src = { correct: 'Sounds/correct.mp3', wrong: 'Sounds/incorrect.mp3' }[name];
        if (!src) return;
        const a = this.sfxCache[name] || (this.sfxCache[name] = new Audio(src));
        a.volume = 0.45;
        a.currentTime = 0;
        a.play().catch(() => {});
    }
};
