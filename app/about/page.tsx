"use client"

import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import { GlassCard } from "@/components/ui/glass-card"
import { motion } from "framer-motion"
import { Target, Eye, Heart, Users } from "lucide-react"

const values = [
  {
    icon: Target,
    title: "Excellence",
    description: "We strive for excellence in every project we undertake.",
  },
  {
    icon: Eye,
    title: "Innovation",
    description: "Pushing boundaries with creative and innovative solutions.",
  },
  {
    icon: Heart,
    title: "Passion",
    description: "Driven by passion for creating meaningful digital experiences.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "Working closely with clients to achieve shared goals.",
  },
]

export default function AboutPage() {
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
            <span className="inline-block px-4 py-2 rounded-full glass text-sm font-medium mb-6">About Us</span>
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              We Are <span className="text-gradient">Nexora Digital</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A passionate team of designers, developers, and strategists dedicated to crafting exceptional digital
              experiences.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <GlassCard className="aspect-square overflow-hidden p-0">
                <img src="/modern-office-team-working-dark-theme.jpg" alt="Our Team" className="w-full h-full object-cover" />
              </GlassCard>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <h2 className="text-3xl font-bold">Our Story</h2>
              <p className="text-muted-foreground">
                Founded with a vision to bridge the gap between creativity and technology, Nexora Digital has grown into
                a trusted partner for businesses seeking to establish a powerful digital presence.
              </p>
              <p className="text-muted-foreground">
                Our team brings together diverse expertise in web development, branding, and digital marketing to
                deliver comprehensive solutions that drive results.
              </p>
              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="glass-card p-4 text-center">
                  <div className="text-3xl font-bold text-primary">5+</div>
                  <div className="text-sm text-muted-foreground">Years Experience</div>
                </div>
                <div className="glass-card p-4 text-center">
                  <div className="text-3xl font-bold text-primary">50+</div>
                  <div className="text-sm text-muted-foreground">Happy Clients</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-16 relative">
        <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              To empower businesses with innovative digital solutions that drive growth, enhance brand presence, and
              create lasting impact in the digital landscape.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <GlassCard className="h-full text-center">
                  <value.icon className="w-10 h-10 text-primary mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">{value.title}</h3>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
