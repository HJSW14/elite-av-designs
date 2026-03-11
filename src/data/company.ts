export const company = {
  name: "Next Level Towing",
  legalName: "Next Level Towing & Transportation",
  tagline: "Day or night, one call and we're rolling.",
  description:
    "Sacramento's trusted 24/7 towing and roadside assistance service. Fast response times, upfront pricing, and flatbed trucks equipped for luxury, exotic, and everyday vehicles throughout Sacramento, Elk Grove, Rancho Cordova, Folsom, and Roseville.",
  phone: "(916) 234-8697",
  phoneHref: "tel:+19162348697",
  email: "nextleveltow@icloud.com",
  address: "11055 Folsom Blvd",
  city: "Rancho Cordova",
  state: "CA",
  zip: "95670",
  fullAddress: "11055 Folsom Blvd, Rancho Cordova, CA 95670",
  coords: { lat: 38.5891, lng: -121.3027 },
  serviceAreas: [
    "Sacramento",
    "Elk Grove",
    "Rancho Cordova",
    "Folsom",
    "Roseville",
    "Citrus Heights",
    "Davis",
    "West Sacramento",
  ],
  hours: "24/7, 365 days a year including holidays",
  responseTime: "Typically under an hour",
  foundedYear: 2020,
  copyrightYear: 2025,
  rating: 4.7,
  reviewCount: 10, // Update with actual Google review count when available
  priceRange: "$$",
  paymentMethods: ["Cash", "Credit Card", "Debit Card"],
  socials: {
    instagram: "#",
    facebook: "#",
    google:
      "https://www.google.com/search?sca_esv=0d5119dd49caab84&rlz=1C1ONGR_enUS1188US1188&sxsrf=ANbL-n7C8oMXfS-XKc0P_47-J2QTsMrf1A:1772932565419&si=AL3DRZEsmMGCryMMFSHJ3StBhOdZ2-6yYkXd_doETEE1OR-qOVcS8dDEhctl0yC5e0i7a7GYPbZ1Zco2GI6mbBsiksXsFv5OzEeFg5gaZBHS_cPYYtBmd_47WFmFYVax1wOzgoq4sR1TTUt-pZPx6frWmAM93JqmRg%3D%3D&q=Next+Level+Towing+and+Transport+Reviews&sa=X&ved=2ahUKEwjy15a-kI-TAxXhATQIHat_ADgQ0bkNegQITBAF&biw=960&bih=1617&dpr=1.5",
  },
} as const;

export const stats = [
  { label: "Avg Response", shortLabel: "Response", value: "Under", suffix: " 1 hr" },
  { label: "Customer Rating", shortLabel: "Rating", value: 4.7, suffix: "*" },
  { label: "24/7 Dispatch", shortLabel: "Service", value: 24, suffix: "/7" },
  { label: "Days a Year", shortLabel: "Days", value: 365, suffix: " days" },
] as const;

export const team = [
  {
    name: "Michael N.",
    role: "Founder & CEO",
  },
  {
    name: "Kay N.",
    role: "Operations Manager",
  },
  {
    name: "Luis L.",
    role: "Lead Technician",
  },
] as const;
