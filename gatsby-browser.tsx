import { type GatsbyBrowser } from "gatsby"
import { AuthProvider } from "react-oidc-context"
import keycloakConfig from "~/utils/keycloak"
import { SWRConfig, SWRConfiguration } from "swr"
import "~/styles/inter.css"

export const wrapRootElement: GatsbyBrowser["wrapRootElement"] = ({
  element,
}) => {
  const options: SWRConfiguration = {
    fetcher: (url: string) => {
      if (process.env.NODE_ENV === "production" && url.startsWith("/api")) {
        url = "https://api.ocf.berkeley.edu" + url.replace("/api", "")
      }
      return fetch(url).then((r) => r.json())
    },
    refreshInterval: 15 * 1000, // 15 seconds
  }

  return (
    <SWRConfig value={options}>
      <AuthProvider {...keycloakConfig}>{element}</AuthProvider>
    </SWRConfig>
  )
}
