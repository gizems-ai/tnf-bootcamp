import React from 'react';
import { Img } from './Img';

const CTA_SPEAKERS = '/speakers';
const SPEAKER_FORM = 'https://docs.google.com/forms/d/11OIQUulX830MhIs7KFABtXLAcN3VY1fSgQOnsHxv_9I/viewform';

const LinkedInIcon: React.FC = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.36V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45C23.21 24 24 23.23 24 22.28V1.72C24 .77 23.21 0 22.22 0z" />
  </svg>
);

const organisers = [
  {
    name: 'Gizem Burteçin',
    role: 'AI Ecosystem Lead',
    photo: '/org-gizem.jpg',
    bio: '20+ year serial entrepreneur. Founder of Ali Sales AI — an AI CRM for small businesses and solopreneurs. Co-founder of HAN Spaces (coworking, 35,000+ m²), with a track record across retail, marketplaces and e-commerce. Now an AI solopreneur and co-founder of Türkiye Nomad Fest.',
    li: 'https://www.linkedin.com/in/gizemburtecin/',
    site: 'alisales.ai',
  },
  {
    name: 'Mine Dedekoca',
    role: 'Future of Work · 15+ yrs',
    photo: '/org-mine.jpg',
    bio: 'Co-founder & curator. After 15 years inside multinationals, Mine became a beacon of the Future of Work movement — a keynote speaker, advisor and changemaker championing flexible work models that put humans first. She co-runs Happy Work Studio.',
    li: 'https://www.linkedin.com/in/mine-dedekoca/',
    site: 'Happywork Studio',
  },
  {
    name: 'Neşen Yücel',
    role: 'Entrepreneur · Facilitator',
    photo: '/org-nesen.jpg',
    bio: 'Co-founder of Stage-Co — Turkey\'s first independent startup community platform — and Urla Coworking. Twelve years building events, hackathons and communities; co-founded CoderDojo Turkiye and the International Digital Nomad Federation. The reason this village feels like one.',
    li: 'https://www.linkedin.com/in/nesenyucel/',
    site: 'Stage-Co & Urla Coworking',
  },
];

export const SpeakersSection: React.FC = () => (
  <section
    id="organisers"
    style={{
      paddingTop: 'var(--pad-section)',
      paddingBottom: 'var(--pad-section)',
      paddingLeft: 'var(--pad-x)',
      paddingRight: 'var(--pad-x)',
      background: 'var(--paper)',
      borderTop: '1px solid var(--rule)',
    }}
  >
    <div className="wrap">
      {/* Header */}
      <div
        className="hp-section-header"
        style={{
          display: 'grid', gridTemplateColumns: '1.1fr 1fr', gap: 'var(--gap)',
          alignItems: 'end', marginBottom: 'clamp(32px, 4vw, 56px)',
        }}
      >
        <div>
          <div className="eyebrow" style={{ marginBottom: 24, color: 'var(--turq-deep)' }}>
            ◐ 07 — Meet the organisers
          </div>
          <h2
            className="display"
            style={{ margin: 0, fontSize: 'clamp(32px, 4.8vw, 76px)', fontWeight: 800, letterSpacing: '-.03em' }}
          >
            Curated by people who <em>live the lifestyle.</em>
          </h2>
        </div>
        <p style={{ fontSize: 16, lineHeight: 1.6, color: 'var(--ink-2)', maxWidth: 480, margin: 0 }}>
          Three women, fifteen years of building. Turkiye Nomad Fest didn't fall out of a deck —
          it was assembled by founders who've shipped events, communities and remote-first
          companies for over a decade.
        </p>
      </div>

      {/* Cards */}
      <div className="hp-org-grid">
        {organisers.map((o, i) => (
          <div key={i} className="hp-org-card">
            <div className="hp-org-photo">
              <Img src={o.photo} alt={o.name} loading="lazy" decoding="async" />
              <div className="hp-org-role">
                Organiser · 0{i + 1}
                <em>{o.role}</em>
              </div>
            </div>
            <div className="hp-org-body">
              <h3 className="hp-org-name">{o.name}</h3>
              <p className="hp-org-bio">{o.bio}</p>
              <div className="hp-org-meta">
                <span style={{ color: 'var(--ink-2)' }}>{o.site}</span>
                <a
                  href={o.li}
                  className="hp-sp-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${o.name} on LinkedIn`}
                >
                  <LinkedInIcon /> LinkedIn
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* CTA row */}
      <div style={{ marginTop: 'clamp(40px, 5vw, 64px)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 16 }}>
        <a
          href={SPEAKER_FORM}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'inline-flex', alignItems: 'center', gap: 10,
            background: 'var(--ink)', color: 'var(--paper)',
            padding: '16px 28px', borderRadius: 999,
            fontFamily: 'ui-monospace, monospace', fontSize: 12,
            letterSpacing: '.14em', textTransform: 'uppercase',
            textDecoration: 'none', fontWeight: 700,
          }}
        >
          Speak at TNF →
        </a>
        <a
          href={CTA_SPEAKERS}
          style={{
            display: 'inline-flex', alignItems: 'center', gap: 10,
            fontFamily: 'ui-monospace, monospace', fontSize: 12,
            letterSpacing: '.14em', textTransform: 'uppercase',
            color: 'var(--ink)', textDecoration: 'none',
            borderBottom: '1px solid var(--ink)', paddingBottom: 6,
          }}
        >
          See the full speaker lineup →
        </a>
      </div>
    </div>
  </section>
);
