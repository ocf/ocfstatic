import type { GatsbyBrowser } from "gatsby"
import { AuthProvider } from "react-oidc-context"
import keycloakConfig from "~/utils/keycloak"

export const wrapRootElement: GatsbyBrowser["wrapRootElement"] = ({
  element,
}) => <AuthProvider {...keycloakConfig}>{element}</AuthProvider>
