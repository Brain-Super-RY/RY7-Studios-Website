"use client";

import { Line } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from "chart.js";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: false,
    },
    title: {
      display: false,
    },
  },
  scales: {
    x: {
      grid: {
        display: false,
      },
      ticks: {
        color: '#9ca3af', // gray-400
      },
    },
    y: {
      grid: {
        color: '#374151', // gray-700
      },
      ticks: {
        color: '#9ca3af', // gray-400
      },
    },
  },
};

const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'];

const data = {
  labels,
  datasets: [
    {
      label: 'Visitors',
      data: labels.map(() => Math.floor(Math.random() * 2000)),
      borderColor: '#3b82f6', // primary
      backgroundColor: 'rgba(59, 130, 246, 0.5)',
      tension: 0.4,
    },
  ],
};

export function AudienceChart() {
  return <Line options={options} data={data} />;
} 