import { Box, Flex, Image, Link, Text } from "@chakra-ui/react"
import React from "react"

import logo from "../images/logo.svg";
import penguin from "../images/penguin.svg";

const IndexPage = () => {
  return (
    <Box bg='tomato' w='100%' h={90} paddingLeft={8} paddingRight={8} paddingTop={5} paddingBottom={5} color='white'>
      <a href="/" style={{float: "left", height: "100%"}}>
        <Flex h="100%">
            <Image src={penguin} h="100%" />
            <Image src={logo} h="80%" position="relative" top="10%" />
        </Flex>
      </a>
    </Box>
  )
}

export default IndexPage
