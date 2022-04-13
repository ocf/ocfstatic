import Keycloak, { type KeycloakTokenParsed } from "keycloak-js"

const keycloak = Keycloak({
  realm: "ocf",
  url: "https://auth.ocf.berkeley.edu/auth/",
  clientId: "ocfstatic",
})

export default keycloak

export interface OCFKeycloakToken extends KeycloakTokenParsed {
  auth_time: number
  scope: string
  email_verified: boolean
  name: string
  preferred_username: string
  given_name: string
  email: string
}
