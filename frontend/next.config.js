const API_HOST =
  process.env.NODE_ENV === 'development'
    ? 'http://localhost:3333/api'
    : 'http://127.0.0.1:3333/api';
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: `${API_HOST}/:path*`,
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
