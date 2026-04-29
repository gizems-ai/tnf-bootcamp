import React from 'react';
import '../styles/tweaks.css';
import type { TweakDefaults } from '../types/host';

// ── useTweaks ────────────────────────────────────────────────────────────────

type SetTweak = {
  (key: keyof TweakDefaults, value: TweakDefaults[keyof TweakDefaults]): void;
  (edits: Partial<TweakDefaults>): void;
};

export function useTweaks(defaults: TweakDefaults): [TweakDefaults, SetTweak] {
  const [values, setValues] = React.useState<TweakDefaults>(defaults);

  const setTweak = React.useCallback<SetTweak>((keyOrEdits: unknown, val?: unknown) => {
    const edits: Partial<TweakDefaults> =
      typeof keyOrEdits === 'object' && keyOrEdits !== null
        ? (keyOrEdits as Partial<TweakDefaults>)
        : ({ [keyOrEdits as string]: val } as Partial<TweakDefaults>);
    setValues((prev) => ({ ...prev, ...edits }));
    window.parent.postMessage({ type: '__edit_mode_set_keys', edits }, '*');
  }, []);

  return [values, setTweak];
}

// ── TweaksPanel ──────────────────────────────────────────────────────────────

interface TweaksPanelProps {
  title?: string;
  children?: React.ReactNode;
}

export const TweaksPanel: React.FC<TweaksPanelProps> = ({
  title = 'Tweaks',
  children,
}) => {
  const [open, setOpen] = React.useState(false);
  const dragRef = React.useRef<HTMLDivElement>(null);
  const offsetRef = React.useRef({ x: 16, y: 16 });
  const PAD = 16;

  const clampToViewport = React.useCallback(() => {
    const panel = dragRef.current;
    if (!panel) return;
    const w = panel.offsetWidth;
    const h = panel.offsetHeight;
    const maxRight = Math.max(PAD, window.innerWidth - w - PAD);
    const maxBottom = Math.max(PAD, window.innerHeight - h - PAD);
    offsetRef.current = {
      x: Math.min(maxRight, Math.max(PAD, offsetRef.current.x)),
      y: Math.min(maxBottom, Math.max(PAD, offsetRef.current.y)),
    };
    panel.style.right = offsetRef.current.x + 'px';
    panel.style.bottom = offsetRef.current.y + 'px';
  }, []);

  React.useEffect(() => {
    if (!open) return;
    clampToViewport();
    if (typeof ResizeObserver === 'undefined') {
      window.addEventListener('resize', clampToViewport);
      return () => window.removeEventListener('resize', clampToViewport);
    }
    const ro = new ResizeObserver(clampToViewport);
    ro.observe(document.documentElement);
    return () => ro.disconnect();
  }, [open, clampToViewport]);

  React.useEffect(() => {
    const onMsg = (e: MessageEvent) => {
      const t = e?.data?.type;
      if (t === '__activate_edit_mode') setOpen(true);
      else if (t === '__deactivate_edit_mode') setOpen(false);
    };
    window.addEventListener('message', onMsg);
    window.parent.postMessage({ type: '__edit_mode_available' }, '*');
    return () => window.removeEventListener('message', onMsg);
  }, []);

  const dismiss = () => {
    setOpen(false);
    window.parent.postMessage({ type: '__edit_mode_dismissed' }, '*');
  };

  const onDragStart = (e: React.MouseEvent) => {
    const panel = dragRef.current;
    if (!panel) return;
    const r = panel.getBoundingClientRect();
    const sx = e.clientX;
    const sy = e.clientY;
    const startRight = window.innerWidth - r.right;
    const startBottom = window.innerHeight - r.bottom;
    const move = (ev: MouseEvent) => {
      offsetRef.current = {
        x: startRight - (ev.clientX - sx),
        y: startBottom - (ev.clientY - sy),
      };
      clampToViewport();
    };
    const up = () => {
      window.removeEventListener('mousemove', move);
      window.removeEventListener('mouseup', up);
    };
    window.addEventListener('mousemove', move);
    window.addEventListener('mouseup', up);
  };

  if (!open) return null;

  return (
    <div
      ref={dragRef}
      className="twk-panel"
      role="dialog"
      aria-label="Tweaks panel"
      aria-live="polite"
      style={{ right: offsetRef.current.x, bottom: offsetRef.current.y }}
    >
      <div className="twk-hd" onMouseDown={onDragStart}>
        <b>{title}</b>
        <button
          className="twk-x"
          aria-label="Close tweaks"
          onMouseDown={(e) => e.stopPropagation()}
          onClick={dismiss}
        >
          ✕
        </button>
      </div>
      <div className="twk-body">{children}</div>
    </div>
  );
};

