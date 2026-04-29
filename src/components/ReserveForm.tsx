import React from 'react';

type FormState = 'idle' | 'submitting' | 'success' | 'error';

const RATE_LIMIT_MS = 30_000;
let lastSubmit = 0;

export const ReserveForm: React.FC = () => {
  const [state, setState] = React.useState<FormState>('idle');
  const [error, setError] = React.useState('');
  const formRef = React.useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const now = Date.now();
    if (now - lastSubmit < RATE_LIMIT_MS) {
      setError('Please wait a moment before submitting again.');
      return;
    }

    const data = new FormData(e.currentTarget);

    // Honeypot check — bots fill this hidden field, humans don't
    if (data.get('website')) return;

    setState('submitting');
    setError('');

    const apiUrl = import.meta.env.VITE_RESERVE_API_URL as string | undefined;
    if (!apiUrl) {
      setState('error');
      setError('Reservation endpoint not configured.');
      return;
    }

    try {
      lastSubmit = now;
      const res = await fetch(apiUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: data.get('name'),
          email: data.get('email'),
        }),
      });

      if (!res.ok) throw new Error(`${res.status}`);
      setState('success');
      formRef.current?.reset();
    } catch {
      setState('error');
      setError('Something went wrong. Please try again or email us directly.');
    }
  };

  if (state === 'success') {
    return (
      <div role="status" aria-live="polite" style={{ padding: '28px 0', color: 'var(--turq)', fontFamily: 'var(--sans)', fontWeight: 600, fontSize: 17 }}>
        ✓ You're on the list. We'll be in touch soon.
      </div>
    );
  }

  return (
    <form ref={formRef} onSubmit={handleSubmit} noValidate style={{ display: 'flex', flexDirection: 'column', gap: 14, maxWidth: 440 }}>
      {/* Honeypot — hidden from humans, visible to bots */}
      <input
        name="website"
        type="text"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        style={{ position: 'absolute', left: '-9999px', width: 1, height: 1, overflow: 'hidden' }}
      />

      <input
        name="name"
        type="text"
        required
        placeholder="Your name"
        autoComplete="name"
        style={inputStyle}
        aria-label="Your name"
      />
      <input
        name="email"
        type="email"
        required
        placeholder="Email address"
        autoComplete="email"
        style={inputStyle}
        aria-label="Email address"
      />

      {error && (
        <div role="alert" aria-live="assertive" style={{ fontSize: 13, color: '#D64545' }}>{error}</div>
      )}

      <button
        type="submit"
        disabled={state === 'submitting'}
        style={{
          background: 'var(--turq)', color: 'var(--ink)',
          padding: '16px 28px', borderRadius: 999,
          fontWeight: 700, fontSize: 13, letterSpacing: '.1em',
          textTransform: 'uppercase', border: 'none', cursor: state === 'submitting' ? 'wait' : 'pointer',
          opacity: state === 'submitting' ? 0.7 : 1,
          transition: 'opacity 0.15s',
          alignSelf: 'flex-start',
        }}
      >
        {state === 'submitting' ? 'Reserving…' : 'Reserve your seat →'}
      </button>
    </form>
  );
};

const inputStyle: React.CSSProperties = {
  padding: '14px 18px',
  borderRadius: 10,
  border: '1px solid rgba(14,15,18,.18)',
  fontFamily: 'var(--sans)',
  fontSize: 15,
  background: 'rgba(255,255,255,.9)',
  color: 'var(--ink)',
  outline: 'none',
  width: '100%',
};
