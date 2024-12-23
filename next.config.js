/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    domains: ['i.pinimg.com'], 
  },
  images: { unoptimized: true },
};

module.exports = nextConfig;
