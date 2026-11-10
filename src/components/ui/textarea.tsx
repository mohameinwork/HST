import * as React from "react"
import { cn } from "cn"

export const Textarea = React.forwardRef<HTMLTextAreaElement, React.TextareaHTMLAttributes<HTMLTextAreaElement>>(
  ({ className, ...props }, ref) => (
    <textarea
      ref={ref}
      className={cn(
        "flex min-h-[100px] w-full border border-border bg-white dark:bg-navy-700 p-3 text-sm text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600",
        className
      )}
      {...props}
    />
  )
);
Textarea.displayName = "Textarea";
