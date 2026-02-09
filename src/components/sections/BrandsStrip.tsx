"use client";

import { motion } from "framer-motion";

const partners = [
  { name: "Control4", logo: "/logos/control4.svg" },
  { name: "Lutron", logo: "/logos/lutron.svg" },
  { name: "Sonos", logo: "/logos/sonos.svg" },
  { name: "Sony", logo: "/logos/sony.svg" },
  { name: "Samsung", logo: "/logos/samsung.svg" },
  { name: "Epson", logo: "/logos/epson.svg" },
  { name: "Marantz", logo: "/logos/marantz.svg" },
  { name: "Hunter Douglas", logo: "/logos/hunter-douglas.svg" },
  { name: "Eero", logo: "/logos/eero.svg" },
  { name: "Nest", logo: "/logos/nest.svg" },
  { name: "Luma View", logo: "/logos/luma-view.svg" },
];

function MarqueeRow({
  items,
  direction = "left",
  speed = 30,
}: {
  items: typeof partners;
  direction?: "left" | "right";
  speed?: number;
}) {
  const doubled = [...items, ...items, ...items]; // Triple for seamless loop on wide screens
  return (
    <div className="relative flex w-full overflow-hidden">
      <motion.div
        className="flex w-max shrink-0 items-center"
        animate={{
          x: direction === "left" ? ["0%", "-33.333%"] : ["-33.333%", "0%"],
        }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: speed,
            ease: "linear",
          },
        }}
      >
        {doubled.map((brand, i) => (
          <div
            key={`${brand.name}-${i}`}
            className="flex items-center"
          >
            <div className="flex items-center justify-center px-6 opacity-40 transition-opacity duration-300 hover:opacity-80 sm:px-8 md:px-12 lg:px-16">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={brand.logo}
                alt={brand.name}
                className="h-6 w-auto sm:h-7 md:h-8"
                style={{ filter: "brightness(0) invert(1)" }}
                loading="lazy"
              />
            </div>
            <span className="text-xs text-[#D4844C]/25">&bull;</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}

export function BrandsStrip() {
  const firstHalf = partners.slice(0, Math.ceil(partners.length / 2));
  const secondHalf = partners.slice(Math.ceil(partners.length / 2));

  return (
    <section className="relative overflow-hidden border-y border-[#E8E4DF]/6 bg-[#0C0C0C] py-10 lg:py-14">
      <div className="space-y-6">
        <MarqueeRow items={firstHalf} direction="left" speed={22} />
        <MarqueeRow items={secondHalf} direction="right" speed={28} />
      </div>
    </section>
  );
}
