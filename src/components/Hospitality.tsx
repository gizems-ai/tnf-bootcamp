import React from 'react';

export const Hospitality: React.FC = () => (
  <section style={{ paddingTop: 'var(--pad-section)', paddingBottom: 'var(--pad-section)', background: 'var(--paper)' }}>
    <div className="wrap">
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--gap)', alignItems: 'center' }}>
        <div>
          <div className="eyebrow" style={{ marginBottom: 28, color: 'var(--turq-deep)' }}>◐ 08 — Anatolian Hospitality</div>
          <h2 className="display" style={{ margin: 0, fontSize: 'clamp(36px, 5.2vw, 76px)', letterSpacing: '-.03em', fontWeight: 300 }}>
            In Anatolia, hospitality isn't an offering. <em>It's a reflex.</em>
          </h2>

          <ul style={{ listStyle: 'none', padding: 0, margin: '40px 0 0 0', display: 'flex', flexDirection: 'column', gap: 14, fontFamily: 'var(--sans)', fontWeight: 400, fontSize: 'clamp(17px, 1.3vw, 20px)', color: 'var(--ink-2)' }}>
            <li>You're invited to sit.</li>
            <li>Tea appears.</li>
            <li>Tables fill.</li>
            <li>Time slows down.</li>
          </ul>

          <p style={{ marginTop: 32, maxWidth: 480, fontSize: 15, color: 'var(--ink-2)', lineHeight: 1.6 }}>
            This culture of openness, generosity, and shared meals is the foundation for
            real connection — and the foundation of how the village runs.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
          <div style={{ aspectRatio: '3/4', borderRadius: 4, overflow: 'hidden', position: 'relative', background: '#0E0F12' }}>
            <img src="/photo-cay.jpg" alt="Turkish tea served in traditional glasses over Alanya bay" loading="lazy" decoding="async" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
            <div style={{ position: 'absolute', left: 14, bottom: 12, fontFamily: 'ui-monospace, monospace', fontSize: 10, letterSpacing: '.08em', textTransform: 'uppercase', color: '#fff', textShadow: '0 1px 8px rgba(0,0,0,.6)' }}>◐ Çay · over the bay</div>
          </div>
          <div style={{ aspectRatio: '3/4', borderRadius: 4, overflow: 'hidden', position: 'relative', background: '#0E0F12', transform: 'translateY(40px)' }}>
            <img src="/photo-flag.jpg" alt="Turkish flag at sunset on Alanya beach" loading="lazy" decoding="async" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
            <div style={{ position: 'absolute', left: 14, bottom: 12, fontFamily: 'ui-monospace, monospace', fontSize: 10, letterSpacing: '.08em', textTransform: 'uppercase', color: '#fff', textShadow: '0 1px 8px rgba(0,0,0,.6)' }}>◐ Sunset · long table · 9pm</div>
          </div>
        </div>
      </div>
    </div>
  </section>
);
