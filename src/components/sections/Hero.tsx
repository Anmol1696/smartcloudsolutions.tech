import Link from "next/link";
import { ArrowRight, GitBranch, ShieldCheck, Workflow } from "lucide-react";

import { Container } from "@/components/Container";
import { Button } from "@/components/ui/button";
import { projects } from "@/content/projects";
import { site } from "@/lib/site";

export function Hero() {
  const artifactProjects = projects.slice(0, 5);

  return (
    <section id="hero" className="relative border-b border-border pb-16 pt-14 md:pb-20 md:pt-20">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div className="flex flex-col gap-7">
            <span className="inline-flex w-fit items-center gap-2 rounded-full border border-border bg-card px-3 py-1.5 text-xs font-medium text-muted-foreground">
              <span aria-hidden="true" className="h-2 w-2 rounded-full bg-accent" />
              Available for one build partner
            </span>

            <div className="flex flex-col gap-5">
              <h1 className="max-w-3xl text-balance text-5xl font-semibold leading-[0.98] text-foreground md:text-7xl">
                Senior engineers for agent systems and infra platforms.
              </h1>

              <p className="max-w-2xl text-pretty text-lg leading-8 text-muted-foreground md:text-xl">
                SmartCloud designs, builds, and operates the platform layer
                underneath agent products, web3 protocols, and developer tools.
                The proof is public: Starship, KubernetesJS, schema-sdk,
                SSV tooling, and Constructive.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 pt-1">
              <Button asChild size="lg" variant="default">
                <a
                  href={site.bookingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Book a 30-min call
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </a>
              </Button>
              <Button asChild size="lg" variant="ghost">
                <Link href="#work">See the proof</Link>
              </Button>
            </div>

            <div className="grid max-w-2xl grid-cols-3 gap-3 pt-4">
              {[
                ["2.1k+", "OSS commits"],
                ["4", "ecosystems"],
                ["10+", "years on call"],
              ].map(([value, label]) => (
                <div
                  key={label}
                  className="rounded-lg border border-border bg-card px-4 py-3"
                >
                  <div className="font-mono text-lg font-semibold text-foreground">
                    {value}
                  </div>
                  <div className="mt-1 text-xs text-muted-foreground">
                    {label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div
            className="rounded-2xl border border-border bg-card p-3 shadow-xl shadow-slate-200/60"
            aria-label="Project artifact wall showing SmartCloud work"
          >
            <div className="grid gap-3 md:grid-cols-2">
              <div className="rounded-xl border border-border bg-background p-4 md:col-span-2">
                <div className="mb-4 flex items-center justify-between gap-4">
                  <div>
                    <p className="text-sm font-semibold text-foreground">
                      Production artifacts
                    </p>
                    <p className="text-xs text-muted-foreground">
                      Repos, services, and platform modules we can point to.
                    </p>
                  </div>
                  <div className="flex items-center gap-2 rounded-full bg-accent-soft px-2.5 py-1 text-xs font-medium text-foreground">
                    <ShieldCheck className="h-3.5 w-3.5 text-accent" aria-hidden="true" />
                    public proof
                  </div>
                </div>
                <div className="grid gap-2">
                  {artifactProjects.map((project) => (
                    <a
                      key={project.slug}
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group grid grid-cols-[1fr_auto] gap-3 rounded-lg border border-border bg-card px-3 py-2.5 transition-[border-color,background-color] duration-150 hover:border-border-strong hover:bg-background"
                    >
                      <span>
                        <span className="block text-sm font-medium text-foreground">
                          {project.name}
                        </span>
                        <span className="block text-xs text-muted-foreground">
                          {project.artifact.label}
                        </span>
                      </span>
                      <span className="self-center font-mono text-xs font-medium text-muted-foreground transition-colors duration-150 group-hover:text-accent">
                        {project.artifact.metric}
                      </span>
                    </a>
                  ))}
                </div>
              </div>

              <div className="rounded-xl border border-border bg-background p-4">
                <div className="mb-5 flex items-center gap-2 text-sm font-semibold">
                  <Workflow className="h-4 w-4 text-accent" aria-hidden="true" />
                  Delivery loop
                </div>
                <div className="space-y-3">
                  {["Scope in repo", "Ship behind flag", "Run on call"].map(
                    (item, index) => (
                      <div key={item} className="flex items-center gap-3">
                        <span className="flex h-6 w-6 items-center justify-center rounded-full bg-accent-soft font-mono text-[11px] font-semibold text-accent">
                          {index + 1}
                        </span>
                        <span className="text-sm text-foreground">{item}</span>
                      </div>
                    ),
                  )}
                </div>
              </div>

              <div className="rounded-xl border border-border bg-background p-4">
                <div className="mb-5 flex items-center gap-2 text-sm font-semibold">
                  <GitBranch className="h-4 w-4 text-accent" aria-hidden="true" />
                  Stack lane
                </div>
                <div className="flex flex-wrap gap-2">
                  {["k8s", "mcp", "opa", "postgres", "cosmos", "evm"].map(
                    (item) => (
                      <span
                        key={item}
                        className="rounded-md border border-border bg-card px-2 py-1 font-mono text-xs text-muted-foreground"
                      >
                        {item}
                      </span>
                    ),
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
