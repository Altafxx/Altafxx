/** @type {import('next').NextConfig} */
const nextConfig = {
    // output: 'export',
    images: { unoptimized: true },
    rewrites: () => {
        return [
            {
                source: '/',
                destination: '/v3',
            },
        ]
    }
}

module.exports = nextConfig
