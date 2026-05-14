import { cn } from "@/lib/utils";

interface StatTileProps {
  value: string;
  label: string;
  note?: string;
  className?: string;
}

export function StatTile({ value, label, note, className }: StatTileProps) {
  return (
    <div className={cn("flex flex-col gap-2", className)}>
      <span className="font-mono text-2xl font-semibold text-foreground tabular-nums md:text-3xl">
        {value}
      </span>
      <span className="text-sm leading-snug text-muted-foreground">
        {label}
      </span>
      {note ? (
        <span className="text-xs text-subtle-foreground">{note}</span>
      ) : null}
    </div>
  );
}
