import { Box, Flex, Image, Text } from "@chakra-ui/react"
import Link from "~/components/InternalLink"
import NavbarButton from "~/components/NavbarButton"
import NavbarDropdown from "~/components/NavbarDropdown"
import NavbarDropdownLink from "~/components/NavbarDropdownLink"
import { useKeycloak } from "@react-keycloak/web"
import { OCFKeycloakToken } from "~/utils/keycloak"
import { useEffect, useState, type RefObject } from "react"
import { navigate } from "gatsby"

import penguin from "~/images/penguin.svg"

const Navbar = ({
  intersectionElement,
  intersectionThreshold = 1.0,
}: {
  intersectionElement?: RefObject<HTMLElement>
  intersectionThreshold?: number
}) => {
  const [scrolling, setScrolling] = useState(false)
  useEffect(() => {
    if (!intersectionElement?.current) {
      setScrolling(true)
      return
    }

    const intersection = new IntersectionObserver(
      ([entry]) => setScrolling(!entry.isIntersecting),
      {
        threshold: [intersectionThreshold],
      }
    )

    intersection.observe(intersectionElement.current)

    return () => {
      intersection.disconnect()
    }
    // this should only run on mount
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const { keycloak } = useKeycloak()

  return (
    <Box
      bgColor={scrolling ? "whiteAlpha.800" : "transparent"}
      backdropFilter="auto"
      backdropBlur={scrolling && "md"}
      transition="ease-in-out background-color 200ms"
      w="100vw"
      h="16"
      position="fixed"
      zIndex={20}
      left={0}
    >
      <Flex
        w="100%"
        px="2rem"
        mx="auto"
        maxW="6xl"
        h="100%"
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
          _hover={{ textDecoration: "none" }}
          display="flex"
          gap={4}
          alignItems="center"
        >
          <Image src={penguin} h="125%" />
          <Text fontSize="xl" fontWeight="semibold" textDecoration="none">
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
          <NavbarButton href="/docs">Documentation</NavbarButton>
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
          <NavbarButton mr={4}>Contact Us</NavbarButton>
          {keycloak.authenticated ? (
            <NavbarButton
              fontWeight="medium"
              px={4}
              onClick={() => {
                navigate("/account")?.catch(console.error)
                // keycloak.logout().catch(console.error)
              }}
            >
              {(keycloak.tokenParsed as OCFKeycloakToken).preferred_username}
            </NavbarButton>
          ) : (
            <NavbarButton
              variant="solid"
              fontWeight="medium"
              background="gray.800"
              color="gray.100"
              borderWidth={1}
              borderColor="gray.800"
              _hover={{ bg: "transparent", color: "gray.800" }}
              h={8}
              px={4}
              onClick={() => {
                keycloak.login().catch(console.error)
              }}
            >
              Log In
            </NavbarButton>
          )}
        </Flex>
      </Flex>
    </Box>
  )
}

export default Navbar
