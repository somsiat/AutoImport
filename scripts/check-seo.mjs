/**
 * Sanity check wygenerowanego HTML: JSON-LD musi byc parsowalny, kazda strona
 * potrzebuje dokladnie jednego H1, tytulu i description. Uruchamiac po buildzie:
 * npm run check:seo
 */
import { readFileSync, globSync } from 'node:fs';

const files = globSync('dist/**/*.html');
let errors = 0;

const fail = (file, message) => {
  console.error(`  [BLAD] ${file}: ${message}`);
  errors += 1;
};

for (const file of files.sort()) {
  const html = readFileSync(file, 'utf8');

  const h1Count = (html.match(/<h1[\s>]/g) ?? []).length;
  const title = html.match(/<title>([^<]*)<\/title>/)?.[1] ?? '';
  const description = html.match(/<meta name="description" content="([^"]*)"/)?.[1] ?? '';
  const canonical = html.match(/rel="canonical" href="([^"]*)"/)?.[1] ?? '';
  const ldBlocks = [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)];
  const externalScripts = (html.match(/<script[^>]*\ssrc=/g) ?? []).length;

  const types = [];
  for (const block of ldBlocks) {
    try {
      const parsed = JSON.parse(block[1]);
      types.push(parsed['@type']);
    } catch (error) {
      fail(file, `niepoprawny JSON-LD (${error.message})`);
    }
  }

  if (h1Count !== 1) fail(file, `liczba H1 = ${h1Count}, powinna byc 1`);
  if (!title) fail(file, 'brak <title>');
  if (title.length > 65) fail(file, `title ma ${title.length} znakow (limit ~65)`);
  if (!description) fail(file, 'brak meta description');
  if (description.length > 165) fail(file, `description ma ${description.length} znakow (limit 165)`);
  if (!canonical) fail(file, 'brak linku canonical');

  console.log(
    `${file.replace(/\\/g, '/').replace('dist', '')}\n` +
      `  title: ${title.length} zn. | description: ${description.length} zn. | H1: ${h1Count}\n` +
      `  JSON-LD: ${types.join(', ') || 'brak'} | zewnetrzne skrypty JS: ${externalScripts}`,
  );
}

console.log(`\nSprawdzono ${files.length} stron, bledow: ${errors}`);
process.exit(errors > 0 ? 1 : 0);
