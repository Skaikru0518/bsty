import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'standalone',
  allowedDevOrigins: ['192.168.50.180'],
  // Next.js 15+ handles CORS differently - no need for allowedDevOrigins
  // For local network testing, use: next dev -H 0.0.0.0
  experimental: {
    optimizePackageImports: ['@chakra-ui/react'],
  },
};

export default nextConfig;
