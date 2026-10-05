import React from 'react';
import {
  Sunrise, Mic, Laptop, Palmtree, MoonStar, Sparkles, Umbrella, Waves, Palette, Camera,
  Mountain, Sailboat, Sun, Sunset, Utensils, Music, Wine, PartyPopper,
  type LucideIcon,
} from 'lucide-react';
import { WEEK_DAYS, WEEK_SPANS, WEEK_LEGEND, type Tile, type TalkCard } from '../data/weekSchedule';

const ICONS: Record<string, LucideIcon> = {
  sunrise: Sunrise, mic: Mic, laptop: Laptop, palmtree: Palmtree, 'moon-star': MoonStar,
  sparkles: Sparkles, umbrella: Umbrella, waves: Waves, palette: Palette, camera: Camera,
  mountain: Mountain, sailboat: Sailboat, sun: Sun, sunset: Sunset, utensils: Utensils,
  music: Music, wine: Wine, 'party-popper': PartyPopper,
};

const ROWS = [
  { id: 'wellbeing', label: 'Wellbeing', Icon: Sunrise, big: false },
  { id: 'talks', label: 'Talks', Icon: Mic, big: true },
  { id: 'labs', label: 'Build Labs', Icon: Laptop, big: false },
  { id: 'afternoon', label: 'Afternoon', Icon: Palmtree, big: false },
  { id: 'evening', label: 'Evening', Icon: MoonStar, big: false },
] as const;

const dayNum = (iso: string) => String(Number(iso.slice(8)));
const SPAN = WEEK_SPANS[0]!;
const spanIdx = (iso: string) => WEEK_DAYS.findIndex((d) => d.date === iso);

const TileView: React.FC<{ t: Tile; wellbeing?: boolean }> = ({ t, wellbeing }) => {
  const Icon = t.icon ? ICONS[t.icon] : undefined;
  const tone = wellbeing ? 'yellow' : t.tone ?? 'neutral';
  return (
    <div className={`wk-tile ${tone}`}>
      {Icon && <Icon aria-hidden="true" />}
      <span className="t">{t.title}</span>
      {t.time && <span className="tm">{t.time}</span>}
    </div>
  );
};

const TalkView: React.FC<{ t: TalkCard }> = ({ t }) => (
  <div className={`wk-talk ${t.variant}`}>
    <span className="k">
      {t.title}
      {t.numeral && <em>{t.numeral}</em>}
    </span>
    <span className="s">
      {t.lines.map((l, i) => (
        <React.Fragment key={i}>{i > 0 && <br />}{l}</React.Fragment>
      ))}
    </span>
  </div>
);

