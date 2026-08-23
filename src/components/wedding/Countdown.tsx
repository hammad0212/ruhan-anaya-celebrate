import { useEffect, useState } from "react";

export function Countdown({ target }: { target: Date }) {
  const [left, setLeft] = useState<number | null>(null);

  useEffect(() => {
    const tick = () => setLeft(target.getTime() - Date.now());
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, [target]);

  const s = left === null ? null : Math.max(0, Math.floor(left / 1000));
  const parts: [string, number | null][] = [
    ["Days", s === null ? null : Math.floor(s / 86400)],
    ["Hours", s === null ? null : Math.floor((s % 86400) / 3600)],
    ["Mins", s === null ? null : Math.floor((s % 3600) / 60)],
    ["Secs", s === null ? null : s % 60],
  ];

  return (
    <div className="flex items-end justify-center gap-2 sm:gap-4">
      {parts.map(([label, value], i) => (
        <div key={label} className="flex items-end gap-2 sm:gap-4">
          <div className="min-w-16 rounded-2xl border border-[var(--gold)]/40 bg-[var(--cream)]/10 px-3 py-3 text-center backdrop-blur-sm sm:min-w-24 sm:px-5 sm:py-4">
            <div className="font-display text-3xl text-[var(--cream)] sm:text-5xl">
              {value === null ? "--" : String(value).padStart(2, "0")}
            </div>
            <div className="mt-1 text-[0.6rem] uppercase tracking-[0.25em] text-[var(--cream)]/70">
              {label}
            </div>
          </div>
          {i < parts.length - 1 && (
            <span className="pb-6 font-display text-2xl text-[var(--gold)]">:</span>
          )}
        </div>
      ))}
    </div>
  );
}
