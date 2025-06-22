'use client';

import { motion } from 'framer-motion';
import { TrendingUp, Clock, Activity } from 'lucide-react';

const statCardsData = [
  {
    label: 'Sessions',
    value: '24k',
    change: '+8.5%',
    icon: <TrendingUp className="w-6 h-6 text-primary" />,
    desc: 'New Sessions Today',
  },
  {
    label: 'Avg. Sessions',
    value: '00:18',
    change: '+1.5%',
    icon: <Clock className="w-6 h-6 text-primary" />,
    desc: 'Weekly Avg. Sessions',
  },
  {
    label: 'Bounce Rate',
    value: '36.45%',
    change: '+8%',
    icon: <Activity className="w-6 h-6 text-primary" />,
    desc: 'Up Bounce Rate Weekly',
  },
];

export const StatCards = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
      {statCardsData.map((card, i) => (
        <motion.div
          key={card.label}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.1 }}
          className="bg-gray-800/50 backdrop-blur-lg border border-gray-700 p-6 rounded-2xl flex items-center gap-6"
        >
          <div className="bg-primary/20 p-4 rounded-full">
            {card.icon}
          </div>
          <div>
            <div className="text-3xl font-bold">{card.value}</div>
            <div className="text-gray-400">{card.label}</div>
            <div className={`text-sm ${card.change.startsWith('+') ? 'text-green-500' : 'text-red-500'}`}>
              {card.change}
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}; 