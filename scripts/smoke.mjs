/** Szybki smoke test na uruchomionym serwerze dev: kazda sciezka musi zwrocic 200. */
const base = process.env.BASE_URL ?? 'http://localhost:4321';

const paths = [
  '/',
  '/jak-to-dziala',
  '/oferta',
  '/realizacje',
  '/koszty-sprowadzenia-samochodu-z-usa',
  '/o-nas',
  '/kontakt',
  '/blog',
  '/blog/jak-czytac-aukcje-copart',
  '/import-samochodow-z-usa-warszawa',
  '/sprowadzanie-samochodow-z-kanady',
  '/samochody-z-copart',
  '/polityka-prywatnosci',
];

let failed = 0;

for (const path of paths) {
  try {
    const response = await fetch(base + path);
    const html = await response.text();
    const ok = response.status === 200 && html.includes('<h1');
    if (!ok) failed += 1;
    console.log(`${ok ? 'OK  ' : 'BLAD'} ${response.status} ${path} (${html.length} B)`);
  } catch (error) {
    failed += 1;
    console.log(`BLAD ---  ${path} (${error.message})`);
  }
}

console.log(`\nBledow: ${failed}`);
process.exit(failed > 0 ? 1 : 0);
