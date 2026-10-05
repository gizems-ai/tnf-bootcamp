import React from 'react';
import { Lockup } from './Shell';

const CTA = 'https://www.eventzilla.net/e/turkiye-nomad-fest--alanya-2026-2138676905';
const SPEAKER_FORM = 'https://docs.google.com/forms/d/11OIQUulX830MhIs7KFABtXLAcN3VY1fSgQOnsHxv_9I/viewform';

const navCols = [
  {
    t: 'Explore',
    l: [
      { label: 'Manifesto', href: '/#about' },
      { label: 'Anatolian Roots', href: '/#roots' },
      { label: 'Why Alanya', href: '/alanya' },
      { label: 'Program', href: '/program' },
    ],
  },
  {
    t: 'Join',
    l: [
      { label: 'Tickets', href: CTA, external: true },
      { label: 'Speakers', href: '/speakers' },
      { label: 'Speak at TNF', href: SPEAKER_FORM, external: true },
      { label: 'Sponsors', href: '#' },
    ],
  },
  {
    t: 'Stay close',
    l: [
      { label: 'Newsletter', href: '#' },
      { label: 'Instagram', href: 'https://www.instagram.com/turkiye.nomadfest/', external: true },
      { label: 'LinkedIn', href: 'https://www.linkedin.com/company/nomad-fest-turkiye/', external: true },
      { label: 'Telegram', href: '#' },
    ],
  },
];

export const Footer: React.FC = () => (
  <footer
    id="join"
    className="hp-footer"
    style={{
      background: 'var(--ink)', color: 'var(--paper)',
      paddingTop: 'var(--pad-section)', paddingBottom: 56,
      paddingLeft: 'var(--pad-x)', paddingRight: 'var(--pad-x)',
      position: 'relative', overflow: 'hidden',
    }}
  >
    <div className="wrap">
      {/* Gradient strip */}
      <div
        style={{
          height: 4, marginBottom: 80, borderRadius: 2,
          background: 'linear-gradient(90deg, var(--sky), var(--aqua), var(--turq), var(--pink), var(--yellow))',
        }}
      />

      {/* Final call CTA */}
      <div
        className="hp-footer-cta"
        style={{
          display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--gap)',
          alignItems: 'end', marginBottom: 'clamp(60px, 8vw, 120px)',
        }}
      >
        <div>
          <div className="eyebrow" style={{ color: 'var(--turq)', marginBottom: 28 }}>
            ◐ Final Call
          </div>
          <h2
            className="display"
            style={{
              margin: 0,
              fontSize: 'clamp(36px, 5.2vw, 88px)',
              lineHeight: 0.92, letterSpacing: '-.04em',
              color: 'var(--paper)',
            }}
          >
            Build your
            <br />
            <em
              style={{
                fontFamily: 'var(--serif-italic)', fontStyle: 'italic', fontWeight: 400,
                background: 'linear-gradient(135deg, #56C1C4, #C6A6D8 60%, #F3A6C8)',
                WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent',
              }}
            >
              solopreneur life.
            </em>
            <br />
            Join our
            <br />
            <span style={{ color: 'var(--turq)' }}>temporary village.</span>
          </h2>
        </div>
        <div>
          <p
            style={{
              fontFamily: 'var(--serif)', fontStyle: 'italic',
              fontSize: 'clamp(20px, 2vw, 28px)', lineHeight: 1.45, margin: 0,
              color: 'rgba(246,241,232,.9)', maxWidth: 480, fontWeight: 800,
            }}
          >
            You don't just attend.
            <br />
            You join. You build. You belong.
          </p>

          <div style={{ marginTop: 40, display: 'flex', gap: 14, flexWrap: 'wrap' }}>
            <a
              href={CTA}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                background: 'var(--turq)', color: 'var(--ink)',
                padding: '18px 28px', borderRadius: 999,
                fontWeight: 600, fontSize: 13, letterSpacing: '.1em',
                textTransform: 'uppercase', textDecoration: 'none',
              }}
            >
              Join the fest →
            </a>
            <a
              href="/speakers"
              style={{
                border: '1px solid rgba(246,241,232,.3)', color: 'var(--paper)',
                padding: '18px 28px', borderRadius: 999,
                fontSize: 13, letterSpacing: '.1em', textTransform: 'uppercase',
                textDecoration: 'none',
              }}
            >
              Meet the speakers
            </a>
            <a
              href={SPEAKER_FORM}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                border: '1px solid rgba(246,241,232,.3)', color: 'var(--paper)',
                padding: '18px 28px', borderRadius: 999,
                fontSize: 13, letterSpacing: '.1em', textTransform: 'uppercase',
                textDecoration: 'none',
              }}
            >
              Speak at TNF
            </a>
          </div>

          <div
            style={{
              marginTop: 28,
              fontFamily: 'ui-monospace, monospace',
              fontSize: 12, color: 'rgba(246,241,232,.55)',
            }}
          >
            October 18 — 25, 2026 · Anjeliq Downtown Hotel, Alanya
          </div>
        </div>
      </div>

      {/* Meta band */}
      <div
        className="hp-footer-meta"
        style={{
          borderTop: '1px solid rgba(246,241,232,.15)',
          paddingTop: 40,
          display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', gap: 32,
          alignItems: 'start',
        }}
      >
        <div>
          <Lockup markSize={44} tone="paper" sub="Alanya, Anjeliq Hotels — Oct 18–25, 2026" />
          <p
            style={{
              marginTop: 24, maxWidth: 380, fontSize: 13,
              color: 'rgba(246,241,232,.55)', lineHeight: 1.6,
            }}
          >
            Curated by people who live the lifestyle. We don't build events.
            We build your <em>temporary village</em>.
          </p>
        </div>
        {navCols.map((c, i) => (
          <div key={i}>
            <div className="eyebrow" style={{ color: 'var(--turq)', marginBottom: 16 }}>{c.t}</div>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 8 }}>
              {c.l.map((link, j) => (
                <li key={j} style={{ fontSize: 14, color: 'rgba(246,241,232,.78)' }}>
                  <a
                    href={link.href}
                    target={(link as { external?: boolean }).external ? '_blank' : undefined}
                    rel={(link as { external?: boolean }).external ? 'noopener noreferrer' : undefined}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Legal row */}
      <div
        className="hp-footer-legal"
        style={{
          marginTop: 56, paddingTop: 24,
          borderTop: '1px solid rgba(246,241,232,.12)',
          display: 'flex', justifyContent: 'space-between',
          fontFamily: 'ui-monospace, monospace', fontSize: 11,
          color: 'rgba(246,241,232,.45)',
        }}
      >
        <span>© MMXXVI Turkiye Nomad Fest</span>
        <span>Made by the village, for the village</span>
        <span>Freedom · Connection · Growth</span>
      </div>
    </div>
  </footer>
);
