import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

import { Container } from "@/components/Container";
import { Button } from "@/components/ui/button";
import { site } from "@/lib/site";

export function Hero() {
  return (
    <section id="hero" className="relative border-b border-border pb-14 pt-12 md:pb-20 md:pt-20">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
          <div className="flex flex-col gap-7">
            <span className="inline-flex w-fit items-center gap-2 rounded-full border border-border bg-card px-3 py-1.5 text-xs font-medium text-muted-foreground">
              <span aria-hidden="true" className="h-2 w-2 rounded-full bg-accent" />
              SmartCloud Product Lab
            </span>

            <div className="flex flex-col gap-4">
              <h1 className="max-w-4xl text-balance text-4xl font-semibold leading-[1.02] text-foreground md:text-5xl lg:text-6xl">
                We build production systems for agent and infrastructure teams.
              </h1>

              <p className="max-w-2xl text-pretty text-base leading-7 text-muted-foreground md:text-lg">
                A two-engineer studio for teams shipping agent workflows,
                Kubernetes platforms, protocol tooling, and SDKs.
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

            <div className="flex flex-wrap gap-x-5 gap-y-2 border-t border-border pt-5 text-sm text-muted-foreground">
              {[
                "Built in repo",
                "Shipped behind a flag",
                "Left operable",
              ].map((item) => (
                <span key={item} className="inline-flex items-center gap-2">
                  <CheckCircle2
                    className="h-4 w-4 text-accent"
                    aria-hidden="true"
                  />
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div
            className="overflow-hidden rounded-xl border border-border bg-card"
            aria-label="SmartCloud operating brief"
          >
            <div className="border-b border-border bg-background px-5 py-4">
              <p className="text-sm font-semibold text-foreground">
                Operating brief
              </p>
              <p className="mt-1 text-xs leading-5 text-muted-foreground">
                Focused implementation for technical products past the demo.
              </p>
            </div>

            <div className="divide-y divide-border">
              {[
                [
                  "Scope",
                  "Agent workflows, Kubernetes platforms, protocol tooling, generated SDKs.",
                ],
                [
                  "Proof",
                  "Starship, KubernetesJS, schema-sdk, SSV tooling, Constructive.",
                ],
                [
                  "Standard",
                  "Git-based build plan, daily PRs, runbooks, handoff review.",
                ],
              ].map(([label, value]) => (
                <div
                  key={label}
                  className="grid gap-3 px-5 py-4 sm:grid-cols-[7rem_1fr]"
                >
                  <span className="text-xs font-semibold uppercase tracking-[0.12em] text-subtle-foreground">
                    {label}
                  </span>
                  <span className="text-sm leading-6 text-muted-foreground">
                    {value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
