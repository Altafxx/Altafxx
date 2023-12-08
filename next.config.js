/** @type {import('next').NextConfig} */
const nextConfig = {
    async exportPathMap(defaultPathMap, { dev, dir, outDir, distDir, buildId }) {
        return {
            '/': { page: '/' },
        };
    },
}

export default nextConfig