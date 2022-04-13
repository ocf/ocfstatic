import type { GatsbyBrowser } from "gatsby"
import { ReactKeycloakProvider } from "@react-keycloak/web"
import keycloak from "~/utils/keycloak"

export const wrapPageElement: GatsbyBrowser["wrapPageElement"] = ({
  element,
}) => {
  return (
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
  )
}
