'use client'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { createClient } from '@/utils/supabase/client'
import { motion } from 'framer-motion'
import { TrendingUp, Clock, Activity, Users, Chrome, BarChart2, Mail, Share2, MapPin, CheckCircle, AlertCircle, Star, Settings, X, Plus, UserPlus, Briefcase, List, MessageSquare } from 'lucide-react'
import { Switch } from '@headlessui/react'
import { AudienceChart } from '@/components/dashboard/AudienceChart'
// import { Tooltip } from '@mui/material' // Commented out
import { Dialog } from '@headlessui/react'
// import { Snackbar, Alert } from '@mui/material' // Commented out
import dynamic from 'next/dynamic'
import Image from 'next/image' // Import next/image

const BrowserTrafficSources = dynamic(() => import('@/components/dashboard/admin/BrowserTrafficSources').then(mod => mod.BrowserTrafficSources))
const ActivityFeeds = dynamic(() => import('@/components/dashboard/admin/ActivityFeeds').then(mod => mod.ActivityFeeds))

interface ModalData {
  title: string
  description: string
}

interface FileModalData {
  name: string
  type: string
  size: string
  time: string
}

interface CommentModalData {
  user: string
  comment: string
  time: string
}

type Status = 'success' | 'info' | 'warning'

interface AudienceOverviewData {
  newVisitors: number
  loginedVisitors: number
  countries: { name: string; value: number; percent: string }[]
}

interface BrowserData {
  name: string
  sessions: string
  bounce: string
  transactions: string
  icon: JSX.Element
}

interface TrafficSource {
  channel: string
  sessions: string
  prev: string
  change: string
}

interface RecentActivityItem {
  time: string
  desc: string
  status: Status
}

interface QuickAction {
  label: string
  icon: JSX.Element
  color: string
}

interface SessionByCountryData {
  country: string
  sessions: number
  percent: string
}

interface TopReferral {
  source: string
  visitors: number
  percent: string
  status: 'up' | 'down'
}

interface RecentComment {
  user: string
  comment: string
  time: string
}

interface RecentFile {
  name: string
  type: string
  size: string
  time: string
}

interface ActivityTimelineItem {
  time: string
  activity: string
}

interface Notification {
  type: 'info' | 'success' | 'warning' | 'error'
  message: string
  time: string
}

interface QuickStat {
  label: string
  value: string | number
  icon: JSX.Element
}

const audienceOverview: AudienceOverviewData = {
  newVisitors: 1282,
  loginedVisitors: 6,
  countries: [
    { name: 'USA', value: 35365, percent: '2.5%' },
    { name: 'Germany', value: 24865, percent: '1.2%' },
    { name: 'Spain', value: 18369, percent: '0.8%' },
    { name: 'Bahamas', value: 11325, percent: '2.5%' },
  ],
}

const browserData: BrowserData[] = [
  { name: 'Chrome', sessions: '10,853 (52%)', bounce: '52.80%', transactions: '566 (92%)', icon: <Chrome className="w-5 h-5" /> },
  { name: 'Microsoft Edge', sessions: '2,545 (47%)', bounce: '47.54%', transactions: '498 (81%)', icon: <Chrome className="w-5 h-5" /> },
  { name: 'Internet Explorer', sessions: '1,836 (38%)', bounce: '41.12%', transactions: '455 (74%)', icon: <Chrome className="w-5 h-5" /> },
  { name: 'Opera', sessions: '1,958 (31%)', bounce: '36.82%', transactions: '361 (61%)', icon: <Chrome className="w-5 h-5" /> },
]

const trafficSources: TrafficSource[] = [
  { channel: 'Organic search', sessions: '10,853 (52%)', prev: '566 (92%)', change: '52.80%' },
  { channel: 'Direct', sessions: '2,545 (47%)', prev: '498 (81%)', change: '-17.20%' },
  { channel: 'Referal', sessions: '1,836 (38%)', prev: '455 (74%)', change: '41.12%' },
  { channel: 'Email', sessions: '1,958 (31%)', prev: '361 (61%)', change: '-8.24%' },
  { channel: 'Social', sessions: '1,566 (26%)', prev: '299 (49%)', change: '29.33%' },
]

