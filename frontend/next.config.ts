import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: "http://localhost:3333/api/:path*",
      },
    ];
  },
  /* config options here */
  reactCompiler: true,

};

export default nextConfig;
