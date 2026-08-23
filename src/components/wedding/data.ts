import nikahImg from "@/assets/nikah.jpg";
import reception1Img from "@/assets/reception1.jpg";
import reception2Img from "@/assets/reception2.jpg";

export const GROOM = "Ruhan Sayied";
export const BRIDE = "Dulhan"; // TODO: replace once the bride's name is shared
export const WEDDING_DATE = new Date("2026-11-14T09:00:00+05:30");

export type WeddingEvent = {
  emoji: string;
  date: string;
  time: string;
  title: string;
  venue: string;
  address: string;
  description: string;
  image: string;
  map: string;
};

export const events: WeddingEvent[] = [
  {
    emoji: "🕌",
    date: "14th November 2026",
    time: "Subah / Morning",
    title: "Nikah",
    venue: "Shahe Aalam Dargah",
    address: "Shahe Aalam Roza, Ahmedabad",
    description:
      "The sacred Nikah, read with duas and blessings at the Dargah. Aap sab ki hazri aur dua ki khwahish hai.",
    image: nikahImg,
    map: "https://www.google.com/maps/search/?api=1&query=Shahe+Aalam+Dargah+Ahmedabad",
  },
  {
    emoji: "🌙",
    date: "14th November 2026",
    time: "Raat / Evening",
    title: "Reception — Dulhan's Side",
    venue: "Kohinoor Farm",
    address: "Near MD Farm, Opposite ZK Farm",
    description:
      "Dinner aur jashn hosted by the bride's family — an evening of warmth, music and good food.",
    image: reception1Img,
    map: "https://www.google.com/maps/search/?api=1&query=Kohinoor+Farm+near+MD+Farm",
  },
  {
    emoji: "✨",
    date: "15th November 2026",
    time: "Raat / Evening",
    title: "Reception — Dulha's Side",
    venue: "Anaya Farm",
    address: "Near Ahad Sports Club",
    description:
      "Walima dawat hosted by the groom's family. Come dressed in your finest and celebrate with us.",
    image: reception2Img,
    map: "https://www.google.com/maps/search/?api=1&query=Anaya+Farm+near+Ahad+Sports+Club",
  },
];
