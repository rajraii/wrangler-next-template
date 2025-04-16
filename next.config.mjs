/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'img-cdn.publive.online',
      },
    ],
  },
};

export default nextConfig;
