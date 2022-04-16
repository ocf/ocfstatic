import type { GatsbyBrowser } from "gatsby"
import Layout from "~/components/Layout"

export const wrapPageElement: GatsbyBrowser["wrapPageElement"] = ({
  element,
}) => {
  return <Layout>{element}</Layout>
}
