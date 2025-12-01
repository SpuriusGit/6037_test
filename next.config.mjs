/** @type {import('next').NextConfig} */

const nextConfig = {
    output: 'export',
    basePath: '/6037_test',
    assetPrefix: '/6037_test/',
    images: {
        unoptimized: true,
    },
    experimental: {
        turbo: false,
    },
};

export default nextConfig;