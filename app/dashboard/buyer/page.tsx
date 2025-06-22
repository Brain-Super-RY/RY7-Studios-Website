'use client'

import { motion } from 'framer-motion'
import { Card } from '@/components/Card'

export default function BuyerDashboardPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12"
      >
        <h1 className="text-3xl font-bold text-primary-600 mb-4">
          Buyer Dashboard
        </h1>
        <p className="text-gray-600">
          Find and hire talented sellers for your projects
        </p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-8">
        <Card
          title="Browse Services"
          description="Find the perfect seller for your project"
          link="/services"
          variant="primary"
        />
        <Card
          title="My Orders"
          description="Track your active and completed orders"
          link="/orders"
          variant="glass"
        />
        <Card
          title="Favorites"
          description="View your saved sellers and services"
          link="/favorites"
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
    </div>
  )
}
