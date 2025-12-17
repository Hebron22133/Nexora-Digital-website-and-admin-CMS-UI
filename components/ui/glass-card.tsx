"use client"

import { cn } from "@/lib/utils"
import { type HTMLAttributes, forwardRef } from "react"

interface GlassCardProps extends HTMLAttributes<HTMLDivElement> {
  hover?: boolean
}

const GlassCard = forwardRef<HTMLDivElement, GlassCardProps>(
  ({ className, hover = false, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "glass-card p-6 transition-all duration-300",
          hover && "hover:scale-[1.02] hover:shadow-[0_0_40px_var(--glow)] cursor-pointer",
          className,
        )}
        {...props}
      >
        {children}
      </div>
    )
  },
)
GlassCard.displayName = "GlassCard"

export { GlassCard }
