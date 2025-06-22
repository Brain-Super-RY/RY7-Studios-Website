'use client';

import { motion } from 'framer-motion';
import { Chrome, BarChart2 } from 'lucide-react';

const browserData = [
  { name: 'Chrome', sessions: '10,853 (52%)', bounce: '52.80%', transactions: '566 (92%)', icon: <Chrome className="w-5 h-5" /> },
  { name: 'Microsoft Edge', sessions: '2,545 (47%)', bounce: '47.54%', transactions: '498 (81%)', icon: <Chrome className="w-5 h-5" /> },
  { name: 'Internet Explorer', sessions: '1,836 (38%)', bounce: '41.12%', transactions: '455 (74%)', icon: <Chrome className="w-5 h-5" /> },
  { name: 'Opera', sessions: '1,958 (31%)', bounce: '36.82%', transactions: '361 (61%)', icon: <Chrome className="w-5 h-5" /> },
];

const trafficSourcesData = [
  { channel: 'Organic search', sessions: '10,853 (52%)', prev: '566 (92%)', change: '52.80%' },
  { channel: 'Direct', sessions: '2,545 (47%)', prev: '498 (81%)', change: '-17.20%' },
  { channel: 'Referal', sessions: '1,836 (38%)', prev: '455 (74%)', change: '41.12%' },
  { channel: 'Email', sessions: '1,958 (31%)', prev: '361 (61%)', change: '-8.24%' },
  { channel: 'Social', sessions: '1,566 (26%)', prev: '299 (49%)', change: '29.33%' },
];

export const BrowserTrafficSources = () => {
    return (
        <motion.div 
            initial={{ opacity: 0, y: 30 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ delay: 0.3, duration: 0.6 }} 
            className="bg-gray-800/50 backdrop-blur-lg border border-gray-700 p-6 rounded-2xl col-span-2"
        >
            <div className="font-bold text-white mb-4">By Browser</div>
            <table className="w-full text-sm text-left mb-6">
                <thead>
                    <tr className="border-b border-gray-700">
                        <th className="pb-2 font-semibold">Browser</th>
                        <th className="pb-2 font-semibold">Sessions</th>
                        <th className="pb-2 font-semibold">Bounce Rate</th>
                        <th className="pb-2 font-semibold">Transactions</th>
                    </tr>
                </thead>
                <tbody>
                    {browserData.map(item => (
                        <tr key={item.name}>
                            <td className="py-2 flex items-center gap-2">{item.icon} {item.name}</td>
                            <td>{item.sessions}</td>
                            <td>{item.bounce}</td>
                            <td>{item.transactions}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <div className="font-bold text-white mb-4">Traffic Sources</div>
            <table className="w-full text-sm text-left">
                <thead>
                    <tr className="border-b border-gray-700">
                        <th className="pb-2 font-semibold">Channel</th>
                        <th className="pb-2 font-semibold">Sessions</th>
                        <th className="pb-2 font-semibold">Prev. Period</th>
                        <th className="pb-2 font-semibold">Change</th>
                    </tr>
                </thead>
                <tbody>
                    {trafficSourcesData.map(item => (
                        <tr key={item.channel}>
                            <td className="py-2">{item.channel}</td>
                            <td>{item.sessions}</td>
                            <td>{item.prev}</td>
                            <td className={item.change.startsWith('-') ? 'text-red-500' : 'text-green-500'}>{item.change}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </motion.div>
    );
}; 