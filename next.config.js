/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
      AGENTS_INDEX_URL: process.env.AGENTS_INDEX_URL,
    },
  }
  
  module.exports = nextConfig