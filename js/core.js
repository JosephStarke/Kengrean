// Kengrean core: content registry, shared helpers, and saved progress (localStorage).
// Content files in content/ call the registration helpers below.
const KG = window.KG = {
    cast: {},
    levels: [],
    units: [],
    unitById: {},
    packs: [],
    packById: {},

    setCast(cast) {
        this.cast = cast;
    },
    level(level) {
        this.levels.push(level);
    },
    unit(unit) {
        unit.vocab = unit.vocab || [];
        unit.sentences = unit.sentences || [];
        unit.patterns = unit.patterns || [];
        unit.vocab.forEach((w) => { w.unitId = unit.id; });
        this.units.push(unit);
        this.unitById[unit.id] = unit;
    },
    wordPack(pack) {
        pack.words.forEach((w) => { w.packId = pack.id; });
        this.packs.push(pack);
        this.packById[pack.id] = pack;
    },
    unitsIn(levelId) {
        return this.units.filter((u) => u.level === levelId);
    },
    nextUnit(unitId) {
        const i = this.units.findIndex((u) => u.id === unitId);
        return this.units[i + 1] || null;
    }
};

// =====================
// Utilities
// =====================
KG.util = {
    shuffle(list) {
        const a = [...list];
        for (let i = a.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [a[i], a[j]] = [a[j], a[i]];
        }
        return a;
    },
    pick(list) {
        return list[Math.floor(Math.random() * list.length)];
    },
    // n random items from list, skipping any for which skip(item) is true.
    sample(list, n, skip = () => false) {
        return KG.util.shuffle(list.filter((x) => !skip(x))).slice(0, n);
    },
    uniqueBy(list, keyFn) {
        const seen = new Set();
        return list.filter((x) => {
            const k = keyFn(x);
            if (seen.has(k)) return false;
            seen.add(k);
            return true;
        });
    },
    today(offsetDays = 0) {
        const d = new Date();
        d.setDate(d.getDate() + offsetDays);
        return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
    },
    wait(ms) {
        return new Promise((r) => setTimeout(r, ms));
    },
    escape(text) {
        return String(text).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
    }
};

// Tiny element builder: h('div.card.big', { onclick, style }, child, [children], 'text')
KG.h = function h(tag, props, ...children) {
    const [name, ...classes] = tag.split('.');
    const node = document.createElement(name || 'div');
    if (classes.length) node.className = classes.join(' ');
    if (props && (typeof props !== 'object' || props instanceof Node || Array.isArray(props))) {
        children.unshift(props);
        props = null;
    }
    for (const [key, value] of Object.entries(props || {})) {
        if (value == null || value === false) continue;
        if (key.startsWith('on')) node.addEventListener(key.slice(2), value);
        else if (key === 'class') node.className += (node.className ? ' ' : '') + value;
        else if (key === 'style' && typeof value === 'object') {
            for (const [prop, v] of Object.entries(value)) {
                if (prop.startsWith('--')) node.style.setProperty(prop, v);
                else node.style[prop] = v;
            }
        }
        else if (key === 'html') node.innerHTML = value;
        else if (key === 'dataset') Object.assign(node.dataset, value);
        else node.setAttribute(key, value === true ? '' : value);
    }
    const add = (child) => {
        if (child == null || child === false) return;
        if (Array.isArray(child)) child.forEach(add);
        else node.append(child instanceof Node ? child : document.createTextNode(String(child)));
    };
    children.forEach(add);
    return node;
};

// Replace a node's children, skipping null/false like KG.h does.
KG.fill = function fill(node, ...children) {
    node.replaceChildren(...children.flat(Infinity).filter((c) => c != null && c !== false));
};

// =====================
// Saved progress
// =====================
const DAY = 24 * 60 * 60 * 1000;
const SRS_INTERVALS = [0, 0.5 * DAY, DAY, 3 * DAY, 7 * DAY, 16 * DAY, 35 * DAY];

