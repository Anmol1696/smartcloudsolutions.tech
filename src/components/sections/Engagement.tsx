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
    <section id="engagement" className="scroll-mt-16 py-16 md:py-20">
      <Container>
        <SectionHeader
          eyebrow="Engagement"
          title="A working model, not a vibe."
          kicker="We avoid open-ended consulting. Every phase ends in something your team can inspect, run, or reject."
        />

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {phases.map((phase, index) => (
            <div
              key={phase.title}
              className="rounded-xl border border-border bg-card p-5"
            >
              <div className="flex items-center justify-between gap-4">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-accent-soft font-mono text-xs font-semibold text-accent">
                  {index + 1}
                </span>
                <span className="text-xs font-medium text-muted-foreground">
                  {phase.duration}
                </span>
              </div>

              <h3 className="mt-5 text-xl font-semibold leading-tight text-foreground">
                {phase.title}
              </h3>

              <p className="mt-3 text-sm leading-6 text-muted-foreground">
                {phase.outcome}
              </p>

              <ul className="mt-5 space-y-2 border-t border-border pt-4">
                {phase.deliverables.map((item) => (
                  <li key={item} className="text-sm text-foreground">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
