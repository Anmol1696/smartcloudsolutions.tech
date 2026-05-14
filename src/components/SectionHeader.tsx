import { Eyebrow } from "@/components/Eyebrow";
import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  eyebrow: string;
  title: string;
  kicker?: string;
  align?: "start" | "center";
  className?: string;
  as?: "h2" | "h3";
}

export function SectionHeader({
  eyebrow,
  title,
  kicker,
  align = "start",
  className,
  as: Heading = "h2",
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "flex max-w-3xl flex-col gap-4",
        align === "center" && "mx-auto items-center text-center",
        className,
      )}
    >
      <Eyebrow>{eyebrow}</Eyebrow>
      <Heading className="text-balance text-3xl font-semibold leading-[1.05] text-foreground md:text-5xl">
        {title}
      </Heading>
      {kicker ? (
        <p className="max-w-2xl text-pretty text-base leading-7 text-muted-foreground md:text-lg">
          {kicker}
        </p>
      ) : null}
    </div>
  );
}
