/** @type {import('next').NextConfig} */
const nextConfig = {
  productionBrowserSourceMaps: false, // Disable source maps in production
  webpack: (config, { isServer }) => {
    if (isServer) {
      config.externals.push('ws');
    }
    return config;
  },
  images: {
    domains: ['images.unsplash.com', 'i.pravatar.cc'],
  },
};

module.exports = nextConfig;
