import { type KeycloakTokenParsed } from "keycloak-js"
import { type AuthProviderProps } from "react-oidc-context"

const keycloakConfig = {
  authority: "https://auth.ocf.berkeley.edu/auth/realms/ocf",
  client_id: "ocfstatic",
} as AuthProviderProps

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
