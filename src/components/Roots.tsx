import React from 'react';
import { LogoMark } from './Shell';

const pillars = [
  { n: '01', t: 'Moving lightly', d: 'Carrying only what matters. Trading what doesn\'t.', bg: 'linear-gradient(160deg, #5B74E6 0%, #7E92EC 60%, #C6A6D8 100%)', fg: '#FFFFFF' },
  { n: '02', t: 'Living in rhythm', d: 'With seasons, sun, and the long arc of the day.', bg: 'linear-gradient(160deg, #56C1C4 0%, #8FD0CF 60%, #E6E7A3 100%)', fg: '#0E0F12' },
  { n: '03', t: 'Building community', d: 'Wherever you stop, however long you stay.', bg: 'linear-gradient(160deg, #F3A6C8 0%, #F0B8C8 50%, #E6E7A3 100%)', fg: '#0E0F12' },
];

export const Roots: React.FC = () => (
  <section id="roots" style={{ paddingTop: 'var(--pad-section)', paddingBottom: 'var(--pad-section)', background: 'var(--paper)', borderTop: '1px solid var(--rule)', borderBottom: '1px solid var(--rule)', position: 'relative' }}>
    <div className="wrap">
      <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: 'var(--gap)', alignItems: 'end', marginBottom: 'clamp(40px, 5vw, 80px)' }}>
        <div>
          <div className="eyebrow" style={{ marginBottom: 28, color: 'var(--turq-deep)' }}>◐ 02 — Anatolian Roots</div>
          <h2 className="display" style={{ margin: 0, fontSize: 'clamp(40px, 6.4vw, 104px)', letterSpacing: '-.03em', fontWeight: 300 }}>
            One of the world's oldest <em>nomadic homelands.</em>
          </h2>
        </div>
        <p style={{ fontFamily: 'var(--sans)', fontWeight: 400, fontSize: 18, lineHeight: 1.6, color: 'var(--ink-2)', maxWidth: 420, margin: 0 }}>
          The Lycian Way, stretching along the Mediterranean coast, was once walked by
          traders, travelers, and seekers — moving from village to village, carrying
          stories, skills, and culture.
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16, marginTop: 40 }}>
        {pillars.map((p, i) => (
          <div key={i} style={{ background: p.bg, color: p.fg, borderRadius: 8, padding: '36px 28px 32px', minHeight: 320, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', position: 'relative', overflow: 'hidden' }}>
            <div style={{ fontFamily: 'ui-monospace, SFMono-Regular, Menlo, monospace', fontSize: 12, letterSpacing: '.15em', opacity: 0.7, fontWeight: 600 }}>— {p.n} / 03</div>
            <div>
              <h3 style={{ fontFamily: 'var(--sans)', fontWeight: 800, fontSize: 'clamp(28px, 2.6vw, 40px)', lineHeight: 1.05, letterSpacing: '-.02em', margin: 0, color: p.fg }}>{p.t}.</h3>
              <p style={{ margin: '16px 0 0 0', fontSize: 15, lineHeight: 1.55, color: p.fg, opacity: 0.9, maxWidth: 280 }}>{p.d}</p>
            </div>
          </div>
        ))}
      </div>

      <div style={{ marginTop: 'clamp(60px, 8vw, 120px)', textAlign: 'center' }}>
        <p className="display" style={{ fontStyle: 'italic', fontFamily: 'var(--serif)', fontSize: 'clamp(24px, 3vw, 44px)', lineHeight: 1.3, fontWeight: 300, maxWidth: '26ch', margin: '0 auto', color: 'var(--ink)' }}>
          Nomad Fest is a contemporary continuation of that journey.
        </p>
      </div>
    </div>

    <LogoMark size={680} style={{ position: 'absolute', left: '-12%', bottom: '-22%', opacity: 0.05, pointerEvents: 'none' }} aria-hidden />
  </section>
);
