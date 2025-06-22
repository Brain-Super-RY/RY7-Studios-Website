"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { X, AlertTriangle, CheckCircle, Info, ShieldAlert } from "lucide-react";

export default function UiElementsPage() {
  const [isModalOpen, setModalOpen] = useState(false);

  return (
    <div className="container mx-auto px-4 py-8">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">UI Elements</h1>

        {/* Typography */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 border-b pb-2">Typography</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-white dark:bg-gray-900/80 p-6 rounded-xl shadow-lg">
            <div>
              <h1 className="text-4xl font-bold">H1 - The quick brown fox</h1>
              <h2 className="text-3xl font-bold mt-2">H2 - The quick brown fox</h2>
              <h3 className="text-2xl font-bold mt-2">H3 - The quick brown fox</h3>
              <h4 className="text-xl font-bold mt-2">H4 - The quick brown fox</h4>
              <h5 className="text-lg font-bold mt-2">H5 - The quick brown fox</h5>
              <h6 className="text-base font-bold mt-2">H6 - The quick brown fox</h6>
            </div>
            <div>
              <p className="mb-2">This is a standard paragraph. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>
              <p className="text-gray-500 dark:text-gray-400">This is a muted paragraph. Nunc ut sem vitae risus tristique posuere.</p>
              <p className="text-sm mt-2">This is a small paragraph. Vestibulum commodo felis quis tortor.</p>
            </div>
          </div>
        </div>

        {/* Alerts */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 border-b pb-2">Alerts</h2>
          <div className="space-y-4 bg-white dark:bg-gray-900/80 p-6 rounded-xl shadow-lg">
            <div className="flex items-center p-4 text-sm text-blue-800 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-blue-400" role="alert">
              <Info className="w-5 h-5 mr-3"/> <span className="font-medium">Info alert!</span> Change a few things up and try submitting again.
            </div>
            <div className="flex items-center p-4 text-sm text-green-800 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400" role="alert">
              <CheckCircle className="w-5 h-5 mr-3"/> <span className="font-medium">Success alert!</span> You successfully read this important alert message.
            </div>
            <div className="flex items-center p-4 text-sm text-yellow-800 rounded-lg bg-yellow-50 dark:bg-gray-800 dark:text-yellow-400" role="alert">
              <AlertTriangle className="w-5 h-5 mr-3"/> <span className="font-medium">Warning alert!</span> Better check yourself, you're not looking too good.
            </div>
            <div className="flex items-center p-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
              <ShieldAlert className="w-5 h-5 mr-3"/> <span className="font-medium">Danger alert!</span> Change a few things up and try submitting again.
            </div>
          </div>
        </div>

        {/* Buttons and Badges */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div>
            <h2 className="text-2xl font-semibold mb-4 border-b pb-2">Buttons</h2>
            <div className="space-y-4 bg-white dark:bg-gray-900/80 p-6 rounded-xl shadow-lg">
              <div className="flex flex-wrap gap-4">
                <button className="px-6 py-2 bg-primary text-white rounded-lg shadow hover:bg-primary/90">Primary</button>
                <button className="px-6 py-2 bg-gray-500 text-white rounded-lg shadow hover:bg-gray-600">Secondary</button>
                <button className="px-6 py-2 bg-green-500 text-white rounded-lg shadow hover:bg-green-600">Success</button>
                <button className="px-6 py-2 bg-red-500 text-white rounded-lg shadow hover:bg-red-600">Danger</button>
                <button className="px-6 py-2 bg-yellow-500 text-white rounded-lg shadow hover:bg-yellow-600">Warning</button>
                <button className="px-6 py-2 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600">Info</button>
                <button className="px-6 py-2 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-lg shadow hover:bg-gray-200 dark:hover:bg-gray-600">Light</button>
                <button className="px-6 py-2 bg-gray-800 text-white rounded-lg shadow hover:bg-gray-900">Dark</button>
                <button className="px-6 py-2 text-primary hover:underline">Link</button>
              </div>
            </div>
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-4 border-b pb-2">Badges</h2>
            <div className="space-x-4 bg-white dark:bg-gray-900/80 p-6 rounded-xl shadow-lg">
              <span className="bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-blue-900 dark:text-blue-300">Blue</span>
              <span className="bg-green-100 text-green-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-green-900 dark:text-green-300">Green</span>
              <span className="bg-red-100 text-red-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-red-900 dark:text-red-300">Red</span>
              <span className="bg-yellow-100 text-yellow-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-yellow-900 dark:text-yellow-300">Yellow</span>
            </div>
          </div>
        </div>

        {/* Cards & Modal */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div>
            <h2 className="text-2xl font-semibold mb-4 border-b pb-2">Card</h2>
            <div className="bg-white dark:bg-gray-900/80 rounded-xl shadow-lg overflow-hidden">
              <img className="w-full h-48 object-cover" src="https://images.unsplash.com/photo-1559136555-2303baea1b33?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" alt="Card image"/>
              <div className="p-6">
                <h5 className="text-xl font-bold mb-2">Card Title</h5>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
                </p>
                <button className="px-4 py-2 bg-primary text-white rounded-lg">View Details</button>
              </div>
            </div>
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-4 border-b pb-2">Modal</h2>
            <div className="bg-white dark:bg-gray-900/80 p-6 rounded-xl shadow-lg text-center">
              <p className="mb-4">Click the button below to launch a demo modal.</p>
              <button onClick={() => setModalOpen(true)} className="px-6 py-2 bg-primary text-white rounded-lg shadow">
                Launch Modal
              </button>
            </div>
          </div>
        </div>

        {/* Modal Component */}
        {isModalOpen && (
          <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center">
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white dark:bg-gray-900 rounded-xl shadow-2xl w-full max-w-lg"
            >
              <div className="p-6 border-b flex justify-between items-center">
                <h4 className="text-xl font-semibold">Modal Title</h4>
                <button onClick={() => setModalOpen(false)} className="p-1 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700">
                  <X size={20}/>
                </button>
              </div>
              <div className="p-6">
                <p>This is the modal body. You can put any content you want here. For example, a form, some information, or a confirmation message.</p>
              </div>
              <div className="p-6 border-t flex justify-end gap-4">
                <button onClick={() => setModalOpen(false)} className="px-4 py-2 bg-gray-200 dark:bg-gray-700 rounded-lg">Close</button>
                <button onClick={() => setModalOpen(false)} className="px-4 py-2 bg-primary text-white rounded-lg">Save Changes</button>
              </div>
            </motion.div>
          </div>
        )}

      </motion.div>
    </div>
  );
} 