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
    slug: "denver",
    city: "Denver",
    tagline: "Bringing smart home technology to the Mile High City",
    description:
      "As Colorado's capital and largest metro area, Denver is home to a diverse range of properties, from historic Capitol Hill condos to modern RiNo lofts and sprawling Wash Park Victorians. Each presents unique opportunities for home technology integration. We have installed home theaters in century-old basements, wired smart automation into downtown penthouses, and designed surveillance systems for properties across the city. Whether you are in a high-rise near Union Station or a family home in Stapleton, our team knows how to work with Denver's varied architecture and building codes.",
    highlights: [
      "Custom installations in historic and modern Denver homes",
      "Experience with Denver permitting and building standards",
      "Fast response times from our Parker headquarters",
      "Dozens of completed projects across Denver neighborhoods",
    ],
    neighborhoods: [
      "Cherry Creek",
      "Wash Park",
      "Capitol Hill",
      "RiNo",
      "Stapleton",
      "Highlands",
      "Baker",
      "Congress Park",
    ],
  },
  {
    slug: "parker",
    city: "Parker",
    tagline: "Your local home technology team, right here in Parker",
    description:
      "Parker is our home base. Our office is here, our team lives here, and we have completed more projects in Parker than any other city we serve. Serving zip codes 80134, 80138, and 80108, we know every neighborhood, every builder, and every community. From the established homes near Mainstreet to new construction in Stonegate and The Pinery, we have designed and installed systems tailored to how Parker families live. Being local means faster service, quicker response for support calls, and a team that genuinely cares about your experience because we are your neighbors. We typically arrive within 30 minutes for service calls in Parker.",
    highlights: [
      "Our home base with the fastest service and response times",
      "Serving 80134, 80138, and 80108 zip codes",
      "Extensive relationships with local Parker builders (Toll Brothers, Richmond American, Oakwood)",
      "More completed projects here than anywhere else",
      "Active member of the Parker community since 2018",
    ],
    neighborhoods: [
      "Stonegate",
      "The Pinery",
      "Canterberry Crossing",
      "Idyllwilde",
      "Mainstreet",
      "Reatta Ridge",
      "Salisbury",
      "Newlin Gulch",
      "Pine Creek",
      "Meridian",
    ],
  },
  {
    slug: "highlands-ranch",
    city: "Highlands Ranch",
    tagline: "Premium home technology for Highlands Ranch residences",
    description:
      "Highlands Ranch (zip codes 80126, 80129, and 80130) is one of the largest planned communities in the country, and its well-appointed homes are ideal candidates for smart technology upgrades. We have installed Dolby Atmos theaters in HR basements, automated Lutron shading in sun-drenched great rooms, and built whole-home Control4 systems from Backcountry to Eastridge. The community's newer construction often includes pre-wired infrastructure that makes installation cleaner and more cost-effective. For older HR homes, we specialize in retrofit installations that deliver the same premium experience without major construction.",
    highlights: [
      "Extensive experience in HR's planned community homes (80126, 80129, 80130)",
      "Retrofit-friendly installations for older neighborhoods",
      "Pre-wire consultation for new Backcountry builds",
      "Short drive from our Parker office for fast support",
    ],
    neighborhoods: [
      "Backcountry",
      "Eastridge",
      "Westridge",
      "Northridge",
      "Town Center",
      "Highlands Heritage",
    ],
  },
  {
    slug: "castle-rock",
    city: "Castle Rock",
    tagline: "Home theater and automation experts serving Castle Rock",
    description:
      "Castle Rock's rapid growth (zip codes 80104, 80108, 80109) has brought a wave of beautiful new-construction homes that are perfect for home technology. Many buyers in Crystal Valley, Meadows, and The Village at Castle Pines are building dream homes and want integrated technology from day one. We work directly with Castle Rock builders during the construction phase to pre-wire for home theater, distributed audio, motorized shading, and security, saving thousands compared to retrofitting later. For existing homes, our team designs systems that integrate seamlessly without disruptive renovations.",
    highlights: [
      "Builder partnerships for pre-wire during new construction (80104, 80108, 80109)",
      "Growing portfolio of Castle Rock smart home projects",
      "Close proximity for fast installation and service calls",
      "Expertise in the area's popular floor plans and builders",
    ],
    neighborhoods: [
      "Crystal Valley",
      "The Meadows",
      "Castle Pines Village",
      "Terrain",
      "Plum Creek",
      "Red Hawk",
    ],
  },
  {
    slug: "lone-tree",
    city: "Lone Tree",
    tagline: "Luxury home technology for Lone Tree properties",
    description:
      "Lone Tree is home to some of the Denver metro's most impressive residences, and our clients here expect technology that matches the caliber of their homes. We have designed and installed everything from dedicated cinema rooms with reference-grade audio to whole-estate automation systems covering 10,000+ square feet. The community's proximity to Park Meadows and the DTC corridor means many of our Lone Tree clients are professionals who want their home to be a sanctuary: effortless to control, beautifully integrated, and invisible when not in use.",
    highlights: [
      "Specializing in high-end, luxury residential installations",
      "Whole-estate automation for large Lone Tree properties",
      "Experience with premium builders and custom homes",
      "Reference-grade home theater and audio systems",
    ],
    neighborhoods: [
      "Heritage Hills",
      "Ridgegate",
      "Carriage Club",
      "Lone Tree City Center",
    ],
  },
  {
    slug: "centennial",
    city: "Centennial",
    tagline: "Smart home solutions for Centennial families",
    description:
      "Centennial's established neighborhoods offer spacious homes with excellent bones for home technology upgrades. Many of our Centennial clients start with a single project, perhaps a home theater or a set of motorized shades, and expand their system over time as they experience the convenience. Our Control4 platform makes this incremental approach seamless: start with lighting and audio today, add security cameras and climate automation next year. The system grows with your needs and your budget.",
    highlights: [
      "Scalable systems that grow with your family's needs",
      "Strong track record in Centennial's established neighborhoods",
      "Retrofit installations that minimize disruption",
      "Ongoing support and system expansion as you grow",
    ],
    neighborhoods: [
      "Southglenn",
      "Walnut Hills",
      "Cherry Knolls",
      "Piney Creek",
      "Foxfield",
    ],
  },
  {
    slug: "aurora",
    city: "Aurora",
    tagline: "Home automation and theater installation in Aurora",
    description:
      "Aurora's diversity of housing, from downtown condos near the Anschutz campus to family homes in Saddle Rock and Tallyn's Reach, means every project is different. We bring the same attention to detail to a compact condo theater as we do to a full-estate automation buildout. Aurora's newer developments in the Southlands and Reunion areas often feature open floor plans that benefit tremendously from distributed audio and motorized shading, while older homes near Fitzsimons get new life with smart lighting and security upgrades.",
    highlights: [
      "Experience across Aurora's diverse housing types",
      "Compact solutions for condos and townhomes",
      "Full-scale systems for Saddle Rock and Tallyn's Reach homes",
      "Serving Aurora from nearby Parker for quick response",
    ],
    neighborhoods: [
      "Saddle Rock",
      "Tallyn's Reach",
      "Southlands",
      "Reunion",
      "Murphy Creek",
      "Fitzsimons",
    ],
  },
  {
    slug: "littleton",
    city: "Littleton",
    tagline: "Trusted home technology partner for Littleton residents",
    description:
      "Littleton's charming mix of historic downtown character and modern residential developments creates interesting opportunities for home technology. We have worked in everything from renovated craftsman homes near downtown Littleton to new builds in Ken Caryl and Columbine Valley. The city's strong community feel means many of our Littleton clients come from referrals, neighbors who saw what we built next door and wanted the same experience in their home. That word-of-mouth trust is something we take seriously.",
    highlights: [
      "Referral-driven reputation in the Littleton community",
      "Sensitive installations in historic and older homes",
      "New construction partnerships in Ken Caryl area",
      "Comprehensive service from design through ongoing support",
    ],
    neighborhoods: [
      "Ken Caryl",
      "Columbine Valley",
      "Grant Ranch",
      "Vintage Reserve",
      "Downtown Littleton",
    ],
  },
  {
    slug: "lakewood",
    city: "Lakewood",
    tagline: "Modern home technology for Lakewood homeowners",
    description:
      "Lakewood spans a wide swath of the western Denver metro, from the Green Mountain foothills to the neighborhoods around Belmar. The city's mix of mid-century ranch homes and newer construction gives us a range of projects to work with. We have converted Lakewood basements into dedicated theater rooms, installed whole-home audio systems in split-level homes, and designed security camera networks for properties with mountain-facing lots. If you are in Lakewood and thinking about upgrading your home's technology, we would love to help.",
    highlights: [
      "Creative solutions for Lakewood's mid-century homes",
      "Basement theater conversions in ranch-style properties",
      "Mountain-view lot security system design",
      "Full coverage of Lakewood from Green Mountain to Belmar",
    ],
    neighborhoods: [
      "Green Mountain",
      "Belmar",
      "Bear Creek",
      "Applewood",
      "Lakewood Estates",
    ],
  },
  {
    slug: "arvada",
    city: "Arvada",
    tagline: "Bringing smart home innovation to Arvada",
    description:
      "Arvada has undergone a remarkable transformation in recent years, with Olde Town's revitalization and new developments bringing a fresh energy to the city. Our Arvada projects range from cozy theater rooms in established Ralston Valley homes to complete smart home buildouts in Candelas and Leyden Rock. The city's growing population of young professionals and families means there is strong demand for home technology that is both powerful and intuitive. We design systems that every family member can use, not just the tech enthusiast.",
    highlights: [
      "Growing portfolio in Candelas and Leyden Rock",
      "Family-friendly systems designed for ease of use",
      "Theater and audio projects in established Arvada homes",
      "Olde Town Arvada area installations and retrofits",
    ],
    neighborhoods: [
      "Candelas",
      "Leyden Rock",
      "Ralston Valley",
      "West Woods",
      "Olde Town",
      "Whisper Creek",
    ],
  },
  {
    slug: "boulder",
    city: "Boulder",
    tagline: "Eco-conscious smart home technology for Boulder",
    description:
      "Boulder's environmentally conscious community appreciates technology that enhances comfort while reducing energy consumption. Our Boulder installations often emphasize energy-efficient motorized shading, smart climate control that adapts to Colorado's variable weather, and lighting automation that minimizes waste. We have worked in homes throughout Boulder, from the Chautauqua area to North Boulder and the Flatirons neighborhoods. Boulder's building environment, including its strict energy codes, is something we navigate with ease, ensuring every installation meets local requirements.",
    highlights: [
      "Energy-efficient smart home solutions aligned with Boulder values",
      "Experience with Boulder's strict building and energy codes",
      "Solar-integrated shading and climate automation",
      "Serving Boulder from the south metro for consistent support",
    ],
    neighborhoods: [
      "Chautauqua",
      "North Boulder",
      "Gunbarrel",
      "South Boulder",
      "Table Mesa",
      "Martin Acres",
    ],
  },
];