const recentActivity: RecentActivityItem[] = [
  { time: '2 min ago', desc: 'Your order is placed', status: 'success' },
  { time: '10 min ago', desc: 'Meeting with designers', status: 'info' },
  { time: '40 min ago', desc: 'UX 3 Task complete', status: 'success' },
  { time: '2 hrs ago', desc: 'Payment Successfull', status: 'success' },
  { time: '3 hrs ago', desc: 'Server warning', status: 'warning' },
]

const loginedAvatars: string[] = [
  '/avatar1.png', '/avatar2.png', '/avatar3.png', '/avatar4.png', '/avatar5.png', '/avatar6.png'
]

const quickActions: QuickAction[] = [
  { label: 'Create Project', icon: <Plus className="w-5 h-5" />, color: 'bg-primary text-white' },
  { label: 'Add User', icon: <UserPlus className="w-5 h-5" />, color: 'bg-green-500 text-white' },
  { label: 'Send Email', icon: <Mail className="w-5 h-5" />, color: 'bg-yellow-500 text-white' },
  { label: 'Generate Report', icon: <BarChart2 className="w-5 h-5" />, color: 'bg-purple-500 text-white' },
]

const sessionByCountry: SessionByCountryData[] = [
  { country: 'USA', sessions: 12000, percent: '40%' },
  { country: 'Germany', sessions: 8000, percent: '27%' },
  { country: 'Spain', sessions: 6000, percent: '20%' },
  { country: 'Bahamas', sessions: 4000, percent: '13%' },
]

const topReferrals: TopReferral[] = [
  { source: 'Google', visitors: 12000, percent: '+12%', status: 'up' },
  { source: 'Facebook', visitors: 9000, percent: '-5%', status: 'down' },
  { source: 'Twitter', visitors: 7000, percent: '+8%', status: 'up' },
  { source: 'LinkedIn', visitors: 4000, percent: '+2%', status: 'up' },
]

const recentComments: RecentComment[] = [
  { user: 'Alice', comment: 'Great dashboard!', time: '2 min ago' },
  { user: 'Bob', comment: 'Love the new design.', time: '10 min ago' },
  { user: 'Charlie', comment: 'Very intuitive UI.', time: '1 hr ago' },
  { user: 'Diana', comment: 'Awesome work!', time: '2 hrs ago' },
]

const recentFiles: RecentFile[] = [
  { name: 'Report Q1.pdf', type: 'PDF', size: '2.1MB', time: '2 min ago' },
  { name: 'Design.sketch', type: 'Sketch', size: '4.5MB', time: '10 min ago' },
  { name: 'Invoice.xlsx', type: 'Excel', size: '1.2MB', time: '1 hr ago' },
  { name: 'Logo.png', type: 'Image', size: '500KB', time: '2 hrs ago' },
]

const activityTimeline: ActivityTimelineItem[] = [
  { time: '09:00', activity: 'User Alice logged in' },
  { time: '09:30', activity: 'Project "Redesign" created' },
  { time: '10:00', activity: 'Payment received from Bob' },
  { time: '11:00', activity: 'Server backup completed' },
]

const notificationsFeed: Notification[] = [
  { type: 'info', message: 'System update available', time: 'Just now' },
  { type: 'success', message: 'Backup completed', time: '5 min ago' },
  { type: 'warning', message: 'Storage almost full', time: '30 min ago' },
  { type: 'error', message: 'Failed login attempt', time: '1 hr ago' },
]

const quickStats: QuickStat[] = [
  { label: 'Active Users', value: 128, icon: <Users className="w-5 h-5 text-primary" /> },
  { label: 'Projects', value: 24, icon: <Briefcase className="w-5 h-5 text-green-500" /> },
  { label: 'Tasks', value: 87, icon: <List className="w-5 h-5 text-yellow-500" /> },
  { label: 'Revenue', value: '$12k', icon: <BarChart2 className="w-5 h-5 text-purple-500" /> },
]

