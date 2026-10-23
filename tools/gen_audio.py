"""Generates the Korean audio clips listed in tools/audio_jobs.json with Microsoft Edge
neural voices (free, no API key): `pip install edge-tts`, then
`node tools/extract_tts.mjs && python tools/gen_audio.py`.

Existing files are skipped, so re-running only fills in new or changed lines.
"""
import asyncio
import json
import os
import sys

import edge_tts

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
JOBS_FILE = os.path.join(ROOT, "tools", "audio_jobs.json")
CONCURRENCY = 8
RETRIES = 4


async def synthesize(job, semaphore, stats):
    path = os.path.join(ROOT, job["file"])
    if os.path.exists(path) and os.path.getsize(path) > 0:
        stats["skipped"] += 1
        return
    async with semaphore:
        for attempt in range(1, RETRIES + 1):
            try:
                communicate = edge_tts.Communicate(job["text"], job["voice"], rate=job["rate"], pitch=job["pitch"])
                await communicate.save(path)
                stats["made"] += 1
                if stats["made"] % 50 == 0:
                    print(f"  {stats['made']} clips made...", flush=True)
                return
            except Exception as error:  # network hiccups are common; back off and retry
                if attempt == RETRIES:
                    stats["failed"] += 1
                    print(f"FAILED {job['text']!r}: {error}", flush=True)
                    if os.path.exists(path):
                        os.remove(path)
                    return
                await asyncio.sleep(2 * attempt)


async def main():
    with open(JOBS_FILE, encoding="utf-8") as f:
        jobs = json.load(f)
    os.makedirs(os.path.join(ROOT, "audio"), exist_ok=True)
    semaphore = asyncio.Semaphore(CONCURRENCY)
    stats = {"made": 0, "skipped": 0, "failed": 0}
    await asyncio.gather(*(synthesize(job, semaphore, stats) for job in jobs))
    print(f"made {stats['made']}, skipped {stats['skipped']}, failed {stats['failed']}")
    return 1 if stats["failed"] else 0


if __name__ == "__main__":
    sys.exit(asyncio.run(main()))
