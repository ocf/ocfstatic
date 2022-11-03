import { Box } from "@chakra-ui/react"
import { type PageProps } from "gatsby"
import { useEffect } from "react"
import { SEO } from "~/components/SEO"
import { API_HOST } from "~/utils/api"

interface LocationState {
  next: string
}

const CalNetAuthPage = ({ location }: PageProps<null, null, LocationState>) => {
  useEffect(() => {
    const next = location.state?.next || "/"
    window.location.href = `${API_HOST()}/login/calnet?next=${encodeURIComponent(
      window.location.origin +
        "/auth/calnet/callback?next=" +
        encodeURIComponent(next)
    )}`
    // we only want this to effect to run once on page load
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <Box display="flex" alignItems="center" justifyContent="center" h="100vh">
      Redirecting to CalNet...
    </Box>
  )
}

export default CalNetAuthPage

export const Head = () => <SEO />
