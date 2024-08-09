/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["localhost", "https://img.clerk.com", "img.clerk.com"],
  },
  experimental: {
    serverActions: true,
  },
  // async headers() {
  //   return [
  //     {
  //       source: '/(.*)',
  //       headers: [
  //         { key: 'Content-Security-Policy', value: "default-src 'self'; script-src 'self' https://cdn.jsdelivr.net; style-src 'self' 'unsafe-inline'; img-src 'self' data: https://img.clerk.com; connect-src 'self' https://api.clerk.com;" },
  //         { key: 'X-Content-Type-Options', value: 'nosniff' },
  //         { key: 'X-Frame-Options', value: 'DENY' },
  //         { key: 'X-XSS-Protection', value: '1; mode=block' },
  //         { key: 'Referrer-Policy', value: 'no-referrer' },
  //       ],
  //     },
  //   ];
  // },
};

module.exports = nextConfig;
