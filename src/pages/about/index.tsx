import { Box } from "@chakra-ui/react"
import { SEO } from "~/components/SEO"

const about = () => {
  return (
    <Box>
      <Box id="officers">
        <h1>Officer content</h1>
      </Box>
      <Box id="meetourstaff">
        <h1>meet our staff content</h1>
      </Box>
    </Box>
  )
}

export default about

export const Head = () => <SEO />
