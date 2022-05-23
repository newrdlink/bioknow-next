/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = {
  nextConfig,
  images: {
    domains: ['avatars.mds.yandex.net', 'api.bioknow.ru']
  },
  compiler: {
    // ssr and displayName are configured by default
    styledComponents: true,
  },
}
