/** @type {import('next').NextConfig} */

const withPWA = require('next-pwa')({
  dest: 'public',
  disable: process.env.NODE_ENV === "development",
  register: true,
})

const nextConfig = {
  reactStrictMode: true,
  rewrites: async () => [
    {
      source: '/embeddings',
      destination: 'https://api.clipcraft.studio'
    },
  ],
  swcMinify: true,
  compiler: {
    removeConsole: process.env.NODE_ENV !== "development",
  },

}

module.exports = withPWA({
  ...nextConfig
}) 

