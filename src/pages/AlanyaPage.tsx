import React from 'react';
import { useSEO } from '../hooks/useSEO';
import { InnerHeader } from '../components/InnerHeader';
import { InnerDivider } from '../components/InnerDivider';
import { InnerFooter } from '../components/InnerFooter';
import { Img } from '../components/Img';
import '../styles/alanya.css';

const EVENTZILLA = 'https://www.eventzilla.net/e/turkiye-nomad-fest--alanya-2026-2138676905';

const PageHero: React.FC = () => (
  <section className="tnf-page-hero" style={{ background: 'linear-gradient(180deg, #FFFFFF 0%, #F7F4ED 100%)' }}>
    <div className="wrap">
      <div className="crumb">
        <a href="/">◐ Home</a>
        <span>/</span>
        <span>Alanya</span>
      </div>
      <div className="alanya-hero-grid">
        <div>
          <div className="eyebrow" style={{ color: 'var(--turq-deep)', marginBottom: 18 }}>◐ The host city</div>
          <h1>
            A small <em>Mediterranean</em> town<br />
            with a <em>three-thousand-year</em> memory.
          </h1>
          <p className="lede" style={{ marginTop: 28, fontSize: 20, maxWidth: 640, color: 'var(--ink-2)', lineHeight: 1.55 }}>
            Alanya sits on the southern coast of Türkiye, between the Taurus
            mountains and the Mediterranean. A Seljuk castle on a peninsula,
            three hundred days of sun a year, a beach Cleopatra was said
            to bathe in, and — quietly — one of Europe's largest year-round
            communities of remote workers and small-business builders.
          </p>
          <div style={{ marginTop: 36, display: 'flex', gap: 28, flexWrap: 'wrap', fontFamily: 'ui-monospace, monospace', fontSize: 11, letterSpacing: '.14em', textTransform: 'uppercase', color: 'var(--ink-2)' }}>
            <div><b style={{ color: 'var(--ink)' }}>Region ·</b> Antalya, Türkiye</div>
            <div><b style={{ color: 'var(--ink)' }}>Population ·</b> ~340,000</div>
            <div><b style={{ color: 'var(--ink)' }}>Sun days ·</b> 300+/yr</div>
          </div>
        </div>

        <figure style={{ margin: 0 }}>
          <div className="postcard has-photo" style={{ position: 'relative' }}>
            <Img src="/photo-alanya-beach.jpg" alt="Cleopatra Beach seen from the castle" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }} />
            <div className="label">◐ Cleopatra Beach</div>
            <div className="quote">where the sea<br />meets the citadel</div>
          </div>
          <figcaption style={{ marginTop: 14, fontFamily: 'var(--serif-italic)', fontStyle: 'italic', fontSize: 14, color: 'var(--ink-2)' }}>
            The Seljuk castle still crowns the peninsula. The fortifications run six kilometres around it.
          </figcaption>
        </figure>
      </div>
    </div>
  </section>
);

const Editorial: React.FC = () => (
  <section style={{ padding: 'var(--pad-section) var(--pad-x)' }}>
    <div className="wrap" style={{ maxWidth: 1100 }}>
      <div className="eyebrow" style={{ color: 'var(--turq-deep)', marginBottom: 18 }}>◐ A short field guide</div>
      <h2 className="display" style={{ fontSize: 'clamp(40px, 5.2vw, 84px)', margin: '0 0 36px' }}>
        Why we chose <em>here.</em>
      </h2>
      <div className="editorial">
        <p>
          Alanya is a coastal city in the Antalya Province of southwestern
          Türkiye — a long, narrow strip pressed between the limestone wall
          of the Taurus mountains and the eastern edge of the Mediterranean.
          People have lived on this peninsula since at least the fourth
          century BCE; the Hellenistic Greeks called it Korakesion, the
          Romans Coracesium, the Byzantines Kalonoros — "the beautiful
          mountain". The name we use today comes from the Seljuk Sultan
          Alaeddin Keykubat I, who took the city in 1221 and rebuilt the
          fortifications that still stand.
        </p>
        <p>
          What survives from those centuries is improbable. A castle the
          size of a small village wraps the headland; the Red Tower,
          finished in 1226, still guards the harbour; an Ottoman shipyard
          dating from the same century is carved into the cliff just below
          it. The whole peninsula was added to the UNESCO tentative list
          for its layered military architecture — Hellenistic walls under
          Roman repairs under Byzantine reinforcements under Seljuk
          masterwork. You can walk it in an afternoon.
        </p>
        <p>
          Modern Alanya is something else again. The climate is the warmest
          on the Turkish Riviera — three hundred days of sun a year, sea
          warm enough to swim in from late April to early November. In
          the 1980s the town reinvented itself as a holiday destination
          for Europeans and Russians alike; today, roughly a fifth of its
          registered residents are foreign nationals — Russians and Germans
          form the two largest communities by far, followed by Scandinavians,
          Iranians, Britons, Dutch and Ukrainians. Alanya has one of the
          most internationally mixed populations of any city in Türkiye.
        </p>
        <p>
          That mix is the reason we host the festival here. Alanya is
          structurally bilingual — every café has a bilingual menu, every
          notary speaks two or three languages, every gym has a Türkiye-EU
          mixer. The infrastructure for living a global online business
          from a small Mediterranean town has been quietly built, year by
          year, by people who didn't wait for permission. It's the closest
          thing the Mediterranean has to a working Galt's Gulch for
          solo founders.
        </p>
      </div>
    </div>
  </section>
);

