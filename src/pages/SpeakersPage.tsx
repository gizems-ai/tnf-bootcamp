import React from 'react';
import '../styles/speakers.css';
import { useSEO } from '../hooks/useSEO';
import { InnerHeader } from '../components/InnerHeader';
import { InnerDivider } from '../components/InnerDivider';
import { InnerFooter } from '../components/InnerFooter';
import { Photo } from '../components/Photo';
import { Img } from '../components/Img';

const SPEAKER_FORM = 'https://docs.google.com/forms/d/11OIQUulX830MhIs7KFABtXLAcN3VY1fSgQOnsHxv_9I/viewform';

const LinkedIn: React.FC<{ size?: number }> = ({ size = 14 }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor" aria-hidden="true">
    <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.36V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45C23.21 24 24 23.23 24 22.28V1.72C24 .77 23.21 0 22.22 0z"/>
  </svg>
);

type Palette = 'sea' | 'sunset' | 'sand' | 'castle' | 'dawn' | 'noon';

export type Format2026 = 'keynote' | 'workshop' | 'panel' | 'tbc';

export interface Speaker2026 {
  name: string;
  role: string;
  bio: string;
  format: Format2026;
  /** Extra buckets this speaker should also surface under in the filter. */
  alsoIn?: Format2026[];
  formatLabel: string;
  talk: [string, string];
  pal: Palette;
  link: string;
  linkLabel: string;
  site?: string;
  /** Drop the file into /public and add the filename here to swap out the placeholder. */
  photo?: string;
}

