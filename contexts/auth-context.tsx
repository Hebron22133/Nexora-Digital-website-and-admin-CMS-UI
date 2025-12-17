"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"

interface AuthContextType {
  isAuthenticated: boolean
  user: { username: string } | null
  login: (username: string, password: string) => boolean
  logout: () => void
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

const ADMIN_USERNAME = "Trueadmin"
const ADMIN_PASSWORD_HASH = "bhayana44"

export function AuthProvider({ children }: { children: ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [user, setUser] = useState<{ username: string } | null>(null)

  useEffect(() => {
    const stored = localStorage.getItem("nexora_auth")
    if (stored) {
      const parsed = JSON.parse(stored)
      setIsAuthenticated(true)
      setUser(parsed.user)
    }
  }, [])

  const login = (username: string, password: string) => {
    if (username === ADMIN_USERNAME && password === ADMIN_PASSWORD_HASH) {
      setIsAuthenticated(true)
      setUser({ username })
      localStorage.setItem("nexora_auth", JSON.stringify({ user: { username } }))
      return true
    }
    return false
  }

  const logout = () => {
    setIsAuthenticated(false)
    setUser(null)
    localStorage.removeItem("nexora_auth")
  }

  return <AuthContext.Provider value={{ isAuthenticated, user, login, logout }}>{children}</AuthContext.Provider>
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}
