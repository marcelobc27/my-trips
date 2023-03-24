/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === 'production'

const withPWA = require('next-pwa')({
  dest: 'public',
  disable: !isProd
})

const imagesConfig = {
  
}

const nextConfig = {
  reactStrictMode: true,
}

module.exports = withPWA({
  nextConfig,
  images: {
    domains: ['media.graphassets.com'],
  }
})
