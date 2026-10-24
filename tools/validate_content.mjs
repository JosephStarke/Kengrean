// Checks content files against content/SCHEMA.md.
// Usage: node tools/validate_content.mjs [file.js ...]   (default: all content files)
import { loadContent, CONTENT_FILES } from './load_content.mjs';

const files = process.argv.slice(2).map((f) => f.replace(/^.*[\\/]/, ''));
const data = loadContent(files.length ? ['cast.js', ...files.filter((f) => f !== 'cast.js')] : CONTENT_FILES);
const errors = [];
const warnings = [];
const POS = ['noun', 'verb', 'adj', 'expr', 'num', 'other'];
const speakers = new Set(Object.keys(data.cast));
const ids = new Set();

function checkWord(where, w) {
    if (!w.ko || !w.en) errors.push(`${where}: word needs ko and en (${JSON.stringify(w)})`);
    if (w.pos && !POS.includes(w.pos)) errors.push(`${where}: bad pos "${w.pos}" on ${w.ko}`);
    if (!w.pos) warnings.push(`${where}: no pos on ${w.ko}`);
    if (!w.emoji) warnings.push(`${where}: no emoji on ${w.ko}`);
    if ((w.pos === 'verb' || w.pos === 'adj') && !w.polite) errors.push(`${where}: ${w.ko} needs polite form`);
}

for (const u of data.units) {
    const where = u.id || '(no id)';
    if (ids.has(u.id)) errors.push(`${where}: duplicate unit id`);
    ids.add(u.id);
    for (const key of ['id', 'level', 'title', 'ko', 'icon', 'goal']) if (!u[key]) errors.push(`${where}: missing ${key}`);
    (u.vocab || []).forEach((w) => checkWord(where, w));
    if (u.type === 'hangul') {
        (u.letters || []).forEach((l) => {
            for (const key of ['ch', 'rom', 'name', 'say', 'tip']) if (!l[key]) errors.push(`${where}: letter ${l.ch} missing ${key}`);
        });
        continue;
    }
    if (!u.vocab || u.vocab.length < 8) warnings.push(`${where}: only ${(u.vocab || []).length} vocab`);
    const scenes = u.story?.scenes || [];
    if (scenes.length < 4) errors.push(`${where}: story needs 4+ scenes`);
    scenes.forEach((s, i) => {
        // Scenes are <unit id>-<n>; an opening review scene may be <unit id>-0.
        if (!(s.img.startsWith(`${u.id}-`) && /^\d+$/.test(s.img.slice(u.id.length + 1)))) errors.push(`${where}: scene ${i + 1} img should be ${u.id}-<number>`);
        if (scenes.findIndex((x) => x.img === s.img) !== i) errors.push(`${where}: duplicate img ${s.img}`);
        if (!s.art) errors.push(`${where}: scene ${i + 1} missing art`);
        if (!s.lines?.length) errors.push(`${where}: scene ${i + 1} has no lines`);
        (s.lines || []).forEach((l) => {
            if (!speakers.has(l.sp)) errors.push(`${where}: unknown speaker "${l.sp}"`);
            if (l.sp === 'nabi') errors.push(`${where}: Nabi the cat cannot speak`);
            if (!l.ko || !l.en) errors.push(`${where}: line missing ko/en`);
        });
        if (s.check) {
            const c = s.check;
            if (!c.q || !c.en || !Array.isArray(c.options) || c.answer == null || !c.options[c.answer]) {
                errors.push(`${where}: scene ${i + 1} malformed check`);
            }
        }
    });
    const usesStaff = scenes.some((s) => s.lines?.some((l) => l.sp === 'staffM' || l.sp === 'staffF'));
    if (usesStaff && !u.story.extras) warnings.push(`${where}: story has extras (staff lines) but no story.extras look description`);
    if (!u.patterns?.length) errors.push(`${where}: needs patterns`);
    (u.patterns || []).forEach((p) => {
        if (!p.form || !p.meaning || !p.examples?.length) errors.push(`${where}: malformed pattern ${p.form}`);
    });
    if ((u.sentences || []).length < 8) errors.push(`${where}: needs 8+ sentences`);
    (u.sentences || []).forEach((s) => {
        if (!s.ko || !s.en) errors.push(`${where}: sentence missing ko/en`);
        if (s.blank && !s.ko.includes(s.blank)) errors.push(`${where}: blank "${s.blank}" not in "${s.ko}"`);
        if (s.blank && (!Array.isArray(s.alts) || s.alts.length !== 3)) errors.push(`${where}: blank needs 3 alts (${s.ko})`);
        if (s.alts?.includes(s.blank)) errors.push(`${where}: alts include the answer (${s.ko})`);
    });
}
for (const p of data.packs) {
    if (!p.id || !p.title || !p.words?.length) errors.push(`pack ${p.id}: missing id/title/words`);
    (p.words || []).forEach((w) => checkWord(`pack ${p.id}`, w));
}

console.log(`units: ${data.units.length}, packs: ${data.packs.length}, scenes: ${data.units.reduce((n, u) => n + (u.story?.scenes.length || 0), 0)}`);
warnings.forEach((w) => console.log('warn:', w));
errors.forEach((e) => console.log('ERROR:', e));
console.log(errors.length ? `${errors.length} error(s)` : 'OK');
process.exit(errors.length ? 1 : 0);
