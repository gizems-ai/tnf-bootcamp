import React from 'react';
import { Img } from './Img';

const threads = [
  { n: 'i',   t: 'Future of Work',      d: 'Remote work, digital nomadism, the next decade of location-independent careers.' },
  { n: 'ii',  t: 'Solopreneurship',     d: 'Sustainable one-person businesses and AI-enabled work that compounds.' },
  { n: 'iii', t: 'Wellbeing & Culture', d: 'Human-centered leadership, slowing down, designing for energy not output.' },
  { n: 'iv',  t: 'Community',           d: 'Collaboration, global belonging, the rituals that bind a tribe across borders.' },
  { n: 'v',   t: 'A Designed Life',     d: 'Designing a life — not just a career. Choosing the seasons, places and people.' },
];

export const Manifesto: React.FC = () => (
  <section
    id="about"
    style={{
      paddingTop: 'var(--pad-section)',
      paddingBottom: 'clamp(40px, 5vw, 72px)',
      paddingLeft: 'var(--pad-x)',
      paddingRight: 'var(--pad-x)',
      background: 'var(--paper)',
      borderTop: '1px solid var(--rule)',
    }}
  >
    <div className="wrap">
      {/* Section header */}
      <div style={{ marginBottom: 'clamp(48px, 6vw, 88px)' }}>
        <div className="eyebrow" style={{ marginBottom: 28 }}>◐ 01 — What Turkiye Nomad Fest is about</div>
        <h2
          className="display"
          style={{
            margin: 0,
            fontSize: 'clamp(32px, 4.8vw, 76px)',
            maxWidth: '22ch',
            fontWeight: 800,
            lineHeight: 1.06,
            letterSpacing: '-0.015em',
          }}
        >
          Where location-independent work meets{' '}
          <em>meaning, wellbeing, and entrepreneurship.</em>
        </h2>
      </div>

      {/* Lead paragraph + portrait */}
      <div
        className="hp-manifesto-band"
        style={{
          display: 'grid',
          gridTemplateColumns: 'minmax(180px, 1fr) 4fr',
          gap: 'var(--gap)',
          alignItems: 'start',
          marginBottom: 'clamp(56px, 6vw, 88px)',
        }}
      >
        <div
          style={{
            fontFamily: 'ui-monospace, monospace', fontSize: 11,
            letterSpacing: '.14em', textTransform: 'uppercase',
            color: 'var(--ink-2)', paddingTop: 10,
          }}
        >
          The week, in essence
        </div>
        <div
          className="hp-manifesto-lead"
          style={{
            display: 'grid',
            gridTemplateColumns: '1.3fr 1fr',
            gap: 'clamp(28px, 3vw, 56px)',
            alignItems: 'start',
          }}
        >
          <p
            style={{
              margin: 0,
              fontFamily: 'var(--serif)', fontStyle: 'italic',
              fontSize: 'clamp(22px, 2vw, 28px)', lineHeight: 1.45,
              color: 'var(--ink)', maxWidth: '32ch',
            }}
          >
            For a week, Turkiye Nomad Fest becomes a living ecosystem by the
            Mediterranean — where solopreneurs, founders, and
            location-independent builders slow down, reconnect with their
            work, and form real human bonds.
          </p>
          <figure
            style={{
              margin: 0, position: 'relative',
              borderRadius: 6, overflow: 'hidden',
              background: '#0E0F12',
              aspectRatio: '3 / 4',
              marginTop: -28,
            }}
          >
            <Img
              src="/photo-about.png"
              alt="A participant — last year"
              loading="lazy"
              decoding="async"
              style={{
                width: '100%', height: '100%', objectFit: 'cover', display: 'block',
                objectPosition: 'center 12%',
              }}
            />
            <figcaption
              style={{
                position: 'absolute', left: 14, bottom: 14, right: 14,
                display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end',
                color: '#fff',
                fontFamily: 'ui-monospace, monospace',
                fontSize: 10, letterSpacing: '.14em', textTransform: 'uppercase',
                textShadow: '0 1px 8px rgba(0,0,0,.6)',
              }}
            >
              <span>belonging · MMXXV</span>
              <span style={{ opacity: 0.7 }}>01/24</span>
            </figcaption>
          </figure>
        </div>
      </div>

      {/* Five threads */}
      <div
        className="hp-manifesto-band"
        style={{
          display: 'grid',
          gridTemplateColumns: 'minmax(180px, 1fr) 4fr',
          gap: 'var(--gap)',
          alignItems: 'start',
        }}
      >
        <div
          style={{
            fontFamily: 'ui-monospace, monospace', fontSize: 11,
            letterSpacing: '.14em', textTransform: 'uppercase',
            color: 'var(--ink-2)', paddingTop: 10,
          }}
        >
          Five threads
        </div>
        <ol
          className="hp-about-threads"
          style={{
            listStyle: 'none', margin: 0, padding: 0,
            display: 'grid', gap: 0,
            borderTop: '1px solid var(--rule)',
          }}
        >
          {threads.map((th, i) => (
            <li
              key={i}
              style={{
                display: 'grid',
                gridTemplateColumns: '60px 1.1fr 2fr',
                gap: 'clamp(20px, 2.4vw, 40px)',
                alignItems: 'baseline',
                padding: 'clamp(22px, 2.4vw, 32px) 0',
                borderBottom: '1px solid var(--rule)',
              }}
            >
              <span
                style={{
                  fontFamily: 'var(--serif)', fontStyle: 'italic',
                  fontSize: 22, color: 'var(--turq-deep)',
                }}
              >
                {th.n}.
              </span>
              <h3
                style={{
                  margin: 0, fontWeight: 500,
                  fontSize: 'clamp(22px, 2vw, 30px)',
                  lineHeight: 1.15, letterSpacing: '-0.01em',
                }}
              >
                {th.t}
              </h3>
              <p style={{ margin: 0, fontSize: 16, lineHeight: 1.55, color: 'var(--ink-2)', maxWidth: 520 }}>
                {th.d}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </div>
  </section>
);
