/** @type {import('next').NextConfig} */
// next.config.mjs
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "/home/",
        permanent: true,
      },
    ];
  },
  images: {
    domains: [
      "s3-alpha-sig.figma.com",
      "www.color-meanings.com",
      "lh3.googleusercontent.com",
      "source.unsplash.com", // ✅ Added Unsplash domain
    ],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "source.unsplash.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "plus.unsplash.com",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
