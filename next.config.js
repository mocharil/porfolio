const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: (config) => {
    config.resolve.alias['@'] = path.resolve(__dirname, 'src');
    return config;
  },
  images: {
    domains: ['fintech.id', 'planetsains.com', 'www.telkom.co.id', 'rec-data.kalibrr.com'],
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  // Add this configuration to allow loading images from the public directory
  assetPrefix: '',
  publicRuntimeConfig: {
    staticFolder: '/public',
  },
}

module.exports = nextConfig