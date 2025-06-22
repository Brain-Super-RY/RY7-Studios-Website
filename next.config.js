/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['localhost'],
  },
  webpack: (config, { isServer }) => {
    // Exclude bundling ws's optional native dependencies
    if (!isServer) {
      config.externals.push('bufferutil', 'utf-8-validate')
    }
    return config
  },
  transpilePackages: ['framer-motion'],
}

module.exports = nextConfig
