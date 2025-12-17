"use client"

import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import { GlassCard } from "@/components/ui/glass-card"
import { GlassButton } from "@/components/ui/glass-button"
import { CTABanner } from "@/components/sections/cta-banner"
import { motion } from "framer-motion"
import { Code2, Palette, TrendingUp, Lightbulb, ArrowRight } from "lucide-react"
import Link from "next/link"

const services = [
  {
    icon: Code2,
    title: "Web Design & Development",
    description:
      "Custom websites and web applications built with modern technologies. From responsive landing pages to complex e-commerce platforms, we create digital experiences that convert.",
    features: [
      "Custom Website Design",
      "E-Commerce Development",
      "Web Applications",
      "CMS Integration",
      "Performance Optimization",
    ],
  },
  {
    icon: Palette,
    title: "Branding & Identity",
    description:
      "Build a memorable brand that resonates with your audience. We craft cohesive brand identities that tell your story and set you apart from the competition.",
    features: ["Logo Design", "Brand Guidelines", "Visual Identity", "Brand Strategy", "Packaging Design"],
  },
  {
    icon: TrendingUp,
    title: "Digital Marketing",
    description:
      "Data-driven marketing strategies to grow your online presence. From SEO to social media, we help you reach and engage your target audience effectively.",
    features: [
      "SEO Optimization",
      "Social Media Marketing",
      "Content Strategy",
      "PPC Campaigns",
      "Analytics & Reporting",
    ],
  },
  {
    icon: Lightbulb,
    title: "Product Strategy",
    description:
      "Strategic planning to bring your product vision to life. We help you define, validate, and launch products that meet market needs and user expectations.",
    features: ["Product Discovery", "Market Research", "UX Strategy", "Roadmap Planning", "MVP Development"],
  },
]

export default function ServicesPage() {
  return (
    <main className="min-h-screen">
      <Navbar />

      <section className="pt-32 pb-16 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-accent/10" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-2 rounded-full glass text-sm font-medium mb-6">Our Services</span>
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              What We <span className="text-gradient">Offer</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive digital solutions tailored to help your business thrive in the modern digital landscape.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <GlassCard className="p-8">
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-14 h-14 rounded-xl bg-primary/20 backdrop-blur-xl flex items-center justify-center">
                          <service.icon className="w-7 h-7 text-primary" />
                        </div>
                        <h2 className="text-2xl font-bold">{service.title}</h2>
                      </div>
                      <p className="text-muted-foreground mb-6">{service.description}</p>
                      <Link href="/contact">
                        <GlassButton size="sm">
                          Get Started <ArrowRight className="w-4 h-4 ml-2" />
                        </GlassButton>
                      </Link>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-4 text-sm text-muted-foreground uppercase tracking-wide">
                        What{"'"}s Included
                      </h3>
                      <ul className="space-y-3">
                        {service.features.map((feature) => (
                          <li key={feature} className="flex items-center gap-2 text-sm">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
      <Footer />
    </main>
  )
}
