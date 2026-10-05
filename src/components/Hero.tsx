import React from 'react';
import { Img } from './Img';

const CTA = 'https://www.eventzilla.net/e/turkiye-nomad-fest--alanya-2026-2138676905';
const SPEAKER_FORM = 'https://docs.google.com/forms/d/11OIQUulX830MhIs7KFABtXLAcN3VY1fSgQOnsHxv_9I/viewform';

const Stat: React.FC<{ label: string; value: string }> = ({ label, value }) => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: 4, lineHeight: 1.2 }}>
    <span
      style={{
        fontFamily: 'ui-monospace, SFMono-Regular, Menlo, monospace',
        fontSize: 10, letterSpacing: '.22em', textTransform: 'uppercase',
        color: 'var(--ink-2)', fontWeight: 600,
      }}
    >
      {label}
    </span>
    <span
      style={{
        fontFamily: 'var(--sans)', fontWeight: 700,
        fontSize: 'clamp(14px, 1.05vw, 16px)', letterSpacing: '-.005em',
        color: 'var(--ink)',
      }}
    >
      {value}
    </span>
  </div>
);

const DateStamp: React.FC = () => (
  <div
    style={{
      width: 200, height: 200, borderRadius: 999,
      display: 'flex', flexDirection: 'column',
      alignItems: 'center', justifyContent: 'center',
      textAlign: 'center', position: 'relative',
      background: 'var(--grad-cool)', color: '#fff',
      boxShadow: '0 30px 60px -20px rgba(91,116,230,.45)',
    }}
  >
    <div
      style={{
        fontFamily: 'var(--sans)', fontWeight: 800,
        fontSize: 14, letterSpacing: '.22em', textTransform: 'uppercase',
        marginBottom: 6, opacity: 0.9,
      }}
    >
      October
    </div>
    <div
      style={{
        fontFamily: 'var(--sans)', fontWeight: 900,
        fontSize: 76, lineHeight: 1, letterSpacing: '-.05em',
      }}
    >
      2026
    </div>
    <div
      style={{
        fontFamily: 'var(--sans)', fontWeight: 600,
        fontSize: 12, letterSpacing: '.16em', textTransform: 'uppercase',
        marginTop: 10, opacity: 0.92,
      }}
    >
      18 — 25 · Alanya
    </div>

    {/* Rotating ring of text */}
    <svg
      viewBox="0 0 320 320"
      aria-hidden="true"
      style={{
        position: 'absolute', inset: -32,
        width: 264, height: 264,
        animation: 'hp-spin 32s linear infinite',
        pointerEvents: 'none',
      }}
    >
      <defs>
        <path id="circ-ring" d="M 160,160 m -140,0 a 140,140 0 1,1 280,0 a 140,140 0 1,1 -280,0" />
      </defs>
      <text
        style={{
          fontFamily: 'var(--sans)', fontSize: 11, letterSpacing: '.32em',
          textTransform: 'uppercase', fill: 'var(--ink)', fontWeight: '600',
        } as React.CSSProperties}
      >
        <textPath href="#circ-ring">
          · Turkiye Nomad Fest 2026 · Alanya · Mediterranean Coast · Eight Days One Village
        </textPath>
      </text>
    </svg>
  </div>
);

