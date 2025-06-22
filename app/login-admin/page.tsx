"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { createClient } from "@/utils/supabase/client"

export default function LoginAdminPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")
  const router = useRouter()
  const supabase = createClient()

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError("")

    // 1. Login ke Supabase Auth
    const { data, error: loginError } = await supabase.auth.signInWithPassword({
      email,
      password,
    })

    if (loginError) {
      setError("Email atau password salah")
      setLoading(false)
      return
    }

    // 2. Cek role di table users
    const userId = data.user?.id
    if (userId) {
      const { data: userData, error: userError } = await supabase
        .from("users")
        .select("role")
        .eq("id", userId)
        .single()

      if (userError || !userData || userData.role !== "admin") {
        setError("Akun ini bukan admin")
        setLoading(false)
        return
      }
    }

    setLoading(false)
    router.push("/dashboard/admin")
  }

  return (
    <form onSubmit={handleLogin} className="max-w-md mx-auto p-6 bg-white rounded-lg shadow mt-10">
      <h2 className="text-2xl font-bold mb-4 text-center">Login Admin</h2>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={e => setEmail(e.target.value)}
        required
        className="w-full mb-3 p-2 border rounded text-black placeholder:text-gray-400 bg-white/80 focus:bg-white"
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={e => setPassword(e.target.value)}
        required
        className="w-full mb-3 p-2 border rounded text-black placeholder:text-gray-400 bg-white/80 focus:bg-white"
      />
      {error && <div className="text-red-500 mb-2">{error}</div>}
      <button
        type="submit"
        disabled={loading}
        className="w-full bg-primary text-white py-2 rounded hover:bg-primary-700"
      >
        {loading ? "Logging in..." : "Login as Admin"}
      </button>
    </form>
  )
} 