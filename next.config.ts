/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === 'production';
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: isProd ? '/6037_test' : '',
  assetPrefix: isProd ? '/6037_test/' : '',
};

module.exports = nextConfig;
