export interface Testimonial {
  name: string;
  location: string;
  text: string;
  rating: number;
  project: string;
}

export const testimonials: Testimonial[] = [
  // Real Google Reviews
  {
    name: "Patra Clark",
    location: "Denver Metro, CO",
    text: "Tyler and Javier, what a great team! Tyler came to our house to give us an estimate for a movie theater and a couple of TVs. His prices were excellent, and we decided to go with his company. We are happy that we made the order with him.",
    rating: 5,
    project: "Home Theater",
  },
  {
    name: "Dawn Caldarella",
    location: "Denver Metro, CO",
    text: "Tyler and Elite AV Designs are top notch! Tyler was able to get our AV situation back in order for reasonable cost. He is super knowledgeable, professional and easy to work with. He is also very responsive to questions after the fact. Simply the best!",
    rating: 5,
    project: "AV Installation",
  },
  {
    name: "Mckenna Bird",
    location: "Denver Metro, CO",
    text: "Tyler and Javier were not only knowledgeable and professional with setting up our tv and other smart devices, but they were easy to work with and quick to help. Would use them again and recommend them to anyone!",
    rating: 5,
    project: "Smart Home Setup",
  },
  {
    name: "Chris Cain",
    location: "Denver Metro, CO",
    text: "I have known Javier for some time as he was involved in setting up our AV and home automation system some years ago and was delighted to hear he had set up his own company. Javier and now his team as well have always been responsive, knowledgeable, efficient and extremely competent. I recommend Javier, and now Elite AV Designs, to anyone looking at installing or updating AV, Home Automation and security systems in their home.",
    rating: 5,
    project: "Home Automation",
  },
  {
    name: "Jason Foster",
    location: "Denver Metro, CO",
    text: "Tyler is extremely knowledgeable about home audiovisual systems. He was able to take what would have given me fits and make it look easy. Additionally, he doesn't make you feel silly about switch settings when that might've been the cause for your initial call.",
    rating: 5,
    project: "Home Theater",
  },
  {
    name: "Ron Jacobs",
    location: "Denver Metro, CO",
    text: "Tyler and his team do wonderful work. Tyler is responsive, friendly and wants to make sure his clients are happy. I highly recommend him.",
    rating: 5,
    project: "General AV",
  },
];