const Stats: React.FC = () => (
  <section style={{ padding: '0 var(--pad-x) var(--pad-section)' }}>
    <div className="wrap">
      <div className="stat-row">
        <div><div className="n">300+</div><div className="l">Sunny days a year</div></div>
        <div><div className="n">26°C</div><div className="l">Avg sea temp · summer</div></div>
        <div><div className="n">3,000</div><div className="l">Years of continuous habitation</div></div>
        <div><div className="n">~20%</div><div className="l">Foreign-born residents</div></div>
      </div>
    </div>
  </section>
);

const Quote: React.FC = () => (
  <section style={{ padding: 'var(--pad-section) var(--pad-x)', background: 'var(--paper-2)' }}>
    <div className="wrap" style={{ maxWidth: 1100 }}>
      <div className="eyebrow" style={{ color: 'var(--turq-deep)', marginBottom: 22 }}>◐ As Strabo put it</div>
      <p className="big-quote">
        "Korakesion is a citadel set upon a precipitous rock — and the
        coast that surrounds it grows pomegranate, lemon and olive in
        such number that the air itself is sweet."
        <span className="src">— Strabo, Geographica · Book XIV · ~ 7 BCE</span>
      </p>
      <p style={{ marginTop: 28, fontSize: 16, color: 'var(--ink-2)', maxWidth: 760, lineHeight: 1.6 }}>
        The pomegranates, lemons and olives are still there. So is the
        citadel. So, increasingly, are the keyboards.
      </p>
    </div>
  </section>
);

