"use client"

import type React from "react"

import { useState } from "react"
import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import { GlassCard } from "@/components/ui/glass-card"
import { GlassButton } from "@/components/ui/glass-button"
import { GlassInput } from "@/components/ui/glass-input"
import { GlassTextarea } from "@/components/ui/glass-textarea"
import { motion } from "framer-motion"
import { Mail, Phone, MapPin, CheckCircle, AlertCircle } from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" })
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle")
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    await new Promise((resolve) => setTimeout(resolve, 1000))

    if (formData.name && formData.email && formData.message) {
      setStatus("success")
      setFormData({ name: "", email: "", message: "" })
    } else {
      setStatus("error")
    }
    setIsSubmitting(false)
  }

  return (
    <main className="min-h-screen">
      <Navbar />

      <section className="pt-32 pb-16 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-accent/10" />
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-primary/20 rounded-full blur-3xl" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-2 rounded-full glass text-sm font-medium mb-6">Contact Us</span>
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              Let{"'"}s <span className="text-gradient">Connect</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Have a project in mind? We{"'"}d love to hear from you. Send us a message and we{"'"}ll get back to you
              shortly.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <GlassCard>
                <h2 className="text-2xl font-bold mb-6">Send us a message</h2>

                {status === "success" && (
                  <div className="flex items-center gap-2 p-4 rounded-xl bg-green-500/20 border border-green-500/30 mb-6">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span className="text-green-400">Message sent successfully!</span>
                  </div>
                )}

                {status === "error" && (
                  <div className="flex items-center gap-2 p-4 rounded-xl bg-destructive/20 border border-destructive/30 mb-6">
                    <AlertCircle className="w-5 h-5 text-destructive" />
                    <span className="text-destructive">Please fill in all fields.</span>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Name
                    </label>
                    <GlassInput
                      id="name"
                      placeholder="Your name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email
                    </label>
                    <GlassInput
                      id="email"
                      type="email"
                      placeholder="your@email.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Message
                    </label>
                    <GlassTextarea
                      id="message"
                      rows={5}
                      placeholder="Tell us about your project..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    />
                  </div>
                  <GlassButton type="submit" className="w-full" disabled={isSubmitting}>
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </GlassButton>
                </form>
              </GlassCard>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="space-y-6"
            >
              <GlassCard>
                <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/20 backdrop-blur-xl flex items-center justify-center shrink-0">
                      <Mail className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Email</h3>
                      <p className="text-muted-foreground">hello@nexora.digital</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/20 backdrop-blur-xl flex items-center justify-center shrink-0">
                      <Phone className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Phone</h3>
                      <p className="text-muted-foreground">+1 (555) 123-4567</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/20 backdrop-blur-xl flex items-center justify-center shrink-0">
                      <MapPin className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Office</h3>
                      <p className="text-muted-foreground">
                        123 Digital Street
                        <br />
                        San Francisco, CA 94102
                      </p>
                    </div>
                  </div>
                </div>
              </GlassCard>

              <GlassCard className="overflow-hidden p-0">
                <div className="aspect-video">
                  <img src="/modern-office-building-dark-theme.jpg" alt="Our Office" className="w-full h-full object-cover" />
                </div>
              </GlassCard>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
