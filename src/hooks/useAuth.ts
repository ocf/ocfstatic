import { useKeycloak } from "@react-keycloak/web"
import Keycloak from "keycloak-js"
import { useEffect } from "react"
import { OCFKeycloakToken } from "~/utils/keycloak"

interface User {
  username: string
  name: string
  email: string
  raw: OCFKeycloakToken
}

const useAuth = ({ requireLogin = false }: { requireLogin?: boolean } = {}): {
  user: User | undefined
  keycloak: Keycloak
} => {
  const { keycloak } = useKeycloak()

  useEffect(() => {
    if (requireLogin && !keycloak.authenticated)
      keycloak.login().catch(console.error)
  }, [keycloak, keycloak.authenticated, requireLogin])

  const token = keycloak.tokenParsed as OCFKeycloakToken | undefined

  return {
    user: token
      ? {
          username: token.preferred_username,
          name: token.name,
          email: token.email,
          raw: token,
        }
      : undefined,
    keycloak,
  }
}

export default useAuth
