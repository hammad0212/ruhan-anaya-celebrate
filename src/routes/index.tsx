import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import heroImg from "@/assets/hero.jpg";

const GROOM = "Ruhan Sayied";
const BRIDE = "Dulhan"; // TODO: replace with the bride's name
const WEDDING_DATE = new Date("2026-11-14T09:00:00+05:30");

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: `${GROOM} & ${BRIDE} — Wedding | 14–15 Nov 2026` },
      {
        name: "description",
        content:
          "Join us for the Nikah at Shahe Aalam Dargah on 14 November 2026, followed by receptions at Kohinoor Farm and Anaya Farm.",
      },
      { property: "og:title", content: `${GROOM} & ${BRIDE} — Wedding Invitation` },
      {
        property: "og:description",
        content:
          "Nikah, 14 Nov 2026 at Shahe Aalam Dargah. Receptions at Kohinoor Farm (14 Nov) and Anaya Farm (15 Nov).",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const events = [
  {
    day: "14 November 2026",
    time: "Subah / Morning",
    title: "Nikah",
    venue: "Shahe Aalam Dargah",
    address: "Shahe Aalam Roza, Ahmedabad",
    note: "The sacred ceremony — please join us for duas and blessings.",
    map: "https://www.google.com/maps/search/?api=1&query=Shahe+Aalam+Dargah+Ahmedabad",
  },
  {
    day: "14 November 2026",
    time: "Raat / Evening",
    title: "Reception — Bride's Side",
    venue: "Kohinoor Farm",
    address: "Near MD Farm, Opposite ZK Farm",
    note: "Dinner and celebrations hosted by the bride's family.",
    map: "https://www.google.com/maps/search/?api=1&query=Kohinoor+Farm+near+MD+Farm",
  },
  {
    day: "15 November 2026",
    time: "Raat / Evening",
    title: "Reception — Groom's Side",
    venue: "Anaya Farm",
    address: "Near Ahad Sports Club",
    note: "Dinner and celebrations hosted by the groom's family.",
    map: "https://www.google.com/maps/search/?api=1&query=Anaya+Farm+near+Ahad+Sports+Club",
  },
];

function useCountdown(target: Date) {
  const [left, setLeft] = useState<number | null>(null);
  useEffect(() => {
    const tick = () => setLeft(target.getTime() - Date.now());
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, [target]);
  if (left === null) return null;
  const s = Math.max(0, Math.floor(left / 1000));
  return {
    days: Math.floor(s / 86400),
    hours: Math.floor((s % 86400) / 3600),
    minutes: Math.floor((s % 3600) / 60),
    seconds: s % 60,
  };
}

function Divider() {
  return (
    <div className="flex items-center justify-center gap-3 py-6">
      <span className="h-px w-16 bg-gradient-to-r from-transparent to-[var(--gold)]" />
      <span className="text-[var(--gold)] text-lg">&#10022;</span>
      <span className="h-px w-16 bg-gradient-to-l from-transparent to-[var(--gold)]" />
    </div>
  );
}

function Index() {
  const c = useCountdown(WEDDING_DATE);

  return (
    <main className="min-h-screen bg-[var(--ink)] text-[var(--cream)] font-body">
      {/* Hero */}
      <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 text-center">
        <img
          src={heroImg}
          alt="Ornate emerald and gold Islamic wedding arch"
          width={1536}
          height={1024}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-[var(--ink)]/55" />
        <div className="relative z-10 mx-auto max-w-2xl py-20">
          <p className="font-display text-xl text-[var(--gold)]">
            بِسْمِ اللَّٰهِ الرَّحْمَٰنِ الرَّحِيمِ
          </p>
          <p className="mt-6 text-xs uppercase tracking-[0.4em] text-[var(--cream)]/70">
            With the blessings of Allah
          </p>
          <h1 className="mt-6 font-display text-5xl leading-tight text-[var(--gold)] sm:text-7xl">
            {GROOM}
            <span className="mx-3 block text-3xl italic text-[var(--cream)] sm:inline sm:text-4xl">
              &amp;
            </span>
            {BRIDE}
          </h1>
          <Divider />
          <p className="text-sm uppercase tracking-[0.3em] text-[var(--cream)]/80">
            14 &amp; 15 November 2026
          </p>
          <a
            href="#events"
            className="mt-10 inline-block rounded-full border border-[var(--gold)] px-8 py-3 text-xs uppercase tracking-[0.25em] text-[var(--gold)] transition hover:bg-[var(--gold)] hover:text-[var(--ink)]"
          >
            View Programme
          </a>
        </div>
      </section>

      {/* Countdown */}
      <section className="border-y border-[var(--gold)]/25 bg-[var(--ink-2)] py-14">
        <p className="text-center text-xs uppercase tracking-[0.35em] text-[var(--cream)]/60">
          Counting down to the Nikah
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-6 sm:gap-12">
          {(
            [
              ["Days", c?.days],
              ["Hours", c?.hours],
              ["Minutes", c?.minutes],
              ["Seconds", c?.seconds],
            ] as const
          ).map(([label, value]) => (
            <div key={label} className="min-w-20 text-center">
              <div className="font-display text-4xl text-[var(--gold)] sm:text-5xl">
                {value === undefined ? "--" : String(value).padStart(2, "0")}
              </div>
              <div className="mt-2 text-[0.65rem] uppercase tracking-[0.3em] text-[var(--cream)]/60">
                {label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Events */}
      <section id="events" className="mx-auto max-w-5xl px-6 py-20">
        <h2 className="text-center font-display text-4xl text-[var(--gold)] sm:text-5xl">
          Wedding Programme
        </h2>
        <Divider />
        <div className="mt-6 grid gap-8 md:grid-cols-3">
          {events.map((e) => (
            <article
              key={e.title}
              className="flex flex-col rounded-2xl border border-[var(--gold)]/30 bg-[var(--ink-2)] p-8 text-center transition hover:border-[var(--gold)]/70"
            >
              <p className="text-[0.7rem] uppercase tracking-[0.28em] text-[var(--gold)]">
                {e.day}
              </p>
              <h3 className="mt-4 font-display text-3xl text-[var(--cream)]">{e.title}</h3>
              <p className="mt-1 text-sm italic text-[var(--cream)]/70">{e.time}</p>
              <div className="my-5 h-px bg-[var(--gold)]/25" />
              <p className="font-display text-xl text-[var(--gold)]">{e.venue}</p>
              <p className="mt-2 text-sm text-[var(--cream)]/75">{e.address}</p>
              <p className="mt-4 flex-1 text-sm leading-relaxed text-[var(--cream)]/60">
                {e.note}
              </p>
              <a
                href={e.map}
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-block text-xs uppercase tracking-[0.25em] text-[var(--gold)] underline-offset-8 hover:underline"
              >
                Get Directions
              </a>
            </article>
          ))}
        </div>
      </section>

      {/* Blessing */}
      <section className="border-t border-[var(--gold)]/25 bg-[var(--ink-2)] px-6 py-20 text-center">
        <p className="mx-auto max-w-2xl font-display text-2xl italic leading-relaxed text-[var(--cream)]/90 sm:text-3xl">
          &ldquo;And among His signs is that He created for you mates from among yourselves,
          that you may dwell in tranquillity with them, and He has put love and mercy between
          your hearts.&rdquo;
        </p>
        <p className="mt-6 text-xs uppercase tracking-[0.3em] text-[var(--gold)]">
          Surah Ar-Rum 30:21
        </p>
      </section>

      <footer className="px-6 py-14 text-center">
        <p className="font-display text-3xl text-[var(--gold)]">
          {GROOM} &amp; {BRIDE}
        </p>
        <p className="mt-3 text-xs uppercase tracking-[0.3em] text-[var(--cream)]/55">
          14 &amp; 15 November 2026 &middot; Ahmedabad
        </p>
        <p className="mt-6 text-sm text-[var(--cream)]/50">
          Aapki dua aur hazri hamare liye qeemti hai. JazakAllah Khair.
        </p>
      </footer>
    </main>
  );
}
