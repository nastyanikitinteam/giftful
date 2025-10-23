import type { NavItem, NavGroup } from "../types/navigation";

export const HEADER_NAV: NavItem[] = [
  { label: "How it works", href: "#how-it-works" },
  { label: "Features", href: "#features" },
  { label: "Partners", href: "#partners" },
  { label: "FAQ", href: "#faq" },
];

export const FOOTER_NAV: NavGroup[] = [
  {
    title: "Company",
    links: HEADER_NAV,
  },
  {
    title: "Legal",
    links: [
      { label: "FAQ", href: "#" },
      { label: "Partners", href: "#" },
    ],
  },
];
