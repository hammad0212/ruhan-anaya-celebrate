import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import bgImg from "@/assets/bg.jpg";
import { BRIDE, GROOM, WEDDING_DATE, events } from "@/components/wedding/data";
import { WelcomeGate } from "@/components/wedding/WelcomeGate";
import { Countdown } from "@/components/wedding/Countdown";
import { Rsvp } from "@/components/wedding/Rsvp";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: `${GROOM} & ${BRIDE} — Wedding Invitation | 14–15 Nov 2026` },
      {
        name: "description",
        content:
          "Nikah at Shahe Aalam Dargah on 14 November 2026, reception at Kohinoor Farm the same evening, and Anaya Farm reception on 15 November 2026.",
      },
      { property: "og:title", content: `${GROOM} & ${BRIDE} — Wedding Invitation` },
      {
        property: "og:description",
        content:
          "Join us for the Nikah and receptions on 14 & 15 November 2026 in Ahmedabad.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

function Index() {
  const [guest, setGuest] = useState<string | null>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setGuest(sessionStorage.getItem("wedding-guest"));
    setReady(true);
  }, []);

  const handleEnter = (name: string) => {
    sessionStorage.setItem("wedding-guest", name);
    setGuest(name);
  };

  const who = guest ?? "Guest";

  return (
    <main className="min-h-screen bg-[var(--cream)] font-body text-[var(--cocoa)]">
      {ready && !guest && <WelcomeGate onEnter={handleEnter} />}

      {/* Hero */}
      <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 text-center">
        <img
          src={bgImg}
          alt="Warm candlelit wedding celebration"
          width={1536}
          height={1024}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-[var(--cocoa)]/65" />
        <div className="relative z-10 w-full max-w-3xl py-24">
          <p className="animate-fade-up font-display text-xl text-[var(--gold)]">
            بِسْمِ اللَّٰهِ الرَّحْمَٰنِ الرَّحِيمِ
          </p>
          <p className="animate-fade-up mt-6 text-sm italic text-[var(--cream)]/85">
            Dear {who}, you are warmly invited to witness…
          </p>
          <h1 className="animate-fade-up mt-5 font-display text-5xl font-semibold leading-tight text-[var(--cream)] sm:text-7xl">
            {GROOM}
            <span className="mx-4 text-[var(--gold)]">&amp;</span>
            {BRIDE}
          </h1>
          <p className="animate-fade-up mt-5 text-sm uppercase tracking-[0.3em] text-[var(--gold)]">
            14th &amp; 15th November, 2026
          </p>

          <div className="mt-10">
            <Countdown target={WEDDING_DATE} />
          </div>

          <a
            href="#celebration"
            className="animate-float-soft mt-12 inline-block text-xs uppercase tracking-[0.3em] text-[var(--cream)]/80"
          >
            Scroll ↓
          </a>
        </div>
      </section>

      {/* Events */}
      <section id="celebration" className="mx-auto max-w-5xl px-6 py-24">
        <p className="text-center text-xs uppercase tracking-[0.35em] text-[var(--rose)]">
          The Celebration
        </p>
        <h2 className="mt-4 text-center font-display text-4xl text-[var(--cocoa)] sm:text-5xl">
          Dear {who}, here is what awaits you…
        </h2>

        <div className="mt-16 space-y-16">
          {events.map((e, i) => (
            <article
              key={e.title}
              className={`flex flex-col items-center gap-8 md:gap-12 ${
                i % 2 ? "md:flex-row-reverse" : "md:flex-row"
              }`}
            >
              <div className="w-full md:w-1/2">
                <img
                  src={e.image}
                  alt={e.title}
                  loading="lazy"
                  width={1024}
                  height={1024}
                  className="h-72 w-full rounded-3xl object-cover shadow-lg md:h-96"
                />
              </div>
              <div className="w-full text-center md:w-1/2 md:text-left">
                <p className="text-3xl">{e.emoji}</p>
                <p className="mt-3 text-xs uppercase tracking-[0.25em] text-[var(--rose)]">
                  {e.date} • {e.time}
                </p>
                <h3 className="mt-3 font-display text-3xl text-[var(--cocoa)] sm:text-4xl">
                  {e.title}
                </h3>
                <p className="mt-3 font-display text-xl text-[var(--gold)]">{e.venue}</p>
                <p className="mt-1 text-sm text-[var(--cocoa-soft)]">{e.address}</p>
                <p className="mt-4 text-sm leading-relaxed text-[var(--cocoa-soft)]">
                  {e.description}
                </p>
                <a
                  href={e.map}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-5 inline-block rounded-full border border-[var(--rose)] px-6 py-2.5 text-xs uppercase tracking-[0.2em] text-[var(--rose)] transition hover:bg-[var(--rose)] hover:text-[var(--cream)]"
                >
                  Get Directions
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Blessing */}
      <section className="bg-[var(--cream-2)] px-6 py-24 text-center">
        <p className="text-3xl">🕌</p>
        <p className="mx-auto mt-6 max-w-2xl font-display text-2xl italic leading-relaxed text-[var(--cocoa)] sm:text-3xl">
          &ldquo;And among His signs is that He created for you mates from among yourselves,
          that you may dwell in tranquillity with them, and He has placed love and mercy
          between your hearts.&rdquo;
        </p>
        <p className="mt-6 text-xs uppercase tracking-[0.3em] text-[var(--rose)]">
          Surah Ar-Rum 30:21
        </p>
      </section>

      {/* RSVP */}
      <section className="mx-auto max-w-xl px-6 py-24">
        <p className="text-center text-xs uppercase tracking-[0.35em] text-[var(--rose)]">RSVP</p>
        <h2 className="mt-4 text-center font-display text-4xl text-[var(--cocoa)]">
          Dear {who}, will you join us?
        </h2>
        <div className="mt-10">
          <Rsvp guestName={who === "Guest" ? "" : who} />
        </div>
      </section>

      <footer className="bg-[var(--cocoa)] px-6 py-16 text-center text-[var(--cream)]">
        <p className="text-3xl">🪔</p>
        <p className="mx-auto mt-5 max-w-xl text-sm italic leading-relaxed text-[var(--cream)]/80">
          &ldquo;Agar kisi ka naam lena bhool jayein, toh dil se sabke liye mohabbat hai.&rdquo;
        </p>
        <p className="mt-8 font-display text-3xl text-[var(--gold)]">
          {GROOM} &amp; {BRIDE}
        </p>
        <p className="mt-2 text-xs uppercase tracking-[0.3em] text-[var(--cream)]/60">
          14 &amp; 15 November 2026 · Ahmedabad
        </p>
      </footer>
    </main>
  );
}
