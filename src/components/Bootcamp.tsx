import React from 'react';
import { Img } from './Img';

const pillars = [
  { tag: 'AI AS LEVERAGE', head: 'Tools, agents, workflows.', body: 'Hands-on with the systems that 10x a solopreneur — from research to ops to ship.', bg: '#E6E7A3' },
  { tag: 'BUSINESS DESIGN', head: 'Offer. Pricing. Positioning.', body: 'Map your wedge in a week. Pressure-tested by founders who\'ve shipped before.', bg: '#C6A6D8' },
];

const stats = [
  { n: '24', l: 'Solopreneurs in the cohort' },
  { n: '11', l: 'Products shipped post-fest' },
  { n: '5',  l: 'Mentors, in-room, all week' },
  { n: '€99', l: 'Super early-bird, all-in' },
];

export const Bootcamp: React.FC = () => (
  <section id="bootcamp" style={{ paddingTop: 'var(--pad-section)', paddingBottom: 'var(--pad-section)', background: 'var(--paper)', borderTop: '1px solid var(--rule)', position: 'relative', overflow: 'hidden' }}>
    <div className="wrap">
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--gap)', alignItems: 'end', marginBottom: 'clamp(40px,5vw,72px)' }}>
        <div>
          <div className="eyebrow" style={{ marginBottom: 28, color: '#0E0F12' }}>◐ 06 — Solopreneurship & AI Bootcamp</div>
          <h2 className="display" style={{ margin: 0, fontSize: 'clamp(48px, 7vw, 120px)', letterSpacing: '-.04em', lineHeight: 0.9 }}>
            Build your{' '}
            <em style={{ fontFamily: 'var(--serif-italic)', fontStyle: 'italic', fontWeight: 400, background: 'var(--grad-cool)', WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent' }}>one-person</em><br />
            company,<br />with{' '}
            <em style={{ fontFamily: 'var(--serif-italic)', fontStyle: 'italic', fontWeight: 400, background: 'linear-gradient(135deg, #F3A6C8 0%, #E6E7A3 100%)', WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent' }}>AI as your Co-Founder.</em>
          </h2>
        </div>
        <p style={{ fontFamily: 'var(--sans)', fontWeight: 400, fontSize: 18, lineHeight: 1.6, margin: 0, maxWidth: 480, color: 'var(--ink-2)' }}>
          A five-day intensive inside the festival — for solopreneurs and indie builders
          shipping the next thing. Strategy on Monday, prototype by Wednesday, launch plan
          by Friday. No fluff, no funnels, no gurus.
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gridAutoRows: 'clamp(120px, 11vw, 180px)', gap: 14 }}>
        {/* Dark headline panel — 4×2 */}
        <div style={{ gridColumn: 'span 4', gridRow: 'span 2', borderRadius: 6, overflow: 'hidden', background: 'linear-gradient(135deg, #0E0F12 0%, #1A2240 50%, #5B74E6 100%)', color: '#fff', padding: '36px 36px 28px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', position: 'relative' }}>
          <div style={{ display: 'inline-block', alignSelf: 'flex-start', background: 'rgba(255,255,255,.14)', padding: '6px 12px', borderRadius: 999, fontSize: 11, letterSpacing: '.16em', textTransform: 'uppercase', fontWeight: 700, color: '#fff', backdropFilter: 'blur(8px)' }}>FIVE-DAY INTENSIVE · INSIDE THE FEST</div>
          <div>
            <h3 style={{ fontFamily: 'var(--sans)', fontWeight: 800, fontSize: 'clamp(28px, 3vw, 44px)', lineHeight: 1.05, letterSpacing: '-.02em', margin: 0, color: '#fff' }}>
              Ship a real product.<br />
              <span style={{ background: 'linear-gradient(135deg, #56C1C4 0%, #C6A6D8 60%, #F3A6C8 100%)', WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent', fontFamily: 'var(--serif-italic)', fontStyle: 'italic', fontWeight: 400 }}>Not a slide deck.</span>
            </h3>
            <p style={{ margin: '18px 0 0 0', fontSize: 15, color: 'rgba(255,255,255,.78)', maxWidth: 480, lineHeight: 1.55 }}>
              Five mornings of focused work. Five afternoons of feedback from peers and
              mentors. Show up with an idea, leave with a working prototype and the
              clearest go-to-market plan you've ever written.
            </p>
          </div>
        </div>

        {/* Stat block — turquoise */}
        <div style={{ gridColumn: 'span 2', gridRow: 'span 1', borderRadius: 6, background: '#56C1C4', padding: '22px 24px 18px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', color: '#0E0F12' }}>
          <div style={{ fontFamily: 'ui-monospace, monospace', fontSize: 11, letterSpacing: '.14em', textTransform: 'uppercase', fontWeight: 700, opacity: 0.7 }}>— 01 / Curriculum</div>
          <div>
            <div style={{ fontFamily: 'var(--sans)', fontWeight: 800, fontSize: 'clamp(36px, 4vw, 56px)', lineHeight: 1, letterSpacing: '-.03em' }}>5 days</div>
            <div style={{ fontSize: 13, marginTop: 6, opacity: 0.85 }}>from idea to working prototype</div>
          </div>
        </div>

        {/* Photo — founder */}
        <div style={{ gridColumn: 'span 2', gridRow: 'span 1', borderRadius: 6, overflow: 'hidden', position: 'relative', background: '#0E0F12' }}>
          <Img src="/photo-founder.jpg" alt="Founder running the 5-minute clarity exercise" loading="lazy" decoding="async" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', objectPosition: 'center 25%' }} />
          <div style={{ position: 'absolute', top: 14, left: 14, background: 'rgba(255,255,255,.92)', padding: '5px 10px', borderRadius: 999, fontSize: 10, letterSpacing: '.14em', textTransform: 'uppercase', fontWeight: 700, color: '#0E0F12' }}>CLARITY EXERCISE · DAY 2</div>
        </div>

        {/* Pillars */}
        {pillars.map((p, i) => (
          <div key={i} style={{ gridColumn: 'span 2', gridRow: 'span 2', borderRadius: 6, background: p.bg, color: '#0E0F12', padding: '24px 24px 20px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              <div style={{ display: 'inline-block', background: 'rgba(255,255,255,.65)', padding: '5px 10px', borderRadius: 999, fontSize: 10, letterSpacing: '.14em', textTransform: 'uppercase', fontWeight: 700, color: '#0E0F12', marginBottom: 18 }}>{p.tag}</div>
              <h4 style={{ margin: 0, fontFamily: 'var(--sans)', fontWeight: 800, fontSize: 'clamp(20px, 1.7vw, 26px)', lineHeight: 1.15, letterSpacing: '-.01em' }}>{p.head}</h4>
              <p style={{ margin: '14px 0 0 0', fontSize: 14, lineHeight: 1.55, color: '#0E0F12', opacity: 0.82 }}>{p.body}</p>
            </div>
            <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: 14 }}>
              <button aria-label={p.head} style={{ width: 36, height: 36, borderRadius: 999, background: '#0E0F12', border: 'none', color: '#fff', cursor: 'pointer', fontSize: 16, lineHeight: 1 }}>→</button>
            </div>
          </div>
        ))}

        {/* Community photo */}
        <div style={{ gridColumn: 'span 2', gridRow: 'span 2', borderRadius: 6, overflow: 'hidden', position: 'relative', background: '#0E0F12' }}>
          <Img src="/photo-comments.jpg" alt="Community excitement — 'Love this place! Looking forward to spend some days there.'" loading="lazy" decoding="async" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', objectPosition: 'center 30%' }} />
          <div style={{ position: 'absolute', top: 14, left: 14, background: 'rgba(255,255,255,.92)', padding: '5px 10px', borderRadius: 999, fontSize: 10, letterSpacing: '.14em', textTransform: 'uppercase', fontWeight: 700, color: '#0E0F12' }}>BUILD-IN-PUBLIC · LIVE</div>
          <div style={{ position: 'absolute', left: 16, bottom: 14, right: 16, color: '#fff', fontFamily: 'var(--serif-italic)', fontStyle: 'italic', fontSize: 15, lineHeight: 1.35, textShadow: '0 1px 12px rgba(0,0,0,.7)' }}>"Love this place! Looking&nbsp;forward to spend some days there."</div>
        </div>
      </div>

      {/* Outcomes + CTA */}
      <div style={{ marginTop: 32, display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: 'var(--gap)', alignItems: 'end', borderTop: '1px solid var(--rule)', paddingTop: 32 }}>
        <div style={{ display: 'flex', gap: 'clamp(24px, 4vw, 64px)', flexWrap: 'wrap' }}>
          {stats.map((s, i) => (
            <div key={i}>
              <div className="display" style={{ fontSize: 'clamp(36px, 4vw, 60px)', lineHeight: 1, letterSpacing: '-.03em', marginBottom: 8 }}>{s.n}</div>
              <div style={{ fontSize: 12, letterSpacing: '.08em', textTransform: 'uppercase', fontWeight: 600, color: 'var(--ink-2)' }}>{s.l}</div>
            </div>
          ))}
        </div>
        <div style={{ textAlign: 'right' }}>
          <p style={{ margin: '0 0 16px 0', fontFamily: 'var(--serif-italic)', fontStyle: 'italic', fontSize: 'clamp(18px, 1.5vw, 22px)', color: 'var(--ink-2)', maxWidth: 380, marginLeft: 'auto', fontWeight: 400, lineHeight: 1.4 }}>
            Detailed curriculum, mentors, daily schedule, and outcomes — on the dedicated page.
          </p>
          <a href="bootcamp.html" style={{ display: 'inline-flex', alignItems: 'center', gap: 10, background: '#0E0F12', color: '#fff', padding: '16px 24px', borderRadius: 999, fontSize: 13, letterSpacing: '.1em', textTransform: 'uppercase', fontWeight: 700 }}>
            Explore the bootcamp{' '}
            <span style={{ background: '#56C1C4', color: '#0E0F12', borderRadius: 999, width: 24, height: 24, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontSize: 14 }}>→</span>
          </a>
        </div>
      </div>
    </div>
  </section>
);
