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
    title: "founder/cto · web3 protocols",
    location: "India",
    blurb:
      "Founder/CTO of Raga Finance (on-chain strategy vaults across Berachain, Hyperliquid, Katana, Hemi) and Nexus Network (venture-backed, non-custodial L2 bridge-fund staking via SSV). Previously led EVM at pSTAKE Finance — liquid staking on BNB/Ethereum and cross-chain L2 staking via LayerZero.",
    signature: ["Raga Finance", "Nexus Network", "pSTAKE EVM", "ssv-service"],
    timeline: [
      { role: "founder/cto", org: "Raga Finance" },
      { role: "founder/cto", org: "Nexus Network" },
      { role: "lead blockchain engineer", org: "pSTAKE · Persistence" },
      { role: "alumnus", org: "IIT Bombay" },
    ],
    links: [
      { label: "github", href: "https://github.com/web3cook" },
      { label: "site", href: "https://web3cook.com" },
    ],
  },
];
