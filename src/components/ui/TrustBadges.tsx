"use client";

import { Star } from "lucide-react";

interface TrustBadge {
  label: string;
  description: string;
}

const badges: TrustBadge[] = [
  {
    label: "Control4 Certified",
    description: "Authorized Dealer",
  },
  {
    label: "Lutron Certified",
    description: "Professional Installer",
  },
  {
    label: "150+ Projects",
    description: "Since 2018",
  },
  {
    label: "5-Star Rated",
    description: "Denver Metro",
  },
];

export function TrustBadges() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
      {badges.map((badge) => (
        <div
          key={badge.label}
          className="flex flex-col items-center rounded-xl border border-[#E8E4DF]/6 bg-[#E8E4DF]/[0.02] px-4 py-3 sm:px-6 sm:py-4"
        >
          <div className="mb-1 flex items-center gap-1">
            {badge.label === "5-Star Rated" && (
              <Star className="h-3.5 w-3.5 fill-[#D4844C] text-[#D4844C]" />
            )}
            <span className="text-[11px] font-semibold uppercase tracking-wider text-[#E8E4DF] sm:text-[12px]">
              {badge.label}
            </span>
          </div>
          <span className="text-[10px] text-[#7A7570] sm:text-[11px]">
            {badge.description}
          </span>
        </div>
      ))}
    </div>
  );
}