// ── Layout helpers ────────────────────────────────────────────────────────────

interface TweakSectionProps {
  label: string;
  children?: React.ReactNode;
}

export const TweakSection: React.FC<TweakSectionProps> = ({ label, children }) => (
  <>
    <div className="twk-sect">{label}</div>
    {children}
  </>
);

interface TweakRowProps {
  label: string;
  value?: string | number;
  children?: React.ReactNode;
  inline?: boolean;
}

const TweakRow: React.FC<TweakRowProps> = ({ label, value, children, inline = false }) => (
  <div className={inline ? 'twk-row twk-row-h' : 'twk-row'}>
    <div className="twk-lbl">
      <span>{label}</span>
      {value != null && <span className="twk-val">{value}</span>}
    </div>
    {children}
  </div>
);

// ── Controls ──────────────────────────────────────────────────────────────────

interface TweakSliderProps {
  label: string;
  value: number;
  min?: number;
  max?: number;
  step?: number;
  unit?: string;
  onChange: (v: number) => void;
}

export const TweakSlider: React.FC<TweakSliderProps> = ({
  label, value, min = 0, max = 100, step = 1, unit = '', onChange,
}) => (
  <TweakRow label={label} value={`${value}${unit}`}>
    <input
      type="range"
      className="twk-slider"
      min={min} max={max} step={step} value={value}
      onChange={(e) => onChange(Number(e.target.value))}
    />
  </TweakRow>
);

interface TweakToggleProps {
  label: string;
  value: boolean;
  onChange: (v: boolean) => void;
}

export const TweakToggle: React.FC<TweakToggleProps> = ({ label, value, onChange }) => (
  <div className="twk-row twk-row-h">
    <div className="twk-lbl"><span>{label}</span></div>
    <button
      type="button"
      className="twk-toggle"
      data-on={value ? '1' : '0'}
      role="switch"
      aria-checked={!!value}
      onClick={() => onChange(!value)}
    >
      <i />
    </button>
  </div>
);

interface TweakOption {
  value: string;
  label: string;
}

interface TweakRadioProps {
  label?: string;
  value: string;
  options: (string | TweakOption)[];
  onChange: (v: string) => void;
}

export const TweakRadio: React.FC<TweakRadioProps> = ({ label, value, options, onChange }) => {
  const trackRef = React.useRef<HTMLDivElement>(null);
  const [dragging, setDragging] = React.useState(false);
  const opts = options.map((o) => (typeof o === 'object' ? o : { value: o, label: o }));
  const idx = Math.max(0, opts.findIndex((o) => o.value === value));
  const n = opts.length;
  const valueRef = React.useRef(value);
  valueRef.current = value;

  const segAt = (clientX: number): string => {
    const r = trackRef.current!.getBoundingClientRect();
    const inner = r.width - 4;
    const i = Math.floor(((clientX - r.left - 2) / inner) * n);
    return opts[Math.max(0, Math.min(n - 1, i))].value;
  };

  const onPointerDown = (e: React.PointerEvent) => {
    setDragging(true);
    const v0 = segAt(e.clientX);
    if (v0 !== valueRef.current) onChange(v0);
    const move = (ev: PointerEvent) => {
      if (!trackRef.current) return;
      const v = segAt(ev.clientX);
      if (v !== valueRef.current) onChange(v);
    };
    const up = () => {
      setDragging(false);
      window.removeEventListener('pointermove', move);
      window.removeEventListener('pointerup', up);
    };
    window.addEventListener('pointermove', move);
    window.addEventListener('pointerup', up);
  };

  const inner = (
    <div
      ref={trackRef}
      role="radiogroup"
      aria-label={label}
      onPointerDown={onPointerDown}
      className={dragging ? 'twk-seg dragging' : 'twk-seg'}
    >
      <div
        className="twk-seg-thumb"
        style={{
          left: `calc(2px + ${idx} * (100% - 4px) / ${n})`,
          width: `calc((100% - 4px) / ${n})`,
        }}
      />
      {opts.map((o) => (
        <button key={o.value} type="button" role="radio" aria-checked={o.value === value}>
          {o.label}
        </button>
      ))}
    </div>
  );

  return label ? <TweakRow label={label}>{inner}</TweakRow> : inner;
};

