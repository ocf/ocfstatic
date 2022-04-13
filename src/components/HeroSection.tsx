import { Flex, Heading, Box, Button, Text } from "@chakra-ui/react"
import OCFColors from "~/definitions/OCFColors"
import Logo from "~/components/Logo"

const HeroSection = () => {
  return (
    <Flex
      w="100%"
      bg={OCFColors.primary}
      p={20}
      gap={4}
      fontWeight="light"
      color="white"
      flexDirection={["column", null, "row"]}
      justifyContent="center"
    >
      <Flex justifyContent="center" alignItems="center" minWidth={64}>
        <Logo animated={true} />
      </Flex>
      <Flex flexDirection="column" textAlign="center">
        <Box flex={3}></Box>
        <Heading flex={1}>Open Computing Facility </Heading>
        <Text flex={1} margin={2}>
          An all-volunteer student organization dedicated to free computing for
          all UC Berkeley students, faculty, and staff.
        </Text>
        <Flex color="black" justifyContent="center" gap={4}>
          <Button fontWeight="medium">Create an Account</Button>
          <Button fontWeight="medium">Host your Website</Button>
        </Flex>
        <Box flex={2}></Box>
      </Flex>
    </Flex>
  )
}

export default HeroSection
