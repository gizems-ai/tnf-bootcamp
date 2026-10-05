import React from 'react';
import { useSEO } from '../hooks/useSEO';
import { InnerHeader } from '../components/InnerHeader';
import { InnerDivider } from '../components/InnerDivider';
import { InnerFooter } from '../components/InnerFooter';
import { QuoteRotator, type QuoteItem } from '../components/QuoteRotator';
import '../styles/stay.css';
import { Img } from '../components/Img';

const STAY_QUOTES: QuoteItem[] = [
  {
    speaker: 'Cüneyt Darı',
    role: 'Owner of Anjeliq Hotels · Architect & Hospitality Sponsor',
    context: 'Darı emphasized that Alanya\'s natural beauty and climate make it ideal for digital nomads.',
    quote: 'I have traveled the world, but I have never seen a city like Alanya. With its nature, history, and hospitality, it is a unique city. None of the foreigners who come here have ever left dissatisfied. Cleopatra Beach is one of the most special beaches in the world. People can swim here even in the middle of winter. This is a huge advantage. We want to show this advantage to the world.',
    photo: '/photo-cuneyt-dari.jpg',
    sponsorLink: '#anjeliq',
    sponsorLabel: '★ Hospitality Sponsor · Anjeliq Hotels',
  },
];

const EVENTZILLA = 'https://www.eventzilla.net/e/turkiye-nomad-fest--alanya-2026-2138676905';

const PageHero: React.FC = () => (
  <section className="tnf-page-hero" style={{ background: 'linear-gradient(180deg, #FFFFFF 0%, #F7F4ED 100%)' }}>
    <div className="wrap">
      <div className="crumb">
        <a href="/">◐ Home</a>
        <span>/</span>
        <span>Stay</span>
      </div>
      <div className="stay-hero-grid">
        <div>
          <div className="eyebrow" style={{ color: 'var(--turq-deep)', marginBottom: 18 }}>
            ◐ Where the village sleeps
          </div>
          <h1 style={{ fontSize: 'clamp(56px, 9vw, 168px)', lineHeight: .88, letterSpacing: '-0.05em', fontWeight: 800, margin: 0 }}>
            Anjeliq{' '}
            <em style={{ fontFamily: 'var(--serif-italic)', fontStyle: 'italic', fontWeight: 400, background: 'var(--grad-cool)', WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent', paddingRight: '.05em' }}>Downtown.</em>
          </h1>
          <p className="lede" style={{ marginTop: 28, fontSize: 20, maxWidth: 620, color: 'var(--ink-2)', lineHeight: 1.55 }}>
            A boutique hotel facing Cleopatra Beach — once called the most
            famous beach of Europe. Retro-modern interiors, hammocks on the
            balconies, sourdough at breakfast. The whole festival lives here
            for six days.
          </p>
          <div style={{ marginTop: 36, display: 'flex', gap: 28, flexWrap: 'wrap', fontFamily: 'ui-monospace, monospace', fontSize: 11, letterSpacing: '.14em', textTransform: 'uppercase', color: 'var(--ink-2)' }}>
            <div><b style={{ color: 'var(--ink)' }}>Address ·</b> Saray Mh., Türkmenbaşı Cd. No:1, 07400</div>
            <div><b style={{ color: 'var(--ink)' }}>Stars ·</b> Boutique · 3★</div>
            <div><b style={{ color: 'var(--ink)' }}>Distance to sea ·</b> Across the road</div>
          </div>
        </div>

        <figure style={{ margin: 0 }}>
          <div style={{ aspectRatio: '4/5', borderRadius: 8, overflow: 'hidden', background: 'var(--grad-warm)', position: 'relative', boxShadow: '0 30px 60px -30px rgba(20,22,26,.35)' }}>
            <Img src="/hotel-hero.jpg" alt="Anjeliq Downtown Hotel at sunset, facing Cleopatra Beach" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top' }} />
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,.6) 0%, rgba(0,0,0,.08) 50%, transparent 75%)' }} />
            <div style={{ position: 'absolute', left: 24, top: 24, fontFamily: 'ui-monospace, monospace', fontSize: 11, letterSpacing: '.14em', textTransform: 'uppercase', color: 'rgba(255,255,255,.9)', background: 'rgba(0,0,0,.4)', padding: '6px 10px', borderRadius: 999 }}>◐ Anjeliq Hotels · Alanya</div>
            <div style={{ position: 'absolute', right: 28, bottom: 28, fontFamily: 'var(--serif-italic)', fontStyle: 'italic', fontSize: 'clamp(48px, 6vw, 96px)', color: 'rgba(255,255,255,.95)', lineHeight: .9, letterSpacing: '-.03em', maxWidth: '70%', textAlign: 'right' }}>retro-modern, by the sea</div>
          </div>
          <figcaption style={{ marginTop: 14, fontFamily: 'var(--serif-italic)', fontStyle: 'italic', fontSize: 14, color: 'var(--ink-2)' }}>
            Anjeliq Downtown faces Cleopatra Beach, with the Mediterranean across a single quiet road.
          </figcaption>
        </figure>
      </div>
    </div>
  </section>
);

