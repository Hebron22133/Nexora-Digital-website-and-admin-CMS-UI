"use client"

import { GlassCard } from "@/components/ui/glass-card"
import { motion } from "framer-motion"

const capabilities = [
  {
    title: "E-Commerce Platform",
    category: "Web Development",
    image: "/ecommerce-dark-theme.png",
  },
  {
    title: "Brand Identity",
    category: "Branding",
    image: "/brand-identity-design-dark-theme.jpg",
  },
  {
    title: "Marketing Campaign",
    category: "Digital Marketing",
    image: "/digital-marketing-dashboard-dark-theme.jpg",
  },
]

export function Capabilities() {
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
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Recent Work</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A glimpse of our latest projects and creative solutions
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {capabilities.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <GlassCard hover className="overflow-hidden p-0">
                <div className="aspect-video relative overflow-hidden">
                  <img
                    src={item.image || "/placeholder.svg"}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <span className="text-xs text-primary font-medium">{item.category}</span>
                  <h3 className="font-semibold text-lg mt-1">{item.title}</h3>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
