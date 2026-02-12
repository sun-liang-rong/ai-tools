const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: "http://localhost:3333/api/:path*",
      },
      {
        source: '/img-proxy/:path*',
        destination: 'https://:path*',
      }
    ];
  },
  reactStrictMode: false,
  images: {
     remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.google.com',
      },
    ],
  },
}

module.exports = nextConfig
