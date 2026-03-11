export interface Testimonial {
  name: string;
  location: string;
  text: string;
  rating: number;
  service: string;
}

export const testimonials: Testimonial[] = [
  {
    name: "Ryan B.",
    location: "Sacramento, CA",
    text: "My M3 needed a tow to a shop after a flat tire. I was worried about scraping my bumper but their truck handled it with no issues. Loaded it perfectly on the flatbed, no drama. Highly recommend.",
    rating: 5,
    service: "Flatbed Towing",
  },
  {
    name: "Garrett W.",
    location: "Sacramento, CA",
    text: "Called while pulled over on the freeway and they showed up quickly. Five stars. Professional, fast, and they actually picked up the phone on the first ring.",
    rating: 5,
    service: "Roadside Assistance",
  },
  {
    name: "Kyce A.",
    location: "Elk Grove, CA",
    text: "Needed to take my brand new Mercedes to the dealership after some engine troubles. They showed up quickly and were professional throughout. The car arrived at the dealership without a scratch.",
    rating: 5,
    service: "Flatbed Towing",
  },
  {
    name: "Aaron C.",
    location: "Rancho Cordova, CA",
    text: "I woke up to my car not starting. I called Next Level Towing and they took care of me quickly. Jump-start worked and I made it to the shop. Very happy with the service.",
    rating: 5,
    service: "Roadside Assistance",
  },
  {
    name: "Aaron I.",
    location: "Sacramento, CA",
    text: "I know both Kay and Michael and they are awesome. I can definitely recommend. They run a real operation, not some random guy with a truck. Prompt, professional, and honest pricing.",
    rating: 5,
    service: "Flatbed Towing",
  },
  {
    name: "Brooke N.",
    location: "Folsom, CA",
    text: "I woke up to my Toyota not turning on. I thought I needed a shop, but they charged up my battery on the spot. Saved me a tow bill. Thanks, will definitely call again.",
    rating: 5,
    service: "Roadside Assistance",
  },
  {
    name: "Brayson C.",
    location: "Roseville, CA",
    text: "Had a nail in my tire and they showed up quickly. Changed the spare right there in the parking lot. Clean, fast, and no surprises on price. Exactly what you want when you're stranded.",
    rating: 5,
    service: "Roadside Assistance",
  },
];
