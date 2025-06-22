'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft, UploadCloud } from 'lucide-react';

export default function CreateServicePage() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // TODO: Implement form submission logic
    console.log('Form submitted');
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <Link href="/dashboard/seller/services" className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-8">
            <ArrowLeft className="w-5 h-5" />
            <span>Back to Manage Services</span>
        </Link>
        
        <div className="bg-gray-800/50 backdrop-blur-lg border border-gray-700 rounded-2xl shadow-lg p-8">
            <h1 className="text-3xl font-bold text-white mb-2">
                Create a New Service
            </h1>
            <p className="text-lg text-gray-400 mb-8">
                Fill out the details below to list your new service.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
                {/* Service Title */}
                <div>
                    <label htmlFor="title" className="block text-sm font-medium text-gray-300 mb-2">Service Title</label>
                    <input type="text" id="title" name="title" className="w-full bg-gray-900/70 border border-gray-700 rounded-lg text-white px-4 py-2 focus:ring-primary focus:border-primary" placeholder="e.g., Modern Logo Design" />
                </div>

                {/* Service Description */}
                <div>
                    <label htmlFor="description" className="block text-sm font-medium text-gray-300 mb-2">Service Description</label>
                    <textarea id="description" name="description" rows={4} className="w-full bg-gray-900/70 border border-gray-700 rounded-lg text-white px-4 py-2 focus:ring-primary focus:border-primary" placeholder="Describe what you offer in detail..."></textarea>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Price */}
                    <div>
                        <label htmlFor="price" className="block text-sm font-medium text-gray-300 mb-2">Price ($)</label>
                        <input type="number" id="price" name="price" min="0" step="0.01" className="w-full bg-gray-900/70 border border-gray-700 rounded-lg text-white px-4 py-2 focus:ring-primary focus:border-primary" placeholder="150.00" />
                    </div>

                    {/* Category */}
                    <div>
                        <label htmlFor="category" className="block text-sm font-medium text-gray-300 mb-2">Category</label>
                        <input type="text" id="category" name="category" className="w-full bg-gray-900/70 border border-gray-700 rounded-lg text-white px-4 py-2 focus:ring-primary focus:border-primary" placeholder="e.g., Design, Development" />
                    </div>
                </div>

                 {/* Image Upload */}
                 <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Service Image</label>
                    <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-600 border-dashed rounded-md">
                        <div className="space-y-1 text-center">
                        <UploadCloud className="mx-auto h-12 w-12 text-gray-500" />
                        <div className="flex text-sm text-gray-400">
                            <label htmlFor="file-upload" className="relative cursor-pointer bg-gray-800 rounded-md font-medium text-primary hover:text-primary-400 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-offset-gray-900 focus-within:ring-primary px-1">
                            <span>Upload a file</span>
                            <input id="file-upload" name="file-upload" type="file" className="sr-only" />
                            </label>
                            <p className="pl-1">or drag and drop</p>
                        </div>
                        <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
                        </div>
                    </div>
                </div>


                {/* Action Buttons */}
                <div className="flex justify-end gap-4 pt-4">
                    <Link href="/dashboard/seller/services">
                        <button type="button" className="px-6 py-2 bg-gray-700 text-white font-semibold rounded-lg hover:bg-gray-600 transition-colors">
                            Cancel
                        </button>
                    </Link>
                    <button type="submit" className="px-6 py-2 bg-primary text-white font-semibold rounded-lg hover:bg-primary-600 transition-colors">
                        Save Service
                    </button>
                </div>
            </form>
        </div>
      </motion.div>
    </div>
  );
} 