export interface Brand {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  certified: boolean;
  certificationLevel?: string;
  specialties: string[];
  whyWeRecommend: string[];
  relatedServices: string[]; // service slugs
  logo: string;
  heroImage: string;
  faqs: {
    question: string;
    answer: string;
  }[];
}

export const brands: Brand[] = [
  {
    slug: "control4",
    name: "Control4",
    tagline: "The Gold Standard in Professional Smart Home Automation",
    description:
      "Control4 is the most reliable, scalable, and user-friendly professional smart home platform available. Unlike DIY systems that hit a wall quickly, Control4 grows with your home and just works. We are certified Control4 dealers serving the Denver metro area.",
    certified: true,
    certificationLevel: "Certified Dealer",
    specialties: [
      "Whole-home automation and control",
      "Multi-room audio and video distribution",
      "Lighting control integration (Lutron, Philips Hue, more)",
      "Climate and shade automation",
      "Security system integration",
      "Voice control (Alexa, Google, Siri)",
      "Custom remote and touchscreen interfaces",
    ],
    whyWeRecommend: [
      "Rock-solid reliability. Control4 systems stay online and responsive year after year.",
      "Seamless integration. Control4 speaks to thousands of devices from hundreds of manufacturers.",
      "Professional-grade interface. Clean, responsive, and actually pleasant to use daily.",
      "Local control. Your home works even when the internet is down.",
      "Dealer support network. You have us, and we have Control4's engineering team behind us.",
    ],
    relatedServices: [
      "home-automation",
      "whole-home-audio",
      "smart-lighting-climate",
    ],
    logo: "/logos/control4.svg",
    heroImage:
      "https://images.unsplash.com/photo-1558002038-1055907df827?w=1200&q=80",
    faqs: [
      {
        question: "Do I need a Control4 dealer, or can I buy it myself?",
        answer:
          "Control4 is sold exclusively through certified dealers. This is not a limitation, it is the entire point. Control4 systems are professionally designed, programmed, and supported. You get a system tailored to your home, not a box you have to figure out yourself. We handle everything: design, installation, programming, training, and ongoing support.",
      },
      {
        question: "How much does a Control4 system cost in Denver?",
        answer:
          "A basic whole-home Control4 system typically starts around $8,000 to $12,000 for a 3,000 sq ft home, covering lighting, climate, AV, and security integration. Larger homes or more complex systems scale from there. We provide transparent quotes after an in-home consultation where we assess your goals and existing infrastructure.",
      },
      {
        question: "Can Control4 integrate with my existing smart devices?",
        answer:
          "Yes. Control4 integrates with thousands of products: Nest thermostats, Ring doorbells, Sonos speakers, Philips Hue lights, Lutron shades, Alexa, and much more. If you have existing gear, we will incorporate it. If something does not integrate directly, we find workarounds. Control4's open architecture is one of its biggest strengths.",
      },
      {
        question: "What happens if I move or want to upgrade later?",
        answer:
          "Control4 systems are highly scalable. Start small and expand over time. If you move, the system stays with the house (a major selling point), or we can help transfer gear to your new home. We have clients who started with a single-room system and now control their entire estate, all on the same platform.",
      },
      {
        question: "Is Control4 better than Crestron or Savant?",
        answer:
          "Each has strengths. Crestron excels in large commercial installs and ultra-high-end residential. Savant has a gorgeous interface and Apple ecosystem integration. But for 95% of homeowners, Control4 offers the best balance of reliability, ease of use, scalability, and value. We have worked with all three and consistently recommend Control4 for residential projects.",
      },
      {
        question: "How do I control a Control4 system?",
        answer:
          "Control4 gives you options: dedicated touchscreens, custom remotes, smartphone/tablet apps (iOS and Android), voice commands (Alexa, Google, Siri), or physical keypads. Most clients use the mobile app daily and voice control for quick tasks. We set up whatever combination works best for your household.",
      },
    ],
  },
  {
    slug: "lutron",
    name: "Lutron",
    tagline: "Certified Installer of the World's Best Lighting Control",
    description:
      "Lutron invented the modern dimmer in 1959 and has been perfecting lighting control ever since. Their systems are unmatched in quality, reliability, and feel. We are certified Lutron installers specializing in Caséta, RA2 Select, RadioRA 3, and Homeworks QSX systems.",
    certified: true,
    certificationLevel: "Certified Installer",
    specialties: [
      "Whole-home lighting control and dimming",
      "Motorized shade and blind automation",
      "Keypads, Pico remotes, and occupancy sensors",
      "Integration with Control4, Alexa, Apple HomeKit",
      "Architectural-grade finishes and styles",
      "Energy management and daylight harvesting",
    ],
    whyWeRecommend: [
      "Buttery-smooth dimming. Lutron dimmers feel premium and control light precisely.",
      "Unmatched reliability. Lutron systems work flawlessly for decades.",
      "The best shades. Lutron motorized shades are whisper-quiet and beautifully engineered.",
      "Integration. Lutron plays nicely with every major smart home platform.",
      "Scalable tiers. Caséta for starters, RadioRA 3 for whole-home, Homeworks for estates.",
    ],
    relatedServices: [
      "smart-lighting-climate",
      "window-coverings",
      "home-automation",
    ],
    logo: "/logos/lutron.svg",
    heroImage:
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=1200&q=80",
    faqs: [
      {
        question: "What is the difference between Caséta, RadioRA 3, and Homeworks?",
        answer:
          "Caséta is Lutron's entry-level DIY-friendly system, great for 10-20 devices. RadioRA 3 is their pro-grade whole-home solution for 50-200+ devices, requiring dealer installation and programming. Homeworks is ultra-high-end for large estates and commercial projects. For most Denver homes, RadioRA 3 is the sweet spot.",
      },
      {
        question: "Do I need a Lutron certified installer?",
        answer:
          "For Caséta, no. For RadioRA 3 and Homeworks, yes. These systems require professional design, installation, and programming. That is where we come in. We are certified Lutron installers with years of experience across all product lines. You get a system designed specifically for your home's layout and your lifestyle.",
      },
      {
        question: "Can Lutron work with my Control4 system?",
        answer:
          "Absolutely. Lutron and Control4 integrate seamlessly. In fact, they are the most common pairing we install. Control4 handles your AV, security, and climate, while Lutron handles lighting and shades. You control everything from one interface. It is the dream team of smart home tech.",
      },
      {
        question: "How much does a whole-home Lutron system cost?",
        answer:
          "RadioRA 3 systems typically range from $8,000 to $20,000+ depending on the size of your home and the number of zones. A 3,000 sq ft home with 40 to 50 dimmers, keypads, and a few motorized shades usually lands in the $12,000 to $18,000 range. Caséta systems are much less, starting around $1,000 for a few rooms.",
      },
      {
        question: "What makes Lutron shades better than others?",
        answer:
          "Lutron shades use precision-engineered motors that are whisper-quiet and incredibly reliable. They align perfectly, stop exactly where you want, and integrate seamlessly with lighting scenes. The build quality is exceptional. We have installed hundreds of Lutron shades and have never had a motor fail. That is unheard of in this industry.",
      },
    ],
  },
  {
    slug: "sonos",
    name: "Sonos",
    tagline: "Multi-Room Audio That Just Works",
    description:
      "Sonos pioneered wireless multi-room audio and continues to set the standard. Their speakers sound incredible, setup is painless, and the system scales effortlessly. Whether you want music in two rooms or twenty, Sonos delivers.",
    certified: false,
    specialties: [
      "Wireless multi-room audio systems",
      "Streaming integration (Spotify, Apple Music, Tidal, more)",
      "Architectural speakers (in-wall, in-ceiling)",
      "Soundbars and home theater audio",
      "Voice control (Alexa, Google Assistant)",
      "Integration with Control4 and other platforms",
    ],
    whyWeRecommend: [
      "Dead-simple setup and use. Even non-techie clients love Sonos.",
      "Excellent sound quality across all price points.",
      "Rock-solid wireless performance. No dropouts, no frustration.",
      "Future-proof. Sonos updates their speakers with new features for years.",
      "Scales effortlessly. Start with one speaker, add more anytime.",
    ],
    relatedServices: ["whole-home-audio", "home-theater", "home-automation"],
    logo: "/logos/sonos.svg",
    heroImage:
      "https://images.unsplash.com/photo-1545454675-3531b543be5d?w=1200&q=80",
    faqs: [
      {
        question: "Should I get Sonos or a traditional multi-room audio system?",
        answer:
          "For most homes, Sonos is the better choice. It is wireless, easy to expand, sounds great, and costs less than traditional distributed audio. The only time we recommend wired systems is for very large homes (8,000+ sq ft) or clients who need absolute audiophile-grade performance in every room. For everyone else, Sonos is the smarter pick.",
      },
      {
        question: "Can you install Sonos architectural speakers?",
        answer:
          "Yes. Sonos makes in-wall and in-ceiling speakers powered by the Sonos Amp. We install these in new construction or retrofit projects where visible speakers are not desired. You get the clean look of architectural speakers with all the convenience of Sonos. We handle the wiring, mounting, tuning, and setup.",
      },
      {
        question: "Does Sonos work with Control4?",
        answer:
          "Yes, Sonos integrates beautifully with Control4. You can control your Sonos system from Control4 touchscreens, remotes, and the mobile app. You can also trigger Sonos to play specific playlists or stations as part of Control4 scenes. It is a very common pairing in our installs.",
      },
      {
        question: "How many Sonos speakers can I have in one system?",
        answer:
          "A single Sonos household can support up to 32 Sonos devices. That is more than enough for even the largest homes. We have clients with 20+ speakers playing different music in every room, all controlled from one app. The system handles it without breaking a sweat.",
      },
    ],
  },
  {
    slug: "sony",
    name: "Sony",
    tagline: "Premium 4K and 8K Laser Projectors for Home Theater",
    description:
      "Sony makes some of the finest home theater projectors in the world. Their native 4K laser projectors deliver stunning image quality with deep blacks, vibrant colors, and razor-sharp detail. If you want a true cinematic experience, Sony is at the top of the list.",
    certified: false,
    specialties: [
      "Native 4K and 8K laser projectors",
      "HDR (Dolby Vision, HDR10) support",
      "Ultra-short throw and standard throw models",
      "Long-life laser light engines (20,000+ hours)",
      "Professional-grade color accuracy",
      "IMAX Enhanced certification",
    ],
    whyWeRecommend: [
      "True native 4K resolution. No pixel-shifting tricks.",
      "Laser light source. No bulb replacements, consistent brightness for years.",
      "Exceptional black levels and contrast ratio.",
      "Motion handling that makes sports and action films look incredible.",
      "Build quality and reliability you expect from Sony.",
    ],
    relatedServices: ["home-theater"],
    logo: "/logos/sony.svg",
    heroImage:
      "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=1200&q=80",
    faqs: [
      {
        question: "How much does a Sony 4K laser projector cost?",
        answer:
          "Sony's projectors range from around $5,000 for their entry-level laser models to $25,000+ for their flagship cinema-grade projectors. For most dedicated home theaters, the VPL-XW5000ES ($5,999 MSRP) offers incredible performance. Ultra-high-end theaters often use the VPL-GTZ380 (8K) or VPL-XW7000ES. We help clients choose the right model based on room size, ambient light, and budget.",
      },
      {
        question: "How long do Sony laser projectors last?",
        answer:
          "Sony's laser light engines are rated for 20,000 hours of use. If you watch 4 hours per day, that is over 13 years of life. No bulbs to replace, no maintenance, and the brightness stays consistent throughout the projector's life. It is one of the biggest advantages of laser over traditional lamp projectors.",
      },
      {
        question: "What screen size do I need for a Sony projector?",
        answer:
          "Most Sony projectors are designed for 100 to 150-inch diagonal screens. The ideal size depends on your seating distance. A good rule of thumb: your screen width should be about 1/3 of your viewing distance. For a 12-foot viewing distance, a 120-inch diagonal screen (roughly 10 feet wide) is perfect. We design the screen size to match your room and projector.",
      },
      {
        question: "Sony vs Epson vs JVC - which is best?",
        answer:
          "All three make excellent projectors. Epson offers great value and brightness for the price. JVC is known for deep blacks and contrast. Sony excels in color accuracy, motion handling, and build quality. For dedicated dark theaters, JVC or Sony. For rooms with ambient light or larger screens, Epson or Sony. We recommend based on your specific room and priorities.",
      },
    ],
  },
  {
    slug: "epson",
    name: "Epson",
    tagline: "Bright, Reliable 4K Projectors for Every Budget",
    description:
      "Epson makes some of the best value-for-performance projectors on the market. Their 4K laser projectors deliver stunning image quality with high brightness, making them ideal for rooms with ambient light or very large screens.",
    certified: false,
    specialties: [
      "High-brightness 4K laser projectors (3,000 to 5,000+ lumens)",
      "HDR10 and dynamic tone mapping",
      "Ultra-short throw and standard throw models",
      "Laser light engines (20,000+ hour life)",
      "Exceptional value and reliability",
    ],
    whyWeRecommend: [
      "Brightness. Epson projectors can fill even the largest screens with light.",
      "Value. You get more brightness and features per dollar than almost any competitor.",
      "Reliability. Epson projectors just work, year after year.",
      "Flexible installation. Short throw and long throw options for any room.",
      "Great color out of the box. Minimal calibration needed.",
    ],
    relatedServices: ["home-theater"],
    logo: "/logos/epson.svg",
    heroImage:
      "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=1200&q=80",
    faqs: [
      {
        question: "What is the best Epson projector for a home theater?",
        answer:
          "For dedicated dark theaters, the Epson LS12000 (4K laser, $3,499) is exceptional. For rooms with ambient light or screens over 150 inches, the LS11000 or Pro Cinema LS12000 deliver more brightness. For ultra-short throw installations (projector sits inches from the screen), the LS800 is a great choice. We recommend based on your room's light control and screen size.",
      },
      {
        question: "Are Epson projectors true 4K?",
        answer:
          "Epson uses pixel-shifting technology to achieve 4K resolution. They start with 1080p chips and shift the pixels rapidly to create 8.3 million pixels on screen (true 4K resolution). The result is indistinguishable from native 4K in real-world viewing. Sony and JVC purists will argue, but in blind tests, most people cannot tell the difference. The image is sharp and detailed.",
      },
      {
        question: "How bright should my projector be?",
        answer:
          "For a dedicated dark theater with a 120-inch screen, 1,500 to 2,500 lumens is plenty. For rooms with ambient light or screens over 150 inches, you want 3,000+ lumens. Epson projectors excel here because they deliver high brightness without costing $15,000. We measure your room's ambient light and screen size to recommend the right brightness.",
      },
    ],
  },
  {
    slug: "samsung",
    name: "Samsung",
    tagline: "Cutting-Edge Display Technology and Smart TVs",
    description:
      "Samsung is a leader in TV technology, from their stunning QLED and Neo QLED displays to massive 85-inch and 98-inch screens. For clients who want a large-format TV instead of a projector, Samsung is often the top choice.",
    certified: false,
    specialties: [
      "QLED and Neo QLED display technology",
      "Large-format screens (85-inch, 98-inch, The Frame, The Wall)",
      "HDR10+ and Quantum HDR support",
      "Smart TV platform with streaming apps",
      "Gaming features (120Hz, VRR, low input lag)",
    ],
    whyWeRecommend: [
      "Incredible brightness. Samsung TVs look great even in bright rooms.",
      "Vibrant colors and deep contrast with quantum dot technology.",
      "Massive screen sizes at competitive prices.",
      "Excellent gaming performance for Xbox and PlayStation users.",
      "Reliable and widely supported.",
    ],
    relatedServices: ["home-theater", "tv-wall-mounting"],
    logo: "/logos/samsung.svg",
    heroImage:
      "https://images.unsplash.com/photo-1593784991095-a205069470b6?w=1200&q=80",
    faqs: [
      {
        question: "Should I get a Samsung TV or a projector?",
        answer:
          "If your room has ambient light, if you want ease of use, or if a screen under 100 inches is fine, a large Samsung TV is often the better choice. If you want a true cinema experience with a 120-inch+ screen in a dark room, a projector wins. We help clients decide based on their room and priorities.",
      },
      {
        question: "Can you wall-mount my Samsung TV?",
        answer:
          "Yes. We handle professional TV mounting for all sizes. We locate studs, run power and cables in-wall, level and secure the mount, and hide all wiring. For TVs 75 inches and larger, we always use two installers for safety. The result is a clean, centered, perfectly mounted TV.",
      },
    ],
  },
  {
    slug: "hunter-douglas",
    name: "Hunter Douglas",
    tagline: "The Gold Standard in Motorized Window Coverings",
    description:
      "Hunter Douglas makes the finest motorized shades, blinds, and shutters in the industry. Their PowerView automation system integrates seamlessly with Control4, Alexa, and other platforms, and the build quality is unmatched.",
    certified: false,
    specialties: [
      "Motorized shades, blinds, and shutters",
      "PowerView automation and scheduling",
      "Energy-efficient cellular and solar shades",
      "Blackout and light-filtering fabrics",
      "Integration with Control4, Alexa, Google, and more",
    ],
    whyWeRecommend: [
      "Best-in-class motors. Whisper-quiet and incredibly reliable.",
      "Gorgeous fabrics and styles. Hunter Douglas shades look premium.",
      "PowerView automation is intuitive and powerful.",
      "Energy efficiency. Their cellular shades reduce heating and cooling costs.",
      "Lifetime warranty on many products.",
    ],
    relatedServices: ["window-coverings", "home-automation"],
    logo: "/logos/hunter-douglas.svg",
    heroImage:
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=1200&q=80",
    faqs: [
      {
        question: "Hunter Douglas vs Lutron shades?",
        answer:
          "Both are excellent. Lutron shades have slightly smoother motors and better smart home integration. Hunter Douglas offers more fabric styles and better energy efficiency options. For Control4 homes, we often recommend Lutron. For standalone shade automation or clients prioritizing design, Hunter Douglas. Both are reliable and beautiful.",
      },
    ],
  },
];
