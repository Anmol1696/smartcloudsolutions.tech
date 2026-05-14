import { Check } from "lucide-react";

import { Container } from "@/components/Container";
import { SectionHeader } from "@/components/SectionHeader";
import { offers } from "@/content/pillars";

export function Capabilities() {
  return (
    <section id="capabilities" className="scroll-mt-16 py-16 md:py-20">
      <Container>
        <SectionHeader
          eyebrow="Capabilities"
          title="Where we plug into the build."
          kicker="We are useful when the product already has technical gravity: agents need boundaries, infra needs repeatability, or a protocol needs tooling people can trust."
        />

        <div className="mt-9 overflow-hidden rounded-xl border border-border bg-card">
          <div className="hidden grid-cols-[0.82fr_1.18fr_0.9fr] border-b border-border bg-background px-5 py-3 text-xs font-semibold uppercase tracking-[0.12em] text-subtle-foreground lg:grid">
            <span>Lane</span>
            <span>Named artifacts</span>
            <span>Call us when</span>
          </div>

          <div className="divide-y divide-border">
            {offers.map((offer) => (
              <article
                key={offer.title}
                className="grid gap-5 px-5 py-6 lg:grid-cols-[0.82fr_1.18fr_0.9fr] lg:gap-8"
              >
                <div>
                  <h3 className="text-xl font-semibold leading-tight text-foreground">
                    {offer.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-muted-foreground">
                    {offer.summary}
                  </p>
                  <p className="mt-4 font-mono text-xs leading-5 text-subtle-foreground">
                    {offer.proof}
                  </p>
                </div>

                <ul className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
                  {offer.deliverables.map((item) => (
                    <li key={item} className="flex gap-2.5 text-sm text-foreground">
                      <Check
                        className="mt-0.5 h-4 w-4 shrink-0 text-accent"
                        aria-hidden="true"
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="border-t border-border pt-4 lg:border-l lg:border-t-0 lg:pl-6 lg:pt-0">
                  <p className="text-xs font-semibold uppercase tracking-[0.12em] text-subtle-foreground lg:hidden">
                    Call us when
                  </p>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground lg:mt-0">
                    {offer.whenToCall}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
