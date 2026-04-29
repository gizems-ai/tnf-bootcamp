import { render, screen, act } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';

import { Hero } from '../components/Hero';
import { Manifesto } from '../components/Manifesto';
import { Roots } from '../components/Roots';
import { Alanya } from '../components/Alanya';
import { Experience } from '../components/Experience';
import { Lived } from '../components/Lived';
import { Bootcamp } from '../components/Bootcamp';
import { Impact } from '../components/Impact';
import { Hospitality } from '../components/Hospitality';
import { Gallery } from '../components/Gallery';
import { Footer } from '../components/Footer';

describe('smoke tests — each section renders without throwing', () => {
  it('Hero', () => { const { container } = render(<Hero />); expect(container.firstChild).toBeTruthy(); });
  it('Manifesto', () => { const { container } = render(<Manifesto />); expect(container.firstChild).toBeTruthy(); });
  it('Roots', () => { const { container } = render(<Roots />); expect(container.firstChild).toBeTruthy(); });
  it('Alanya', () => { const { container } = render(<Alanya />); expect(container.firstChild).toBeTruthy(); });
  it('Experience', () => { const { container } = render(<Experience />); expect(container.firstChild).toBeTruthy(); });
  it('Lived', () => { const { container } = render(<Lived />); expect(container.firstChild).toBeTruthy(); });
  it('Bootcamp', () => { const { container } = render(<Bootcamp />); expect(container.firstChild).toBeTruthy(); });
  it('Impact', () => { const { container } = render(<Impact />); expect(container.firstChild).toBeTruthy(); });
  it('Hospitality', () => { const { container } = render(<Hospitality />); expect(container.firstChild).toBeTruthy(); });
  it('Gallery', () => { const { container } = render(<Gallery />); expect(container.firstChild).toBeTruthy(); });
  it('Footer', () => { const { container } = render(<Footer />); expect(container.firstChild).toBeTruthy(); });
});

describe('Hero content', () => {
  it('renders h1 with village text', () => {
    render(<Hero />);
    expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument();
  });

  it('has main navigation landmark', () => {
    render(<Hero />);
    expect(screen.getByRole('navigation', { name: /main navigation/i })).toBeInTheDocument();
  });

  it('Reserve CTA links to #join', () => {
    render(<Hero />);
    const links = screen.getAllByRole('link', { name: /reserve/i });
    expect(links.some(l => l.getAttribute('href') === '#join')).toBe(true);
  });
});

describe('Tweaks panel postMessage protocol', () => {
  beforeEach(() => {
    vi.spyOn(window.parent, 'postMessage');
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('announces __edit_mode_available on mount', async () => {
    const { TweaksPanel } = await import('../components/Tweaks');
    render(<TweaksPanel title="Test"><div /></TweaksPanel>);
    expect(window.parent.postMessage).toHaveBeenCalledWith(
      { type: '__edit_mode_available' },
      '*',
    );
  });

  it('opens panel on __activate_edit_mode message', async () => {
    const { TweaksPanel } = await import('../components/Tweaks');
    render(<TweaksPanel title="Test"><span>content</span></TweaksPanel>);
    expect(screen.queryByText('Test')).not.toBeInTheDocument();

    await act(async () => {
      window.dispatchEvent(new MessageEvent('message', { data: { type: '__activate_edit_mode' } }));
    });
    expect(screen.getByText('Test')).toBeInTheDocument();
  });
});
