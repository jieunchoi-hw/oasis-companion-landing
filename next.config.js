/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath:
    process.env.NODE_ENV === "production" ? "/oasis-companion-landing" : "",
  assetPrefix:
    process.env.NODE_ENV === "production" ? "/oasis-companion-landing" : "",
};

module.exports = nextConfig;
