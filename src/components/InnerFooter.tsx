import React from 'react';
import { Lockup } from './Shell';

interface InnerFooterProps {
  withFinalCTA?: boolean;
}

export const InnerFooter: React.FC<InnerFooterProps> = ({ withFinalCTA = false }) => (
  <footer id="join" className="tnf-footer">
    <div className="wrap">
      <div className="strip" />

      {withFinalCTA && (
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
            <div style={{ marginTop: 40, display: 'flex', gap: 14, flexWrap: 'wrap' }}>
              <a href="https://www.eventzilla.net/e/turkiye-nomad-fest--alanya-2026-2138676905" style={{ background: 'var(--turq)', color: 'var(--ink)', padding: '18px 28px', borderRadius: 999, fontWeight: 600, fontSize: 13, letterSpacing: '.1em', textTransform: 'uppercase' }}>Reserve your tent →</a>
              <a href="/speakers#apply" style={{ border: '1px solid rgba(246,241,232,.3)', color: 'var(--paper)', padding: '18px 28px', borderRadius: 999, fontSize: 13, letterSpacing: '.1em', textTransform: 'uppercase' }}>Apply to speak</a>
            </div>
            <div style={{ marginTop: 28, fontFamily: 'ui-monospace, monospace', fontSize: 12, color: 'rgba(246,241,232,.55)' }}>
              October 18 — 25, 2026 · Anjeliq Downtown, Alanya
            </div>
          </div>
        </div>
      )}

      <div className="tnf-footer-nav" style={{ borderTop: '1px solid rgba(246,241,232,.15)', paddingTop: 40, display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', gap: 32, alignItems: 'start' }}>
        <div>
          <Lockup markSize={44} tone="paper" sub="Alanya, Anjeliq Hotels — Oct 18–25, 2026" />
          <p style={{ marginTop: 24, maxWidth: 380, fontSize: 13, color: 'rgba(246,241,232,.55)', lineHeight: 1.6 }}>
            Curated by people who live the lifestyle. We don't build events.
            We build your <em>temporary village</em>.
          </p>
        </div>
        {[
          { t: 'Explore', l: [['Program', '/program'], ['Speakers', '/speakers'], ['MMXXV', '#']] },
          { t: 'Plan',    l: [['Stay', '/stay'], ['Alanya', '/alanya'], ['Tickets', 'https://www.eventzilla.net/e/turkiye-nomad-fest--alanya-2026-2138676905'], ['FAQ', '#']] },
          { t: 'Stay close', l: [['Newsletter', '#'], ['Instagram', 'https://www.instagram.com/turkiye.nomadfest/'], ['LinkedIn', 'https://www.linkedin.com/company/nomad-fest-turkiye/'], ['Telegram', '#']] },
        ].map((c, i) => (
          <div key={i}>
            <div className="eyebrow" style={{ color: 'var(--turq)', marginBottom: 16 }}>{c.t}</div>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 8 }}>
              {c.l.map((x, j) => (
                <li key={j} style={{ fontSize: 14, color: 'rgba(246,241,232,.78)' }}>
                  <a href={x[1]}>{x[0]}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div style={{ marginTop: 56, paddingTop: 24, borderTop: '1px solid rgba(246,241,232,.12)', display: 'flex', justifyContent: 'space-between', fontFamily: 'ui-monospace, monospace', fontSize: 11, color: 'rgba(246,241,232,.45)' }}>
        <span>© MMXXVI Turkiye Nomad Fest</span>
        <span>Made by the village, for the village</span>
        <span>Freedom · Purpose · Connection</span>
      </div>
    </div>
  </footer>
);
