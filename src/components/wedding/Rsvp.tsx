import { useState } from "react";

export function Rsvp({ guestName }: { guestName: string }) {
  const [name, setName] = useState(guestName);
  const [attending, setAttending] = useState<boolean | null>(null);
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);

  if (sent) {
    return (
      <div className="animate-shimmer-in rounded-3xl border border-[var(--rose-soft)] bg-[var(--cream)] p-10 text-center">
        <p className="text-4xl">🕊️</p>
        <h3 className="mt-4 font-display text-3xl text-[var(--cocoa)]">
          Thank you, {name || "Guest"}!
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-[var(--cocoa-soft)]">
          {attending
            ? "We can't wait to celebrate with you. Aapka intezaar rahega! 💛"
            : "We understand, and you will be missed! You'll be in our hearts on our special day. 💛"}
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSent(true);
      }}
      className="rounded-3xl border border-[var(--rose-soft)] bg-[var(--cream)] p-8 sm:p-10"
    >
      <p className="text-center text-4xl">💌</p>

      <label className="mt-6 block text-xs uppercase tracking-[0.2em] text-[var(--cocoa-soft)]">
        Guest name
      </label>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
        className="mt-2 w-full rounded-full border border-[var(--rose-soft)] bg-white/70 px-5 py-3 font-display text-lg text-[var(--cocoa)] outline-none focus:border-[var(--rose)]"
      />

      <p className="mt-6 text-xs uppercase tracking-[0.2em] text-[var(--cocoa-soft)]">
        Will you be attending?
      </p>
      <div className="mt-3 grid gap-3 sm:grid-cols-2">
        {[
          [true, "I will be joining you"],
          [false, "I won't be able to attend"],
        ].map(([value, label]) => (
          <button
            key={String(value)}
            type="button"
            onClick={() => setAttending(value as boolean)}
            className={`rounded-full border px-4 py-3 text-sm transition ${
              attending === value
                ? "border-[var(--rose)] bg-[var(--rose)] text-[var(--cream)]"
                : "border-[var(--rose-soft)] bg-white/70 text-[var(--cocoa-soft)] hover:border-[var(--rose)]"
            }`}
          >
            {label as string}
          </button>
        ))}
      </div>

      <label className="mt-6 block text-xs uppercase tracking-[0.2em] text-[var(--cocoa-soft)]">
        Message for the couple
      </label>
      <textarea
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        rows={3}
        className="mt-2 w-full rounded-2xl border border-[var(--rose-soft)] bg-white/70 px-5 py-3 text-sm text-[var(--cocoa)] outline-none focus:border-[var(--rose)]"
      />

      <button
        type="submit"
        disabled={attending === null}
        className="mt-7 w-full rounded-full bg-[var(--rose)] px-6 py-4 text-sm uppercase tracking-[0.25em] text-[var(--cream)] transition hover:opacity-90 disabled:opacity-40"
      >
        Share My Response
      </button>
    </form>
  );
}
