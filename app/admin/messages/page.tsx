"use client"

import { useState } from "react"
import { AdminLayout } from "@/components/admin/admin-layout"
import { GlassCard } from "@/components/ui/glass-card"
import { GlassButton } from "@/components/ui/glass-button"
import { motion, AnimatePresence } from "framer-motion"
import { Mail, X, Inbox } from "lucide-react"

const mockMessages = [
  {
    id: 1,
    name: "John Doe",
    email: "john@example.com",
    message:
      "Hi, I'm interested in your web development services. Could you provide more details about your pricing and timeline for a medium-sized e-commerce project?",
    date: "2025-01-15",
    read: false,
  },
  {
    id: 2,
    name: "Sarah Smith",
    email: "sarah@company.com",
    message:
      "We're looking to rebrand our startup and would love to discuss branding services. When are you available for a call?",
    date: "2025-01-14",
    read: true,
  },
  {
    id: 3,
    name: "Mike Johnson",
    email: "mike@business.org",
    message: "Great portfolio! I'd like to learn more about your digital marketing packages for small businesses.",
    date: "2025-01-13",
    read: true,
  },
]

export default function AdminMessagesPage() {
  const [messages] = useState(mockMessages)
  const [selectedMessage, setSelectedMessage] = useState<(typeof mockMessages)[0] | null>(null)

  return (
    <AdminLayout>
      <div className="space-y-8">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <h1 className="text-3xl font-bold mb-2">Contact Messages</h1>
          <p className="text-muted-foreground">Manage messages from your website visitors</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          {messages.length === 0 ? (
            <GlassCard className="text-center py-12">
              <Inbox className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">No messages yet</h3>
              <p className="text-muted-foreground">When visitors send you messages, they will appear here.</p>
            </GlassCard>
          ) : (
            <GlassCard className="overflow-hidden p-0">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="border-b border-glass-border">
                    <tr>
                      <th className="px-6 py-4 text-left text-sm font-medium text-muted-foreground">Name</th>
                      <th className="px-6 py-4 text-left text-sm font-medium text-muted-foreground">Email</th>
                      <th className="px-6 py-4 text-left text-sm font-medium text-muted-foreground hidden md:table-cell">
                        Preview
                      </th>
                      <th className="px-6 py-4 text-left text-sm font-medium text-muted-foreground">Date</th>
                      <th className="px-6 py-4 text-right text-sm font-medium text-muted-foreground">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {messages.map((message) => (
                      <tr
                        key={message.id}
                        className={`border-b border-glass-border last:border-0 transition-colors hover:bg-secondary/30 ${
                          !message.read ? "bg-primary/5" : ""
                        }`}
                      >
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-2">
                            {!message.read && <div className="w-2 h-2 rounded-full bg-primary" />}
                            <span className="font-medium">{message.name}</span>
                          </div>
                        </td>
                        <td className="px-6 py-4 text-muted-foreground">{message.email}</td>
                        <td className="px-6 py-4 text-muted-foreground hidden md:table-cell">
                          <span className="line-clamp-1 max-w-xs">{message.message}</span>
                        </td>
                        <td className="px-6 py-4 text-muted-foreground">{message.date}</td>
                        <td className="px-6 py-4 text-right">
                          <GlassButton size="sm" variant="secondary" onClick={() => setSelectedMessage(message)}>
                            View
                          </GlassButton>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </GlassCard>
          )}
        </motion.div>
      </div>

      <AnimatePresence>
        {selectedMessage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm"
            onClick={() => setSelectedMessage(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-lg"
            >
              <GlassCard>
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-primary/20 backdrop-blur-xl flex items-center justify-center">
                      <Mail className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold">{selectedMessage.name}</h3>
                      <p className="text-sm text-muted-foreground">{selectedMessage.email}</p>
                    </div>
                  </div>
                  <button
                    onClick={() => setSelectedMessage(null)}
                    className="p-2 rounded-lg hover:bg-secondary/50 transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
                <div className="space-y-4">
                  <div>
                    <span className="text-sm text-muted-foreground">Date: {selectedMessage.date}</span>
                  </div>
                  <div className="p-4 rounded-xl bg-secondary/30 border border-glass-border">
                    <p className="text-foreground">{selectedMessage.message}</p>
                  </div>
                  <div className="flex gap-2">
                    <GlassButton className="flex-1">Reply</GlassButton>
                    <GlassButton variant="secondary" className="flex-1">
                      Mark as Read
                    </GlassButton>
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </AdminLayout>
  )
}
