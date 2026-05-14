import { ArrowUpRight } from "lucide-react";

import type { Project } from "@/content/projects";

const OWNER_LABEL: Record<Project["owner"], string> = {
  anmol: "Anmol",
  rohit: "Rohit",
  team: "Team",
};

export function ProjectCard({ project }: { project: Project }) {
  return (
    <a
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group block border-b border-border bg-card transition-[background-color] duration-150 last:border-b-0 hover:bg-background"
    >
      <div className="grid gap-6 p-5 md:grid-cols-[0.8fr_1.35fr_1fr_auto] md:items-start md:p-6">
        <div>
          <div className="text-xs font-semibold uppercase tracking-[0.12em] text-subtle-foreground">
            {project.type}
          </div>
          <h3 className="mt-3 text-2xl font-semibold leading-tight text-foreground">
            {project.name}
          </h3>
          <p className="mt-2 text-sm text-muted-foreground">
            {OWNER_LABEL[project.owner]}
          </p>
        </div>

        <div>
          <p className="max-w-xl text-base font-medium leading-7 text-foreground">
            {project.outcome}
          </p>
          <p className="mt-3 max-w-xl text-sm leading-6 text-muted-foreground">
            {project.evidence}
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            {project.tags.slice(0, 4).map((tag) => (
              <span
                key={tag}
                className="rounded-md border border-border bg-background px-2 py-1 font-mono text-xs text-muted-foreground"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="rounded-xl border border-border bg-background p-4">
          <div className="flex items-center justify-between gap-3">
            <span className="text-xs font-semibold uppercase tracking-[0.12em] text-subtle-foreground">
              {project.artifact.label}
            </span>
            <span className="font-mono text-xs text-accent">
              {project.artifact.metric}
            </span>
          </div>
          <div className="mt-4 space-y-2">
            {project.artifact.rows.map((row) => (
              <div key={row} className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                <span className="text-sm text-muted-foreground">{row}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="flex items-start justify-between gap-4 md:justify-end">
          <span className="text-xs text-subtle-foreground md:hidden">
            {project.meta[0]}
          </span>
          <ArrowUpRight
            className="h-5 w-5 text-muted-foreground transition-[color,transform] duration-150 group-hover:-translate-y-px group-hover:translate-x-px group-hover:text-accent"
            aria-hidden="true"
          />
        </div>
      </div>
    </a>
  );
}