const WhyHere: React.FC = () => (
  <section style={{ padding: 'var(--pad-section) var(--pad-x)' }}>
    <div className="wrap stay-two-col" style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: 'clamp(28px, 4vw, 80px)', alignItems: 'start' }}>
      <div>
        <div className="eyebrow" style={{ color: 'var(--turq-deep)', marginBottom: 18 }}>◐ Why here</div>
        <h2 className="display" style={{ fontSize: 'clamp(40px, 5.2vw, 84px)', margin: 0 }}>
          A whole festival,<br />
          <em>under one roof.</em>
        </h2>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
        <p style={{ fontSize: 18, lineHeight: 1.65, color: 'var(--ink-2)', margin: 0 }}>
          Anjeliq Downtown is a small, family-run boutique hotel that sits at
          the corner of <em>Cleopatra Beach</em> and downtown Alanya — the heart
          of the city is a twenty-minute walk one way; the Castle is a five-minute
          drive the other. We took over the whole property for six days last year,
          and we are doing the same this year.
        </p>
        <p style={{ fontSize: 18, lineHeight: 1.65, color: 'var(--ink-2)', margin: 0 }}>
          That means: every breakfast, every coffee break, every late-night
          conversation happens with the same people. The lobby becomes the
          coworking space. The roof becomes the after-hours stage. The beach
          across the road becomes the morning ritual. You don't commute to
          the festival — you wake up inside it.
        </p>
        <p style={{ fontFamily: 'var(--serif-italic)', fontStyle: 'italic', fontSize: 22, lineHeight: 1.45, color: 'var(--ink)', margin: '8px 0 0', borderLeft: '2px solid var(--turq)', paddingLeft: 18 }}>
          "Best city hotel in Alanya — excellent location, good food, amazing
          sea view." A quiet recurring theme in guest reviews.
        </p>
      </div>
    </div>
  </section>
);

const Facts: React.FC = () => (
  <section style={{ padding: '0 var(--pad-x) var(--pad-section)' }}>
    <div className="wrap">
      <div className="fact-strip">
        <div className="fact"><div className="n">70</div><div className="l">Air-conditioned rooms</div></div>
        <div className="fact"><div className="n">0m</div><div className="l">From Cleopatra Beach</div></div>
        <div className="fact"><div className="n">4</div><div className="l">Languages spoken at front desk</div></div>
        <div className="fact"><div className="n">9.3</div><div className="l">Guest location score / 10</div></div>
      </div>
    </div>
  </section>
);

