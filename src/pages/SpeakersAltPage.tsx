import React from 'react';
import '../styles/speakers.css';
import '../styles/speakers-alt.css';
import { useSEO } from '../hooks/useSEO';
import { InnerHeader } from '../components/InnerHeader';
import { InnerFooter } from '../components/InnerFooter';
import { InnerDivider } from '../components/InnerDivider';
import { SPEAKERS_2026, SPEAKERS, SpeakersGrid, Apply } from './SpeakersPage';
import type { Format2026, Speaker2026 } from './SpeakersPage';

const SPEAKER_FORM = 'https://docs.google.com/forms/d/11OIQUulX830MhIs7KFABtXLAcN3VY1fSgQOnsHxv_9I/viewform';

/** Brand gradients, cycled per card so the wall reads as one family.
 *  Deliberately the deeper end of the palette — the pale warm/sunset pair swallows
 *  the white-shirt portraits. */
const GRADS = [
  'var(--grad-cool)',
  'var(--grad-purple)',
  'var(--grad-island)',
  'linear-gradient(135deg, #5B74E6 0%, #56C1C4 100%)',
  'linear-gradient(135deg, #9B7BD0 0%, #F3A6C8 100%)',
];

/** Cutouts live in /public/cut and are named after the source portrait. */
const cutout = (photo?: string) => (photo ? `/cut/${photo.replace(/\.(jpe?g|png)$/i, '')}.webp` : null);

const LinkedIn: React.FC = () => (
  <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor" aria-hidden="true">
    <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.36V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45C23.21 24 24 23.23 24 22.28V1.72C24 .77 23.21 0 22.22 0z" />
  </svg>
);

const AltCard: React.FC<{ s: Speaker2026; i: number }> = ({ s, i }) => {
  const cut = cutout(s.photo);
  return (
    <article className="spa-card">
      <div className="spa-tile" style={{ background: GRADS[i % GRADS.length] }}>
        {cut ? (
          <img className="spa-cut" src={cut} alt={s.name} loading="lazy" decoding="async" />
        ) : (
          <span className="spa-initials" aria-hidden="true">
            {s.name.split(' ').map((w) => w[0]).slice(0, 2).join('')}
          </span>
        )}
        <span className="spa-flag">{s.formatLabel}</span>
        <span className="spa-num">{String(i + 1).padStart(2, '0')}</span>
      </div>

      <h3 className="spa-name">{s.name}</h3>
      <p className="spa-role">{s.role}</p>
      <p className="spa-talk"><b>{s.talk[0]}</b>{s.talk[1]}</p>
      <p className="spa-bio">{s.bio}</p>
      <div className="spa-foot">
        {s.link !== '#' && (
          <a className="sp-li" href={s.link} target="_blank" rel="noopener noreferrer">
            <LinkedIn /> {s.linkLabel}
          </a>
        )}
        {s.site && <span className="spa-site">{s.site}</span>}
      </div>
    </article>
  );
};

const FILTERS: { key: 'all' | Format2026; label: string }[] = [
  { key: 'all', label: 'All' },
  { key: 'keynote', label: 'Keynotes' },
  { key: 'workshop', label: 'Workshops' },
  { key: 'panel', label: 'Panels' },
];

/** Only offer a tab the roster can actually fill — otherwise removing the last
 *  speaker of a format leaves a filter that renders an empty grid. */
const availableFilters = FILTERS.filter(
  (f) => f.key === 'all' || SPEAKERS_2026.some((s) => s.format === f.key || s.alsoIn?.includes(f.key as Format2026)),
);

