import { ArrowUpRight } from "lucide-react";

import type { Operator } from "@/content/operators";

export function OperatorCard({ operator }: { operator: Operator }) {
  return (
    <article className="grid gap-6 border-b border-border p-5 last:border-b-0 lg:grid-cols-[0.78fr_1.3fr_0.92fr] lg:gap-8 lg:p-6">
      <div>
        <header className="flex items-start gap-4">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-accent-soft font-mono text-sm font-semibold uppercase text-accent">
            {operator.monogram}
          </div>
          <div>
            <h3 className="text-2xl font-semibold leading-tight text-foreground">
              {operator.name}
            </h3>
            <span className="mt-1 block text-sm text-muted-foreground">
              {operator.title} · {operator.location}
            </span>
          </div>
        </header>

        <div className="mt-6 flex flex-wrap items-center gap-5">
          {operator.links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-1 text-sm font-medium text-foreground link-underline"
            >
              {link.label}
              <ArrowUpRight
                className="h-3.5 w-3.5 transition-transform duration-150 group-hover:-translate-y-px group-hover:translate-x-px"
                aria-hidden="true"
              />
            </a>
          ))}
        </div>
      </div>

      <div>
        <p className="max-w-prose text-sm leading-6 text-muted-foreground">
          {operator.blurb}
        </p>

        <div className="mt-5 border-t border-border pt-4">
          <span className="text-xs font-semibold uppercase tracking-[0.12em] text-subtle-foreground">
            Signature work
          </span>
          <p className="mt-2 text-sm font-medium text-foreground">
            {operator.signature.join(" · ")}
          </p>
        </div>
      </div>

      <div className="border-t border-border pt-4 lg:border-l lg:border-t-0 lg:pl-6 lg:pt-0">
        <span className="text-xs font-semibold uppercase tracking-[0.12em] text-subtle-foreground">
          Background
        </span>
        <ul className="mt-3 grid gap-2 text-sm">
          {operator.timeline.map((t) => (
            <li key={`${t.role}-${t.org}`} className="leading-relaxed">
              <span className="text-foreground">{t.role}</span>
              <span className="text-muted-foreground"> · {t.org}</span>
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}
