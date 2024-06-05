/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "xsgames.co",
        // ...
      },
      {
        protocol: "https",
        hostname: "avatars.githubusercontent.com",
        // ...
      },
    ],
  },
};

export default nextConfig;
