import { tr } from './tr';
import { en } from './en';
import type { Copy } from './tr';

export type Locale = 'tr' | 'en';

const COPIES: Record<Locale, Copy> = { tr, en };

export function getLocale(): Locale {
  if (typeof window === 'undefined') return 'tr';
  const path = window.location.pathname;
  return path.startsWith('/en') ? 'en' : 'tr';
}

export function useCopy(): Copy {
  return COPIES[getLocale()];
}
