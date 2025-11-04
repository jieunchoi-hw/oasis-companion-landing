/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath:
    process.env.NEXT_PUBLIC_BASE_PATH ||
    (process.env.NODE_ENV === "production" ? "/oasis-companion-landing" : ""),
  assetPrefix:
    process.env.NEXT_PUBLIC_BASE_PATH ||
    (process.env.NODE_ENV === "production" ? "/oasis-companion-landing" : ""),
};

module.exports = nextConfig;
