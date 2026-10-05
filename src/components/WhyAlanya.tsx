import React from 'react';
import { Img } from './Img';

const cards = [
  {
    kicker: 'The Sea',
    body: 'Swim in warm Mediterranean turquoise water, almost any time of year.',
    src: '/new-alanya3.png',
    alt: 'Alanya lighthouse · Mediterranean coast',
  },
  {
    kicker: 'The Castle',
    body: 'Walk to work past ancient walls — civilizations that understood movement long before us.',
    src: '/new-alanya-castle.png',
    alt: 'Alanya castle walls',
  },
  {
    kicker: 'The Mountains',
    body: 'Between sea and the Taurus, life settles into focused mornings and open afternoons.',
    src: '/new-alanya-land.png',
    alt: 'Alanya · view from the castle over the city and mountains',
  },
];

export const WhyAlanya: React.FC = () => (
  <section
    id="why-alanya"
    style={{
      paddingTop: 'var(--pad-section)',
      paddingBottom: 'var(--pad-section)',
      paddingLeft: 'var(--pad-x)',
      paddingRight: 'var(--pad-x)',
      background: 'var(--paper)',
      color: 'var(--ink)',
      position: 'relative',
      overflow: 'hidden',
      borderTop: '1px solid var(--rule)',
    }}
  >
    <div className="wrap">
      {/* Eyebrow + intro */}
      <div
        className="hp-why-intro"
        style={{
          display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--gap)',
          marginBottom: 'clamp(40px, 5vw, 72px)',
          alignItems: 'end',
        }}
      >
        <div className="eyebrow">◐ 05 — Why Alanya</div>
        <p
          style={{
            fontFamily: 'var(--sans)', fontWeight: 400,
            fontSize: 19, margin: 0, maxWidth: 460, lineHeight: 1.55,
            color: 'var(--ink-2)',
          }}
        >
          Alanya doesn't try to impress you. It doesn't need to.
        </p>
      </div>

      {/* 300 days stat */}
      <div
        className="hp-why-stat"
        style={{
          display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: 'var(--gap)',
          alignItems: 'end',
          marginBottom: 'clamp(60px, 8vw, 120px)',
        }}
      >
        <div>
          <h2
            className="display"
            style={{
              margin: 0,
              fontSize: 'clamp(120px, 22vw, 360px)',
              lineHeight: 0.85,
              letterSpacing: '-.06em',
              background: 'linear-gradient(160deg, #F3A6C8 0%, #F0B8C8 50%, #E6E7A3 100%)',
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
              color: 'transparent',
            }}
          >
            300
          </h2>
          <div
            style={{
              marginTop: 12,
              fontFamily: 'var(--sans)',
              fontWeight: 700,
              fontSize: 'clamp(20px, 2vw, 32px)',
              letterSpacing: '-.01em',
              color: 'var(--ink)',
            }}
          >
            days of Mediterranean sun,{' '}
            <em
              style={{
                fontFamily: 'var(--serif-italic)', fontStyle: 'italic', fontWeight: 400,
                background: 'var(--grad-cool)',
                WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent',
              }}
            >
              every year.
            </em>
          </div>
        </div>
        <p
          style={{
            fontSize: 17, lineHeight: 1.6, margin: 0,
            maxWidth: 420, color: 'rgba(31,31,31,.85)',
          }}
        >
          Sunshine isn't a perk here — it's the rhythm of life. The days are long, bright,
          and made for being outdoors, whether you're coding by the sea, deep in focus, or
          winding down after sunset.
        </p>
      </div>

      {/* Three photo cards — natural proportions, no cropping */}
      <div
        className="hp-why-cards"
        style={{
          display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20,
          alignItems: 'start',
          marginBottom: 'clamp(48px, 6vw, 80px)',
        }}
      >
        {cards.map((c, i) => (
          <div key={i}>
            <div style={{ borderRadius: 6, overflow: 'hidden', background: '#0E0F12' }}>
              <Img
                src={c.src}
                alt={c.alt}
                loading="lazy"
                decoding="async"
                style={{ width: '100%', height: 'auto', display: 'block' }}
              />
            </div>
            <div className="eyebrow" style={{ marginTop: 18, marginBottom: 8 }}>{c.kicker}</div>
            <p style={{ margin: 0, fontSize: 14, color: 'rgba(31,31,31,.8)', lineHeight: 1.55 }}>{c.body}</p>
          </div>
        ))}
      </div>

      {/* Coordinates strip */}
      <div
        style={{
          borderTop: '1px solid rgba(31,31,31,.25)',
          borderBottom: '1px solid rgba(31,31,31,.25)',
          padding: '24px 0',
          display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12,
          fontFamily: 'ui-monospace, monospace', fontSize: 12,
          letterSpacing: '.05em',
          color: 'rgba(31,31,31,.75)',
        }}
      >
        <span>LAT 36° 32′ 36″ N</span>
        <span>LON 31° 59′ 40″ E</span>
        <span>SEA 24°C · OCT</span>
        <span>SUNSET 18:21</span>
        <span>POP 343,000</span>
      </div>
    </div>
  </section>
);
