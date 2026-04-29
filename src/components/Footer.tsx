import React from 'react';
import { Lockup } from './Shell';
import { ReserveForm } from './ReserveForm';

const navCols = [
  { t: 'Explore', l: ['Manifesto', 'Anatolian Roots', 'Why Alanya', 'Gallery'] },
  { t: 'Join', l: ['Tickets', 'Speakers', 'Sponsors', 'Volunteer'] },
  { t: 'Stay close', l: ['Newsletter', 'Instagram', 'LinkedIn', 'Telegram'] },
];

export const Footer: React.FC = () => (
  <footer id="join" style={{ background: 'var(--ink)', color: 'var(--paper)', paddingTop: 'var(--pad-section)', paddingBottom: 56, position: 'relative', overflow: 'hidden' }}>
    <div className="wrap" style={{ paddingLeft: 'var(--pad-x)', paddingRight: 'var(--pad-x)' }}>
      {/* Gradient strip */}
      <div style={{ height: 4, marginBottom: 80, borderRadius: 2, background: 'linear-gradient(90deg, var(--sky), var(--aqua), var(--turq), var(--pink), var(--yellow))' }} />

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--gap)', alignItems: 'end', marginBottom: 'clamp(60px, 8vw, 120px)' }}>
        <div>
          <div className="eyebrow" style={{ color: 'var(--turq)', marginBottom: 28 }}>◐ Final Call</div>
          <h2 className="display" style={{ margin: 0, fontSize: 'clamp(48px, 7.5vw, 138px)', lineHeight: 0.92, letterSpacing: '-.04em', color: 'var(--paper)' }}>
            Build your<br />
            <em style={{ fontFamily: 'var(--serif-italic)', fontStyle: 'italic', fontWeight: 400, background: 'linear-gradient(135deg, #56C1C4, #C6A6D8 60%, #F3A6C8)', WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent' }}>solopreneur life.</em><br />
            Join our<br />
            <span style={{ color: 'var(--turq)' }}>temporary village.</span>
          </h2>
        </div>
        <div>
          <p style={{ fontFamily: 'var(--serif)', fontStyle: 'italic', fontSize: 'clamp(20px, 2vw, 28px)', lineHeight: 1.45, margin: 0, color: 'rgba(246,241,232,.9)', maxWidth: 480, fontWeight: 300 }}>
            You don't just attend.<br />
            You join. You build. You belong.
          </p>

          <div style={{ marginTop: 40 }}>
            <ReserveForm />
          </div>

          <div style={{ marginTop: 28, fontFamily: 'ui-monospace, monospace', fontSize: 12, color: 'rgba(246,241,232,.55)' }}>
            October 18 — 25, 2026 · Anjeliq Downtown · Super Early Bird from €99
          </div>
        </div>
      </div>

      {/* Meta band */}
      <div style={{ borderTop: '1px solid rgba(246,241,232,.15)', paddingTop: 40, display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', gap: 32, alignItems: 'start' }}>
        <div>
          <Lockup markSize={44} tone="paper" />
          <p style={{ marginTop: 24, maxWidth: 380, fontSize: 13, color: 'rgba(246,241,232,.55)', lineHeight: 1.6 }}>
            Curated by people who live the lifestyle. We don't build events.
            We build your <em>temporary village</em>.
          </p>
        </div>
        {navCols.map((c, i) => (
          <div key={i}>
            <div className="eyebrow" style={{ color: 'var(--turq)', marginBottom: 16 }}>{c.t}</div>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 8 }}>
              {c.l.map((x, j) => (
                <li key={j} style={{ fontSize: 14, color: 'rgba(246,241,232,.78)' }}><a href="#">{x}</a></li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div style={{ marginTop: 56, paddingTop: 24, borderTop: '1px solid rgba(246,241,232,.12)', display: 'flex', justifyContent: 'space-between', fontFamily: 'ui-monospace, monospace', fontSize: 11, color: 'rgba(246,241,232,.45)' }}>
        <span>© MMXXVI Turkiye Nomad Fest</span>
        <span>Made by the village, for the village</span>
        <span>Freedom · Connection · Growth</span>
      </div>
    </div>
  </footer>
);