export const Hero: React.FC = () => (
  <section
    style={{
      paddingTop: 28,
      paddingBottom: 'clamp(40px, 6vw, 96px)',
      paddingLeft: 'var(--pad-x)',
      paddingRight: 'var(--pad-x)',
      position: 'relative',
      overflow: 'hidden',
    }}
  >
    <div className="wrap">
      {/* Edition info band */}
      <div className="hp-edition-band">
        <div
          style={{
            display: 'inline-flex', alignItems: 'center', gap: 10,
            padding: '8px 14px', borderRadius: 999,
            background: 'var(--ink)', color: 'var(--paper)',
            fontFamily: 'var(--sans)', fontWeight: 700,
            fontSize: 11, letterSpacing: '.22em', textTransform: 'uppercase',
            lineHeight: 1,
          }}
        >
          <span style={{ width: 6, height: 6, borderRadius: 999, background: 'var(--turq)' }} />
          ◐ The Second Edition
        </div>

        <div
          style={{
            display: 'flex', alignItems: 'center',
            gap: 'clamp(24px, 3vw, 44px)',
            marginLeft: 'auto', flexWrap: 'wrap',
          }}
        >
          <Stat label="When" value="18 — 25 Oct 2026" />
          <Stat label="Where" value="Alanya · Türkiye" />
          <Stat label="Venue" value="Anjeliq Downtown Hotel" />
        </div>
      </div>

      {/* Headline + key visual */}
      <div
        className="hp-hero-grid"
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 'clamp(20px, 3vw, 48px)',
          alignItems: 'stretch',
          position: 'relative',
        }}
      >
        {/* Left: headline column */}
        <div style={{ position: 'relative', paddingTop: 12, display: 'flex', flexDirection: 'column', minHeight: 620 }}>
          <h1
            className="display"
            style={{
              margin: 0,
              fontSize: 'clamp(48px, 7.4vw, 118px)',
              lineHeight: 0.92,
              letterSpacing: '-0.045em',
              fontWeight: 800,
            }}
          >
            A temporary village
            <br />
            by the{' '}
            <em
              style={{
                fontFamily: 'var(--serif-italic)',
                fontStyle: 'italic',
                fontWeight: 400,
                background: 'var(--grad-warm)',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                color: 'transparent',
              }}
            >
              Mediterranean.
            </em>
          </h1>

          <p
            style={{
              marginTop: 28,
              fontFamily: 'var(--sans)', fontWeight: 500,
              fontSize: 'clamp(16px, 1.15vw, 18px)',
              lineHeight: 1.55, maxWidth: 460,
              color: 'var(--ink-2)',
            }}
          >
            For solopreneurs, builders and modern nomads.
          </p>

          {/* Freedom. Connection. Growth. */}
          <div
            style={{
              marginTop: 'clamp(28px, 3.4vw, 48px)',
              fontFamily: 'var(--sans)', fontWeight: 800,
              fontSize: 'clamp(34px, 4.4vw, 64px)',
              lineHeight: 1.02, letterSpacing: '-.035em',
              color: 'var(--ink)',
            }}
          >
            <span>Freedom.</span>
            <br />
            <span style={{ color: 'var(--turq-deep)' }}>Connection.</span>
            <br />
            <span
              style={{
                background: 'var(--grad-cool)',
                WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent',
              }}
            >
              Growth.
            </span>
          </div>

          {/* CTA pinned to bottom */}
          <div
            style={{
              marginTop: 'auto',
              paddingTop: 'clamp(28px, 3vw, 40px)',
              display: 'flex', flexDirection: 'column', gap: 14, alignItems: 'flex-start',
            }}
          >
            <a
              href={CTA}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                background: 'var(--ink)', color: 'var(--paper)',
                padding: '20px 32px', borderRadius: 999,
                fontSize: 14, letterSpacing: '.12em', textTransform: 'uppercase',
                fontWeight: 700, lineHeight: 1,
              }}
            >
              Join the Fest →
            </a>
            <a
              href={SPEAKER_FORM}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                background: 'var(--turq)', color: 'var(--ink)',
                padding: '20px 32px', borderRadius: 999,
                fontSize: 14, letterSpacing: '.12em', textTransform: 'uppercase',
                fontWeight: 700, lineHeight: 1,
              }}
            >
              Apply to be a Speaker →
            </a>
          </div>
        </div>

        {/* Right: hero photo + rotating stamp */}
        <div
          style={{
            position: 'relative', minHeight: 620,
            borderRadius: 4, overflow: 'hidden',
            background: 'var(--paper-2)',
          }}
        >
          <Img
            src="/photo-castle-sea.jpg"
            alt="Alanya castle walls meet the turquoise Mediterranean at dusk"
            loading="eager"
            decoding="async"
            fetchPriority="high"
            style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 30%', display: 'block' }}
          />

          {/* Rotating date stamp */}
          <div
            style={{
              position: 'absolute',
              top: 'clamp(52px, 5vw, 88px)',
              left: 'clamp(52px, 5vw, 88px)',
              zIndex: 2,
            }}
          >
            <DateStamp />
          </div>

          {/* Mono caption overlay */}
          <div
            style={{
              position: 'absolute', left: 18, bottom: 18,
              fontFamily: 'ui-monospace, monospace', fontSize: 11,
              color: '#fff', textShadow: '0 1px 8px rgba(0,0,0,.5)',
              letterSpacing: '.08em', textTransform: 'uppercase',
            }}
          >
            ◐ Alanya Castle · Mediterranean Coast · October
          </div>
          <div
            style={{
              position: 'absolute', right: 18, top: 18,
              fontFamily: 'ui-monospace, monospace', fontSize: 11,
              color: 'rgba(255,255,255,.95)', textShadow: '0 1px 8px rgba(0,0,0,.5)',
            }}
          >
            01 / 24
          </div>
        </div>
      </div>

      {/* About copy band */}
      <div
        style={{
          marginTop: 'clamp(56px, 7vw, 96px)',
          paddingTop: 'clamp(40px, 5vw, 64px)',
          borderTop: '1px solid var(--rule)',
        }}
      >
        <p
          style={{
            margin: 0,
            fontFamily: 'var(--sans)', fontWeight: 500,
            fontSize: 'clamp(22px, 2.2vw, 36px)',
            lineHeight: 1.4, letterSpacing: '-.015em',
            color: 'var(--ink)',
          }}
        >
          After an unforgettable first edition, Turkiye Nomad Fest is back —{' '}
          <em
            style={{
              fontFamily: 'var(--serif-italic)', fontStyle: 'italic', fontWeight: 400,
              background: 'var(--grad-cool)',
              WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent',
            }}
          >
            bigger, deeper, more intentional.
          </em>{' '}
          This is not just another conference. It's a temporary village by the Mediterranean,
          where digital nomads, solopreneurs, remote professionals, founders, creators, and
          ecosystem builders come together to{' '}
          <strong style={{ color: 'var(--ink)', fontWeight: 700 }}>
            rethink how we live, work, and build.
          </strong>{' '}
          <span
            style={{
              fontFamily: 'var(--serif)', fontStyle: 'italic', fontWeight: 800,
              color: 'var(--turq-deep)',
            }}
          >
            For a week in Alanya, we slow down to speed up what truly matters.
          </span>
        </p>

        <div
          style={{
            marginTop: 32,
            display: 'flex', alignItems: 'center', justifyContent: 'space-between',
            flexWrap: 'wrap', gap: 16,
          }}
        >
          <div
            style={{
              display: 'inline-flex', alignItems: 'center', gap: 12,
              padding: '10px 16px', borderRadius: 999,
              background: 'var(--paper-2)',
              fontFamily: 'ui-monospace, SFMono-Regular, Menlo, monospace',
              fontSize: 11, letterSpacing: '.14em', textTransform: 'uppercase',
              color: 'var(--ink-2)', fontWeight: 600,
            }}
          >
            <span
              style={{
                width: 6, height: 6, borderRadius: 999,
                background: 'var(--turq)',
                boxShadow: '0 0 0 4px rgba(86,193,196,.18)',
              }}
            />
            First 2026 speakers announced — full program soon
          </div>
          <div
            style={{
              fontFamily: 'ui-monospace, monospace',
              fontSize: 11, letterSpacing: '.14em', textTransform: 'uppercase',
              color: 'var(--ink-2)', fontWeight: 600,
            }}
          >
            ◐ N° 02 · MMXXVI · Alanya
          </div>
        </div>
      </div>
    </div>
  </section>
);
