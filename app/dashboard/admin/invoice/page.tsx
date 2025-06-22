"use client";

import { motion } from "framer-motion";
import { Printer, Send, Download } from "lucide-react";

const invoice = {
  id: 'INV-2024-007',
  date: 'July 15, 2024',
  dueDate: 'August 14, 2024',
  from: {
    name: 'RY7 Studios',
    address: '123 Creative Lane, Webville, 12345',
    email: 'contact@ry7.com',
  },
  to: {
    name: 'John Doe',
    company: 'Doe Inc.',
    address: '456 Business Ave, Client City, 67890',
    email: 'john.doe@example.com',
  },
  items: [
    { description: 'Admin Dashboard Template', qty: 1, price: 1500.00 },
    { description: 'Customization Services', qty: 10, price: 50.00 },
    { description: 'Priority Support (12 months)', qty: 1, price: 350.00 },
  ],
  subtotal: 2350.00,
  tax: 188.00, // 8%
  total: 2538.00,
  notes: 'Thank you for your business. Please pay within 30 days.',
};

export default function InvoicePage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white dark:bg-gray-900/80 p-8 rounded-xl shadow-lg max-w-4xl mx-auto"
      >
        {/* Header and Actions */}
        <div className="flex justify-between items-start mb-8">
          <div>
            <h1 className="text-3xl font-bold text-primary">INVOICE</h1>
            <p className="text-gray-500 dark:text-gray-400">{invoice.id}</p>
          </div>
          <div className="flex items-center gap-2">
            <button className="flex items-center gap-2 px-4 py-2 border rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800">
              <Printer size={16} /> Print
            </button>
            <button className="flex items-center gap-2 px-4 py-2 border rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800">
              <Send size={16} /> Send
            </button>
            <button className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg shadow">
              <Download size={16} /> Download PDF
            </button>
          </div>
        </div>

        {/* From/To Details */}
        <div className="grid grid-cols-2 gap-8 mb-8">
          <div>
            <h3 className="font-semibold mb-2">From:</h3>
            <p className="font-bold">{invoice.from.name}</p>
            <p className="text-sm text-gray-600 dark:text-gray-300">{invoice.from.address}</p>
            <p className="text-sm text-gray-600 dark:text-gray-300">{invoice.from.email}</p>
          </div>
          <div className="text-right">
            <h3 className="font-semibold mb-2">To:</h3>
            <p className="font-bold">{invoice.to.name}</p>
            <p className="text-sm text-gray-600 dark:text-gray-300">{invoice.to.address}</p>
            <p className="text-sm text-gray-600 dark:text-gray-300">{invoice.to.email}</p>
          </div>
        </div>

        {/* Invoice Items Table */}
        <div className="overflow-x-auto mb-8">
          <table className="w-full text-left">
            <thead className="bg-gray-50 dark:bg-gray-800">
              <tr>
                <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase">Description</th>
                <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase text-center">Qty</th>
                <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase text-right">Price</th>
                <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase text-right">Total</th>
              </tr>
            </thead>
            <tbody>
              {invoice.items.map((item, i) => (
                <tr key={i} className="border-b dark:border-gray-700">
                  <td className="px-6 py-4 whitespace-nowrap font-medium">{item.description}</td>
                  <td className="px-6 py-4 text-center">{item.qty}</td>
                  <td className="px-6 py-4 text-right">${item.price.toFixed(2)}</td>
                  <td className="px-6 py-4 text-right">${(item.qty * item.price).toFixed(2)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Totals Section */}
        <div className="flex justify-end mb-8">
          <div className="w-full max-w-sm">
            <div className="flex justify-between py-2 border-b dark:border-gray-700">
              <span className="text-gray-600 dark:text-gray-300">Subtotal</span>
              <span className="font-medium">${invoice.subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between py-2 border-b dark:border-gray-700">
              <span className="text-gray-600 dark:text-gray-300">Tax (8%)</span>
              <span className="font-medium">${invoice.tax.toFixed(2)}</span>
            </div>
            <div className="flex justify-between py-2 text-lg font-bold text-primary">
              <span>Grand Total</span>
              <span>${invoice.total.toFixed(2)}</span>
            </div>
          </div>
        </div>

        {/* Notes */}
        <div>
          <h4 className="font-semibold mb-2">Notes:</h4>
          <p className="text-sm text-gray-600 dark:text-gray-300">{invoice.notes}</p>
        </div>
      </motion.div>
    </div>
  );
} 