import type { GatsbyConfig } from "gatsby"

const config: GatsbyConfig = {
  siteMetadata: {
    title: `ocfstatic`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    {
      resolve: '@chakra-ui/gatsby-plugin',
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
  ],
}

export default config
