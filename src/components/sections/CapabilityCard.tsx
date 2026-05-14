import { Check } from "lucide-react";

import type { Offer } from "@/content/pillars";

export function CapabilityCard({ offer }: { offer: Offer }) {
  return (
    <article className="flex min-h-full flex-col rounded-xl border border-border bg-card p-5 transition-[border-color,background-color] duration-150 hover:border-border-strong hover:bg-background">
      <h3 className="text-xl font-semibold leading-tight text-foreground">
        {offer.title}
      </h3>

      <p className="mt-3 text-sm leading-6 text-muted-foreground">
        {offer.summary}
      </p>

      <ul className="mt-5 space-y-3">
        {offer.deliverables.map((item) => (
          <li key={item} className="flex gap-2.5 text-sm text-foreground">
            <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
            <span>{item}</span>
          </li>
        ))}
      </ul>

      <div className="mt-6 rounded-lg border border-border bg-background p-4">
        <p className="text-xs font-semibold uppercase tracking-[0.12em] text-subtle-foreground">
          When to call
        </p>
        <p className="mt-2 text-sm leading-6 text-muted-foreground">
          {offer.whenToCall}
        </p>
      </div>

      <p className="mt-auto pt-5 font-mono text-xs leading-5 text-subtle-foreground">
        {offer.proof}
      </p>
    </article>
  );
}
