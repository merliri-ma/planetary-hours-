/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['your-image-domains'], // Add any external image domains
  },
  // Optional: Configure path aliases
  webpack: (config) => {
    config.resolve.alias['@components'] = './components';
    config.resolve.alias['@lib'] = './lib';
    return config;
  }
}

module.exports = nextConfig
