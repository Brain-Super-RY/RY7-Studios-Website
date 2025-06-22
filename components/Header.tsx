'use client'

import Link from 'next/link'
import Image from 'next/image' // Import next/image
import { Sun, Moon, X, Menu } from 'lucide-react'
import { useState } from 'react'
import type { User } from '@supabase/supabase-js'
import { signOut } from '@/app/auth/actions'
import { useTheme } from './ThemeProvider'

export default function Header({ user }: { user: User | null }) {
  const { isDark, toggleTheme } = useTheme();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/features', label: 'Features' },
    { href: '/pricing', label: 'Pricing' },
    { href: '/portfolio', label: 'Portfolio' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' },
  ]

  return (
    <>
      <header className="sticky top-0 z-50 w-full bg-gray-900/50 backdrop-blur-lg border-b border-gray-700">
        <div className="container mx-auto flex items-center justify-between h-20 px-4 sm:px-6 lg:px-8">
          <Link href="/" className="flex items-center space-x-2">
            <Image src="/logo.svg" alt="RY7 Studios" width={40} height={40} /> {/* h-10 w-10 is 40px */}
            <span className="text-xl font-bold text-white">RY7 Studios</span>
          </Link>

          <nav className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className="text-gray-300 hover:text-primary transition-colors">
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center space-x-4">
            <button onClick={toggleTheme} className="p-2 rounded-full text-gray-300 hover:bg-gray-700">
              {isDark ? <Sun className="h-6 w-6" /> : <Moon className="h-6 w-6" />}
            </button>
            
            {user ? (
              <div className="hidden sm:flex items-center space-x-4">
                <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white font-bold">
                  {user.email?.charAt(0).toUpperCase()}
                </div>
                <form action={signOut}>
                  <button type="submit" className="px-4 py-2 text-sm font-semibold text-white bg-red-600 rounded-lg hover:bg-red-700 transition-colors">
                    Sign Out
                  </button>
                </form>
              </div>
            ) : (
              <div className="hidden sm:flex items-center space-x-2">
                <Link href="/login" className="px-4 py-2 text-sm font-semibold text-gray-300 hover:text-white transition-colors">
                  Login
                </Link>
                <Link href="/register" className="px-4 py-2 text-sm font-semibold text-white bg-primary rounded-lg hover:bg-primary-600 transition-colors">
                  Register
                </Link>
              </div>
            )}

            <div className="md:hidden">
               <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="p-2 rounded-full text-gray-300 hover:bg-gray-700">
                  {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 z-40 bg-gray-900/90 backdrop-blur-lg pt-20">
          <nav className="flex flex-col items-center space-y-6 text-xl p-4">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className="text-gray-300 hover:text-primary py-2" onClick={() => setIsMobileMenuOpen(false)}>
                {link.label}
              </Link>
            ))}
            <div className="pt-8 border-t border-gray-700 w-full max-w-xs flex flex-col items-center space-y-4">
              {user ? (
                <>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white font-bold text-lg">
                      {user.email?.charAt(0).toUpperCase()}
                    </div>
                    <span className="text-white">{user.email}</span>
                  </div>
                  <form action={signOut} className="w-full">
                    <button type="submit" className="w-full px-4 py-3 text-lg font-semibold text-white bg-red-600 rounded-lg hover:bg-red-700 transition-colors">
                      Sign Out
                    </button>
                  </form>
                </>
              ) : (
                <>
                  <Link href="/login" className="w-full text-center px-4 py-3 text-lg font-semibold text-gray-300 hover:text-white transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
                    Login
                  </Link>
                  <Link href="/register" className="w-full text-center px-4 py-3 text-lg font-semibold text-white bg-primary rounded-lg hover:bg-primary-600 transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
                    Register
                  </Link>
                </>
              )}
            </div>
          </nav>
        </div>
      )}
    </>
  )
}
