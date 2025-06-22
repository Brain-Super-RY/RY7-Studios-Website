'use client'

import { useState } from 'react'
import { Bell, Sun, Moon, Search, Menu, Globe, ChevronDown, ChevronUp, User, LogOut, Settings } from 'lucide-react'
import { createClient } from '@/utils/supabase/client'
import { useRouter } from 'next/navigation'
import { useTheme } from '@/components/ThemeProvider'

const dummyUser = {
  name: 'James',
  email: 'james@ry7.com',
  role: 'Front End Developer',
}
const dummyNotifications = [
  { id: 1, message: 'Your order is placed', time: '2 min ago' },
  { id: 2, message: 'Meeting with designers', time: '10 min ago' },
  { id: 3, message: 'UX 3 Task complete', time: '40 min ago' },
  { id: 4, message: 'Payment Successfull', time: '2 hrs ago' },
]
const languages = [
  { code: 'en', label: 'English' },
  { code: 'es', label: 'Spanish' },
  { code: 'de', label: 'German' },
  { code: 'fr', label: 'French' },
]

const Topbar = ({ toggleSidebar }: { toggleSidebar: () => void }) => {
    const { isDark, toggleTheme } = useTheme();
    const [notifOpen, setNotifOpen] = useState(false);
    const [profileOpen, setProfileOpen] = useState(false);
    const supabase = createClient();
    const router = useRouter();

    const handleSignOut = async () => {
      await supabase.auth.signOut();
      router.push('/');
    }

    return (
        <header className="flex items-center justify-between h-20 px-4 md:px-8 bg-white/10 dark:bg-gray-900/60 backdrop-blur-lg border-b border-gray-200 dark:border-gray-700 shadow-sm">
            <div className="flex items-center space-x-4">
                {/* Hamburger Menu Icon */}
                <button onClick={toggleSidebar} className="p-2 rounded-full text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700">
                    <Menu />
                </button>
                {/* Greeting */}
                <div className="hidden md:block">
                    <div className="text-lg font-semibold text-gray-900 dark:text-white">Good Morning, {dummyUser.name}!</div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">{dummyUser.role}</div>
                </div>
            </div>
            {/* Search Bar */}
            <div className="flex-1 flex justify-center">
                <div className="relative w-full max-w-md">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                    <input
                        type="text"
                        placeholder="Search..."
                        className="pl-10 pr-4 py-2 w-full bg-gray-100 dark:bg-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                </div>
            </div>
            <div className="flex items-center space-x-2 md:space-x-6">
                {/* Switch Theme */}
                <button onClick={toggleTheme} className="p-2 rounded-full text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700">
                    {isDark ? <Sun /> : <Moon />}
                </button>
                {/* Notifikasi */}
                <div className="relative">
                    <button onClick={() => setNotifOpen(v => !v)} className="p-2 rounded-full text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 relative">
                        <Bell />
                        {dummyNotifications.length > 0 && (
                            <span className="absolute top-0 right-0 flex items-center justify-center w-5 h-5 text-xs font-bold text-white bg-red-500 rounded-full">
                                {dummyNotifications.length}
                            </span>
                        )}
                    </button>
                    {notifOpen && (
                        <div className="absolute right-0 mt-2 w-80 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg z-20">
                            <div className="p-4 font-semibold border-b border-gray-200 dark:border-gray-700">Notifications</div>
                            <ul className="max-h-60 overflow-y-auto divide-y divide-gray-100 dark:divide-gray-800">
                                {dummyNotifications.map(n => (
                                    <li key={n.id} className="p-4 hover:bg-gray-100 dark:hover:bg-gray-800 transition">
                                        <div className="text-sm text-gray-800 dark:text-gray-100">{n.message}</div>
                                        <div className="text-xs text-gray-400 mt-1">{n.time}</div>
                                    </li>
                                ))}
                                {dummyNotifications.length === 0 && (
                                    <li className="p-4 text-gray-400 text-sm">No notifications</li>
                                )}
                            </ul>
                        </div>
                    )}
                </div>
                {/* Profile User */}
                <div className="relative">
                    <button onClick={() => setProfileOpen(v => !v)} className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-bold text-lg">
                        {dummyUser.name.charAt(0)}
                    </button>
                    {profileOpen && (
                        <div className="absolute right-0 mt-2 w-56 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg z-20">
                            <div className="p-4 border-b border-gray-200 dark:border-gray-700">
                                <div className="font-semibold text-gray-900 dark:text-white">{dummyUser.name}</div>
                                <div className="text-sm text-gray-500 dark:text-gray-400">{dummyUser.email}</div>
                                <div className="text-xs text-gray-400 mt-1">{dummyUser.role}</div>
                            </div>
                            <button className="w-full text-left px-4 py-3 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800">Account</button>
                            <button className="w-full text-left px-4 py-3 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800">Profile</button>
                            <button className="w-full text-left px-4 py-3 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800">Settings</button>
                            <button
                                onClick={handleSignOut}
                                className="w-full text-left px-4 py-3 text-red-600 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-b-lg font-semibold"
                            >
                                <LogOut className="inline w-4 h-4 mr-2" />Logout
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </header>
    )
}

export default Topbar 