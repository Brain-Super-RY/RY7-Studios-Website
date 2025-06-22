'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { CheckCircle, Zap, ShieldCheck, HeartHandshake, Star, Code, Video, Bot, Tv, Briefcase } from 'lucide-react'

const Home = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative flex items-center justify-center h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-primary-900 text-white overflow-hidden">
        <div className="absolute inset-0 z-0">{/* Abstract SVG shapes */}</div>
        <div className="relative z-10 text-center p-4">
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-5xl md:text-7xl font-bold mb-4"
          >
            Beyond the Service. Built with Heart.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-md sm:text-lg md:text-xl text-gray-300 mb-8 max-w-3xl mx-auto"
            style={{ textShadow: '0 0 15px rgba(59, 130, 246, 0.5)' }}
          >
            Kami percaya pada kekuatan tim, kolaborasi, dan dukungan aftersales yang solid untuk mewujudkan visi digital Anda.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex justify-center gap-4"
          >
            <Link href="/portfolio" className="px-8 py-3 bg-primary text-white rounded-2xl hover:bg-primary-600 transition-colors">
              Explore Portfolio
            </Link>
            <Link href="/about" className="px-8 py-3 border border-white text-white rounded-2xl hover:bg-white hover:text-primary transition-colors">
              Learn More
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Aftersales Highlight Section */}
      <section className="py-16 sm:py-20 bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-white">We Don't Just Finish Projects</h2>
            <p className="text-xl text-primary mb-12">We take care of them after they're done.</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left mb-12">
               {[
                 { icon: <HeartHandshake className="w-10 h-10 text-primary" />, title: 'Dedicated Support', description: 'Tim kami siap membantu Anda bahkan setelah proyek selesai.' },
                 { icon: <Zap className="w-10 h-10 text-primary" />, title: 'Continuous Optimization', description: 'Kami memastikan solusi Anda berjalan optimal seiring waktu.' },
                 { icon: <ShieldCheck className="w-10 h-10 text-primary" />, title: 'Guaranteed Reliability', description: 'Jaminan keandalan dan performa untuk setiap hasil kerja.' },
               ].map((pillar, index) => (
                 <motion.div
                   key={index}
                   initial={{ opacity: 0, y: 20 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   transition={{ duration: 0.5, delay: index * 0.1 }}
                   className="p-8"
                 >
                   <div className="mb-4">{pillar.icon}</div>
                   <h3 className="text-xl font-semibold mb-2 text-white">{pillar.title}</h3>
                   <p className="text-gray-400">{pillar.description}</p>
                 </motion.div>
               ))}
            </div>
            {/* Placeholder for Case Study Carousel */}
            <div className="relative bg-gray-900 p-8 rounded-2xl shadow-lg text-white">
              <h3 className="text-2xl font-bold mb-4">Case Study Highlight</h3>
              <p className="text-gray-400">A mini slider showcasing successful projects will be here soon.</p>
            </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 sm:py-20 bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-white">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: <Code className="w-10 h-10 text-primary" />, title: 'Fullstack Development', description: 'Web & mobile applications built with modern technology.' },
              { icon: <Video className="w-10 h-10 text-primary" />, title: 'Video/Photo Production', description: 'High-quality visual content for your brand.' },
              { icon: <Bot className="w-10 h-10 text-primary" />, title: 'AI/ML Automation', description: 'Intelligent automation to streamline your business.' },
              { icon: <Tv className="w-10 h-10 text-primary" />, title: 'Broadcast & 3D Studio', description: 'Professional broadcasting and 3D animation services.' },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-8 rounded-2xl shadow-lg bg-gray-800/50 backdrop-blur-md border border-gray-700 transform hover:scale-105 transition-transform"
              >
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2 text-white">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-16 sm:py-20 bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-white">Featured Work</h2>
          <div className="flex justify-center space-x-4 mb-8">
            {['All', 'Development', 'Visual', 'Broadcast', 'AI'].map(cat => (
              <button key={cat} className="px-4 py-2 text-sm font-semibold text-gray-300 rounded-full hover:bg-primary hover:text-white transition-colors">{cat}</button>
            ))}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
             {[...Array(6)].map((_, i) => (
                <div key={i} className="bg-gray-900 rounded-2xl shadow-lg overflow-hidden group">
                    <div className="w-full h-48 bg-gray-700 flex items-center justify-center">
                      <Briefcase className="w-16 h-16 text-gray-500" />
                    </div>
                    <div className="p-6">
                        <h3 className="text-xl font-bold text-white">Project Title {i+1}</h3>
                        <p className="text-gray-400">Category</p>
                    </div>
                </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/portfolio" className="px-8 py-3 bg-primary text-white rounded-2xl hover:bg-primary-600 transition-colors">
                View Full Portfolio
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 sm:py-20 bg-gray-900">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                  <div className="w-full h-80 bg-gray-800 rounded-2xl flex items-center justify-center">
                      <p className="text-gray-500">Behind-the-scenes image here</p>
                  </div>
                  <div>
                      <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Our Vision & Mission</h2>
                      <p className="text-gray-400 mb-6">A brief text about the company's vision and mission, highlighting the journey and team values.</p>
                      {/* Placeholder for Timeline */}
                      <div className="relative border-l-2 border-primary pl-6 mt-8">
                          <h3 className="text-2xl font-bold text-white mb-4">Our Journey</h3>
                          <p className="text-gray-400">A timeline of RY7 Studios' development will be presented here.</p>
                      </div>
                  </div>
              </div>
          </div>
      </section>

      {/* Contact Section Placeholder (as per new design) */}
      <section className="py-16 sm:py-20 bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-white">Get in Touch</h2>
          <div className="max-w-4xl mx-auto bg-gray-900 p-8 rounded-2xl shadow-lg">
            <p className="text-center text-gray-400">This section will contain a contact form and a map, similar to the dedicated Contact page.</p>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 sm:py-20 bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-white">Pricing Plans</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Free Plan */}
            <div className="bg-gray-800/50 backdrop-blur-md border border-gray-700 p-8 rounded-2xl shadow-lg flex flex-col">
                <h3 className="text-2xl font-bold text-white mb-4">Free</h3>
                <p className="text-4xl font-bold text-white mb-6">$0</p>
                <ul className="space-y-4 text-gray-400 mb-8 flex-grow">
                    <li className="flex items-center"><CheckCircle className="w-5 h-5 text-green-500 mr-3" /> Basic Features</li>
                    <li className="flex items-center"><CheckCircle className="w-5 h-5 text-green-500 mr-3" /> 15% Platform Fee</li>
                </ul>
                <Link href="/register?plan=free" className="mt-auto block w-full text-center px-8 py-3 bg-gray-700 text-white rounded-2xl hover:bg-gray-600 transition-colors">
                    Get Started
                </Link>
            </div>
            {/* Pro Plan */}
            <div className="bg-gray-800/50 backdrop-blur-md border-2 border-primary p-8 rounded-2xl shadow-lg relative flex flex-col">
                <div className="absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary text-white text-sm font-bold rounded-full">
                    Most Popular
                </div>
                <h3 className="text-2xl font-bold text-primary mb-4">Pro</h3>
                <p className="text-4xl font-bold text-white mb-6">$50<span className="text-lg font-normal text-gray-400">/years</span></p>
                <ul className="space-y-4 text-gray-400 mb-8 flex-grow">
                    <li className="flex items-center"><CheckCircle className="w-5 h-5 text-green-500 mr-3" /> All Features</li>
                    <li className="flex items-center"><CheckCircle className="w-5 h-5 text-green-500 mr-3" /> 5% Platform Fee</li>
                    <li className="flex items-center"><CheckCircle className="w-5 h-5 text-green-500 mr-3" /> Priority Support</li>
                </ul>
                <Link href="/register?plan=pro" className="mt-auto block w-full text-center px-8 py-3 bg-primary text-white rounded-2xl hover:bg-primary-600 transition-colors">
                    Upgrade Plan
                </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section is removed as per new design, CTA is integrated in other sections */}

    </div>
  )
}

export default Home
