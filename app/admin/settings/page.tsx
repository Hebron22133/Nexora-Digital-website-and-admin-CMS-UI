"use client"

import { useState } from "react"
import { AdminLayout } from "@/components/admin/admin-layout"
import { GlassCard } from "@/components/ui/glass-card"
import { GlassButton } from "@/components/ui/glass-button"
import { GlassInput } from "@/components/ui/glass-input"
import { motion } from "framer-motion"
import { CheckCircle, Upload, ImageIcon } from "lucide-react"

export default function AdminSettingsPage() {
  const [siteName, setSiteName] = useState("Nexora Digital")
  const [siteDescription, setSiteDescription] = useState("A cutting-edge digital agency")
  const [status, setStatus] = useState<"idle" | "success">("idle")
  const [isSaving, setIsSaving] = useState(false)

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
          <h1 className="text-3xl font-bold mb-2">Settings</h1>
          <p className="text-muted-foreground">Manage your website settings</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <GlassCard>
              <h2 className="text-xl font-bold mb-6">General Settings</h2>

              {status === "success" && (
                <div className="flex items-center gap-2 p-4 rounded-xl bg-green-500/20 border border-green-500/30 mb-6">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-green-400">Settings saved successfully!</span>
                </div>
              )}

              <div className="space-y-6">
                <div>
                  <label htmlFor="siteName" className="block text-sm font-medium mb-2">
                    Site Name
                  </label>
                  <GlassInput
                    id="siteName"
                    value={siteName}
                    onChange={(e) => setSiteName(e.target.value)}
                    placeholder="Enter site name"
                  />
                </div>

                <div>
                  <label htmlFor="siteDescription" className="block text-sm font-medium mb-2">
                    Site Description
                  </label>
                  <GlassInput
                    id="siteDescription"
                    value={siteDescription}
                    onChange={(e) => setSiteDescription(e.target.value)}
                    placeholder="Enter site description"
                  />
                </div>

                <GlassButton onClick={handleSave} disabled={isSaving}>
                  {isSaving ? "Saving..." : "Save Settings"}
                </GlassButton>
              </div>
            </GlassCard>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <GlassCard>
              <h2 className="text-xl font-bold mb-6">Logo</h2>
              <div className="space-y-6">
                <div className="border-2 border-dashed border-glass-border rounded-xl p-8 text-center">
                  <div className="w-16 h-16 rounded-xl bg-primary/20 backdrop-blur-xl flex items-center justify-center mx-auto mb-4">
                    <ImageIcon className="w-8 h-8 text-primary" />
                  </div>
                  <p className="text-muted-foreground mb-4">Drag and drop your logo here, or click to browse</p>
                  <GlassButton variant="secondary" size="sm">
                    <Upload className="w-4 h-4 mr-2" />
                    Upload Logo
                  </GlassButton>
                </div>
                <p className="text-sm text-muted-foreground">Recommended: SVG, PNG or JPG. Max size 2MB.</p>
              </div>
            </GlassCard>
          </motion.div>
        </div>
      </div>
    </AdminLayout>
  )
}
