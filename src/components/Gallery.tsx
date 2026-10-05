import React from 'react';
import { Img } from './Img';

const items = [
  { src: '/photo-gallery-wa-1.jpg',  caption: 'long table · alanya beach',     pos: 'center 60%' },
  { src: '/photo-gallery-wa-10.jpg', caption: 'beach sunset · together',        pos: 'center 40%' },
  { src: '/photo-gallery-wa-3.jpg',  caption: 'kızıl kule · from the water',   pos: 'center top'  },
  { src: '/photo-gallery-wa-4.jpg',  caption: 'golden hour · alanya',           pos: 'center center' },
  { src: '/photo-gallery-wa-11.jpg', caption: 'morning run · day 3',            pos: 'center top'  },
  { src: '/photo-gallery-wa-5.jpg',  caption: 'beach stage · sea view',         pos: 'center top'  },
  { src: '/photo-gallery-wa-2.jpg',  caption: 'kızıl kule · panorama',          pos: 'center 40%'  },
  { src: '/photo-gallery-wa-12.jpg', caption: 'alanya · cat on the beach',      pos: 'center center' },
  { src: '/photo-gallery-wa-7.jpg',  caption: 'workshop session · day 2',       pos: 'center top'  },
  { src: '/photo-gallery-wa-6.jpg',  caption: 'cleopatra beach · evening',      pos: 'center center' },
  { src: '/photo-gallery-wa-8.jpg',  caption: 'dinner · connections made',      pos: 'center top'  },
  { src: '/photo-gallery-wa-13.jpg', caption: 'long table · night out',         pos: 'center center' },
  { src: '/photo-gallery-wa-14.jpg', caption: 'alanya castle · 13th century',   pos: 'center center' },
  { src: '/photo-gallery-wa-9.jpg',  caption: 'night garden · alanya',          pos: 'center center' },
  { src: '/photo-gallery-wa-15.jpg', caption: 'cleopatra beach · kitesurfing',  pos: 'center center' },
];

export const Gallery: React.FC = () => (
  <section
    id="gallery"
    style={{
      paddingTop: 'var(--pad-section)',
      paddingBottom: 'var(--pad-section)',
      paddingLeft: 'var(--pad-x)',
      paddingRight: 'var(--pad-x)',
      background: 'var(--paper)',
      borderTop: '1px solid var(--rule)',
    }}
  >
    <div className="wrap">
      <div
        style={{
          display: 'flex', justifyContent: 'space-between', alignItems: 'end',
          marginBottom: 'clamp(40px, 5vw, 72px)', flexWrap: 'wrap', gap: 24,
        }}
      >
        <div>
          <div className="eyebrow" style={{ marginBottom: 28 }}>◐ 09 — Gallery, 2025</div>
          <h2
            className="display"
            style={{ margin: 0, fontSize: 'clamp(32px, 4.8vw, 76px)', letterSpacing: '-.03em' }}
          >
            The first edition, <em>in frames.</em>
          </h2>
        </div>
        <p
          style={{
            fontFamily: 'var(--sans)', fontWeight: 400,
            fontSize: 17, maxWidth: 380, margin: 0, lineHeight: 1.55,
            color: 'var(--ink-2)',
          }}
        >
          Eight days, one village, hundreds of small moments — a few of them, here.
        </p>
      </div>

      <div className="hp-gallery-grid">
        {items.map((it, i) => (
          <figure
            key={i}
            style={{
              margin: 0,
              position: 'relative',
              borderRadius: 6,
              overflow: 'hidden',
              background: '#0E0F12',
              aspectRatio: '3 / 4',
            }}
          >
            <Img
              src={it.src}
              alt={it.caption}
              loading="lazy"
              decoding="async"
              style={{
                width: '100%', height: '100%',
                objectFit: 'cover',
                objectPosition: it.pos,
                display: 'block',
              }}
            />
            <div
              style={{
                position: 'absolute', inset: 0,
                background: 'linear-gradient(180deg, transparent 55%, rgba(0,0,0,.45) 100%)',
                pointerEvents: 'none',
              }}
            />
            <div
              style={{
                position: 'absolute', left: 12, bottom: 10,
                fontFamily: 'ui-monospace, monospace', fontSize: 10,
                letterSpacing: '.08em', textTransform: 'uppercase',
                color: '#fff', textShadow: '0 1px 6px rgba(0,0,0,.5)',
              }}
            >
              ◐ {it.caption}
            </div>
            <div
              style={{
                position: 'absolute', right: 12, top: 10,
                fontFamily: 'ui-monospace, monospace', fontSize: 10,
                color: 'rgba(255,255,255,.8)', textShadow: '0 1px 6px rgba(0,0,0,.5)',
              }}
            >
              {String(i + 1).padStart(2, '0')}/{items.length}
            </div>
          </figure>
        ))}
      </div>
    </div>
  </section>
);
