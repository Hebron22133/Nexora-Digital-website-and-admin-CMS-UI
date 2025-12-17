"use client"

import { GlassButton } from "@/components/ui/glass-button"
import Link from "next/link"
import { motion } from "framer-motion"

export function CTABanner() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-background to-accent/20" />
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-primary/30 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-accent/30 rounded-full blur-3xl" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-card p-8 sm:p-12 text-center"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Ready to Start Your Project?</h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Let{"'"}s collaborate and create something extraordinary together. Get in touch with our team today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <GlassButton size="lg">Start a Project</GlassButton>
            </Link>
            <Link href="/services">
              <GlassButton variant="secondary" size="lg">
                View Services
              </GlassButton>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
