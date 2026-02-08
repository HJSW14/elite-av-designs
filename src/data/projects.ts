export interface Project {
  title: string;
  slug: string;
  location: string;
  category: string;
  description: string;
  image: string;
  features: string[];
}

export const featuredProject: Project = {
  title: "Highland Ranch Private Cinema",
  slug: "highland-ranch-cinema",
  location: "Highlands Ranch, CO",
  category: "Home Theater",
  description:
    "A dedicated 7.2.4 Dolby Atmos theater room featuring a 150-inch acoustically transparent screen, JBL Synthesis speakers, Sony 4K laser projection, and Control4 automation, all wrapped in custom acoustic panels and ambient LED lighting.",
  image:
    "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=1200&q=80",
  features: [
    "Dolby Atmos 7.2.4",
    "Sony 4K Laser",
    "Control4 Integration",
    "Acoustic Treatment",
  ],
};

export const projects: Project[] = [
  featuredProject,
  {
    title: "Castle Pines Smart Estate",
    slug: "castle-pines-estate",
    location: "Castle Pines, CO",
    category: "Home Automation",
    description:
      "Full Control4 whole-home automation across 8,000 sq ft including distributed audio, motorized shades, climate control, and a dedicated media room.",
    image:
      "https://images.unsplash.com/photo-1558002038-1055907df827?w=800&q=80",
    features: ["Control4", "Distributed Audio", "Lutron Shades", "Multi-zone HVAC"],
  },
  {
    title: "Parker Modern Residence",
    slug: "parker-modern-residence",
    location: "Parker, CO",
    category: "Window Coverings",
    description:
      "Lutron Palladiom motorized shades throughout a contemporary new build, programmed with daylight-tracking scenes and integrated with the home's Control4 system.",
    image:
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=800&q=80",
    features: ["Lutron Palladiom", "Daylight Tracking", "Control4 Scenes"],
  },
  {
    title: "Lone Tree Security Overhaul",
    slug: "lone-tree-security",
    location: "Lone Tree, CO",
    category: "Surveillance",
    description:
      "Comprehensive 16-camera 4K surveillance system covering a large residential property with smart motion zones, night vision, and fully integrated remote monitoring via the homeowner's Control4 system.",
    image:
      "https://images.unsplash.com/photo-1557597774-9d273605dfa9?w=800&q=80",
    features: ["16x 4K Cameras", "Night Vision", "Smart Zones", "Remote Access"],
  },
  {
    title: "Centennial Whole-Home Audio",
    slug: "centennial-whole-home-audio",
    location: "Centennial, CO",
    category: "Home Automation",
    description:
      "A 12-zone Sonos-based distributed audio network with architectural speakers, outdoor-rated zones for the patio and pool, and seamless Control4 integration for one-touch party and ambient modes.",
    image:
      "https://images.unsplash.com/photo-1545454675-3531b543be5d?w=800&q=80",
    features: ["Sonos 12-Zone", "Outdoor Audio", "Control4", "Architectural Speakers"],
  },
  {
    title: "Denver Penthouse Theater",
    slug: "denver-penthouse-theater",
    location: "Denver, CO",
    category: "Home Theater",
    description:
      "A compact yet immersive 5.1.2 theater built into a downtown penthouse, featuring a 120-inch short-throw laser projector, hidden in-wall speakers, motorized blackout shades, and Lutron Ketra tunable lighting.",
    image:
      "https://images.unsplash.com/photo-1593784991095-a205069470b6?w=800&q=80",
    features: ["Short-Throw Laser", "In-Wall Speakers", "Lutron Ketra", "Motorized Shades"],
  },
  {
    title: "Aurora Golf Simulator Build",
    slug: "aurora-golf-simulator",
    location: "Aurora, CO",
    category: "Home Theater",
    description:
      "Custom golf simulator installation featuring a high-speed launch monitor, impact screen with 4K projection, surround sound audio, and automated lighting scenes. The perfect year-round golf experience for Colorado winters.",
    image:
      "https://images.unsplash.com/photo-1587174486073-ae5e5cff23aa?w=800&q=80",
    features: ["Launch Monitor", "4K Projection", "Impact Screen", "Surround Audio"],
  },
  {
    title: "Littleton New Construction Pre-Wire",
    slug: "littleton-new-construction-prewire",
    location: "Littleton, CO",
    category: "Home Automation",
    description:
      "Complete structured cabling and pre-wire for a 5,000 sq ft new build. Conduit runs for future flexibility, in-wall speaker wire to 14 zones, CAT6A to every room, and centralized AV rack rough-in for whole-home Control4 integration.",
    image:
      "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&q=80",
    features: ["14-Zone Pre-Wire", "CAT6A Network", "Conduit Runs", "Future-Proof"],
  },
  {
    title: "Lakewood Multi-Zone Audio System",
    slug: "lakewood-multi-zone-audio",
    location: "Lakewood, CO",
    category: "Home Automation",
    description:
      "10-zone Sonos distributed audio with architectural in-ceiling speakers throughout the home, outdoor rock speakers for the patio and garden, and poolside zones with subwoofer. All zones controlled via Control4 for seamless whole-home music.",
    image:
      "https://images.unsplash.com/photo-1545454675-3531b543be5d?w=800&q=80",
    features: ["Sonos 10-Zone", "Rock Speakers", "Poolside Audio", "Control4"],
  },
  {
    title: "Boulder Modern Smart Home",
    slug: "boulder-modern-smart-home",
    location: "Boulder, CO",
    category: "Home Automation",
    description:
      "Comprehensive Control4 automation in a modern Boulder residence featuring Lutron RadioRA lighting, Hunter Douglas shades, Nest climate integration, Yale smart locks, and voice control via Alexa throughout the home.",
    image:
      "https://images.unsplash.com/photo-1558002038-1055907df827?w=800&q=80",
    features: ["Control4", "Lutron RadioRA", "Voice Control", "Smart Security"],
  },
  {
    title: "Arvada Outdoor Entertainment Oasis",
    slug: "arvada-outdoor-entertainment",
    location: "Arvada, CO",
    category: "Outdoor AV",
    description:
      "Complete outdoor entertainment transformation featuring a 75-inch SunBrite weatherproof TV, landscape audio with buried subwoofer, smart lighting control, and heated enclosure for year-round Colorado use.",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80",
    features: ["SunBrite TV", "Landscape Audio", "Smart Lighting", "Heated Enclosure"],
  },
  {
    title: "Denver Condo Compact Theater",
    slug: "denver-condo-compact-theater",
    location: "Denver, CO",
    category: "Home Theater",
    description:
      "Space-optimized 5.1.2 Atmos theater in a downtown condo featuring an 85-inch Sony OLED, in-wall speakers with minimal visual impact, acoustic panels designed as art pieces, and Control4 one-touch control.",
    image:
      "https://images.unsplash.com/photo-1593784991095-a205069470b6?w=800&q=80",
    features: ["85-inch OLED", "Hidden Speakers", "Acoustic Art", "Control4"],
  },
];