const statusIcons: { [key in Status]: JSX.Element } = {
    success: <CheckCircle className="w-5 h-5 text-green-500" />,
    info: <Star className="w-5 h-5 text-blue-500" />,
    warning: <AlertCircle className="w-5 h-5 text-yellow-500" />,
};

export default function AdminDashboardPage() {
  const [loading, setLoading] = useState(true)
  const [isAdmin, setIsAdmin] = useState(false)
  const router = useRouter()
  const supabase = createClient()
  const [settingsOpen, setSettingsOpen] = useState(false)
  const [autoUpdates, setAutoUpdates] = useState(true)
  const [locationPerm, setLocationPerm] = useState(false)
  const [showOffline, setShowOffline] = useState(true)
  const [showOnline, setShowOnline] = useState(true)
  const [statusVisible, setStatusVisible] = useState(true)
  const [notifPopup, setNotifPopup] = useState(true)
  const [modalOpen, setModalOpen] = useState(false)
  const [modalData, setModalData] = useState<ModalData | null>(null)
  const [fileModalOpen, setFileModalOpen] = useState(false)
  const [fileModalData, setFileModalData] = useState<FileModalData | null>(null)
  const [commentModalOpen, setCommentModalOpen] = useState(false)
  const [commentModalData, setCommentModalData] = useState<CommentModalData | null>(null)
  const [toastOpen, setToastOpen] = useState(false)
  const [toastMsg, setToastMsg] = useState('')

  useEffect(() => {
    const checkAdmin = async () => {
      const { data: { user } } = await supabase.auth.getUser()
      if (!user) {
        router.replace('/login-admin')
        return
      }
      const { data, error } = await supabase
        .from('users')
        .select('role')
        .eq('id', user.id)
        .single()
      if (error || !data || data.role !== 'admin') {
        router.replace('/login-admin')
        return
      }
      setIsAdmin(true)
      setLoading(false)
    }
    checkAdmin()
  }, [router, supabase])

  if (loading) return <div className="text-center py-20">Loading...</div>
  if (!isAdmin) return null

  return (
    <div className="container mx-auto px-4 py-8 relative">
      {/* Settings Button */}
      <button
        onClick={() => setSettingsOpen(true)}
        className="fixed bottom-8 right-8 z-50 bg-primary text-white p-4 rounded-full shadow-lg hover:bg-primary-700 transition"
        title="Settings"
      >
        <Settings className="w-6 h-6" />
      </button>
      {/* Settings Panel */}
      {settingsOpen && (
        <div className="fixed inset-0 z-50 flex">
          <div className="flex-1 bg-black/40" onClick={() => setSettingsOpen(false)}></div>
          <div className="w-full max-w-md bg-white dark:bg-gray-900/90 h-full shadow-2xl p-8 overflow-y-auto relative">
            <button onClick={() => setSettingsOpen(false)} className="absolute top-4 right-4 text-gray-400 hover:text-primary">
              <X className="w-6 h-6" />
            </button>
            <div className="text-2xl font-bold mb-6 text-primary">Settings</div>
            <div className="mb-6">
              <div className="text-lg font-semibold mb-2">Appearance</div>
              <div className="flex items-center justify-between mb-4">
                <span>Auto updates</span>
                <Switch
                  checked={autoUpdates}
                  onChange={setAutoUpdates}
                  className={`${autoUpdates ? 'bg-primary' : 'bg-gray-300'} relative inline-flex h-6 w-11 items-center rounded-full`}
                >
                  <span className="sr-only">Enable auto updates</span>
                  <span
                    className={`${autoUpdates ? 'translate-x-6' : 'translate-x-1'} inline-block h-4 w-4 transform rounded-full bg-white transition`}
                  />
                </Switch>
              </div>
              <div className="flex items-center justify-between mb-4">
                <span>Location Permission</span>
                <Switch
                  checked={locationPerm}
                  onChange={setLocationPerm}
                  className={`${locationPerm ? 'bg-primary' : 'bg-gray-300'} relative inline-flex h-6 w-11 items-center rounded-full`}
                >
                  <span className="sr-only">Enable location</span>
                  <span
                    className={`${locationPerm ? 'translate-x-6' : 'translate-x-1'} inline-block h-4 w-4 transform rounded-full bg-white transition`}
                  />
                </Switch>
              </div>
              <div className="flex items-center justify-between mb-4">
                <span>Show offline Contacts</span>
                <Switch
                  checked={showOffline}
                  onChange={setShowOffline}
                  className={`${showOffline ? 'bg-primary' : 'bg-gray-300'} relative inline-flex h-6 w-11 items-center rounded-full`}
                >
                  <span className="sr-only">Show offline contacts</span>
                  <span
                    className={`${showOffline ? 'translate-x-6' : 'translate-x-1'} inline-block h-4 w-4 transform rounded-full bg-white transition`}
                  />
                </Switch>
              </div>
            </div>
            <div className="mb-6">
              <div className="text-lg font-semibold mb-2">General Settings</div>
              <div className="flex items-center justify-between mb-4">
                <span>Show me Online</span>
                <Switch
                  checked={showOnline}
                  onChange={setShowOnline}
                  className={`${showOnline ? 'bg-primary' : 'bg-gray-300'} relative inline-flex h-6 w-11 items-center rounded-full`}
                >
                  <span className="sr-only">Show me online</span>
                  <span
                    className={`${showOnline ? 'translate-x-6' : 'translate-x-1'} inline-block h-4 w-4 transform rounded-full bg-white transition`}
                  />
                </Switch>
              </div>
              <div className="flex items-center justify-between mb-4">
                <span>Status visible to all</span>
                <Switch
                  checked={statusVisible}
                  onChange={setStatusVisible}
                  className={`${statusVisible ? 'bg-primary' : 'bg-gray-300'} relative inline-flex h-6 w-11 items-center rounded-full`}
                >
                  <span className="sr-only">Status visible</span>
                  <span
                    className={`${statusVisible ? 'translate-x-6' : 'translate-x-1'} inline-block h-4 w-4 transform rounded-full bg-white transition`}
                  />
                </Switch>
              </div>
              <div className="flex items-center justify-between mb-4">
                <span>Notification Popup</span>
                <Switch
                  checked={notifPopup}
                  onChange={setNotifPopup}
                  className={`${notifPopup ? 'bg-primary' : 'bg-gray-300'} relative inline-flex h-6 w-11 items-center rounded-full`}
                >
                  <span className="sr-only">Enable notifications</span>
                  <span
                    className={`${notifPopup ? 'translate-x-6' : 'translate-x-1'} inline-block h-4 w-4 transform rounded-full bg-white transition`}
                  />
                </Switch>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Modals */}
      <Dialog open={modalOpen} onClose={() => setModalOpen(false)} className="relative z-50">
        <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
        <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
          <Dialog.Panel className="w-full max-w-md rounded-lg bg-white dark:bg-gray-800 p-6">
            <Dialog.Title className="font-bold text-lg text-primary">{modalData?.title}</Dialog.Title>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">{modalData?.description}</p>
            <div className="mt-4 flex gap-4">
              <button className="btn btn-primary" onClick={() => setModalOpen(false)}>Ok</button>
              <button className="btn" onClick={() => setModalOpen(false)}>Cancel</button>
            </div>
          </Dialog.Panel>
        </div>
      </Dialog>

      <Dialog open={fileModalOpen} onClose={() => setFileModalOpen(false)} className="relative z-50">
        <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
        <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
          <Dialog.Panel className="w-full max-w-md rounded-lg bg-white dark:bg-gray-800 p-6">
            <Dialog.Title className="font-bold text-lg text-primary">File Details</Dialog.Title>
            {fileModalData && (
              <div className="mt-2 text-sm text-gray-600 dark:text-gray-300">
                <p><strong>Name:</strong> {fileModalData.name}</p>
                <p><strong>Type:</strong> {fileModalData.type}</p>
                <p><strong>Size:</strong> {fileModalData.size}</p>
                <p><strong>Last Modified:</strong> {fileModalData.time}</p>
              </div>
            )}
            <div className="mt-4 flex gap-4">
              <button className="btn btn-primary" onClick={() => setFileModalOpen(false)}>Close</button>
            </div>
          </Dialog.Panel>
        </div>
      </Dialog>

      <Dialog open={commentModalOpen} onClose={() => setCommentModalOpen(false)} className="relative z-50">
        <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
        <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
          <Dialog.Panel className="w-full max-w-md rounded-lg bg-white dark:bg-gray-800 p-6">
            <Dialog.Title className="font-bold text-lg text-primary">Comment Details</Dialog.Title>
            {commentModalData && (
              <div className="mt-2 text-sm text-gray-600 dark:text-gray-300">
                <p><strong>User:</strong> {commentModalData.user}</p>
                <p><strong>Comment:</strong> {commentModalData.comment}</p>
                <p><strong>Time:</strong> {commentModalData.time}</p>
              </div>
            )}
            <div className="mt-4 flex gap-4">
              <button className="btn btn-primary" onClick={() => setCommentModalOpen(false)}>Close</button>
            </div>
          </Dialog.Panel>
        </div>
      </Dialog>

      {/* <Snackbar open={toastOpen} autoHideDuration={6000} onClose={() => setToastOpen(false)}>
        <Alert onClose={() => setToastOpen(false)} severity="success" sx={{ width: '100%' }}>
          {toastMsg}
        </Alert>
      </Snackbar> */}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        {quickStats.map((stat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md flex items-center"
          >
            <div className="mr-4">{stat.icon}</div>
            <div>
              <div className="text-gray-500 dark:text-gray-400">{stat.label}</div>
              <div className="text-2xl font-bold">{stat.value}</div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Hero/Jumbotron Section */}
      <div className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-xl shadow p-8 mb-8 flex flex-col md:flex-row items-center justify-between">
        <div className="flex-grow">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white">Welcome back, Admin!</h2>
          <p className="text-gray-600 dark:text-gray-300 mt-2">Here&apos;s what&apos;s happening with your projects today.</p>
        </div>
        <div className="w-full md:w-auto mt-6 md:mt-0 flex flex-wrap gap-3 justify-center">
          {quickActions.map((action, i) => (
            // <Tooltip key={i} title={action.label}>  // Commented out Tooltip
              <button key={i} title={action.label} className={`flex items-center justify-center w-12 h-12 rounded-full shadow-md hover:opacity-90 transition ${action.color}`}>
                {action.icon}
              </button>
            // </Tooltip> // Commented out Tooltip
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        {/* Audience Overview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="lg:col-span-2 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md"
        >
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-xl font-semibold">Audience Overview</h3>
            <button className="text-gray-400 hover:text-primary">
              <TrendingUp className="w-5 h-5" />
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
            <div>
              <div className="text-gray-500 dark:text-gray-400">New Visitors</div>
              <div className="text-3xl font-bold">{audienceOverview.newVisitors}</div>
            </div>
            <div>
              <div className="text-gray-500 dark:text-gray-400">Logined Visitors</div>
              <div className="flex items-center">
                <div className="text-3xl font-bold mr-2">{audienceOverview.loginedVisitors}</div>
                <div className="flex -space-x-2">
                  {loginedAvatars.map((avatar, i) => (
                    <Image key={i} className="rounded-full border-2 border-white dark:border-gray-800" src={avatar} alt={`avatar ${i + 1}`} width={32} height={32} />
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="space-y-3">
            {audienceOverview.countries.map((country, i) => (
              <div key={i}>
                <div className="flex justify-between text-sm mb-1">
                  <span>{country.name}</span>
                  <span>{country.value.toLocaleString()} <span className="text-gray-400">({country.percent})</span></span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                  <div className="bg-primary h-2 rounded-full" style={{ width: `${(country.value / 35365) * 100}%` }}></div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Traffic Source */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="lg:col-span-1 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md"
        >
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-xl font-semibold">Traffic Source</h3>
            <button className="text-gray-400 hover:text-primary">
              <Share2 className="w-5 h-5" />
            </button>
          </div>
          <ul className="space-y-4">
            {trafficSources.map((source, i) => (
              <li key={i}>
                <div className="flex justify-between items-center">
                  <span className="font-semibold">{source.channel}</span>
                  <span className={`text-sm font-bold ${source.change.startsWith('-') ? 'text-red-500' : 'text-green-500'}`}>{source.change}</span>
                </div>
                <div className="text-sm text-gray-500">{source.sessions}</div>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Activity Feeds */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="lg:col-span-1 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md"
        >
          <h3 className="text-xl font-semibold mb-4">Activity Feeds</h3>
          <ActivityFeeds />
        </motion.div>

        {/* Sessions By Country */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="lg:col-span-2 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md"
        >
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-xl font-semibold">Sessions By Country</h3>
            <button className="text-gray-400 hover:text-primary">
              <MapPin className="w-5 h-5" />
            </button>
          </div>
          <div className="space-y-4">
            {sessionByCountry.map((session, i) => (
              <div key={i}>
                <div className="flex justify-between text-sm mb-1">
                  <span>{session.country}</span>
                  <span>{session.sessions.toLocaleString()}</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                  <div className="bg-primary h-2.5 rounded-full" style={{ width: session.percent }}></div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
        {/* Browser Traffic Source */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="lg:col-span-2 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md"
        >
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-xl font-semibold">Browser Traffic Source</h3>
            <button className="text-gray-400 hover:text-primary">
              <BarChart2 className="w-5 h-5" />
            </button>
          </div>
          <BrowserTrafficSources />
        </motion.div>

        {/* Top Referrals */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="lg:col-span-1 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md"
        >
          <h3 className="text-xl font-semibold mb-4">Top Referrals</h3>
          <ul className="space-y-4">
            {topReferrals.map((ref, i) => (
              <li key={i} className="flex justify-between items-center">
                <div>
                  <div className="font-semibold">{ref.source}</div>
                  <div className="text-sm text-gray-500">{ref.visitors.toLocaleString()} Visitors</div>
                </div>
                <div className={`text-sm font-semibold ${ref.status === 'up' ? 'text-green-500' : 'text-red-500'}`}>
                  {ref.percent}
                </div>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
        {/* Recent Comments */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="lg:col-span-2 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md"
        >
          <h3 className="text-xl font-semibold mb-4">Recent Comments</h3>
          <ul className="space-y-4">
            {recentComments.map((comment, i) => (
              <li
                key={i}
                onClick={() => {
                  setCommentModalData(comment);
                  setCommentModalOpen(true);
                }}
                className="flex items-start space-x-4 p-2 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700/50 cursor-pointer"
              >
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center font-bold text-primary">
                  {comment.user.charAt(0)}
                </div>
                <div>
                  <div className="font-semibold">{comment.user}</div>
                  <p className="text-sm text-gray-600 dark:text-gray-300">{comment.comment}</p>
                  <div className="text-xs text-gray-400 mt-1">{comment.time}</div>
                </div>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Recent Files */}
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="lg:col-span-1 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md"
        >
            <h3 className="text-xl font-semibold mb-4">Recent Files</h3>
            <ul className="space-y-3">
                {recentFiles.map((file, i) => (
                    <li key={i} className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700/50 cursor-pointer" onClick={() => { setFileModalData(file); setFileModalOpen(true); }}>
                        <div className="text-primary">{file.type === 'PDF' ? <TrendingUp className="w-6 h-6" /> : <TrendingUp className="w-6 h-6" />}</div>
                        <div className="flex-1">
                            <div className="font-semibold">{file.name}</div>
                            <div className="text-sm text-gray-500">{file.size}</div>
                        </div>
                        <div className="text-sm text-gray-400">{file.time}</div>
                    </li>
                ))}
            </ul>
        </motion.div>
      </div>
    </div>
  )
}
