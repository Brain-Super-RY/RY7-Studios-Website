"use client";

import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, PlusCircle } from "lucide-react";
import { useState } from "react";

const events = [
  { id: 1, title: 'Team Meeting', date: '2024-07-15', time: '10:00 AM', color: 'bg-blue-500' },
  { id: 2, title: 'Design Review', date: '2024-07-15', time: '02:00 PM', color: 'bg-purple-500' },
  { id: 3, title: 'Project Deadline', date: '2024-07-18', time: '11:59 PM', color: 'bg-red-500' },
  { id: 4, title: 'Client Call', date: '2024-07-22', time: '03:30 PM', color: 'bg-green-500' },
];

// This is a simplified calendar logic for UI purposes.
// A real implementation would use a date library like date-fns or moment.js
const days = Array.from({ length: 35 }, (_, i) => {
  const day = i - 3; // Start days from a few days in the previous month
  const isCurrentMonth = day > 0 && day <= 31;
  return { day, isCurrentMonth };
});
const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

export default function CalendarPage() {
  const [currentDate, setCurrentDate] = useState(new Date());

  return (
    <div className="container mx-auto px-4 py-8">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Calendar</h1>
          <button className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg shadow hover:bg-primary-dark transition">
            <PlusCircle size={20} />
            <span>Create Event</span>
          </button>
        </div>

        <div className="lg:flex gap-8">
          {/* Calendar Grid */}
          <div className="flex-grow bg-white dark:bg-gray-900/80 p-6 rounded-xl shadow-lg">
            <div className="flex justify-between items-center mb-4">
              <div className="flex items-center gap-2">
                <button className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700">
                  <ChevronLeft />
                </button>
                <h2 className="text-xl font-semibold">
                  {currentDate.toLocaleString('default', { month: 'long', year: 'numeric' })}
                </h2>
                <button className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700">
                  <ChevronRight />
                </button>
              </div>
              <div className="flex items-center gap-2 border border-gray-300 dark:border-gray-700 rounded-lg p-1">
                <button className="px-3 py-1 rounded-md text-sm hover:bg-gray-100 dark:hover:bg-gray-700">Day</button>
                <button className="px-3 py-1 rounded-md text-sm hover:bg-gray-100 dark:hover:bg-gray-700">Week</button>
                <button className="px-3 py-1 rounded-md text-sm bg-primary/10 text-primary">Month</button>
              </div>
            </div>
            
            <div className="grid grid-cols-7 gap-1">
              {weekDays.map(day => (
                <div key={day} className="text-center font-semibold text-sm text-gray-600 dark:text-gray-400 py-2">{day}</div>
              ))}
              {days.map(({ day, isCurrentMonth }, i) => (
                <div key={i} className={`h-24 border border-gray-200 dark:border-gray-800 rounded-md p-2 flex flex-col ${isCurrentMonth ? '' : 'text-gray-400 bg-gray-50 dark:bg-gray-800/50'}`}>
                  <span className={`font-semibold ${day === 15 ? 'bg-primary text-white rounded-full w-7 h-7 flex items-center justify-center' : ''}`}>{isCurrentMonth ? day : ''}</span>
                  {day === 15 && <div className="text-xs mt-1 text-blue-500 font-semibold">2 events</div>}
                  {day === 18 && <div className="text-xs mt-1 text-red-500 font-semibold">1 event</div>}
                </div>
              ))}
            </div>
          </div>

          {/* Upcoming Events */}
          <div className="lg:w-1/3 mt-8 lg:mt-0">
            <div className="bg-white dark:bg-gray-900/80 p-6 rounded-xl shadow-lg">
              <h3 className="text-lg font-semibold mb-4">Upcoming Events</h3>
              <div className="space-y-4">
                {events.map(event => (
                  <div key={event.id} className="flex items-center gap-4 p-3 rounded-lg bg-gray-50 dark:bg-gray-800">
                    <div className={`w-1 h-10 ${event.color} rounded-full`}></div>
                    <div>
                      <h4 className="font-semibold">{event.title}</h4>
                      <p className="text-sm text-gray-500">{event.date} at {event.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
} 