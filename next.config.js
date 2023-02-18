/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  reactStrictMode: true,
  images: {
    loader: "akamai",
    path: "",
  },
  basePath: "/src/pages",
  assetPrefix: "/src/pages",
}

module.exports = nextConfig
