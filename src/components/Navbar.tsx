import { Flex, Image, Text } from "@chakra-ui/react"
import Link from "~/components/InternalLink"
import NavbarButton from "~/components/NavbarButton"
import NavbarDropdown from "~/components/NavbarDropdown"
import NavbarDropdownLink from "~/components/NavbarDropdownLink"
import { useKeycloak } from "@react-keycloak/web"
import { OCFKeycloakToken } from "~/utils/keycloak"

import penguin from "~/images/penguin.svg"

const Navbar = () => {
  const { keycloak } = useKeycloak()

  return (
    <Flex
      bg="transparent"
      w="100%"
      h={90}
      py={5}
      color="black"
      fontWeight="light"
      alignItems="center"
      justifyContent="space-between"
    >
      <Link
        to="/"
        h="100%"
        textDecoration="none"
        display="flex"
        gap={4}
        alignItems="center"
      >
        <Image src={penguin} h="75%" />
        <Text
          fontSize="xl"
          fontWeight="semibold"
          _hover={{ textDecoration: "none" }}
          textDecoration="none"
        >
          Open Computing Facility
        </Text>
      </Link>

      <Flex
        h="100%"
        alignItems="center"
        gap={2}
        display={{ base: "none", lg: "flex" }}
      >
        <NavbarButton>Staff Hours</NavbarButton>

        <NavbarButton>Documentation</NavbarButton>

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

        <NavbarDropdown title="About" width={150}>
          <NavbarDropdownLink>What We Do</NavbarDropdownLink>
          <NavbarDropdownLink>Officers</NavbarDropdownLink>
          <NavbarDropdownLink>Meet Our Staff</NavbarDropdownLink>
        </NavbarDropdown>

        <NavbarButton>Contact Us</NavbarButton>

        {keycloak.authenticated ? (
          <NavbarButton
            fontWeight="medium"
            _hover={{ bg: "gray.200" }}
            onClick={() => {
              keycloak.logout().catch(console.error)
            }}
          >
            {(keycloak.tokenParsed as OCFKeycloakToken).preferred_username}
          </NavbarButton>
        ) : (
          <NavbarButton
            variant="solid"
            fontWeight="medium"
            _hover={{ bg: "gray.200" }}
            onClick={() => {
              keycloak.login().catch(console.error)
            }}
          >
            Log In
          </NavbarButton>
        )}
      </Flex>
    </Flex>
  )
}

export default Navbar