const WHY_TILES = [
  { kind: 'photo', src: '/photo-cablecar.jpg',      tag: '◐ Taurus mountains, 15 km inland',   title: 'Sea and mountain on the same day.',         area: '1 / 1 / 4 / 5' },
  { kind: 'color', bg: '#56C1C4', fg: '#0E0F12',    stat: '300+',  statLabel: 'Sun days a year',           title: 'The climate runs the whole year',           body: 'Swim from late April through early November. December is a soft Italian autumn — 16 °C, dry, the sea still warm.',                                       area: '1 / 5 / 3 / 7' },
  { kind: 'color', bg: '#E6E7A3', fg: '#0E0F12',    stat: '1 Gbps',statLabel: 'Symmetric fiber, in town',  title: 'Internet that holds up your business.',     body: 'Gigabit fiber across the centre, 5G outside it, €8/month for a 30 GB backup SIM.',                                                                    area: '3 / 5 / 4 / 7' },
  { kind: 'photo', src: '/photo-castle-beach.jpg',  tag: '◐ Cleopatra Beach',                  title: 'The colour the sea actually is here.',      area: '4 / 1 / 7 / 3' },
  { kind: 'color', bg: '#F3A6C8', fg: '#0E0F12',    stat: '€700',  statLabel: 'Two-bed flat / month',      title: 'Costs roughly halved vs. western Europe',   body: 'Two-bed flat near the sea: €600–900. Long lunch with wine: €12–18. Coworking: €100–140. Private healthcare, excellent.',                              area: '4 / 3 / 7 / 5' },
  { kind: 'photo', src: '/photo-cay.jpg',           tag: '◐ Çay culture',                      title: "A café tradition that doesn't rush you.",   area: '4 / 5 / 7 / 7' },
  { kind: 'photo', src: '/photo-lighthouse.jpg',    tag: '◐ The harbour lighthouse',           title: 'Mornings are quiet enough to think.',       area: '7 / 1 / 10 / 5' },
  { kind: 'color', bg: '#5B74E6', fg: '#FFFFFF',    stat: '4',     statLabel: 'Established foreign communities', title: 'A genuinely international town',      body: 'Russians and Germans lead. Then Scandinavians, Britons, Iranians, Dutch, Ukrainians. Bilingual schools, multilingual notaries — already mature.',       area: '7 / 5 / 9 / 7' },
  { kind: 'color', bg: '#9B7BD0', fg: '#FFFFFF',    stat: '<4 h',  statLabel: 'Door-to-bed from EU',        title: 'Direct flights from where you live.',       body: 'GZP (40 km), AYT (135 km). Berlin, London, Vienna, Amsterdam — under four hours.',                                                                       area: '9 / 5 / 10 / 7' },
  { kind: 'photo', src: '/photo-swim.jpg',          tag: '◐ Mid-October, still 25 °C',         title: 'Five-month swimming season.',               area: '10 / 1 / 13 / 3' },
  { kind: 'color', bg: '#0E0F12', fg: '#F6F1E8',    stat: '2024',  statLabel: 'Digital nomad visa',         title: "Türkiye's tax & residency stack",            body: "Short-term residency, the new digital-nomad visa, and competitive corporate structures for export-facing solo businesses. Foreign-currency income compounds against the lira.", area: '10 / 3 / 13 / 5' },
  { kind: 'photo', src: '/photo-flag.jpg',          tag: '◐ End of a working day',             title: 'Türkiye, on the cusp of Europe.',           area: '10 / 5 / 13 / 7' },
];

