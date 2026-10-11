export const couple = {
  groom: "Arslan",
  bride: "Amna",
  short: "Arslan & Amna",
  monogram: ["A", "A"] as const,
};

export const families = {
  groom: { parents: "Mr. & Mrs. Malik Arshad", relation: "Son of" },
  bride: { parents: "Mr. & Mrs. Eid Muhammad", relation: "Daughter of" },
  lookingForward: [
    "Abdul Ghafar (Late)",
    "M Tariq (Late)",
    "M Ishfaq",
    "M Iftikhar",
    "M Shahid",
    "M Irfan",
    "Farzand",
    "Ashraf",
    "Shahzad",
    "Ibrar",
    "Imran",
  ],
  brothers: ["Ali Hassan", "Hussnain"],
  sisters: ["Zainab", "Kashaf"],
  cousins: [
    "Bisma", "Muqadas", "Arooj", "Laiba", "Aliha", "Anaya", "Abeeha",
    "Arshma", "Sana", "Shiza", "Maira", "Qurat ul Ain", "Anum", "Ushna",
    "Muzammil", "Umar", "Farhan", "Anas", "Nouman", "Zeeshan (Shani)",
    "Talha", "Ahmed", "Moeez", "Asad", "Qasim", "Hasham", "Adnan", "Arham",
  ],
};

/** Contacts for guest queries — numbers in local Pakistani format */
export const contacts = [
  { name: "Eid Muhammad", role: "Father of the Bride", phone: "03054076275" },
  { name: "Muhammad Ishfaq", role: "For Queries", phone: "03214677605" },
  { name: "Ali Hassan", role: "Brother of the Bride", phone: "03718076275" },
];

/** 03059654192 -> 923059654192 (for tel: and WhatsApp links) */
export const intlPhone = (local: string) => `92${local.replace(/\D/g, "").replace(/^0/, "")}`;
/** 03059654192 -> 0305 9654192 */
export const prettyPhone = (local: string) => local.replace(/^(\d{4})(\d+)$/, "$1 $2");

export type WeddingEvent = {
  key: "mehndi" | "barat";
  title: string;
  day: string;
  time: string;
  venue: string;
  map: string;
  accent: string;
  /** UTC timestamps for Google Calendar (Pakistan = UTC+5) */
  start: string;
  end: string;
};

export const events: WeddingEvent[] = [
  {
    key: "mehndi",
    title: "Mehandi",
    day: "Tuesday, 26 January 2027",
    time: "6:00 PM – 9:00 PM",
    venue: "Palki Hall",
    map: "https://www.google.com/maps/search/?api=1&query=Palki+Hall",
    accent: "#b07a12",
    start: "20270126T130000Z",
    end: "20270126T160000Z",
  },
  {
    key: "barat",
    title: "Barat",
    day: "Wednesday, 27 January 2027",
    time: "6:00 PM – 9:00 PM",
    venue: "Zahid Palace Hall",
    map: "https://maps.app.goo.gl/wjUAisVYameC1c8c7",
    accent: "#8e2436",
    start: "20270127T130000Z",
    end: "20270127T160000Z",
  },
];

/** Barat — 27 January 2027, 6:00 PM Pakistan time */
export const countdownTarget = "2027-01-27T18:00:00+05:00";

export function calendarUrl(e: WeddingEvent) {
  const q = new URLSearchParams({
    action: "TEMPLATE",
    text: `${e.title} — ${couple.short}`,
    dates: `${e.start}/${e.end}`,
    location: e.venue,
    details: `${e.title} of ${couple.groom} & ${couple.bride}`,
  });
  return `https://calendar.google.com/calendar/render?${q.toString()}`;
}