// 2026 line-up — sourced from the Speaker / Facilitator form responses.
// Photos arrive separately; until then each card falls back to the <Photo> placeholder.
export const SPEAKERS_2026: Speaker2026[] = [
  {
    name: 'Anthony Muiruri',
    role: 'Master of Ceremony · Author · MeetAchieve.com',
    bio: 'International motivational speaker and author from Kenya, based in Athens. Founder of MeetAchieve.com and host of the Now Tell Us podcast — he helps people chase dreams that outlive them. He holds the room together as our Master of Ceremony.',
    format: 'tbc',
    formatLabel: 'Master of Ceremony',
    talk: ['Master of Ceremony', 'Hosting the long table, all week.'],
    pal: 'noon',
    link: 'https://www.linkedin.com/in/anthonymuiruri/',
    linkLabel: 'LinkedIn',
    site: 'MeetAchieve.com',
    photo: 'speaker-anthony-mc.jpg',
  },
  // Jean-Baptiste Michel (NomadWay) — taken off the page 2026-08-22.
  // Assets stay in place (public/speaker-jb.jpg + public/cut/speaker-jb.webp),
  // so uncommenting this block is all it takes to put him back.
  // {
  //   name: 'Jean-Baptiste Michel',
  //   role: 'CEO · NomadWay · Co-founder · Alicante Nomad Summit',
  //   bio: 'Tech entrepreneur and full-stack developer with 15 years of experience and 8 years on the road across 35+ countries. Built NomadWay to connect remote professionals worldwide, and co-founded Alicante Nomad Summit — two successful editions in a row.',
  //   format: 'panel',
  //   formatLabel: 'Panel',
  //   talk: ['Panel · 30 min', 'How to attract digital nomads while creating real impact on local economies.'],
  //   pal: 'noon',
  //   link: 'https://www.linkedin.com/in/jean-baptiste-michel-205326338',
  //   linkLabel: 'LinkedIn',
  //   site: 'jbm-consulting.tech',
  //   photo: 'speaker-jb.jpg',
  // },
  // Tanja Billek — taken off the page 2026-10-05. Assets stay in place (public/speaker-*.jpg + public/cut/*.webp);
  // uncommenting this block puts the speaker back.
  // {
  //   name: 'Tanja Billek',
  //   role: 'The Human Alchemist',
  //   bio: 'Austrian transformational coach, shadow worker and self-described shame slayer. She works at the root of identity programming — the unconscious patterns, blind spots and hidden blocks people carry across borders. Three years running MC of Bansko Nomad Fest.',
  //   format: 'keynote',
  //   formatLabel: 'Keynote',
  //   talk: ['Keynote · 20 min', 'Dare to be TOO MUCH — embody your most authentic, magnetic self and build a wildly abundant nomad life.'],
  //   pal: 'dawn',
  //   link: 'https://www.linkedin.com/in/tanja-billek-b94b60189/',
  //   linkLabel: 'LinkedIn',
  //   site: 'tanjabillek.com',
  //   photo: 'speaker-tanja.jpg',
  // },
  {
    name: 'Pelé Philipp Alexander Weber',
    role: 'Founder · friLingue & Swiss Nomad Fest',
    bio: 'Swiss entrepreneur and community builder. Founded friLingue in 2007, co-owns Bansko Nomad Fest and Nomad Summit, and founded Swiss Nomad Fest. Now building FriHub and ColivingRevolution.club — a global network connecting people, projects and coliving spaces.',
    format: 'keynote',
    formatLabel: 'Keynote',
    talk: ['Keynote · 20 min', '3 Million Nomad Fest — details announced soon.'],
    pal: 'castle',
    link: 'https://www.linkedin.com/in/pel%C3%A9-philipp-alexander-weber/',
    linkLabel: 'LinkedIn',
    site: 'coliving.frilingue.ch',
    photo: 'speaker-pele.jpg',
  },
  {
    name: 'Chantelle Flores',
    role: 'Photographer · Visual storyteller · Kzara Visual',
    bio: 'Photographer, visual storyteller and traveller who has captured life across 89 countries. Combining more than two decades of photography with her academic background in Psychology, Chantelle explores how memory, emotion, culture and personal experience shape what we notice — and what we choose to preserve. Her interactive workshop invites you to look beyond camera settings and discover the most powerful lens you carry: your own story.',
    format: 'workshop',
    formatLabel: 'Workshop',
    talk: ['Workshop', 'The Invisible Lens: How your story shapes what you see.'],
    pal: 'sand',
    link: '#',
    linkLabel: 'Profile',
    site: 'Kzara Visual',
    photo: 'speaker-chantelle.jpg',
  },
  {
    name: 'Seth Ward',
    role: 'Product builder · AI tools',
    bio: 'Spent a decade shipping products at scale, then walked. Now builds opinionated tools for one-person companies and runs the AI Bootcamp — from fundamentals to the tools solopreneurs can actually use today.',
    format: 'tbc',
    formatLabel: 'Bootcamp',
    talk: ['Session', 'Announced soon.'],
    pal: 'sea',
    link: '#',
    linkLabel: 'Profile',
    site: 'AI Bootcamp',
    photo: 'speaker-seth.jpg',
  },
  {
    name: 'Chelsea Rustrum',
    role: 'Founder · CoLab AI',
    bio: 'Has spent her life on one question: shouldn\'t we all get richer and more connected as technology advances? Author of It\'s a Shareable Life and Time Bomb, two-time TEDx speaker, and a builder across the sharing economy, blockchain and shared ownership, and AI. She splits her time between San Francisco and Lisbon, where she runs CoLab, teaching entrepreneurs and teams to build with AI. Her work has appeared in the Wall Street Journal, Forbes, Wired and The Economist.',
    format: 'keynote',
    formatLabel: 'Keynote',
    talk: ['Keynote · 20 min', 'How to Trust Your Gut — 10 Ways to Be the Luckiest Person in the Room'],
    pal: 'sunset',
    link: 'https://www.linkedin.com/in/chelsearustrum/',
    linkLabel: 'LinkedIn',
    site: 'rustrum.com',
    photo: 'speaker-chelsea.jpg',
  },
  {
    name: 'Deniz Toprak',
    role: 'Founder · Hatay Surf Center & Mellow',
    bio: 'Engineer, filmmaker, surf entrepreneur and founder of Hatay Surf Center. His journey began teaching English in a village in Africa; he studied engineering at Boğaziçi University, worked with international companies and explored storytelling through films and documentaries. Surfing then took him to Sri Lanka, where he opened a surf hotel, and back in Türkiye he built surf centres along the coast. After the earthquake he brought that experience to Hatay and founded Hatay Surf Center — a place to meet, learn and find connection through surfing.',
    format: 'keynote',
    formatLabel: 'Keynote',
    talk: ['Keynote · 20 min', 'Create Your Own Wave — The story of building hope & community after the earthquake'],
    pal: 'sunset',
    link: 'https://www.linkedin.com/in/deniz-toprak-99284b165/',
    linkLabel: 'LinkedIn',
    site: 'Hatay Surf Center',
    photo: 'speaker-deniz.jpg',
  },
  {
    name: 'Charlene Gout',
    role: 'Founder · Dutch Exit',
    bio: 'Master\'s in Tax Law from Leiden University, and a motto that fits the room: "If you\'re scared, do it scared." Most nomads pay tax as if they still lived in their home country, because nobody told them there was another way. Charlene walks through the decisions that determine where, how and how much you pay — business registration, tax residency, international structuring — and leaves you with a framework instead of guesswork.',
    format: 'keynote',
    formatLabel: 'Keynote',
    talk: ['Keynote · 20 min', 'Your Tax Strategy: how digital nomads legally pay less tax.'],
    pal: 'sea',
    link: 'https://www.linkedin.com/in/charlenegout/',
    linkLabel: 'LinkedIn',
    site: 'dutchexit.nl',
    photo: 'speaker-charlene.jpg',
  },
  {
    name: 'Farhan Quasem',
    role: 'Founder · Commudemy',
    bio: 'Founder of Commudemy, a Boston workforce development consultancy building training programmes and learning systems for real growth. Harvard Ed.M, Cornell BA, and host of The Commudemy Podcast on workforce development in the age of AI.',
    format: 'workshop',
    formatLabel: 'Workshop',
    talk: ['Workshop · 60 min', 'AI Skills to Unlock Community — the solopreneur\'s toolkit for working (and growing) anywhere.'],
    pal: 'sea',
    link: 'https://www.linkedin.com/in/farhanquasem',
    linkLabel: 'LinkedIn',
    site: 'commudemy.com',
    photo: 'speaker-farhan.jpg',
  },
  {
    name: 'Dion van der Made',
    role: 'Founder · DionTrades',
    bio: 'Coaching, community and day trading. Won the Skool Games with a day-trading coaching offer and worked with the Hormozi and Skool teams — going from zero to 9,000 Skool members and over $100K in coaching revenue as a side hustle.',
    format: 'workshop',
    formatLabel: 'Workshop',
    talk: ['Workshop · 60 min', 'How anyone can turn a (Skool) community into $100K, step by step.'],
    pal: 'sunset',
    photo: 'speaker-dion.jpg',
    link: 'https://x.com/DionTrades',
    linkLabel: 'Profile',
    site: 'diontrades.com',
  },
  // Gülay Uyar — taken off the page 2026-10-05. Assets stay in place (public/speaker-*.jpg + public/cut/*.webp);
  // uncommenting this block puts the speaker back.
  // {
  //   name: 'Gülay Uyar',
  //   role: 'Founder · The Art of Self-Care',
  //   bio: 'Movement and breathwork practitioner with a creative dance background — Creative Dance Pedagogy, Braindance, Somatic Dance — certified in Advayta Yoga, Mindfulness and BBM Breathwork. After years in corporate life she now runs stress management and well-being programmes, and is reading for an M.A. in Psychology.',
  //   format: 'workshop',
  //   formatLabel: 'Workshop',
  //   talk: ['Workshop · 60 min', 'Breath Body Mind — a science-based practice that resets the nervous system in a remarkably short time.'],
  //   pal: 'dawn',
  //   link: 'https://www.linkedin.com/in/g%C3%BClay-uyar-6b0b465',
  //   linkLabel: 'LinkedIn',
  //   site: 'gulayuyar.com',
  //   photo: 'speaker-gulay.jpg',
  // },
  {
    name: 'Zeynep Karagöz',
    role: 'Founder · Nomad Witch',
    bio: 'Founder of Nomad Witch — a community and creative brand at the intersection of nomadic life and purpose-led living. Speaks on meaning, identity, and the art of building an intentional life on the road.',
    format: 'tbc',
    formatLabel: 'Speaker',
    talk: ['Session', 'Announced soon.'],
    pal: 'castle',
    link: 'https://www.linkedin.com/in/zeynep-karagoz-3b313a15/',
    linkLabel: 'LinkedIn',
    site: 'Nomad Witch',
    photo: 'speaker-zeynep.jpg',
  },
  // ── Second wave, from the form responses (added 2026-09-14) ──────────────────
  // Photos were submitted as Google Drive links on the form and are not on disk
  // yet, so these cards fall back to initials until the files land in /public.
  {
    name: 'Nabeegh Wahab Anwar',
    role: 'Performance psychologist · Wahab Performance',
    bio: 'Mental performance coach with a background in sport psychology and elite football, gained through Real Madrid and FC Barcelona. He now works with athletes, founders and high performers on focus, confidence, routines and performing under pressure.',
    format: 'workshop',
    formatLabel: 'Workshop',
    talk: ['Workshop · 60 min', 'Mental Performance for Founders & High Performers.'],
    pal: 'sea',
    link: 'https://www.linkedin.com/in/nabeegh-wahab-anwar-5831ab15b',
    linkLabel: 'LinkedIn',
    site: 'wahabperformance.com',
    photo: 'speaker-nabeegh.jpg',
  },
  {
    name: 'Gokce Demirtas',
    role: 'Creator · GokceBuildsAI',
    bio: 'Senior marketing strategist (MediaCom, The Buntin Group) turned Top Rated Plus Upwork freelancer, now a business automation consultant building AI-powered workflows for small businesses. She documents her AI-augmented solopreneur life on the road.',
    format: 'keynote',
    formatLabel: 'Talk',
    talk: ['Talk · 20 min', 'Upwork as a business, not a job board — building a $200K freelance practice without competing on price.'],
    pal: 'noon',
    link: 'https://www.linkedin.com/in/gokcedemirtas',
    linkLabel: 'LinkedIn',
    site: 'GokceBuildsAI',
    photo: 'speaker-gokce.jpg',
  },
  {
    name: 'Roland Ngole',
    role: 'Keynote speaker · Founder, Achievethevision Global',
    bio: 'International keynote speaker, trainer and author recognised for his work on the Power of Vision. He helps professionals, entrepreneurs and digital nomads align vision with productivity, and master focus, resilience and time management.',
    format: 'keynote',
    formatLabel: 'Keynote',
    talk: ['Keynote · 20 min', 'The Power of Vision in Remote Work.'],
    pal: 'sunset',
    link: 'https://www.linkedin.com/in/rolandngoleofficial/',
    linkLabel: 'LinkedIn',
    site: 'rolandngole.com',
    photo: 'speaker-roland.jpg',
  },
  {
    name: 'Elena Petrova',
    role: 'Senior UX researcher · Ipsos',
    bio: 'UX researcher who moved from client service leadership into product management before retraining as a researcher. She spends her days studying how people actually use digital products — and lives remotely in Alanya while doing it.',
    format: 'keynote',
    formatLabel: 'Keynote',
    talk: ['Keynote · 20 min', 'Your life is a prototype: how to design a nomad life that actually works.'],
    pal: 'dawn',
    link: 'https://ru.linkedin.com/in/elenapetrova1991',
    linkLabel: 'LinkedIn',
    photo: 'speaker-elena.jpg',
  },
  {
    name: 'Sofia Kakkava',
    role: 'Founder · SPK Consulting',
    bio: 'Award-winning international speaker, psychologist and leadership trainer, author of The Freedom Office. She mentors solopreneurs and founders on building businesses that create freedom — and was a multiple-time world champion in martial arts before the boardroom.',
    format: 'keynote',
    formatLabel: 'Keynote',
    talk: ['Keynote · 20 min', "The Founder's Game: how to build a business that sets you free."],
    pal: 'sand',
    link: 'https://www.linkedin.com/in/sofia-kakkava/',
    linkLabel: 'LinkedIn',
    site: 'sofiakakkava.com',
    photo: 'speaker-sofia.jpg',
  },
  {
    name: 'Stratos Papay',
    role: 'Personal trainer · Digital nomad posture specialist',
    bio: 'Athens-based personal trainer who works on posture, mobility and physical resilience for desk workers and remote professionals. Practical movement strategies that need no gym — delivered for companies, wellbeing events and the Athens nomad community.',
    format: 'workshop',
    formatLabel: 'Workshop',
    talk: ['Workshop · 60 min', 'Anywhere Body: freedom of movement for people with freedom of location.'],
    pal: 'sea',
    link: 'https://www.linkedin.com/in/stratos-papaporfyriou-bb326b244',
    linkLabel: 'LinkedIn',
    photo: 'speaker-stratos.jpg',
  },
  {
    name: 'Abdullah Dol',
    role: 'Co-founder & CEO · Onelinks',
    bio: 'Serial entrepreneur and International Entrepreneurship student at Istanbul University. Founder and CEO of the game studio Areplay and co-founder of the digital link platform Onelinks, he works across software, game development and business strategy.',
    format: 'panel',
    formatLabel: 'Panel',
    talk: ['Panel · 30 min', 'Zero to global solopreneur: digital toolkits, rapid validation and location-independent building.'],
    pal: 'noon',
    link: 'https://www.linkedin.com/in/abdullahdol/',
    linkLabel: 'LinkedIn',
    site: 'Onelinks',
    photo: 'speaker-abdullah.jpg',
  },
  // {
  //   name: 'Umid Aziz',
  //   role: 'Brand designer · Graphite Design Studio',
  //   bio: 'Identity designer working at the meeting point of artificial intelligence and design. His work explores generative visual systems, prompt engineering and AI-assisted branding — treating AI as a creative partner rather than a production tool.',
  //   format: 'keynote',
  //   formatLabel: 'Keynote',
  //   talk: ['Keynote · 20 min', 'Human + AI: the next era of design.'],
  //   pal: 'castle',
  //   link: 'https://www.linkedin.com/in/artumid',
  //   linkLabel: 'LinkedIn',
  //   site: 'artumid.com',
  //   photo: 'speaker-umid.jpg',
  // },
  {
    name: 'Mine Dedekoca',
    role: 'Co-founder · Türkiye Nomad Fest · Future of Work',
    bio: 'After 15 years inside multinationals, Mine became a beacon of the Future of Work movement — a keynote speaker, advisor and changemaker championing flexible work models that put humans first. She co-runs Happy Work Studio.',
    format: 'tbc',
    formatLabel: 'Speaker',
    talk: ['Session', 'Announced soon.'],
    pal: 'dawn',
    link: 'https://www.linkedin.com/in/mine-dedekoca/',
    linkLabel: 'LinkedIn',
    site: 'Happywork Studio',
    // Separate file from the homepage Organisers shot (org-mine.jpg) on purpose.
    photo: 'speaker-mine.jpg',
  },
  {
    name: 'Neşen Yücel',
    role: 'Co-founder · Türkiye Nomad Fest · Stage-Co & Urla Coworking',
    bio: 'Co-founder of Stage-Co — Turkey\'s first independent startup community platform — and Urla Coworking. Twelve years building events, hackathons and communities; co-founded CoderDojo Türkiye and the International Digital Nomad Federation.',
    format: 'tbc',
    formatLabel: 'Speaker',
    talk: ['Session', 'Announced soon.'],
    pal: 'noon',
    link: 'https://www.linkedin.com/in/nesenyucel/',
    linkLabel: 'LinkedIn',
    site: 'Stage-Co & Urla Coworking',
    // Same smiling frame the homepage Organisers section uses — single source.
    photo: 'org-nesen.jpg',
  },

  // Returning from the 2025 edition — 2026 session titles to be confirmed.
  {
    name: 'Gizem Burteçin',
    role: 'Co-founder · Türkiye Nomad Fest · AI Ecosystem Lead',
    bio: '20+ year serial entrepreneur. Founder of Ali Sales AI — an AI CRM for small businesses and solopreneurs. Co-founder of HAN Spaces (coworking, 35,000+ m²), with a track record across retail, marketplaces and e-commerce.',
    format: 'workshop',
    formatLabel: 'Workshop',
    talk: ['Workshop · 120 min', 'AI-Powered Solopreneurship: Go from Idea to Live Funnel in 120 Minutes with Claude.'],
    pal: 'sea',
    link: 'https://www.linkedin.com/in/gizemburtecin/',
    linkLabel: 'LinkedIn',
    site: 'alisales.ai',
    photo: 'org-gizem.jpg',
  },
  // Zeynep Erkoç (University of Trento) — sayfadan çıkarıldı 2026-09-15.
  // Görselleri yerinde duruyor (public/speaker-zeynep-erkoc.jpg + public/cut/speaker-zeynep-erkoc.webp),
  // geri almak için bu bloğun yorumunu kaldırmak yeterli.
  // {
  //   name: 'Zeynep Erkoç',
  //   role: 'PhD candidate · University of Trento',
  //   bio: 'Sociologist researching digital nomadism in Istanbul — how mobility and belonging are practised across borders. Her fieldwork asks how we build a sense of home and community while living in constant movement.',
  //   format: 'workshop',
  //   formatLabel: 'Workshop',
  //   talk: ['Workshop · 60 min', "More Than a Destination: a nomad's mobility path."],
  //   pal: 'castle',
  //   link: 'https://www.linkedin.com/in/zeyneperkoc/',
  //   linkLabel: 'LinkedIn',
  //   site: 'unitn.it',
  // },
];

