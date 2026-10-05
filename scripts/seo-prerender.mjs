/**
 * Post-build SEO / GEO pass. Runs after `vite build`, writes only into dist/.
 *
 * Why this exists
 * ---------------
 * The site is a client-rendered SPA: every URL is served the same index.html with
 * an empty <div id="root">. Googlebot executes JavaScript so it sees the real
 * pages, but the crawlers behind the AI answer engines — GPTBot / OAI-SearchBot,
 * ClaudeBot, PerplexityBot — read raw HTML only. To them the whole site was one
 * page with one title and one canonical.
 *
 * This script gives each route its own static HTML file, so a raw-HTML crawler
 * gets the right <title>, description and canonical, plus:
 *   • a per-route JSON-LD graph (the primary machine-readable payload)
 *   • a <noscript> text summary of the page (secondary, belt-and-braces)
 *
 * Nothing here touches the React app. The body still ships an empty #root, so
 * the rendered page, the design and the hydration path are byte-for-byte what
 * they were before — <noscript> is never shown to a JS-capable browser.
 *
 * Facts below are transcribed from the pages themselves (titles/descriptions are
 * parsed out of each page's useSEO call, the roster out of SPEAKERS_2026, the
 * bootcamp Q&A out of BootcampPage) so they cannot silently drift. The week grid
 * is transcribed from public/program-week-2026.jpg — that one is a picture, so if
 * the picture changes, WEEK below has to be updated by hand.
 */
import { readFile, writeFile, mkdir } from 'fs/promises';
import { join, dirname } from 'path';

const DIST = 'dist';
const BASE = 'https://turkiyenomadfest.com';
const ORG = `${BASE}/#organization`;
const EVENT = `${BASE}/#event-2026`;
const PLACE = `${BASE}/#venue`;
const TICKETS = 'https://www.eventzilla.net/e/turkiye-nomad-fest--alanya-2026-2138676905';
const IMAGE = `${BASE}/photo-castle-beach.jpg`;

const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

/* ── sources parsed out of the app so they cannot drift ──────────────────────── */

/** The 2026 roster, read straight out of SPEAKERS_2026. Commented-out speakers
 *  (people held back from the live page) are skipped, exactly as on the page. */
