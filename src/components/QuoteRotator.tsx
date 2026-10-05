import React, { useState } from 'react';
import { Img } from './Img';

export interface QuoteItem {
  speaker: string;
  role: string;
  context: string;
  quote: string;
  photo?: string;
  sponsorLink?: string;
  sponsorLabel?: string;
}

interface QuoteRotatorProps {
  items: QuoteItem[];
  eyebrow?: string;
  background?: string;
}

export const QuoteRotator: React.FC<QuoteRotatorProps> = ({
  items,
  eyebrow = '◐ From the host',
  background = 'var(--paper-2)',
}) => {
  const [active, setActive] = useState(0);
  const q = items[active];

  return (
    <section className="qr-section" style={{ background }}>
      <div className="wrap">
        <div className="eyebrow qr-eyebrow">{eyebrow}</div>

        <div className="qr-grid">
          {/* Left col: photo + attribution */}
          {q.photo && (
            <div className="qr-photo-col">
              <div className="qr-photo-frame">
                <Img
                  src={q.photo}
                  alt={q.speaker}
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div className="qr-attrib">
                <div className="qr-name">{q.speaker}</div>
                <div className="qr-role">{q.role}</div>
                {q.sponsorLink && (
                  <a href={q.sponsorLink} className="qr-sponsor-badge">
                    {q.sponsorLabel ?? 'Hospitality Sponsor'}
                  </a>
                )}
              </div>
            </div>
          )}

          {/* Right col: context + large quote */}
          <div className="qr-quote-col">
            <p className="qr-context">{q.context}</p>
            <div className="qr-mark" aria-hidden="true">"</div>
            <blockquote className="qr-quote">{q.quote}</blockquote>
            {!q.photo && (
              <div className="qr-attrib" style={{ marginTop: 28 }}>
                <div className="qr-name">{q.speaker}</div>
                <div className="qr-role">{q.role}</div>
              </div>
            )}
          </div>
        </div>

        {/* Navigation dots — only rendered when there are multiple quotes */}
        {items.length > 1 && (
          <div className="qr-dots">
            {items.map((_, i) => (
              <button
                key={i}
                className={`qr-dot${i === active ? ' active' : ''}`}
                onClick={() => setActive(i)}
                aria-label={`Quote ${i + 1} of ${items.length}`}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
