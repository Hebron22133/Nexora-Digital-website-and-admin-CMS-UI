"use client"

import { GlassCard } from "@/components/ui/glass-card"
import { Code2, Palette, TrendingUp, Lightbulb } from "lucide-react"
import { motion } from "framer-motion"

const services = [
  {
    icon: Code2,
    title: "Web Development",
    description: "Custom websites and applications built with cutting-edge technology.",
  },
  {
    icon: Palette,
    title: "Branding & Identity",
    description: "Memorable brand experiences that resonate with your audience.",
  },
  {
    icon: TrendingUp,
    title: "Digital Marketing",
    description: "Data-driven strategies to grow your online presence.",
  },
  {
    icon: Lightbulb,
    title: "Product Strategy",
    description: "Strategic planning to bring your product vision to life.",
  },
]

export function ServicesOverview() {
  return (
    <section className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Our Services</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Comprehensive digital solutions tailored to your unique needs
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <GlassCard hover className="h-full text-center">
                <div className="w-14 h-14 rounded-xl bg-primary/20 backdrop-blur-xl flex items-center justify-center mx-auto mb-4">
                  <service.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-semibold text-lg mb-2">{service.title}</h3>
                <p className="text-sm text-muted-foreground">{service.description}</p>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
