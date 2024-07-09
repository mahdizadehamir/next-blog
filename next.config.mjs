/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'imgupload.storage.c2.liara.space',
        // ...
      },
      {
        protocol: 'https',
        hostname: 'next-blog.liara.run/api/auth/session',
        // ...
      },
      {
        protocol: 'https',
        hostname: 'avatars.githubusercontent.com',
        // ...
      },
    ],
  },
};

export default nextConfig;
