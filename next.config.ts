import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https", // or http
        hostname: "lh3.googleusercontent.com", // if your website has no www, drop it
      },
      {
        protocol: "https", // or http
        hostname: "utfs.io", // if your website has no www, drop it
      },
    ],
  },
};

export default nextConfig;