const ROOMS = [
  {
    tag: 'Standard',
    title: 'Standard Side-Sea View',
    sub: '21 m² · large balcony, sea on the side',
    feats: ['LCD TV', 'Air-con', 'Mini fridge', 'Hair dryer', 'Slippers', 'Free WiFi', 'Marble floor'],
    desc: 'Compact, modern, with a wall print and a balcony big enough for morning coffee. The most popular room — perfect if you spend most of your time downstairs at sessions.',
    shape: 'a',
    photo: '/hotel-room-standard.jpg',
  },
  {
    tag: 'Sea View',
    title: 'Standard Sea View',
    sub: '21 m² · the Mediterranean, framed',
    feats: ['LCD TV', 'Air-con', 'Mini fridge', 'Soundproofing', 'Blackout drapes', 'Sea-facing balcony'],
    desc: 'Same footprint as the standard, but every window opens onto Cleopatra Beach. Good for early risers — sunrise hits the room directly.',
    shape: 'b',
    photo: '/hotel-room-sea.jpg',
  },
  {
    tag: 'Jacuzzi',
    title: 'Jacuzzi Room',
    sub: 'with private balcony jacuzzi',
    feats: ['Balcony jacuzzi', 'LCD TV', 'Air-con', 'Soundproofing', 'Blackout drapes', 'Sea-facing'],
    desc: 'A small splurge. The jacuzzi sits on the balcony, so you can soak with the sound of the sea — most guests use it once at sunset and remember it forever.',
    shape: 'c',
    photo: '/hotel-room-jacuzzi.jpg',
  },
  {
    tag: 'Family',
    title: 'Family Suite — Two Rooms',
    sub: '40 m² · two bedrooms, two balconies, hammock + swing',
    feats: ['2 bedrooms', '2 balconies', 'Suspended hammock', 'Balcony swing', 'Kitchenette', 'Cooker', 'Tea/coffee'],
    desc: 'Two separate rooms — bring a co-founder, a partner, or split with a friend. Each balcony has a hammock and a swing. Some units include a full kitchenette.',
    shape: 'd',
    photo: '/hotel-room-family.jpg',
  },
];

const Rooms: React.FC = () => (
  <section style={{ padding: 'var(--pad-section) var(--pad-x)', background: 'var(--paper-2)' }}>
    <div className="wrap">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'end', flexWrap: 'wrap', gap: 24, marginBottom: 32 }}>
        <div>
          <div className="eyebrow" style={{ color: 'var(--turq-deep)', marginBottom: 14 }}>◐ The rooms</div>
          <h2 className="display" style={{ fontSize: 'clamp(40px, 5.2vw, 84px)', margin: 0 }}>
            Pick your <em>nest.</em>
          </h2>
        </div>
        <p style={{ maxWidth: 460, fontSize: 15, color: 'var(--ink-2)', margin: 0, lineHeight: 1.55 }}>
          Four room types across the property. All air-conditioned, all with
          private balconies, all looking onto either the sea or the city.
          Hammocks and swings on most balconies — a small Anjeliq signature.
        </p>
      </div>

      {ROOMS.map((r, i) => (
        <div className="room-card" key={i}>
          <div className={'room-shape ' + r.shape}>
            <Img src={r.photo} alt={r.title} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center', zIndex: 0 }} />
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,.52) 0%, transparent 55%)', zIndex: 1 }} />
            <span className="room-tag" style={{ zIndex: 2, background: 'rgba(0,0,0,.45)', color: 'rgba(255,255,255,.9)' }}>{r.tag}</span>
            <span className="room-size" style={{ zIndex: 2 }}>{r.sub.split(' · ')[0]}</span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <h3 className="room-title">{r.title}</h3>
            <div className="room-sub">{r.sub}</div>
            <p style={{ fontSize: 15.5, lineHeight: 1.65, color: 'var(--ink-2)', margin: '0 0 18px' }}>{r.desc}</p>
            <ul className="room-feats">
              {r.feats.map((x, j) => <li key={j}>{x}</li>)}
            </ul>
          </div>
        </div>
      ))}

      <p style={{ marginTop: 28, fontFamily: 'ui-monospace, monospace', fontSize: 11, letterSpacing: '.14em', textTransform: 'uppercase', color: 'var(--ink-2)' }}>
        Note · Anjeliq is a non-smoking property. Check-in from 14:00, check-out by 11:00.
      </p>
    </div>
  </section>
);

