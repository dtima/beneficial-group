import type { NextConfig } from 'next';
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./i18n.ts');

const nextConfig: NextConfig = {
  // Image optimization configuration
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },

  // Performance optimizations
  experimental: {
    optimizePackageImports: ['@next/font', 'next-intl'],
    // Turbopack font loading optimization
    turbo: {
      rules: {
        '*.woff2': ['file-loader'],
        '*.woff': ['file-loader'],
        '*.ttf': ['file-loader'],
        '*.eot': ['file-loader'],
      },
    },
  },

  // Compression
  compress: true,

  // Power by header removal
  poweredByHeader: false,

  // React strict mode
  reactStrictMode: true,

  // TypeScript
  typescript: {
    ignoreBuildErrors: false,
  },

  // ESLint
  eslint: {
    ignoreDuringBuilds: true, // Temporarily disabled for deployment
  },

  // Webpack optimizations
  webpack: (config, { dev, isServer }) => {
    // Font loading optimization
    config.module.rules.push({
      test: /\.(woff|woff2|eot|ttf|otf)$/,
      use: {
        loader: 'file-loader',
        options: {
          publicPath: '/_next/static/fonts/',
          outputPath: 'static/fonts/',
          name: '[name].[hash].[ext]',
        },
      },
    });

    // Optimize bundle size
    if (!dev && !isServer) {
      config.optimization.splitChunks = {
        chunks: 'all',
        cacheGroups: {
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendors',
            chunks: 'all',
          },
        },
      };
    }

    return config;
  },
};

export default withNextIntl(nextConfig);
