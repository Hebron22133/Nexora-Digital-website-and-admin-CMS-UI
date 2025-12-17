"use client"

import { cn } from "@/lib/utils"
import { type TextareaHTMLAttributes, forwardRef } from "react"

interface GlassTextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {}

const GlassTextarea = forwardRef<HTMLTextAreaElement, GlassTextareaProps>(({ className, ...props }, ref) => {
  return (
    <textarea
      ref={ref}
      className={cn(
        "w-full px-4 py-3 rounded-xl resize-none",
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
GlassTextarea.displayName = "GlassTextarea"

export { GlassTextarea }
