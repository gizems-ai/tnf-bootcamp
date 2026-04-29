import React from 'react';

const stats = [
  { n: '24', t: 'Solopreneurs', s: 'launched' },
  { n: '11', t: 'AI products', s: 'shipped post-fest' },
  { n: '38', t: 'Collaborations', s: 'that outlived the week' },
  { n: '∞', t: 'Long-term partners', s: 'still building together' },
];

export const Impact: React.FC = () => (
  <section style={{ paddingTop: 'var(--pad-section)', paddingBottom: 'var(--pad-section)', background: 'var(--paper)', borderTop: '1px solid var(--rule)', color: 'var(--ink)', position: 'relative', overflow: 'hidden' }}>
    <div className="wrap">
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--gap)', alignItems: 'start', marginBottom: 'clamp(48px,6vw,96px)' }}>
        <div>
          <div className="eyebrow" style={{ marginBottom: 28 }}>◐ 07 — Real Impact</div>
          <h2 className="display" style={{ margin: 0, fontSize: 'clamp(48px,7vw,120px)', letterSpacing: '-.03em' }}>
            Not motivation.<br /><em>Momentum.</em>
          </h2>
        </div>
        <p style={{ fontFamily: 'var(--sans)', fontWeight: 400, fontSize: 18, lineHeight: 1.6, margin: 0, maxWidth: 480, color: 'var(--ink-2)' }}>
          Nomad Fest doesn't end when the village dissolves. Last year's{' '}
          <em style={{ fontFamily: 'var(--serif)', fontWeight: 300, color: 'var(--turq-deep)' }}>AI Bootcamp</em>{' '}
          became a catalyst — for solopreneur businesses, AI-powered products, collaborators,
          early users, and long-term partners. What began as conversations by the sea turned
          into real ventures.
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 0, borderTop: '1px solid rgba(31,31,31,.25)', borderBottom: '1px solid rgba(31,31,31,.25)' }}>
        {stats.map((s, i) => (
          <div key={i} style={{ padding: '40px 24px', borderRight: i < 3 ? '1px solid rgba(31,31,31,.2)' : 'none' }}>
            <div className="display" style={{ fontSize: 'clamp(56px, 8vw, 120px)', lineHeight: 0.9, marginBottom: 14 }}>{s.n}</div>
            <div className="eyebrow">{s.t}</div>
            <div style={{ fontFamily: 'var(--serif)', fontStyle: 'italic', fontSize: 16, marginTop: 6, color: 'var(--ink-2)', fontWeight: 300 }}>{s.s}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);
