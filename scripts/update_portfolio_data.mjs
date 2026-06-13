import fs from 'fs/promises';
import path from 'path';

const BASE_URL = 'https://ferys2195.github.io/portfolio-data';
const OUT_DIR = path.resolve(process.cwd(), 'portfolio-data');
const OUT_FILE = path.join(OUT_DIR, 'projects.json');

async function run() {
  try {
    await fs.mkdir(OUT_DIR, { recursive: true });

    const res = await fetch(`${BASE_URL}/projects.json`);
    if (!res.ok) throw new Error(`Failed to fetch projects.json: ${res.status}`);

    const json = await res.json();
    // Expecting array or object with { projects: [...] }
    let projects = [];
    if (Array.isArray(json)) projects = json;
    else if (Array.isArray(json.projects)) projects = json.projects;
    else throw new Error('Unexpected projects.json shape');

    // CLI arg: number of top items to pin (default 3)
    const topN = parseInt(process.env.PIN_TOP || process.argv[2] || '3', 10);

    const updated = projects.map((p, i) => ({
      ...p,
      is_pin: i < topN ? true : false,
      sort_order: (p.sort_order ?? i + 1),
    }));

    // Prefer keeping original shape if wrapped
    const outJson = Array.isArray(json) ? updated : { ...(json), projects: updated };

    await fs.writeFile(OUT_FILE, JSON.stringify(outJson, null, 2), 'utf8');
    console.log(`Wrote updated projects.json to ${OUT_FILE}`);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
}

run();
