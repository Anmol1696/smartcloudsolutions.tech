export interface StackItem {
  name: string;
  note?: string;
}

export interface StackGroup {
  group: string;
  items: StackItem[];
}

export const stackGroups: StackGroup[] = [
  {
    group: "infrastructure",
    items: [
      { name: "kubernetes", note: "operators, crds, multi-tenant" },
      { name: "helm", note: "schema-first values, matrix ci" },
      { name: "operator-sdk", note: "kubebuilder + controller-runtime" },
      { name: "terraform", note: "gke, eks, declarative cloud" },
      { name: "github actions", note: "ci-as-code, parallel lanes" },
    ],
  },
  {
    group: "languages",
    items: [
      { name: "go", note: "operators, services, indexers" },
      { name: "typescript", note: "sdks, codegen, frontends" },
      { name: "python", note: "ml pipelines, scripting" },
      { name: "rust", note: "performance-critical bits" },
      { name: "solidity", note: "evm contracts, foundry" },
    ],
  },
  {
    group: "data",
    items: [
      { name: "postgres", note: "row-level security, multi-tenant" },
      { name: "pgvector", note: "rag + embeddings" },
      { name: "opa", note: "policy as code" },
      { name: "redis", note: "queues, ephemeral state" },
    ],
  },
  {
    group: "web3",
    items: [
      { name: "cosmos-sdk", note: "appchains, modules" },
      { name: "ibc-go", note: "relayers, packet flow" },
      { name: "viem", note: "evm clients, typed abi" },
      { name: "foundry", note: "solidity testing, fuzzing" },
      { name: "anchor", note: "solana programs" },
    ],
  },
  {
    group: "ai",
    items: [
      { name: "mcp", note: "model context protocol" },
      { name: "vllm", note: "self-hosted inference" },
      { name: "langgraph", note: "agent orchestration" },
      { name: "anthropic", note: "claude api" },
      { name: "openai", note: "fallback + embeddings" },
    ],
  },
];
