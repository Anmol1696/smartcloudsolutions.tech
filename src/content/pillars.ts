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
      "Production agent workflows need auth, state, tools, retries, and observability. We build the control plane around the model, not another prompt demo.",
    deliverables: [
      "MCP servers and tool gateways",
      "Workspace isolation and credential boundaries",
      "Evaluation, tracing, and replay loops",
    ],
    whenToCall:
      "You have agents touching real customer data, internal tools, or long-running work.",
    proof: "MCP layers, vLLM inference, OPA policy, Postgres RLS",
  },
  {
    title: "Infrastructure platforms",
    summary:
      "Kubernetes operators, devnets, CI environments, runbooks, and cloud foundations for teams that need the platform to keep explaining itself.",
    deliverables: [
      "Kubernetes operators and CRDs",
      "Preview and integration environments",
      "Dashboards, alerts, and runbooks",
    ],
    whenToCall:
      "Your infra depends on tribal knowledge, manual setup, or one overloaded platform engineer.",
    proof: "Starship, KubernetesJS, Rakuten, Persistence, Woven Planet",
  },
  {
    title: "Web3 and dev tooling",
    summary:
      "Typed SDKs, schema-first CLIs, staking services, devnets, and protocol tooling for teams shipping across Cosmos, Ethereum, and Solana.",
    deliverables: [
      "SDKs generated from source-of-truth schemas",
      "Protocol services and validator workflows",
      "CI-grade chain and relayer environments",
    ],
    whenToCall:
      "Your protocol is blocked by tooling, integration drift, or brittle local environments.",
    proof: "Cosmos SDK, IBC, SSV, Foundry, Solana, OpenAPI",
  },
];