const AMEN = [
  { i: '☼', h: 'Free buffet breakfast', d: 'Including freshly baked artisan sourdough — a guest-review favourite.' },
  { i: '☉', h: 'Mr. Anjeliq Kitchen', d: 'On-site farm-to-table à la carte for dinner. Italian-leaning, with a vibrant lounge bar.' },
  { i: '❍', h: 'Anjeliq Beach Club', d: 'Private beach area with sun loungers and umbrellas — a 15–20 minute walk along the shore.' },
  { i: '◐', h: 'Wellness centre', d: 'Sauna, Turkish steam room, fitness classes, locker rooms — included for guests.' },
  { i: '◑', h: 'Spa & massage', d: 'Anjeliq Wellbeing offers physiotherapy, organic post-workout menus, and group activities.' },
  { i: '◒', h: '24-hour reception', d: 'Multilingual staff — English, German, Russian, Turkish — concierge and local tips.' },
  { i: '◓', h: 'Daily housekeeping', d: 'Rooms cleaned daily, fresh towels, water replenished.' },
  { i: '☾', h: 'Evening reception', d: 'Complimentary daily social — the lobby fills up around sundown.' },
  { i: '⚯', h: 'Free WiFi everywhere', d: 'Reliable across rooms, lobby, restaurant. Strong enough for client calls.' },
  { i: '✦', h: 'Airport shuttle', d: 'Round-trip from Gazipaşa-Alanya (45 min) or Antalya (2 h). On request, surcharge.' },
  { i: '☕', h: 'In-room tea/coffee', d: 'Most rooms include kettle + kitchenware; family suites have full kitchenettes.' },
  { i: '⌬', h: 'Laundry & dry cleaning', d: 'Dry cleaning, laundry service, and self-service laundry facilities.' },
];

