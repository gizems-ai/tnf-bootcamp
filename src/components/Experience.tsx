import React from 'react';

const rows = [
  { n: '01', head: 'Conversations,', italic: 'not speeches.', body: "No keynote pulpit. The most useful thing you'll hear this week probably happens over breakfast." },
  { n: '02', head: 'Peer-to-peer learning,', italic: 'not guru culture.', body: 'Everyone teaches something. Everyone learns something. The room is the curriculum.' },
  { n: '03', head: 'Well-being as foundation,', italic: 'not afterthought.', body: 'Sleep. Sea. Sunlight. Stillness. The work that comes from a rested body is different work.' },
];

export const Experience: React.FC = () => (
  <section id="experience" style={{ paddingTop: 'var(--pad-section)', paddingBottom: 'var(--pad-section)', background: 'var(--ink)', color: 'var(--paper)' }}>
    <div className="wrap">
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: 'var(--gap)', alignItems: 'end', marginBottom: 'clamp(48px,6vw,96px)' }}>
        <div>
          <div className="eyebrow" style={{ color: 'var(--turq)', marginBottom: 28 }}>◐ 04 — What You'll Experience</div>
          <h2 className="display" style={{ margin: 0, fontSize: 'clamp(40px,6vw,96px)', color: 'var(--paper)' }}>
            Eye level.<br />
            <em style={{ color: 'var(--turq)' }}>Not a stage.</em>
          </h2>
        </div>
        <p style={{ fontFamily: 'var(--sans)', fontWeight: 400, fontSize: 18, lineHeight: 1.6, color: 'rgba(246,241,232,.75)', margin: 0, maxWidth: 540 }}>
          A space where ideas are exchanged at eye level, growth happens organically, and
          presence matters more than performance.
        </p>
      </div>

      <div>
        {rows.map((row, i) => (
          <div key={i} style={{ display: 'grid', gridTemplateColumns: '80px 1.4fr 1fr', gap: 'var(--gap)', padding: '36px 0', borderTop: '1px solid rgba(246,241,232,.18)', alignItems: 'baseline' }}>
            <div style={{ fontFamily: 'ui-monospace, monospace', fontSize: 14, color: 'var(--turq)' }}>{row.n}</div>
            <h3 className="display" style={{ margin: 0, fontSize: 'clamp(28px,3.6vw,56px)', fontWeight: 350, color: 'var(--paper)' }}>
              {row.head}{' '}
              <em style={{ color: 'var(--lavender)' }}>{row.italic}</em>
            </h3>
            <p style={{ margin: 0, fontSize: 15, lineHeight: 1.55, color: 'rgba(246,241,232,.7)', maxWidth: 380 }}>{row.body}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);
