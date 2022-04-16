import { ReactKeycloakProvider } from "@react-keycloak/web"
import keycloak from "~/utils/keycloak"
import { Helmet } from "react-helmet"
import { SWRConfig, SWRConfiguration } from "swr"
import { ReactNode, useMemo } from "react"

const Layout = ({ children }: { children: ReactNode }) => {
  const options: SWRConfiguration = useMemo(
    () => ({
      fetcher: (url: string) => {
        if (process.env.NODE_ENV === "production" && url.startsWith("/api")) {
          url = "https://api.ocf.berkeley.edu" + url.replace("/api", "/")
        }
        return fetch(url).then((r) => r.json())
      },
      refreshInterval: 3 * 1000, // 3 seconds
    }),
    []
  )

  return (
    <>
      <Helmet>
        <title>Open Computing Facility</title>
      </Helmet>
      <SWRConfig value={options}>
        <ReactKeycloakProvider
          authClient={keycloak}
          initOptions={{
            promiseType: "native",
            onLoad: "check-sso",
            silentCheckSsoRedirectUri:
              window.location.origin + "/silent-check-sso.html",
          }}
        >
          {children}
        </ReactKeycloakProvider>
      </SWRConfig>
    </>
  )
}

export default Layout
