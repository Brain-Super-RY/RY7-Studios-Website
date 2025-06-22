'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image' // Import next/image
import { motion } from 'framer-motion'
import { GoogleIcon } from '@/components/icons/GoogleIcon'
import { createClient } from '@/utils/supabase/client'
import { useRouter } from 'next/navigation'
import Input from '@/components/Input'

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const router = useRouter()
  const supabase = createClient()

  const handleOAuthSignIn = async () => {
    await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo: `${location.origin}/auth/callback`,
      },
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password
      })

      if (error) throw error

      if (data.user) {
        // Check for role in users table
        const { data: userData, error: userError } = await supabase
          .from('users')
          .select('role')
          .eq('id', data.user.id)
          .single()

        if (userError && userError.code !== 'PGRST116') { // Ignore error for no rows found
          throw userError
        }

        if (userData?.role) {
          router.push(`/dashboard/${userData.role}`);
        } else {
          router.push('/dashboard/role-selection');
        }
      }

    } catch (err: any) {
      setError(err.message || 'Login failed. Please check your credentials.')
    }
  }

  return (
    <div className="flex items-center justify-center py-16 px-4">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md p-8 space-y-8 bg-gray-800 bg-opacity-50 backdrop-blur-lg rounded-lg shadow-lg border border-gray-700"
      >
        <div className="text-center">
          <div className="flex justify-center mb-4">
            <Image
              src="/logo.svg"
              alt="RY7 Studios Logo"
              width={64} // Equivalent to w-16
              height={64} // Equivalent to h-16
            />
          </div>
          <h1 className="text-3xl font-bold text-white">Welcome back</h1>
          <p className="text-gray-400">Sign in to continue to RY7 Studios</p>
        </div>

        <button
          type="button"
          onClick={handleOAuthSignIn}
          className="w-full flex items-center justify-center gap-3 py-3 bg-white text-gray-800 rounded-lg hover:bg-gray-200 transition-colors font-semibold"
        >
          <GoogleIcon className="w-5 h-5" />
          <span>Continue with Google</span>
        </button>

        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-600" />
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-2 bg-gray-900 text-gray-500 rounded-full">
              Or continue with email
            </span>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          {error && (
            <div className="bg-red-500/20 text-red-300 p-3 rounded-lg text-center">
              {error}
            </div>
          )}

          <Input
            id="email"
            label="Email address"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <Input
            id="password"
            label="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button
            type="submit"
            className="w-full bg-primary text-white font-semibold py-3 rounded-lg hover:bg-primary-600 transition-colors"
          >
            Sign In
          </button>

          <div className="text-center text-sm text-gray-400">
            <p>
              Don&apos;t have an account?{' '}
              <Link href="/register" className="text-primary hover:underline font-semibold">
                Sign up
              </Link>
            </p>
          </div>
        </form>
      </motion.div>
    </div>
  )
}
