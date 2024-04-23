/** @type {import('next').NextConfig} */
const nextConfig = {
  // reactStrictMode: false,
  reactStrictMode: true,
  swcMinify: true,
  images: {
    unoptimized: true
  },
  output: "export"
}

module.exports = nextConfig