interface TweakSelectProps {
  label: string;
  value: string;
  options: (string | TweakOption)[];
  onChange: (v: string) => void;
}

export const TweakSelect: React.FC<TweakSelectProps> = ({ label, value, options, onChange }) => (
  <TweakRow label={label}>
    <select className="twk-field" value={value} onChange={(e) => onChange(e.target.value)}>
      {options.map((o) => {
        const v = typeof o === 'object' ? o.value : o;
        const l = typeof o === 'object' ? o.label : o;
        return <option key={v} value={v}>{l}</option>;
      })}
    </select>
  </TweakRow>
);

interface TweakTextProps {
  label: string;
  value: string;
  placeholder?: string;
  onChange: (v: string) => void;
}

export const TweakText: React.FC<TweakTextProps> = ({ label, value, placeholder, onChange }) => (
  <TweakRow label={label}>
    <input
      className="twk-field"
      type="text"
      value={value}
      placeholder={placeholder}
      onChange={(e) => onChange(e.target.value)}
    />
  </TweakRow>
);

interface TweakNumberProps {
  label: string;
  value: number;
  min?: number;
  max?: number;
  step?: number;
  unit?: string;
  onChange: (v: number) => void;
}

export const TweakNumber: React.FC<TweakNumberProps> = ({
  label, value, min, max, step = 1, unit = '', onChange,
}) => {
  const clamp = (n: number) => {
    if (min != null && n < min) return min;
    if (max != null && n > max) return max;
    return n;
  };
  const startRef = React.useRef({ x: 0, val: 0 });

  const onScrubStart = (e: React.PointerEvent) => {
    e.preventDefault();
    startRef.current = { x: e.clientX, val: value };
    const decimals = (String(step).split('.')[1] ?? '').length;
    const move = (ev: PointerEvent) => {
      const dx = ev.clientX - startRef.current.x;
      const raw = startRef.current.val + dx * step;
      const snapped = Math.round(raw / step) * step;
      onChange(clamp(Number(snapped.toFixed(decimals))));
    };
    const up = () => {
      window.removeEventListener('pointermove', move);
      window.removeEventListener('pointerup', up);
    };
    window.addEventListener('pointermove', move);
    window.addEventListener('pointerup', up);
  };

  return (
    <div className="twk-num">
      <span className="twk-num-lbl" onPointerDown={onScrubStart}>{label}</span>
      <input
        type="number"
        value={value}
        min={min}
        max={max}
        step={step}
        onChange={(e) => onChange(clamp(Number(e.target.value)))}
      />
      {unit && <span className="twk-num-unit">{unit}</span>}
    </div>
  );
};

interface TweakColorProps {
  label: string;
  value: string;
  onChange: (v: string) => void;
}

export const TweakColor: React.FC<TweakColorProps> = ({ label, value, onChange }) => (
  <div className="twk-row twk-row-h">
    <div className="twk-lbl"><span>{label}</span></div>
    <input
      type="color"
      className="twk-swatch"
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  </div>
);

interface TweakButtonProps {
  label: string;
  onClick: () => void;
  secondary?: boolean;
}

export const TweakButton: React.FC<TweakButtonProps> = ({ label, onClick, secondary = false }) => (
  <button
    type="button"
    className={secondary ? 'twk-btn secondary' : 'twk-btn'}
    onClick={onClick}
  >
    {label}
  </button>
);
