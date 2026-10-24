// Generates story illustrations with the OpenAI Images API.
//
//   node tools/gen_images.mjs sheet                  cast reference sheet -> img/ref/cast-sheet.png
//   node tools/gen_images.mjs scenes [id ...]        missing scene images -> img/stories/<id>.webp
//        --force          regenerate even if the file exists
//        --quality q      low | medium | high (default medium)
//        --jobs n         parallel requests (default 4)
//
// Scenes with recurring characters are drawn with the edit model using the cast sheet as a
// reference, so faces and outfits stay consistent. Every call is appended to
// img/generation-log.jsonl. The API key is read from OPENAI_API_KEY (or the saved Windows
// user variable) and is never printed or written anywhere.
import { mkdir, readFile, writeFile, appendFile, access } from 'node:fs/promises';
import { execFileSync } from 'node:child_process';
import { resolve, dirname } from 'node:path';
import { loadContent, ROOT } from './load_content.mjs';

const API = 'https://api.openai.com/v1/images';
const GENERATE_MODEL = process.env.IMAGE_GENERATE_MODEL || 'gpt-image-2.5-flare';
const EDIT_MODEL = process.env.IMAGE_EDIT_MODEL || 'gpt-image-2.5-sunburst';
const SHEET = 'img/ref/cast-sheet.png';
const LOG = 'img/generation-log.jsonl';
const SCENE_SIZE = '1152x768';

const STYLE = 'Warm hand-drawn picture-book illustration for a Korean language-learning story. '
    + 'Clean soft ink outlines, flat gentle colours with a light coloured-pencil texture, a cosy pastel palette '
    + '(mint, coral, butter yellow, lavender, sky blue), expressive friendly faces. '
    + 'Keep it SIMPLE and UNCLUTTERED so a beginner instantly sees what is happening: show only the people and '
    + 'objects the scene describes; make the key action or object large, centred and clearly in focus; use a calm, '
    + 'minimal background (a plain soft-coloured wall, floor or sky with at most one or two simple hints of the place); '
    + 'no background crowds or passers-by, no extra food, props, decorations, posters or busy patterns; leave generous '
    + 'empty space around the subject. '
    + 'Contemporary Korea (Seoul unless the scene says otherwise; N Seoul Tower only in Seoul scenes). One single picture, never a comic strip or collage. Absolutely no words, letters, captions, logos or speech bubbles anywhere in the image; '
    + 'shop signs and screens are blank or use simple icons. Digits appear only if the scene explicitly asks for them.';

const CHARACTER_NAMES = { Minji: 'minji', Alex: 'alex', Junho: 'junho', Jian: 'jian', Grandma: 'halmeoni', Nabi: 'nabi' };

function apiKey() {
    if (process.env.OPENAI_API_KEY) return process.env.OPENAI_API_KEY;
    try {
        const out = execFileSync('reg', ['query', 'HKCU\\Environment', '/v', 'OPENAI_API_KEY'], { encoding: 'utf8', windowsHide: true });
        const match = out.match(/OPENAI_API_KEY\s+REG_(?:EXPAND_)?SZ\s+(\S+)/);
        if (match) return match[1];
    } catch { /* fall through */ }
    throw new Error('OPENAI_API_KEY is not set');
}

async function exists(path) {
    try { await access(path); return true; } catch { return false; }
}

async function callApi(endpoint, init, attempt = 1) {
    const response = await fetch(`${API}/${endpoint}`, { ...init, headers: { Authorization: `Bearer ${apiKey()}`, ...init.headers } });
    const text = await response.text();
    if ((response.status === 429 || response.status >= 500) && attempt < 5) {
        await new Promise((r) => setTimeout(r, 4000 * attempt));
        return callApi(endpoint, init, attempt + 1);
    }
    let body;
    try { body = JSON.parse(text); } catch { throw new Error(`API ${response.status}: ${text.slice(0, 300)}`); }
    if (!response.ok) throw new Error(`API ${response.status}: ${body.error?.message || text.slice(0, 300)}`);
    const b64 = body.data?.[0]?.b64_json;
    if (!b64) throw new Error('No image data in response');
    return { bytes: Buffer.from(b64, 'base64'), body };
}

async function save(relPath, bytes, record, body) {
    const full = resolve(ROOT, relPath);
    await mkdir(dirname(full), { recursive: true });
    await writeFile(full, bytes);
    await mkdir(dirname(resolve(ROOT, LOG)), { recursive: true });
    await appendFile(resolve(ROOT, LOG), JSON.stringify({ time: new Date().toISOString(), path: relPath, ...record, usage: body.usage }) + '\n');
    console.log(`saved ${relPath} (${Math.round(bytes.length / 1024)} KB)`);
}

async function generate(relPath, prompt, { size, quality, format }) {
    const record = { tool: 'generate', model: GENERATE_MODEL, size, quality, prompt };
    const { bytes, body } = await callApi('generations', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ model: GENERATE_MODEL, prompt, size, quality, output_format: format, ...(format === 'webp' ? { output_compression: 82 } : {}), n: 1 })
    });
    await save(relPath, bytes, record, body);
}

