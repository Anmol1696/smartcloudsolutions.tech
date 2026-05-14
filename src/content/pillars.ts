export interface Offer {
  title: string;
  summary: string;
  deliverables: string[];
  whenToCall: string;
  proof: string;
}

export const offers: Offer[] = [
  {
    title: "Agent systems",
    summary:
      "For teams moving past demos into agents that touch customer data, internal tools, and long-running jobs.",
    deliverables: [
      "MCP servers with typed tools and audit trails",
      "Workspace isolation, auth, and credential boundaries",
      "Tracing, replay, and eval loops for failed runs",
    ],
    whenToCall:
      "Your agent can do useful work, but nobody trusts the permissions, retries, or failure modes yet.",
    proof: "MCP layers, vLLM inference, OPA policy, Postgres RLS",
  },
  {
    title: "Infrastructure platforms",
    summary:
      "For teams whose platform depends on tribal setup knowledge, manual environments, and one overloaded infra owner.",
    deliverables: [
      "Kubernetes operators, CRDs, and control loops",
      "Preview environments and CI-grade devnets",
      "Dashboards, alerts, and runbooks teams actually use",
    ],
    whenToCall:
      "Every release still needs a human checklist, a local incantation, or a platform engineer on standby.",
    proof: "Starship, KubernetesJS, Rakuten, Persistence, Woven Planet",
  },
  {
    title: "Web3 and dev tooling",
    summary:
      "For protocol teams blocked by brittle SDKs, validator workflows, schema drift, or test environments nobody can reproduce.",
    deliverables: [
      "SDKs generated from source-of-truth schemas",
      "Protocol services and validator operation flows",
      "Chain, relayer, and staking environments for CI",
    ],
    whenToCall:
      "Your protocol works, but integrations keep drifting because the tools are weaker than the core system.",
    proof: "Cosmos SDK, IBC, SSV, Foundry, Solana, OpenAPI",
  },
];
