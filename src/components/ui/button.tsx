import * as React from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "ghost" | "outline" | "secondary";
  size?: "default" | "sm" | "lg";
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", ...props }, ref) => {
    const base =
      "inline-flex items-center justify-center font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none rounded-none";
    const variants = {
      default: "bg-blue-600 text-white hover:bg-blue-700 shadow-sm",
      ghost: "hover:bg-slate-200 dark:hover:bg-slate-800 text-foreground",
      outline:
        "border-2 border-slate-900 dark:border-white text-foreground hover:bg-slate-100 dark:hover:bg-slate-800",
      secondary: "bg-amber-600 text-white hover:bg-amber-700",
    };
    const sizes = {
      default: "h-11 px-5 py-2 text-sm",
      sm: "h-9 px-3 text-xs",
      lg: "h-12 px-8 text-base",
    };

    return (
      <button
        ref={ref}
        className={cn(base, variants[variant], sizes[size], className)}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";
