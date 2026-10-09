import React from 'react';
import '../styles/program.css';
import { useSEO } from '../hooks/useSEO';
import { InnerHeader } from '../components/InnerHeader';
import { InnerDivider } from '../components/InnerDivider';
import { InnerFooter } from '../components/InnerFooter';
import { Img } from '../components/Img';

type Year = '2026' | '2025';

const YearTabs: React.FC<{ year: Year; setYear: (y: Year) => void }> = ({ year, setYear }) => (
  <div style={{ marginTop: 32, display: 'flex', gap: 10 }} role="tablist" aria-label="Edition year">
    {(['2026', '2025'] as Year[]).map((y) => (
      <button key={y} role="tab" aria-selected={year === y} onClick={() => setYear(y)}
        style={{ cursor: 'pointer', border: '1px solid var(--ink)', borderRadius: 999, padding: '10px 22px', fontWeight: 700, fontSize: 12, letterSpacing: '.14em', background: year === y ? 'var(--ink)' : 'transparent', color: year === y ? 'var(--paper, #fff)' : 'var(--ink)' }}>
        {y}
      </button>
    ))}
  </div>
);

const PageHero: React.FC<{ year: Year; setYear: (y: Year) => void }> = ({ year, setYear }) => (
  <section className="tnf-page-hero" style={{ background: 'linear-gradient(180deg, #FFFFFF 0%, #F7F4ED 100%)' }}>
    <div className="wrap">
      <div className="crumb">
        <a href="/">◐ Home</a>
        <span>/</span>
        <span>Program</span>
      </div>
      <h1 style={{ fontSize: 'clamp(56px, 9vw, 168px)', lineHeight: .88, letterSpacing: '-0.05em', fontWeight: 800, margin: 0 }}>
        {year === '2026' ? 'Eight days,' : 'Six days,'}{' '}
        <em style={{ fontFamily: 'var(--serif-italic)', fontStyle: 'italic', fontWeight: 400, background: 'var(--grad-cool)', WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent', paddingRight: '.05em' }}>
          one rhythm.
        </em>
      </h1>
      <p className="lede" style={{ marginTop: 32, fontSize: 20, maxWidth: 620, color: 'var(--ink-2)', lineHeight: 1.5 }}>
        Mornings open with breath and the sea. Afternoons fill with making.
        Evenings end at a long table.{' '}
        {year === '2026'
          ? 'Below — the festival week in Alanya, October 18 → 25, 2026.'
          : "Below — the full arc of the first edition's village, October 14 → 19, 2025."}
      </p>
      <div style={{ marginTop: 40, display: 'flex', gap: 28, flexWrap: 'wrap', fontFamily: 'ui-monospace, monospace', fontSize: 11, letterSpacing: '.14em', textTransform: 'uppercase', color: 'var(--ink-2)' }}>
        <div><b style={{ color: 'var(--ink)' }}>Edition ·</b> {year === '2026' ? 'Nº 02 · 2026' : 'Nº 01 · 2025'}</div>
        <div><b style={{ color: 'var(--ink)' }}>Venue ·</b> Anjeliq Hotels, Alanya</div>
        <div><b style={{ color: 'var(--ink)' }}>Format ·</b> {year === '2026' ? '8 days · 4 tracks' : '6 days · 4 tracks'}</div>
      </div>
      <YearTabs year={year} setYear={setYear} />
      <div className="trk-legend">
        <div className="lbl">◐ Tracks</div>
        {year === '2026' ? (
          <>
            <span className="trk well">Wellbeing</span>
            <span className="trk rw">Remote Work &amp; Solopreneurship</span>
            <span className="trk aiy">Artificial Intelligence</span>
            <span className="trk social">Social</span>
            <span className="trk culture">Culture &amp; Creativity</span>
          </>
        ) : (
          <>
            <span className="trk nomad">Nomad Lifestyle</span>
            <span className="trk solo">Solopreneurship · CENOA</span>
            <span className="trk ai">Artificial Intelligence</span>
            <span className="trk social">Social · Recreational</span>
          </>
        )}
      </div>
    </div>
  </section>
);

type TrackKey = 'nomad' | 'solo' | 'ai' | 'social' | 'gen' | 'well' | 'rw' | 'aiy' | 'culture';

const Sess: React.FC<{ t: string; who?: string | undefined }> = ({ t, who }) => (
  <span>
    {t}
    {who && <span className="who">{who}</span>}
  </span>
);

interface DayRow {
  time: string;
  content: React.ReactNode;
  trk: TrackKey;
}

interface DayData {
  n: string;
  day: string;
  title: string;
  sub: string;
  pill: [string, string];
  rows: DayRow[];
}

const SCHEDULE: DayData[] = [
  {
    n: '01', day: 'Tue · Oct 14', title: 'Arrival & kick-off.',
    sub: 'Find your village. Find your people.',
    pill: ['yel', 'Day 1'],
    rows: [
      { time: '12:00', content: <Sess t="Registration & check-in" />, trk: 'social' },
      { time: '18:00', content: <Sess t="Icebreaker networking" />, trk: 'social' },
      { time: '19:30', content: <Sess t="Opening reception" />, trk: 'social' },
    ],
  },
  {
    n: '02', day: 'Wed · Oct 15', title: 'Nomad lifestyle & solopreneurship.',
    sub: 'The arc, the practice, the panel.',
    pill: ['turq', 'Day 2'],
    rows: [
      { time: '08:00', content: <Sess t="Running club / Yoga" />, trk: 'social' },
      { time: '09:00', content: <Sess t="Breakfast" />, trk: 'social' },
      { time: '10:00', content: <Sess t="Opening speeches" who="Organisers" />, trk: 'gen' },
      { time: '10:30', content: <Sess t="Nomadism: the past, present and future" who="Mine Dedekoca · Andreas Wil Gerdes" />, trk: 'nomad' },
      { time: '11:00', content: <Sess t="How to start your remote career — earn while you travel" who="Furkan Kumkaya" />, trk: 'nomad' },
      { time: '11:25', content: <Sess t="Panel · Work, live, belong: future of coworking & coliving" who="Neşen Yücel · Lotus Vrijma · Katya Dmitrova · Ahu Yurtoğlu" />, trk: 'nomad' },
      { time: '11:50', content: <Sess t="How powerful internet communities are: building Stick DAO" who="Onur Gümüş" />, trk: 'nomad' },
      { time: '12:10', content: <Sess t="CENOA Solopreneurship Bootcamp · kick-off" who="Tuna Güleryüz · Alperen Gümüşdoğrayan" />, trk: 'solo' },
      { time: '13:00', content: <Sess t="Lunch" />, trk: 'social' },
      { time: '14:30', content: <Sess t="Magic formula of growth" who="Beyza Gürsun" />, trk: 'solo' },
      { time: '15:00', content: <Sess t="Building the AI startup: from employee to billionaire" who="Dr. Daniel Duma" />, trk: 'ai' },
      { time: '15:20', content: <Sess t="Digital nomadism out, borderless humans in" who="Serkan Kurtuluş" />, trk: 'nomad' },
      { time: '16:00', content: <Sess t="Alanya discovery walk — heart of the city" />, trk: 'social' },
      { time: '17:30', content: <Sess t="Anjeliq Beach · happy hour" />, trk: 'social' },
      { time: '20:00', content: <Sess t="Mercado restaurant · 90's DJ dinner party" />, trk: 'social' },
    ],
  },
  {
    n: '03', day: 'Thu · Oct 16', title: 'AI bootcamp + creative beach.',
    sub: 'Tools, teams, and a sunset on canvas.',
    pill: ['lav', 'Day 3'],
    rows: [
      { time: '08:00', content: <Sess t="Running club / Yoga" />, trk: 'social' },
      { time: '09:00', content: <Sess t="Breakfast" />, trk: 'social' },
      { time: '10:00', content: <Sess t="AI Bootcamp" who="Seth Ward" />, trk: 'ai' },
      { time: '11:30', content: <Sess t="Solo travel, solo business: The Globetrotting Detective" who="Diana Lesko" />, trk: 'nomad' },
      { time: '11:50', content: <Sess t="Managing remote teams" who="Tarkan Batgün" />, trk: 'solo' },
      { time: '12:10', content: <Sess t="Designing humanistic coworking cultures" who="Melis Özgiller · Gizem Burteçin" />, trk: 'nomad' },
      { time: '12:30', content: <Sess t="The power of community" who="Lotus Vrijma" />, trk: 'nomad' },
      { time: '13:00', content: <Sess t="Lunch · Q&A with Dr. Dan (mentorship)" />, trk: 'social' },
      { time: '14:30', content: <Sess t="From idea to income: building your online business" who="Murat Erdör · İlker Elal · George Laskaridis · Gizem Burteçin" />, trk: 'solo' },
      { time: '15:00', content: <Sess t="Design thinking & pitching" who="Neşen Yücel" />, trk: 'solo' },
      { time: '16:00', content: <Sess t="Play to win: gamifying business for growth & engagement" who="Ercan Altuğ Yılmaz" />, trk: 'solo' },
      { time: '16:20', content: <Sess t="Futuristic art" who="Hayrettin Karaerkek" />, trk: 'social' },
      { time: '16:30', content: <Sess t="Anjeliq Beach · happy hour & sound healing" />, trk: 'social' },
      { time: '20:00', content: <Sess t="Mercado dinner" />, trk: 'social' },
    ],
  },
  {
    n: '04', day: 'Fri · Oct 17', title: 'CENOA Solopreneurship Bootcamp.',
    sub: 'Lean canvas to recurring revenue.',
    pill: ['pink', 'Day 4'],
    rows: [
      { time: '08:00', content: <Sess t="Running club / Yoga" />, trk: 'social' },
      { time: '09:00', content: <Sess t="Breakfast" />, trk: 'social' },
      { time: '10:00', content: <Sess t="Lean Canvas: from idea to business" who="Mine Dedekoca" />, trk: 'solo' },
      { time: '11:00', content: <Sess t="How to grow your business without doing sales" who="George Laskaridis" />, trk: 'solo' },
      { time: '11:30', content: <Sess t="The subscription mindset: recurring models & the future of entrepreneurship" who="Murat Erdör" />, trk: 'solo' },
      { time: '11:45', content: <Sess t="Investment strategies for solopreneurs" who="İlker Elal" />, trk: 'solo' },
      { time: '12:30', content: <Sess t="AI Bootcamp" who="Seth Ward" />, trk: 'ai' },
      { time: '13:00', content: <Sess t="Lunch · Q&A with Dr. Dan (mentorship)" />, trk: 'social' },
      { time: '14:30', content: <Sess t="The future of work & creativity" who="Chantalle Flores" />, trk: 'nomad' },
      { time: '15:00', content: <Sess t="SUTIL: sustainable tourism living" who="Katya Dimitrova" />, trk: 'nomad' },
      { time: '15:45', content: <Sess t="Chasing meaning" who="Zeynep Karagöz" />, trk: 'nomad' },
      { time: '16:30', content: <Sess t="Hike · 804-year-old Alanya Castle with archaeologist guide" />, trk: 'social' },
      { time: '20:00', content: <Sess t="Mercado · cosplay party (with costume support)" />, trk: 'social' },
    ],
  },
  {
    n: '05', day: 'Sat · Oct 18', title: 'AI bootcamp + nomadism.',
    sub: 'Where the discipline meets the lifestyle.',
    pill: ['turq', 'Day 5'],
    rows: [
      { time: '08:00', content: <Sess t="Running club / Yoga" />, trk: 'social' },
      { time: '09:00', content: <Sess t="Breakfast" />, trk: 'social' },
      { time: '10:00', content: <Sess t="AI Bootcamp" who="Seth Ward" />, trk: 'ai' },
      { time: '11:30', content: <Sess t="How to leverage AI for product marketing" who="Rahul Dabke" />, trk: 'ai' },
      { time: '12:00', content: <Sess t="Nomadism as a new source of tourism" who="Dr. Serpil Kocaman" />, trk: 'nomad' },
      { time: '12:30', content: <Sess t="Lunch · Q&A with Dr. Dan (mentorship)" />, trk: 'social' },
      { time: '14:00', content: <Sess t="Nomadism panel" who="Moderator: Alperen Kurtuldu · Yılmaz Odacı · Diana Lesko" />, trk: 'nomad' },
      { time: '14:30', content: <Sess t="5 AI tools for solopreneurs" who="Seth Ward" />, trk: 'ai' },
      { time: '15:00', content: <Sess t="Digital nomad research results" who="Mine Dedekoca" />, trk: 'nomad' },
      { time: '15:30', content: <Sess t="Happy hour" />, trk: 'social' },
      { time: '20:00', content: <Sess t="Turkiye Nomad Fest 2025 · Gala dinner & Turkish night show" />, trk: 'social' },
    ],
  },
  {
    n: '06', day: 'Sun · Oct 19', title: 'Closing day.',
    sub: 'Reflect, share, walk an ancient road home.',
    pill: ['yel', 'Day 6'],
    rows: [
      { time: '08:00', content: <Sess t="Running club / Yoga" />, trk: 'social' },
      { time: '09:00', content: <Sess t="Breakfast" />, trk: 'social' },
      { time: '10:00', content: <Sess t="What's next — guided reflection & future planning" />, trk: 'gen' },
      { time: '11:00', content: <Sess t="Closing circle" />, trk: 'gen' },
      { time: '11:30', content: <Sess t="Project sharing by participants" />, trk: 'solo' },
      { time: '13:00', content: <Sess t="Lunch" />, trk: 'social' },
      { time: '13:00', content: <Sess t="Selçuklu Nomad Road · ancient Roman migration path hike (Gümerne · Değirmendere · Kızılalan, gözleme included)" />, trk: 'social' },
      { time: '18:00', content: <Sess t="Farewell networking" />, trk: 'social' },
    ],
  },
];

const R = (time: string, text: string, trk: TrackKey, who?: string): DayRow => ({ time, content: <Sess t={text} who={who} />, trk });
const MORNING = R('08:00–09:00', 'Active morning — running club, yoga or beach walk', 'social', 'Anjeliq Beach');
const BREAKFAST = R('08:30–10:00', 'Breakfast', 'social', 'Free for Anjeliq Hotel guests');
const LUNCH = (t: string) => R(t, 'Lunch time with Authentic Turkish Food', 'social', 'Paid @Anjeliq Downtown');
const TOWN = R('19:30+', 'Choose your dinner place', 'social', 'Alanya town');

const SCHEDULE_2026: DayData[] = [
  { n: '01', day: 'Sun · Oct 18', title: 'Nomad Landing.', sub: 'Registration, check-in, sunset by the sea.', pill: ['yel', 'Day 1'],
    rows: [
      R('12:00–17:00', 'Nomad Landing — registration, check-in', 'social', 'Optional arrival window'),
      R('12:00–17:00', 'Hotel & beach', 'social', 'Anjeliq Beach'),
      R('17:00–18:30', 'Sunset chat & chilling', 'social', 'Optional'),
      R('19:30+', 'Casual hangout time & check-ins continued', 'social', 'Anjeliq Hotel'),
    ] },
  { n: '02', day: 'Mon · Oct 19', title: 'Opening circle.', sub: 'Build. Belong. Breathe.', pill: ['turq', 'Day 2'],
    rows: [
      BREAKFAST,
      R('10:00–16:00', 'Open coworking lounge', 'rw', 'Optional'),
      R('10:00–16:00', 'Enjoy Golden Cleopatra Beach', 'social', 'Anjeliq Beach'),
      LUNCH('12:30–14:30'),
      R('17:00–19:30', 'Opening Circle: Build. Belong. Breathe.', 'culture', 'Anjeliq House Hotel'),
      R('20:30–22:00', 'Chat & dine', 'social', 'Optional social dinner at Anjeliq House'),
    ] },
  { n: '03', day: 'Tue · Oct 20', title: 'Festival opens.', sub: 'Nomad visa, FOMO, and your first AI workflow.', pill: ['lav', 'Day 3'],
    rows: [
      MORNING, BREAKFAST,
      R('10:00–10:20', 'Opening remarks', 'well', 'Anthony Muiruri // Neşen Yücel x Gizem Burteçin x Mine Dedekoca'),
      R('10:30–11:00', 'Turkish Nomad Visa', 'well', 'Fireside · Mine Dedekoca x Ministry'),
      R('11:00–11:20', 'Create your own wave', 'well', 'Deniz Toprak'),
      R('11:30–12:10', 'Panel: Nomad events & trends', 'well', 'Neşen Yücel / Pelé Philipp Alexander Weber / Gonçalo Hall / Nomio team'),
      R('12:15–12:45', 'Become a Solopreneur with AI as your co-founder', 'rw', 'Gizem Burteçin'),
      LUNCH('12:45–14:30'),
      R('14:30–16:00', 'AI Bootcamp Zero: Your first useful workflow', 'aiy', 'Seth Ward'),
      R('16:00–18:00', 'Chill time on the beach / Achieve Your Dream Workbook', 'social', 'Anthony Muiruri'),
      R('19:00', 'Gala dinner', 'social', 'Paid'),
    ] },
  { n: '04', day: 'Wed · Oct 21', title: 'Vision & remote work.', sub: 'Body reset, remote-work keynote, digital art.', pill: ['pink', 'Day 4'],
    rows: [
      MORNING, BREAKFAST,
      R('10:00–10:30', 'The Nomad Body Reset', 'well', 'Işık Kardelen'),
      R('10:30–11:00', 'Nomad lifestyle: the power of vision in remote work', 'well', 'Roland Ngole'),
      R('11:05–11:35', 'Keynote: Remote work', 'rw', 'Maya Middlemiss'),
      R('11:35–12:05', 'Talk — title to be announced', 'rw', 'Gonçalo Hall'),
      R('12:05–12:35', 'Mental performance for founders & high performers', 'well', 'Nabeegh Wahab Anwar'),
      LUNCH('12:30–14:00'),
      R('14:30–16:00', 'AI Bootcamp', 'aiy', 'Seth Ward'),
      R('16:00–18:00', 'Digital art workshop', 'culture', 'Hayrettin Karaerkek'),
      TOWN,
    ] },
  { n: '05', day: 'Thu · Oct 22', title: 'Income & community.', sub: 'Skool, Upwork, tax strategy, and a photo shoot at the castle.', pill: ['turq', 'Day 5'],
    rows: [
      MORNING, BREAKFAST,
      R('10:00–10:20', 'How to Trust Your Gut — 10 Ways to Be the Luckiest Person in the Room', 'well', 'Chelsea Rustrum'),
      R('10:20–10:40', 'How anyone can turn a (Skool) community into $100K, step by step', 'rw', 'Dion van der Made'),
      R('10:40–11:10', 'Building real income on Upwork', 'rw', 'Gokce Demirtas'),
      R('11:15–11:45', 'Your tax strategy: how digital nomads legally pay less tax', 'rw', 'Charlene Gout'),
      R('11:50–12:25', "AI Skills to Unlock Community: the solopreneur's toolkit for working (and growing) anywhere", 'aiy', 'Farhan Quasem'),
      LUNCH('12:25–14:00'),
      R('14:00–15:30', 'AI Bootcamp', 'aiy', 'Seth Ward'),
      R('15:30–16:15', 'Anywhere Body: freedom of movement for people with freedom of location', 'well', 'Stratos Papay'),
      R('16:15–18:00', 'The Invisible Lens: photo shooting workshop at the castle', 'culture', 'Chantelle Flores / Zeynep Karagöz'),
      R('20:00+', 'Beach party with Hi-Frequency', 'social', 'Anjeliq House'),
    ] },
  { n: '06', day: 'Fri · Oct 23', title: "Founders' game.", sub: 'Trust your gut, build a business, then the Damlataş Cave.', pill: ['yel', 'Day 6'],
    rows: [
      MORNING, BREAKFAST,
      R('10:00–10:30', 'How to trust your gut — 10 ways to be the luckiest person in the room', 'well', 'Chelsea Rustrum'),
      R('10:30–11:40', 'Design your nomad life like a UX researcher // Your life is a prototype', 'well', 'Elena Petrova'),
      R('11:45–12:05', 'The Founder’s Game: how to build a business that sets you free', 'rw', 'Sofia Kakkava'),
      R('12:05–12:25', 'Zero to Global Solopreneur: digital toolkits, rapid validation and location-independent building', 'rw', 'Abdullah Dol'),
      LUNCH('12:30–14:00'),
      R('14:00–15:30', 'AI Bootcamp', 'aiy', 'Seth Ward'),
      R('16:00–19:30', 'Cultural activity: Damlataş Cave', 'culture', 'Zeynep Karagöz'),
      TOWN,
    ] },
  { n: '07', day: 'Sat · Oct 24', title: 'Closing circle.', sub: 'All together one last time, then out on the water.', pill: ['lav', 'Day 7'],
    rows: [
      MORNING, BREAKFAST,
      R('10:00–11:30', 'Closing circle', 'well', 'All of us!'),
      LUNCH('12:30–13:30'),
      R('14:00–18:00', 'Blue & Green Alanya boat tour', 'social', 'Paid'),
    ] },
  { n: '08', day: 'Sun · Oct 25', title: 'Check-out.', sub: 'A free day at the beach.', pill: ['pink', 'Day 8'],
    rows: [
      MORNING, BREAKFAST,
      R('11:00', 'Check-out', 'social'),
      R('Onwards', 'Free day at the beach and Alanya natural wonders', 'social'),
    ] },
];

const TRK_LABEL: Record<TrackKey, string> = {
  nomad: 'Nomad', solo: 'Solo', ai: 'AI', social: 'Social', gen: 'All',
  well: 'Wellbeing', rw: 'Remote & Solo', aiy: 'AI', culture: 'Culture',
};

const Schedule: React.FC<{ data: DayData[] }> = ({ data }) => (
  <section style={{ paddingTop: 80, paddingBottom: 40 }}>
    <div className="wrap">
      {data.map((d, i) => (
        <div key={i} className="day-card">
          <div>
            <div className="day-num">{d.n}</div>
            <div className="day-day">{d.day}</div>
            <div style={{ marginTop: 14 }}>
              <span className={`pill ${d.pill[0]}`}>{d.pill[1]}</span>
            </div>
          </div>
          <div>
            <h3 className="day-title">{d.title}</h3>
            <div className="day-sub">{d.sub}</div>
          </div>
          <div className="day-times">
            {d.rows.map((r, j) => (
              <div key={j} className="row">
                <span className="t">{r.time}</span>
                <span className="e">{r.content}</span>
                <span className="trk-wrap">
                  <span className={`trk ${r.trk}`}>{TRK_LABEL[r.trk]}</span>
                </span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  </section>
);

const LASTYEAR_PHOTOS = [
  { src: '/lastyear-2.jpg',   alt: 'Türkiye Nomad Fest 2025' },
  { src: '/lastyear-231.jpg', alt: 'Türkiye Nomad Fest 2025' },
  { src: '/lastyear-443.jpg', alt: 'Türkiye Nomad Fest 2025' },
  { src: '/lastyear-538.jpg', alt: 'Türkiye Nomad Fest 2025' },
  { src: '/lastyear-564.jpg', alt: 'Türkiye Nomad Fest 2025' },
  { src: '/lastyear-579.jpg', alt: 'Türkiye Nomad Fest 2025' },
  { src: '/lastyear-661.jpg', alt: 'Türkiye Nomad Fest 2025' },
  { src: '/lastyear-690.jpg', alt: 'Türkiye Nomad Fest 2025' },
  { src: '/lastyear-703.jpg', alt: 'Türkiye Nomad Fest 2025' },
  { src: '/lastyear-709.jpg', alt: 'Türkiye Nomad Fest 2025' },
  { src: '/lastyear-71.jpg',  alt: 'Türkiye Nomad Fest 2025' },
];

const PhotoBreak: React.FC = () => (
  <section style={{ padding: '20px var(--pad-x) 40px' }}>
    <div className="wrap">
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 10 }}>
        {LASTYEAR_PHOTOS.map((p, i) => (
          <div key={i} style={{ aspectRatio: '4/3', overflow: 'hidden', borderRadius: 6, background: '#0E0F12' }}>
            <Img src={p.src} alt={p.alt} loading="lazy" decoding="async" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
          </div>
        ))}
      </div>
      <p style={{ marginTop: 16, fontFamily: 'var(--serif-italic)', fontStyle: 'italic', fontSize: 14, color: 'var(--ink-2)', textAlign: 'right' }}>
        Photos · Kzara Visual · Türkiye Nomad Fest 2025
      </p>
    </div>
  </section>
);

const VillageCTA: React.FC = () => (
  <section style={{ padding: 'var(--pad-section) var(--pad-x)', background: 'var(--ink)', color: 'var(--paper)' }}>
    <div className="wrap" style={{ display: 'grid', gridTemplateColumns: '1.1fr .9fr', gap: 'var(--gap)', alignItems: 'center' }}>
      <div>
        <div className="eyebrow" style={{ color: 'var(--turq)', marginBottom: 24 }}>◐ The reason we built this</div>
        <h2 className="display" style={{ margin: 0, fontSize: 'clamp(48px, 7vw, 120px)', lineHeight: .92, letterSpacing: '-.04em', color: 'var(--paper)' }}>
          Build your<br />
          <em style={{ fontFamily: 'var(--serif-italic)', fontStyle: 'italic', fontWeight: 400, background: 'linear-gradient(135deg, #56C1C4, #C6A6D8 60%, #F3A6C8)', WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent' }}>solopreneur life.</em><br />
          Join our<br />
          <span style={{ color: 'var(--turq)' }}>temporary village.</span>
        </h2>
      </div>
      <div>
        <figure style={{ margin: 0 }}>
          <div style={{ aspectRatio: '3/2', overflow: 'hidden', borderRadius: 6, background: '#000' }}>
            <Img src="/lastyear-564.jpg" alt="Panel discussion under the tent — Türkiye Nomad Fest 2025" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
          </div>
          <figcaption style={{ marginTop: 12, fontFamily: 'var(--serif-italic)', fontStyle: 'italic', fontSize: 14, color: 'rgba(246,241,232,.7)' }}>Panel · 14–19 October 2025 · Anjeliq Hotels.</figcaption>
        </figure>
        <div style={{ marginTop: 28, display: 'flex', gap: 12, flexWrap: 'wrap' }}>
          <a href="https://www.eventzilla.net/e/turkiye-nomad-fest--alanya-2026-2138676905" style={{ background: 'var(--turq)', color: 'var(--ink)', padding: '16px 24px', borderRadius: 999, fontWeight: 700, fontSize: 12, letterSpacing: '.14em', textTransform: 'uppercase' }}>Reserve your spot →</a>
          <a href="/speakers" style={{ border: '1px solid rgba(246,241,232,.3)', color: 'var(--paper)', padding: '16px 24px', borderRadius: 999, fontWeight: 600, fontSize: 12, letterSpacing: '.14em', textTransform: 'uppercase' }}>Meet the speakers</a>
        </div>
      </div>
    </div>
  </section>
);

export const ProgramPage: React.FC = () => {
  const [year, setYear] = React.useState<Year>(() =>
    typeof window !== 'undefined' && window.location.hash === '#2025' ? '2025' : '2026');
  const pick = (y: Year) => { setYear(y); window.history.replaceState(null, '', y === '2025' ? '#2025' : '/program'); };
  useSEO({
    title: 'Program — Turkiye Nomad Fest 2026',
    description: 'The rhythm of the week in Alanya: the 2026 festival week, October 18–25, plus the 2025 edition hour by hour.',
    canonical: '/program',
  });
  return (
  <>
    <InnerHeader current="/program" />
    <main>
      <PageHero year={year} setYear={pick} />
      <InnerDivider tone="warm" left="◐ The arc" mid={year === '2026' ? 'Eight days, one village' : 'Six days, one village'} right={year === '2026' ? 'Oct 18 — 25, MMXXVI' : 'Oct 14 — 19, MMXXV'} />
      <Schedule data={year === '2026' ? SCHEDULE_2026 : SCHEDULE} />
      <InnerDivider tone="sand" left="◐ From last year's village" mid="A few moments from MMXXV" />
      <PhotoBreak />
      <InnerDivider tone="ink" left="◐ Build · Join" mid="The temporary village" />
      <VillageCTA />
    </main>
    <InnerFooter withFinalCTA={false} />
  </>
  );
};
