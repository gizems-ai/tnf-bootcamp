import React from 'react';
import { Img } from './Img';

const tiles = [
  { kind: 'text',  tag: 'PROGRAM',   title: 'The week, hour by hour.',       bg: '#C6A6D8', fg: '#0E0F12', c: 'span 2', r: 'span 2', cta: 'See program',     href: '/program' },
  { kind: 'photo', src: '/photo-talk.png',         caption: 'Workshop · main hall',              c: 'span 4', r: 'span 2', cta: 'All sessions',   href: '/program' },
  { kind: 'photo', src: '/new-homepage-gathering.png', caption: 'Open session · day 2',             c: 'span 2', r: 'span 2', cta: 'The hospitality', href: '/alanya' },
  { kind: 'text',  tag: 'SPEAKERS',  title: '24 voices. One village.',        bg: '#F3A6C8', fg: '#0E0F12', c: 'span 2', r: 'span 2', cta: 'Meet them',      href: '/speakers' },
  { kind: 'photo', src: '/new-homepage-people.png',  caption: 'Founders · morning circle',         c: 'span 2', r: 'span 2', cta: 'Why Alanya',      href: '/alanya' },
  { kind: 'text',  tag: 'BOOTCAMP',  title: 'Three days. One real product.',  bg: '#E6E7A3', fg: '#0E0F12', c: 'span 2', r: 'span 2', cta: 'Apply now',      href: '/bootcamp' },
  { kind: 'photo', src: '/photo-alanya-beach.jpg',   caption: 'Alanya beach · golden hour',        c: 'span 2', r: 'span 2', cta: 'The setting',    href: '/alanya' },
  { kind: 'text',  tag: 'STAY',      title: 'On-site. Sea-side. Together.',   bg: '#56C1C4', fg: '#0E0F12', c: 'span 2', r: 'span 2', cta: 'Where to sleep', href: '/stay' },
  { kind: 'photo', src: '/photo-clarity.jpg',       caption: 'Workshop screen · clarity exercise', c: 'span 3', r: 'span 2', cta: 'Past sessions',  href: '#' },
  { kind: 'photo', src: '/photo-audience.jpg',      caption: 'In the room · day 3',               c: 'span 3', r: 'span 2', cta: 'MMXXV recap',    href: '#' },
] as const;