async function edit(relPath, prompt, references, { size, quality, format }) {
    const record = { tool: 'edit', model: EDIT_MODEL, size, quality, references, prompt };
    const form = new FormData();
    form.append('model', EDIT_MODEL);
    form.append('prompt', prompt);
    form.append('size', size);
    form.append('quality', quality);
    form.append('output_format', format);
    if (format === 'webp') form.append('output_compression', '82');
    form.append('n', '1');
    for (const ref of references) {
        form.append('image[]', new Blob([await readFile(resolve(ROOT, ref))], { type: 'image/png' }), ref.split('/').pop());
    }
    const { bytes, body } = await callApi('edits', { method: 'POST', body: form });
    await save(relPath, bytes, record, body);
}

function castInScene(art) {
    const ids = [];
    for (const [name, id] of Object.entries(CHARACTER_NAMES)) {
        if (new RegExp(`\\b${name}\\b`).test(art)) ids.push(id);
    }
    return ids;
}

function scenePrompt(cast, scene, extras, previous) {
    const present = castInScene(scene.art);
    const absent = Object.entries(CHARACTER_NAMES).filter(([, id]) => !present.includes(id)).map(([name]) => (name === 'Nabi' ? 'Nabi the cat' : name));
    const parts = [STYLE, `Scene: ${scene.art}`];
    if (extras) parts.push(`Other people in this story (draw them the same way every time they appear): ${extras}`);
    if (previous) parts.push(`Continuity: this picture comes right after the previous scene ("${previous}"). Keep the same location, time of day and outfits unless this scene clearly moves somewhere else.`);
    if (present.length) {
        parts.unshift('Use the reference sheet only to keep each character\'s face, hair, body and outfit exactly the same, and to match its art style. Draw a brand-new full scene, not a lineup.');
        parts.push(`Recurring characters in this scene: ${present.map((id) => cast[id].look).join('; ')}.`);
        if (absent.length) parts.push(`These reference-sheet characters are NOT in this scene and must not appear, not even in the background: ${absent.join(', ')}. Any other people are new extras who look clearly different from everyone on the sheet.`);
    }
    return { prompt: parts.join('\n\n'), hasCast: present.length > 0 };
}

async function runSheet() {
    const { cast } = loadContent(['cast.js']);
    const looks = ['minji', 'alex', 'junho', 'jian', 'halmeoni', 'nabi'].map((id) => cast[id].look);
    const prompt = `${STYLE}\n\nCharacter reference sheet: the six recurring characters of the story standing side by side in a row, full body, front three-quarter view, `
        + 'friendly relaxed poses, evenly spaced on a plain warm cream background, all at the correct relative heights (the boy reaches the adults\' chests, the cat sits at the front). '
        + `No labels or text. From left to right: ${looks.join('; ')}.`;
    await generate(SHEET, prompt, { size: '1536x1024', quality: 'high', format: 'png' });
}

async function runScenes(ids, { force, quality, jobs }) {
    const { cast, units } = loadContent();
    const scenes = units.flatMap((u) => (u.story?.scenes || []).map((scene, i, all) => ({ scene, extras: u.story.extras, previous: i ? all[i - 1].art : null })))
        .filter(({ scene }) => !ids.length || ids.some((id) => scene.img === id || scene.img.startsWith(`${id}-`)));
    const todo = [];
    for (const { scene, extras, previous } of scenes) {
        const out = `img/stories/${scene.img}.webp`;
        if (!force && await exists(resolve(ROOT, out))) continue;
        todo.push({ scene, extras, previous, out });
    }
    const hasSheet = await exists(resolve(ROOT, SHEET));
    console.log(`${todo.length} scene image(s) to generate (quality ${quality}, ${jobs} at a time)`);
    let failures = 0;
    const queue = [...todo];
    async function worker() {
        while (queue.length) {
            const { scene, extras, previous, out } = queue.shift();
            const { prompt, hasCast } = scenePrompt(cast, scene, extras, previous);
            try {
                if (hasCast && hasSheet) await edit(out, prompt, [SHEET], { size: SCENE_SIZE, quality, format: 'webp' });
                else await generate(out, prompt, { size: SCENE_SIZE, quality, format: 'webp' });
            } catch (error) {
                failures++;
                console.log(`FAILED ${scene.img}: ${error.message}`);
            }
        }
    }
    await Promise.all(Array.from({ length: jobs }, worker));
    console.log(failures ? `${failures} failure(s)` : 'done');
}

const [command, ...rest] = process.argv.slice(2);
const flag = (name, fallback) => {
    const i = rest.indexOf(`--${name}`);
    if (i === -1) return fallback;
    const value = rest[i + 1];
    rest.splice(i, 2);
    return value;
};
const force = rest.includes('--force');
if (force) rest.splice(rest.indexOf('--force'), 1);
const quality = flag('quality', 'medium');
const jobs = Number(flag('jobs', '4'));

if (command === 'sheet') await runSheet();
else if (command === 'scenes') await runScenes(rest, { force, quality, jobs });
else console.log('usage: node tools/gen_images.mjs sheet | scenes [id ...] [--force] [--quality q] [--jobs n]');
