import { ReactNode } from "react"
import { Box } from "@chakra-ui/react"

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <Box
      w="100vw"
      minH="100vh"
      position="relative"
      h="max-content"
      bg="gray.50"
    >
      <Box
        minH={{
          sm: "initial",
          md: "unset",
          lg: "100vh",
          xl: "100vh",
        }}
        w="100%"
        maxW="72rem"
        mx="auto"
        px="2rem"
      >
        {children}
      </Box>
    </Box>
  )
}

export default Layout
