import React from 'react';
import { Img } from './Img';


const historyCards = [
  {
    era: '700 BCE — 300 CE',
    t: 'The Lycian Way',
    d: 'A 540-km coastal trade route linking Mediterranean towns. Walked by merchants, pilgrims, and travelers carrying stories and goods.',
    img: '/photo-cablecar.jpg',
    pos: 'center',
  },
  {
    era: '1071 — 1300',
    t: 'Seljuk Anatolia',
    d: 'Nomadic Turkic tribes arrived from Central Asia, bringing the felt tent, the long table, and welcoming any guest as sacred.',
    img: '/photo-seljuk.png',
    pos: 'center 30%',
  },
  {
    era: 'Today',
    t: 'A modern crossroads',
    d: 'Anatolia continues to host travelers — now with WiFi, but the same instinct: sit, share çay, stay a while.',
    img: '/photo-moderncrossroads.png',
    pos: 'center 40%',
  },
];

export const Roots: React.FC = () => (
  <section
    id="roots"
    style={{
      paddingTop: 'var(--pad-section)',
      paddingBottom: 'var(--pad-section)',
      paddingLeft: 'var(--pad-x)',
      paddingRight: 'var(--pad-x)',
      background: 'var(--paper)',
      borderTop: '1px solid var(--rule)',
      borderBottom: '1px solid var(--rule)',
      position: 'relative',
      overflow: 'hidden',
    }}
  >
    <div className="wrap">
      {/* Header */}
      <div style={{ marginBottom: 'clamp(40px, 5vw, 72px)' }}>
        <div className="eyebrow" style={{ marginBottom: 28, color: 'var(--turq-deep)' }}>
          ◐ 06 — Anatolian Roots
        </div>
        <h2
          className="display"
          style={{
            margin: 0,
            fontSize: 'clamp(32px, 4.8vw, 76px)',
            letterSpacing: '-.03em',
            fontWeight: 800,
            maxWidth: '16ch',
          }}
        >
          One of the world's oldest <em>nomadic homelands.</em>
        </h2>
      </div>

      {/* Hero: davul photo + side text */}
      <div
        className="hp-roots-grid"
        style={{
          display: 'grid',
          gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1.2fr)',
          gap: 'clamp(32px, 4vw, 72px)',
          alignItems: 'stretch',
          marginBottom: 'clamp(56px, 6vw, 96px)',
        }}
      >
        <figure
          style={{
            margin: 0, position: 'relative',
            borderRadius: 6, overflow: 'hidden',
            background: '#0E0F12',
            aspectRatio: '3 / 4',
            width: '100%', minWidth: 0,
          }}
        >
          <Img
            src="/photo-davul.jpg"
            alt="Davul performer · folk dance evening"
            loading="lazy"
            decoding="async"
            style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 35%', display: 'block' }}
          />
          <div
            style={{
              position: 'absolute', inset: 0,
              background: 'linear-gradient(180deg, rgba(0,0,0,.05) 0%, rgba(0,0,0,0) 30%, rgba(0,0,0,.55) 100%)',
            }}
          />
          <figcaption
            style={{
              position: 'absolute', left: 18, bottom: 16, right: 18,
              display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end',
              color: '#fff',
              fontFamily: 'ui-monospace, monospace',
              fontSize: 10, letterSpacing: '.14em', textTransform: 'uppercase',
              textShadow: '0 1px 12px rgba(0,0,0,.6)',
            }}
          >
            <span>◐ Davul · folk evening · MMXXV</span>
            <span style={{ opacity: 0.7 }}>17/24</span>
          </figcaption>
        </figure>

        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', paddingRight: 'clamp(0px, 4vw, 48px)' }}>
          <p
            style={{
              margin: '0 0 36px',
              fontFamily: 'var(--serif)', fontStyle: 'italic',
              fontSize: 'clamp(22px, 2.1vw, 30px)', lineHeight: 1.4,
              color: 'var(--ink)', maxWidth: '32ch',
            }}
          >
            For 12,000 years, this peninsula has been a crossroads —
            Hittites, Lycians, Greeks, Romans, Seljuks, Ottomans.
            What stayed was a deep cultural memory of{' '}
            <span style={{ color: 'var(--turq-deep)' }}>movement as life.</span>
          </p>

          <div style={{ height: 1, background: 'var(--rule)', margin: '0 0 32px' }} />

          <div className="eyebrow" style={{ marginBottom: 18, color: 'var(--turq-deep)' }}>
            ◐ Why it matters
          </div>
          <h3
            style={{
              margin: 0, fontWeight: 400,
              fontFamily: 'var(--sans)',
              fontSize: 'clamp(22px, 2vw, 30px)',
              lineHeight: 1.25, letterSpacing: '-.01em',
              color: 'var(--ink)', maxWidth: '26ch',
            }}
          >
            We're not staging a festival in just any seaside town.
          </h3>
          <p style={{ margin: '20px 0 0', fontSize: 16, lineHeight: 1.6, color: 'var(--ink-2)', maxWidth: 520 }}>
            Alanya sits at the end of a long line of arrivals and departures —
            traders, pilgrims, nomads moving between sea and mountain.
            When you walk to a session past the Red Tower or share a long table
            by the water, you're stepping into a rhythm that's been here for centuries.
          </p>

          <a href="/alanya" className="hp-roots-link">
            Read the full story of Alanya
            <span style={{ fontSize: 14 }}>→</span>
          </a>
        </div>
      </div>

      {/* Three history cards */}
      <div
        className="hp-roots-history"
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: 'clamp(16px, 1.6vw, 28px)',
          marginBottom: 'clamp(40px, 5vw, 72px)',
        }}
      >
        {historyCards.map((c, i) => (
          <article key={i} style={{ display: 'flex', flexDirection: 'column' }}>
            <div style={{ borderRadius: 6, overflow: 'hidden', background: '#0E0F12', marginBottom: 22 }}>
              <Img
                src={c.img}
                alt={c.t}
                loading="lazy"
                decoding="async"
                style={{ width: '100%', height: 'auto', display: 'block' }}
              />
            </div>
            <div
              style={{
                fontFamily: 'ui-monospace, monospace', fontSize: 11,
                letterSpacing: '.14em', textTransform: 'uppercase',
                color: 'var(--turq-deep)', marginBottom: 10,
              }}
            >
              {c.era}
            </div>
            <h3
              style={{
                margin: '0 0 12px', fontWeight: 500,
                fontSize: 'clamp(22px, 1.9vw, 28px)',
                lineHeight: 1.15, letterSpacing: '-0.01em',
                fontFamily: 'var(--serif)', fontStyle: 'italic',
                color: 'var(--ink)',
              }}
            >
              {c.t}
            </h3>
            <p style={{ margin: 0, fontSize: 15, lineHeight: 1.6, color: 'var(--ink-2)' }}>{c.d}</p>
          </article>
        ))}
      </div>

      <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: 'clamp(20px, 3vw, 40px)' }}>
        <a
          href="/alanya"
          style={{
            fontFamily: 'ui-monospace, monospace', fontSize: 11,
            letterSpacing: '.14em', textTransform: 'uppercase',
            color: 'var(--ink)', textDecoration: 'none',
            fontWeight: 600,
            borderBottom: '1px solid var(--rule)', paddingBottom: 4,
          }}
        >
          Full history &amp; why Alanya →
        </a>
      </div>

    </div>

  </section>
);
