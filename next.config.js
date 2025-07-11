/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        port: '',
      },
      {
        protocol: 'https',
        hostname: 'media.dev.to',
        port: '',
      },
      {
        protocol: 'https',
        hostname: 'media2.dev.to',
        port: '',
      },
    ],
  },
}

module.exports = nextConfig