const WhyNomads: React.FC = () => (
  <section style={{ padding: 'var(--pad-section) var(--pad-x)' }}>
    <div className="wrap">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'end', flexWrap: 'wrap', gap: 24, marginBottom: 40 }}>
        <div>
          <div className="eyebrow" style={{ color: 'var(--turq-deep)', marginBottom: 14 }}>◐ Why solopreneurs come here</div>
          <h2 className="display" style={{ fontSize: 'clamp(44px, 5.6vw, 96px)', margin: 0 }}>
            A dozen reasons<br />
            <em>that compound.</em>
          </h2>
        </div>
        <p style={{ maxWidth: 460, fontSize: 16, color: 'var(--ink-2)', margin: 0, lineHeight: 1.6 }}>
          None of these is a sales pitch. Each is small on its own. Together,
          they're why Russian, German, Scandinavian and Anglo founders
          keep showing up — and staying past their first winter.
        </p>
      </div>
      <div className="why-mosaic">
        {WHY_TILES.map((t, i) => {
          if (t.kind === 'photo') {
            return (
              <div key={i} className="why-tile photo" style={{ gridArea: t.area }}>
                <Img src={t.src ?? ''} alt={t.title ?? ''} loading="lazy" decoding="async" />
                <div className="why-photo-overlay">
                  <div className="why-photo-tag">{t.tag}</div>
                  <div className="why-photo-title">{t.title}</div>
                </div>
              </div>
            );
          }
          return (
            <div key={i} className="why-tile color" style={{ gridArea: t.area, background: t.bg, color: t.fg }}>
              <div className="why-color-stat">
                <div className="why-color-stat-n">{t.stat}</div>
                <div className="why-color-stat-l">{t.statLabel}</div>
              </div>
              <div>
                <div className="why-color-title">{t.title}</div>
                <div className="why-color-body">{t.body}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  </section>
);

const HISTORY = [
  ['~330 BC',    'Korakesion',         'First documented mention. A Hellenistic Greek pirate stronghold on the headland.'],
  ['67 BC',      'Roman Coracesium',   'Pompey defeats the Cilician pirates here in a famous naval battle. Rome integrates the coast.'],
  ['7th–11th c.','Byzantine Kalonoros','The Byzantines rebuild the inner citadel. The town becomes a key trading post on the Cilician coast.'],
  ['1221',       'The Seljuk capture', 'Sultan Alaeddin Keykubat I conquers the city, renames it Alaiye, and makes it his winter capital.'],
  ['1226',       'The Red Tower',      'Built by an architect from Aleppo to defend the harbour. It still stands, octagonal, fifty meters wide.'],
  ['13th c.',    'Tersane shipyard',   "An imperial shipyard carved into the cliff. The Mediterranean's only intact medieval Seljuk dockyard."],
  ['1471',       'Ottoman annexation', 'Alaiye joins the Ottoman Empire as a small provincial port — a quieter half-millennium.'],
  ['1935',       "The name 'Alanya'",  "Atatürk visits and gives the city its modern Turkish name during the early Republic period."],
  ['1980s',      'Holiday era',        'Charter flights and the new Antalya airport make Alanya a destination for Germans, Scandinavians and (after the USSR\'s collapse) Russians.'],
  ['2010s',      'The settlers',       'Russian, German and northern European retirees and freelancers begin staying year-round. The first international schools open.'],
  ['2024',       'Digital nomad visa', 'Türkiye introduces a dedicated short-stay digital nomad permit — Alanya becomes a top destination overnight.'],
];

const History: React.FC = () => (
  <section style={{ padding: 'var(--pad-section) var(--pad-x)', background: 'var(--paper-2)' }}>
    <div className="wrap">
      <div className="eyebrow" style={{ color: 'var(--turq-deep)', marginBottom: 14 }}>◐ A condensed history</div>
      <h2 className="display" style={{ fontSize: 'clamp(40px, 5.2vw, 84px)', margin: '0 0 40px' }}>
        Three thousand years,<br />
        <em>in twelve dates.</em>
      </h2>
      <div className="tl">
        {HISTORY.map((r, i) => (
          <div className="tl-row" key={i}>
            <div className="when">{r[0]}</div>
            <div className="what">
              <h4>{r[1]}</h4>
              <p>{r[2]}</p>
            </div>
          </div>
        ))}
      </div>

      {/* History photo grid */}
      <div className="alanya-hist-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16, marginTop: 56 }}>
        {[
          { src: '/photo-alanya-hist-1.png', cap: 'Ruins walk · castle grounds' },
          { src: '/photo-alanya-hist-2.png', cap: 'Ancient walls · festival site' },
          { src: '/photo-alanya-hist-3.png', cap: 'Stone corridors · golden hour' },
        ].map((p, i) => (
          <div key={i} style={{ borderRadius: 6, overflow: 'hidden', background: '#0E0F12', position: 'relative' }}>
            <Img
              src={p.src}
              alt={p.cap}
              loading="lazy"
              decoding="async"
              style={{ width: '100%', height: 'auto', display: 'block' }}
            />
            <div style={{
              position: 'absolute', left: 12, bottom: 10,
              fontFamily: 'ui-monospace, monospace', fontSize: 10,
              letterSpacing: '.08em', textTransform: 'uppercase',
              color: '#fff', textShadow: '0 1px 8px rgba(0,0,0,.6)',
            }}>◐ {p.cap}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Geography: React.FC = () => (
  <section style={{ padding: 'var(--pad-section) var(--pad-x)' }}>
    <div className="wrap alanya-geo-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'clamp(28px, 4vw, 80px)', alignItems: 'start' }}>
      <div>
        <div className="eyebrow" style={{ color: 'var(--turq-deep)', marginBottom: 14 }}>◐ The geography</div>
        <h2 className="display" style={{ fontSize: 'clamp(40px, 5.2vw, 84px)', margin: '0 0 24px' }}>
          The mountains<br />
          <em>meet the sea.</em>
        </h2>
        <p style={{ fontSize: 17, lineHeight: 1.65, color: 'var(--ink-2)', margin: 0 }}>
          The town stretches along seventy kilometres of coastline. To the
          north, the Taurus mountains rise to two thousand metres within
          fifteen kilometres of the shore — close enough that you can ski
          at Saklıkent in the morning and swim in Cleopatra Beach by
          afternoon, two months a year. The combination keeps the air
          dry and the sunsets long.
        </p>
        <p style={{ marginTop: 14, fontSize: 17, lineHeight: 1.65, color: 'var(--ink-2)' }}>
          The peninsula itself, where the festival is hosted, divides the
          coastline into two beaches: Cleopatra to the west, Keykubat to
          the east. The water is clear enough that the Blue Cave under
          the castle is visible to fifteen metres on a calm day.
        </p>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
        <div className="postcard cool has-photo" style={{ aspectRatio: '4/3', position: 'relative' }}>
          <Img src="/photo-alanya-castle.jpg" alt="Alanya Red Tower and castle walls at sunset" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }} />
          <div className="label">◐ The Castle</div>
          <div className="quote" style={{ fontSize: 'clamp(28px, 3vw, 48px)' }}>six kilometres<br />of fortifications</div>
        </div>
        <div className="postcard cool has-photo" style={{ aspectRatio: '4/3', position: 'relative' }}>
          <Img src="/photo-redtower-night.jpg" alt="Alanya Red Tower illuminated at night" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }} />
          <div className="label">◐ Kızıl Kule · 1226</div>
          <div className="quote" style={{ fontSize: 'clamp(28px, 3vw, 48px)' }}>800 years<br />still standing</div>
        </div>
      </div>
    </div>
  </section>
);

const FLIGHTS = [
  ['Berlin',    'BER', '3 h 30', 'GZP / AYT', 'Pegasus · SunExpress'],
  ['London',    'STN', '4 h 10', 'AYT',        'Pegasus · easyJet'],
  ['Amsterdam', 'AMS', '4 h 00', 'AYT / GZP',  'Corendon · SunExpress'],
  ['Vienna',    'VIE', '3 h 00', 'GZP / AYT',  'AnadoluJet · SunExpress'],
  ['Zürich',    'ZRH', '3 h 20', 'AYT',        'SunExpress · Edelweiss'],
  ['Paris',     'ORY', '4 h 00', 'AYT',        'Transavia · Pegasus'],
  ['Stockholm', 'ARN', '4 h 30', 'AYT',        'SunExpress · Norwegian'],
  ['Istanbul',  'IST', '1 h 15', 'GZP / AYT',  'THY · Pegasus · daily'],
  ['Dubai',     'DXB', '4 h 30', 'AYT',        'SunExpress · flydubai'],
  ['New York',  'JFK', 'via IST','AYT',         'Turkish Airlines · 1 stop'],
];

const MapAndFlights: React.FC = () => (
  <section style={{ padding: 'var(--pad-section) var(--pad-x)' }}>
    <div className="wrap">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'end', flexWrap: 'wrap', gap: 24, marginBottom: 32 }}>
        <div>
          <div className="eyebrow" style={{ color: 'var(--turq-deep)', marginBottom: 14 }}>◐ Where on the map</div>
          <h2 className="display" style={{ fontSize: 'clamp(40px, 5.2vw, 84px)', margin: 0 }}>
            Closer than<br />
            <em>you think.</em>
          </h2>
        </div>
        <p style={{ maxWidth: 460, fontSize: 15, color: 'var(--ink-2)', margin: 0, lineHeight: 1.55 }}>
          Alanya sits on the southern coast of Türkiye, ten degrees of
          longitude east of Rome. Two airports serve it: Gazipaşa-Alanya
          (GZP, 40 km, low-cost European routes) and Antalya (AYT, 135 km,
          the international hub).
        </p>
      </div>

      <div className="map-wrap">
        <div className="map-card">
          <Img
            src="/map-turkey.png"
            alt="Illustrated map of Türkiye with Alanya marked"
            loading="lazy"
            decoding="async"
            style={{ width: '100%', height: 'auto', display: 'block', borderRadius: 6 }}
          />
        </div>

        <div>
          <div className="eyebrow" style={{ color: 'var(--turq-deep)', marginBottom: 14 }}>◐ Direct flights, by city</div>
          <h3 style={{ fontFamily: 'var(--sans)', fontWeight: 800, fontSize: 28, letterSpacing: '-.01em', margin: '0 0 8px' }}>
            From{' '}
            <em style={{ fontFamily: 'var(--serif-italic)', fontStyle: 'italic', fontWeight: 400, color: 'var(--turq-deep)' }}>where you live</em><br />
            to a beach in Türkiye.
          </h3>
          <p style={{ fontSize: 14.5, lineHeight: 1.6, color: 'var(--ink-2)', margin: '0 0 22px' }}>
            Approximate flight times. <b>GZP</b> = Gazipaşa-Alanya (40 km, ~45 min by car).
            <b> AYT</b> = Antalya (135 km, ~2 h by car; festival shuttle available).
          </p>
          <table className="flights-table">
            <thead>
              <tr>
                <th>From</th>
                <th>Time</th>
                <th>Airport</th>
                <th>Carriers</th>
              </tr>
            </thead>
            <tbody>
              {FLIGHTS.map((row, i) => (
                <tr key={i}>
                  <td>
                    <div className="city">{row[0]}</div>
                    <div className="dur">{row[1]}</div>
                  </td>
                  <td className="dur">{row[2]}</td>
                  <td className="ap">{row[3]}</td>
                  <td className="car">{row[4]}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p style={{ marginTop: 22, fontFamily: 'ui-monospace, monospace', fontSize: 11, letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--ink-2)' }}>
            ✱ Schedules vary by season · most European routes peak May–October · we run shuttles from both airports on arrival days.
          </p>
        </div>
      </div>
    </div>
  </section>
);

const FOOD = [
  ['Şiş kebap',       'On the coast, lamb is marinated in onion juice and pomegranate molasses. Order it with bulgur pilaf and a side of acılı ezme.', 'Lamb · Charcoal · ~150 ₺'],
  ['Levrek balığı',   "Sea bass, salt-baked or grilled whole, served with lemon and rocket. Best at the small fishermen's tavernas off Iskele.",        'Fish · Sea-fresh · ~280 ₺'],
  ['Mantı',           'Turkish pasta — tiny lamb-stuffed parcels under garlic yoghurt and chili butter. The Anatolian comfort food.',                   'Lamb · Yoghurt · ~110 ₺'],
  ['Pide & Lahmacun', 'The Turkish flatbreads. Pide is the boat-shaped one with cheese, sucuk and an egg; lahmacun is the thin one with mince and lemon.','Wood-fired · ~80 ₺'],
  ['Çay & meze evening','The national ritual: fifteen small dishes — dolma, haydari, fava, atom — and a slow procession of glasses of black tea on the sea-front.','Mezze · Long table · ~200 ₺'],
  ['Künefe',          'The dessert. Shredded pastry layered with stretched cheese, drowned in syrup, served hot with kaymak. Hatay-style, not Antep.', 'Sweet · Hot · ~90 ₺'],
];

const Gastronomy: React.FC = () => (
  <section style={{ padding: 'var(--pad-section) var(--pad-x)', background: 'var(--paper-2)' }}>
    <div className="wrap">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'end', flexWrap: 'wrap', gap: 24, marginBottom: 32 }}>
        <div>
          <div className="eyebrow" style={{ color: 'var(--turq-deep)', marginBottom: 14 }}>◐ What you'll eat</div>
          <h2 className="display" style={{ fontSize: 'clamp(40px, 5.2vw, 84px)', margin: 0 }}>
            Six things<br />
            <em>to order.</em>
          </h2>
        </div>
        <p style={{ maxWidth: 420, fontSize: 15, color: 'var(--ink-2)', margin: 0, lineHeight: 1.55 }}>
          Turkish food is regional. On the south coast, the cuisine
          leans Mediterranean — olive oil, citrus, fresh fish — with
          the Anatolian classics threading through it.
        </p>
      </div>
      <div className="food-grid">
        {FOOD.map((f, i) => (
          <div key={i}>
            <div className="name">{f[0]}</div>
            <div className="desc">{f[1]}</div>
            <div className="meta">{f[2]}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Practical: React.FC = () => (
  <section style={{ padding: 'var(--pad-section) var(--pad-x)' }}>
    <div className="wrap">
      <div className="eyebrow" style={{ color: 'var(--turq-deep)', marginBottom: 14 }}>◐ Getting here</div>
      <h2 className="display" style={{ fontSize: 'clamp(36px, 4.6vw, 72px)', margin: '0 0 36px' }}>
        Practical <em>notes.</em>
      </h2>
      <div className="alanya-practical-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 'clamp(20px, 2.4vw, 40px)' }}>
        {[
          { h: 'Gazipaşa-Alanya Airport', d: 'GZP: 40 km / 45 min from the festival hotel. Low-cost European routes — Pegasus, Sun Express, AnadoluJet — from Berlin, Vienna, Amsterdam, London Stansted.' },
          { h: 'Antalya Airport',          d: 'AYT: 135 km / 2 h. The major international gateway. We run a paid shuttle ~€35 each way; cheaper than a private taxi.' },
          { h: 'Visa',                     d: 'Most EU/UK/US passports are visa-exempt for 90 days. The 2024 digital-nomad permit covers up to 6 months for those staying longer.' },
          { h: 'Currency & cards',         d: 'Turkish Lira (₺). Cards work everywhere; carry some cash for taxis and small markets. ATMs are abundant on Atatürk Caddesi.' },
          { h: 'Weather in October',       d: 'Average highs 26 °C, lows 15 °C, sea around 23 °C. Light rain on a couple of afternoons is possible. Bring one warm layer for evenings.' },
          { h: 'Language',                 d: 'Turkish is the local language; German is widely spoken; English is reliable in tourism areas. The festival itself runs in English.' },
          { h: 'Time zone',                d: 'GMT+3 year-round (Türkiye does not observe daylight saving). Same as Moscow; one ahead of Athens.' },
          { h: 'Power & SIM',              d: 'Type F sockets (European). Local SIM with 30 GB data costs around €15 — Turkcell and Türk Telekom both work well in Alanya.' },
          { h: 'Safety',                   d: 'Alanya is one of the safer Mediterranean cities at this scale; standard travel precautions apply. The festival neighbourhood is walkable at all hours.' },
        ].map((b, i) => (
          <div key={i} style={{ padding: '24px 0', borderTop: '1px solid var(--rule)' }}>
            <div style={{ fontWeight: 700, fontSize: 14, letterSpacing: '.02em', color: 'var(--ink)', marginBottom: 8 }}>{b.h}</div>
            <div style={{ fontSize: 14, lineHeight: 1.6, color: 'var(--ink-2)' }}>{b.d}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const FinalCTA: React.FC = () => (
  <section style={{ padding: 'var(--pad-section) var(--pad-x)', background: 'var(--ink)', color: 'var(--paper)' }}>
    <div className="wrap alanya-cta-grid" style={{ display: 'grid', gridTemplateColumns: '1.1fr .9fr', gap: 'var(--gap)', alignItems: 'center' }}>
      <div>
        <div className="eyebrow" style={{ color: 'var(--turq)', marginBottom: 22 }}>◐ Six days, one peninsula</div>
        <h2 className="display" style={{ margin: 0, fontSize: 'clamp(48px, 7vw, 120px)', lineHeight: .92, color: 'var(--paper)' }}>
          See it<br />
          <em style={{ fontFamily: 'var(--serif-italic)', fontStyle: 'italic', fontWeight: 400, background: 'linear-gradient(135deg, #56C1C4, #C6A6D8 60%, #F3A6C8)', WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent' }}>for yourself.</em>
        </h2>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
        <p style={{ fontFamily: 'var(--serif-italic)', fontStyle: 'italic', fontSize: 22, lineHeight: 1.5, margin: 0, color: 'rgba(246,241,232,.9)' }}>
          Reading about Alanya is one thing. Walking the castle wall at
          sunset, with thirty other founders, is another.
        </p>
        <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginTop: 8 }}>
          <a href={EVENTZILLA} style={{ background: 'var(--turq)', color: 'var(--ink)', padding: '18px 28px', borderRadius: 999, fontWeight: 700, fontSize: 13, letterSpacing: '.12em', textTransform: 'uppercase' }}>Reserve your tent →</a>
          <a href="/program" style={{ border: '1px solid rgba(246,241,232,.3)', color: 'var(--paper)', padding: '18px 28px', borderRadius: 999, fontWeight: 600, fontSize: 13, letterSpacing: '.12em', textTransform: 'uppercase' }}>See the program</a>
          <a href="/stay" style={{ border: '1px solid rgba(246,241,232,.3)', color: 'var(--paper)', padding: '18px 28px', borderRadius: 999, fontWeight: 600, fontSize: 13, letterSpacing: '.12em', textTransform: 'uppercase' }}>Where you'll stay</a>
        </div>
      </div>
    </div>
  </section>
);

export const AlanyaPage: React.FC = () => {
  useSEO({
    title: 'Alanya — Turkiye Nomad Fest 2026',
    description: 'Why Alanya? Mediterranean coast, 300 days of sun, 13th-century castle, digital nomad infrastructure. The perfect city for a nomad gathering.',
    canonical: '/alanya',
  });
  return (
  <>
    <InnerHeader current="/alanya" />
    <main>
      <PageHero />
      <Editorial />
      <WhyNomads />
      <Stats />
      <Quote />
      <History />
      <Geography />
      <MapAndFlights />
      <Gastronomy />
      <InnerDivider tone="ink" left="◐ Plan it" mid="Practical notes" />
      <Practical />
      <FinalCTA />
    </main>
    <InnerFooter withFinalCTA={false} />
  </>
  );
};
