import * as React from "react";

import { cn } from "@/lib/utils";

export function Eyebrow({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      className={cn(
        "inline-flex w-fit rounded-full border border-border bg-background px-2.5 py-1 text-[11px] font-medium uppercase tracking-[0.14em] text-muted-foreground",
        className,
      )}
      {...props}
    >
      {children}
    </span>
  );
}
