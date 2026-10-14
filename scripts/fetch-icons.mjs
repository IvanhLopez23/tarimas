// One time generator: pulls Phosphor icon paths from the Iconify API and emits
// a self contained Astro icon component so the site ships zero icon fonts.
import { mkdir, writeFile } from 'node:fs/promises';
import path from 'node:path';

const names = [
  'truck',
  'package',
  'cube',
  'stack',
  'tree',
  'recycle',
  'globe-hemisphere-west',
  'leaf',
  'medal',
  'shield-check',
  'phone',
  'envelope-simple',
  'map-pin',
  'clock',
  'linkedin-logo',
  'facebook-logo',
  'instagram-logo',
  'whatsapp-logo',
  'caret-right',
  'caret-left',
  'arrow-right',
  'check-circle',
  'handshake',
  'target',
  'eye',
  'factory',
  'arrows-left-right',
  'ruler',
  'gauge',
  'list',
  'x',
  'plus',
  'minus',
];

const url = `https://api.iconify.design/ph.json?icons=${names.join(',')}`;

let data;
for (let attempt = 1; attempt <= 5; attempt += 1) {
  const res = await fetch(url);
  if (res.ok) {
    data = await res.json();
    break;
  }
  console.warn(`attempt ${attempt} failed with HTTP ${res.status}`);
  await new Promise((r) => setTimeout(r, attempt * 2500));
}
if (!data) throw new Error('Could not download the Phosphor icon data');

// Iconify returns aliases separately; flatten them onto their parent glyph.
for (const [alias, def] of Object.entries(data.aliases ?? {})) {
  const parent = data.icons[def.parent];
  if (parent && !data.icons[alias]) data.icons[alias] = { body: parent.body };
}

const entries = names
  .filter((name) => data.icons[name])
  .map((name) => [name, data.icons[name].body.trim()]);

const missing = names.filter((name) => !data.icons[name]);
if (missing.length) console.warn(`Missing glyphs: ${missing.join(', ')}`);

const outDir = path.resolve(process.argv[2]);
await mkdir(outDir, { recursive: true });

const body = entries
  .map(([name, inner]) => `  ${JSON.stringify(name)}: ${JSON.stringify(inner)},`)
  .join('\n');

const dataFile = `// Generated from the Phosphor icon set (https://phosphoricons.com, MIT).
// Regenerate with scripts/fetch-icons.mjs when new glyphs are needed.

export const phosphorIcons = {
${body}
} as const;

export type IconName = keyof typeof phosphorIcons;
`;

const componentFile = `---
import { phosphorIcons, type IconName } from './icons';

interface Props {
  name: IconName;
  class?: string;
  size?: number | string;
}

const { name, class: className = 'size-6', size } = Astro.props;
---

<svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 256 256"
  fill="currentColor"
  class={className}
  width={size}
  height={size}
  aria-hidden="true"
  focusable="false"
  set:html={phosphorIcons[name]}
/>
`;

await writeFile(path.join(outDir, 'icons.ts'), dataFile, 'utf8');
await writeFile(path.join(outDir, 'Icon.astro'), componentFile, 'utf8');
console.log(`Wrote ${entries.length} glyphs to ${outDir}`);
