import React from 'react';

interface TextCell {
  kind: 'text';
  tag: string;
  title: string;
  bg: string;
  fg: string;
  c: string;
  r: string;
  cta: string;
}

interface PhotoCell {
  kind: 'photo';
  src: string;
  caption: string;
  c: string;
  r: string;
}

type Cell = TextCell | PhotoCell;

const cells: Cell[] = [
  { kind: 'text', tag: 'VILLAGE LIFE', title: 'Work happened. Life happened. Connection happened.', bg: '#C6A6D8', fg: '#0E0F12', c: 'span 2', r: 'span 2', cta: 'Read recap' },
  { kind: 'photo', src: '/photo-talk.png', caption: 'Workshop · main hall', c: 'span 4', r: 'span 2' },
  { kind: 'photo', src: '/photo-cay.jpg', caption: 'Çay over the bay · day 5', c: 'span 2', r: 'span 2' },
  { kind: 'text', tag: 'CONNECTIONS', title: 'Strangers on Monday. Collaborators by Friday.', bg: '#F3A6C8', fg: '#0E0F12', c: 'span 2', r: 'span 2', cta: 'See projects' },
  { kind: 'photo', src: '/photo-castle-beach.jpg', caption: 'Cleopatra beach · 7am swim', c: 'span 2', r: 'span 2' },
  { kind: 'text', tag: 'WELL-BEING', title: 'Sleep. Sea. Sunlight. Stillness.', bg: '#E6E7A3', fg: '#0E0F12', c: 'span 2', r: 'span 2', cta: 'The rhythm' },
  { kind: 'photo', src: '/photo-cablecar.jpg', caption: 'Cable car · taurus view', c: 'span 2', r: 'span 2' },
  { kind: 'text', tag: 'FEASTS', title: 'Long tables. Longer conversations.', bg: '#56C1C4', fg: '#0E0F12', c: 'span 2', r: 'span 2', cta: 'Anatolian table' },
  { kind: 'photo', src: '/photo-clarity.jpg', caption: 'Workshop screen · clarity exercise', c: 'span 3', r: 'span 2' },
  { kind: 'photo', src: '/photo-audience.jpg', caption: 'In the room · day 3', c: 'span 3', r: 'span 2' },
];

export const Lived: React.FC = () => (
  <section style={{ paddingTop: 'var(--pad-section)', paddingBottom: 'var(--pad-section)', background: 'var(--paper)', borderTop: '1px solid var(--rule)', position: 'relative', overflow: 'hidden' }}>
    <div className="wrap">
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--gap)', marginBottom: 'clamp(40px,5vw,80px)', alignItems: 'end' }}>
        <div>
          <div className="eyebrow" style={{ marginBottom: 28 }}>◐ 05 — Lived, Last Year</div>
          <h2 className="display" style={{ margin: 0, fontSize: 'clamp(40px,6vw,96px)' }}>
            Work happened. Life happened.<br /><em>Connection happened.</em>
          </h2>
        </div>
        <p style={{ fontSize: 17, lineHeight: 1.6, margin: 0, maxWidth: 480, color: 'rgba(31,31,31,.78)' }}>
          Last year wasn't just sessions and workshops. It was about living together —
          a rhythm of shared mornings, shared meals, and the kind of conversations that
          keep going long after the laptops close.
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gridAutoRows: 'clamp(120px, 11vw, 180px)', gap: 14 }}>
        {cells.map((cell, i) => (
          <div key={i} style={{ gridColumn: cell.c, gridRow: cell.r, borderRadius: 6, overflow: 'hidden', position: 'relative', background: cell.kind === 'text' ? cell.bg : '#0E0F12' }}>
            {cell.kind === 'photo' ? (
              <>
                <img src={cell.src} alt={cell.caption} loading="lazy" decoding="async" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                <div style={{ position: 'absolute', top: 14, left: 14, background: 'rgba(255,255,255,.92)', padding: '5px 10px', borderRadius: 999, fontSize: 10, letterSpacing: '.14em', textTransform: 'uppercase', fontWeight: 700, color: '#0E0F12' }}>VILLAGE · MMXXV</div>
                <div style={{ position: 'absolute', left: 14, bottom: 14, right: 14, display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
                  <span style={{ color: '#fff', fontFamily: 'ui-monospace, monospace', fontSize: 11, letterSpacing: '.06em', textShadow: '0 1px 8px rgba(0,0,0,.6)' }}>{cell.caption}</span>
                  <button aria-label="View more" style={{ width: 36, height: 36, borderRadius: 999, background: '#0E0F12', border: 'none', color: '#fff', cursor: 'pointer', fontSize: 16, lineHeight: 1 }}>→</button>
                </div>
              </>
            ) : (
              <div style={{ height: '100%', padding: '22px 22px 18px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', color: cell.fg }}>
                <div>
                  <div style={{ display: 'inline-block', background: 'rgba(255,255,255,.65)', padding: '5px 10px', borderRadius: 999, fontSize: 10, letterSpacing: '.14em', textTransform: 'uppercase', fontWeight: 700, color: '#0E0F12', marginBottom: 18 }}>{cell.tag}</div>
                  <h3 style={{ margin: 0, fontFamily: 'var(--sans)', fontWeight: 800, fontSize: 'clamp(18px, 1.6vw, 24px)', lineHeight: 1.15, letterSpacing: '-.01em', color: cell.fg }}>{cell.title}</h3>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontSize: 11, letterSpacing: '.14em', textTransform: 'uppercase', fontWeight: 700, opacity: 0.8 }}>{cell.cta}</span>
                  <button aria-label={`${cell.cta} — ${cell.title}`} style={{ width: 36, height: 36, borderRadius: 999, background: '#0E0F12', border: 'none', color: '#fff', cursor: 'pointer', fontSize: 16, lineHeight: 1 }}>→</button>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      <p className="display" style={{ marginTop: 'clamp(48px, 6vw, 88px)', fontSize: 'clamp(20px, 2vw, 30px)', fontStyle: 'italic', fontFamily: 'var(--serif)', fontWeight: 300, textAlign: 'center', maxWidth: '36ch', marginInline: 'auto', color: 'var(--ink)' }}>
        This year, the same rhythm returns — more intentional, more grounded, more alive.
      </p>
    </div>
  </section>
);