export const TilesGrid: React.FC = () => (
  <section
    style={{
      paddingTop: 'clamp(40px, 5vw, 72px)',
      paddingBottom: 'var(--pad-section)',
      paddingLeft: 'var(--pad-x)',
      paddingRight: 'var(--pad-x)',
      background: 'var(--paper)',
      borderTop: '1px solid var(--rule)',
    }}
  >
    <div className="wrap">
      {/* Section header */}
      <div style={{ marginBottom: 'clamp(40px, 5vw, 64px)' }}>
        <h2
          className="display"
          style={{
            margin: 0,
            fontSize: 'clamp(32px, 4.8vw, 76px)',
            maxWidth: '18ch',
            fontWeight: 800,
            lineHeight: 1.05,
          }}
        >
          <span
            style={{
              display: 'block',
              fontFamily: 'var(--serif-italic)',
              fontStyle: 'italic',
              fontWeight: 400,
              fontSize: 'clamp(20px, 1.8vw, 28px)',
              lineHeight: 1.2,
              color: 'var(--turq-deep)',
              marginBottom: 'clamp(12px, 1.2vw, 20px)',
              letterSpacing: 0,
            }}
          >
            Explore the fest —
          </span>
          You don't just attend.
          <br />
          <em>You join. You build. You belong.</em>
        </h2>
      </div>

      {/* Mosaic grid */}
      <div
        className="hp-tiles-grid"
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(6, 1fr)',
          gridAutoRows: 'clamp(120px, 11vw, 180px)',
          gap: 14,
        }}
      >
        {tiles.map((cell, i) => (
          <a
            key={i}
            href={cell.href}
            className="hp-tile"
            style={{
              gridColumn: cell.c,
              gridRow: cell.r,
              background: cell.kind === 'text' ? cell.bg : '#0E0F12',
            }}
          >
            {cell.kind === 'photo' ? (
              <>
                <Img
                  src={cell.src as string}
                  alt={cell.caption}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                />
                <div
                  style={{
                    position: 'absolute', top: 14, left: 14,
                    background: 'rgba(255,255,255,.92)',
                    padding: '5px 10px', borderRadius: 999,
                    fontSize: 10, letterSpacing: '.14em', textTransform: 'uppercase',
                    fontWeight: 700, color: '#0E0F12',
                  }}
                >
                  {cell.cta}
                </div>
                <div
                  style={{
                    position: 'absolute', left: 14, bottom: 14, right: 14,
                    display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end',
                  }}
                >
                  <span
                    style={{
                      color: '#fff',
                      fontFamily: 'ui-monospace, monospace',
                      fontSize: 11, letterSpacing: '.06em',
                      textShadow: '0 1px 8px rgba(0,0,0,.6)',
                    }}
                  >
                    {cell.caption}
                  </span>
                  <span className="hp-tile-arrow">→</span>
                </div>
              </>
            ) : (
              <div
                style={{
                  height: '100%',
                  padding: '22px 22px 18px',
                  display: 'flex', flexDirection: 'column',
                  justifyContent: 'space-between',
                  color: cell.fg,
                }}
              >
                <div>
                  <div
                    style={{
                      display: 'inline-block',
                      background: 'rgba(255,255,255,.65)',
                      padding: '5px 10px', borderRadius: 999,
                      fontSize: 10, letterSpacing: '.14em', textTransform: 'uppercase',
                      fontWeight: 700, color: '#0E0F12',
                      marginBottom: 18,
                    }}
                  >
                    {cell.tag}
                  </div>
                  <h3
                    style={{
                      margin: 0,
                      fontFamily: 'var(--sans)', fontWeight: 800,
                      fontSize: 'clamp(18px, 1.6vw, 24px)',
                      lineHeight: 1.15, letterSpacing: '-.01em',
                      color: cell.fg,
                    }}
                  >
                    {cell.title}
                  </h3>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span
                    style={{
                      fontSize: 11, letterSpacing: '.14em', textTransform: 'uppercase',
                      fontWeight: 700, opacity: 0.8,
                    }}
                  >
                    {cell.cta}
                  </span>
                  <span className="hp-tile-arrow">→</span>
                </div>
              </div>
            )}
          </a>
        ))}
      </div>

      {/* Tiles closing — You won't find / You will find */}
      <div
        className="hp-expect-band"
        style={{
          marginTop: 'clamp(40px, 5vw, 64px)',
          paddingTop: 'clamp(32px, 4vw, 48px)',
          paddingBottom: 'clamp(32px, 4vw, 48px)',
          borderTop: '1px solid var(--rule)',
          borderBottom: '1px solid var(--rule)',
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
          What to expect
        </div>
        <div
          className="hp-expect-cols"
          style={{
            display: 'grid', gridTemplateColumns: '1fr 1fr',
            gap: 'clamp(28px, 3vw, 56px)', alignItems: 'start',
          }}
        >
          <div>
            <div
              style={{
                fontFamily: 'ui-monospace, monospace', fontSize: 11,
                letterSpacing: '.14em', textTransform: 'uppercase',
                color: 'var(--ink-2)', marginBottom: 14,
              }}
            >
              You won't find
            </div>
            <p
              style={{
                margin: 0, fontSize: 'clamp(20px, 1.6vw, 24px)',
                lineHeight: 1.4, color: 'var(--ink-2)',
                textDecoration: 'line-through',
                textDecorationColor: 'var(--rule)',
                textDecorationThickness: '1px',
              }}
            >
              Sales pitches. Crowded expo halls. Lanyard small-talk that evaporates at the airport.
            </p>
          </div>
          <div>
            <div
              style={{
                fontFamily: 'ui-monospace, monospace', fontSize: 11,
                letterSpacing: '.14em', textTransform: 'uppercase',
                color: 'var(--turq-deep)', marginBottom: 14,
              }}
            >
              You will find
            </div>
            <p
              style={{
                margin: 0, fontSize: 'clamp(22px, 1.8vw, 28px)',
                lineHeight: 1.4, color: 'var(--ink)', fontWeight: 500,
              }}
            >
              Real conversations. Practical tools.{' '}
              <span
                style={{
                  fontFamily: 'var(--serif)', fontStyle: 'italic',
                  color: 'var(--turq-deep)', fontWeight: 400,
                }}
              >
                And people who genuinely care.
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);
