'use client';

import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';

const ContactPage = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
      <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-12 text-white">Contact Us</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
        {/* Contact Form */}
        <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-gray-800/50 backdrop-blur-lg border border-gray-700 p-8 rounded-2xl shadow-lg"
        >
          <h2 className="text-2xl font-bold mb-6 text-white">Send us a message</h2>
          <form>
            <div className="mb-6">
              <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">Name</label>
              <input type="text" id="name" className="w-full px-4 py-3 bg-gray-900/50 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent" placeholder="Your Name" />
            </div>
            <div className="mb-6">
              <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">Email</label>
              <input type="email" id="email" className="w-full px-4 py-3 bg-gray-900/50 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent" placeholder="you@example.com" />
            </div>
            <div className="mb-6">
              <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">Message</label>
              <textarea id="message" rows={4} className="w-full px-4 py-3 bg-gray-900/50 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent" placeholder="Your message..."></textarea>
            </div>
            <button type="submit" className="w-full px-8 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary-600 transition-colors">
              Send Message
            </button>
          </form>
        </motion.div>

        {/* Contact Info */}
        <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-white"
        >
          <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
                <Mail className="w-6 h-6 text-primary flex-shrink-0" />
                <span className="text-gray-300">contact@ry7studios.com</span>
            </div>
            <div className="flex items-center space-x-4">
                <Phone className="w-6 h-6 text-primary flex-shrink-0" />
                <span className="text-gray-300">+1 (123) 456-7890</span>
            </div>
            <div className="flex items-center space-x-4">
                <MapPin className="w-6 h-6 text-primary flex-shrink-0" />
                <span className="text-gray-300">123 Creative Lane, Digital City</span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ContactPage; 