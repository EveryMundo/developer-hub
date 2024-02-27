const isProd = process.env.NODE_ENV === "production";

const withNextra = require("nextra")({
  theme: "nextra-theme-docs",
  themeConfig: "./theme.config.jsx",
  staticImage: true,
});

module.exports = withNextra({
  output: "export",
  distDir: 'build/docs',
  basePath: isProd ? "/developer-hub/docs" : undefined,
  assetPrefix: isProd ? "/developer-hub/docs" : undefined,
  images: {
    unoptimized: true,
  },
});

// If you have other Next.js configurations, you can pass them as the parameter:
// module.exports = withNextra({ /* other next.js config */ })
