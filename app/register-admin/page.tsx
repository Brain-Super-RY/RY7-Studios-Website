"use client"

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { createClient } from '@/utils/supabase/client'

export default function RegisterAdminPage() {
  const supabase = createClient()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const router = useRouter()

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    // 1. Register ke Supabase Auth
    const { data, error: signUpError } = await supabase.auth.signUp({
      email,
      password,
    })

    if (signUpError) {
      setError(signUpError.message)
      setLoading(false)
      return
    }

    // 2. Insert ke table users dengan role 'admin'
    const userId = data.user?.id
    if (userId) {
      const { error: insertError } = await supabase
        .from('users')
        .upsert([{ id: userId, name, role: 'admin' }])

      if (insertError) {
        setError(insertError.message)
        setLoading(false)
        return
      }
    }

    setLoading(false)
    // Redirect ke dashboard admin atau halaman login
    router.push('/dashboard/admin')
  }

  return (
    <form onSubmit={handleRegister} className="max-w-md mx-auto p-6 bg-white rounded-lg shadow mt-10">
      <h2 className="text-2xl font-bold mb-4 text-center">Register Admin</h2>
      <input
        type="text"
        placeholder="Nama"
        value={name}
        onChange={e => setName(e.target.value)}
        required
        className="w-full mb-3 p-2 border rounded text-black placeholder:text-gray-400 bg-white/80 focus:bg-white"
      />
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
        {loading ? 'Registering...' : 'Register as Admin'}
      </button>
    </form>
  )
} 