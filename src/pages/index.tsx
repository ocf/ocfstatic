import { Box, Button, Flex, Image, Link, Popover, PopoverTrigger, Text } from "@chakra-ui/react";
import React from "react";
import NavbarButton from "../components/NavbarButton";

import logo from "../images/logo.svg";
import penguin from "../images/penguin.svg";

const IndexPage = () => {
  return (
    <Box bg='white' borderColor="#eeeeee" borderBottomStyle="solid" borderBottomWidth={1} w='100%' h={90} paddingLeft={8} paddingRight={8} paddingTop={5} paddingBottom={5} color='black' fontWeight="light">
      <a href="/" style={{float: "left", height: "100%"}}>
        <Flex h="100%">
          <Image src={penguin} h="100%" />
          <Image src={logo} h="80%" position="relative" top="10%" />
        </Flex>
      </a>
      
      <Box float="right" h="100%">
        <NavbarButton>Login</NavbarButton>
      </Box>

      <Box float="right" h="100%">
        <NavbarButton>Contact Us</NavbarButton>
      </Box>

      <Box float="right" h="100%" >
        <Popover>
          <PopoverTrigger>
            <NavbarButton>About Us</NavbarButton>
          </PopoverTrigger>
        </Popover>
      </Box>

      <Box float="right" h="100%">
        <NavbarButton>Documentation</NavbarButton>
      </Box>

      <Box float="right" h="100%">
        <Popover>
          <PopoverTrigger>
            <NavbarButton>Services</NavbarButton>
          </PopoverTrigger>
        </Popover>
      </Box>

      <Box float="right" h="100%">
        <NavbarButton>Staff Hours</NavbarButton>
      </Box>
    </Box>
  )
}

export default IndexPage;
