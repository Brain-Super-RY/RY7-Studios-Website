"use client";

import { motion } from "framer-motion";
import { Star, Folder, FileText, DownloadCloud, UploadCloud } from "lucide-react";
import toast from 'react-hot-toast';

// Dummy component for a range slider
const RangeSlider = () => (
  <div className="w-full">
    <input type="range" min="0" max="100" defaultValue="50" className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700" />
    <div className="flex justify-between text-xs px-1">
      <span>0</span>
      <span>25</span>
      <span>50</span>
      <span>75</span>
      <span>100</span>
    </div>
  </div>
);

// Dummy component for star rating
const StarRating = ({ rating }) => (
  <div className="flex items-center">
    {Array.from({ length: 5 }).map((_, i) => (
      <Star key={i} className={`w-6 h-6 ${i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} />
    ))}
    <span className="ml-2 text-sm font-medium text-gray-600 dark:text-gray-300">({rating}.0)</span>
  </div>
);

const files = [
  { name: 'Documents', type: 'folder', items: 3, size: '2.5 GB' },
  { name: 'Images', type: 'folder', items: 12, size: '5.1 GB' },
  { name: 'report-final.pdf', type: 'file', size: '15 MB' },
  { name: 'project-assets.zip', type: 'file', size: '1.2 GB' },
];

export default function AdvancedUiPage() {

  const notifySuccess = () => toast.success('Successfully toasted!');
  const notifyError = () => toast.error("This didn't work.");
  const notifyPromise = () => toast.promise(
    new Promise(res => setTimeout(res, 2000)),
    {
      loading: 'Saving...',
      success: <b>Settings saved!</b>,
      error: <b>Could not save.</b>,
    }
  );

  return (
    <div className="container mx-auto px-4 py-8">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Advanced UI</h1>

        {/* Toasts / Notifications */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 border-b pb-2">Toasts</h2>
          <div className="bg-white dark:bg-gray-900/80 p-6 rounded-xl shadow-lg">
            <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
              Click the buttons below to show different toast notifications. (Requires Toaster provider).
            </p>
            <div className="flex flex-wrap gap-4">
              <button onClick={notifySuccess} className="px-4 py-2 bg-green-500 text-white rounded-lg">Success Toast</button>
              <button onClick={notifyError} className="px-4 py-2 bg-red-500 text-white rounded-lg">Error Toast</button>
              <button onClick={notifyPromise} className="px-4 py-2 bg-blue-500 text-white rounded-lg">Promise Toast</button>
            </div>
          </div>
        </div>

        {/* Ratings and Range Slider */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div>
            <h2 className="text-2xl font-semibold mb-4 border-b pb-2">Ratings</h2>
            <div className="space-y-4 bg-white dark:bg-gray-900/80 p-6 rounded-xl shadow-lg">
              <StarRating rating={4} />
              <StarRating rating={5} />
              <StarRating rating={3} />
            </div>
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-4 border-b pb-2">Range Slider</h2>
            <div className="bg-white dark:bg-gray-900/80 p-6 rounded-xl shadow-lg">
              <RangeSlider />
            </div>
          </div>
        </div>
        
        {/* File Manager */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 border-b pb-2">File Manager</h2>
          <div className="bg-white dark:bg-gray-900/80 rounded-xl shadow-lg">
            <div className="p-4 border-b flex justify-between items-center">
              <h3 className="font-semibold">My Drive</h3>
              <div className="flex gap-2">
                <button className="flex items-center gap-2 px-3 py-1.5 text-sm border rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800">
                  <UploadCloud size={16} /> Upload
                </button>
                 <button className="flex items-center gap-2 px-3 py-1.5 text-sm border rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800">
                  <DownloadCloud size={16} /> Download
                </button>
              </div>
            </div>
            <div className="p-4">
              <ul className="space-y-2">
                {files.map((file, i) => (
                  <li key={i} className="flex items-center p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer">
                    {file.type === 'folder' ? <Folder className="w-6 h-6 text-yellow-500 mr-4"/> : <FileText className="w-6 h-6 text-blue-500 mr-4"/>}
                    <span className="font-medium flex-grow">{file.name}</span>
                    {file.items && <span className="text-sm text-gray-500 mr-8">{file.items} items</span>}
                    <span className="text-sm text-gray-500 w-24 text-right">{file.size}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

      </motion.div>
    </div>
  );
} 