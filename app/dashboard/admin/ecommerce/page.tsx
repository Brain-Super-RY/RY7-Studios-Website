"use client";

import { motion } from "framer-motion";
import { DollarSign, ShoppingCart, Users, CreditCard, MoreVertical, PlusCircle } from "lucide-react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from "chart.js";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const ecommerceStats = [
  { label: 'Total Sales', value: '$12,450', change: '+15%', icon: <DollarSign className="w-6 h-6 text-green-500" /> },
  { label: 'Total Orders', value: '8,210', change: '+8%', icon: <ShoppingCart className="w-6 h-6 text-blue-500" /> },
  { label: 'New Customers', value: '1,200', change: '+25%', icon: <Users className="w-6 h-6 text-purple-500" /> },
  { label: 'Revenue', value: '$8,500', change: '+12%', icon: <CreditCard className="w-6 h-6 text-red-500" /> },
];

const salesData = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
  datasets: [
    {
      label: 'Sales',
      data: [1200, 1900, 3000, 5000, 2300, 3200, 4100],
      borderColor: '#3b82f6',
      backgroundColor: 'rgba(59, 130, 246, 0.2)',
      fill: true,
      tension: 0.4,
    },
  ],
};

const recentOrders = [
  { id: '#1234', customer: 'John Doe', amount: '$150.00', status: 'Shipped' },
  { id: '#1235', customer: 'Jane Smith', amount: '$250.50', status: 'Processing' },
  { id: '#1236', customer: 'Sam Wilson', amount: '$80.25', status: 'Delivered' },
  { id: '#1237', customer: 'Bucky Barnes', amount: '$320.00', status: 'Cancelled' },
];

const topProducts = [
  { name: 'Ergonomic Chair', sales: 120 },
  { name: 'Wireless Mouse', sales: 98 },
  { name: 'Mechanical Keyboard', sales: 75 },
];

export default function EcommerceDashboardPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <h1 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">Ecommerce Dashboard</h1>
      </motion.div>

      {/* Stat Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {ecommerceStats.map((stat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 * i }}
            className="bg-white dark:bg-gray-900/80 p-6 rounded-xl shadow-lg flex items-center justify-between"
          >
            <div>
              <div className="text-sm text-gray-500 dark:text-gray-400">{stat.label}</div>
              <div className="text-3xl font-bold my-1">{stat.value}</div>
              <div className="text-xs text-green-500">{stat.change} vs last month</div>
            </div>
            <div className="p-3 rounded-full bg-primary/10">{stat.icon}</div>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        {/* Sales Trend Chart */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="lg:col-span-2 bg-white dark:bg-gray-900/80 p-6 rounded-xl shadow-lg"
        >
          <h2 className="text-lg font-semibold mb-4">Sales Trend</h2>
          <div className="h-72">
            <Line data={salesData} options={{ responsive: true, maintainAspectRatio: false, plugins: { legend: { display: false } } }} />
          </div>
        </motion.div>

        {/* Top Selling Products */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="bg-white dark:bg-gray-900/80 p-6 rounded-xl shadow-lg"
        >
          <h2 className="text-lg font-semibold mb-4">Top Selling Products</h2>
          <ul className="space-y-4">
            {topProducts.map((product, i) => (
              <li key={i} className="flex items-center justify-between">
                <span>{product.name}</span>
                <span className="font-semibold">{product.sales} sales</span>
              </li>
            ))}
          </ul>
          <button className="mt-4 w-full flex items-center justify-center py-2 px-4 bg-primary/10 text-primary rounded-lg hover:bg-primary/20 transition">
            <PlusCircle className="w-5 h-5 mr-2" /> Add New Product
          </button>
        </motion.div>
      </div>

      {/* Recent Orders Table */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="bg-white dark:bg-gray-900/80 p-6 rounded-xl shadow-lg"
      >
        <h2 className="text-lg font-semibold mb-4">Recent Orders</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">Order ID</th>
                <th scope="col" className="px-6 py-3">Customer</th>
                <th scope="col" className="px-6 py-3">Amount</th>
                <th scope="col" className="px-6 py-3">Status</th>
                <th scope="col" className="px-6 py-3"></th>
              </tr>
            </thead>
            <tbody>
              {recentOrders.map((order, i) => (
                <tr key={i} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                  <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">{order.id}</td>
                  <td className="px-6 py-4">{order.customer}</td>
                  <td className="px-6 py-4">{order.amount}</td>
                  <td className="px-6 py-4">
                    <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                      order.status === 'Shipped' ? 'bg-blue-100 text-blue-800' :
                      order.status === 'Processing' ? 'bg-yellow-100 text-yellow-800' :
                      order.status === 'Delivered' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                    }`}>{order.status}</span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <button className="p-1 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700">
                      <MoreVertical className="w-5 h-5" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>
    </div>
  );
} 