"use client";

interface TrustBadge {
  label: string;
  description: string;
}

const badges: TrustBadge[] = [
  { label: "Licensed & Insured", description: "California" },
  { label: "24/7 Dispatch", description: "Sacramento Area" },
  { label: "Upfront Pricing", description: "No Hidden Fees" },
  { label: "Flatbed Equipped", description: "Safe Transport" },
];

export function TrustBadges() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
      {badges.map((badge) => (
        <div
          key={badge.label}
          className="flex flex-col items-center rounded-xl border border-[#ededed]/6 bg-[#ededed]/[0.02] px-4 py-3 sm:px-6 sm:py-4"
        >
          <div className="mb-1 flex items-center gap-1">
            <span className="text-[11px] font-semibold uppercase tracking-wider text-[#ededed] sm:text-[12px]">
              {badge.label}
            </span>
          </div>
          <span className="text-[10px] text-[#888] sm:text-[11px]">
            {badge.description}
          </span>
        </div>
      ))}
    </div>
  );
}
