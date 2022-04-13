import { Box, Flex, Image } from "@chakra-ui/react"
import NavbarButton from "~/components/NavbarButton"
import NavbarDropdown from "~/components/NavbarDropdown"
import NavbarDropdownLink from "~/components/NavbarDropdownLink"

import logo from "~/images/logo.svg"
import penguin from "~/images/penguin.svg"

const Navbar = () => {
  return (
    <Box
      bg="white"
      borderColor="#eeeeee"
      borderBottomStyle="solid"
      borderBottomWidth={1}
      w="100%"
      h={90}
      paddingLeft={8}
      paddingRight={8}
      paddingTop={5}
      paddingBottom={5}
      color="black"
      fontWeight="light"
    >
      <a href="/" style={{ float: "left", height: "100%" }}>
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

      <Box float="right" h="100%">
        <NavbarDropdown title="About us" width={150}>
          <NavbarDropdownLink>What We Do</NavbarDropdownLink>
          <NavbarDropdownLink>Officers</NavbarDropdownLink>
          <NavbarDropdownLink>Meet Our Staff</NavbarDropdownLink>
        </NavbarDropdown>
      </Box>

      <Box float="right" h="100%">
        <NavbarButton>Documentation</NavbarButton>
      </Box>

      <Box float="right" h="100%">
        <NavbarDropdown title="Services" width={250}>
          <NavbarDropdownLink>Computer Lab</NavbarDropdownLink>
          <NavbarDropdownLink>Printing</NavbarDropdownLink>
          <NavbarDropdownLink>Personal Website Hosting</NavbarDropdownLink>
          <NavbarDropdownLink>Group Website Hosting</NavbarDropdownLink>
          <NavbarDropdownLink>SSH/SFTP (Shell)</NavbarDropdownLink>
          <NavbarDropdownLink>Email Hosting</NavbarDropdownLink>
          <NavbarDropdownLink>MySQL Database</NavbarDropdownLink>
          <NavbarDropdownLink>Software Mirrors</NavbarDropdownLink>
          <NavbarDropdownLink>High Performance Computing</NavbarDropdownLink>
        </NavbarDropdown>
      </Box>

      <Box float="right" h="100%">
        <NavbarButton>Staff Hours</NavbarButton>
      </Box>
    </Box>
  )
}

export default Navbar
