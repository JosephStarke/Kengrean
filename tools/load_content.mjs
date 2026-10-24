// Loads the browser content files (content/*.js) in a Node sandbox with a stub KG
// registry, so build tools can read exactly what the app reads.
import { readFileSync, existsSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import vm from 'node:vm';

export const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..');
export const CONTENT_FILES = ['cast.js', 'a0.js', 'hangul.js', 'a1.js', 'a2.js', 'wordbank.js'];

export function loadContent(files = CONTENT_FILES) {
    const data = { cast: {}, levels: [], units: [], packs: [] };
    const KG = {
        setCast: (cast) => { data.cast = cast; },
        level: (level) => data.levels.push(level),
        unit: (unit) => data.units.push(unit),
        wordPack: (pack) => data.packs.push(pack)
    };
    const context = vm.createContext({ KG, console });
    for (const file of files) {
        const full = resolve(ROOT, 'content', file);
        if (!existsSync(full)) continue;
        vm.runInContext(readFileSync(full, 'utf8'), context, { filename: full });
    }
    return data;
}
