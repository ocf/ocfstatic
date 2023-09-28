import { Box, Flex, Image, Text } from "@chakra-ui/react"
import Link from "~/components/InternalLink"
import NavbarButton from "~/components/NavbarButton"
import NavbarDropdown from "~/components/NavbarDropdown"
import NavbarDropdownLink from "~/components/NavbarDropdownLink"
import { useEffect, useState, type RefObject } from "react"
import useKeycloakAuth from "~/hooks/useKeycloakAuth"
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
      },
    )

    intersection.observe(intersectionElement.current)

    return () => {
      intersection.disconnect()
    }
    // this should only run on mount
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const { user, auth } = useKeycloakAuth()

  console.log(auth)

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
        maxW="7xl"
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
          <Image src={penguin} h="125%" alt="OCF Logo" />
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
          <NavbarButton href="https://www.ocf.berkeley.edu/staff-hours">
            Staff Hours
          </NavbarButton>
          <NavbarButton href="https://new.ocf.berkeley.edu/docs">
            Documentation
          </NavbarButton>
          <NavbarDropdown title="Services" width={250}>
            <NavbarDropdownLink href="https://new.ocf.berkeley.edu/docs/services/lab/">
              Computer Lab
            </NavbarDropdownLink>
            <NavbarDropdownLink href="https://new.ocf.berkeley.edu/docs/services/lab/printing">
              Printing
            </NavbarDropdownLink>
            <NavbarDropdownLink href="https://new.ocf.berkeley.edu/docs/services/web/">
              Personal Website Hosting
            </NavbarDropdownLink>
            <NavbarDropdownLink href="https://new.ocf.berkeley.edu/docs/services/webapps/">
              Group Website Hosting
            </NavbarDropdownLink>
            <NavbarDropdownLink href="https://new.ocf.berkeley.edu/docs/services/shell/">
              SSH/SFTP (Shell)
            </NavbarDropdownLink>
            <NavbarDropdownLink href="https://new.ocf.berkeley.edu/docs/services/vhost/mail/">
              Email Hosting
            </NavbarDropdownLink>
            <NavbarDropdownLink href="https://new.ocf.berkeley.edu/docs/services/mysql">
              MySQL Database
            </NavbarDropdownLink>
            <NavbarDropdownLink href="https://new.ocf.berkeley.edu/docs/services/mirrors">
              Software Mirrors
            </NavbarDropdownLink>
            <NavbarDropdownLink href="https://new.ocf.berkeley.edu/docs/services/hpc/">
              High Performance Computing
            </NavbarDropdownLink>
          </NavbarDropdown>
          <NavbarDropdown title="About" width={150}>
            <NavbarDropdownLink>What We Do</NavbarDropdownLink>
            <NavbarDropdownLink>Officers</NavbarDropdownLink>
            <NavbarDropdownLink>Meet Our Staff</NavbarDropdownLink>
          </NavbarDropdown>
          <NavbarButton
            mr={4}
            href="https://new.ocf.berkeley.edu/docs/internal/contact/"
          >
            Contact Us
          </NavbarButton>
          {auth.isAuthenticated ? (
            <NavbarDropdown title={user?.username ?? ""} width={150}>
              <NavbarDropdownLink disabled>{user?.name}</NavbarDropdownLink>
              <NavbarDropdownLink href="/account">Account</NavbarDropdownLink>
              <NavbarDropdownLink
                onClick={() => {
                  auth.signoutSilent().catch(console.error)
                }}
              >
                Log Out
              </NavbarDropdownLink>
            </NavbarDropdown>
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
                auth.signinRedirect().catch(console.error)
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
