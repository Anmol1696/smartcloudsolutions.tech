export interface Project {
  slug: string;
  name: string;
  url: string;
  type: string;
  outcome: string;
  evidence: string;
  artifact: {
    label: string;
    metric: string;
    rows: string[];
  };
  meta: string[];
  tags: string[];
  owner: "anmol" | "rohit" | "team";
  featured?: boolean;
}

export const projects: Project[] = [
  {
    slug: "starship",
    name: "Starship",
    url: "https://github.com/hyperweb-io/starship",
    type: "Flagship OSS",
    outcome:
      "Reproducible multi-chain devnets for Cosmos, Ethereum, and Solana teams.",
    evidence:
      "Replaces manual validator and relayer setup with a Kubernetes-native environment that can run in CI, demos, and internal testnets.",
    artifact: {
      label: "environment graph",
      metric: "~672 commits",
      rows: ["cosmos-sdk nodes", "ibc relayers", "ethereum clients", "solana validators"],
    },
    meta: ["~672 commits", "MIT", "cosmos · ethereum · solana"],
    tags: ["kubernetes", "helm", "go", "cosmos-sdk", "ibc-go"],
    owner: "anmol",
    featured: true,
  },
  {
    slug: "kubernetesjs",
    name: "KubernetesJS",
    url: "https://github.com/kubernetesjs",
    type: "Developer tooling",
    outcome:
      "A typed TypeScript surface for the Kubernetes API without client-library sprawl.",
    evidence:
      "Generated from OpenAPI with in-cluster auth, watch/patch primitives, and React hooks for operator-facing apps.",
    artifact: {
      label: "typed api surface",
      metric: "OpenAPI generated",
      rows: ["watch resources", "patch objects", "in-cluster auth", "React hooks"],
    },
    meta: ["~26% of 442 commits", "MIT", "openapi-generated"],
    tags: ["typescript", "kubernetes", "openapi"],
    owner: "anmol",
  },
  {
    slug: "schema-sdk",
    name: "schema-sdk",
    url: "https://github.com/launchql/schema-sdk",
    type: "Code generation",
    outcome:
      "Schema-first SDK generation for platforms that cannot afford drift between API and client.",
    evidence:
      "Adds Kubernetes GVK binding on top of OpenAPI/Swagger to produce usable TypeScript clients.",
    artifact: {
      label: "codegen pipeline",
      metric: "GVK binding",
      rows: ["OpenAPI input", "AST transform", "typed client", "package output"],
    },
    meta: ["typescript", "babel ast", "k8s gvk binding"],
    tags: ["codegen", "typescript", "openapi"],
    owner: "anmol",
  },
  {
    slug: "ssv-service",
    name: "ssv-service",
    url: "https://github.com/web3cook/ssv-service",
    type: "Protocol backend",
    outcome:
      "Ethereum SSV staking operations with automated key distribution and validator workflows.",
    evidence:
      "Backend service for distributed validator key management, built around operator-grade staking operations.",
    artifact: {
      label: "validator workflow",
      metric: "EVM staking",
      rows: ["key generation", "operator split", "distribution", "service audit"],
    },
    meta: ["python · solidity", "ethereum staking", "production-grade"],
    tags: ["ethereum", "ssv", "python", "solidity"],
    owner: "rohit",
  },
  {
    slug: "constructive",
    name: "Constructive",
    url: "https://github.com/Anmol1696",
    type: "Agent platform",
    outcome:
      "A Postgres-first platform for multi-tenant data, OAuth, model inference, and MCP-tooled agents.",
    evidence:
      "134+ packages across RLS, PKCE, vLLM inference, and tool-aware agent layers.",
    artifact: {
      label: "platform modules",
      metric: "134+ packages",
      rows: ["Postgres RLS", "OAuth PKCE", "vLLM inference", "MCP tools"],
    },
    meta: ["multi-repo platform", "postgres rls", "mcp + vllm"],
    tags: ["postgres", "go", "typescript", "mcp"],
    owner: "anmol",
  },
];

export const featuredProject = projects.find((p) => p.featured)!;
export const projectCards = projects.filter((p) => !p.featured);
