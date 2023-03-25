/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  pageExtensions: ['page.tsx', 'api.tsx', 'api.ts'],

  images: {
    domains: ['example.com'],
  },

  publicRuntimeConfig: {
    // Define aqui o caminho para o diretório onde estão as imagens
    imagesPath: '/images',
  },
}

module.exports = nextConfig
