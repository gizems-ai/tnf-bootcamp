import React from 'react';

type Palette = 'sea' | 'sunset' | 'sand' | 'castle' | 'dawn' | 'noon';

const PALETTES: Record<Palette, [string, string, string]> = {
  sea:    ['#56C1C4', '#8FD0CF', '#5B74E6'],
  sunset: ['#F3A6C8', '#E6E7A3', '#C6A6D8'],
  sand:   ['#E6E7A3', '#F3A6C8', '#8FD0CF'],
  castle: ['#C6A6D8', '#5B74E6', '#1F1F1F'],
  dawn:   ['#8FD0CF', '#C6A6D8', '#F3A6C8'],
  noon:   ['#56C1C4', '#E6E7A3', '#F3A6C8'],
};

interface PhotoProps {
  caption?: string;
  num?: string;
  palette?: Palette;
  ratio?: string;
  style?: React.CSSProperties;
  rounded?: number;
  children?: React.ReactNode;
}

export const Photo: React.FC<PhotoProps> = ({
  caption = 'Mediterranean photograph',
  num,
  palette = 'sea',
  ratio = '4 / 5',
  style,
  rounded = 0,
  children,
}) => {
  const cols = PALETTES[palette] ?? PALETTES.sea;
  const id = React.useId().replace(/:/g, '_');
  const showHorizon = palette === 'sea' || palette === 'noon' || palette === 'dawn';

  return (
    <div className="photo" style={{ aspectRatio: ratio, borderRadius: rounded, ...style }}>
      <svg
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        aria-hidden="true"
        style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}
      >
        <defs>
          <radialGradient id={`g1-${id}`} cx="20%" cy="25%" r="80%">
            <stop offset="0%" stopColor={cols[0]} stopOpacity="1" />
            <stop offset="100%" stopColor={cols[0]} stopOpacity="0" />
          </radialGradient>
          <radialGradient id={`g2-${id}`} cx="80%" cy="80%" r="80%">
            <stop offset="0%" stopColor={cols[1]} stopOpacity="1" />
            <stop offset="100%" stopColor={cols[1]} stopOpacity="0" />
          </radialGradient>
          <radialGradient id={`g3-${id}`} cx="60%" cy="20%" r="60%">
            <stop offset="0%" stopColor={cols[2]} stopOpacity=".8" />
            <stop offset="100%" stopColor={cols[2]} stopOpacity="0" />
          </radialGradient>
          <filter id={`grain-${id}`}>
            <feTurbulence type="fractalNoise" baseFrequency="2.2" numOctaves="2" seed={id.length} />
            <feColorMatrix values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 .12 0" />
            <feComposite in2="SourceGraphic" operator="in" />
          </filter>
        </defs>
        <rect width="100" height="100" fill={cols[1]} opacity=".35" />
        <rect width="100" height="100" fill={`url(#g1-${id})`} />
        <rect width="100" height="100" fill={`url(#g2-${id})`} />
        <rect width="100" height="100" fill={`url(#g3-${id})`} />
        {showHorizon && (
          <line x1="0" y1="58" x2="100" y2="58" stroke="rgba(31,31,31,.18)" strokeWidth=".15" />
        )}
        <rect width="100" height="100" filter={`url(#grain-${id})`} />
      </svg>

      <div
        style={{
          position: 'absolute',
          left: 14,
          bottom: 12,
          fontFamily: 'ui-monospace, SFMono-Regular, Menlo, monospace',
          fontSize: 10,
          letterSpacing: '.08em',
          color: 'rgba(31,31,31,.7)',
          textTransform: 'uppercase',
          maxWidth: '75%',
        }}
      >
        ◐ {caption}
      </div>

      {num && (
        <div
          style={{
            position: 'absolute',
            right: 14,
            top: 12,
            fontFamily: 'ui-monospace, SFMono-Regular, Menlo, monospace',
            fontSize: 10,
            color: 'rgba(31,31,31,.55)',
          }}
        >
          {num}
        </div>
      )}

      {children}
    </div>
  );
};
