/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "avatars.githubusercontent.com",
      "files.stripe.com",
      "lh3.googleusercontent.com",
    ],
  },
};

module.exports = nextConfig;
