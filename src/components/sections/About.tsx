import { Container } from "@/components/Container";
import { SectionHeader } from "@/components/SectionHeader";
import { OperatorCard } from "@/components/sections/OperatorCard";
import { operators } from "@/content/operators";

export function About() {
  return (
    <section id="about" className="scroll-mt-16 border-t border-border bg-card py-14 md:py-16">
      <Container>
        <SectionHeader
          eyebrow="About"
          title="Two senior engineers, directly on the work."
          kicker="No junior bench, no anonymous delivery team. You work with the people writing the commits and holding the operational context."
        />

        <div className="mt-9 overflow-hidden rounded-xl border border-border bg-background">
          {operators.map((op) => (
            <OperatorCard key={op.slug} operator={op} />
          ))}
        </div>
      </Container>
    </section>
  );
}