async function readRoster() {
  const src = await readFile('src/pages/SpeakersPage.tsx', 'utf8');
  const open = src.indexOf('export const SPEAKERS_2026: Speaker2026[] = [');
  if (open < 0) throw new Error('SPEAKERS_2026 not found');
  const body = src.slice(src.indexOf('[', open) + 1, src.indexOf('\n];', open));

  const people = [];
  let cur = null;
  for (const raw of body.split('\n')) {
    const line = raw.trim();
    if (line.startsWith('//')) continue;          // held-back speakers stay held back
    if (line === '{') { cur = {}; continue; }
    if (line === '},') { if (cur?.name) people.push(cur); cur = null; continue; }
    if (!cur) continue;
    const m = line.match(/^(name|role|link|site|formatLabel): '(.*)',$/);
    if (m) { cur[m[1]] = m[2].replace(/\\'/g, "'"); continue; }
    const t = line.match(/^talk: \['(.*?)', '(.*)'\],$/);
    if (t) cur.talk = [t[1].replace(/\\'/g, "'"), t[2].replace(/\\'/g, "'")];
  }
  if (people.length < 15) throw new Error(`roster parse looks wrong: ${people.length} speakers`);
  return people;
}

/** The bootcamp Q&A, read out of the FAQ array on BootcampPage. */
async function readFaq() {
  const src = await readFile('src/pages/BootcampPage.tsx', 'utf8');
  const out = [];
  const from = src.indexOf('const FAQ_2026');
  const block = src.slice(from, src.indexOf('];', from));
  for (const m of block.matchAll(/\{ q: '(.*?)', a: '(.*?)' \},/g)) {
    out.push({ q: m[1].replace(/\\'/g, "'"), a: m[2].replace(/\\'/g, "'") });
  }
  if (out.length < 4) throw new Error(`faq parse looks wrong: ${out.length} items`);
  return out;
}

/** Each page already declares its own title/description in useSEO — reuse them. */
async function readSeo(file) {
  const src = await readFile(file, 'utf8');
  const block = src.slice(src.indexOf('useSEO({'));
  const title = block.match(/title: '(.*?)',/)?.[1];
  const description = block.match(/description: '(.*?)',/)?.[1];
  if (!title || !description) throw new Error(`useSEO not found in ${file}`);
  return { title: title.replace(/\\'/g, "'"), description: description.replace(/\\'/g, "'") };
}

/* ── the 2026 week, transcribed from public/program-week-2026.jpg ─────────────── */

const WEEK = [
  { date: '2026-10-18', label: 'Sun 18 Oct', title: 'Nomad Landing',
    detail: 'Registration and check-in from 12:00, hotel and beach, sunset chat.' },
  { date: '2026-10-19', label: 'Mon 19 Oct', title: 'Opening Circle',
    detail: 'Open coworking lounge, Cleopatra Beach, Opening Circle at 17:00 (Build. Belong. Breathe.), chat & dine.' },
  { date: '2026-10-20', label: 'Tue 20 Oct', title: 'Festival opens',
    detail: 'Opening remarks, Turkish Nomad Visa, nomad events panel, Become a Solopreneur with AI as your co-founder, AI Bootcamp Zero, gala dinner.' },
  { date: '2026-10-21', label: 'Wed 21 Oct', title: 'Vision & remote work',
    detail: 'Nomad Body Reset, remote-work keynote, mental performance, AI Bootcamp, digital art workshop.' },
  { date: '2026-10-22', label: 'Thu 22 Oct', title: 'Income & community',
    detail: 'Skool communities, Upwork, tax strategy for digital nomads, AI skills for solopreneurs, AI Bootcamp, Invisible Lens photo workshop at the castle, beach party.' },
  { date: '2026-10-23', label: 'Fri 23 Oct', title: "Founders' game",
    detail: 'Trusting your gut, designing a nomad life, building a business that sets you free, AI Bootcamp, Damlataş Cave.' },
  { date: '2026-10-24', label: 'Sat 24 Oct', title: 'Closing Circle',
    detail: 'Closing circle and the Blue & Green Alanya boat tour.' },
  { date: '2026-10-25', label: 'Sun 25 Oct', title: 'Check-out',
    detail: 'Check-out at 11:00, free day at the beach.' },
];

/* ── shared schema nodes ─────────────────────────────────────────────────────── */

const organization = {
  '@type': 'Organization',
  '@id': ORG,
  name: 'Türkiye Nomad Fest',
  alternateName: 'Turkiye Nomad Fest',
  url: `${BASE}/`,
  logo: `${BASE}/logo-mark.png`,
  description: 'Organisers of Türkiye Nomad Fest, an annual gathering in Alanya for solopreneurs, builders and location-independent professionals.',
  sameAs: [
    'https://www.instagram.com/turkiye.nomadfest/',
    'https://www.linkedin.com/company/nomad-fest-turkiye/',
  ],
};

const website = {
  '@type': 'WebSite',
  '@id': `${BASE}/#website`,
  url: `${BASE}/`,
  name: 'Türkiye Nomad Fest',
  inLanguage: 'en',
  publisher: { '@id': ORG },
};

const place = {
  '@type': 'Place',
  '@id': PLACE,
  name: 'Anjeliq Downtown Hotel',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Kızlar Pınarı, Türkmenbaşı Cd. No:1',
    addressLocality: 'Alanya',
    addressRegion: 'Antalya',
    postalCode: '07400',
    addressCountry: 'TR',
  },
};

/** The event itself. No `price` on the offer on purpose: Early Bird is over and
 *  no replacement price is published on the site yet, so quoting the old €99
 *  would put a stale number into AI answers. Add `price`/`priceCurrency` back
 *  here the moment the current ticket price is known. */
function event(performers) {
  const e = {
    '@type': 'Event',
    '@id': EVENT,
    name: 'Türkiye Nomad Fest 2026',
    alternateName: 'Turkiye Nomad Fest 2026 — Alanya',
    startDate: '2026-10-18T11:30:00+03:00',
    endDate: '2026-10-25T21:00:00+03:00',
    eventStatus: 'https://schema.org/EventScheduled',
    eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
    url: `${BASE}/`,
    image: IMAGE,
    inLanguage: 'en',
    description: 'Eight days in Alanya, Türkiye for solopreneurs, builders and modern nomads: talks, workshops, an AI bootcamp, wellbeing mornings and shared evenings. 18–25 October 2026.',
    location: { '@id': PLACE },
    organizer: { '@id': ORG },
    offers: { '@type': 'Offer', url: TICKETS, availability: 'https://schema.org/InStock' },
    subEvent: WEEK.map((d) => ({
      '@type': 'Event',
      name: `${d.title} — Türkiye Nomad Fest 2026`,
      startDate: d.date,
      description: d.detail,
      location: { '@id': PLACE },
      eventStatus: 'https://schema.org/EventScheduled',
      eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
    })),
  };
  if (performers) {
    e.performer = performers.map((p) => {
      const n = { '@type': 'Person', name: p.name, jobTitle: p.role };
      if (p.link && p.link !== '#') n.sameAs = [p.link];
      return n;
    });
  }
  return e;
}

/* ── per-route content ───────────────────────────────────────────────────────── */

function speakersNoscript(people) {
  const items = people.map((p) => {
    const bits = [`<strong>${esc(p.name)}</strong> — ${esc(p.role)}`];
    if (p.talk) bits.push(`${esc(p.talk[0])}: ${esc(p.talk[1])}`);
    if (p.site && !p.role.includes(p.site)) bits.push(esc(p.site));   // several roles already name the company
    return `      <li>${bits.join(' · ')}</li>`;
  }).join('\n');
  return `    <p>${people.length} speakers, facilitators and hosts are confirmed for Türkiye Nomad Fest 2026 in Alanya, 18–25 October 2026.</p>\n    <ul>\n${items}\n    </ul>`;
}

function weekNoscript() {
  return `    <ul>\n${WEEK.map((d) => `      <li><strong>${esc(d.label)} — ${esc(d.title)}</strong>: ${esc(d.detail)}</li>`).join('\n')}\n    </ul>`;
}

function faqNoscript(faq) {
  return faq.map((f) => `    <h3>${esc(f.q)}</h3>\n    <p>${esc(f.a)}</p>`).join('\n');
}

const FACTS = `    <p><strong>Türkiye Nomad Fest 2026</strong> · 18–25 October 2026 · Anjeliq Downtown Hotel, Kızlar Pınarı, Türkmenbaşı Cd. No:1, 07400 Alanya, Antalya, Türkiye. Tickets and accommodation are bundled. <a href="${TICKETS}">Tickets</a>.</p>`;

async function routes() {
  const people = await readRoster();
  const faq = await readFaq();

  const home = {
    path: '/',
    out: 'index.html',
    title: 'Turkiye Nomad Fest 2026 — Freedom. Connection. Growth.',
    description: '8 days in Alanya for solopreneurs, builders, and modern nomads. October 18–25, 2026. Freedom. Connection. Growth.',
    graph: [organization, website, event(people)],
    noscript: `    <h1>Türkiye Nomad Fest 2026 — Alanya, 18–25 October 2026</h1>
${FACTS}
    <p>An eight-day gathering on the Turkish Mediterranean for solopreneurs, builders and location-independent professionals. Mornings are for wellbeing, days for talks and the AI bootcamp, afternoons to explore Alanya, evenings to gather. ${people.length} speakers are confirmed.</p>
    <h2>The week</h2>
${weekNoscript()}
    <h2>More</h2>
    <ul>
      <li><a href="/program">Program</a> — the shape of the week</li>
      <li><a href="/speakers">Speakers</a> — the ${people.length}-strong 2026 line-up</li>
      <li><a href="/bootcamp">AI Bootcamp</a> — four afternoon sessions, Tue 20 – Fri 23 Oct, from first workflow to a working AI agent</li>
      <li><a href="/stay">Stay</a> — Anjeliq Downtown Hotel, on Cleopatra Beach</li>
      <li><a href="/alanya">Alanya</a> — why the city</li>
    </ul>`,
  };

  const speakers = {
    path: '/speakers',
    out: 'speakers/index.html',
    ...(await readSeo('src/pages/SpeakersAltPage.tsx')),
    graph: [organization, website, event(people), {
      '@type': 'ItemList',
      name: 'Türkiye Nomad Fest 2026 speakers',
      numberOfItems: people.length,
      itemListElement: people.map((p, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        item: (() => {
          const n = { '@type': 'Person', name: p.name, jobTitle: p.role, performerIn: { '@id': EVENT } };
          if (p.link && p.link !== '#') n.sameAs = [p.link];
          if (p.talk) n.description = `${p.talk[0]}: ${p.talk[1]}`;
          return n;
        })(),
      })),
    }],
    noscript: `    <h1>Speakers — Türkiye Nomad Fest 2026</h1>\n${speakersNoscript(people)}\n${FACTS}`,
  };

  const program = {
    path: '/program',
    out: 'program/index.html',
    ...(await readSeo('src/pages/ProgramPage.tsx')),
    graph: [organization, website, event(null)],
    noscript: `    <h1>Program — Türkiye Nomad Fest 2026</h1>
    <p>The 2026 festival runs 18–25 October 2026 in Alanya. Wellbeing in the mornings, talks and the AI bootcamp through the day, Alanya in the afternoons, the village in the evenings.</p>
${weekNoscript()}
    <p>The page also walks through the first edition — 14–19 October 2025, Anjeliq Hotels — session by session, as the template the 2026 week is built on.</p>
${FACTS}`,
  };

  const bootcamp = {
    path: '/bootcamp',
    out: 'bootcamp/index.html',
    ...(await readSeo('src/pages/BootcampPage.tsx')),
    graph: [organization, website, event(null), {
      '@type': 'FAQPage',
      '@id': `${BASE}/bootcamp#faq`,
      mainEntity: faq.map((f) => ({
        '@type': 'Question',
        name: f.q,
        acceptedAnswer: { '@type': 'Answer', text: f.a },
      })),
    }],
    noscript: `    <h1>AI Bootcamp — Türkiye Nomad Fest 2026</h1>
    <p>A hands-on bootcamp woven into the festival week: from first workflow to a working AI agent. Built for people whose primary skill is not engineering. Bootcamp seats are bundled with festival tickets and the room is capped.</p>
    <h2>Common questions</h2>
${faqNoscript(faq)}
${FACTS}`,
  };

  const stay = {
    path: '/stay',
    out: 'stay/index.html',
    ...(await readSeo('src/pages/StayPage.tsx')),
    graph: [organization, website, event(null)],
    noscript: `    <h1>Stay — Türkiye Nomad Fest 2026</h1>
    <p>Anjeliq Downtown Hotel is a small, family-run boutique hotel at the corner of Cleopatra Beach and downtown Alanya — 70 air-conditioned rooms, the Mediterranean across one quiet road. Festival tickets and room bookings are bundled: you reserve once and are matched to a room based on your preferences.</p>
${FACTS}`,
  };

  const alanya = {
    path: '/alanya',
    out: 'alanya/index.html',
    ...(await readSeo('src/pages/AlanyaPage.tsx')),
    graph: [organization, website, event(null)],
    noscript: `    <h1>Alanya — Türkiye Nomad Fest 2026</h1>
    <p>Alanya sits on the Turkish Mediterranean under a 13th-century Seljuk castle: roughly 300 days of sun a year, gigabit symmetric fibre through the centre and 5G outside it, and living costs around half of western Europe — a two-bed flat near the sea runs €600–900 a month, coworking €100–140. Antalya airport (AYT) is 135 km away, about two hours; the festival runs a paid shuttle for around €35 each way.</p>
${FACTS}`,
  };

  return [home, program, speakers, stay, alanya, bootcamp];
}

/* ── writing ─────────────────────────────────────────────────────────────────── */

function applyHead(html, r) {
  const url = `${BASE}${r.path}`;
  const title = esc(r.title);
  const desc = esc(r.description);
  const out = html
    .replace(/<title>.*?<\/title>/s, `<title>${title}</title>`)
    .replace(/(<meta name="description" content=")[^"]*(")/, `$1${desc}$2`)
    .replace(/(<meta property="og:title" content=")[^"]*(")/, `$1${title}$2`)
    .replace(/(<meta property="og:description" content=")[^"]*(")/, `$1${desc}$2`)
    .replace(/(<meta property="og:url" content=")[^"]*(")/, `$1${url}$2`)
    .replace(/(<meta name="twitter:title" content=")[^"]*(")/, `$1${title}$2`)
    .replace(/(<meta name="twitter:description" content=")[^"]*(")/, `$1${desc}$2`)
    .replace(/(<link rel="canonical" href=")[^"]*(")/, `$1${url}$2`);
  if (out === html && r.path !== '/') throw new Error(`head rewrite did nothing for ${r.path}`);
  return out;
}

const run = async () => {
  const template = await readFile(join(DIST, 'index.html'), 'utf8');

  // The build ships one hand-written Event blob in index.html; every route gets a
  // richer generated graph instead, so drop the original rather than duplicating it.
  const ld = /\n?\s*<script type="application\/ld\+json">.*?<\/script>/s;
  if (!ld.test(template)) throw new Error('base JSON-LD block not found in dist/index.html');
  const base = template.replace(ld, '');

  const list = await routes();
  for (const r of list) {
    let html = applyHead(base, r);

    const graph = JSON.stringify({ '@context': 'https://schema.org', '@graph': r.graph }, null, 2);
    html = html.replace('</head>', `  <script type="application/ld+json">\n${graph}\n  </script>\n  </head>`);

    // <noscript> is never rendered for a JS-capable browser, so the page a visitor
    // sees is untouched; raw-HTML crawlers get the text.
    html = html.replace(
      '<div id="root"></div>',
      `<div id="root"></div>\n    <noscript>\n${r.noscript}\n    </noscript>`,
    );

    const dest = join(DIST, r.out);
    await mkdir(dirname(dest), { recursive: true });
    await writeFile(dest, html);
    console.log(`  ${r.path.padEnd(10)} → ${r.out.padEnd(22)} ${(html.length / 1024).toFixed(1)} kB`);
  }

  // /speakers-alt and /speakers-classic are the same roster under different
  // treatments; point them at /speakers so they are never indexed separately.
  for (const alias of ['speakers-alt', 'speakers-classic']) {
    const s = list.find((r) => r.path === '/speakers');
    let html = applyHead(base, s).replace(
      /(<link rel="canonical" href=")[^"]*(")/, `$1${BASE}/speakers$2`,
    ).replace('<meta name="robots" content="index, follow" />', '<meta name="robots" content="noindex, follow" />');
    await mkdir(join(DIST, alias), { recursive: true });
    await writeFile(join(DIST, alias, 'index.html'), html);
    console.log(`  /${alias.padEnd(19)} → noindex, canonical /speakers`);
  }

  const today = new Date().toISOString().slice(0, 10);
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${list.map((r) => `  <url>
    <loc>${BASE}${r.path === '/' ? '/' : r.path}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${r.path === '/' || r.path === '/speakers' || r.path === '/program' ? 'weekly' : 'monthly'}</changefreq>
    <priority>${r.path === '/' ? '1.0' : '0.9'}</priority>
  </url>`).join('\n')}
</urlset>
`;
  await writeFile(join(DIST, 'sitemap.xml'), sitemap);

  const people = await readRoster();
  const llms = `# Türkiye Nomad Fest

> An eight-day festival in Alanya, Türkiye for solopreneurs, builders and
> location-independent professionals. The 2026 edition runs 18–25 October 2026 at
> Anjeliq Downtown Hotel on Cleopatra Beach. Mornings are for wellbeing, days for
> talks and the AI bootcamp, afternoons for Alanya, evenings for the village.
> ${people.length} speakers are confirmed. Tickets and rooms are booked together.

Organiser: Türkiye Nomad Fest · ${BASE}/
Venue: Anjeliq Downtown Hotel, Kızlar Pınarı, Türkmenbaşı Cd. No:1, 07400 Alanya, Antalya, Türkiye
Dates: 18–25 October 2026
Tickets: ${TICKETS}

## Pages

- [Program](${BASE}/program): the shape of the festival week, day by day.
- [Speakers](${BASE}/speakers): the ${people.length} confirmed speakers, facilitators and hosts for 2026, plus the 2025 line-up.
- [AI Bootcamp](${BASE}/bootcamp): the four-session bootcamp inside the festival — from first workflow to a working AI agent — and its FAQ.
- [Stay](${BASE}/stay): Anjeliq Downtown Hotel, 70 rooms on Cleopatra Beach; tickets and accommodation are bundled.
- [Alanya](${BASE}/alanya): the city — climate, connectivity, cost of living and how to get there.

## The 2026 week

${WEEK.map((d) => `- ${d.label} — ${d.title}: ${d.detail}`).join('\n')}

## 2026 speakers

${people.map((p) => `- ${p.name} — ${p.role}${p.talk ? ` · ${p.talk[0]}: ${p.talk[1]}` : ''}`).join('\n')}
`;
  await writeFile(join(DIST, 'llms.txt'), llms);

  console.log(`  sitemap.xml (${list.length} urls) · llms.txt (${people.length} speakers) · lastmod ${today}`);
};

run().catch((e) => { console.error('\nSEO prerender failed:', e.message); process.exit(1); });
