import { useAuth, type AuthContextProps } from "react-oidc-context"
import { useEffect } from "react"
import { OCFKeycloakToken } from "~/utils/keycloak"
import { type IdTokenClaims } from "oidc-client-ts"

interface OCFKeycloakUser {
  username: string
  name: string
  email: string
  raw: OCFKeycloakToken
}

const useKeycloakAuth = ({
  requireLogin = false,
}: { requireLogin?: boolean } = {}): {
  user: OCFKeycloakUser | undefined
  auth: AuthContextProps
} => {
  const auth = useAuth()

  useEffect(() => {
    if (requireLogin && !auth.isAuthenticated)
      auth.signinSilent().catch(console.error)
  }, [auth, auth.isAuthenticated, requireLogin])

  // eslint-disable-next-line
  const userProfile: IdTokenClaims | undefined = auth.user?.profile

  const user: OCFKeycloakUser | undefined = userProfile
    ? {
        username: userProfile.preferred_username ?? "",
        name: userProfile.name ?? "",
        email: userProfile.email ?? "",
        raw: userProfile as OCFKeycloakToken,
      }
    : undefined

  return {
    user,
    auth,
  }
}

export default useKeycloakAuth
