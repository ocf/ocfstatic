import { Box, Button, Flex, Image, Link, Popover, PopoverTrigger, Text } from "@chakra-ui/react"
import React from "react"

import logo from "../images/logo.svg";
import penguin from "../images/penguin.svg";

const IndexPage = () => {
  return (
    <Box bg='white' borderColor="#eeeeee" borderBottomStyle="solid" borderBottomWidth={1} w='100%' h={90} paddingLeft={8} paddingRight={8} paddingTop={5} paddingBottom={5} color='black'>
      <a href="/" style={{float: "left", height: "100%"}}>
        <Flex h="100%">
          <Image src={penguin} h="100%" />
          <Image src={logo} h="80%" position="relative" top="10%" />
        </Flex>
      </a>
      
      <Box float="right" h="100%">
        <Button variant="ghost" h="100%" _hover={{ color: "#68b4d3", bg:"#fafafa"}}>Login</Button>
      </Box>

      <Box float="right" h="100%">
        <Button variant="ghost" h="100%" _hover={{ color: "#68b4d3", bg:"#fafafa"}}>Contact Us</Button>
      </Box>

      <Box float="right" h="100%" >
        <Popover>
          <PopoverTrigger>
            <Button variant="ghost" h="100%" _hover={{ color: "#68b4d3", bg:"#fafafa"}}>About Us</Button>
          </PopoverTrigger>
        </Popover>
      </Box>

      <Box float="right" h="100%">
        <Button variant="ghost" h="100%" _hover={{ color: "#68b4d3", bg:"#fafafa"}}>Documentation</Button>
      </Box>

      <Box float="right" h="100%">
        <Popover>
          <PopoverTrigger>
            <Button variant="ghost" h="100%" _hover={{ color: "#68b4d3", bg:"#fafafa"}}>Services</Button>
          </PopoverTrigger>
        </Popover>
      </Box>

      <Box float="right" h="100%">
        <Button variant="ghost" h="100%" _hover={{ color: "#68b4d3", bg:"#fafafa"}}>Staff Hours</Button>
      </Box>
    </Box>
  )
}

export default IndexPage
