"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { useAuth } from "@/contexts/auth-context"
import { GlassCard } from "@/components/ui/glass-card"
import { GlassButton } from "@/components/ui/glass-button"
import { GlassInput } from "@/components/ui/glass-input"
import { ThemeToggle } from "@/components/ui/theme-toggle"
import { motion } from "framer-motion"
import { AlertCircle, Lock, User, Eye, EyeOff } from "lucide-react"

export default function AdminLoginPage() {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [error, setError] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const { login } = useAuth()
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")
    setIsLoading(true)

    await new Promise((resolve) => setTimeout(resolve, 500))

    const success = login(username, password)
    if (success) {
      router.push("/admin/dashboard")
    } else {
      setError("Invalid username or password")
    }
    setIsLoading(false)
  }

  return (
    <main className="min-h-screen flex items-center justify-center relative">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-accent/10" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl" />

      <div className="absolute top-4 right-4 z-20">
        <ThemeToggle />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-md mx-4 relative z-10"
      >
        <GlassCard className="p-8">
          <div className="text-center mb-8">
            <Link href="/" className="inline-block group">
              <div className="w-16 h-16 rounded-2xl bg-primary/20 backdrop-blur-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/30 transition-colors">
                <span className="text-primary font-bold text-2xl">N</span>
              </div>
              <h1 className="text-2xl font-bold group-hover:text-primary transition-colors">Nexora Digital</h1>
            </Link>
            <p className="text-muted-foreground text-sm mt-2">Sign in to access the CMS dashboard</p>
          </div>

          {error && (
            <div className="flex items-center gap-2 p-4 rounded-xl bg-destructive/20 border border-destructive/30 mb-6">
              <AlertCircle className="w-5 h-5 text-destructive" />
              <span className="text-destructive text-sm">{error}</span>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="username" className="block text-sm font-medium mb-2">
                Username
              </label>
              <div className="relative">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <GlassInput
                  id="username"
                  placeholder="Enter username"
                  className="pl-12"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium mb-2">
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <GlassInput
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter password"
                  className="pl-12 pr-12"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>
            <GlassButton type="submit" className="w-full" disabled={isLoading}>
              {isLoading ? "Signing in..." : "Sign In"}
            </GlassButton>
          </form>
        </GlassCard>
      </motion.div>
    </main>
  )
}
