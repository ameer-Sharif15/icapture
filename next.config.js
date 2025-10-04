/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['images.unsplash.com', 'cdn.sanity.io', 'grainy-gradients.vercel.app'],
  },
};

module.exports = nextConfig;
