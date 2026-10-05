import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { useTweaks, TweaksPanel, TweakSection, TweakRadio } from './components/Tweaks';
import { TopBar } from './components/TopBar';
import { Hero } from './components/Hero';
import { Manifesto } from './components/Manifesto';
import { TilesGrid } from './components/TilesGrid';
import { Experience } from './components/Experience';
import { Bootcamp } from './components/Bootcamp';
import { Impact } from './components/Impact';
import { WeekProgram } from './components/WeekProgram';
import { WhyAlanya } from './components/WhyAlanya';
import { Roots } from './components/Roots';
import { Hospitality } from './components/Hospitality';
import { SpeakersSection } from './components/SpeakersSection';
import { Gallery } from './components/Gallery';
import { Footer } from './components/Footer';
const ProgramPage  = React.lazy(() => import('./pages/ProgramPage').then(m => ({ default: m.ProgramPage })));
const SpeakersPage = React.lazy(() => import('./pages/SpeakersPage').then(m => ({ default: m.SpeakersPage })));
const SpeakersAltPage = React.lazy(() => import('./pages/SpeakersAltPage').then(m => ({ default: m.SpeakersAltPage })));
const StayPage     = React.lazy(() => import('./pages/StayPage').then(m => ({ default: m.StayPage })));
const AlanyaPage   = React.lazy(() => import('./pages/AlanyaPage').then(m => ({ default: m.AlanyaPage })));
const BootcampPage = React.lazy(() => import('./pages/BootcampPage').then(m => ({ default: m.BootcampPage })));
import type { TweakDefaults } from './types/host';

const TWEAK_DEFAULTS: TweakDefaults = /*EDITMODE-BEGIN*/{
  density: 'balanced',
}/*EDITMODE-END*/;

const TweaksRoot: React.FC = () => {
  const [tweaks, setTweak] = useTweaks(TWEAK_DEFAULTS);
  return (
    <TweaksPanel title="Tweaks">
      <TweakSection label="Density">
        <TweakRadio
          value={tweaks.density}
          onChange={(v) => setTweak('density', v as TweakDefaults['density'])}
          options={[
            { value: 'airy',     label: 'Airy' },
            { value: 'balanced', label: 'Balanced' },
            { value: 'packed',   label: 'Packed' },
          ]}
        />
      </TweakSection>
    </TweaksPanel>
  );
};

const HomePage: React.FC = () => {
  const [tweaks] = useTweaks(TWEAK_DEFAULTS);

  React.useEffect(() => {
    document.body.dataset.density = tweaks.density || 'balanced';
  }, [tweaks.density]);

  return (
    <>
      <a href="#main-content" className="skip-link">Skip to main content</a>
      <TopBar />
      <main id="main-content">
        <Hero />
        <Manifesto />
        <WeekProgram />
        <WhyAlanya />
        <TilesGrid />
        <Experience />
        <Bootcamp />
        <Impact />
        <Roots />
        <Hospitality />
        <SpeakersSection />
        <Gallery />
      </main>
      <Footer />
      <TweaksRoot />
    </>
  );
};

const App: React.FC = () => (
  <React.Suspense fallback={null}>
    <Routes>
      <Route path="/"          element={<HomePage />} />
      <Route path="/program"   element={<ProgramPage />} />
      {/* The cut-out / gradient treatment is the live one. The original photo-card
          design stays reachable at /speakers-classic as a fallback. */}
      <Route path="/speakers"  element={<SpeakersAltPage />} />
      <Route path="/speakers-alt" element={<SpeakersAltPage />} />
      <Route path="/speakers-classic" element={<SpeakersPage />} />
      <Route path="/stay"      element={<StayPage />} />
      <Route path="/alanya"    element={<AlanyaPage />} />
      <Route path="/bootcamp"  element={<BootcampPage />} />
    </Routes>
  </React.Suspense>
);

export default App;
