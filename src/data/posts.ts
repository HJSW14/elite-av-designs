export type ContentBlock =
  | { type: "paragraph"; text: string }
  | { type: "heading"; text: string }
  | { type: "list"; items: string[] }
  | { type: "tip"; text: string };

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: ContentBlock[];
  category: string;
  image: string;
  author: string;
  date: string;
  readTime: number;
}

export const posts: BlogPost[] = [
  {
    slug: "what-to-do-when-car-breaks-down",
    title: "What to Do When Your Car Breaks Down",
    excerpt:
      "Breaking down on the road is stressful. Here is a step-by-step guide to staying safe, protecting your vehicle, and getting help fast -- whether you are on a freeway or a side street.",
    category: "Safety Guide",
    image:
      "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=1200&q=80",
    author: "Next Level Towing",
    date: "2024-06-15",
    readTime: 6,
    content: [
      {
        type: "paragraph",
        text: "A breakdown can happen to anyone at any time. Knowing exactly what to do in the first few minutes after your car stops moving can make the difference between a minor inconvenience and a dangerous situation. Here is what to do.",
      },
      {
        type: "heading",
        text: "Step 1: Get Off the Road Safely",
      },
      {
        type: "paragraph",
        text: "If your car starts sputtering, losing power, or showing warning lights, your first priority is to get off the travel lanes. Signal and move to the right shoulder as smoothly as possible. If you are on a freeway, try to reach an exit ramp or a wide shoulder area. Avoid stopping in travel lanes or on narrow bridges.",
      },
      {
        type: "heading",
        text: "Step 2: Make Yourself Visible",
      },
      {
        type: "paragraph",
        text: "Once you are stopped safely, turn on your hazard lights immediately. If you have road flares or reflective triangles, place them 50-100 feet behind your vehicle. At night or in low visibility conditions, visibility is everything.",
      },
      {
        type: "tip",
        text: "Stay inside your vehicle with your seatbelt on if you are on a freeway. More accidents involving broken-down vehicles happen when people stand outside their car near traffic.",
      },
      {
        type: "heading",
        text: "Step 3: Assess the Situation",
      },
      {
        type: "paragraph",
        text: "From the safety of your vehicle, take a moment to identify what happened. Is a warning light on? Do you hear a sound? Did you hit something? Understanding what might have gone wrong helps the tow driver prepare the right equipment before arriving.",
      },
      {
        type: "list",
        items: [
          "Check your dashboard for warning lights (temperature, oil, battery, tire pressure)",
          "Listen for unusual sounds -- grinding, hissing, or clicking",
          "Look in your mirrors to see if anything looks visibly wrong",
          "Do not attempt to drive on a flat tire -- it can destroy the rim within a few hundred feet",
        ],
      },
      {
        type: "heading",
        text: "Step 4: Call for Help",
      },
      {
        type: "paragraph",
        text: "Call a towing company right away. When you call Next Level Towing at (916) 234-8697, tell us your location as precisely as possible -- the nearest cross streets, highway mile marker, or a nearby landmark. Tell us what happened so we bring the right truck. We aim for fast response to Sacramento area locations.",
      },
      {
        type: "heading",
        text: "Step 5: Wait Safely",
      },
      {
        type: "paragraph",
        text: "If you are on a busy freeway, the safest place to wait is outside your vehicle on the other side of a guard rail, away from traffic. On city streets, staying inside with the doors locked is usually fine. Keep your phone charged and be ready to guide the driver when they call.",
      },
      {
        type: "tip",
        text: "Tell the dispatcher your exact location when you first call, then stay in that location. Moving around makes you harder to find and can create confusion when the driver arrives.",
      },
    ],
  },
  {
    slug: "flatbed-vs-wheel-lift-towing",
    title: "Flatbed vs. Wheel-Lift Towing: Which Does Your Vehicle Need?",
    excerpt:
      "Not all tow trucks work the same way. Understanding the difference between flatbed and wheel-lift towing can save your vehicle from unnecessary damage -- especially if you drive an AWD, luxury, or lowered car.",
    category: "Towing Tips",
    image:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=80",
    author: "Next Level Towing",
    date: "2024-07-03",
    readTime: 5,
    content: [
      {
        type: "paragraph",
        text: "When your vehicle needs a tow, the type of truck used matters more than most people realize. The wrong method can damage your drivetrain, scrape your front bumper, or stress your suspension. Here is what you need to know.",
      },
      {
        type: "heading",
        text: "What Is Wheel-Lift Towing?",
      },
      {
        type: "paragraph",
        text: "Wheel-lift towing hooks under two wheels (usually the front or rear) and lifts that end of the vehicle off the ground while the other two wheels roll along the road. It is fast and works fine for standard front-wheel-drive vehicles being towed short distances on smooth roads.",
      },
      {
        type: "heading",
        text: "What Is Flatbed Towing?",
      },
      {
        type: "paragraph",
        text: "A flatbed tow truck loads the entire vehicle onto a flat platform so all four wheels are off the ground. The vehicle is driven or winched onto the bed and secured with straps. This is the safest method for virtually any vehicle and is the only recommended method for several vehicle types.",
      },
      {
        type: "heading",
        text: "When You Should Always Request a Flatbed",
      },
      {
        type: "list",
        items: [
          "All-wheel-drive (AWD) and four-wheel-drive (4WD) vehicles -- wheel-lift towing can destroy the drivetrain",
          "Luxury and exotic cars -- flatbeds eliminate scraped bumpers and body damage during loading",
          "Lowered or modified vehicles -- standard ramps scrape; our extended low-angle ramps load without contact",
          "Motorcycles -- always need a flatbed with wheel chocks",
          "Vehicles with automatic transmissions that cannot be placed in neutral",
          "Any vehicle with significant front or rear damage from an accident",
        ],
      },
      {
        type: "tip",
        text: "If you drive an AWD vehicle and a tow company shows up with a wheel-lift only, ask for a flatbed. Towing an AWD car with two wheels dragging can cause thousands of dollars in transmission and differential damage.",
      },
      {
        type: "heading",
        text: "Our Recommendation",
      },
      {
        type: "paragraph",
        text: "At Next Level Towing, we dispatch flatbed trucks by default because they are safer for your vehicle and eliminate the possibility of loading damage. If you are not sure which method is right for your situation, call us at (916) 234-8697 and we will advise you based on your specific vehicle.",
      },
    ],
  },
  {
    slug: "5-signs-your-car-needs-a-tow",
    title: "5 Signs Your Car Needs a Tow (Not Just a Repair)",
    excerpt:
      "Driving a vehicle that should be on a flatbed is a gamble that can turn a minor repair into a major one. Learn the warning signs that mean your car should not move under its own power.",
    category: "Vehicle Safety",
    image:
      "https://images.unsplash.com/photo-1502877338535-766e1452684a?w=1200&q=80",
    author: "Next Level Towing",
    date: "2024-07-22",
    readTime: 5,
    content: [
      {
        type: "paragraph",
        text: "It is tempting to try to limp your car to the nearest shop when something feels wrong. But driving a vehicle with certain types of problems can turn a $300 repair into a $3,000 one. Here are the five clearest signs that your vehicle needs a tow, not a drive.",
      },
      {
        type: "heading",
        text: "1. The Temperature Gauge Is in the Red",
      },
      {
        type: "paragraph",
        text: "If your engine temperature climbs into the red zone, pull over immediately. Continuing to drive an overheating engine can warp the cylinder head, blow the head gasket, or seize the engine entirely. These are catastrophic failures that can cost more than the vehicle is worth. Pull over, turn off the engine, and call for a tow.",
      },
      {
        type: "heading",
        text: "2. The Oil Pressure Warning Light Is On",
      },
      {
        type: "paragraph",
        text: "Low oil pressure means your engine internals are not being lubricated. Every second you drive like this, metal is grinding against metal. This light is not a suggestion -- it is an emergency. Stop driving immediately.",
      },
      {
        type: "heading",
        text: "3. The Steering or Brakes Feel Wrong",
      },
      {
        type: "paragraph",
        text: "If your steering suddenly feels loose, pulls hard to one side, or you feel grinding or pulsing through the brake pedal, do not drive further. Brake and steering failures can happen without warning when components are compromised. This is a safety issue, not just a repair issue.",
      },
      {
        type: "heading",
        text: "4. You Have a Flat Tire and No Spare",
      },
      {
        type: "paragraph",
        text: "Run-flat tires aside, driving on a completely flat tire destroys the tire, damages the rim, and can cause a loss of control. If you do not have a usable spare, call for roadside assistance for a tire change or a tow to the nearest tire shop.",
      },
      {
        type: "heading",
        text: "5. The Transmission Will Not Engage",
      },
      {
        type: "paragraph",
        text: "If your car will not shift into drive or reverse, or slips out of gear while moving, attempting to drive it can cause severe transmission damage. Get it on a flatbed and to a transmission shop before the problem escalates.",
      },
      {
        type: "tip",
        text: "When in doubt, call us. It takes 30 seconds to describe your situation to our dispatcher and we can tell you whether it is safe to drive or whether we should come to you. (916) 234-8697.",
      },
    ],
  },
  {
    slug: "how-much-does-a-tow-cost-sacramento",
    title: "How Much Does a Tow Cost in Sacramento?",
    excerpt:
      "Tow pricing depends on distance, vehicle type, and time of day. Learn what to expect and how to avoid surprise fees when you need a tow in Sacramento.",
    category: "Towing Tips",
    image:
      "https://images.unsplash.com/photo-1723846806146-05768f1de375?w=1200&q=80",
    author: "Next Level Towing",
    date: "2024-08-28",
    readTime: 4,
    content: [
      {
        type: "paragraph",
        text: "One of the most common questions we hear is how much a tow will cost. The answer depends on several factors, but with the right information you can avoid surprises and plan accordingly.",
      },
      {
        type: "heading",
        text: "What Affects Tow Pricing",
      },
      {
        type: "list",
        items: [
          "Distance -- local tows (within Sacramento) typically cost less than long-distance or interstate transport",
          "Vehicle type -- luxury, exotic, and heavy vehicles may require specialized equipment and cost more",
          "Time of day -- some companies charge premiums for nights, weekends, or holidays; we do not",
          "Recovery complexity -- a vehicle in a ditch or at an accident scene may require winching and extra labor",
        ],
      },
      {
        type: "heading",
        text: "Get a Quote Before We Arrive",
      },
      {
        type: "paragraph",
        text: "At Next Level Towing, we give you an upfront quote when you call. We do not add hidden fees or change the price when we arrive. You will know the cost before we dispatch. Call (916) 234-8697 for a same-day quote.",
      },
      {
        type: "tip",
        text: "If your insurance or roadside plan covers towing, we provide itemized receipts for reimbursement. Ask your insurer about coverage before we arrive if you are unsure.",
      },
    ],
  },
  {
    slug: "roadside-assistance-vs-tow-truck",
    title: "When to Call Roadside Assistance vs. a Tow Truck",
    excerpt:
      "Not every breakdown requires a tow. Learn when a jump-start, tire change, or fuel delivery can get you back on the road, and when you need a flatbed instead.",
    category: "Safety Guide",
    image:
      "https://images.unsplash.com/photo-1615092296061-e2ccfeb2f3d6?w=1200&q=80",
    author: "Next Level Towing",
    date: "2024-09-12",
    readTime: 4,
    content: [
      {
        type: "paragraph",
        text: "We handle both roadside assistance and towing. Often, the right call is roadside first -- many situations are resolved on the spot without ever putting your car on a truck.",
      },
      {
        type: "heading",
        text: "When Roadside Assistance Is Enough",
      },
      {
        type: "list",
        items: [
          "Dead battery -- a jump-start usually gets you going in minutes",
          "Flat tire with a usable spare -- we can change it on site",
          "Keys locked in the car -- lockout service avoids a tow",
          "Out of gas -- fuel delivery gets you to the nearest station",
        ],
      },
      {
        type: "heading",
        text: "When You Need a Tow",
      },
      {
        type: "paragraph",
        text: "If the engine will not start after a jump, the transmission will not engage, you have mechanical damage, or the vehicle is not drivable, a tow is the right choice. We bring the right truck for your vehicle and destination.",
      },
      {
        type: "tip",
        text: "When you call, describe what happened. Our dispatcher will recommend roadside or towing based on your situation. One call, and we send the right help. (916) 234-8697.",
      },
    ],
  },
  {
    slug: "towing-after-accident-sacramento",
    title: "What to Expect When You Need a Tow After an Accident",
    excerpt:
      "Being in an accident is stressful enough. Here is how we handle accident-scene towing in Sacramento and what you can expect from pick-up to drop-off.",
    category: "Vehicle Safety",
    image:
      "https://images.unsplash.com/photo-1673187139211-1e7ec3dd60ec?w=1200&q=80",
    author: "Next Level Towing",
    date: "2024-10-05",
    readTime: 5,
    content: [
      {
        type: "paragraph",
        text: "After an accident, your vehicle may be undriveable. We respond to accident scenes throughout Sacramento, working alongside law enforcement and emergency services when needed.",
      },
      {
        type: "heading",
        text: "What We Do at the Scene",
      },
      {
        type: "list",
        items: [
          "Assess the vehicle and the safest way to load it",
          "Use flatbed or wheel-lift depending on damage and vehicle type",
          "Coordinate with police if they are on scene",
          "Secure the vehicle for transport to your chosen destination",
        ],
      },
      {
        type: "heading",
        text: "Where We Take Your Vehicle",
      },
      {
        type: "paragraph",
        text: "You choose the destination: your home, a body shop, a dealership, or an impound lot. We will not take your car somewhere without your approval. If you are unsure, we can recommend reputable body shops in the Sacramento area.",
      },
      {
        type: "tip",
        text: "If you were in an accident, call us at (916) 234-8697. We dispatch quickly and aim for fast arrival. Have your insurance information ready if you plan to file a claim for the tow.",
      },
    ],
  },
  {
    slug: "24-7-towing-sacramento-elk-grove-rancho-cordova",
    title: "24/7 Towing in Sacramento, Elk Grove, Rancho Cordova & Nearby Areas",
    excerpt:
      "Need a tow at 2 AM or on a holiday? We offer 24/7 towing and roadside assistance across Sacramento County, Elk Grove, Rancho Cordova, Folsom, and Roseville.",
    category: "Service Area",
    image:
      "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=1200&q=80",
    author: "Next Level Towing",
    date: "2024-12-08",
    readTime: 4,
    content: [
      {
        type: "paragraph",
        text: "Breakdowns do not keep business hours. Whether you are stuck on I-5 at midnight or in a parking lot in Elk Grove on Sunday morning, Next Level Towing responds around the clock throughout Sacramento and surrounding communities.",
      },
      {
        type: "heading",
        text: "Where We Serve",
      },
      {
        type: "list",
        items: [
          "Sacramento (downtown, Midtown, South Sacramento)",
          "Elk Grove, Rancho Cordova, Citrus Heights",
          "Folsom, Roseville, Rocklin",
          "West Sacramento, Davis, Woodland",
        ],
      },
      {
        type: "heading",
        text: "What We Offer 24/7",
      },
      {
        type: "paragraph",
        text: "Flatbed and wheel-lift towing, jump starts, tire changes, fuel delivery, and lockout assistance. One call, any time of day. (916) 234-8697.",
      },
      {
        type: "tip",
        text: "Save our number in your phone before you need it. When you break down, every minute counts.",
      },
    ],
  },
  {
    slug: "dead-battery-what-to-do-sacramento",
    title: "Dead Battery? What to Do Before Calling a Tow Truck in Sacramento",
    excerpt:
      "A dead battery does not always mean you need a tow. When to try a jump start, when to call for help, and how to avoid getting stuck again.",
    category: "Tips",
    image:
      "https://images.unsplash.com/photo-1765211003026-f7666ea3a948?w=1200&q=80",
    author: "Next Level Towing",
    date: "2024-11-01",
    readTime: 5,
    content: [
      {
        type: "paragraph",
        text: "If your car will not start and the engine barely turns or does nothing at all, a dead battery is often the cause. Here is what to do next.",
      },
      {
        type: "heading",
        text: "If Someone Can Give You a Jump",
      },
      {
        type: "paragraph",
        text: "Use jumper cables and connect the correct terminals. Let the donor car run for a few minutes before you try starting yours. If it starts, drive for at least 15-20 minutes so the alternator can recharge the battery.",
      },
      {
        type: "heading",
        text: "When to Call for Roadside Help",
      },
      {
        type: "paragraph",
        text: "If you are alone, in an unsafe location, or a jump does not work, call for help. We provide jump starts throughout Sacramento. If the battery is bad or the alternator has failed, we can tow you to a shop.",
      },
      {
        type: "tip",
        text: "Call (916) 234-8697 for jump-start or towing. We come to you.",
      },
    ],
  },
  {
    slug: "flat-tire-on-highway-sacramento",
    title: "Flat Tire on the Highway: Staying Safe in Sacramento",
    excerpt:
      "A flat tire on Highway 50, I-5, or 99 in Sacramento can be dangerous. How to pull over safely, when to change it yourself, and when to call a tow.",
    category: "Safety Guide",
    image:
      "https://images.unsplash.com/photo-1657528410226-e8bcb0a07823?w=1200&q=80",
    author: "Next Level Towing",
    date: "2024-11-18",
    readTime: 5,
    content: [
      {
        type: "paragraph",
        text: "A blowout or flat on a busy Sacramento freeway puts you at risk. Your first job is to stay calm and get off the road as safely as possible.",
      },
      {
        type: "heading",
        text: "Steps to Stay Safe",
      },
      {
        type: "list",
        items: [
          "Do not slam the brakes. Ease off the gas and slow down gradually.",
          "Turn on hazard lights and move to the right shoulder.",
          "If you cannot reach the shoulder, pull as far right as possible.",
          "Stay in the car with your seatbelt on if traffic is heavy.",
        ],
      },
      {
        type: "heading",
        text: "Change It Yourself or Call for Help?",
      },
      {
        type: "paragraph",
        text: "If the shoulder is wide and traffic is light, you may be able to change the tire. If you are on a narrow shoulder, at night, or in heavy traffic, it is safer to call for help. We can change the tire on scene or tow your car to a shop.",
      },
      {
        type: "tip",
        text: "For a flat on a Sacramento freeway, call (916) 234-8697. We respond quickly and help you get back on the road.",
      },
    ],
  },
  {
    slug: "aaa-vs-local-tow-sacramento",
    title: "AAA vs Local Tow Company: Which Is Right for You in Sacramento?",
    excerpt:
      "AAA offers towing benefits, but a local Sacramento tow company can be faster and more flexible. When each option makes sense.",
    category: "Tips",
    image:
      "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=1200&q=80",
    author: "Next Level Towing",
    date: "2025-01-08",
    readTime: 5,
    content: [
      {
        type: "paragraph",
        text: "Many Sacramento drivers have AAA or similar roadside plans. Others prefer calling a local tow company directly. Both can work; here is when each may be the better choice.",
      },
      {
        type: "heading",
        text: "When AAA Might Work Well",
      },
      {
        type: "paragraph",
        text: "If you have AAA and you are okay waiting for their contracted provider, it can save you money. Plan ahead and know your coverage limits: some plans include a limited number of free tows per year.",
      },
      {
        type: "heading",
        text: "When a Local Tow Company Helps More",
      },
      {
        type: "paragraph",
        text: "Local companies like Next Level Towing often arrive faster because we are based in Sacramento and dispatch our own trucks. No third-party delay. We can also take you anywhere you choose, not just within plan limits. If you need a quick response or a long-distance tow, call us directly.",
      },
      {
        type: "tip",
        text: "For fast, local towing in Sacramento, Elk Grove, or Rancho Cordova, call (916) 234-8697. No membership required.",
      },
    ],
  },
  {
    slug: "best-tow-company-sacramento-how-to-choose",
    title: "How to Choose the Best Tow Company in Sacramento",
    excerpt:
      "What to look for when picking a tow company in Sacramento: response time, pricing, equipment, and reputation.",
    category: "Tips",
    image:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=80",
    author: "Next Level Towing",
    date: "2025-02-20",
    readTime: 5,
    content: [
      {
        type: "paragraph",
        text: "When your car breaks down, you need a tow company you can trust. Here is how to pick one in Sacramento.",
      },
      {
        type: "heading",
        text: "What to Look For",
      },
      {
        type: "list",
        items: [
          "Fast response – a company that dispatches quickly and gives you an ETA",
          "Clear pricing – upfront quotes when possible, no surprise fees",
          "Right equipment – flatbed for luxury, AWD, or damaged vehicles",
          "Good reviews – check Google and other sites for real customer feedback",
        ],
      },
      {
        type: "heading",
        text: "Red Flags to Avoid",
      },
      {
        type: "paragraph",
        text: "Avoid companies that refuse to give a price range, pressure you to go to a specific shop, or take a long time to show up. A reputable Sacramento tow company will be transparent and professional.",
      },
      {
        type: "tip",
        text: "Next Level Towing offers upfront pricing and fast dispatch. Call (916) 234-8697 for towing in Sacramento and nearby areas.",
      },
    ],
  },
];
