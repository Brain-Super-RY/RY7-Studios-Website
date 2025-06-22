'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import { createClient } from '@/utils/supabase/client'
import { GoogleIcon } from '@/components/icons/GoogleIcon'
import Input from '@/components/Input'

export default function RegisterPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [success, setSuccess] = useState(false)
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
    setSuccess(false)
    
    try {
      const { error: signUpError } = await supabase.auth.signUp({
        email,
        password,
      })

      if (signUpError) throw signUpError

      setSuccess(true)
    } catch (err: any) {
      setError(err.message || 'Registration failed. Please try again.')
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
        {success ? (
          <div className="text-center text-white">
            <img
              src="/logo.svg"
              alt="RY7 Studios Logo"
              className="w-16 h-16 mx-auto mb-4"
            />
            <h1 className="text-3xl font-bold">Check your email</h1>
            <p className="mt-4 text-gray-400">
              We've sent a confirmation link to your email address.
            </p>
            <p className="mt-2 text-gray-400">
              Please follow the link to complete your registration.
            </p>
            <Link
              href="/login"
              className="mt-6 inline-block bg-primary text-white font-semibold py-3 px-6 rounded-lg hover:bg-primary-600 transition-colors"
            >
              Back to Sign In
            </Link>
          </div>
        ) : (
          <>
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <img
                  src="/logo.svg"
                  alt="RY7 Studios Logo"
                  className="w-16 h-16"
                />
              </div>
              <h1 className="text-3xl font-bold text-white">
                Create an account
              </h1>
              <p className="text-gray-400">Join RY7 Studios today</p>
            </div>

            <button
              type="button"
              onClick={handleOAuthSignIn}
              className="w-full flex items-center justify-center gap-3 py-3 bg-white text-gray-800 rounded-lg hover:bg-gray-200 transition-colors font-semibold"
            >
              <GoogleIcon className="w-5 h-5" />
              <span>Sign up with Google</span>
            </button>

            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-600" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-gray-900 text-gray-500">
                  Or sign up with email
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
                Create Account
              </button>

              <div className="text-center text-sm text-gray-400">
                <p>
                  Already have an account?{' '}
                  <Link
                    href="/login"
                    className="text-primary hover:underline font-semibold"
                  >
                    Sign in
                  </Link>
                </p>
              </div>
            </form>
          </>
        )}
      </motion.div>
    </div>
  )
}
