'use client'

import { motion } from 'framer-motion'
import { Card } from '@/components/Card'

export default function DeveloperDashboardPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12"
      >
        <h1 className="text-3xl font-bold text-primary-600 mb-4">
          Developer Dashboard
        </h1>
        <p className="text-gray-600">
          Manage API integrations and development tools
        </p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-8">
        <Card
          title="API Keys"
          description="Manage your API credentials and access"
          link="/developer/api-keys"
          variant="primary"
        />
        <Card
          title="API Logs"
          description="View and analyze API usage and errors"
          link="/developer/api-logs"
          variant="glass"
        />
        <Card
          title="Documentation"
          description="Access API documentation and guides"
          link="/developer/docs"
          variant="glass"
        />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mt-12"
      >
        <h2 className="text-2xl font-bold mb-6">API Usage</h2>
        <div className="bg-white rounded-lg p-6 shadow">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h3 className="text-xl font-semibold text-primary-600 mb-2">
                Total Requests
              </h3>
              <p className="text-3xl font-bold">0</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-primary-600 mb-2">
                Success Rate
              </h3>
              <p className="text-3xl font-bold">0%</p>
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mt-12"
      >
        <h2 className="text-2xl font-bold mb-6">Recent API Logs</h2>
        <div className="space-y-4">
          {/* TODO: Implement API logs */}
          <div className="bg-white rounded-lg p-6 shadow">
            <p className="text-gray-500">No recent API logs yet</p>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mt-12"
      >
        <h2 className="text-2xl font-bold mb-6">API Documentation</h2>
        <div className="bg-white rounded-lg p-6 shadow">
          <p className="text-gray-500 mb-4">
            Access comprehensive API documentation and guides
          </p>
          <a
            href="/developer/docs"
            className="inline-block px-6 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
          >
            View Documentation
          </a>
        </div>
      </motion.div>
    </div>
  )
}
