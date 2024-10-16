/** @type {import('next').NextConfig} */
const nextConfig = {
     reactStrictMode: true,
     output: 'standalone',
     eslint: {
          ignoreDuringBuilds: true
     },
     images: {
          remotePatterns: [
               {
                    protocol: 'https',
                    hostname: 'api.demo-avtozapchasti.uz',
               }
          ]
     }
};

export default nextConfig;
