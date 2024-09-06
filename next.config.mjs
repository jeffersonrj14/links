/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.scdn.co'
      }
    ]
  },
  i18n: {
    locales: ['en-US'],
    defaultLocale: 'en-US'
  },
  async redirects() {
    return [
      {
        source: '/(personal|portfolio|personalwebsite|website|personal-website)',
        destination: 'https://jeffersonrj.com',
        permanent: true
      },
      {
        source: '/(email|mail)',
        destination: 'mailto:jefferson@jeffersonrj.com',
        permanent: true
      },
      {
        source: '/(github|gh|git)',
        destination: 'https://github.com/jeffersonrj14',
        permanent: true
      },
      {
        source: '/(discord|dc)',
        destination: 'https://discordapp.com/users/606481557615542273',
        permanent: true
      },
      {
        source: '/(twitter|x)',
        destination: 'https://x.com/jeffersonrj14',
        permanent: true
      },
      {
        source: '/(kofi|support|donate|ko-fi)',
        destination: 'https://ko-fi.com/jeffersonrj14',
        permanent: true
      }
    ]
  }
}

export default nextConfig
