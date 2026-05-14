import * as React from "react";

import { cn } from "@/lib/utils";

export function Container({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "mx-auto w-full max-w-[1180px] px-5 md:px-8 lg:px-10",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}
