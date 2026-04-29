import React from 'react';
import { Img } from './Img';

export const Manifesto: React.FC = () => (
  <section id="manifesto" style={{ paddingTop: 'var(--pad-section)', paddingBottom: 'var(--pad-section)', background: 'var(--paper)', borderTop: '1px solid var(--rule)' }}>
    <div className="wrap">
      <div style={{ display: 'grid', gridTemplateColumns: 'minmax(180px, 1fr) 4fr', gap: 'var(--gap)', alignItems: 'start', marginBottom: 'clamp(48px, 6vw, 96px)' }}>
        <div className="eyebrow" style={{ paddingTop: 8 }}>◐ 01 — Manifesto</div>
        <h2 className="display" style={{ margin: 0, fontSize: 'clamp(36px, 5.4vw, 80px)', maxWidth: '18ch', fontWeight: 300 }}>
          This is not a conference you attend.{' '}
          <em>It's a village you temporarily belong to.</em>
        </h2>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'minmax(180px, 1fr) 1.4fr 1fr', gap: 'var(--gap)', alignItems: 'start' }}>
        <div />
        <div style={{ fontSize: 17, lineHeight: 1.65, color: 'var(--ink-2)', maxWidth: 540 }}>
          <p style={{ marginTop: 0 }}>
            For a week, Nomad Fest becomes a living ecosystem by the Mediterranean — where
            solopreneurs, founders, and location-independent builders slow down, reconnect
            with their work, and form real human bonds.
          </p>
          <p>
            This land knows nomads. Long before laptops and remote work, Anatolia was
            shaped by movement, seasons, and shared life — from ancient trade routes to
            Yörük tents in the Taurus Mountains, from the Lycian Way to coastal villages.
          </p>
          <p style={{ color: 'var(--ink)' }}>
            Nomad Fest rises from these roots.<br />
            <span className="italic" style={{ fontFamily: 'var(--serif)', fontStyle: 'italic', fontSize: 22, color: 'var(--turq-deep)' }}>
              Modern in its tools. Hereditary in its spirit.
            </span>
          </p>
        </div>

        <div>
          <div style={{ aspectRatio: '3/4', borderRadius: 4, overflow: 'hidden', position: 'relative', background: '#0E0F12' }}>
            <Img
              src="/photo-belong.jpg"
              alt="Festival-goer laughing with phone and coffee — moment of belonging"
              loading="lazy"
              decoding="async"
              style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
            />
            <div style={{ position: 'absolute', left: 14, bottom: 12, fontFamily: 'ui-monospace, monospace', fontSize: 10, letterSpacing: '.08em', textTransform: 'uppercase', color: '#fff', textShadow: '0 1px 8px rgba(0,0,0,.6)' }}>◐ Belonging · day 3</div>
          </div>
          <div style={{ marginTop: 18, fontFamily: 'var(--serif)', fontStyle: 'italic', fontSize: 18, color: 'var(--ink-2)', paddingLeft: 14, borderLeft: '2px solid var(--turq)' }}>
            "You don't just attend.<br />You join. You build. You belong."
          </div>
        </div>
      </div>
    </div>
  </section>
);
