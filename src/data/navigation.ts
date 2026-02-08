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
      { label: "Home Theater", href: "/services/home-theater" },
      { label: "Home Automation", href: "/services/home-automation" },
      { label: "Window Coverings", href: "/services/window-coverings" },
      { label: "Surveillance", href: "/services/surveillance" },
    ],
  },
  { label: "Projects", href: "/projects" },
  { label: "Brands", href: "/brands" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export const footerNav = {
  services: [
    { label: "Home Theater", href: "/services/home-theater" },
    { label: "Home Automation", href: "/services/home-automation" },
    { label: "Window Coverings", href: "/services/window-coverings" },
    { label: "Surveillance", href: "/services/surveillance" },
  ],
  company: [
    { label: "About Us", href: "/about" },
    { label: "Our Projects", href: "/projects" },
    { label: "Our Brands", href: "/brands" },
    { label: "Service Areas", href: "/areas" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/contact" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
  ],
};
