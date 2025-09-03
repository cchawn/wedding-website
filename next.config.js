const isProd = process.env.NODE_ENV === 'production';
const isGitHubPages = process.env.GITHUB_PAGES === 'true';
const hasCustomDomain = process.env.CUSTOM_DOMAIN === 'true';

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  // Only add basePath/assetPrefix for GitHub Pages WITHOUT custom domain
  ...(isGitHubPages && !hasCustomDomain && {
    basePath: '/wedding-website',
    assetPrefix: '/wedding-website/',
  }),
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack']
    });
    return config;
  },
};

module.exports = nextConfig;