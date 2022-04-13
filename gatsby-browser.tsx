import type { GatsbyBrowser } from "gatsby"
import { ReactKeycloakProvider } from "@react-keycloak/web"
import keycloak from "~/utils/keycloak"
import { Helmet } from "react-helmet"

export const wrapPageElement: GatsbyBrowser["wrapPageElement"] = ({
  element,
}) => {
  return (
    <>
      <Helmet>
        <title>Open Computing Facility</title>
      </Helmet>
      <ReactKeycloakProvider
        authClient={keycloak}
        initOptions={{
          promiseType: "native",
          onLoad: "check-sso",
          silentCheckSsoRedirectUri:
            window.location.origin + "/silent-check-sso.html",
        }}
      >
        {element}
      </ReactKeycloakProvider>
    </>
  )
}
