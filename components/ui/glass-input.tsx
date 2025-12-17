"use client"

import { cn } from "@/lib/utils"
import { type InputHTMLAttributes, forwardRef } from "react"

interface GlassInputProps extends InputHTMLAttributes<HTMLInputElement> {}

const GlassInput = forwardRef<HTMLInputElement, GlassInputProps>(({ className, ...props }, ref) => {
  return (
    <input
      ref={ref}
      className={cn(
        "w-full px-4 py-3 rounded-xl",
        "bg-input backdrop-blur-xl border border-glass-border",
        "text-foreground placeholder:text-muted-foreground",
        "focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50",
        "transition-all duration-300",
        className,
      )}
      {...props}
    />
  )
})
GlassInput.displayName = "GlassInput"

export { GlassInput }
