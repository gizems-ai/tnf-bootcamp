import React from 'react';
import { Img } from './Img';

interface CardProps {
  kicker: string;
  body: string;
  photo: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ kicker, body, photo }) => (
  <div>
    {photo}
    <div className="eyebrow" style={{ marginTop: 18, marginBottom: 8 }}>{kicker}</div>
    <p style={{ margin: 0, fontSize: 14, color: 'rgba(31,31,31,.8)', lineHeight: 1.55 }}>{body}</p>
  </div>
);

const PhotoSlot: React.FC<{ src: string; alt: string }> = ({ src, alt }) => (
  <div className="photo" style={{ aspectRatio: '4/5' }}>
    <Img
      src={src}
      alt={alt}
      loading="lazy"
      decoding="async"
      style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }}
    />
  </div>
);

export const Alanya: React.FC = () => (
  <section id="alanya" style={{ paddingTop: 'var(--pad-section)', paddingBottom: 'var(--pad-section)', background: 'var(--paper)', color: 'var(--ink)', position: 'relative', overflow: 'hidden', borderTop: '1px solid var(--rule)' }}>
    <div className="wrap">
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--gap)', marginBottom: 'clamp(40px,5vw,72px)' }}>
        <div className="eyebrow">◐ 03 — Why Alanya</div>
        <p style={{ fontFamily: 'var(--sans)', fontWeight: 400, fontSize: 19, margin: 0, maxWidth: 460, lineHeight: 1.55, color: 'var(--ink-2)' }}>
          Alanya doesn't try to impress you. It doesn't need to.
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: 'var(--gap)', alignItems: 'end', marginBottom: 'clamp(60px, 8vw, 120px)' }}>
        <div>
          <h2 className="display" style={{ margin: 0, fontSize: 'clamp(120px, 22vw, 360px)', lineHeight: 0.85, letterSpacing: '-.06em', background: 'linear-gradient(160deg, #F3A6C8 0%, #F0B8C8 50%, #E6E7A3 100%)', WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent' }}>300</h2>
          <div style={{ marginTop: 12, fontFamily: 'var(--sans)', fontWeight: 700, fontSize: 'clamp(20px, 2vw, 32px)', letterSpacing: '-.01em', color: 'var(--ink)' }}>
            days of Mediterranean sun,{' '}
            <em style={{ fontFamily: 'var(--serif-italic)', fontStyle: 'italic', fontWeight: 400, background: 'var(--grad-cool)', WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent' }}>every year.</em>
          </div>
        </div>
        <p style={{ fontSize: 17, lineHeight: 1.6, margin: 0, maxWidth: 420, color: 'rgba(31,31,31,.85)' }}>
          Sunshine isn't a perk here — it's the rhythm of life. The days are long, bright,
          and made for being outdoors, whether you're coding by the sea, deep in focus, or
          winding down after sunset.
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20, marginBottom: 'clamp(48px, 6vw, 80px)' }}>
        <Card kicker="The Sea" body="Swim in warm Mediterranean turquoise water, almost any time of year."
          photo={<PhotoSlot src="/photo-castle-beach.jpg" alt="Kleopatra Beach — turquoise water and sandy shore" />} />
        <Card kicker="The Castle" body="Walk to work past ancient walls — civilizations that understood movement long before us."
          photo={<PhotoSlot src="/photo-alanya-castle.jpg" alt="Alanya castle and the historic Red Tower" />} />
        <Card kicker="The Mountains" body="Between sea and the Taurus, life settles into focused mornings and open afternoons."
          photo={<PhotoSlot src="/photo-cablecar.jpg" alt="Cable car rising into the Taurus mountains above Alanya" />} />
      </div>

      <div style={{ borderTop: '1px solid rgba(31,31,31,.25)', borderBottom: '1px solid rgba(31,31,31,.25)', padding: '24px 0', display: 'flex', justifyContent: 'space-between', fontFamily: 'ui-monospace, monospace', fontSize: 12, letterSpacing: '.05em', color: 'rgba(31,31,31,.75)' }}>
        <span>LAT 36° 32′ 36″ N</span>
        <span>LON 31° 59′ 40″ E</span>
        <span>SEA 24°C · OCT</span>
        <span>SUNSET 18:21</span>
        <span>POP 343,000</span>
      </div>
    </div>
  </section>
);
