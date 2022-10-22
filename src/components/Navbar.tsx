import { Box, Button, Flex, Image } from "@chakra-ui/react"
import Link from "~/components/InternalLink"
import NavbarButton from "~/components/NavbarButton"
import NavbarDropdown from "~/components/NavbarDropdown"
import NavbarDropdownLink from "~/components/NavbarDropdownLink"
import { useKeycloak } from "@react-keycloak/web"
import { OCFKeycloakToken } from "~/utils/keycloak"

import logo from "~/images/logo.svg"
import penguin from "~/images/penguin.svg"

const Navbar = () => {
  const { keycloak } = useKeycloak()

  return (
    <Box
      bg="transparent"
      w="100%"
      h={90}
      px={8}
      py={5}
      color="black"
      fontWeight="light"
    >
      <Link to="/" float="left" h="100%">
        <Flex h="100%">
          <Image src={penguin} h="100%" />
          <Image src={logo} h="80%" position="relative" top="10%" />
        </Flex>
      </Link>

      <Flex float="right" h="100%" alignItems="center">
        {keycloak.authenticated ? (
          <NavbarButton
            onClick={() => {
              keycloak.logout().catch(console.error)
            }}
          >
            {(keycloak.tokenParsed as OCFKeycloakToken).preferred_username}
          </NavbarButton>
        ) : (
          <Button
            _hover={{ color: "primary", bg: "gray.100" }}
            onClick={() => {
              keycloak.login().catch(console.error)
            }}
          >
            Log In
          </Button>
        )}
      </Flex>

      <Box float="right" h="100%">
        <NavbarButton>Contact Us</NavbarButton>
      </Box>

      <Box float="right" h="100%">
        <NavbarDropdown title="About" width={150}>
          <NavbarDropdownLink>What We Do</NavbarDropdownLink>
          <NavbarDropdownLink>Officers</NavbarDropdownLink>
          <NavbarDropdownLink>Meet Our Staff</NavbarDropdownLink>
        </NavbarDropdown>
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
        <NavbarButton>Documentation</NavbarButton>
      </Box>

      <Box float="right" h="100%">
        <NavbarButton>Staff Hours</NavbarButton>
      </Box>
    </Box>
  )
}

export default Navbar
