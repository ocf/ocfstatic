import { type KeycloakTokenParsed } from "keycloak-js"
import { type AuthProviderProps } from "react-oidc-context"
import config from "../../gatsby-config"

const siteUrl = config.siteMetadata!["siteUrl"] as string

const keycloakConfig: AuthProviderProps = {
  authority: "https://auth.ocf.berkeley.edu/auth/realms/ocf",
  client_id: "ocfstatic",
  redirect_uri: `${
    typeof window !== "undefined" ? window.location.href : siteUrl
  }/`,
}

export default keycloakConfig

export interface OCFKeycloakToken extends KeycloakTokenParsed {
  auth_time: number
  scope: string
  email_verified: boolean
  name: string
  preferred_username: string
  given_name: string
  email: string
}
