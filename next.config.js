const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

module.exports = withBundleAnalyzer({
  reactStrictMode: false,
  trailingSlash: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
});
