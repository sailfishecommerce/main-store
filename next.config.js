/** @type {import('next').NextConfig} */

const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

module.exports = withBundleAnalyzer({
  images: {
    domains: ["cdn.schema.io"],
    formats: ["image/webp"],
  },
  reactStrictMode: true,
  staticPageGenerationTimeout: 240,
});
