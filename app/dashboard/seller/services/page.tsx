'use client';

import { motion } from 'framer-motion';
import { Plus, Edit, Trash2 } from 'lucide-react';
import Link from 'next/link';

// Placeholder data for services - assume these belong to the current seller
const sellerServices = [
  {
    id: 1,
    title: 'Full Stack Web App',
    status: 'Active',
    price: 2500,
    orders: 5,
  },
  {
    id: 2,
    title: '3D Product Animation',
    status: 'Paused',
    price: 1200,
    orders: 2,
  },
    {
    id: 3,
    title: 'SEO Content Writing',
    status: 'Active',
    price: 500,
    orders: 12,
  },
];

export default function ManageServicesPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex justify-between items-center mb-12"
      >
        <div>
            <h1 className="text-3xl font-bold text-white mb-2">
            Manage Your Services
            </h1>
            <p className="text-lg text-gray-400">
            Create, update, and track your service listings.
            </p>
        </div>
        <Link href="/dashboard/seller/services/create">
            <button className="flex items-center gap-2 px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary-600 transition-colors">
                <Plus className="w-5 h-5" />
                <span>Create New Service</span>
            </button>
        </Link>
      </motion.div>

      <motion.div 
        layout
        className="bg-gray-800/50 backdrop-blur-lg border border-gray-700 rounded-2xl shadow-lg overflow-hidden"
      >
        <div className="overflow-x-auto">
          <table className="min-w-full text-white">
            <thead className="bg-gray-700/50">
              <tr>
                <th className="text-left py-3 px-6 font-semibold">Service Title</th>
                <th className="text-left py-3 px-6 font-semibold">Status</th>
                <th className="text-left py-3 px-6 font-semibold">Price</th>
                <th className="text-left py-3 px-6 font-semibold">Active Orders</th>
                <th className="text-left py-3 px-6 font-semibold">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-700">
              {sellerServices.map((service, index) => (
                <motion.tr 
                    key={service.id}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: index * 0.1 }}
                    className="hover:bg-gray-700/40 transition-colors"
                >
                  <td className="py-4 px-6 font-medium">{service.title}</td>
                  <td className="py-4 px-6">
                    <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                      service.status === 'Active' 
                        ? 'bg-green-500/20 text-green-300' 
                        : 'bg-yellow-500/20 text-yellow-300'
                    }`}>
                      {service.status}
                    </span>
                  </td>
                  <td className="py-4 px-6">${service.price}</td>
                  <td className="py-4 px-6">{service.orders}</td>
                  <td className="py-4 px-6">
                    <div className="flex items-center gap-4">
                      <button className="text-gray-400 hover:text-white transition-colors"><Edit className="w-5 h-5"/></button>
                      <button className="text-gray-400 hover:text-red-500 transition-colors"><Trash2 className="w-5 h-5"/></button>
                    </div>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>
    </div>
  );
} 