KG.store = {
    key: 'kengrean.v2',
    data: null,

    defaults() {
        return {
            xp: 0,
            streak: { count: 0, last: null },
            daily: { date: null, xp: 0 },
            goal: 30,
            units: {},
            srs: {},
            best: {},
            settings: { slow: false, subtitles: 'tap', romanization: 'auto', sfx: true, autoAudio: true }
        };
    },
    load() {
        let saved = null;
        try {
            saved = JSON.parse(localStorage.getItem(this.key));
        } catch { /* storage blocked or corrupt: start fresh */ }
        const base = this.defaults();
        this.data = Object.assign(base, saved || {});
        this.data.settings = Object.assign(base.settings, (saved || {}).settings || {});
        return this.data;
    },
    save() {
        try {
            localStorage.setItem(this.key, JSON.stringify(this.data));
        } catch { /* private mode: progress lives for this visit only */ }
    },
    reset() {
        this.data = this.defaults();
        this.save();
    },
    setting(name, value) {
        if (value === undefined) return this.data.settings[name];
        this.data.settings[name] = value;
        this.save();
        return value;
    },

    unit(id) {
        return this.data.units[id] || { story: false, words: false, patterns: false, stars: 0 };
    },
    markUnit(id, field, value = true) {
        const progress = { ...this.unit(id) };
        progress[field] = field === 'stars' ? Math.max(progress.stars || 0, value) : value;
        this.data.units[id] = progress;
        this.save();
    },
    unitDone(id) {
        const unit = KG.unitById[id];
        const p = this.unit(id);
        const steps = unit.type === 'hangul' ? [p.story, p.stars > 0] : [p.story, p.words, p.patterns, p.stars > 0];
        return { done: steps.filter(Boolean).length, total: steps.length, stars: p.stars || 0 };
    },
    started(id) {
        const p = this.data.units[id];
        return !!p && (p.story || p.words || p.patterns || p.stars > 0);
    },

    // XP also drives the daily goal and the streak.
    addXp(amount) {
        const d = this.data;
        const today = KG.util.today();
        if (d.daily.date !== today) d.daily = { date: today, xp: 0 };
        d.daily.xp += amount;
        d.xp += amount;
        if (d.streak.last !== today) {
            d.streak.count = d.streak.last === KG.util.today(-1) ? d.streak.count + 1 : 1;
            d.streak.last = today;
        }
        this.save();
        document.dispatchEvent(new CustomEvent('kg:xp', { detail: amount }));
    },
    streak() {
        const s = this.data.streak;
        return s.last === KG.util.today() || s.last === KG.util.today(-1) ? s.count : 0;
    },
    dailyXp() {
        return this.data.daily.date === KG.util.today() ? this.data.daily.xp : 0;
    },
    best(name, score) {
        const prev = this.data.best[name] || 0;
        if (score > prev) {
            this.data.best[name] = score;
            this.save();
            return true;
        }
        return false;
    },

    // Spaced repetition (Leitner boxes). Keys are the Korean text of a word.
    srsAdd(words) {
        const now = Date.now();
        for (const w of words) {
            if (!this.data.srs[w.ko]) this.data.srs[w.ko] = { box: 0, due: now };
        }
        this.save();
    },
    srsReview(ko, correct) {
        const item = this.data.srs[ko] || { box: 0, due: 0 };
        item.box = correct ? Math.min(item.box + 1, SRS_INTERVALS.length - 1) : Math.max(item.box - 2, 0);
        item.due = Date.now() + (correct ? SRS_INTERVALS[item.box] : 5 * 60 * 1000);
        this.data.srs[ko] = item;
        this.save();
    },
    srsDue() {
        const now = Date.now();
        return Object.entries(this.data.srs).filter(([, v]) => v.due <= now).map(([ko]) => ko);
    },
    srsStrength(ko) {
        const item = this.data.srs[ko];
        return item ? item.box : -1;
    }
};
