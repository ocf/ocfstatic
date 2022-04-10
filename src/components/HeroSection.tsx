import { Flex, Heading, Box, Button, Text } from "@chakra-ui/react"
import React from "react"
import OCFColors from "~/definitions/OCFColors"
import Logo from "~/components/Logo"

const HeroSection = () => {
  return (
    <Flex
      w="100%"
      h={600}
      bg={OCFColors.primary}
      p={20}
      fontWeight="light"
      color="white"
    >
      <Box flex={1} justifyContent="center">
        <Box p={10}>
          <Logo animated={true} />
        </Box>
      </Box>
      <Flex flex={1} flexDirection="column" textAlign="center">
        <Box flex={3}></Box>
        <Heading flex={1}>Open Computing Facility </Heading>
        <Text flex={1}>
          An all-volunteer student organization dedicated to free computing for
          all UC Berkeley students, faculty, and staff.{" "}
        </Text>
        <Flex flex={1} color="black">
          <Button
            h="100%"
            flex={1}
            marginLeft={5}
            marginRight={5}
            fontWeight="medium"
          >
            Create an Account
          </Button>
          <Button
            h="100%"
            flex={1}
            marginLeft={5}
            marginRight={5}
            fontWeight="medium"
          >
            Host your Website
          </Button>
        </Flex>
        <Box flex={3}></Box>
      </Flex>
    </Flex>
  )
}

export default HeroSection
