import React from 'react';
import { Img } from './Img';
import { Lockup } from './Shell';

const DateStamp: React.FC = () => (
  <div
    style={{
      width: 240, height: 240, borderRadius: 999,
      display: 'flex', flexDirection: 'column',
      alignItems: 'center', justifyContent: 'center',
      textAlign: 'center', position: 'relative',
      background: 'var(--grad-cool)', color: '#fff',
      boxShadow: '0 30px 60px -20px rgba(91,116,230,.45)',
    }}
  >
    <div style={{ fontFamily: 'var(--sans)', fontWeight: 800, fontSize: 14, letterSpacing: '.22em', textTransform: 'uppercase', marginBottom: 6, opacity: 0.9 }}>October</div>
    <div style={{ fontFamily: 'var(--sans)', fontWeight: 900, fontSize: 76, lineHeight: 1, letterSpacing: '-.05em' }}>2026</div>
    <div style={{ fontFamily: 'var(--sans)', fontWeight: 600, fontSize: 12, letterSpacing: '.16em', textTransform: 'uppercase', marginTop: 10, opacity: 0.92 }}>18 — 25 · Alanya</div>

    <svg
      viewBox="0 0 320 320"
      aria-hidden="true"
      style={{ position: 'absolute', inset: -40, width: 320, height: 320, animation: 'spin 32s linear infinite', pointerEvents: 'none' }}
    >
      <defs>
        <path id="circ-ring" d="M 160,160 m -140,0 a 140,140 0 1,1 280,0 a 140,140 0 1,1 -280,0" />
      </defs>
      <text style={{ fontFamily: 'var(--sans)', fontSize: 11, letterSpacing: '.32em', textTransform: 'uppercase', fill: 'var(--ink)', fontWeight: 600 }}>
        <textPath href="#circ-ring">
          · Turkiye Nomad Fest 2026 · Alanya · Mediterranean Coast · Eight Days One Village
        </textPath>
      </text>
    </svg>
    <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
  </div>
);

export const Hero: React.FC = () => (
  <section style={{ paddingTop: 28, paddingBottom: 'clamp(40px, 6vw, 96px)', position: 'relative', overflow: 'hidden' }}>
    <div className="wrap">
      {/* Top bar */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingBottom: 24, borderBottom: '1px solid var(--rule)', marginBottom: 'clamp(28px, 4vw, 56px)' }}>
        <Lockup markSize={36} />
        <nav aria-label="Main navigation" style={{ display: 'flex', gap: 28, fontSize: 11, letterSpacing: '.18em', textTransform: 'uppercase', fontWeight: 600, alignItems: 'center' }}>
          <a href="program.html">Program</a>
          <a href="bootcamp.html">Bootcamp</a>
          <a href="speakers.html">Speakers</a>
          <a href="stay.html">Stay</a>
          <a href="alanya.html">Alanya</a>
          <a href="2025.html">MMXXV</a>
          <a href="#join" style={{ display: 'inline-flex', alignItems: 'center', gap: 6, background: 'var(--ink)', color: 'var(--paper)', padding: '10px 18px', borderRadius: 999, fontWeight: 600, lineHeight: 1, fontSize: 11, letterSpacing: '.14em', textTransform: 'uppercase', alignSelf: 'center' }}>Reserve →</a>
        </nav>
      </div>

      {/* Mono caption row */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 28, fontFamily: 'ui-monospace, SFMono-Regular, Menlo, monospace', fontSize: 11, color: 'var(--ink-2)', letterSpacing: '.06em' }}>
        <span>N° 02 — Second Edition</span>
        <span>36° 32′ N · 31° 59′ E · Alanya</span>
        <span>Anjeliq Downtown Hotel</span>
      </div>

      {/* Headline + hero photo */}
      <div style={{ display: 'grid', gridTemplateColumns: '1.05fr .95fr', gap: 'clamp(20px, 3vw, 48px)', alignItems: 'stretch', position: 'relative' }}>
        <div style={{ position: 'relative', paddingTop: 12 }}>
          <h1 className="display" style={{ margin: 0, fontSize: 'clamp(60px, 10vw, 172px)', lineHeight: 0.88, letterSpacing: '-0.05em', fontWeight: 800 }}>
            A temporary{' '}
            <em style={{ fontFamily: 'var(--serif-italic)', fontStyle: 'italic', fontWeight: 400, background: 'var(--grad-cool)', WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent', paddingRight: '.05em' }}>village</em>
            <br />by the{' '}
            <em style={{ fontFamily: 'var(--serif-italic)', fontStyle: 'italic', fontWeight: 400, background: 'var(--grad-warm)', WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent' }}>Mediterranean.</em>
          </h1>

          <p style={{ marginTop: 28, fontFamily: 'var(--sans)', fontWeight: 500, fontSize: 'clamp(16px, 1.2vw, 19px)', lineHeight: 1.55, maxWidth: 460, color: 'var(--ink-2)' }}>
            For solopreneurs, builders and modern nomads.<br />
            <strong style={{ color: 'var(--ink)', fontWeight: 700 }}>Freedom. Connection. Growth.</strong>
          </p>

          <div style={{ marginTop: 32, display: 'flex', gap: 12, alignItems: 'center', flexWrap: 'wrap' }}>
            <a href="#join" style={{ background: 'var(--ink)', color: 'var(--paper)', padding: '18px 28px', borderRadius: 999, fontSize: 13, letterSpacing: '.1em', textTransform: 'uppercase', fontWeight: 700 }}>Reserve your spot →</a>
            {/* ↑ scrolls to #join (footer) where ReserveForm lives */}
            <a href="#manifesto" style={{ padding: '18px 24px', borderRadius: 999, fontSize: 13, letterSpacing: '.1em', textTransform: 'uppercase', fontWeight: 700, color: 'var(--ink)', border: '1px solid var(--ink)' }}>Read the manifesto</a>
            <span style={{ fontFamily: 'ui-monospace, monospace', fontSize: 11, color: 'var(--ink-2)', marginLeft: 4 }}>Super Early Bird from €99</span>
          </div>

          <div style={{ marginTop: 'clamp(40px, 6vw, 88px)' }}>
            <DateStamp />
          </div>
        </div>

        {/* Hero photograph */}
        <div style={{ position: 'relative', minHeight: 560, borderRadius: 4, overflow: 'hidden', background: 'var(--paper-2)' }}>
          <Img
            src="/photo-castle-beach.jpg"
            alt="Alanya castle walls meet the turquoise Mediterranean"
            loading="eager"
            decoding="async"
            style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
          />
          <div style={{ position: 'absolute', left: 18, bottom: 18, fontFamily: 'ui-monospace, monospace', fontSize: 11, color: '#fff', textShadow: '0 1px 8px rgba(0,0,0,.5)', letterSpacing: '.08em', textTransform: 'uppercase' }}>◐ Alanya Castle · Cleopatra Beach · October</div>
          <div style={{ position: 'absolute', right: 18, top: 18, fontFamily: 'ui-monospace, monospace', fontSize: 11, color: 'rgba(255,255,255,.85)', textShadow: '0 1px 8px rgba(0,0,0,.5)' }}>01 / 24</div>
        </div>
      </div>
    </div>
  </section>
);