const Amenities: React.FC = () => (
  <section style={{ padding: 'var(--pad-section) var(--pad-x)' }}>
    <div className="wrap">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'end', flexWrap: 'wrap', gap: 24, marginBottom: 32 }}>
        <div>
          <div className="eyebrow" style={{ color: 'var(--turq-deep)', marginBottom: 14 }}>◐ Inside the hotel</div>
          <h2 className="display" style={{ fontSize: 'clamp(40px, 5.2vw, 84px)', margin: 0 }}>
            Everything <em>under one roof.</em>
          </h2>
        </div>
        <p style={{ maxWidth: 420, fontSize: 15, color: 'var(--ink-2)', margin: 0, lineHeight: 1.55 }}>
          Twelve things you'll actually use during the week.
          Spa, sauna, Italian dinner, complimentary evening social, airport shuttle.
        </p>
      </div>
      <div className="amen-grid">
        {AMEN.map((a, i) => (
          <div key={i}>
            <div className="ico">{a.i}</div>
            <div className="h">{a.h}</div>
            <div className="d">{a.d}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Restaurant: React.FC = () => (
  <section style={{ padding: 'var(--pad-section) var(--pad-x)', background: 'var(--ink)', color: 'var(--paper)' }}>
    <div className="wrap stay-two-col" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--gap)', alignItems: 'center' }}>
      <div>
        <div className="eyebrow" style={{ color: 'var(--turq)', marginBottom: 22 }}>◐ Mr. Anjeliq Kitchen Atelier</div>
        <h2 className="display" style={{ margin: 0, fontSize: 'clamp(40px, 5.6vw, 96px)', lineHeight: .95, color: 'var(--paper)' }}>
          Pizza, pasta,<br />
          <em style={{ fontFamily: 'var(--serif-italic)', fontStyle: 'italic', fontWeight: 400, background: 'linear-gradient(135deg, #56C1C4, #C6A6D8 60%, #F3A6C8)', WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent' }}>and a long table.</em>
        </h2>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
        <p style={{ fontSize: 17, lineHeight: 1.65, margin: 0, color: 'rgba(246,241,232,.85)' }}>
          The on-site restaurant is open until late. Italian-leaning menu —
          house-made pasta, wood-fired pizza, fresh fish — with a vibrant
          bar/lounge area that doubles as the village's evening hangout.
          Most nights at the festival, the whole group eats here at one long table.
        </p>
        <p style={{ fontFamily: 'var(--serif-italic)', fontStyle: 'italic', fontSize: 22, lineHeight: 1.5, margin: 0, color: 'rgba(246,241,232,.95)', borderLeft: '2px solid var(--turq)', paddingLeft: 20 }}>
          "Highly recommended. Calm, moody atmosphere — the dishes are highly
          performed and tasty, with high-quality drinks." — recurring guest review.
        </p>
        <div style={{ marginTop: 8, fontFamily: 'ui-monospace, monospace', fontSize: 11, letterSpacing: '.14em', textTransform: 'uppercase', color: 'rgba(246,241,232,.55)' }}>
          Open daily for breakfast, lunch and dinner · Vegetarian and vegan options · Late-night kitchen
        </div>
      </div>
    </div>
  </section>
);

const Location: React.FC = () => (
  <section style={{ padding: 'var(--pad-section) var(--pad-x)', background: 'var(--paper-2)' }}>
    <div className="wrap">
      <div className="stay-two-col" style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: 'clamp(28px, 4vw, 80px)', alignItems: 'start', marginBottom: 40 }}>
        <div>
          <div className="eyebrow" style={{ color: 'var(--turq-deep)', marginBottom: 14 }}>◐ Where you are</div>
          <h2 className="display" style={{ fontSize: 'clamp(40px, 5.2vw, 84px)', margin: 0 }}>
            Walk to<br />
            <em>everything.</em>
          </h2>
        </div>
        <p style={{ fontSize: 18, lineHeight: 1.65, color: 'var(--ink-2)', margin: 0 }}>
          The hotel is rated <b>9.3 / 10</b> for location by real guests.
          You're directly across from Cleopatra Beach, ten minutes from
          Damlataş Cave, twenty minutes from the city centre, and a short
          drive from Alanya Castle. Most attractions are reachable on foot —
          and there's a regional bus stop two minutes away if you want to
          explore the coast.
        </p>
      </div>

      <div className="nearby-list">
        {[
          ['Cleopatra Beach', '30 m', 'Across the road. The sand is famously fine and pale gold.'],
          ['Hasan Şenli Saray Cami', '200 m', 'Local mosque, Ottoman pencil minaret. Five-minute walk.'],
          ['Damlataş Cave', '850 m', 'Ancient stalactite cave, naturally humid — popular for asthma relief.'],
          ['Alanya Aquapark', '1.0 km', 'Family-friendly, in-walking-distance for those with kids.'],
          ['Alanya Archaeological Museum', '1.1 km', 'Compact, well-curated — coins, mosaics, Roman finds.'],
          ['Red Tower (Kızıl Kule)', '2.4 km', '13th-century symbol of Alanya, on the harbour edge.'],
          ['Alanya Castle', '5.0 km', 'Seljuk fortifications crowning the peninsula. Sunset hike, or cable car up.'],
          ['Gazipaşa-Alanya Airport', '40 km', 'About 45 minutes by car. Low-cost European routes.'],
          ['Antalya Airport', '135 km', 'About 2 hours; main international gateway.'],
        ].map((r, i) => (
          <div className="row" key={i}>
            <div>
              <div className="name">{r[0]}</div>
              <div className="desc">{r[2]}</div>
            </div>
            <div className="meta">{r[1]}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Practical: React.FC = () => (
  <section style={{ padding: 'var(--pad-section) var(--pad-x)' }}>
    <div className="wrap">
      <div className="eyebrow" style={{ color: 'var(--turq-deep)', marginBottom: 14 }}>◐ Practical</div>
      <h2 className="display" style={{ fontSize: 'clamp(36px, 4.6vw, 72px)', margin: '0 0 36px' }}>
        Good to <em>know.</em>
      </h2>
      <div className="stay-three-col" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 'clamp(20px, 2.4vw, 40px)' }}>
        {[
          { h: 'Check-in / out', d: 'Check-in from 14:00. Check-out by 11:00. Late check-out fees apply after 11:00. Luggage storage available on either side.' },
          { h: 'Smoking', d: 'Anjeliq Downtown is a non-smoking property. There is a 500 USD fine for smoking in guestrooms.' },
          { h: 'Languages', d: 'Reception staff speak English, German, Russian and Turkish. Concierge will help with restaurant bookings, taxis, day trips.' },
          { h: 'Children', d: 'Family-friendly hotel. The family suites are designed for two adults plus kids. No cots provided in-room — bring travel cot if needed.' },
          { h: 'Pets', d: 'Sorry — pets are not permitted at the property. Anjeliq House Boutique (sister hotel) has different rules.' },
          { h: 'Payment', d: 'Major credit cards accepted at check-in. Photo ID and credit card required on arrival. Standard Turkey taxes & tourism fees applied.' },
          { h: 'Online check-in', d: "Send your ID and arrival time to Anjeliq Assistant ahead of time and they'll handle check-in before you land." },
          { h: 'Parking', d: 'No on-site parking. Limited street parking in the area; we recommend arriving by airport shuttle or taxi.' },
          { h: 'Accessibility', d: 'Lift on site. The property offers wheelchair access — call ahead to confirm specifics for your stay.' },
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

const BookCTA: React.FC = () => (
  <section style={{ padding: 'var(--pad-section) var(--pad-x)', background: 'var(--ink)', color: 'var(--paper)' }}>
    <div className="wrap stay-two-col" style={{ display: 'grid', gridTemplateColumns: '1.1fr .9fr', gap: 'var(--gap)', alignItems: 'center' }}>
      <div>
        <div className="eyebrow" style={{ color: 'var(--turq)', marginBottom: 22 }}>◐ Reserving your bed</div>
        <h2 className="display" style={{ margin: 0, fontSize: 'clamp(48px, 7vw, 120px)', lineHeight: .92, color: 'var(--paper)' }}>
          Build your<br />
          <em style={{ fontFamily: 'var(--serif-italic)', fontStyle: 'italic', fontWeight: 400, background: 'linear-gradient(135deg, #56C1C4, #C6A6D8 60%, #F3A6C8)', WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent' }}>solopreneur life.</em><br />
          Join our<br />
          <span style={{ color: 'var(--turq)' }}>temporary village.</span>
        </h2>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
        <p style={{ fontFamily: 'var(--serif-italic)', fontStyle: 'italic', fontSize: 22, lineHeight: 1.5, margin: 0, color: 'rgba(246,241,232,.9)' }}>
          Festival tickets and room bookings are bundled. Reserve your spot —
          we'll match you to a room based on your preferences.
        </p>
        <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginTop: 8 }}>
          <a href={EVENTZILLA} style={{ background: 'var(--turq)', color: 'var(--ink)', padding: '18px 28px', borderRadius: 999, fontWeight: 700, fontSize: 13, letterSpacing: '.12em', textTransform: 'uppercase' }}>Reserve your tent →</a>
          <a href="/program" style={{ border: '1px solid rgba(246,241,232,.3)', color: 'var(--paper)', padding: '18px 28px', borderRadius: 999, fontWeight: 600, fontSize: 13, letterSpacing: '.12em', textTransform: 'uppercase' }}>See the program</a>
        </div>
        <div style={{ marginTop: 4, fontFamily: 'ui-monospace, monospace', fontSize: 12, letterSpacing: '.08em', color: 'rgba(246,241,232,.55)' }}>
          October 18 — 25, 2026 · Anjeliq Downtown, Cleopatra Beach
        </div>
      </div>
    </div>
  </section>
);

export const StayPage: React.FC = () => {
  useSEO({
    title: 'Stay — Turkiye Nomad Fest 2026',
    description: 'Anjeliq Hotels Alanya — 70 rooms by Cleopatra Beach. Boutique hotel exclusively for TNF 2026 attendees. October 18–25.',
    canonical: '/stay',
  });
  return (
  <>
    <InnerHeader current="/stay" />
    <main>
      <PageHero />
      <QuoteRotator
        items={STAY_QUOTES}
        eyebrow="◐ From Cüneyt Darı — Hospitality Sponsor"
        background="var(--paper-2)"
      />
      <InnerDivider tone="warm" left="◐ Why this hotel" mid="A boutique by Cleopatra Beach" right="MMXXVI · Alanya" />
      <WhyHere />
      <Facts />
      <InnerDivider tone="sand" left="◐ The rooms" mid="70 rooms · 4 types" />
      <Rooms />
      <Amenities />
      <InnerDivider tone="ink" left="◐ Mr. Anjeliq" mid="Where the village dines" />
      <Restaurant />
      <Location />
      <Practical />
      <InnerDivider tone="ink" left="◐ Build · Join" mid="The temporary village" />
      <BookCTA />
    </main>
    <InnerFooter withFinalCTA={false} />
  </>
  );
};