const PageHero: React.FC = () => (
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


interface SpeakerData {
  name: string;
  role: string;
  flag: [string, string];
  bio: string;
  talk: [string, string];
  pal: Palette;
  li: string;
  photo?: string;
}

export const SPEAKERS: SpeakerData[] = [
  { name: 'Andreas Wil Gerdes', role: 'Serial entrepreneur · Digital nomad advocate', flag: ['', 'Speaker'], bio: 'German serial entrepreneur and digital nomad based in Malta. Founded early mobile telecom ventures and now champions geoarbitrage, remote work, and community-driven nomad living worldwide.', talk: ['Talk', 'Nomadism: the past, present and future.'], pal: 'dawn', li: 'https://www.linkedin.com/in/andreaswilgerdes/', photo: 'speaker-andreas.jpg' },
  { name: 'Furkan Kumkaya', role: 'Co-founder · Digital Nomad Türkiye', flag: ['', 'Speaker'], bio: 'Co-founder of Digital Nomad Türkiye, Turkey\'s largest remote-work and nomad community. Author, traveler and content creator who spent three years hitchhiking across Turkey before building a platform to help others earn while they roam.', talk: ['Talk', 'How to start your remote career — earn while you travel.'], pal: 'sea', li: 'https://www.linkedin.com/in/furkankumkaya/', photo: 'speaker-furkan.jpg' },
  { name: 'Katya Dimitrova', role: 'Founder · Burgas Co-living', flag: ['', 'Speaker'], bio: 'Founder of Burgas Co-living and operations lead behind one of Europe\'s longest-running coliving spaces. Five years of seeing what coworking does — and doesn\'t — solve for solo builders.', talk: ['Panel + Talk', 'Work, live, belong: future of coworking & coliving · SUTIL: sustainable tourism living.'], pal: 'dawn', li: '#', photo: 'speaker-katya.jpg' },
  { name: 'Onur Gümüş', role: 'Founder · Stick DAO', flag: ['', 'Speaker'], bio: 'Founder of Stick DAO — a Web3 community platform empowering people with disabilities through crypto and decentralised governance. Believes internet communities have the power to genuinely change lives.', talk: ['Talk', 'How powerful internet communities are: building Stick DAO.'], pal: 'noon', li: 'https://www.linkedin.com/in/onur-g%C3%BCm%C3%BC%C5%9F-9b41a6152/', photo: 'speaker-onur.jpg' },
  { name: 'Beyza Gürsun', role: 'Co-Founder · Feedback & Beyond', flag: ['bootcamp', 'Bootcamp'], bio: 'Co-founder of Feedback & Beyond. Builds brand and growth systems for one-person companies — and teaches the brutal economics of identity for tiny teams.', talk: ['Workshop', 'Magic formula of growth.'], pal: 'sand', li: '#', photo: 'speaker-beyza.jpg' },
  { name: 'Serkan Kurtuluş', role: 'Founder · Noya Digital', flag: ['', 'Speaker'], bio: 'Founder of Noya Digital. Explores the shift from classic digital nomadism to a broader vision of borderless living — where geography stops being a constraint on how you work and who you become.', talk: ['Talk', 'Digital nomadism out, borderless humans in.'], pal: 'castle', li: 'https://www.linkedin.com/in/serkan-kurtulus-8562b4/', photo: 'speaker-serkan.jpg' },
  { name: 'Seth Ward', role: 'Product builder · AI tools', flag: ['bootcamp', 'Bootcamp'], bio: 'Spent a decade shipping products at scale, then walked. Now builds opinionated tools for one-person companies and runs the AI Bootcamp — from fundamentals to 5 tools solopreneurs can use today.', talk: ['Bootcamp', 'AI Bootcamp · 5 AI tools for solopreneurs.'], pal: 'sea', li: '#', photo: 'speaker-seth.jpg' },
  { name: 'Dr. Daniel Duma', role: 'Researcher · LLM systems', flag: ['', 'Speaker'], bio: 'PhD in NLP, now bridging research and product. Daniel demystifies what LLMs can and can\'t do — and what that means for builders who don\'t have a research lab.', talk: ['Talk', 'Building the AI startup: from employee to billionaire.'], pal: 'sunset', li: '#', photo: 'speaker-daniel.jpg' },
  { name: 'Diana Lesko', role: 'Founder · The Globetrotting Detective', flag: ['', 'Speaker'], bio: 'Hungarian founder and solo traveler who built a location-independent business while exploring Afghanistan, Iran and Iraqi Kurdistan. Ran a marathon in Erbil. Proof that the most extreme journeys can be the most sustainable businesses.', talk: ['Talk', 'Solo travel, solo business: The Globetrotting Detective.'], pal: 'sand', li: 'https://www.linkedin.com/in/dianalesko/', photo: 'speaker-diana.jpg' },
  { name: 'Tarkan Batgün', role: 'CEO · Comparisonator', flag: ['', 'Speaker'], bio: 'CEO of Comparisonator, angel investor and business leader. Advises growing teams on managing remote talent effectively and building scalable company culture across borders.', talk: ['Talk', 'Managing remote teams.'], pal: 'dawn', li: '#', photo: 'speaker-tarkan.jpg' },
  { name: 'Ercan Altuğ Yılmaz', role: 'Founder · GamFed Türkiye', flag: ['', 'Speaker'], bio: 'Turkey\'s leading gamification expert and founder of GamFed Türkiye. Creator of the first Turkish gamification model, international speaker at GWC Madrid, Gamification Europe and Gamicon New Orleans, and lecturer at Bahçeşehir and Yeditepe universities.', talk: ['Talk', 'Play to win: gamifying business for growth & engagement.'], pal: 'noon', li: 'https://www.linkedin.com/in/ercanaltug/', photo: 'speaker-ercan.jpg' },
  { name: 'George Laskaridis', role: 'Founder · Scale Pro & Scaleground', flag: ['', 'Speaker'], bio: 'Founder of Scale Pro and co-founder of Scaleground. Helps entrepreneurs grow their businesses through better positioning and referral systems — without traditional sales tactics.', talk: ['Talk', 'How to grow your business without doing sales.'], pal: 'sea', li: 'https://www.linkedin.com/in/georgioslaskaridis/', photo: 'speaker-george.jpg' },
  { name: 'Hayrettin Karaerkek', role: 'Digital artist · Futurartist', flag: ['', 'Speaker'], bio: 'One of the world\'s earliest digital artists — known as Futurartist. For decades he has stood at the intersection of art, science and technology, exploring space, human-alien themes and the future through bold digital canvases.', talk: ['Talk', 'Futuristic art.'], pal: 'castle', li: '#', photo: 'speaker-hayrettin.jpg' },
  { name: 'Murat Erdör', role: 'Founder · Me Consultancy', flag: ['bootcamp', 'Bootcamp'], bio: 'Founder of Me Consultancy. Growth and brand operator with 18 years building marketing engines for Turkish tech companies — now mentors solopreneurs on the one model that changes everything: recurring revenue.', talk: ['Talk', 'The subscription mindset: recurring models & the future of entrepreneurship.'], pal: 'sunset', li: '#', photo: 'speaker-murat.jpg' },
  { name: 'Lotus Vrijma', role: 'Founder · AVNEA · Athens Nomad Fest', flag: ['', 'Speaker'], bio: 'Founder of AVNEA and co-founder of Athens Nomad Fest and Scaleground. Has built a career around the simple idea that the right people in the right room compound for years.', talk: ['Panel + Talk', 'Work, live, belong: future of coworking & coliving · The power of community.'], pal: 'noon', li: 'https://www.linkedin.com/in/lotusvrijma/', photo: 'speaker-lotus.jpg' },
  { name: 'Zeynep Karagöz', role: 'Founder · Nomad Witch', flag: ['', 'Speaker'], bio: 'Founder of Nomad Witch — a community and creative brand at the intersection of nomadic life and purpose-led living. Speaks on meaning, identity, and the art of building an intentional life on the road.', talk: ['Talk', 'Chasing meaning.'], pal: 'dawn', li: 'https://www.linkedin.com/in/zeynep-karagoz-3b313a15/', photo: 'speaker-zeynep.jpg' },
  { name: 'Rahul Dabke', role: 'Executive Advisor · AI & Product Marketing', flag: ['', 'Speaker'], bio: 'Executive advisor and angel investor specialising in AI and product marketing. Former Sr. Director of Product Marketing at EnterpriseDB; advises startups on go-to-market strategy and AI-led growth.', talk: ['Talk', 'How to leverage AI for product marketing.'], pal: 'sea', li: 'https://www.linkedin.com/in/rahuldabke/', photo: 'speaker-rahul.jpg' },
  { name: 'Chantelle Flores', role: 'Founder · Kzara Visual', flag: ['', 'Speaker'], bio: 'Entrepreneur and founder of Kzara Visual. Works at the intersection of creative entrepreneurship and the evolving future of work — helping founders build with visual storytelling and creative strategy.', talk: ['Talk', 'The future of work & creativity.'], pal: 'dawn', li: '#', photo: 'speaker-chantelle.jpg' },

  { name: 'Simon Lewis', role: 'Founder · Coworking Days', flag: ['bootcamp', 'Bootcamp'], bio: 'Founder of Coworking Days. Engineer turned indie builder — ships AI agents and micro-SaaS in public; advises solo founders on what to actually build vs. what AI Twitter says you should.', talk: ['Hands-on', 'Your first agent in 90 minutes — from prompt to production.'], pal: 'sand', li: '#' },
  { name: 'Anthony Muiruri', role: 'Author · Speaker · MeetAchieve.com', flag: ['', 'Speaker'], bio: 'International motivational speaker and author from Kenya, based in Athens. Founder of MeetAchieve.com and host of the Now Tell Us podcast — helps people chase dreams that outlive them.', talk: ['Talk', 'Building community across borders.'], pal: 'noon', li: 'https://www.linkedin.com/in/anthonymuiruri/', photo: 'speaker-anthony.jpg' },
  { name: 'Ahu Yurtoğlu', role: 'Coworking operator · Istanbul', flag: ['', 'Speaker'], bio: 'Runs one of Istanbul\'s most respected indie coworking spaces. Ahu joins the panel on what makes work-spaces actually work — and what we keep getting wrong.', talk: ['Panel', 'Work, live, belong: future of coworking & coliving.'], pal: 'sunset', li: '#', photo: 'speaker-ahu.jpg' },
];

const SpeakerCard: React.FC<{ s: SpeakerData; i: number }> = ({ s, i }) => (
  <div className="sp-card">
    <div className="sp-photo">
      {s.photo
        ? <Img src={`/${s.photo}`} alt={s.name} style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top center', display: 'block' }} />
        : <Photo caption={s.name} palette={s.pal} />
      }
      <span className="sp-num">{String(i + 1).padStart(2, '0')} / {SPEAKERS.length}</span>
      {s.flag[0]
        ? <span className={`sp-flag ${s.flag[0]}`}>{s.flag[1]}</span>
        : <span className="sp-flag">{s.flag[1]}</span>
      }
    </div>
    <div>
      <h3 className="sp-name">{s.name}</h3>
      <div className="sp-role">{s.role}</div>
      <p className="sp-bio">{s.bio}</p>
      <div className="sp-talk"><b>{s.talk[0]}</b>{s.talk[1]}</div>
    </div>
    <div className="sp-foot">
      <span>◐ TNF · 2026</span>
      <a href={s.li} className="sp-li" target="_blank" rel="noopener noreferrer"><LinkedIn /> LinkedIn</a>
    </div>
  </div>
);

export const SpeakersGrid: React.FC = () => {
  const [filter, setFilter] = React.useState('all');
  const filters = [
    { v: 'all', l: 'All speakers' },
    { v: 'keynote', l: 'Keynotes' },
    { v: 'bootcamp', l: 'Bootcamp' },
  ];
  const visible = SPEAKERS.filter((s) => filter === 'all' ? true : s.flag[0] === filter);
  return (
    <section style={{ paddingTop: 'clamp(40px, 5vw, 72px)', paddingBottom: 'var(--pad-section)' }}>
      <div className="wrap">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'end', gap: 24, marginBottom: 'clamp(32px, 4vw, 56px)', flexWrap: 'wrap' }}>
          <div>
            <div className="eyebrow" style={{ marginBottom: 24 }}>◐ 2025 Line-Up</div>
            <h2 className="display" style={{ margin: 0, fontSize: 'clamp(40px, 5.6vw, 88px)' }}>
              {SPEAKERS.length} voices, <em>one long table.</em>
            </h2>
          </div>
          <div className="sp-filter" role="tablist">
            {filters.map((f) => (
              <button key={f.v} className={filter === f.v ? 'active' : ''} onClick={() => setFilter(f.v)}>{f.l}</button>
            ))}
          </div>
        </div>
        <div className="sp-grid">
          {visible.map((s) => (
            <SpeakerCard key={s.name} s={s} i={SPEAKERS.indexOf(s)} />
          ))}
        </div>
      </div>
    </section>
  );
};

