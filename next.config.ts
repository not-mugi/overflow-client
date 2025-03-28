import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
   i18n: {
    locales: ['en-US', 'mm'],
    defaultLocale: 'en-US',
  },
};

export default nextConfig;