const Roster: React.FC = () => {
  const [filter, setFilter] = React.useState<'all' | Format2026>('all');
  const visible = SPEAKERS_2026.filter(
    (s) => filter === 'all' || s.format === filter || s.alsoIn?.includes(filter as Format2026),
  );

  return (
    <section style={{ paddingTop: 'clamp(48px, 6vw, 88px)', paddingBottom: 'var(--pad-section)', borderTop: '1px solid var(--rule)' }}>
      <div className="wrap">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'end', gap: 24, marginBottom: 'clamp(32px, 4vw, 56px)', flexWrap: 'wrap' }}>
          <div>
            <div className="eyebrow" style={{ marginBottom: 24, color: 'var(--turq-deep)' }}>◐ 2026 Line-Up · first wave</div>
            <h2 className="display" style={{ margin: 0, fontSize: 'clamp(40px, 5.6vw, 88px)' }}>
              {SPEAKERS_2026.length} confirmed, <em>more to come.</em>
            </h2>
          </div>
          <div className="sp-filter" role="tablist">
            {availableFilters.map((f) => (
              <button
                key={f.key}
                className={filter === f.key ? 'active' : ''}
                onClick={() => setFilter(f.key)}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>

        <div className="spa-grid">
          {visible.map((s, i) => <AltCard key={s.name} s={s} i={i} />)}
        </div>
      </div>
    </section>
  );
};

const AltHero: React.FC = () => (
  <section className="tnf-page-hero" style={{ background: 'linear-gradient(180deg, #FFFFFF 0%, #F7F4ED 100%)' }}>
    <div className="wrap">
      <div>
        <div className="crumb"><a href="/">◐ Home</a><span>/</span><span>Speakers</span></div>
        <h1 style={{ fontSize: 'clamp(48px, 6.4vw, 112px)', lineHeight: .88, letterSpacing: '-0.05em', fontWeight: 800, margin: 0 }}>
          The voices of{' '}
          <em style={{ fontFamily: 'var(--serif-italic)', fontStyle: 'italic', fontWeight: 400, background: 'var(--grad-cool)', WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent', paddingRight: '.05em' }}>the village.</em>
        </h1>
        <p className="lede" style={{ marginTop: 32, fontSize: 20, maxWidth: 620, color: 'var(--ink-2)', lineHeight: 1.5 }}>
          Founders who shipped. Operators who scaled. Builders who chose freedom.
          No keynote theatre — just people who'll sit at the long table with you,
          share what they know, and stay for dinner.
        </p>
        <div style={{ marginTop: 40, display: 'flex', gap: 28, flexWrap: 'wrap', fontFamily: 'ui-monospace, monospace', fontSize: 11, letterSpacing: '.14em', textTransform: 'uppercase', color: 'var(--ink-2)' }}>
          <div><b style={{ color: 'var(--ink)' }}>2026 ·</b> {SPEAKERS_2026.length} confirmed</div>
          <div><b style={{ color: 'var(--ink)' }}>Format ·</b> Talks · panels · workshops</div>
          <div><b style={{ color: 'var(--ink)' }}>Apply ·</b> applications open</div>
        </div>
        <div style={{ marginTop: 32 }}>
          <a
            href={SPEAKER_FORM}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              background: 'var(--ink)', color: 'var(--paper)',
              padding: '18px 32px', borderRadius: 999,
              fontWeight: 700, fontSize: 13, letterSpacing: '.1em',
              textTransform: 'uppercase', textDecoration: 'none',
            }}
          >
            Speak at TNF →
          </a>
        </div>
      </div>
    </div>
  </section>
);

/**
 * Alternative treatment of /speakers: every portrait cut out of its background,
 * desaturated, and set on a brand gradient tile. Same roster, cleaner wall.
 */
export const SpeakersAltPage: React.FC = () => {
  useSEO({
    title: 'Speakers — Türkiye Nomad Fest 2026',
    description: 'The 2026 line-up: founders, operators and builders joining the long table in Alanya.',
    canonical: '/speakers',
  });

  return (
    <>
      <InnerHeader current="/speakers" />
      <main>
        <AltHero />
        <Roster />
        {/* The 2025 archive stays exactly as it is on /speakers — same components, untouched. */}
        <InnerDivider tone="sand" left="◐ 2025 Line-Up" mid={`${SPEAKERS.length} speakers`} right="The first edition · MMXXV" />
        <SpeakersGrid />
        <Apply />
      </main>
      <InnerFooter />
    </>
  );
};
