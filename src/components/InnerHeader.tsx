import React from 'react';
import { Lockup } from './Shell';

const NAV = [
  { href: '/',          label: 'Home'     },
  { href: '/program',   label: 'Program'  },
  { href: '/bootcamp',  label: 'Bootcamp' },
  { href: '/speakers',  label: 'Speakers' },
  { href: '/stay',      label: 'Stay'     },
  { href: '/alanya',    label: 'Alanya'   },
];

interface InnerHeaderProps {
  current?: string;
}

export const InnerHeader: React.FC<InnerHeaderProps> = ({ current }) => (
  <header className="tnf-header">
    <div className="tnf-header-inner">
      <div className="tnf-header-wrap">
        <a href="/" className="tnf-logo" style={{ display: 'flex', alignItems: 'center' }}>
          <Lockup markSize={62} wordSize={14} subSize={13} sub="Alanya, Anjeliq Hotels — Oct 18–25, 2026" />
        </a>
        <nav className="tnf-nav" aria-label="Main navigation">
          {NAV.map((n) => (
            <a key={n.href} href={n.href} aria-current={current === n.href ? 'page' : undefined}>
              {n.label}
            </a>
          ))}
        </nav>
        <a href="https://www.eventzilla.net/e/turkiye-nomad-fest--alanya-2026-2138676905" className="tnf-cta">Join Us →</a>
      </div>
    </div>
  </header>
);
