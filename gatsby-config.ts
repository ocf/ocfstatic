import type { GatsbyConfig } from "gatsby"
import { config as dotenv } from "dotenv"

dotenv({
  path: `.env.${process.env.NODE_ENV ?? "development"}`,
})

const config: GatsbyConfig = {
  pathPrefix: "/~kian/ocfstatic",
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
        /**
         * @property {boolean} [isUsingColorMode=true]
         * if false, this plugin will not use <ColorModeProvider />
         */
        isUsingColorMode: true,
      },
    },
    "gatsby-plugin-react-helmet",
  ],
}

export default config