export const Apply: React.FC = () => (
  <section id="apply" style={{ paddingTop: 'clamp(40px, 6vw, 96px)', paddingBottom: 'clamp(80px, 10vw, 160px)' }}>
    <div className="wrap">
      <div className="apply-card">
        <div>
          <div className="eyebrow" style={{ color: 'var(--turq)', marginBottom: 24 }}>◐ Open call</div>
          <h2 className="display" style={{ margin: 0, fontSize: 'clamp(36px, 5vw, 76px)', color: 'var(--paper)' }}>
            Apply to <em>speak.</em>
          </h2>
          <p style={{ marginTop: 24, fontSize: 16, lineHeight: 1.6, color: 'rgba(246,241,232,.75)', maxWidth: 460 }}>
            We pick speakers like we pick neighbours — for the kind of person they are,
            not the size of their following. Tell us what you'd build at the long table.
          </p>
        </div>
        <div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14, fontFamily: 'ui-monospace, monospace', fontSize: 12, color: 'rgba(246,241,232,.7)', letterSpacing: '.08em' }}>
            <div>◐ Solo talks · 25 min</div>
            <div>◐ Workshops · 90 min, hands-on</div>
            <div>◐ Panels · 4 voices, sea behind us</div>
            <div>◐ Applications · open</div>
          </div>
          <div style={{ marginTop: 32, display: 'flex', gap: 14, flexWrap: 'wrap' }}>
            <a href={SPEAKER_FORM} target="_blank" rel="noopener noreferrer" style={{ background: 'var(--turq)', color: 'var(--ink)', padding: '18px 28px', borderRadius: 999, fontWeight: 700, fontSize: 13, letterSpacing: '.1em', textTransform: 'uppercase', textDecoration: 'none' }}>Submit your talk →</a>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Speaker2026Card: React.FC<{ s: Speaker2026; i: number }> = ({ s, i }) => (
  <div className="sp-card">
    <div className="sp-photo">
      {s.photo
        ? <Img src={`/${s.photo}`} alt={s.name} loading="lazy" decoding="async" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top center', display: 'block' }} />
        : <Photo caption={s.name} palette={s.pal} />
      }
      <span className="sp-num">{String(i + 1).padStart(2, '0')} / {SPEAKERS_2026.length}</span>
      <span className={`sp-flag ${s.format}`}>{s.formatLabel}</span>
    </div>
    <div>
      <h3 className="sp-name">{s.name}</h3>
      <div className="sp-role">{s.role}</div>
      <p className="sp-bio">{s.bio}</p>
      <div className="sp-talk"><b>{s.talk[0]}</b>{s.talk[1]}</div>
    </div>
    <div className="sp-foot">
      <span>{s.site ?? '◐ TNF · 2026'}</span>
      {s.link !== '#' && (
        <a href={s.link} className="sp-li" target="_blank" rel="noopener noreferrer">
          {s.linkLabel === 'LinkedIn' && <LinkedIn />} {s.linkLabel}
        </a>
      )}
    </div>
  </div>
);

