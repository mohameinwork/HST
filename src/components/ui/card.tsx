import * as React from "react";
import { cn } from "@/lib/utils";

export function Card({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "border border-border bg-white dark:bg-navy-800 p-6 shadow-sm transition-all duration-300",
        className,
      )}
      {...props}
    />
  );
}
