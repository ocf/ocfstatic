import { Flex } from "@chakra-ui/react"
import { ReactNode } from "react"

const Section = ({ children }: { children: ReactNode }) => {
  return (
    <Flex direction="column" align="center" maxW={{ xl: "1200px" }} m="0 auto">
      {children}
    </Flex>
  )
}

export default Section
