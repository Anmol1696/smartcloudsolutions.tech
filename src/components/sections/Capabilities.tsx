import { Container } from "@/components/Container";
import { SectionHeader } from "@/components/SectionHeader";
import { CapabilityCard } from "@/components/sections/CapabilityCard";
import { offers } from "@/content/pillars";

export function Capabilities() {
  return (
    <section id="capabilities" className="scroll-mt-16 py-16 md:py-20">
      <Container>
        <SectionHeader
          eyebrow="Capabilities"
          title="Three places we can change the slope."
          kicker="We work where product, infrastructure, and engineering operations overlap. Every engagement has a named artifact and an owner."
        />

        <div className="mt-10 grid grid-cols-1 gap-4 lg:grid-cols-3">
          {offers.map((offer) => (
            <CapabilityCard key={offer.title} offer={offer} />
          ))}
        </div>
      </Container>
    </section>
  );
}
