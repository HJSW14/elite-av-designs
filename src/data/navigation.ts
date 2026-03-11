export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

export const mainNav: NavItem[] = [
  {
    label: "Services",
    href: "/services",
    children: [
      { label: "Flatbed Towing", href: "/services/flatbed-towing" },
      { label: "Roadside Assistance", href: "/services/roadside-assistance" },
      { label: "Vehicle Recovery", href: "/services/vehicle-recovery" },
      { label: "Long Distance Transport", href: "/services/long-distance-transport" },
    ],
  },
  { label: "Service Areas", href: "/areas" },
  { label: "Reviews", href: "/reviews" },
  { label: "About", href: "/about" },
  { label: "FAQ", href: "/faq" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export const footerNav = {
  services: [
    { label: "Flatbed Towing", href: "/services/flatbed-towing" },
    { label: "Roadside Assistance", href: "/services/roadside-assistance" },
    { label: "Vehicle Recovery", href: "/services/vehicle-recovery" },
    { label: "Long Distance Transport", href: "/services/long-distance-transport" },
  ],
  company: [
    { label: "About Us", href: "/about" },
    { label: "Reviews", href: "/reviews" },
    { label: "Service Areas", href: "/areas" },
    { label: "FAQ", href: "/faq" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/contact" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
  ],
};
