import {
  Truck,
  Wrench,
  LifeBuoy,
  MapPin,
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
    title: "Flatbed Towing",
    slug: "flatbed-towing",
    shortDescription:
      "Safe, damage-free transport on a full flatbed platform -- the right choice for luxury, AWD, and lowered vehicles.",
    description:
      "When your vehicle's safety matters most, flatbed towing is the gold standard. Your car rides completely flat on our platform, never dragging a wheel. Our flatbeds use extended low-angle ramps and soft-strap tie-downs, so every tow is secure from pickup to drop-off. We are equipped for luxury and exotic vehicles, all-wheel-drive cars, lowered and modified vehicles, and motorcycles.",
    icon: Truck,
    features: [
      "Full-length flatbed platform for secure transport",
      "Extended low-angle ramps for low-clearance vehicles",
      "Soft-strap tie-downs (no wheel clamps for AWD vehicles)",
      "Careful loading and secure tie-downs from pick-up to drop-off",
      "Luxury, exotic, and modified vehicle specialists",
      "Motorcycle towing with custom cradles",
    ],
    image:
      "https://images.unsplash.com/photo-1723846806146-05768f1de375?w=900&q=85&auto=format&fit=crop",
    faqs: [
      {
        question: "Why is flatbed towing better for my car?",
        answer:
          "With flatbed towing, all four wheels are off the ground and secured on a flat platform. This eliminates drivetrain stress, prevents transmission damage on AWD vehicles, and protects low front bumpers or rear diffusers from scraping during loading. It is the recommended method for luxury, exotic, and all-wheel-drive vehicles.",
      },
      {
        question: "Can you tow my all-wheel-drive or 4x4 vehicle?",
        answer:
          "Yes. AWD and 4WD vehicles should always be transported on a flatbed, never wheel-lift or dolly, because the drivetrain can be damaged when some wheels are dragging. Our flatbeds lift the entire vehicle off the ground, making it the safest option for your AWD SUV, truck, or performance car.",
      },
      {
        question: "Can you tow a lowered or widebody vehicle?",
        answer:
          "Absolutely. Our extended, low-angle loading ramps are specifically designed to load vehicles with minimal ground clearance without scraping bumpers or splitters. We use soft straps at the wheels rather than hooks or chains that could damage body kits or modified suspension.",
      },
      {
        question: "How long does flatbed towing take?",
        answer:
          "We aim for fast response throughout Sacramento and the surrounding areas. Loading a vehicle onto the flatbed typically takes a few minutes, and from there we drive directly to your destination, whether that is a dealership, body shop, or your home.",
      },
      {
        question: "Can you tow a motorcycle?",
        answer:
          "Yes. We have motorcycle-specific tie-down equipment and wheel chocks to safely secure bikes on our flatbed. Motorcycles should never be towed by traditional wheel-lift methods, so a flatbed is always the right choice.",
      },
    ],
  },
  {
    title: "Roadside Assistance",
    slug: "roadside-assistance",
    shortDescription:
      "Jump-starts, tire changes, fuel delivery, and lockouts -- quick help right where you are.",
    description:
      "Getting stranded is stressful enough without a long wait. Whether your battery died in a parking lot, you have a flat on the freeway, locked your keys inside, or just ran out of gas, our roadside team responds fast with everything needed to get you moving again. Most roadside calls are resolved on the spot without a tow.",
    icon: LifeBuoy,
    features: [
      "Battery jump-starts (driveways, lots, and freeway shoulders)",
      "Flat tire changes with your spare",
      "Emergency fuel delivery (gasoline)",
      "Vehicle lockout and key-in-car assistance",
      "24/7 dispatch, every day of the year",
      "Fast dispatch throughout Sacramento and surrounding areas",
    ],
    image:
      "https://images.unsplash.com/photo-1615092296061-e2ccfeb2f3d6?w=800&q=80",
    faqs: [
      {
        question: "What roadside services do you offer?",
        answer:
          "We provide jump-starts for dead batteries, flat tire changes using your spare, emergency fuel delivery (gasoline), and lockout assistance to retrieve keys locked inside your vehicle. Most situations are resolved on-site in under 30 minutes.",
      },
      {
        question: "What if I just need a jump-start?",
        answer:
          "Call us and we will come to you, whether you are in a driveway, a parking structure, or on the side of the freeway. Jump-starts typically take less than 15 minutes from arrival. If the battery will not hold a charge, we can tow you to a shop.",
      },
      {
        question: "Do you deliver fuel?",
        answer:
          "Yes, we deliver gasoline for gas-powered vehicles that have run dry. When you call, let us know your fuel type and we will bring enough to get you to the nearest station safely.",
      },
      {
        question: "Can you unlock my car if I locked my keys inside?",
        answer:
          "Yes. Our technicians use professional slim jim and air wedge tools to open your door without damaging the vehicle. We do not drill locks or break windows unless it is a life-safety emergency.",
      },
      {
        question: "Will my insurance cover roadside assistance calls?",
        answer:
          "Most insurance providers and roadside assistance plans (AAA, insurance add-ons, and some credit card benefits) cover roadside calls. We provide itemized receipts for reimbursement. Call your insurer before we arrive to confirm coverage if needed.",
      },
    ],
  },
  {
    title: "Vehicle Recovery",
    slug: "vehicle-recovery",
    shortDescription:
      "Professional winching and extraction from ditches, mud, embankments, and accident sites.",
    description:
      "Sometimes a vehicle does not just need a tow, it needs a recovery. Whether you have gone off the road into a ditch, slid onto a muddy shoulder, or been involved in a collision, our recovery team has the rigging, winch equipment, and experience to extract your vehicle safely without causing additional damage. We work at accident scenes, off-road situations, and anywhere vehicles end up where they should not be.",
    icon: Wrench,
    features: [
      "Ditch and embankment recovery",
      "Mud, gravel, and soft-shoulder extraction",
      "Accident scene recovery and towing",
      "Off-road and remote location recovery",
      "Heavy-duty winch service",
      "Coordination with emergency services when needed",
    ],
    image:
      "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=800&q=80",
    faqs: [
      {
        question: "What is vehicle recovery and how is it different from towing?",
        answer:
          "Towing moves a vehicle that is accessible. Recovery involves extracting a vehicle from an inaccessible position, such as a ditch, embankment, mud, or accident debris, before it can be towed. Recovery requires specialized rigging, winches, and techniques that go beyond a standard tow.",
      },
      {
        question: "Can you recover a vehicle that went off the road?",
        answer:
          "Yes. We regularly recover vehicles from roadside ditches, culverts, soft shoulders, and embankments along I-5, I-80, Highway 50, and surrounding surface streets. Our team assesses the safest extraction angle to avoid further damage to the vehicle.",
      },
      {
        question: "Do you work at accident scenes?",
        answer:
          "Yes. We respond to accident scenes and work alongside law enforcement and emergency services. Our priority is safety, both for you and for other drivers. We handle everything from uprighting vehicles to extracting them from collision damage.",
      },
      {
        question: "How do you recover a vehicle without damaging it further?",
        answer:
          "We assess the vehicle's position and the terrain before attaching rigging. We use soft shackles, tree savers, and proper anchor points to distribute load. The goal is always to restore the vehicle to a transportable position with minimal additional contact or stress.",
      },
      {
        question: "What if my vehicle is stuck in mud or soft ground?",
        answer:
          "We use our high-capacity winch to pull the vehicle back to solid ground. For vehicles deeply embedded or at a difficult angle, we may use snatch blocks to redirect the pull force. Most extractions are completed in under an hour.",
      },
    ],
  },
  {
    title: "Long Distance Transport",
    slug: "long-distance-transport",
    shortDescription:
      "Reliable vehicle transport across California and neighboring states -- relocation, dealer pickups, and more.",
    description:
      "When your vehicle needs to travel farther than the local shop, we handle the drive. Our long-distance transport service covers all of California and neighboring states for relocations, out-of-state purchases, seasonal vehicles, and project cars. All long-distance transports include direct communication throughout the trip and a secure flatbed platform so your vehicle arrives exactly as it left.",
    icon: MapPin,
    features: [
      "California-wide and interstate transport",
      "Driver contact and updates throughout the trip",
      "Flatbed platform (all four wheels secured)",
      "Scheduled pickup with confirmed delivery windows",
      "Contact us for transport options for high-value vehicles",
      "Direct driver communication throughout transit",
    ],
    image:
      "https://images.unsplash.com/photo-1502877338535-766e1452684a?w=800&q=80",
    faqs: [
      {
        question: "What states do you transport vehicles to?",
        answer:
          "We regularly transport to and from all of California as well as neighboring states including Nevada, Oregon, Arizona, and Utah. For other destinations, contact us and we will work out the best route and pricing for your situation.",
      },
      {
        question: "How do you secure the vehicle for long-distance transport?",
        answer:
          "All vehicles travel on a flatbed with four-corner soft-strap tie-downs, the same equipment we use for local tows. For high-value or low-clearance vehicles, we use extended ramps and additional ratchet straps to ensure nothing shifts in transit.",
      },
      {
        question: "Can I track my vehicle during transport?",
        answer:
          "Yes. We stay in touch throughout the trip and you can call or text your driver directly at any point during the transport.",
      },
      {
        question: "How much does long-distance transport cost?",
        answer:
          "Pricing depends on distance, vehicle type, and scheduling. We offer upfront quotes with no hidden fees. Call us at (916) 234-8697 for a same-day quote on your specific route.",
      },
      {
        question: "Can you transport a vehicle I just purchased out of state?",
        answer:
          "Absolutely. We regularly pick up vehicles from private sellers, auctions, and dealerships throughout California and bring them to you in Sacramento or anywhere along our route. Just let us know the pickup location and we will handle the rest.",
      },
    ],
  },
];
