'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

const plans = [
  {
    name: 'Free',
    price: 'Free',
    features: [
      'Basic profile listing',
      'Limited project visibility',
      '15% platform fee',
      'Basic support',
      'Standard portfolio',
    ],
    cta: 'Get Started Free',
    link: '/register?plan=free',
  },
  {
    name: 'Pro',
    price: '$19.99/month',
    features: [
      'Enhanced profile visibility',
      'Priority project listing',
      '5% platform fee',
      'Priority support',
      'Premium portfolio',
      'Custom domain',
      'Analytics dashboard',
      'Advanced features',
    ],
    cta: 'Start Pro Plan',
    link: '/register?plan=pro',
    featured: true,
  },
]

export default function PricingPage() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12"
      >
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
          Choose Your Plan
        </h1>
        <p className="text-lg sm:text-xl text-gray-400">
          Find the perfect plan for your creative journey
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {plans.map((plan, index) => (
          <motion.div
            key={plan.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            className={`bg-gray-800/50 backdrop-blur-lg border border-gray-700 rounded-2xl shadow-lg p-8 flex flex-col ${
              plan.featured ? 'ring-2 ring-primary' : 'ring-1 ring-gray-700'
            }`}
          >
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold text-white mb-2">{plan.name}</h2>
              <p className="text-4xl font-bold text-primary">
                {plan.price}
              </p>
            </div>

            <ul className="space-y-3 mb-8 flex-grow">
              {plan.features.map((feature, idx) => (
                <li
                  key={idx}
                  className="flex items-center text-gray-300"
                >
                  <svg
                    className="w-5 h-5 text-primary mr-3 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  {feature}
                </li>
              ))}
            </ul>

            <div className="text-center mt-auto">
              <Link
                href={plan.link}
                className={`inline-block w-full px-8 py-3 rounded-lg font-semibold transition-colors ${
                  plan.featured
                    ? 'bg-primary text-white hover:bg-primary-600'
                    : 'bg-gray-700 text-white hover:bg-gray-600'
                }`}
              >
                {plan.cta}
              </Link>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mt-16 text-center"
      >
        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">Need help choosing a plan?</h2>
        <p className="text-gray-400">
          Contact our support team for personalized guidance
        </p>
        <Link
          href="/contact"
          className="inline-block mt-6 px-8 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary-600 transition-colors"
        >
          Contact Support
        </Link>
      </motion.div>
    </div>
  )
}
