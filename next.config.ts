
import type {NextConfig} from 'next';

const nextConfig: NextConfig = {
  // 静态导出：把网页打成纯静态文件，可直接部署到 Firebase Hosting / Vercel / 任意静态空间
  output: 'export',
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    // 静态导出下没有图片优化服务，关闭以兼容任意 <img>/next-image 用法
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'picsum.photos',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
