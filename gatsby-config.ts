import type { GatsbyConfig } from "gatsby"
import { config as dotenv } from "dotenv"
import { createProxyMiddleware } from "http-proxy-middleware"
import type { Application as ExpressApp } from "express"

dotenv({
  path: `.env.${process.env.NODE_ENV ?? "development"}`,
})

const config: GatsbyConfig = {
  siteMetadata: {
    title: `ocfstatic`,
    siteUrl: `https://new.ocf.berkeley.edu`,
  },
  jsxRuntime: "automatic",
  plugins: [
    {
      resolve: "@chakra-ui/gatsby-plugin",
      options: {
        /**
         * @property {boolean} [resetCSS=true]
         * if false, this plugin will not use `<CSSReset />
         */
        resetCSS: true,
      },
    },
  ],
  developMiddleware: (app: ExpressApp) => {
    app.use(
      "/api",
      createProxyMiddleware({
        target: process.env.GATSBY_API_URL || "https://api.ocf.berkeley.edu",
        pathRewrite: {
          "^/api": "",
        },
        changeOrigin: true,
      })
    )
  },
}

export default config
