import Link from "next/link";

import { cn } from "@/lib/utils";

interface WordmarkProps {
  className?: string;
  asLink?: boolean;
  size?: "sm" | "md";
}

export function Wordmark({
  className,
  asLink = true,
  size = "sm",
}: WordmarkProps) {
  const content = (
    <span
      className={cn(
        "inline-flex items-center gap-2 font-semibold text-foreground",
        size === "sm" ? "text-[15px]" : "text-lg",
        className,
      )}
    >
      <span
        aria-hidden="true"
        className="h-2.5 w-2.5 rounded-full bg-accent ring-4 ring-accent-soft"
      />
      <span>SmartCloud</span>
    </span>
  );

  if (!asLink) return content;

  return (
    <Link
      href="/"
      aria-label="SmartCloud - home"
      className="inline-flex items-center transition-opacity duration-150 hover:opacity-75"
    >
      {content}
    </Link>
  );
}
