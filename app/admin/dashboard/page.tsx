"use client"

import { AdminLayout } from "@/components/admin/admin-layout"
import { GlassCard } from "@/components/ui/glass-card"
import { motion } from "framer-motion"
import { FileText, MessageSquare, TrendingUp, Users } from "lucide-react"

const stats = [
  { label: "Total Pages", value: "4", icon: FileText, change: "+2 this month" },
  { label: "Contact Messages", value: "12", icon: MessageSquare, change: "+5 new" },
  { label: "Site Visitors", value: "1,234", icon: Users, change: "+12% this week" },
  { label: "Engagement", value: "89%", icon: TrendingUp, change: "+3% increase" },
]

const recentActivity = [
  { action: "Page Updated", target: "Home Page", time: "2 hours ago" },
  { action: "New Message", target: "John Doe", time: "4 hours ago" },
  { action: "Settings Changed", target: "Site Name", time: "1 day ago" },
  { action: "Page Updated", target: "Services Page", time: "2 days ago" },
]

export default function AdminDashboardPage() {
  return (
    <AdminLayout>
      <div className="space-y-8">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <h1 className="text-3xl font-bold mb-2">Dashboard</h1>
          <p className="text-muted-foreground">Welcome back to your CMS dashboard</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <GlassCard>
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">{stat.label}</p>
                    <p className="text-3xl font-bold mt-1">{stat.value}</p>
                    <p className="text-xs text-primary mt-2">{stat.change}</p>
                  </div>
                  <div className="w-12 h-12 rounded-xl bg-primary/20 backdrop-blur-xl flex items-center justify-center">
                    <stat.icon className="w-6 h-6 text-primary" />
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <GlassCard>
            <h2 className="text-xl font-bold mb-4">Recent Activity</h2>
            <div className="space-y-4">
              {recentActivity.map((activity, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between py-3 border-b border-glass-border last:border-0"
                >
                  <div>
                    <p className="font-medium">{activity.action}</p>
                    <p className="text-sm text-muted-foreground">{activity.target}</p>
                  </div>
                  <span className="text-sm text-muted-foreground">{activity.time}</span>
                </div>
              ))}
            </div>
          </GlassCard>
        </motion.div>
      </div>
    </AdminLayout>
  )
}
