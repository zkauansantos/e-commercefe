/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'www.artwalk.com.br',
      'artwalk.vteximg.com.br',
      'sandbox.melhorenvio.com.br',
    ],
  },
  env: {
    SECRET_API_KEY: process.env.SECRET_API_KEY,
  },
};

module.exports = nextConfig;
