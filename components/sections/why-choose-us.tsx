"use client"

import { GlassCard } from "@/components/ui/glass-card"
import { Zap, Shield, Users, Award } from "lucide-react"
import { motion } from "framer-motion"

const features = [
  {
    icon: Zap,
    title: "Fast Delivery",
    description: "Quick turnaround times without compromising quality.",
  },
  {
    icon: Shield,
    title: "Secure & Reliable",
    description: "Enterprise-grade security for all our solutions.",
  },
  {
    icon: Users,
    title: "Expert Team",
    description: "Skilled professionals with years of industry experience.",
  },
  {
    icon: Award,
    title: "Proven Results",
    description: "Track record of successful projects and satisfied clients.",
  },
]

export function WhyChooseUs() {
  return (
    <section className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Why Choose <span className="text-gradient">Nexora Digital</span>
            </h2>
            <p className="text-muted-foreground mb-8">
              We combine creativity with technical expertise to deliver exceptional digital solutions. Our
              client-focused approach ensures your vision becomes reality.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="glass-card p-4 text-center">
                <div className="text-3xl font-bold text-primary">150+</div>
                <div className="text-sm text-muted-foreground">Projects Completed</div>
              </div>
              <div className="glass-card p-4 text-center">
                <div className="text-3xl font-bold text-primary">98%</div>
                <div className="text-sm text-muted-foreground">Client Satisfaction</div>
              </div>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <GlassCard className="h-full">
                  <feature.icon className="w-8 h-8 text-primary mb-3" />
                  <h3 className="font-semibold mb-1">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
