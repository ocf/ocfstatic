import { Box } from "@chakra-ui/react"
import { navigate, type PageProps } from "gatsby"
import { useEffect } from "react"
import { SEO } from "~/components/SEO"

const CalNetAuthCallbackPage = ({ location }: PageProps) => {
  useEffect(() => {
    const params = new URLSearchParams(location.search)
    const next = params.get("next") || "/"
    navigate(next)?.catch(console.error)
    // we only want this to effect to run once on page load
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <Box display="flex" alignItems="center" justifyContent="center" h="100vh">
      Authenticating with CalNet...
    </Box>
  )
}

export default CalNetAuthCallbackPage

export const Head = () => <SEO />
