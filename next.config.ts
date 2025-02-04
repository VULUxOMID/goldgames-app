/** @type {import('next').NextConfig} */

const nextConfig = {
  output: 'standalone',
  typescript: {
    ignoreBuildErrors: false,
  },
  eslint: {
    ignoreDuringBuilds: false,
  },
  images: {
    remotePatterns: [],
    unoptimized: true
  },
  experimental: {
    optimizePackageImports: ['@vercel/analytics', '@vercel/speed-insights']
  }
};

module.exports = nextConfig;
