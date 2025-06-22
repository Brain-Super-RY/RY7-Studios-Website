'use client'

import { useState, useEffect } from 'react'
import { redirect, usePathname } from 'next/navigation'
import Sidebar from '@/components/dashboard/Sidebar'
import Topbar from '@/components/dashboard/Topbar'
import { createClient } from '@/utils/supabase/client'
import type { User } from '@supabase/supabase-js'

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [user, setUser] = useState<User | null>(null)
  const [role, setRole] = useState<string | null>(null)
  const [isSidebarOpen, setSidebarOpen] = useState(true)
  const [loading, setLoading] = useState(true)
  const supabase = createClient()
  const pathname = usePathname()

  useEffect(() => {
    const checkUser = async () => {
      const { data: { user } } = await supabase.auth.getUser()
  if (!user) {
    redirect('/login')
        return
      }
      setUser(user)

      const { data: userData } = await supabase
        .from('users')
        .select('role')
        .eq('id', user.id)
        .single()
      
      if (userData?.role) {
        setRole(userData.role)
      } else if (pathname !== '/dashboard/role-selection') {
        redirect('/dashboard/role-selection')
      }
      setLoading(false)
    }
    checkUser()
  }, [pathname, supabase])
  
  useEffect(() => {
    setSidebarOpen(false);
  }, [pathname]);

  if (loading) {
    return <div className="flex items-center justify-center min-h-screen bg-gray-900 text-white">Loading...</div>
  }
  
  if (pathname === '/dashboard/role-selection') {
    return <>{children}</>
  }

  return (
    <div className="flex min-h-screen bg-gray-900">
      <Sidebar userRole={role || ''} isOpen={isSidebarOpen} setOpen={setSidebarOpen} />
      <div className={`flex-1 flex flex-col transition-all duration-300 ${isSidebarOpen ? 'md:ml-64' : 'md:ml-20'}`}>
        <Topbar toggleSidebar={() => setSidebarOpen(!isSidebarOpen)} />
        <main className="flex-grow p-4 sm:p-6 lg:p-8">
        {children}
      </main>
      </div>
    </div>
  )
}
