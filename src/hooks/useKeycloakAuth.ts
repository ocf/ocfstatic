import { useAuth, type AuthContextProps } from "react-oidc-context"
import { useEffect } from "react"
import { OCFKeycloakToken } from "~/utils/keycloak"

interface User {
  username: string
  name: string
  email: string
  raw: OCFKeycloakToken
}

const useKeycloakAuth = ({
  requireLogin = false,
}: { requireLogin?: boolean } = {}): {
  user: User | undefined
  auth: AuthContextProps
} => {
  const auth = useAuth()

  useEffect(() => {
    if (requireLogin && !auth.isAuthenticated)
      auth.signinSilent().catch(console.error)
  }, [auth, auth.isAuthenticated, requireLogin])

  const token = auth.user as OCFKeycloakToken | undefined

  return {
    user: token
      ? {
          username: token.preferred_username,
          name: token.name,
          email: token.email,
          raw: token,
        }
      : undefined,
    auth,
  }
}

export default useKeycloakAuth
