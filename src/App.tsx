import React from 'react';
import { useTweaks, TweaksPanel, TweakSection, TweakRadio } from './components/Tweaks';
import { Hero } from './components/Hero';
import { Manifesto } from './components/Manifesto';
import { Roots } from './components/Roots';
import { Alanya } from './components/Alanya';
import { Experience } from './components/Experience';
import { Lived } from './components/Lived';
import { Bootcamp } from './components/Bootcamp';
import { Impact } from './components/Impact';
import { Hospitality } from './components/Hospitality';
import { Gallery } from './components/Gallery';
import { Footer } from './components/Footer';
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
            { value: 'airy', label: 'Airy' },
            { value: 'balanced', label: 'Balanced' },
            { value: 'packed', label: 'Packed' },
          ]}
        />
      </TweakSection>
    </TweaksPanel>
  );
};

const App: React.FC = () => {
  const [tweaks] = useTweaks(TWEAK_DEFAULTS);

  React.useEffect(() => {
    document.body.dataset.density = tweaks.density || 'balanced';
  }, [tweaks.density]);

  return (
    <>
      <a href="#main-content" className="skip-link">Skip to main content</a>
      <main id="main-content">
        <Hero />
        <Manifesto />
        <Roots />
        <Alanya />
        <Experience />
        <Lived />
        <Bootcamp />
        <Impact />
        <Hospitality />
        <Gallery />
      </main>
      <Footer />
      <TweaksRoot />
    </>
  );
};

export default App;
