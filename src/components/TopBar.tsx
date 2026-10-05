import React from 'react';
import { Lockup } from './Shell';

const CTA = 'https://www.eventzilla.net/e/turkiye-nomad-fest--alanya-2026-2138676905';

export const TopBar: React.FC = () => (
  <header className="tnf-header">
    <div className="tnf-header-inner">
      <div className="tnf-header-wrap">
        <a href="/" className="tnf-logo" style={{ display: 'flex', alignItems: 'center' }}>
          <Lockup markSize={62} wordSize={14} subSize={13} sub="Alanya, Anjeliq Hotels — Oct 18–25, 2026" />
        </a>
        <nav className="tnf-nav" aria-label="Main navigation">
          <a href="/program">Program</a>
          <a href="/bootcamp">Bootcamp</a>
          <a href="/speakers">Speakers</a>
          <a href="/stay">Venue</a>
          <a href="/alanya">Alanya</a>
        </nav>
        <a
          href={CTA}
          className="tnf-cta"
          target="_blank"
          rel="noopener noreferrer"
        >
          Join Us →
        </a>
      </div>
    </div>
  </header>
);
