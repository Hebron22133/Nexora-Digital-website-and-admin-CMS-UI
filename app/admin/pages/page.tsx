"use client"

import { useState } from "react"
import { AdminLayout } from "@/components/admin/admin-layout"
import { GlassCard } from "@/components/ui/glass-card"
import { GlassButton } from "@/components/ui/glass-button"
import { GlassInput } from "@/components/ui/glass-input"
import { GlassTextarea } from "@/components/ui/glass-textarea"
import { motion } from "framer-motion"
import { CheckCircle, AlertCircle } from "lucide-react"

const pages = [
  { id: "home", name: "Home", title: "We Create Digital Experiences That Matter" },
  { id: "about", name: "About", title: "We Are Nexora Digital" },
  { id: "services", name: "Services", title: "What We Offer" },
]

export default function AdminPagesPage() {
  const [selectedPage, setSelectedPage] = useState(pages[0])
  const [title, setTitle] = useState(selectedPage.title)
  const [content, setContent] = useState("Enter your page content here...")
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle")
  const [isSaving, setIsSaving] = useState(false)

  const handlePageChange = (pageId: string) => {
    const page = pages.find((p) => p.id === pageId)
    if (page) {
      setSelectedPage(page)
      setTitle(page.title)
      setStatus("idle")
    }
  }

  const handleSave = async () => {
    setIsSaving(true)
    await new Promise((resolve) => setTimeout(resolve, 1000))
    setStatus("success")
    setIsSaving(false)
    setTimeout(() => setStatus("idle"), 3000)
  }

  return (
    <AdminLayout>
      <div className="space-y-8">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <h1 className="text-3xl font-bold mb-2">Page Editor</h1>
          <p className="text-muted-foreground">Edit your website pages content</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <GlassCard>
            {status === "success" && (
              <div className="flex items-center gap-2 p-4 rounded-xl bg-green-500/20 border border-green-500/30 mb-6">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span className="text-green-400">Changes saved successfully!</span>
              </div>
            )}

            {status === "error" && (
              <div className="flex items-center gap-2 p-4 rounded-xl bg-destructive/20 border border-destructive/30 mb-6">
                <AlertCircle className="w-5 h-5 text-destructive" />
                <span className="text-destructive">Failed to save changes.</span>
              </div>
            )}

            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">Select Page</label>
                <div className="flex flex-wrap gap-2">
                  {pages.map((page) => (
                    <button
                      key={page.id}
                      onClick={() => handlePageChange(page.id)}
                      className={`px-4 py-2 rounded-xl transition-all duration-300 ${
                        selectedPage.id === page.id
                          ? "bg-primary/20 border border-primary/30 text-primary"
                          : "bg-secondary/50 border border-glass-border text-muted-foreground hover:text-foreground"
                      }`}
                    >
                      {page.name}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label htmlFor="title" className="block text-sm font-medium mb-2">
                  Page Title
                </label>
                <GlassInput
                  id="title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="Enter page title"
                />
              </div>

              <div>
                <label htmlFor="content" className="block text-sm font-medium mb-2">
                  Page Content
                </label>
                <GlassTextarea
                  id="content"
                  rows={12}
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  placeholder="Enter page content..."
                />
              </div>

              <GlassButton onClick={handleSave} disabled={isSaving}>
                {isSaving ? "Saving..." : "Save Changes"}
              </GlassButton>
            </div>
          </GlassCard>
        </motion.div>
      </div>
    </AdminLayout>
  )
}
