export const company = {
  name: "Elite AV Designs",
  legalName: "Elite AV Designs LLC",
  tagline: "Immersive Home Technology",
  description:
    "Denver's premier home theater, automation, and AV installation company. We design and install custom home theaters, smart home automation, motorized window coverings, and surveillance systems throughout the Denver metro area.",
  phone: "(303) 881-3413",
  email: "javier@eliteavdesigns.com",
  city: "Parker",
  state: "CO",
  zip: "80134",
  fullAddress: "Parker, Colorado",
  serviceAreas: [
    "Denver",
    "Parker",
    "Highlands Ranch",
    "Castle Rock",
    "Lone Tree",
    "Centennial",
    "Aurora",
    "Littleton",
    "Lakewood",
    "Arvada",
    "Boulder",
  ],
  hours: "Mon–Fri 8:00 AM – 6:00 PM",
  foundedYear: 2018,
  socials: {
    instagram: "#",
    facebook: "#",
    google: "#",
  },
} as const;

export const stats = [
  { label: "Years Experience", shortLabel: "Years", value: 7, suffix: "+" },
  { label: "Projects Completed", shortLabel: "Projects", value: 150, suffix: "+" },
  { label: "Brand Partners", shortLabel: "Partners", value: 25, suffix: "+" },
  { label: "5-Star Reviews", shortLabel: "Reviews", value: 50, suffix: "+" },
] as const;

export const brandPartners = [
  "Control4",
  "Lutron",
  "Sonos",
  "Sony",
  "Samsung",
  "Epson",
  "Marantz",
  "Hunter Douglas",
  "Nest",
  "Eero",
  "Luma View",
] as const;
