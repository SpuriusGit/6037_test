/** @type {import('next').NextConfig} */

const nextConfig = {
    output: 'export',
    basePath: '',
    assetPrefix: '',
    images: {
        unoptimized: true,
    },
    experimental: {
        turbo: false,
    },
};

export default nextConfig;