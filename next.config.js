/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
  },
  basePath: "/"
};

module.exports = nextConfig;