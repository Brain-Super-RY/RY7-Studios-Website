'use client';

import Image from 'next/image'; // Import next/image
import { motion } from 'framer-motion';
import { Users } from 'lucide-react';
import { AudienceChart } from '@/components/dashboard/AudienceChart';

const audienceOverviewData = {
  newVisitors: 1282,
  loginedVisitors: 6,
  countries: [
    { name: 'USA', value: 35365, percent: '2.5%' },
    { name: 'Germany', value: 24865, percent: '1.2%' },
    { name: 'Spain', value: 18369, percent: '0.8%' },
    { name: 'Bahamas', value: 11325, percent: '2.5%' },
  ],
};

const loginedAvatars = [
    '/avatar1.png', '/avatar2.png', '/avatar3.png', '/avatar4.png', '/avatar5.png', '/avatar6.png'
];

export const AudienceOverview = () => {
    return (
        <motion.div 
            initial={{ opacity: 0, y: 30 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ delay: 0.2, duration: 0.6 }} 
            className="bg-gray-800/50 backdrop-blur-lg border border-gray-700 p-6 rounded-2xl"
        >
            <div className="flex justify-between items-center mb-4">
                <div className="font-bold text-white">Audience Overview</div>
                <Users className="w-5 h-5 text-gray-400" />
            </div>
            <div className="flex items-center gap-8 mb-4">
                <div>
                    <div className="text-3xl font-bold">{audienceOverviewData.newVisitors}</div>
                    <div className="text-sm text-gray-400">New Visitors</div>
                </div>
                <div>
                    <div className="text-3xl font-bold">{audienceOverviewData.loginedVisitors}</div>
                    <div className="text-sm text-gray-400">Logined Visitors</div>
                </div>
            </div>
            <div className="h-40 mb-4">
                <AudienceChart />
            </div>
            {audienceOverviewData.countries.map(country => (
                <div key={country.name} className="flex items-center justify-between text-sm mb-2">
                    <span>{country.name}</span>
                    <div className="flex items-center gap-2">
                        <span>{country.value}</span>
                        <span className="text-green-500">{country.percent}</span>
                    </div>
                </div>
            ))}
            <div className="flex -space-x-2 overflow-hidden mt-4">
                {loginedAvatars.map(avatar => (
                    <Image key={avatar} className="inline-block rounded-full ring-2 ring-gray-800" src={avatar} alt="User" width={32} height={32} />
                ))}
            </div>
        </motion.div>
    );
}; 