/** Desktop: the 8-day × 5-row grid, rendered from src/data/weekSchedule.ts. */
const Grid: React.FC = () => {
  const from = spanIdx(SPAN.from);
  const to = spanIdx(SPAN.to);
  return (
    <div className="wk-grid" role="table" aria-label="Festival week at a glance, 18–25 October 2026">
      <div className="wk-corner" />
      {WEEK_DAYS.map((d, i) => (
        <div className={`wk-hd${i === WEEK_DAYS.length - 1 ? ' lc' : ''}`} key={d.date}><span className="n">{dayNum(d.date)}</span><span className="d">{d.dow}</span></div>
      ))}

      {ROWS.map(({ id, label, Icon, big }) => (
        <React.Fragment key={id}>
          <div className={`wk-rl${big ? ' big' : ''}${id === 'evening' ? ' lr' : ''}`}><Icon aria-hidden="true" /><span>{label}</span></div>
          {id === 'labs' ? (
            WEEK_DAYS.map((d, i) => {
              if (i === from) {
                const SIcon = ICONS[SPAN.icon];
                return (
                  <div className="wk-cell wk-labs" key={d.date} style={{ gridColumn: `span ${to - from + 1}` }}>
                    <div className="wk-bar">{SIcon && <SIcon aria-hidden="true" />}{SPAN.title}<i>{SPAN.subtitle}</i></div>
                  </div>
                );
              }
              if (i > from && i <= to) return null;
              return <div className={`wk-cell wk-empty${i === 7 ? ' lc' : ''}`} key={d.date} />;
            })
          ) : (
            WEEK_DAYS.map((d, i) => {
              const c = `wk-cell${i === 7 ? ' lc' : ''}${id === 'evening' ? ' lr' : ''}`;
              if (id === 'talks') return <div className={c} key={d.date}><TalkView t={d.talks} /></div>;
              const t = id === 'wellbeing' ? d.wellbeing : id === 'afternoon' ? d.afternoon : d.evening;
              return t
                ? <div className={c} key={d.date}><TileView t={t} wellbeing={id === 'wellbeing'} /></div>
                : <div className={`${c} wk-empty`} key={d.date} />;
            })
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

/** Below 1200px: one card per day, Talk entry dominant. */
const Stack: React.FC = () => (
  <div className="wk-stack">
    {WEEK_DAYS.map((d) => {
      const inLabs = d.date >= SPAN.from && d.date <= SPAN.to;
      return (
        <article className="wk-day" key={d.date}>
          <header><span className="n">{dayNum(d.date)}</span><span className="d">{d.dow}</span></header>
          <div className="wk-day-body">
            <div className="wk-day-row"><span className="lbl">Wellbeing</span><TileView t={d.wellbeing} wellbeing /></div>
            <div className="wk-day-row talk"><span className="lbl">Talks</span><TalkView t={d.talks} /></div>
            {inLabs && (
              <div className="wk-day-row"><span className="lbl">Build Labs</span>
                <div className="wk-bar">{(() => { const I = ICONS[SPAN.icon]; return I ? <I aria-hidden="true" /> : null; })()}{SPAN.title}<i>{SPAN.subtitle}</i></div>
              </div>
            )}
            <div className="wk-day-row"><span className="lbl">Afternoon</span><TileView t={d.afternoon} /></div>
            {d.evening && <div className="wk-day-row"><span className="lbl">Evening</span><TileView t={d.evening} /></div>}
          </div>
        </article>
      );
    })}
  </div>
);

export const WeekProgram: React.FC = () => (
  <section
    id="week-program"
    style={{
      paddingTop: 'var(--pad-section)',
      paddingBottom: 'var(--pad-section)',
      paddingLeft: 'var(--pad-x)',
      paddingRight: 'var(--pad-x)',
      background: 'var(--paper)',
      color: 'var(--ink)',
      borderTop: '1px solid var(--rule)',
    }}
  >
    <div className="wrap">
      <div
        className="hp-prog-head"
        style={{
          display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--gap)',
          alignItems: 'end', marginBottom: 'clamp(32px, 4vw, 56px)',
        }}
      >
        <div>
          <div className="eyebrow" style={{ marginBottom: 20 }}>◐ Week Program</div>
          <h2
            className="display"
            style={{ margin: 0, fontSize: 'clamp(40px, 5.6vw, 88px)', lineHeight: .9, letterSpacing: '-.04em' }}
          >
            Your festival{' '}
            <em
              style={{
                fontFamily: 'var(--serif-italic)', fontStyle: 'italic', fontWeight: 400,
                background: 'var(--grad-cool)',
                WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent',
                paddingRight: '.05em',
              }}
            >
              week.
            </em>
          </h2>
        </div>
        <p style={{ margin: 0, maxWidth: 460, fontSize: 17, lineHeight: 1.6, color: 'var(--ink-2)' }}>
          18–25 October 2026 · Alanya, Anjeliq Downtown. Mornings for wellbeing, days for talks and the AI
          bootcamp, afternoons to explore, evenings to gather.
        </p>
      </div>

      <div className="wk-wrap">
        <div className="wk-desktop"><Grid /></div>
        <div className="wk-mobile"><Stack /></div>
        <div className="wk-legend">
          {WEEK_LEGEND.map((l) => (
            <div key={l.label}><span className={`sw ${l.swatch}`} /><b>{l.label}</b><span className="note">{l.note}</span></div>
          ))}
        </div>
      </div>
    </div>
  </section>
);
