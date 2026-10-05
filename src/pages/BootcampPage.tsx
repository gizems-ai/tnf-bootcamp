import React from 'react';
import '../styles/bootcamp.css';
import { useSEO } from '../hooks/useSEO';
import { InnerHeader } from '../components/InnerHeader';
import { InnerDivider } from '../components/InnerDivider';
import { InnerFooter } from '../components/InnerFooter';
import { Img } from '../components/Img';

type Year = '2026' | '2025';

const YearTabs: React.FC<{ year: Year; setYear: (y: Year) => void }> = ({ year, setYear }) => (
  <div style={{ marginBottom: 28, display: 'flex', gap: 10 }} role="tablist" aria-label="Edition year">
    {(['2026', '2025'] as Year[]).map((y) => (
      <button key={y} role="tab" aria-selected={year === y} onClick={() => setYear(y)}
        style={{ cursor: 'pointer', border: '1px solid var(--ink)', borderRadius: 999, padding: '10px 22px', fontWeight: 700, fontSize: 12, letterSpacing: '.14em', background: year === y ? 'var(--ink)' : 'transparent', color: year === y ? 'var(--paper)' : 'var(--ink)' }}>
        {y}
      </button>
    ))}
  </div>
);

const Hero2026: React.FC<{ year: Year; setYear: (y: Year) => void }> = ({ year, setYear }) => (
  <section className="tnf-page-hero" style={{ background: 'linear-gradient(180deg, #FFFFFF 0%, #F4F2EE 100%)' }}>
    <div className="wrap">
      <div className="crumb"><a href="/">◐ Home</a><span>/</span><span>Bootcamp</span></div>
      <YearTabs year={year} setYear={setYear} />
      <div className="eyebrow" style={{ color: 'var(--turq-deep)', marginBottom: 18 }}>◐ Solopreneurship × AI · 2026</div>
      <h1 style={{ fontSize: 'clamp(56px, 9vw, 168px)', lineHeight: .88, letterSpacing: '-0.05em', fontWeight: 800, margin: 0 }}>
        From first workflow<br />
        <em style={{ fontFamily: 'var(--serif-italic)', fontStyle: 'italic', fontWeight: 400, background: 'var(--grad-cool)', WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent', paddingRight: '.05em' }}>to a working AI agent.</em>
      </h1>
      <p className="lede" style={{ marginTop: 28, fontSize: 20, maxWidth: 640, color: 'var(--ink-2)', lineHeight: 1.55 }}>
        Four afternoon sessions with Seth Ward, Tuesday 20 to Friday 23 October,
        inside the festival week. No prior code. You start with your first
        useful workflow and build from there.
      </p>
      <div style={{ marginTop: 36, display: 'flex', gap: 28, flexWrap: 'wrap', fontFamily: 'ui-monospace, monospace', fontSize: 11, letterSpacing: '.14em', textTransform: 'uppercase', color: 'var(--ink-2)' }}>
        <div><b style={{ color: 'var(--ink)' }}>Format ·</b> 4 sessions · 90 min</div>
        <div><b style={{ color: 'var(--ink)' }}>Level ·</b> No code required</div>
        <div><b style={{ color: 'var(--ink)' }}>Track ·</b> Built into the festival</div>
      </div>
      <div style={{ marginTop: 32 }}>
        <a href="#join" style={{ background: 'var(--ink)', color: 'var(--paper)', padding: '18px 28px', borderRadius: 999, fontSize: 13, letterSpacing: '.1em', textTransform: 'uppercase', fontWeight: 700 }}>Reserve your seat →</a>
      </div>
    </div>
  </section>
);

const Sessions2026: React.FC = () => (
  <section style={{ padding: 'var(--pad-section) var(--pad-x)', background: 'var(--paper-2)' }}>
    <div className="wrap">
      <div style={{ marginBottom: 32 }}>
        <div className="eyebrow" style={{ color: 'var(--turq-deep)', marginBottom: 14 }}>◐ The rhythm</div>
        <h2 className="display" style={{ margin: 0, fontSize: 'clamp(36px, 4.6vw, 72px)', maxWidth: '20ch' }}>
          Four days. Afternoons in the build.
        </h2>
      </div>
      <div className="bc-day-strip four">
        {[
          { d: 'Tue · 20', t: '14:30–16:00', h: 'AI Bootcamp Zero: your first useful workflow' },
          { d: 'Wed · 21', t: '14:30–16:00', h: 'AI Bootcamp' },
          { d: 'Thu · 22', t: '14:00–15:30', h: 'AI Bootcamp' },
          { d: 'Fri · 23', t: '14:00–15:30', h: 'AI Bootcamp' },
        ].map((day) => (
          <div key={day.d} className="bc-day active">
            <div className="d">{day.d}</div>
            <div className="h">{day.h}</div>
            <div className="h" style={{ fontFamily: 'ui-monospace, monospace', fontSize: 12, opacity: .8 }}>{day.t} · Seth Ward</div>
          </div>
        ))}
      </div>
      <p style={{ marginTop: 18, fontFamily: 'ui-monospace, monospace', fontSize: 11, letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--ink-2)' }}>
        ◐ Bootcamp runs Tuesday 20 – Friday 23 October, inside the 18–25 October festival week. Full day-by-day schedule on the <a href="/program" style={{ textDecoration: 'underline' }}>program page</a>.
      </p>
    </div>
  </section>
);

const Lead2026: React.FC = () => (
  <section style={{ padding: 'var(--pad-section) var(--pad-x)' }}>
    <div className="wrap">
      <div className="bc-instr">
        <div className="bc-portrait">
          <Img src="/photo-seth.png" alt="Seth Ward, Bootcamp Lead" style={{ objectPosition: 'center 20%' }} />
          <div className="frame" />
        </div>
        <div>
          <div className="eyebrow" style={{ color: 'var(--turq-deep)', marginBottom: 14 }}>◐ Bootcamp lead</div>
          <h3 style={{ margin: 0, fontSize: 'clamp(36px, 4vw, 56px)', fontWeight: 800, letterSpacing: '-.03em', lineHeight: 1 }}>Seth Ward</h3>
          <p style={{ marginTop: 14, fontFamily: 'var(--serif-italic)', fontStyle: 'italic', fontSize: 20, color: 'var(--ink-2)' }}>AI Bootcamp Lead · Product builder · AI tools</p>
          <p style={{ marginTop: 18, fontSize: 17, lineHeight: 1.65, color: 'var(--ink-2)', maxWidth: '60ch' }}>
            Seth runs the room — patient, direct, allergic to jargon. Expect the
            kind of teaching that makes you forget you were ever scared of the tools.
          </p>
        </div>
      </div>
    </div>
  </section>
);

const PageHero: React.FC<{ year: Year; setYear: (y: Year) => void }> = ({ year, setYear }) => (
  <section className="tnf-page-hero" style={{ background: 'linear-gradient(180deg, #FFFFFF 0%, #F4F2EE 100%)' }}>
    <div className="wrap">
      <div className="crumb"><a href="/">◐ Home</a><span>/</span><span>Bootcamp</span></div>
      <YearTabs year={year} setYear={setYear} />
      <div className="bc-hero-grid">
        <div>
          <div className="eyebrow" style={{ color: 'var(--turq-deep)', marginBottom: 18 }}>
            ◐ Solopreneurship × AI · 2025
          </div>
          <h1 style={{ fontSize: 'clamp(56px, 9vw, 168px)', lineHeight: .88, letterSpacing: '-0.05em', fontWeight: 800, margin: 0 }}>
            Make AI{' '}
            <em style={{ fontFamily: 'var(--serif-italic)', fontStyle: 'italic', fontWeight: 400, background: 'var(--grad-cool)', WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent', paddingRight: '.05em' }}>your cofounder.</em><br />
            Ship six platforms<br />
            <em style={{ fontFamily: 'var(--serif-italic)', fontStyle: 'italic', fontWeight: 400, background: 'var(--grad-warm)', WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent' }}>before you unpack.</em>
          </h1>
          <p className="lede" style={{ marginTop: 28, fontSize: 20, maxWidth: 640, color: 'var(--ink-2)', lineHeight: 1.55 }}>
            Five days. No prior code. You arrive with a dream and a laptop —
            you leave with a working AI-powered product, a plan, and the
            muscle memory to keep building. Below is what the first edition
            shipped, in 2025.
          </p>
          <div style={{ marginTop: 36, display: 'flex', gap: 28, flexWrap: 'wrap', fontFamily: 'ui-monospace, monospace', fontSize: 11, letterSpacing: '.14em', textTransform: 'uppercase', color: 'var(--ink-2)' }}>
            <div><b style={{ color: 'var(--ink)' }}>Format ·</b> 5 days · daily workshops</div>
            <div><b style={{ color: 'var(--ink)' }}>Level ·</b> No code required</div>
            <div><b style={{ color: 'var(--ink)' }}>Track ·</b> Built into the festival</div>
          </div>
          <div style={{ marginTop: 32, display: 'flex', gap: 12, alignItems: 'center', flexWrap: 'wrap' }}>
            <a href="#join" style={{ background: 'var(--ink)', color: 'var(--paper)', padding: '18px 28px', borderRadius: 999, fontSize: 13, letterSpacing: '.1em', textTransform: 'uppercase', fontWeight: 700 }}>Reserve your seat →</a>
            <a href="#curriculum" style={{ padding: '18px 24px', borderRadius: 999, fontSize: 13, letterSpacing: '.1em', textTransform: 'uppercase', fontWeight: 700, color: 'var(--ink)', border: '1px solid var(--ink)' }}>See the curriculum</a>
          </div>
        </div>

        <figure style={{ margin: 0 }}>
          <div className="bc-mark">
            <div className="bc-mark-inner">
              AI
              <div className="bc-spark" />
            </div>
          </div>
          <figcaption style={{ marginTop: 18, fontFamily: 'var(--serif-italic)', fontStyle: 'italic', fontSize: 14, color: 'var(--ink-2)', textAlign: 'center' }}>
            "AI is your new cofounder." — bootcamp credo, MMXXV
          </figcaption>
        </figure>
      </div>
    </div>
  </section>
);

const FounderNote: React.FC = () => (
  <section style={{ padding: 'var(--pad-section) var(--pad-x) 0' }}>
    <div className="wrap">
      <div className="bc-testify">
        <div style={{ position: 'relative', maxWidth: 920 }}>
          <div className="eyebrow" style={{ marginBottom: 22 }}>◐ A note from your host</div>
          <p style={{ fontFamily: 'var(--serif)', fontStyle: 'italic', fontSize: 'clamp(14px, 1.3vw, 19px)', lineHeight: 1.55, fontWeight: 300, margin: 0, color: 'var(--ink)', textWrap: 'balance' } as React.CSSProperties}>
            I came to the very first bootcamp as a non-coder.<br />
            I left it as a builder. Since then I have shipped{' '}
            <strong style={{ fontStyle: 'normal', fontWeight: 800 }}>six platforms</strong>{' '}
            with AI as my cofounder.<br /><br />
            That's not a marketing line. That's just what happens when the
            right people sit down by the sea for a week and stop being afraid
            of the tools.
          </p>
          <div style={{ marginTop: 36, display: 'flex', alignItems: 'center', gap: 14, fontFamily: 'ui-monospace, monospace', fontSize: 11, letterSpacing: '.14em', textTransform: 'uppercase', color: 'var(--ink)' }}>
            <span style={{ width: 28, height: 1, background: 'var(--ink)', display: 'block' }} />
            <span>Festival organiser · MMXXV alumna</span>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Outcomes: React.FC = () => (
  <section style={{ padding: 'var(--pad-section) var(--pad-x)' }}>
    <div className="wrap">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'end', flexWrap: 'wrap', gap: 24, marginBottom: 40 }}>
        <div>
          <div className="eyebrow" style={{ color: 'var(--turq-deep)', marginBottom: 14 }}>◐ What you walk out with</div>
          <h2 className="display" style={{ margin: 0, fontSize: 'clamp(40px, 5.2vw, 84px)' }}>
            Not a certificate.<br />
            <em>A shipped product.</em>
          </h2>
        </div>
        <p style={{ fontSize: 17, color: 'var(--ink-2)', maxWidth: 360, margin: 0, lineHeight: 1.6 }}>
          The bootcamp is built around output. By Saturday night, every person
          in the room has something live, real, and theirs.
        </p>
      </div>

      <div className="bc-outcomes">
        {[
          { n: '01', h: 'Your first AI-powered app', d: 'An MVP you actually shipped — not a prototype, not a slide. A real, deployable product with users-day-one potential.' },
          { n: '02', h: 'A plan to scale it', d: 'Lean canvas, pricing model, monetisation path, distribution. Built with mentors who have done it themselves.' },
          { n: '03', h: '5 AI productivity hacks', d: 'The bonus stack — workflows you can reuse the day you get home, on every project, forever.' },
          { n: '04', h: 'A founder network', d: 'The other 30 people in the room. People who will reply to your DMs at 2am with "send me the link, I\'ll test it."' },
          { n: '05', h: 'Confidence without code', d: 'You stop being afraid of the terminal. AI does the heavy lifting; you do the thinking. The fear is gone in 48 hours.' },
          { n: '06', h: 'A demo on the rooftop', d: 'The final night, every builder demos at sunset. Loud applause is mandatory. Tears are common.' },
        ].map((o) => (
          <div key={o.n} className="bc-outcome">
            <div className="n">{o.n}</div>
            <div className="h">{o.h}</div>
            <div className="d">{o.d}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const ForYou: React.FC = () => (
  <section style={{ padding: 'var(--pad-section) var(--pad-x)', background: 'var(--paper-2)' }}>
    <div className="wrap">
      <div style={{ display: 'grid', gridTemplateColumns: 'minmax(180px,1fr) 4fr', gap: 'var(--gap)', alignItems: 'start', marginBottom: 48 }}>
        <div className="eyebrow" style={{ paddingTop: 8, color: 'var(--turq-deep)' }}>◐ Perfect for you if</div>
        <h2 className="display" style={{ margin: 0, fontSize: 'clamp(36px, 5vw, 76px)', maxWidth: '22ch', fontWeight: 300 }}>
          You have ideas. We have the week, the tools and the people{' '}
          <em>to turn them into products.</em>
        </h2>
      </div>

      <div className="bc-pillars">
        <div className="bc-pillar" style={{ background: 'linear-gradient(160deg, #5B74E6 0%, #7E92EC 60%, #C6A6D8 100%)', color: '#fff' }}>
          <div className="num">— 01 / 03</div>
          <div>
            <h4>You've never coded before.</h4>
            <p>Good. The bootcamp is built for the curious, not the credentialed. AI is the great leveller — the people who arrive with zero technical background often ship the boldest products.</p>
          </div>
        </div>
        <div className="bc-pillar" style={{ background: 'linear-gradient(160deg, #56C1C4 0%, #8FD0CF 60%, #E6E7A3 100%)' }}>
          <div className="num">— 02 / 03</div>
          <div>
            <h4>You want to bring an idea to life.</h4>
            <p>You have notes, voice memos, a list in your phone called "ideas". Pick one. By Saturday night it will be a working thing on the internet that other humans can use.</p>
          </div>
        </div>
        <div className="bc-pillar" style={{ background: 'linear-gradient(160deg, #F3A6C8 0%, #F0B8C8 50%, #E6E7A3 100%)' }}>
          <div className="num">— 03 / 03</div>
          <div>
            <h4>You're curious how AI builds with you.</h4>
            <p>Not "how to use ChatGPT". How to think with AI as a collaborator — design partner, code partner, sparring partner, copy partner. Six tools. Five days. Permanent change.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Curriculum: React.FC = () => (
  <section id="curriculum" style={{ padding: 'var(--pad-section) var(--pad-x)' }}>
    <div className="wrap">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'end', flexWrap: 'wrap', gap: 24, marginBottom: 24 }}>
        <div>
          <div className="eyebrow" style={{ color: 'var(--turq-deep)', marginBottom: 14 }}>◐ Curriculum · MMXXV edition</div>
          <h2 className="display" style={{ margin: 0, fontSize: 'clamp(40px, 5.2vw, 84px)' }}>
            Six modules,<br />
            <em>one shipped product.</em>
          </h2>
        </div>
        <p style={{ fontSize: 14, color: 'var(--ink-2)', maxWidth: 380, margin: 0, fontFamily: 'ui-monospace, monospace', letterSpacing: '.06em', lineHeight: 1.7 }}>
          The spine of the first edition's bootcamp, kept here as the archive.
          The 2026 bootcamp has its own format — see the 2026 tab.
        </p>
      </div>

      <div style={{ marginTop: 32 }}>
        {[
          { n: '01', day: 'Day 1', h: 'Lean canvas, fast.', sub: 'From "I have an idea" to a one-page business in ninety minutes.', items: ['Pick the right idea — the one you can actually ship in five days', 'Lean canvas in ninety minutes — problem, audience, value', 'Pricing & monetisation — recurring vs one-shot', 'Kill the noise — what to ignore for the rest of the week'] },
          { n: '02', day: 'Day 2', h: 'AI as your cofounder.', sub: 'Stop prompting. Start collaborating.', items: ['The cofounder mental model — when to use which tool', 'Designing your first AI-powered feature', 'Pair-building with Claude / Cursor / v0', 'Mentorship Q&A with Dr. Daniel Duma'] },
          { n: '03', day: 'Day 3', h: 'Build the MVP.', sub: 'Hands on keyboards. Sun on the balcony. Real product taking shape.', items: ['Workshop: building your first AI-powered app, no code', 'Deploying it live — domain, hosting, the lot', 'Investment strategies for solopreneurs', 'The subscription mindset — recurring revenue from day one'] },
          { n: '04', day: 'Day 4', h: 'Grow without sales.', sub: 'Distribution is the product. Repeat that out loud.', items: ['Magic formula of growth — how the early users actually arrive', 'Communities as distribution — building before launching', 'Design thinking & pitching', 'The 5 AI productivity hacks (the bonus stack)'] },
          { n: '05', day: 'Day 5', h: 'Ship & demo.', sub: 'A rooftop sunset. Thirty builders. Thirty live products.', items: ['Final polish — what to fix, what to leave', 'Demo prep — three-minute pitch, no slides', 'Live demos at sunset on the Anjeliq rooftop', 'Founder dinner & feedback round'] },
          { n: '06', day: 'Forever · After', h: 'Keep building.', sub: 'The bootcamp is five days. The cohort is for life.', items: ['Private alumni Telegram — alive, busy, kind', 'Quarterly "what shipped" sync — celebrate, ship, repeat', 'Mentor office hours — Dr. Dan + guests, ongoing', 'First-look invite to MMXXVII (with discount)'] },
        ].map((m) => (
          <div key={m.n} className="bc-mod">
            <div>
              <div className="bc-mod-num">{m.n}</div>
              <div className="bc-mod-tag">{m.day}</div>
            </div>
            <div>
              <h3>{m.h}</h3>
              <div className="sub">{m.sub}</div>
            </div>
            <ul>
              {m.items.map((item, i) => <li key={i}>{item}</li>)}
            </ul>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Rhythm: React.FC = () => (
  <section style={{ padding: 'var(--pad-section) var(--pad-x)', background: 'var(--paper-2)' }}>
    <div className="wrap">
      <div style={{ marginBottom: 32 }}>
        <div className="eyebrow" style={{ color: 'var(--turq-deep)', marginBottom: 14 }}>◐ The rhythm</div>
        <h2 className="display" style={{ margin: 0, fontSize: 'clamp(36px, 4.6vw, 72px)', maxWidth: '20ch' }}>
          Five days. Mornings by the sea, afternoons in the build.
        </h2>
      </div>

      <div className="bc-day-strip">
        {[
          { d: 'Day 1', h: 'Bootcamp kick-off · lean canvas', active: true },
          { d: 'Day 2', h: 'AI cofounder · pair-building', active: true },
          { d: 'Day 3', h: 'Build the MVP · ship it', active: true },
          { d: 'Day 4', h: 'Growth · pitching · polish', active: true },
          { d: 'Day 5', h: 'Demos at sunset', active: true },
        ].map((day) => (
          <div key={day.d} className={day.active ? 'bc-day active' : 'bc-day'}>
            <div className="d">{day.d}</div>
            <div className="h">{day.h}</div>
          </div>
        ))}
      </div>

      <p style={{ marginTop: 18, fontFamily: 'ui-monospace, monospace', fontSize: 11, letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--ink-2)' }}>
        ◐ The first edition ran five days inside the 14–19 October 2025 festival week.
      </p>
    </div>
  </section>
);

const Instructors: React.FC = () => (
  <section style={{ padding: 'var(--pad-section) var(--pad-x)' }}>
    <div className="wrap">
      <div style={{ marginBottom: 48 }}>
        <div className="eyebrow" style={{ color: 'var(--turq-deep)', marginBottom: 14 }}>◐ Who teaches it</div>
        <h2 className="display" style={{ margin: 0, fontSize: 'clamp(40px, 5.2vw, 84px)' }}>
          Two builders.<br />
          <em>Both still shipping.</em>
        </h2>
      </div>

      <div className="bc-instr" style={{ marginBottom: 64 }}>
        <div className="bc-portrait">
          <Img src="/photo-seth.png" alt="Seth Ward, Bootcamp Lead" style={{ objectPosition: 'center 20%' }} />
          <div className="frame" />
        </div>
        <div>
          <div className="eyebrow" style={{ color: 'var(--turq-deep)', marginBottom: 14 }}>◐ Bootcamp lead</div>
          <h3 style={{ margin: 0, fontSize: 'clamp(36px, 4vw, 56px)', fontWeight: 800, letterSpacing: '-.03em', lineHeight: 1 }}>Seth Ward</h3>
          <p style={{ marginTop: 14, fontFamily: 'var(--serif-italic)', fontStyle: 'italic', fontSize: 20, color: 'var(--ink-2)' }}>AI Bootcamp Lead · Solopreneur builder</p>
          <p style={{ marginTop: 18, fontSize: 17, lineHeight: 1.65, color: 'var(--ink-2)', maxWidth: '60ch' }}>
            Seth runs the room. He has spent the last three years turning
            curious non-coders into people who ship — patient, direct,
            allergic to jargon. Expect the kind of teaching that makes you
            forget you were ever scared of the tools.
          </p>
          <div style={{ marginTop: 22, display: 'flex', flexWrap: 'wrap', gap: 8 }}>
            {['AI products', 'No-code → real-code', 'Solopreneurship', 'Workshop master'].map((t) => (
              <span key={t} style={{ fontSize: 12, padding: '6px 12px', borderRadius: 999, background: 'rgba(86,193,196,.18)', color: 'var(--turq-deep)', fontWeight: 600, letterSpacing: '.06em' }}>{t}</span>
            ))}
          </div>
        </div>
      </div>

      <div className="bc-instr" style={{ direction: 'rtl' } as React.CSSProperties}>
        <div className="bc-portrait" style={{ direction: 'ltr' } as React.CSSProperties}>
          <Img src="/photo-daniel.png" alt="Dr. Daniel Duma, AI Coding Mentor" style={{ objectPosition: 'center 20%' }} />
          <div className="frame" />
        </div>
        <div style={{ direction: 'ltr' } as React.CSSProperties}>
          <div className="eyebrow" style={{ color: 'var(--turq-deep)', marginBottom: 14 }}>◐ Mentor</div>
          <h3 style={{ margin: 0, fontSize: 'clamp(36px, 4vw, 56px)', fontWeight: 800, letterSpacing: '-.03em', lineHeight: 1 }}>Dr. Daniel Duma</h3>
          <p style={{ marginTop: 14, fontFamily: 'var(--serif-italic)', fontStyle: 'italic', fontSize: 20, color: 'var(--ink-2)' }}>AI Coding Mentor · Talk: "Building the AI startup"</p>
          <p style={{ marginTop: 18, fontSize: 17, lineHeight: 1.65, color: 'var(--ink-2)', maxWidth: '60ch' }}>
            Dan handles the hard questions. Lunchtime mentorship sessions are
            where the technical fog clears — bring your weirdest architecture
            question, your scariest pricing dilemma, your half-finished idea.
            He has seen all of them.
          </p>
          <div style={{ marginTop: 22, display: 'flex', flexWrap: 'wrap', gap: 8 }}>
            {['AI architecture', 'Mentorship', 'Pricing & GTM', 'Founder strategy'].map((t) => (
              <span key={t} style={{ fontSize: 12, padding: '6px 12px', borderRadius: 999, background: 'rgba(91,116,230,.16)', color: 'var(--sky)', fontWeight: 600, letterSpacing: '.06em' }}>{t}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

const LASTYEAR = [
  { src: '/lastyear-seth.png',  cap: '◐ Bootcamp lead · Seth Ward' },
  { src: '/lastyear-2.jpg',     cap: '◐ The village · MMXXV' },
  { src: '/lastyear-71.jpg',    cap: '◐ Kzara Visual · Alanya' },
  { src: '/lastyear-231.jpg',   cap: '◐ Long-table dinner' },
  { src: '/lastyear-443.jpg',   cap: '◐ Workshop session' },
  { src: '/lastyear-538.jpg',   cap: '◐ Rooftop · Anjeliq' },
  { src: '/lastyear-564.jpg',   cap: '◐ Community · MMXXV' },
  { src: '/lastyear-579.jpg',   cap: '◐ Hands on keyboards' },
  { src: '/lastyear-661.jpg',   cap: '◐ Bootcamp · Day 3' },
  { src: '/lastyear-690.jpg',   cap: '◐ Demo night' },
  { src: '/lastyear-703.jpg',   cap: '◐ Founders · Alanya' },
  { src: '/lastyear-709.jpg',   cap: '◐ Mediterranean · MMXXV' },
];

const PastEdition: React.FC = () => (
  <section style={{ padding: 'var(--pad-section) var(--pad-x)', background: 'var(--paper-2)' }}>
    <div className="wrap">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'end', flexWrap: 'wrap', gap: 24, marginBottom: 32 }}>
        <div>
          <div className="eyebrow" style={{ color: 'var(--turq-deep)', marginBottom: 14 }}>◐ MMXXV edition · evidence</div>
          <h2 className="display" style={{ margin: 0, fontSize: 'clamp(40px, 5.2vw, 84px)' }}>
            Last year,<br />
            <em>this happened.</em>
          </h2>
        </div>
        <p style={{ fontSize: 17, color: 'var(--ink-2)', maxWidth: 380, margin: 0, lineHeight: 1.6 }}>
          Photos from the inaugural bootcamp. Anjeliq Hotels, Alanya, October.
          Thirty builders, six days, one Mediterranean.
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 12 }}>
        {LASTYEAR.map((p) => (
          <div key={p.src} className="gp">
            <Img src={p.src} alt={p.cap} loading="lazy" decoding="async" />
            <div className="cap">{p.cap}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const FAQ_2026 = [
          { q: 'I have never written a line of code. Will I keep up?', a: 'That is the design point. The bootcamp is built for people whose primary skill is not engineering. AI handles the syntax; you handle the thinking.' },
          { q: 'When does the bootcamp run?', a: 'Tuesday 20 to Friday 23 October 2026, in the afternoon (about 90 minutes a day) with Seth Ward, inside the 18–25 October festival week. Mornings are for wellbeing and main-stage talks, evenings are shared with the whole village.' },
          { q: 'What do I need to bring?', a: 'A laptop, a charger, an idea you actually care about, and the willingness to be wrong on day one so you can be right by day four. We provide the rest.' },
          { q: 'Do I have to attend the rest of the festival?', a: 'The bootcamp is woven into the festival, not bolted on. Afternoons are bootcamp; mornings and the talk blocks are wellbeing and main stage; evenings are shared with the whole village. You get both. That is the point.' },
          { q: 'What will we build?', a: 'From your first useful workflow to a working AI agent. The detailed curriculum is being finalised and will be published before the festival.' },
          { q: 'Is the bootcamp included in the festival ticket?', a: 'Yes — the bootcamp seats are bundled with festival tickets. Seats are limited (we cap the room so the mentorship stays personal). Reserving early is the only way to be sure of a seat.' },
];

const FAQ_2025 = [
          { q: 'I have never written a line of code. Will I keep up?', a: 'That is the design point. The bootcamp is built for people whose primary skill is not engineering. AI handles the syntax; you handle the thinking. Most of the strongest products at last year\'s demo night came from non-coders.' },
          { q: 'What do I need to bring?', a: 'A laptop (any laptop made in the last five years works), a charger, an idea you actually care about, and the willingness to be wrong on day two so you can be right on day five. We provide the rest.' },
          { q: 'How is this different from a YouTube tutorial?', a: 'You will be in a room with thirty other builders, two instructors, and the Mediterranean across the road. The accountability is physical, the feedback is immediate, and the network outlives the week. Tutorials teach. Bootcamps change you.' },
          { q: 'Do I have to attend the rest of the festival?', a: 'The bootcamp is woven into the festival, not bolted on. Mornings are bootcamp; afternoons mix bootcamp with main-stage talks; evenings are shared with the whole village. You get both. That is the point.' },
          { q: 'Is the bootcamp included in the festival ticket?', a: 'Yes — the bootcamp seats are bundled with festival tickets. Seats are limited (we cap the room so the mentorship stays personal). Reserving early is the only way to be sure of a seat.' },
];

const FAQ: React.FC<{ items: { q: string; a: string }[] }> = ({ items }) => (
  <section style={{ padding: 'var(--pad-section) var(--pad-x)' }}>
    <div className="wrap" style={{ display: 'grid', gridTemplateColumns: '1fr 1.6fr', gap: 'clamp(28px, 4vw, 80px)', alignItems: 'start' }}>
      <div>
        <div className="eyebrow" style={{ color: 'var(--turq-deep)', marginBottom: 14 }}>◐ Common questions</div>
        <h2 className="display" style={{ margin: 0, fontSize: 'clamp(36px, 4.4vw, 64px)' }}>
          Honest answers,<br />
          <em>no marketing speak.</em>
        </h2>
      </div>
      <div className="bc-faq">
        {items.map((item) => (
          <details key={item.q}>
            <summary>{item.q}</summary>
            <p>{item.a}</p>
          </details>
        ))}
      </div>
    </div>
  </section>
);

const BookCTA: React.FC = () => (
  <section id="join" style={{ padding: 'var(--pad-section) var(--pad-x)', background: 'var(--ink)', color: 'var(--paper)' }}>
    <div className="wrap" style={{ display: 'grid', gridTemplateColumns: '1.1fr .9fr', gap: 'var(--gap)', alignItems: 'center' }}>
      <div>
        <div className="eyebrow" style={{ color: 'var(--turq)', marginBottom: 22 }}>◐ Reserve your seat</div>
        <h2 className="display" style={{ margin: 0, fontSize: 'clamp(48px, 7vw, 120px)', lineHeight: .92, color: 'var(--paper)' }}>
          Arrive curious.<br />
          <em style={{ fontFamily: 'var(--serif-italic)', fontStyle: 'italic', fontWeight: 400, background: 'linear-gradient(135deg, #56C1C4, #C6A6D8 60%, #F3A6C8)', WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent' }}>Leave a founder.</em>
        </h2>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
        <p style={{ fontFamily: 'var(--serif-italic)', fontStyle: 'italic', fontSize: 22, lineHeight: 1.5, margin: 0, color: 'rgba(246,241,232,.9)' }}>
          Bootcamp seats are bundled with the festival ticket and open on a
          first-come basis. The room is capped so the mentorship stays personal.
        </p>
        <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginTop: 8 }}>
          <a href="https://www.eventzilla.net/e/turkiye-nomad-fest--alanya-2026-2138676905" style={{ background: 'var(--turq)', color: 'var(--ink)', padding: '18px 28px', borderRadius: 999, fontWeight: 700, fontSize: 13, letterSpacing: '.12em', textTransform: 'uppercase' }}>Reserve your seat →</a>
          <a href="/program" style={{ border: '1px solid rgba(246,241,232,.3)', color: 'var(--paper)', padding: '18px 28px', borderRadius: 999, fontWeight: 600, fontSize: 13, letterSpacing: '.12em', textTransform: 'uppercase' }}>See the festival programme</a>
        </div>
        <div style={{ marginTop: 4, fontFamily: 'ui-monospace, monospace', fontSize: 12, letterSpacing: '.08em', color: 'rgba(246,241,232,.55)' }}>
          October 20 — 23, 2026 · Anjeliq Hotels, Alanya · Bundled with festival pass
        </div>
      </div>
    </div>
  </section>
);

export const BootcampPage: React.FC = () => {
  const [year, setYear] = React.useState<Year>(() =>
    typeof window !== 'undefined' && window.location.hash === '#2025' ? '2025' : '2026');
  const pick = (y: Year) => { setYear(y); window.history.replaceState(null, '', y === '2025' ? '#2025' : '/bootcamp'); };
  useSEO({
    title: 'AI Bootcamp — Turkiye Nomad Fest 2026',
    description: 'Four-session AI bootcamp with Seth Ward inside TNF 2026: from first workflow to a working AI agent. Alanya, October 20–23, 2026.',
    canonical: '/bootcamp',
  });
  return (
  <>
    <InnerHeader current="/bootcamp" />
    <main>
      {year === '2026' ? (
        <>
          <Hero2026 year={year} setYear={pick} />
          <Sessions2026 />
          <InnerDivider tone="sand" left="◐ Lead" mid="Builder, still shipping" right="MMXXVI · Alanya" />
          <Lead2026 />
          <FAQ items={FAQ_2026} />
        </>
      ) : (
        <>
          <PageHero year={year} setYear={pick} />
          <FounderNote />
          <Outcomes />
          <ForYou />
          <Curriculum />
          <Rhythm />
          <InnerDivider tone="sand" left="◐ Instructors" mid="Builders, not lecturers" right="MMXXV · Alanya" />
          <Instructors />
          <PastEdition />
          <FAQ items={FAQ_2025} />
        </>
      )}
      <BookCTA />
    </main>
    <InnerFooter withFinalCTA={false} />
  </>
  );
};
