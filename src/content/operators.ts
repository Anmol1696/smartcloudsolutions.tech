export interface TimelineEntry {
  role: string;
  org: string;
}

export interface Operator {
  slug: "anmol" | "rohit";
  monogram: string;
  name: string;
  title: string;
  location: string;
  blurb: string;
  signature: string[];
  timeline: TimelineEntry[];
  links: Array<{ label: string; href: string }>;
}

export const operators: Operator[] = [
  {
    slug: "anmol",
    monogram: "ay",
    name: "Anmol Yadav",
    title: "infrastructure + agents",
    location: "Dubai",
    blurb:
      "Builds Kubernetes-native platforms and agent infrastructure. Maintains Starship — the Kubernetes-native multi-chain devnet adopted across the Cosmos ecosystem.",
    signature: ["Starship", "KubernetesJS", "schema-sdk", "Constructive"],
    timeline: [
      { role: "co-founder", org: "Constructive" },
      { role: "maintainer", org: "Starship · hyperweb-io" },
      { role: "tech lead", org: "Persistence Labs" },
      { role: "cloud platform", org: "Rakuten · Woven Planet" },
    ],
    links: [
      { label: "github", href: "https://github.com/Anmol1696" },
      { label: "starship", href: "https://github.com/hyperweb-io/starship" },
    ],
  },
  {
    slug: "rohit",
    monogram: "ra",
    name: "Rohit Aggarwal",
    title: "web3 protocols + smart contracts",
    location: "India",
    blurb:
      "Designs and ships web3 protocols. 5+ protocols deployed, deep on EVM validator infrastructure, distributed key management, and on-chain payments.",
    signature: ["ssv-service", "erc20-subscriptions", "movebot"],
    timeline: [
      { role: "protocol architect", org: "independent" },
      { role: "5+ protocols", org: "EVM mainnets" },
      { role: "6+ hackathon wins", org: "global circuit" },
      { role: "alumnus", org: "IIT Bombay" },
    ],
    links: [
      { label: "github", href: "https://github.com/web3cook" },
      { label: "site", href: "https://web3cook.com" },
    ],
  },
];
