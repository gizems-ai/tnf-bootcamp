import React from 'react';

interface GalleryItem {
  caption: string;
  src: string;
  ratio: string;
}

const items: GalleryItem[] = [
  { caption: 'workshop · main hall',    src: '/photo-gallery-1.jpg',      ratio: '3/2' },
  { caption: 'morning swim · 07:14',   src: '/photo-gallery-swim.jpg',   ratio: '3/4' },
  { caption: 'sunset circle · day 3',  src: '/photo-gallery-circle.jpg', ratio: '3/4' },
  { caption: 'taurus hike',            src: '/photo-gallery-hike.jpg',   ratio: '3/2' },
  { caption: 'shared dinner · terrace',src: '/photo-gallery-dinner.jpg', ratio: '3/4' },
  { caption: 'deep-work session',      src: '/photo-gallery-work.jpg',   ratio: '3/4' },
  { caption: 'music after dark',       src: '/photo-gallery-night.jpg',  ratio: '3/2' },
  { caption: 'kleopatra beach',        src: '/photo-gallery-beach.jpg',  ratio: '3/4' },
];

export const Gallery: React.FC = () => (
  <section id="gallery" style={{ paddingTop: 'var(--pad-section)', paddingBottom: 'var(--pad-section)', background: 'var(--paper)', borderTop: '1px solid var(--rule)' }}>
    <div className="wrap">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'end', marginBottom: 'clamp(40px, 5vw, 72px)', flexWrap: 'wrap', gap: 24 }}>
        <div>
          <div className="eyebrow" style={{ marginBottom: 28 }}>◐ 09 — Gallery, MMXXV</div>
          <h2 className="display" style={{ margin: 0, fontSize: 'clamp(40px,6vw,88px)' }}>
            The first edition, <em>in frames.</em>
          </h2>
        </div>
        <p style={{ fontFamily: 'var(--sans)', fontWeight: 400, fontSize: 17, maxWidth: 380, margin: 0, lineHeight: 1.55, color: 'var(--ink-2)' }}>
          Eight days, one village, hundreds of small moments — a few of them, here.
        </p>
      </div>

      <div style={{ columnCount: 3, columnGap: 14 }}>
        {items.map((it, i) => (
          <figure key={i} style={{ margin: '0 0 14px 0', breakInside: 'avoid', position: 'relative' }}>
            <div className="photo" style={{ aspectRatio: it.ratio, position: 'relative', overflow: 'hidden' }}>
              <img
                src={it.src}
                alt={it.caption}
                loading="lazy"
                decoding="async"
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
              />
              <div style={{ position: 'absolute', left: 14, bottom: 12, fontFamily: 'ui-monospace, monospace', fontSize: 10, letterSpacing: '.08em', textTransform: 'uppercase', color: '#fff', textShadow: '0 1px 8px rgba(0,0,0,.6)' }}>◐ {it.caption}</div>
              <div style={{ position: 'absolute', right: 14, top: 12, fontFamily: 'ui-monospace, monospace', fontSize: 10, color: 'rgba(255,255,255,.85)', textShadow: '0 1px 8px rgba(0,0,0,.6)' }}>{String(i + 1).padStart(2, '0')}/24</div>
            </div>
            <figcaption className="sr-only">{it.caption}</figcaption>
          </figure>
        ))}
      </div>
    </div>
  </section>
);
