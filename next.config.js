/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    API_KEY: '9d723e2a314f7a4d9684342df385a9a4'
  },
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'openweathermap.org',
        port: '',
        pathname: '/img/wn/**',
      }
    ]
  }
}

module.exports = nextConfig
