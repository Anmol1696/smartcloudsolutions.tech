import { Container } from "@/components/Container";
import { StatTile } from "@/components/StatTile";
import ossStats from "@/content/oss-stats.json";

export function OssBar() {
  return (
    <section
      id="oss"
      className="scroll-mt-16 border-y border-border bg-card py-8 md:py-10"
    >
      <Container>
        <div className="mb-6 flex items-baseline justify-between gap-4">
          <span className="text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
            Proof
          </span>
          <span className="text-xs text-subtle-foreground">
            Snapshot · {ossStats.snapshotDate}
          </span>
        </div>

        <div className="grid grid-cols-2 gap-x-8 gap-y-6 md:grid-cols-3 lg:grid-cols-5">
          {ossStats.tiles.map((tile) => (
            <StatTile
              key={tile.label}
              value={tile.value}
              label={tile.label}
              note={tile.note}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
