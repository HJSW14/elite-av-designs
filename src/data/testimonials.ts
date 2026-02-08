export interface Testimonial {
  name: string;
  location: string;
  text: string;
  rating: number;
  project: string;
}

export const testimonials: Testimonial[] = [
  {
    name: "Michael & Sarah T.",
    location: "Highlands Ranch, CO",
    text: "Elite AV Designs transformed our basement into an incredible home theater. The Dolby Atmos system sounds unbelievable, and the Control4 integration makes everything so easy to use. Best investment we've made in our home.",
    rating: 5,
    project: "Home Theater",
  },
  {
    name: "Jennifer L.",
    location: "Castle Rock, CO",
    text: "From the initial consultation to the final walkthrough, the team was professional, knowledgeable, and incredibly detail-oriented. Our whole-home automation system works flawlessly. We can control everything from one app.",
    rating: 5,
    project: "Home Automation",
  },
  {
    name: "David & Karen P.",
    location: "Parker, CO",
    text: "The motorized shades they installed are gorgeous and work perfectly with our smart home system. They even programmed scenes that adjust throughout the day. Can't recommend them enough.",
    rating: 5,
    project: "Window Coverings",
  },
  {
    name: "Robert M.",
    location: "Lone Tree, CO",
    text: "We needed a complete security camera system for our property. Elite AV designed a comprehensive solution with crystal-clear 4K cameras and remote access. We feel so much safer now.",
    rating: 5,
    project: "Surveillance",
  },
  {
    name: "James & Lisa K.",
    location: "Centennial, CO",
    text: "The whole-home audio system they installed is incredible. Music follows us from room to room, and the outdoor speakers make our patio the perfect entertainment space. Professional installation, amazing results.",
    rating: 5,
    project: "Whole Home Audio",
  },
  {
    name: "Mark D.",
    location: "Denver, CO",
    text: "Had them mount our 85-inch TV above the fireplace and hide all the wires. Looks like it was built that way. Clean, professional work and they finished in under 2 hours. Highly recommend.",
    rating: 5,
    project: "TV Wall Mounting",
  },
  {
    name: "Emily & Brian R.",
    location: "Boulder, CO",
    text: "Our Control4 system controls lighting, climate, security, and entertainment seamlessly. The team was patient explaining everything and made sure we were comfortable using the system before they left. Worth every penny.",
    rating: 5,
    project: "Control4 Installation",
  },
  {
    name: "Scott T.",
    location: "Arvada, CO",
    text: "The outdoor TV and audio setup they built for our patio is absolutely incredible. We use it year-round now, even in winter. Everything was designed specifically for Colorado's weather and it shows.",
    rating: 5,
    project: "Outdoor AV",
  },
];
