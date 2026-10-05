import React from 'react';

interface InnerDividerProps {
  tone?: 'paper' | 'warm' | 'sand' | 'ink';
  left?: string;
  mid?: string;
  right?: string;
}

export const InnerDivider: React.FC<InnerDividerProps> = ({
  tone = 'paper',
  left = '◐',
  mid = '',
  right = 'Turkiye Nomad Fest · Alanya',
}) => {
  const cls = tone === 'paper' ? 'tnf-divider' : `tnf-divider ${tone}`;
  return (
    <div className={cls}>
      <div className="wrap">
        <div className="stamp">
          <img
            src="/logo-mark-inline.png"
            alt=""
            aria-hidden="true"
            style={{
              filter: tone === 'ink' ? 'invert(1) brightness(2)' : 'none',
              animation: 'tnf-spin 60s linear infinite',
            }}
          />
          <span>{left}</span>
        </div>
        <div className="line" />
        {mid && (
          <div
            style={{
              fontFamily: 'var(--serif-italic)',
              fontStyle: 'italic',
              fontSize: 'clamp(20px, 2.4vw, 32px)',
              fontWeight: 400,
              background:
                tone === 'ink'
                  ? 'linear-gradient(135deg, #56C1C4, #C6A6D8 60%, #F3A6C8)'
                  : 'var(--grad-cool)',
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
              color: 'transparent',
              textAlign: 'center',
              whiteSpace: 'nowrap',
            }}
          >
            {mid}
          </div>
        )}
        <div className="line" />
        <div className="meta">{right}</div>
      </div>
      <style>{`@keyframes tnf-spin { to { transform: rotate(360deg); } }`}</style>
    </div>
  );
};
