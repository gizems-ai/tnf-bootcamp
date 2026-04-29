import React from 'react';

// ── LogoMark ────────────────────────────────────────────────────────────────

interface LogoMarkProps {
  size?: number;
  color?: 'currentColor' | 'paper';
  style?: React.CSSProperties;
}

export const LogoMark: React.FC<LogoMarkProps> = ({
  size = 48,
  color = 'currentColor',
  style,
}) => (
  <img
    src={`/logo-mark-inline.png`}
    width={size}
    height={Math.round((size * 522) / 554)}
    alt=""
    aria-hidden="true"
    style={{
      filter: color === 'paper' ? 'invert(1) brightness(2)' : 'none',
      ...style,
    }}
  />
);

// ── Wordmark ─────────────────────────────────────────────────────────────────

interface WordmarkProps {
  size?: number;
  tone?: 'ink' | 'paper';
}

export const Wordmark: React.FC<WordmarkProps> = ({ size = 14, tone = 'ink' }) => (
  <span
    style={{
      fontFamily: 'var(--sans)',
      fontWeight: 600,
      fontSize: size,
      letterSpacing: '.18em',
      textTransform: 'uppercase',
      color: tone === 'paper' ? 'var(--paper)' : 'var(--ink)',
      lineHeight: 1,
      whiteSpace: 'nowrap',
    }}
  >
    Turkiye <span style={{ opacity: 0.55 }}>·</span> Nomad Fest
  </span>
);

// ── Lockup ───────────────────────────────────────────────────────────────────

interface LockupProps {
  markSize?: number;
  gap?: number;
  tone?: 'ink' | 'paper';
}

export const Lockup: React.FC<LockupProps> = ({
  markSize = 40,
  gap = 14,
  tone = 'ink',
}) => (
  <div style={{ display: 'flex', alignItems: 'center', gap }}>
    <LogoMark size={markSize} color={tone === 'paper' ? 'paper' : 'currentColor'} />
    <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
      <Wordmark size={11} tone={tone} />
      <span
        style={{
          fontFamily: 'var(--serif-italic)',
          fontStyle: 'italic',
          fontSize: 12,
          letterSpacing: '-.005em',
          color:
            tone === 'paper' ? 'rgba(246,241,232,.7)' : 'rgba(31,31,31,.6)',
          lineHeight: 1,
        }}
      >
        Alanya, MMXXVI
      </span>
    </div>
  </div>
);

// ── SectionBreak ─────────────────────────────────────────────────────────────

interface SectionBreakProps {
  left?: string;
  mid?: string;
  right?: string;
  watermark?: boolean;
  tone?: 'paper' | 'warm' | 'sand';
}

export const SectionBreak: React.FC<SectionBreakProps> = ({
  left = '◐',
  mid = '',
  right = 'Turkiye Nomad Fest · Alanya',
  watermark = true,
  tone = 'paper',
}) => {
  const bg =
    tone === 'warm'
      ? 'var(--paper-2)'
      : tone === 'sand'
      ? 'var(--paper-3, #ECE7DD)'
      : 'var(--paper)';

  return (
    <div
      style={{
        position: 'relative',
        padding: 'clamp(56px, 8vw, 110px) var(--pad-x)',
        background: bg,
        borderTop: '1px solid var(--rule)',
        borderBottom: '1px solid var(--rule)',
        overflow: 'hidden',
      }}
    >
      {watermark && (
        <div
          aria-hidden="true"
          style={{
            position: 'absolute',
            inset: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            pointerEvents: 'none',
          }}
        >
          <img
            src="/logo-mark-inline.png"
            alt=""
            style={{
              width: 'min(420px, 60vw)',
              height: 'auto',
              opacity: 0.045,
              animation: 'tnf-spin 120s linear infinite',
            }}
          />
        </div>
      )}

      <div
        className="wrap"
        style={{
          position: 'relative',
          display: 'flex',
          alignItems: 'center',
          gap: 'clamp(20px, 3vw, 40px)',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 14,
            fontSize: 11,
            letterSpacing: '.2em',
            textTransform: 'uppercase',
            fontWeight: 700,
            color: 'var(--ink)',
          }}
        >
          <img
            src="/logo-mark-inline.png"
            alt=""
            aria-hidden="true"
            style={{ width: 28, height: 'auto', opacity: 0.85 }}
          />
          <span>{left}</span>
        </div>

        <div style={{ flex: 1, height: 1, background: 'var(--rule)' }} />

        {mid && (
          <div
            style={{
              fontFamily: 'var(--serif-italic)',
              fontStyle: 'italic',
              fontSize: 'clamp(18px, 2vw, 26px)',
              fontWeight: 400,
              background: 'var(--grad-cool)',
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
              color: 'transparent',
              textAlign: 'center',
              whiteSpace: 'nowrap',
              padding: '0 8px',
            }}
          >
            {mid}
          </div>
        )}

        <div style={{ flex: 1, height: 1, background: 'var(--rule)' }} />

        <div
          style={{
            fontFamily: 'ui-monospace, monospace',
            fontSize: 10,
            letterSpacing: '.14em',
            textTransform: 'uppercase',
            color: 'var(--ink-2)',
            opacity: 0.7,
          }}
        >
          {right}
        </div>
      </div>

      <style>{`@keyframes tnf-spin { to { transform: rotate(360deg); } }`}</style>
    </div>
  );
};
