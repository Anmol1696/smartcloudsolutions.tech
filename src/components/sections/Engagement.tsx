import { Container } from "@/components/Container";
import { SectionHeader } from "@/components/SectionHeader";

interface Phase {
  title: string;
  duration: string;
  outcome: string;
  deliverables: string[];
}

const phases: Phase[] = [
  {
    title: "Map the system",
    duration: "1 paid week",
    outcome:
      "A written build plan with exit criteria, risk register, and owner map.",
    deliverables: [
      "Repo and infra read-through",
      "Current-state diagram",
      "Build plan in git",
    ],
  },
  {
    title: "Ship the artifact",
    duration: "4-8 weeks",
    outcome:
      "A working platform, tool, service, or agent workflow shipped behind a flag.",
    deliverables: ["Daily PRs", "Weekly review", "Named senior on call"],
  },
  {
    title: "Leave it operable",
    duration: "handoff or retainer",
    outcome:
      "Runbooks, dashboards, alerts, and one clean path for your team to own it.",
    deliverables: ["SLOs and dashboards", "Runbook drill", "Handoff review"],
  },
];

export function Engagement() {
  return (
    <section id="engagement" className="scroll-mt-16 py-14 md:py-16">
      <Container>
        <SectionHeader
          eyebrow="Engagement"
          title="A build cadence your team can inspect."
          kicker="No open-ended consulting loop. Each phase has a short horizon, a named artifact, and a clear decision point before the next spend."
        />

        <div className="mt-9 overflow-hidden rounded-xl border border-border bg-card">
          {phases.map((phase, index) => (
            <article
              key={phase.title}
              className="grid gap-5 border-b border-border px-5 py-6 last:border-b-0 md:grid-cols-[0.48fr_1fr_1fr] md:gap-8"
            >
              <div>
                <span className="font-mono text-xs font-semibold text-accent">
                  0{index + 1}
                </span>
                <h3 className="mt-3 text-xl font-semibold leading-tight text-foreground">
                  {phase.title}
                </h3>
                <span className="mt-2 block text-sm text-muted-foreground">
                  {phase.duration}
                </span>
              </div>

              <p className="max-w-prose text-sm leading-6 text-muted-foreground">
                {phase.outcome}
              </p>

              <ul className="grid gap-2 text-sm text-foreground sm:grid-cols-3 md:grid-cols-1">
                {phase.deliverables.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
