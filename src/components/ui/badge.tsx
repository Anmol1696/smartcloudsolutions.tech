import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center text-xs leading-none transition-colors",
  {
    variants: {
      variant: {
        // Bare inline pill style — subtle, low-chrome.
        outline:
          "rounded-sm border border-border px-2 py-1 text-muted-foreground",
        // Even lower-chrome — just colored text, useful for inline meta.
        plain: "text-muted-foreground",
      },
    },
    defaultVariants: {
      variant: "outline",
    },
  },
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <span className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export { Badge, badgeVariants };
