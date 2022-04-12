import { Flex, Heading, Box, Button, Text } from "@chakra-ui/react"
import React, { useEffect, useState } from "react"
import OCFColors from "~/definitions/OCFColors"
import Logo from "~/components/Logo"

const HeroSection = () => {
  const [screenSize, getDimension] = useState({
    dynamicWidth: window.innerWidth,
    dynamicHeight: window.innerHeight,
  })

  const setDimension = () => {
    getDimension({
      dynamicWidth: window.innerWidth,
      dynamicHeight: window.innerHeight,
    })
  }

  useEffect(() => {
    window.addEventListener("resize", setDimension)

    return () => {
      window.removeEventListener("resize", setDimension)
    }
  }, [screenSize])

  return (
    <Flex
      w="100%"
      h={600}
      bg={OCFColors.primary}
      p={20}
      fontWeight="light"
      color="white"
      flexDirection={screenSize.dynamicWidth >= 1000 ? "row" : "column"}
    >
      <Flex justifyContent="center" alignItems="center" flex={1}>
        <Flex justifyContent="center" alignItems="center" h="100%">
          <Logo animated={true} />
        </Flex>
      </Flex>
      <Flex flex={1} flexDirection="column" textAlign="center">
        <Box flex={3}></Box>
        <Heading flex={1}>Open Computing Facility </Heading>
        <Text flex={1} margin={2}>
          An all-volunteer student organization dedicated to free computing for
          all UC Berkeley students, faculty, and staff.
        </Text>
        <Flex
          flex={screenSize.dynamicWidth >= 1000 ? 1 : 5}
          color="black"
          margin={5}
        >
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
        <Box flex={2}></Box>
      </Flex>
    </Flex>
  )
}

export default HeroSection
