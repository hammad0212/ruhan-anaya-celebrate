import { useState } from "react";

export function WelcomeGate({ onEnter }: { onEnter: (name: string) => void }) {
  const [name, setName] = useState("");

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-5 backdrop-blur-md bg-[var(--cocoa)]/70">
      <div className="animate-shimmer-in relative w-full max-w-lg overflow-hidden rounded-3xl border border-[var(--rose-soft)] bg-[var(--cream)] p-9 text-center shadow-2xl sm:p-12">
        <span className="pointer-events-none absolute -right-4 -top-4 text-6xl opacity-60">🌸</span>
        <span className="pointer-events-none absolute -bottom-5 -left-4 text-6xl opacity-60">🌷</span>

        <p className="text-2xl text-[var(--gold)]">♥</p>
        <h1 className="mt-2 font-display text-5xl font-semibold text-[var(--cocoa)]">Welcome!</h1>
        <div className="mx-auto mt-3 flex w-40 items-center gap-2">
          <span className="h-px flex-1 bg-[var(--rose-soft)]" />
          <span className="text-sm text-[var(--rose)]">♥</span>
          <span className="h-px flex-1 bg-[var(--rose-soft)]" />
        </div>

        <p className="mt-7 text-sm uppercase leading-relaxed tracking-[0.18em] text-[var(--cocoa-soft)]">
          Please let us know your name
          <br />
          before you continue
        </p>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            onEnter(name.trim() || "Guest");
          }}
          className="mt-7"
        >
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
            aria-label="Your name"
            className="w-full rounded-full border border-[var(--rose-soft)] bg-white/80 px-6 py-4 text-center font-display text-xl text-[var(--cocoa)] outline-none placeholder:text-[var(--cocoa-soft)]/60 focus:border-[var(--rose)]"
          />
          <button
            type="submit"
            className="mt-5 w-full rounded-full bg-[var(--rose)] px-6 py-4 text-sm uppercase tracking-[0.25em] text-[var(--cream)] transition hover:opacity-90"
          >
            Enter ♡
          </button>
        </form>
        <p className="mt-4 text-xs text-[var(--cocoa-soft)]/70">
          Your name is only stored in this browser session
        </p>
      </div>
    </div>
  );
}
