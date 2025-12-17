"use client"

import { cn } from "@/lib/utils"
import { type ButtonHTMLAttributes, forwardRef } from "react"

interface GlassButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost"
  size?: "sm" | "md" | "lg"
}

const GlassButton = forwardRef<HTMLButtonElement, GlassButtonProps>(
  ({ className, variant = "primary", size = "md", children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "relative overflow-hidden rounded-xl font-medium transition-all duration-300",
          "backdrop-blur-xl border",
          "hover:scale-[1.02] active:scale-[0.98]",
          {
            "bg-primary/20 border-primary/30 text-primary-foreground hover:bg-primary/30 hover:shadow-[0_0_30px_var(--glow)]":
              variant === "primary",
            "bg-secondary/50 border-glass-border text-secondary-foreground hover:bg-secondary/70":
              variant === "secondary",
            "bg-transparent border-transparent text-foreground hover:bg-glass": variant === "ghost",
          },
          {
            "px-4 py-2 text-sm": size === "sm",
            "px-6 py-3 text-base": size === "md",
            "px-8 py-4 text-lg": size === "lg",
          },
          className,
        )}
        {...props}
      >
        <span className="relative z-10">{children}</span>
      </button>
    )
  },
)
GlassButton.displayName = "GlassButton"

export { GlassButton }
