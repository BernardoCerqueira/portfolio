import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  images:{
    unoptimized: true,
    remotePatterns: [{
      protocol: "https",
      hostname: "github.com"
    }]
  }
};

export default nextConfig;
