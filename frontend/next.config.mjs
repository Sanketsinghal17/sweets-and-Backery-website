/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
    domains: ["sweets-and-backery-website.onrender.com"], // ✅ ADD THIS
  },
}

export default nextConfig