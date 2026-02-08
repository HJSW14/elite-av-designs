"use client";

import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { MapPin } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { projects, type Project } from "@/data/projects";

const categories = ["All", "Home Theater", "Home Automation", "Window Coverings", "Surveillance"] as const;

export function ProjectsGallery() {
  const [active, setActive] = useState<string>("All");
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  const filtered =
    active === "All"
      ? projects
      : projects.filter((p) => p.category === active);

  return (
    <section ref={ref} className="bg-[#0C0C0C] py-16 lg:py-24">
      <Container>
        {/* Filter tabs */}
        <motion.div
          className="mb-12 flex flex-wrap items-center justify-center gap-2"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] as const }}
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`rounded-full px-5 py-2 text-[13px] font-medium transition-all duration-300 ${
                active === cat
                  ? "bg-[#D4844C] text-white shadow-lg shadow-[#D4844C]/15"
                  : "border border-[#E8E4DF]/8 text-[#7A7570] hover:border-[#D4844C]/30 hover:text-[#E8E4DF]"
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Gallery grid - crossfade entire grid on filter change */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
          >
            {filtered.map((project, i) => (
              <ProjectCard key={project.slug} project={project} index={i} />
            ))}
          </motion.div>
        </AnimatePresence>

        {filtered.length === 0 && (
          <p className="mt-16 text-center text-[15px] text-[#7A7570]">
            No projects in this category yet. Check back soon.
          </p>
        )}
      </Container>
    </section>
  );
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.35,
        delay: index * 0.06,
        ease: [0.22, 1, 0.36, 1] as const,
      }}
      className="group overflow-hidden rounded-xl border border-[#E8E4DF]/6 bg-[#111110]"
    >
      {/* Image */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
          style={{ backgroundImage: `url(${project.image})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0C0C0C]/70 via-[#0C0C0C]/20 to-transparent" />

        {/* Category badge */}
        <div className="absolute top-4 left-4 rounded-full bg-[#0C0C0C]/70 px-3 py-1 text-[11px] font-medium text-[#D4844C] backdrop-blur-sm">
          {project.category}
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="text-lg font-semibold text-[#E8E4DF]">
          {project.title}
        </h3>
        <div className="mt-1.5 flex items-center gap-1.5 text-[12px] text-[#7A7570]">
          <MapPin className="h-3 w-3 text-[#D4844C]" />
          {project.location}
        </div>

        <p className="mt-3 text-[13px] leading-relaxed text-[#7A7570] line-clamp-3">
          {project.description}
        </p>

        {/* Feature pills */}
        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.features.map((f) => (
            <span
              key={f}
              className="rounded-full border border-[#E8E4DF]/8 px-2.5 py-0.5 text-[10px] font-medium text-[#7A7570]"
            >
              {f}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
