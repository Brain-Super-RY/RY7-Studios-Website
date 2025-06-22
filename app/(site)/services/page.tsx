'use client';

import { useState, useEffect } from 'react'; // Added useEffect
import { motion } from 'framer-motion';
import { Search, Filter } from 'lucide-react';
import Image from 'next/image'; // Import next/image
import { useDebounce } from '@/hooks/useDebounce'; // Import useDebounce

// Placeholder data for services
const services = [
  {
    id: 1,
    title: 'Modern Logo Design',
    seller: 'CreativeMinds',
    price: 150,
    rating: 4.9,
    imageUrl: 'https://images.unsplash.com/photo-1579546929518-9e396f3cc809?q=80&w=2070&auto=format&fit=crop',
  },
  {
    id: 2,
    title: 'Full Stack Web App',
    seller: 'DevGurus',
    price: 2500,
    rating: 4.8,
    imageUrl: 'https://images.unsplash.com/photo-1559028006-44a136b5a165?q=80&w=1974&auto=format&fit=crop',
  },
  {
    id: 3,
    title: 'Mobile UI/UX Design',
    seller: 'PixelPerfect',
    price: 800,
    rating: 5.0,
    imageUrl: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=2070&auto=format&fit=crop',
  },
  {
    id: 4,
    title: '3D Product Animation',
    seller: 'AnimatorsInc',
    price: 1200,
    rating: 4.9,
    imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop',
  },
  {
    id: 5,
    title: 'Professional Voice Over',
    seller: 'VoiceMasters',
    price: 200,
    rating: 4.7,
    imageUrl: 'https://images.unsplash.com/photo-1590602848952-a99549553412?q=80&w=2070&auto=format&fit=crop',
  },
  {
    id: 6,
    title: 'SEO Content Writing',
    seller: 'WordWizards',
    price: 500,
    rating: 4.8,
    imageUrl: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=2070&auto=format&fit=crop',
  },
];

const ServiceCard = ({ service }: { service: typeof services[0] }) => (
  <motion.div
    layout
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    exit={{ opacity: 0, scale: 0.8 }}
    transition={{ type: 'spring' }}
    className="bg-gray-800/50 backdrop-blur-lg rounded-2xl overflow-hidden shadow-lg border border-gray-700 hover:border-primary transition-colors"
  >
    <div className="relative w-full h-48"> {/* Added relative container for Image */}
      <Image
        src={service.imageUrl}
        alt={service.title}
        layout="fill" // Changed to fill
        objectFit="cover" // Changed to objectFit
        className="rounded-t-2xl" // Ensure top corners are rounded if needed
      />
    </div>
    <div className="p-4">
      <h3 className="text-lg font-bold text-white truncate">{service.title}</h3>
      <p className="text-sm text-gray-400">by {service.seller}</p>
      <div className="flex justify-between items-center mt-4">
        <p className="text-xl font-semibold text-primary">${service.price}</p>
        <div className="flex items-center">
          <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
          <span className="text-white ml-1">{service.rating.toFixed(1)}</span>
        </div>
      </div>
    </div>
  </motion.div>
);

export default function ServicesPage() {
  const [inputValue, setInputValue] = useState('');
  const debouncedSearchTerm = useDebounce(inputValue, 300); // 300ms delay
  const [filteredServices, setFilteredServices] = useState(services);

  useEffect(() => {
    if (debouncedSearchTerm) {
      setFilteredServices(
        services.filter(service =>
          service.title.toLowerCase().includes(debouncedSearchTerm.toLowerCase()) ||
          service.seller.toLowerCase().includes(debouncedSearchTerm.toLowerCase())
        )
      );
    } else {
      setFilteredServices(services);
    }
  }, [debouncedSearchTerm]);

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12"
      >
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
          Browse Services
        </h1>
        <p className="text-lg sm:text-xl text-gray-400">
          Discover the perfect talent for your next big project.
        </p>
      </motion.div>

      {/* Search and Filter Bar */}
      <div className="mb-12 flex flex-col sm:flex-row gap-4 justify-center">
        <div className="relative flex-grow max-w-lg">
          <input
            type="text"
            placeholder="Search for services or sellers..."
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            className="w-full pl-12 pr-4 py-3 bg-gray-800/60 border border-gray-700 rounded-lg text-white focus:ring-primary focus:border-primary transition-all"
          />
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
        </div>
        <button className="flex-shrink-0 flex items-center justify-center gap-2 px-6 py-3 bg-gray-700 text-white font-semibold rounded-lg hover:bg-gray-600 transition-colors">
          <Filter className="w-5 h-5" />
          <span>Filters</span>
        </button>
      </div>

      {/* Services Grid */}
      <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredServices.map(service => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </motion.div>

      {filteredServices.length === 0 && (
         <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16"
         >
            <h2 className="text-2xl font-semibold text-white">No Services Found</h2>
            <p className="text-gray-400 mt-2">Try adjusting your search term.</p>
         </motion.div>
      )}
    </div>
  );
} 