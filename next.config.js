/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
    unoptimized: true,
  },
  experimental: {
    optimizePackageImports: ['@heroicons/react', 'react-icons'],
  },
  webpack: (config) => {
    config.optimization.minimize = true;
    return config;
  },
}

module.exports = nextConfig