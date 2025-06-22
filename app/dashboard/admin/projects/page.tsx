"use client";

import { motion } from "framer-motion";
import { PlusCircle, Search, Filter, ChevronDown, MoreVertical } from "lucide-react";

const statusColors = {
  'In Progress': 'bg-blue-500',
  'Completed': 'bg-green-500',
  'Pending': 'bg-yellow-500',
  'Cancelled': 'bg-red-500'
} as const;

type ProjectStatus = keyof typeof statusColors;

type Project = {
  name: string;
  category: string;
  team: string[];
  status: ProjectStatus;
  progress: number;
  deadline: string;
};

const projects: Project[] = [
  {
    name: 'Rizz App Development',
    category: 'Web Development',
    team: ['/path-to-avatar/avatar-1.jpg', '/path-to-avatar/avatar-2.jpg', '/path-to-avatar/avatar-3.jpg'],
    status: 'In Progress',
    progress: 75,
    deadline: '25-Jul-2024'
  },
  {
    name: 'Mannat-studio.com',
    category: 'UI/UX Design',
    team: ['/path-to-avatar/avatar-4.jpg', '/path-to-avatar/avatar-5.jpg'],
    status: 'Completed',
    progress: 100,
    deadline: '12-Jun-2024'
  },
  {
    name: 'Admin Dashboard',
    category: 'Web Development',
    team: ['/path-to-avatar/avatar-6.jpg', '/path-to-avatar/avatar-7.jpg', '/path-to-avatar/avatar-8.jpg', '/path-to-avatar/avatar-9.jpg'],
    status: 'In Progress',
    progress: 50,
    deadline: '18-Aug-2024'
  },
  {
    name: 'Mobile App for Android',
    category: 'Mobile Development',
    team: ['/path-to-avatar/avatar-1.jpg', '/path-to-avatar/avatar-5.jpg'],
    status: 'Pending',
    progress: 20,
    deadline: '30-Sep-2024'
  },
  {
    name: 'Marketing Campaign',
    category: 'Marketing',
    team: ['/path-to-avatar/avatar-2.jpg', '/path-to-avatar/avatar-4.jpg'],
    status: 'In Progress',
    progress: 90,
    deadline: '15-Jul-2024'
  }
];

export default function ProjectsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Projects</h1>
          <button className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg shadow hover:bg-primary-dark transition">
            <PlusCircle size={20} />
            <span>Create Project</span>
          </button>
        </div>

        <div className="flex justify-between items-center mb-6 bg-white dark:bg-gray-900/80 p-4 rounded-xl shadow-lg">
          <div className="flex items-center gap-4">
            <div className="relative">
              <Search size={20} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input type="text" placeholder="Search projects..." className="pl-10 pr-4 py-2 w-64 border border-gray-300 dark:border-gray-700 rounded-lg bg-gray-50 dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-primary" />
            </div>
            <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800">
              <Filter size={16} />
              <span>Filter</span>
              <ChevronDown size={16} />
            </button>
          </div>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 * i }}
            className="bg-white dark:bg-gray-900/80 p-6 rounded-xl shadow-lg flex flex-col justify-between"
          >
            <div>
              <div className="flex justify-between items-start">
                <div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">{project.category}</div>
                  <h3 className="text-lg font-bold my-1 hover:text-primary transition">{project.name}</h3>
                </div>
                <button className="p-1 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700">
                  <MoreVertical size={20} />
                </button>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-300 mt-2 mb-4">A brief description of the project goes here. This can be a summary of the goals and objectives.</p>
              
              <div className="flex -space-x-2 mb-4">
                {project.team.map((avatar, j) => (
                  <img key={j} src={`https://i.pravatar.cc/40?img=${i * 5 + j + 1}`} alt="member" className="w-8 h-8 rounded-full border-2 border-white dark:border-gray-900" />
                ))}
                <div className="w-8 h-8 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center text-xs font-semibold text-gray-600 dark:text-gray-300 border-2 border-white dark:border-gray-900">
                  +2
                </div>
              </div>
            </div>

            <div>
              <div className="flex justify-between items-center text-sm mb-1">
                <span className="font-semibold">Progress</span>
                <span className={`${statusColors[project.status]} text-white px-2 py-0.5 rounded-full text-xs`}>{project.status}</span>
              </div>
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5 mb-2">
                <div className={`${statusColors[project.status]} h-2.5 rounded-full`} style={{ width: `${project.progress}%` }}></div>
              </div>
              <div className="text-xs text-gray-500 dark:text-gray-400 text-right">
                Deadline: {project.deadline}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
} 