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
      destination: 'http://localhost:5000'
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

