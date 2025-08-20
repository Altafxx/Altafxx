/** @type {import('next').NextConfig} */
const nextConfig = {
    // output: 'export',
    images: { unoptimized: true },
    rewrites: () => {
        return [
            {
                source: '/',
                destination: '/v2',
            },
        ]
    }
}

module.exports = nextConfig
