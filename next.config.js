// ABOUTME: Next.js configuration for static export of wedding website
// ABOUTME: Enables static site generation for easy hosting anywhere

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;