const Speakers2026: React.FC = () => {
  const [filter, setFilter] = React.useState('all');
  const filters = [
    { v: 'all', l: 'All' },
    { v: 'keynote', l: 'Keynotes' },
    { v: 'workshop', l: 'Workshops' },
    { v: 'panel', l: 'Panels' },
  ];
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
            {filters.map((f) => (
              <button key={f.v} className={filter === f.v ? 'active' : ''} onClick={() => setFilter(f.v)}>{f.l}</button>
            ))}
          </div>
        </div>
        <div className="sp-grid">
          {visible.map((s) => (
            <Speaker2026Card key={s.name} s={s} i={SPEAKERS_2026.indexOf(s)} />
          ))}
        </div>
      </div>
    </section>
  );
};

export const SpeakersPage: React.FC = () => {
  useSEO({
    title: 'Speakers — Turkiye Nomad Fest 2026',
    description: 'Meet the speakers and thought leaders at Turkiye Nomad Fest 2026 in Alanya. Solopreneurship, AI, and location-independent living.',
    canonical: '/speakers',
  });
  return (
  <>
    <InnerHeader current="/speakers" />
    <main>
      <PageHero />
      <Speakers2026 />
      <InnerDivider tone="sand" left="◐ 2025 Line-Up" mid={`${SPEAKERS.length} speakers`} right="The first edition · MMXXV" />
      <SpeakersGrid />
      <Apply />
    </main>
    <InnerFooter />
  </>
  );
};
