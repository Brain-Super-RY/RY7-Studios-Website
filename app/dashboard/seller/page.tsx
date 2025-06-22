'use client'

import { motion } from 'framer-motion'
import { Card } from '@/components/Card'

export default function SellerDashboardPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12"
      >
        <h1 className="text-3xl font-bold text-primary-600 mb-4">
          Seller Dashboard
        </h1>
        <p className="text-gray-600">
          Manage your services and grow your business
        </p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-8">
        <Card
          title="My Services"
          description="Manage your service listings and pricing"
          link="/dashboard/seller/services"
          variant="primary"
        />
        <Card
          title="Portfolio"
          description="Showcase your best work to potential clients"
          link="/portfolio"
          variant="glass"
        />
        <Card
          title="Orders"
          description="Manage active and completed orders"
          link="/orders"
          variant="glass"
        />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mt-12"
      >
        <h2 className="text-2xl font-bold mb-6">Recent Orders</h2>
        <div className="space-y-4">
          {/* TODO: Implement order list */}
          <div className="bg-white rounded-lg p-6 shadow">
            <p className="text-gray-500">No recent orders yet</p>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mt-12"
      >
        <h2 className="text-2xl font-bold mb-6">Portfolio Stats</h2>
        <div className="grid md:grid-cols-3 gap-4">
          <div className="bg-white p-6 rounded-lg shadow text-center">
            <h3 className="text-xl font-semibold text-primary-600 mb-2">
              Total Views
            </h3>
            <p className="text-3xl font-bold">0</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow text-center">
            <h3 className="text-xl font-semibold text-primary-600 mb-2">
              Active Projects
            </h3>
            <p className="text-3xl font-bold">0</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow text-center">
            <h3 className="text-xl font-semibold text-primary-600 mb-2">
              Completed Orders
            </h3>
            <p className="text-3xl font-bold">0</p>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
