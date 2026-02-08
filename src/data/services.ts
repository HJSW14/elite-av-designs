import {
  Film,
  Home,
  Blinds,
  ShieldCheck,
  Tv,
  Music,
  Wifi,
  Sun,
  Speaker,
  Lightbulb,
  Building,
  type LucideIcon,
} from "lucide-react";

export interface ServiceFaq {
  question: string;
  answer: string;
}

export interface Service {
  title: string;
  slug: string;
  shortDescription: string;
  description: string;
  icon: LucideIcon;
  features: string[];
  image: string;
  faqs: ServiceFaq[];
}

export const services: Service[] = [
  {
    title: "Home Theater",
    slug: "home-theater",
    shortDescription:
      "Cinema-quality visuals and immersive surround sound, custom-designed for your space.",
    description:
      "Experience cinema-quality visuals and immersive audio in the comfort of your own home. Our custom-designed theaters deliver unforgettable viewing experiences with premium acoustics, 4K/8K projection, Dolby Atmos sound, and luxurious seating, all calibrated to your room.",
    icon: Film,
    features: [
      "Custom acoustic design & treatment",
      "Dolby Atmos surround sound",
      "4K & 8K projection systems",
      "Premium theater seating",
      "Ambient lighting control",
      "Media server integration",
    ],
    image:
      "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=800&q=80",
    faqs: [
      {
        question: "How much does a custom home theater cost in Denver?",
        answer:
          "A dedicated home theater typically ranges from $15,000 to $80,000+ depending on room size, display type (projector vs. large-format TV), audio configuration (5.1.2 to 7.2.4 Dolby Atmos), acoustic treatment, seating, and automation integration. We offer free consultations to help scope your project.",
      },
      {
        question: "What is the best room in my house for a home theater?",
        answer:
          "Basements are ideal because they are naturally dark and isolated from household noise. A rectangular room with minimal windows and at least 14 feet of depth works best for a projector and 120-inch screen. Spare bedrooms or bonus rooms can also work with proper light control and sound isolation.",
      },
      {
        question: "Do I need a projector or can I use a large TV?",
        answer:
          "Both work well. For dedicated dark rooms, a 4K laser projector with a 120\"+ screen creates the most cinematic experience. For multipurpose rooms with ambient light, an 85\" or 98\" OLED or mini-LED TV delivers deeper blacks and higher brightness. We help you choose based on your room and goals.",
      },
      {
        question: "What are the best projector brands for 2026?",
        answer:
          "Sony and Epson lead the market for home theater projectors. Sony's native 4K laser projectors (VPL-VW series) deliver exceptional contrast and color accuracy. Epson's Pro Cinema line offers excellent value with pixel-shifting 4K technology. JVC also makes premium models favored by videophiles. We help you choose based on room size, ambient light, and budget.",
      },
      {
        question: "Is Dolby Atmos worth it compared to traditional 5.1 surround?",
        answer:
          "Yes, if your room can accommodate overhead speakers or you can install in-ceiling speakers. Atmos adds height channels that create true 3D audio, with sounds moving overhead (helicopters, rain, etc.). A 7.2.4 Atmos system delivers a noticeably more immersive experience than traditional 5.1 or 7.1 surround. For smaller rooms or budget-conscious projects, 5.1.2 Atmos is a great middle ground.",
      },
      {
        question: "What kind of lighting should I use in a home theater?",
        answer:
          "Dimmable LED rope lighting along the floor or behind seating provides safe ambient light without reflecting on the screen. Lutron or Control4 controlled lighting can fade to black when the movie starts. Avoid can lights aimed at the screen. Star-ceiling fiber optic kits add a premium touch. We design lighting that enhances the cinema aesthetic without compromising picture quality.",
      },
    ],
  },
  {
    title: "Home Automation",
    slug: "home-automation",
    shortDescription:
      "Control lighting, climate, security, and entertainment from a single intuitive interface.",
    description:
      "Control your entire home with ease. Our smart automation solutions integrate lighting, climate, security, and entertainment into one cohesive network, accessible from elegant touchscreens, your phone, or simple voice commands.",
    icon: Home,
    features: [
      "Control4 smart home systems",
      "Voice & app control",
      "Lighting scene programming",
      "Climate automation",
      "Multi-room audio/video",
      "Energy management",
    ],
    image:
      "https://images.unsplash.com/photo-1558002038-1055907df827?w=800&q=80",
    faqs: [
      {
        question: "What is Control4 and why should I use it?",
        answer:
          "Control4 is a professional-grade smart home automation platform that unifies lighting, shading, HVAC, security, audio, and video into a single interface. Unlike consumer DIY solutions, it runs locally (no cloud dependency), responds instantly, and is programmed by a certified dealer for rock-solid reliability.",
      },
      {
        question: "Can I still use Alexa, Google, or HomeKit with Control4?",
        answer:
          "Yes. Control4 integrates with Amazon Alexa and Google Assistant for voice control, and it works alongside many third-party devices like Sonos, Nest, Ring, and more. Your existing smart devices do not need to be replaced.",
      },
      {
        question: "How long does a smart home installation take?",
        answer:
          "A basic system (lighting, a few scenes, and app control) can be installed in 1 to 2 days. A whole-home system with multi-zone audio, shading, security, and full automation typically takes 1 to 3 weeks depending on scope and whether the home is under construction or a retrofit.",
      },
      {
        question: "How does Control4 compare to Savant or Crestron?",
        answer:
          "Control4 offers the best balance of capability, value, and reliability. Crestron is more expensive (often 30-50% higher) and requires specialized programming. Savant has a beautiful interface but fewer device integrations. Control4 has the largest dealer network, most third-party compatibility, and best long-term support, making it the smart choice for most homes.",
      },
      {
        question: "Are there monthly fees for Control4?",
        answer:
          "No. Control4 does not charge monthly subscription fees. The system runs on your local network and does not require cloud services to function. You pay once for equipment and programming. Optional services like 4Sight (remote access when away from home) and streaming music subscriptions (Spotify, Tidal) have separate fees, but the core system has no monthly cost.",
      },
      {
        question: "Is Control4 better for new construction or retrofit installations?",
        answer:
          "Control4 excels in both scenarios. For new construction, we pre-wire during framing for invisible integration. For retrofit, Control4's wireless lighting (Zigbee) and compatibility with existing devices make it ideal for existing homes. We design systems optimized for your specific situation, whether you are building new or upgrading an existing home.",
      },
    ],
  },
  {
    title: "Window Coverings",
    slug: "window-coverings",
    shortDescription:
      "Motorized shades and blinds that blend elegance with intelligent light control.",
    description:
      "Enhance your home's aesthetic and comfort with our range of motorized window coverings. Smart shades integrate seamlessly with your automation system, adjusting with the sun or on a schedule. Beautiful design meets effortless function.",
    icon: Blinds,
    features: [
      "Lutron motorized shades",
      "Hunter Douglas PowerView",
      "Scheduled automation",
      "Sun-tracking sensors",
      "Energy-efficient materials",
      "Custom fabric selection",
    ],
    image:
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=800&q=80",
    faqs: [
      {
        question: "What brands of motorized shades do you install?",
        answer:
          "We primarily install Lutron and Hunter Douglas PowerView motorized shades. Both brands offer whisper-quiet motors, a wide range of fabrics and styles, battery or hardwired power options, and seamless integration with Control4 and other smart home platforms.",
      },
      {
        question: "Do motorized shades need to be hardwired?",
        answer:
          "Not necessarily. Both Lutron and Hunter Douglas offer battery-powered options that require no electrical wiring, making them ideal for retrofit installations. Batteries typically last 2 to 3 years. For new construction, hardwired power is preferred for zero maintenance.",
      },
      {
        question: "Can motorized shades save on energy costs?",
        answer:
          "Yes. Automated shades with sun-tracking adjust throughout the day to block solar heat gain in summer and capture passive warmth in winter. Honeycomb (cellular) fabrics also add insulation. Colorado homeowners routinely see meaningful reductions in heating and cooling costs.",
      },
      {
        question: "What is the difference between battery-powered and hardwired shades?",
        answer:
          "Battery-powered shades install anywhere without electrical work, making them perfect for retrofit projects. Batteries last 2 to 3 years and are easy to replace. Hardwired shades require electrical connections during installation but never need battery changes. For new construction, we always recommend hardwired. For existing homes, battery-powered shades offer the easiest installation.",
      },
      {
        question: "What fabric types are available for motorized shades?",
        answer:
          "Options include sheer (soft light filtering), light filtering (privacy with diffused light), room darkening (blocks most light), and blackout (complete darkness). Solar fabrics reduce heat and UV while maintaining views. Honeycomb/cellular fabrics provide insulation. We help you choose based on each room's function, sun exposure, and your privacy and energy efficiency goals.",
      },
      {
        question: "Are motorized shades safe for children and pets?",
        answer:
          "Yes. Motorized shades eliminate dangling cords, which are a safety hazard for children and pets. All our installations meet current child safety standards. Cordless operation and optional obstruction sensors (which stop the shade if it encounters resistance) provide peace of mind for families.",
      },
    ],
  },
  {
    title: "Surveillance",
    slug: "surveillance",
    shortDescription:
      "Advanced monitoring and security cameras with remote access and smart alerts.",
    description:
      "Keep your home and family safe with our advanced surveillance and security solutions. High-resolution cameras, smart motion detection, and 24/7 remote monitoring give you complete peace of mind, accessible from anywhere in the world.",
    icon: ShieldCheck,
    features: [
      "4K security cameras",
      "Smart motion detection",
      "Remote mobile access",
      "Night vision technology",
      "Cloud & local storage",
      "Integration with automation",
    ],
    image:
      "https://images.unsplash.com/photo-1557597774-9d273605dfa9?w=800&q=80",
    faqs: [
      {
        question: "How many security cameras do I need for my home?",
        answer:
          "Most homes are well covered with 4 to 8 cameras strategically placed at the front door, driveway, back yard, side yards, and garage. Proper placement is more important than quantity. We design camera layouts to capture faces, not just motion, and eliminate blind spots.",
      },
      {
        question: "Do I need to pay monthly fees for cloud storage?",
        answer:
          "No. We install systems with local NVR (network video recorder) storage, so your footage is stored on-site with no monthly subscription. You can still access live and recorded video remotely through the app. Cloud backup is optional, not required.",
      },
      {
        question: "Can security cameras integrate with my smart home?",
        answer:
          "Absolutely. When integrated with Control4 or a similar platform, your cameras can show feeds on any TV in the house, trigger recording when motion sensors activate, send smart alerts to your phone, and work as part of automated scenes like arming the system when you leave.",
      },
      {
        question: "What is the difference between residential and commercial security cameras?",
        answer:
          "Commercial cameras typically have higher resolution (4K to 8K), wider dynamic range for challenging lighting, and more robust housings for extreme environments. Residential cameras balance image quality with cost-effectiveness. For most homes, 4K residential cameras with smart analytics (person/vehicle detection) provide excellent security without commercial-grade expense.",
      },
      {
        question: "What is AI detection and how does it reduce false alerts?",
        answer:
          "Modern cameras use AI to distinguish between people, vehicles, animals, and other motion. This eliminates false alerts from trees swaying or headlights passing by. You only get notified when an actual person enters your property or a vehicle approaches your driveway. This makes security monitoring practical and actionable instead of overwhelming.",
      },
      {
        question: "Are security cameras NDAA compliant?",
        answer:
          "Yes. We install cameras that comply with the National Defense Authorization Act, which prohibits government-banned manufacturers. This is important for government contractors, businesses with federal clients, and security-conscious homeowners. We specify manufacturers like Hikvision alternatives and other vetted brands that meet NDAA requirements.",
      },
    ],
  },
  {
    title: "TV Wall Mounting",
    slug: "tv-wall-mounting",
    shortDescription:
      "Professional TV installation and mounting with hidden wires for a clean, elegant look.",
    description:
      "Professional TV wall mounting services across Denver and Parker. We mount TVs on any surface including drywall, brick, stone, and tile, with expert wire concealment for a clean, professional finish. Our team handles everything from stud finding to electrical work, ensuring your TV is safely secured and beautifully installed.",
    icon: Tv,
    features: [
      "Any surface mounting (drywall, brick, tile, stone)",
      "Wire concealment & cable management",
      "Articulating & tilting mounts",
      "Above fireplace installation",
      "Soundbar integration",
      "TV calibration & setup",
    ],
    image:
      "https://images.unsplash.com/photo-1593784991095-a205069470b6?w=800&q=80",
    faqs: [
      {
        question: "How much does TV wall mounting cost in Denver?",
        answer:
          "Professional TV mounting typically ranges from $200 to $600 depending on the size of your TV, wall type, wire concealment requirements, and whether electrical work is needed. We offer free estimates and can mount TVs from 32\" to 98\"+.",
      },
      {
        question: "Can you mount a TV above a fireplace?",
        answer:
          "Yes. We regularly mount TVs above fireplaces throughout Denver and Parker. We use heat-resistant materials, ensure proper ventilation, and can install articulating mounts that pull down to optimal viewing height. For gas fireplaces, we verify safe clearances per manufacturer specifications.",
      },
      {
        question: "How do you hide the wires?",
        answer:
          "We use several methods depending on your wall type and local code requirements. For drywall, we run cables through the wall cavity. For brick or concrete, we can use paintable cord covers or surface-mount raceways. For new construction, we pre-wire during the rough-in phase for completely invisible cable runs.",
      },
      {
        question: "What is the best height to mount a TV?",
        answer:
          "The center of the TV should be at eye level when seated, typically 42 to 48 inches from the floor for most living rooms. For bedrooms, slightly higher (48 to 52 inches) works better. We always measure and mark before mounting to ensure comfortable viewing angles.",
      },
      {
        question: "Do you provide the mounting hardware?",
        answer:
          "Yes. We bring commercial-grade mounts rated for your TV's weight and size. We use articulating mounts for corner installations or when you want to adjust viewing angles, and low-profile mounts when you want the TV flush against the wall.",
      },
    ],
  },
  {
    title: "Whole Home Audio",
    slug: "whole-home-audio",
    shortDescription:
      "Multi-zone audio systems that fill every room with music, controlled from your phone.",
    description:
      "Distributed audio systems that bring music to every room in your home. Whether you prefer Sonos wireless speakers, architectural in-wall and in-ceiling speakers, or a combination of both, we design and install systems that disappear into your home's architecture while delivering exceptional sound quality. Control everything from your phone, tablet, or with voice commands.",
    icon: Music,
    features: [
      "Sonos multi-room audio",
      "Architectural in-wall & ceiling speakers",
      "Outdoor audio zones",
      "Control4 integration",
      "Streaming service connectivity",
      "Whole-home synchronization",
    ],
    image:
      "https://images.unsplash.com/photo-1545454675-3531b543be5d?w=800&q=80",
    faqs: [
      {
        question: "What is the difference between whole home audio and a home theater?",
        answer:
          "A home theater is designed for a single room with surround sound optimized for movies. Whole home audio distributes music throughout your entire house with independent volume control in each zone. You can play different music in different rooms, or synchronize everything for parties.",
      },
      {
        question: "Should I choose Sonos or wired speakers?",
        answer:
          "Sonos is ideal for retrofit installations because it requires no wiring beyond power. It is easy to expand and sounds excellent. Wired architectural speakers offer superior sound quality, work during internet outages, and integrate seamlessly with Control4 automation. Many clients use both: Sonos in secondary spaces and wired speakers in primary zones.",
      },
      {
        question: "Can I use outdoor speakers in Colorado winters?",
        answer:
          "Yes. We install outdoor-rated speakers designed for extreme temperatures, UV exposure, and moisture. Popular options include rock speakers that blend into landscaping and weather-resistant architectural models. Proper installation with drainage consideration ensures years of reliable outdoor audio.",
      },
      {
        question: "How many zones do I need?",
        answer:
          "Most homes benefit from 6 to 12 zones. Common zones include: kitchen, living room, master bedroom, patio, pool area, garage, basement, and each additional bedroom. We design systems that can start with a few zones and expand over time as your needs grow.",
      },
      {
        question: "Can I stream Spotify, Apple Music, and other services?",
        answer:
          "Absolutely. All modern systems integrate with Spotify, Apple Music, Pandora, Tidal, Amazon Music, and SiriusXM. With Control4, you can also access local music libraries stored on a NAS or media server.",
      },
    ],
  },
  {
    title: "Network & WiFi Installation",
    slug: "network-wifi",
    shortDescription:
      "Enterprise-grade home networks with seamless WiFi coverage in every room.",
    description:
      "Reliable, high-performance home networking is the foundation of every smart home. We design and install commercial-grade WiFi systems using Eero, UniFi, and other enterprise solutions to eliminate dead zones and provide blazing-fast connectivity throughout your home. Proper network infrastructure ensures your Control4 system, security cameras, and streaming devices perform flawlessly.",
    icon: Wifi,
    features: [
      "Mesh WiFi systems (Eero, UniFi)",
      "Hardwired network backbone",
      "WiFi 6 & WiFi 7 support",
      "Network security configuration",
      "IoT device segmentation",
      "Smart home bandwidth optimization",
    ],
    image:
      "https://images.unsplash.com/photo-1606904825846-647eb07f5be2?w=800&q=80",
    faqs: [
      {
        question: "Why do I need a professional network installation?",
        answer:
          "Your internet service provider's router is designed for basic connectivity, not for supporting 50+ smart home devices, 4K streaming on multiple TVs, security cameras, and remote work. A properly designed network with commercial-grade access points ensures consistent performance, eliminates dead zones, and provides the bandwidth your smart home needs.",
      },
      {
        question: "What is the difference between WiFi 6 and WiFi 7?",
        answer:
          "WiFi 6 (802.11ax) offers speeds up to 9.6 Gbps and handles more simultaneous devices. WiFi 7 (802.11be) doubles that to 20+ Gbps and reduces latency for real-time applications. For most homes in 2026, WiFi 6 is sufficient and more cost-effective. WiFi 7 is recommended for large homes with 100+ devices or for future-proofing new construction.",
      },
      {
        question: "Should I use mesh WiFi or wired access points?",
        answer:
          "Wired access points (hardwired with Ethernet backhaul) provide the fastest and most reliable performance. Mesh systems like Eero are excellent for retrofit installations where running cables is impractical. For new construction, we always recommend wired access points. For existing homes, we evaluate your layout and recommend the best solution.",
      },
      {
        question: "How many access points do I need?",
        answer:
          "Most single-family homes need 2 to 4 access points depending on square footage and construction materials. Concrete, brick, and metal framing reduce WiFi range. We perform a site survey to determine optimal placement for seamless roaming and full coverage including outdoor spaces.",
      },
      {
        question: "Can you secure my network for smart home devices?",
        answer:
          "Yes. We configure VLANs (virtual networks) to segment IoT devices from your personal computers and phones, implement firewall rules to block unauthorized access, enable WPA3 encryption, and disable unnecessary services. This is especially important for security cameras and smart locks.",
      },
    ],
  },
  {
    title: "Outdoor AV Installation",
    slug: "outdoor-av",
    shortDescription:
      "Weatherproof TVs and audio systems designed for Colorado's climate and altitude.",
    description:
      "Transform your patio, deck, or pool area into an outdoor entertainment oasis. We install weatherproof 4K TVs rated for direct sunlight, outdoor-rated speakers that withstand Colorado's freeze-thaw cycles, and integrated lighting control. Whether you are hosting game day parties or enjoying quiet evenings under the stars, our outdoor AV systems deliver year-round performance.",
    icon: Sun,
    features: [
      "Sunlight-readable outdoor TVs",
      "Weather-resistant speakers",
      "Rock & landscape audio",
      "Outdoor lighting integration",
      "Heated TV enclosures",
      "All-weather remote control",
    ],
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80",
    faqs: [
      {
        question: "Can outdoor TVs withstand Colorado winters?",
        answer:
          "Yes. We install commercial-grade outdoor TVs rated for -40°F to 120°F operation. These displays use industrial components designed for temperature extremes, altitude, and direct sunlight. For covered patios, we can also install weatherproof TV enclosures with built-in heaters for added protection.",
      },
      {
        question: "How bright does an outdoor TV need to be?",
        answer:
          "For shaded patios, 700 to 1,000 nits is sufficient. For direct sunlight viewing, you need 2,500+ nits (2 to 3 times brighter than indoor TVs). We assess your installation location and recommend displays with appropriate brightness for daytime viewing without washing out.",
      },
      {
        question: "What types of outdoor speakers do you recommend?",
        answer:
          "It depends on your aesthetic preferences. Rock speakers blend into landscaping and are virtually invisible. Surface-mount outdoor speakers offer better sound quality and wider dispersion. In-ceiling speakers under covered patios provide the cleanest look. All options are weather-resistant and rated for extreme temperatures.",
      },
      {
        question: "Can outdoor audio integrate with my indoor system?",
        answer:
          "Absolutely. We design outdoor zones as extensions of your whole-home audio system. You can stream the same music indoors and outdoors for seamless entertaining, or control outdoor audio independently. Control4 integration lets you manage everything from a single app.",
      },
      {
        question: "How do you protect equipment from moisture and insects?",
        answer:
          "All components are rated IP65 or higher (dust-tight and water-resistant). We install equipment in ventilated, sealed enclosures when needed, use stainless steel hardware, and apply dielectric grease to all connections. Proper drainage and cable entry points prevent moisture accumulation.",
      },
    ],
  },
  {
    title: "In-Wall & Ceiling Speakers",
    slug: "in-wall-ceiling-speakers",
    shortDescription:
      "Invisible architectural audio that delivers exceptional sound without visible speakers.",
    description:
      "Architectural speakers that disappear into your walls and ceilings while delivering reference-quality audio. Perfect for whole-home audio systems, home theaters with acoustically transparent screens, and any space where you want exceptional sound without visible speaker boxes. We install and calibrate in-wall and in-ceiling speakers from premium brands for immersive audio that does not compromise your interior design.",
    icon: Speaker,
    features: [
      "Premium architectural speakers",
      "Dolby Atmos height channels",
      "Paintable grilles to match decor",
      "Retrofit & new construction",
      "Proper acoustic placement",
      "Professional calibration",
    ],
    image:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
    faqs: [
      {
        question: "Do in-wall speakers sound as good as traditional speakers?",
        answer:
          "Yes, when properly selected and installed. Modern architectural speakers use advanced materials and driver technology to rival traditional box speakers. The key is choosing speakers designed for in-wall installation (not just mounting regular speakers in a wall), proper placement, and professional calibration.",
      },
      {
        question: "Can you install in-wall speakers in an existing home?",
        answer:
          "Absolutely. We cut precise openings, run speaker wire through wall cavities, and patch/paint around the speaker frames for a clean finish. For homes with finished ceilings, we use fiberglass rods to fish wires through insulation. The process is minimally invasive and typically completed in one day per room.",
      },
      {
        question: "What is the difference between in-wall and in-ceiling speakers?",
        answer:
          "In-wall speakers fire horizontally at ear level and are best for stereo music listening and front/surround channels in home theaters. In-ceiling speakers fire downward and work well for ambient audio in whole-home systems and for Dolby Atmos height channels. We often use both in the same installation.",
      },
      {
        question: "Do I need a special screen for in-wall speakers behind it?",
        answer:
          "For home theaters, yes. An acoustically transparent screen allows sound to pass through from speakers mounted behind it. This creates the ideal setup where dialogue appears to come directly from actors on screen. We install AT screens with hidden in-wall LCR (left, center, right) speakers for a true cinema experience.",
      },
      {
        question: "Can in-wall speakers be used for Dolby Atmos?",
        answer:
          "Yes. In-ceiling speakers are perfect for Atmos height channels. We install them at precise angles (typically 4 speakers in a 7.2.4 configuration) to create overhead sound effects. Properly placed in-ceiling Atmos speakers deliver the immersive audio Dolby Atmos is known for.",
      },
    ],
  },
  {
    title: "Control4 Smart Home",
    slug: "control4-installation",
    shortDescription:
      "Professional Control4 installation and programming by certified dealers.",
    description:
      "As a certified Control4 dealer serving Denver and Parker, we design, install, and program Control4 smart home systems that unify your entire home. Control4 is the gold standard in professional home automation, offering local processing (no cloud dependency), instant response times, and unmatched reliability. From lighting and climate to security and entertainment, everything works together seamlessly.",
    icon: Home,
    features: [
      "Certified Control4 dealer",
      "Custom programming & scenes",
      "Touchscreen & app control",
      "Voice integration (Alexa, Google)",
      "Third-party device compatibility",
      "Lifetime support & updates",
    ],
    image:
      "https://images.unsplash.com/photo-1558002038-1055907df827?w=800&q=80",
    faqs: [
      {
        question: "Why choose Control4 over DIY smart home systems?",
        answer:
          "Control4 runs locally on your network, so it works even when your internet is down. It responds instantly (no cloud lag), supports 15,000+ devices, and is programmed by certified professionals to work reliably every day. DIY systems rely on cloud servers, have limited integration, and require constant troubleshooting.",
      },
      {
        question: "How much does a Control4 system cost?",
        answer:
          "Entry-level systems start around $5,000 for lighting and basic automation in a few rooms. Whole-home systems with multi-room audio, motorized shades, security, and full integration typically range from $20,000 to $80,000+ depending on home size and complexity. We offer free consultations to design a system that fits your budget.",
      },
      {
        question: "Can Control4 integrate with my existing devices?",
        answer:
          "Yes. Control4 works with Sonos, Lutron, Nest, Ring, Philips Hue, Yale locks, and thousands of other products. If you already have smart devices, we can integrate them into your Control4 system rather than replacing them.",
      },
      {
        question: "What is the difference between Control4 and Crestron or Savant?",
        answer:
          "Control4 offers the best balance of capability, reliability, and value. Crestron is more complex and expensive (typically 30 to 50% higher cost) with a steeper programming curve. Savant has a beautiful interface but fewer device integrations. Control4 has the largest dealer network, best support, and most third-party compatibility.",
      },
      {
        question: "Do I need a Control4 dealer for support and updates?",
        answer:
          "Yes. Control4 systems require dealer access for programming, software updates, and device additions. This ensures everything is configured correctly and works reliably. As your authorized dealer, we provide lifetime support, remote assistance, and annual system checkups to keep your system performing perfectly.",
      },
      {
        question: "Can I control Control4 with my voice?",
        answer:
          "Absolutely. Control4 integrates with Amazon Alexa and Google Assistant for natural voice control. You can say things like 'Alexa, movie time' to dim lights, lower shades, and power on your theater, or 'Hey Google, good morning' to raise shades, start coffee, and play news.",
      },
    ],
  },
  {
    title: "Smart Lighting & Climate",
    slug: "smart-lighting-climate",
    shortDescription:
      "Intelligent lighting and climate control that adapts to your lifestyle and saves energy.",
    description:
      "Transform your home's lighting and climate control with intelligent automation. Lutron lighting systems, Ketra tunable white technology, and smart thermostats create the perfect ambiance while reducing energy costs. Program lighting scenes for different times of day, automate climate based on occupancy, and control everything from your phone or with voice commands.",
    icon: Lightbulb,
    features: [
      "Lutron Caséta & RadioRA systems",
      "Ketra tunable white lighting",
      "Smart thermostats (Nest, Ecobee)",
      "Occupancy-based automation",
      "Circadian rhythm lighting",
      "Energy usage monitoring",
    ],
    image:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
    faqs: [
      {
        question: "What is the difference between Lutron Caséta and RadioRA?",
        answer:
          "Lutron Caséta is a DIY-friendly system perfect for smaller homes or single-room installations. RadioRA is a professional-grade system with more advanced features, higher capacity (up to 200 devices), and seamless Control4 integration. RadioRA is ideal for whole-home automation in larger residences.",
      },
      {
        question: "What is Ketra tunable white lighting?",
        answer:
          "Ketra is Lutron's premium LED technology that adjusts color temperature throughout the day to match natural sunlight. Cool, energizing light in the morning shifts to warm, relaxing tones in the evening. This supports your circadian rhythm, improves sleep quality, and enhances overall well-being.",
      },
      {
        question: "Can smart lighting save on electricity costs?",
        answer:
          "Yes. Automated lighting eliminates wasted energy from lights left on in empty rooms. Occupancy sensors, daylight harvesting (dimming artificial lights when natural light is available), and LED fixtures can reduce lighting energy consumption by 60 to 80%. In Colorado, where electricity costs are moderate, annual savings can be substantial.",
      },
      {
        question: "Do smart thermostats really make a difference?",
        answer:
          "Absolutely. Smart thermostats like Nest and Ecobee learn your schedule, adjust temperatures when you are away, and optimize heating/cooling cycles. In Colorado's climate with hot summers and cold winters, homeowners typically save 10 to 20% on HVAC costs. When integrated with Control4, thermostats adjust automatically with scenes like 'Good Night' or 'Away from Home.'",
      },
      {
        question: "Can I program different lighting scenes?",
        answer:
          "Yes. We create custom scenes for your daily routine: 'Morning' (gradual lights to wake up), 'Daytime' (bright task lighting), 'Evening' (warm, relaxing tones), 'Movie' (dim lights for theater mode), 'Bedtime' (lights off, nightlights on). Scenes can trigger with a button press, voice command, or automatically based on time or occupancy.",
      },
    ],
  },
  {
    title: "Commercial AV Installation",
    slug: "commercial-av",
    shortDescription:
      "Professional audio-visual solutions for offices, conference rooms, and commercial spaces.",
    description:
      "Enhance your business with professional AV installation. We design and install conference room systems, digital signage, sound masking, and office automation for businesses across Denver. From small startups to large corporate offices, we deliver reliable, user-friendly systems that improve productivity, enhance presentations, and create professional environments.",
    icon: Building,
    features: [
      "Conference room systems",
      "Video conferencing (Zoom, Teams)",
      "Digital signage & displays",
      "Commercial audio systems",
      "Sound masking for privacy",
      "Ongoing service contracts",
    ],
    image:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80",
    faqs: [
      {
        question: "What is included in a conference room AV system?",
        answer:
          "A complete system includes a large-format display or projector, conference speakerphone or ceiling microphone array, video conferencing camera, HDMI switcher for laptop connections, and a simple control interface. We design systems that are intuitive enough for any employee to use without IT support.",
      },
      {
        question: "Can you integrate Zoom and Microsoft Teams?",
        answer:
          "Yes. We install Zoom Rooms and Microsoft Teams Rooms certified systems with one-touch meeting start, automatic camera tracking, and crystal-clear audio. These turnkey solutions eliminate the technical friction of starting video calls and ensure professional presentation quality.",
      },
      {
        question: "What is sound masking and why would I need it?",
        answer:
          "Sound masking adds subtle background noise (similar to airflow) that makes speech less intelligible at a distance. This is critical for open offices, medical facilities, financial services, and legal offices where privacy is essential. It reduces distractions, increases focus, and ensures confidential conversations remain private.",
      },
      {
        question: "Do you offer service contracts for businesses?",
        answer:
          "Yes. We offer annual service agreements that include priority response, remote support, preventive maintenance, software updates, and discounted service calls. This ensures your AV systems remain operational with minimal downtime, which is essential for businesses that rely on technology for daily operations.",
      },
      {
        question: "Can commercial AV systems be tax deductible?",
        answer:
          "Yes. Business-use AV equipment, installation costs, and service contracts are typically fully deductible as business expenses under Section 179 or standard depreciation schedules. Consult your CPA, but most businesses can deduct the entire investment in the year of installation.",
      },
    ],
  },
  // ─── Brand-Specific Integration Pages ──────────────────────────────
  {
    title: "Sonos Installation & Integration",
    slug: "sonos-installation",
    shortDescription:
      "Professional Sonos whole-home audio installation and Control4 integration in Denver.",
    description:
      "Expert Sonos installation and integration services throughout Denver and Parker. We design multi-room Sonos systems, integrate with Control4 automation, and ensure flawless performance across your entire home. Whether you want music in every room or seamless smart home integration, we make Sonos work perfectly.",
    icon: Music,
    features: [
      "Complete Sonos system design & installation",
      "Control4 integration for unified control",
      "Multi-room synchronization setup",
      "Architectural speaker pairing",
      "Network optimization for streaming",
      "Training & ongoing support",
    ],
    image:
      "https://images.unsplash.com/photo-1545454675-3531b543be5d?w=800&q=80",
    faqs: [
      {
        question: "Do I need professional installation for Sonos?",
        answer:
          "Sonos is marketed as DIY-friendly, and basic setups are straightforward. However, professional installation ensures optimal speaker placement, network configuration for flawless streaming, integration with Control4 or other automation systems, and troubleshooting of any connectivity issues. We also handle architectural speaker pairing and ensure your system is set up correctly from day one.",
      },
      {
        question: "Can you integrate Sonos with my Control4 system?",
        answer:
          "Absolutely. Control4 has native Sonos integration, allowing you to control Sonos from Control4 touchscreens, remotes, and apps. You can create scenes that include Sonos (like 'Good Morning' that plays news in the kitchen), trigger music based on events, and manage everything from one unified interface.",
      },
      {
        question: "How many Sonos speakers do I need for whole-home audio?",
        answer:
          "It depends on your home size and how many zones you want. Most homes have 6 to 12 zones (kitchen, living room, bedrooms, patio, basement, etc.). Each zone needs at least one Sonos speaker or a Sonos Amp paired with architectural speakers. We design systems that scale with your needs and budget.",
      },
      {
        question: "What is the difference between Sonos speakers and Sonos Amp?",
        answer:
          "Sonos speakers (One, Five, Move, etc.) are all-in-one units with built-in amplification. Sonos Amp powers passive architectural speakers (in-wall or in-ceiling), giving you invisible audio throughout your home. We often combine both: Sonos speakers in secondary spaces and Sonos Amps with architectural speakers in primary zones.",
      },
      {
        question: "Will Sonos work with my existing WiFi?",
        answer:
          "Sonos requires a reliable WiFi network with adequate coverage and bandwidth. If you have dead zones or coverage issues, we will recommend network upgrades (mesh WiFi or additional access points) to ensure your Sonos system performs flawlessly. Sonos can also be hardwired via ethernet for even better reliability.",
      },
    ],
  },
  {
    title: "Lutron Certified Installation",
    slug: "lutron-installation",
    shortDescription:
      "Lutron Caséta, RadioRA, and Ketra certified installer serving Denver metro area.",
    description:
      "As a Lutron certified installer, we design and install Caséta, RadioRA, and Ketra lighting systems throughout Denver, Parker, and the Colorado Front Range. From simple smart lighting to whole-home automated scenes, we deliver professional Lutron installations with lifetime support.",
    icon: Lightbulb,
    features: [
      "Lutron Caséta wireless installation",
      "RadioRA whole-home lighting systems",
      "Ketra tunable white technology",
      "Motorized shade integration",
      "Control4 & automation integration",
      "Scene programming & customization",
    ],
    image:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
    faqs: [
      {
        question: "Do I need a Lutron certified installer?",
        answer:
          "Lutron Caséta is DIY-friendly for basic installations. However, RadioRA and Ketra require certified dealer installation and programming. Even for Caséta, professional installation ensures optimal setup, integration with smart home systems, and access to dealer-only features and support.",
      },
      {
        question: "What is the difference between Lutron Caséta and RadioRA?",
        answer:
          "Caséta is Lutron's DIY-friendly system, great for smaller homes or single-room installations (up to 50 devices). RadioRA is professional-grade with higher capacity (200+ devices), more advanced features, faster response times, and seamless integration with Control4 and other automation platforms. RadioRA is ideal for whole-home lighting control.",
      },
      {
        question: "Can Lutron integrate with Control4, Alexa, and Google?",
        answer:
          "Yes. Lutron Caséta works with Alexa, Google Assistant, Apple HomeKit, and Control4. RadioRA integrates deeply with Control4 for professional whole-home automation. You can control lights with voice, app, physical switches, or automated scenes that trigger based on time, occupancy, or other events.",
      },
      {
        question: "What is Lutron Ketra and is it worth it?",
        answer:
          "Ketra is Lutron's premium tunable white LED technology. It adjusts color temperature throughout the day to match natural sunlight (cool, energizing light in the morning, warm, relaxing tones in the evening). This supports your circadian rhythm, improves sleep quality, and enhances well-being. It is a premium investment, typically reserved for luxury installations.",
      },
      {
        question: "How long does Lutron installation take?",
        answer:
          "Caséta installations for a few rooms take 1 to 2 hours. RadioRA whole-home systems typically take 1 to 3 days for installation and programming, depending on the number of devices and complexity of scenes. We handle everything from wiring to programming to training you on the system.",
      },
    ],
  },
];

