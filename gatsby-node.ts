import type { GatsbyNode } from "gatsby"
import path from "path"

export const onCreateWebpackConfig: GatsbyNode["onCreateWebpackConfig"] = ({
  actions,
}) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        "~": path.resolve(__dirname, "/src"),
      },
      fallback: {
        assert: false,
        crypto: false,
        http: false,
        https: false,
        os: false,
        path: false,
        querystring: false,
        stream: false,
        url: false,
        util: false,
        zlib: false,
      },
    },
  })
}
