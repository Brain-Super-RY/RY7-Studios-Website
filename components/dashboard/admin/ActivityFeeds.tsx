'use client';

import Image from 'next/image'; // Import next/image
import { motion } from 'framer-motion';
import { CheckCircle, AlertCircle, Star, MessageSquare } from 'lucide-react';

const recentActivityData = [
  { time: '2 min ago', desc: 'Your order is placed', status: 'success' },
  { time: '10 min ago', desc: 'Meeting with designers', status: 'info' },
  { time: '40 min ago', desc: 'UX 3 Task complete', status: 'success' },
  { time: '2 hrs ago', desc: 'Payment Successfull', status: 'success' },
  { time: '3 hrs ago', desc: 'Server warning', status: 'warning' },
];

const recentCommentsData = [
  { user: 'Alice', comment: 'Great dashboard!', time: '2 min ago', avatar: '/avatar1.png' },
  { user: 'Bob', comment: 'Love the new design.', time: '10 min ago', avatar: '/avatar2.png' },
  { user: 'Charlie', comment: 'Very intuitive UI.', time: '1 hr ago', avatar: '/avatar3.png' },
];

const statusIcons: { [key: string]: JSX.Element } = {
    success: <CheckCircle className="w-5 h-5 text-green-500" />,
    info: <Star className="w-5 h-5 text-blue-500" />,
    warning: <AlertCircle className="w-5 h-5 text-yellow-500" />,
};

export const ActivityFeeds = () => {
    return (
        <div className="space-y-8">
            {/* Recent Activity */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.6 }}
                className="bg-gray-800/50 backdrop-blur-lg border border-gray-700 p-6 rounded-2xl"
            >
                <div className="font-bold text-white mb-4">Recent Activity</div>
                <ul>
                    {recentActivityData.map((item, i) => (
                        <li key={i} className="flex items-center gap-4 mb-3 last:mb-0">
                            {statusIcons[item.status]}
                            <div>
                                <div>{item.desc}</div>
                                <div className="text-xs text-gray-400">{item.time}</div>
                            </div>
                        </li>
                    ))}
                </ul>
            </motion.div>

            {/* Recent Comments */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="bg-gray-800/50 backdrop-blur-lg border border-gray-700 p-6 rounded-2xl"
            >
                <div className="flex justify-between items-center mb-4">
                    <div className="font-bold text-white">Recent Comments</div>
                    <MessageSquare className="w-5 h-5 text-gray-400"/>
                </div>
                <ul>
                    {recentCommentsData.map((item, i) => (
                         <li key={i} className="flex items-start gap-4 mb-4 last:mb-0">
                            <Image src={item.avatar} alt={item.user} width={40} height={40} className="rounded-full"/>
                            <div>
                                <div className="font-semibold">{item.user}</div>
                                <p className="text-sm text-gray-300">{item.comment}</p>
                                <div className="text-xs text-gray-500 mt-1">{item.time}</div>
                            </div>
                        </li>
                    ))}
                </ul>
            </motion.div>
        </div>
    );
}; 