import nextra from 'nextra'
import remarkMdxDisableExplicitJsx from 'remark-mdx-disable-explicit-jsx';

const isProd = process.env.NODE_ENV === "production";

const withNextra = nextra({
  theme: "nextra-theme-docs",
  themeConfig: "./theme.config.jsx",
  mdxOptions: {
    remarkPlugins: [
      [
        remarkMdxDisableExplicitJsx,
        { whiteList: ['table', 'thead', 'tbody', 'tr', 'th', 'td'] }
      ]
    ]
  },
  staticImage: true,
});

export default withNextra({
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
