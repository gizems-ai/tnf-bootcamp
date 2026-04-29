// Host iframe protocol — postMessage API between the preview iframe and the
// parent host. The panel posts __edit_mode_available on mount and
// __edit_mode_set_keys / __edit_mode_dismissed on user actions; the host
// sends __activate_edit_mode / __deactivate_edit_mode back.

export type HostInboundMessage =
  | { type: '__activate_edit_mode' }
  | { type: '__deactivate_edit_mode' };

export type HostOutboundMessage =
  | { type: '__edit_mode_available' }
  | { type: '__edit_mode_set_keys'; edits: Record<string, unknown> }
  | { type: '__edit_mode_dismissed' };

export type TweakDefaults = {
  density: 'airy' | 'balanced' | 'packed';
};

declare global {
  interface Window {
    /** Appends the preview-server auth token to relative asset URLs. */
    tok: (path: string) => string;

    /** Tweaks initial state injected by the host via the EDITMODE block. */
    TWEAK_DEFAULTS: TweakDefaults;
  }
}
