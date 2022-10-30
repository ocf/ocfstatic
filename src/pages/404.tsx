import { Button, Flex, Text } from "@chakra-ui/react"
import InternalLink from "~/components/InternalLink"
import { SEO } from "~/components/SEO"

const NotFoundPage = () => {
  return (
    <Flex alignItems="center" justifyContent="center" h="100vh" w="100vw">
      <Flex direction="column" gap={4} px={4}>
        <Text fontSize="2xl">Page not found</Text>
        <Text>Sorry, we couldn&lsquo;t find what you were looking for.</Text>
        <InternalLink to="/">
          <Button>Go home</Button>
        </InternalLink>
      </Flex>
    </Flex>
  )
}

export default NotFoundPage

export const Head = () => <SEO title="Not Found" />
