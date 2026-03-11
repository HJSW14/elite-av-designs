export interface ServiceArea {
  slug: string;
  city: string;
  tagline: string;
  description: string;
  highlights: string[];
  neighborhoods: string[];
}

export const areas: ServiceArea[] = [
  {
    slug: "sacramento",
    city: "Sacramento",
    tagline: "Fast towing and roadside assistance across Sacramento",
    description:
      "Sacramento is our home base and primary service area. From Downtown and Midtown to East Sacramento, Natomas, South Sacramento, and everything in between, our trucks cover the entire city 24 hours a day. Whether you are stranded on I-5, stuck in a parking lot near the Capitol, or need a flatbed for your vehicle in any Sacramento neighborhood, we dispatch immediately and aim for quick arrival. Our drivers know Sacramento's streets and can navigate to you day or night.",
    highlights: [
      "24/7 coverage across all Sacramento neighborhoods",
      "Fast dispatch on all major corridors",
      "Experienced with Sacramento's freeways: I-5, I-80, and Highway 50",
      "Flatbed service available for luxury and specialty vehicles throughout Sacramento",
    ],
    neighborhoods: [
      "Downtown",
      "Midtown",
      "East Sacramento",
      "Natomas",
      "South Sacramento",
      "Oak Park",
      "Land Park",
      "Pocket",
      "Arden-Arcade",
      "North Highlands",
    ],
  },
  {
    slug: "elk-grove",
    city: "Elk Grove",
    tagline: "Dependable towing for Elk Grove drivers, any time of day",
    description:
      "Elk Grove's growing residential communities and major corridors along Elk Grove Boulevard, Bruceville Road, and Highway 99 keep our trucks busy around the clock. We service all Elk Grove neighborhoods and surrounding rural roads, including the areas near Laguna West and Stonelake. Residents who have tried to call for help late at night know how hard it can be to find someone fast -- we answer every call and dispatch immediately.",
    highlights: [
      "Full coverage of Elk Grove's residential and commercial zones",
      "Service along Highway 99 and all major Elk Grove corridors",
      "Rural road and shoulder towing for areas outside city limits",
      "Same fast-response commitment as Sacramento",
    ],
    neighborhoods: [
      "Laguna West",
      "Stonelake",
      "Elk Grove Proper",
      "Lent Ranch",
      "Sheldon",
      "Cosumnes",
    ],
  },
  {
    slug: "rancho-cordova",
    city: "Rancho Cordova",
    tagline: "Towing and recovery for Rancho Cordova and the US-50 corridor",
    description:
      "Rancho Cordova sits along the busy US-50 corridor, and freeway breakdowns here are a regular call for our team. We cover industrial parks, office complexes, and residential areas throughout the city. Whether your vehicle broke down near Mather Field, you are stuck on the shoulder of Highway 50, or you need a late-night tow from a parking lot on Sunrise Boulevard, we are close by and ready.",
    highlights: [
      "Frequent service along the US-50 and Sunrise corridor",
      "Industrial and commercial area coverage",
      "Fast dispatch from our Sacramento base",
      "Available 24/7 for freeway and surface street calls",
    ],
    neighborhoods: [
      "Mather Field area",
      "Folsom Boulevard corridor",
      "Sunrise Boulevard area",
      "Anatolia",
      "Grant Line area",
    ],
  },
  {
    slug: "folsom",
    city: "Folsom",
    tagline: "Trusted towing and roadside help throughout Folsom",
    description:
      "Folsom's mix of historic downtown streets, newer master-planned communities like Empire Ranch, and the winding roads around Folsom Lake creates a variety of towing scenarios our team handles daily. We are familiar with the area and cover everything from downtown Folsom to the lake areas, Natoma Station, and the neighborhoods along Blue Ravine Road. Residents with luxury vehicles appreciate our flatbed service, which is always available for cars that should not be dragged.",
    highlights: [
      "Coverage of historic downtown and new master-planned communities",
      "Service along Folsom Lake area roads and canyon routes",
      "Flatbed preferred by Folsom luxury and sports car owners",
      "Prompt dispatch from Sacramento for competitive arrival times",
    ],
    neighborhoods: [
      "Historic Downtown Folsom",
      "Empire Ranch",
      "Natoma Station",
      "Oak Avenue Parkway area",
      "Blue Ravine",
      "Broadstone",
    ],
  },
  {
    slug: "roseville",
    city: "Roseville",
    tagline: "24/7 towing and roadside service across Roseville",
    description:
      "Roseville's high-traffic retail corridors -- Galleria Boulevard, Douglas Boulevard, and Auburn Boulevard -- generate regular breakdown and accident calls that our team responds to day and night. We service all of Roseville including the newer residential areas like West Roseville, Highland Reserve, and the neighborhoods around Woodcreek Oaks. No matter where you are in Roseville, our dispatch will route the nearest available truck to you.",
    highlights: [
      "Coverage of all major retail corridors and residential neighborhoods",
      "Experience with Roseville's busy freeway interchanges (I-80 and Hwy 65)",
      "Dispatch routed to nearest truck for fastest response",
      "Flatbed service available throughout Roseville",
    ],
    neighborhoods: [
      "West Roseville",
      "Highland Reserve",
      "Woodcreek Oaks",
      "Galleria area",
      "Dry Creek",
      "Diamond Oaks",
    ],
  },
  {
    slug: "citrus-heights",
    city: "Citrus Heights",
    tagline: "Reliable towing in Citrus Heights around the clock",
    description:
      "Citrus Heights is a dense suburb with high call volume, especially during evening and weekend hours when breakdowns along Greenback Lane, Auburn Boulevard, and Sunrise Boulevard spike. Our drivers cover all of Citrus Heights and the surrounding unincorporated areas, including Fair Oaks and Orangevale. We maintain consistent evening and weekend coverage throughout Citrus Heights so you are never left waiting.",
    highlights: [
      "Consistent evening and weekend coverage throughout Citrus Heights",
      "Service on Greenback, Auburn Boulevard, and Sunrise corridors",
      "Coverage extends into Fair Oaks and Orangevale",
      "24/7 dispatch with live answering, no automated menus",
    ],
    neighborhoods: [
      "Greenback Lane area",
      "Auburn Boulevard corridor",
      "Rusch Park area",
      "Antelope",
      "Fair Oaks (adjacent)",
      "Orangevale (adjacent)",
    ],
  },
];
