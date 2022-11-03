import { navigate } from "gatsby"
import { useEffect } from "react"
import { getCookie } from "~/utils/cookie"

const CALNET_TOKEN_COOKIE_NAME = "ocfapi_calnet_token"

const useCalNetAuth = ({
  requireLogin = true,
  returnURL,
}: { requireLogin?: boolean; returnURL?: string } = {}): string | null => {
  const token = getCookie(CALNET_TOKEN_COOKIE_NAME) || null

  useEffect(() => {
    if (requireLogin && !token) {
      navigate("/auth/calnet", {
        state: { next: returnURL || window?.location.pathname },
      })?.catch(console.error)
    }
  }, [requireLogin, token, returnURL])

  return token
}

export default useCalNetAuth
