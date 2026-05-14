import Link from "next/link";
import { ArrowRight, GitBranch, ShieldCheck } from "lucide-react";

import { Container } from "@/components/Container";
import { Button } from "@/components/ui/button";
import { projects } from "@/content/projects";
import { site } from "@/lib/site";

export function Hero() {
  const artifactProjects = projects.slice(0, 5);

  return (
    <section id="hero" className="relative border-b border-border pb-14 pt-12 md:pb-16 md:pt-16">
      <Container>
        <div className="grid gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
          <div className="flex flex-col gap-6">
            <span className="inline-flex w-fit items-center gap-2 rounded-full border border-border bg-card px-3 py-1.5 text-xs font-medium text-muted-foreground">
              <span aria-hidden="true" className="h-2 w-2 rounded-full bg-accent" />
              Available for one build partner
            </span>

            <div className="flex flex-col gap-4">
              <h1 className="max-w-3xl text-balance text-4xl font-semibold leading-[1.02] text-foreground md:text-5xl lg:text-6xl">
                Engineering partners for agent systems and infra platforms.
              </h1>

              <p className="max-w-2xl text-pretty text-base leading-7 text-muted-foreground md:text-lg">
                SmartCloud builds the operating layer behind serious technical
                products: agent workflows with auth, CI devnets your team can
                trust, SDKs that do not drift, and platform services that can be
                run after handoff.
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

            <div className="grid max-w-xl grid-cols-3 divide-x divide-border overflow-hidden rounded-lg border border-border bg-card">
              {[
                ["2.1k+", "OSS commits"],
                ["4", "ecosystems"],
                ["10+", "years on call"],
              ].map(([value, label]) => (
                <div key={label} className="px-4 py-3">
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
            className="overflow-hidden rounded-xl border border-border bg-card"
            aria-label="Project artifact wall showing SmartCloud work"
          >
            <div className="border-b border-border bg-background px-4 py-3.5">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm font-semibold text-foreground">
                    Production artifact map
                  </p>
                  <p className="mt-1 text-xs leading-5 text-muted-foreground">
                    Public repos and modules behind the offer.
                  </p>
                </div>
                <div className="inline-flex shrink-0 items-center gap-2 rounded-md bg-accent-soft px-2.5 py-1 text-xs font-medium text-foreground">
                  <ShieldCheck className="h-3.5 w-3.5 text-accent" aria-hidden="true" />
                  public proof
                </div>
              </div>
            </div>

            <div className="divide-y divide-border">
              {artifactProjects.map((project) => (
                <a
                  key={project.slug}
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group grid gap-3 px-4 py-3.5 transition-[background-color] duration-150 hover:bg-background md:grid-cols-[0.7fr_1fr_auto] md:items-center"
                >
                  <span>
                    <span className="block text-sm font-semibold text-foreground">
                      {project.name}
                    </span>
                    <span className="block text-xs text-muted-foreground md:hidden">
                      {project.artifact.label}
                    </span>
                  </span>
                  <span className="hidden text-xs text-muted-foreground md:block">
                    {project.artifact.label}
                  </span>
                  <span className="font-mono text-xs font-medium text-muted-foreground transition-colors duration-150 group-hover:text-accent">
                    {project.artifact.metric}
                  </span>
                </a>
              ))}
            </div>

            <div className="grid border-t border-border bg-background md:grid-cols-[1fr_1.15fr]">
              <div className="border-b border-border px-4 py-4 md:border-b-0 md:border-r">
                <p className="mb-3 flex items-center gap-2 text-sm font-semibold text-foreground">
                  <GitBranch className="h-4 w-4 text-accent" aria-hidden="true" />
                  Stack lane
                </p>
                <div className="flex flex-wrap gap-2">
                  {["k8s", "mcp", "opa", "postgres", "cosmos", "evm"].map(
                    (item) => (
                      <span
                        key={item}
                        className="font-mono text-xs text-muted-foreground"
                      >
                        {item}
                      </span>
                    ),
                  )}
                </div>
              </div>

              <div className="px-4 py-4">
                <p className="mb-3 text-sm font-semibold text-foreground">
                  Delivery loop
                </p>
                <ol className="grid gap-2 text-sm text-muted-foreground sm:grid-cols-3 md:grid-cols-1 lg:grid-cols-3">
                  {["Scope in repo", "Ship behind flag", "Run on call"].map(
                    (item, index) => (
                      <li key={item} className="flex items-center gap-2">
                        <span className="font-mono text-xs font-semibold text-accent">
                          0{index + 1}
                        </span>
                        <span>{item}</span>
                      </li>
                    ),
                  )}
                </ol>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
