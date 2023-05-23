/** @type {import('next').NextConfig} */
const NodePolyfillPlugin = require("node-polyfill-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");

const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.discordapp.com',
      },
    ],
  },
  rewrites: async () => [
    {
      source: '/embeddings',
      destination: 'http://localhost:5000'
    },
  ],
  webpack: (
    config, 
    { buildId, dev, isServer, defaultLoaders, nextRuntime, webpack }
    ) => {

    config.resolve.extensions.push(".ts", ".tsx");
    config.resolve.fallback = { fs: false };

    config.plugins.push(
    // new NodePolyfillPlugin(), 
    new CopyPlugin({
      patterns: [
        {
          from: './node_modules/onnxruntime-web/dist/ort-wasm.wasm',
          to: 'static/chunks/',
        },             {
          from: './node_modules/onnxruntime-web/dist/ort-wasm-simd.wasm',
          to: 'static/chunks/',
        },          
          {
            from: './model',
            to: 'static/chunks/',
          },
        ],
      }),
    );

    return config;
  } 
}

module.exports = nextConfig
