import { Box, Text, Flex, Link } from "@chakra-ui/react"
import { useEffect, useState } from "react"
import OCFColors from "~/definitions/OCFColors"

const Footer = () => {
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
    <Box
      bg="white"
      borderColor="#fafafa"
      color="#363636"
      w="100%"
      minHeight={250}
      paddingLeft={20}
      paddingRight={20}
      paddingTop={5}
      paddingBottom={5}
      fontWeight="light"
    >
      <Flex
        flexDirection="column"
        float="left"
        h="100%"
        w={screenSize.dynamicWidth >= 1000 ? "30%" : "100%"}
      >
        <Box flex={1}></Box>
        <Text flex={4} fontSize={24} fontWeight="semibold">
          Quick Links
        </Text>
        <Link flex={1}>Home</Link>
        <Link flex={1}>FAQ</Link>
        <Link flex={1}>Stats</Link>
        <Link flex={1}>Short URLs</Link>
        <Link flex={1}>Board Meeting Minutes</Link>
        <Link flex={1}>Manage my Account</Link>
        <Box flex={1}></Box>
      </Flex>
      <Flex
        flexDirection="column"
        textAlign="center"
        fontSize={12}
        float="right"
        paddingTop={50}
        paddingBottom={50}
        w={screenSize.dynamicWidth >= 1000 ? "70%" : "100%"}
      >
        <Box flex={5}></Box>
        <Text flex={1}>
          The Open Computing Facility is run entirely by student volunteers.
        </Text>
        <Text flex={1}>
          Copyright &copy; 1989–2022 Board of Directors of the Open Computing
          Facility.
        </Text>
        <Text flex={1}>
          The Open Computing Facility is a Chartered Program of the ASUC.
        </Text>
        <Text flex={1}></Text>
        <Text flex={1}>
          View the source code on <Link color={OCFColors.primary}>GitHub</Link>
        </Text>
        <Box flex={5}></Box>
      </Flex>
    </Box>
  )
}

export default Footer
