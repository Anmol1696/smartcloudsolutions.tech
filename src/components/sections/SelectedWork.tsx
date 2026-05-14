import { Container } from "@/components/Container";
import { SectionHeader } from "@/components/SectionHeader";
import { ProjectCard } from "@/components/sections/ProjectCard";
import { projects } from "@/content/projects";

export function SelectedWork() {
  return (
    <section id="work" className="scroll-mt-16 py-14 md:py-16">
      <Container>
        <SectionHeader
          eyebrow="Selected Work"
          title="Public proof, not pitch."
          kicker="The same work pattern we bring into client teams: environments, SDKs, protocol services, and agent-native platform modules."
        />

        <div className="mt-10 overflow-hidden rounded-2xl border border-border bg-card">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </Container>
    </section>
  );
}
