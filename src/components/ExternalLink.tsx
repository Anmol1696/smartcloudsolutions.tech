import * as React from "react";
import { ArrowUpRight } from "lucide-react";

import { cn } from "@/lib/utils";

interface ExternalLinkProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  showArrow?: boolean;
}

export function ExternalLink({
  href,
  className,
  children,
  showArrow = true,
  ...props
}: ExternalLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "group inline-flex items-center gap-1 underline-offset-4 transition-colors hover:text-accent hover:underline",
        className,
      )}
      {...props}
    >
      {children}
      {showArrow ? (
        <ArrowUpRight
          className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-px group-hover:translate-x-px"
          aria-hidden="true"
        />
      ) : null}
      <span className="sr-only">(opens in new tab)</span>
    </a>
  );
}
