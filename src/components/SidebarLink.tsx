import { Box, Link, Text } from "@chakra-ui/react"
import { ReactNode } from "react"

const SidebarLink = ({
  linkGroup,
  to,
  children,
}: {
  linkGroup: string
  to: string
  children: ReactNode
}) => {
  const pathname = window.location.pathname
  const hash = window.location.hash

  const isActive =
    pathname.length > 1 &&
    to.indexOf("#") >= 0 &&
    hash.length > 1 &&
    pathname.substring(1) === linkGroup &&
    to.substring(to.indexOf("#") + 1) === hash.substring(1)

  return (
    <Box padding={1} bgColor={isActive ? "gray.200" : "white"} borderRadius={5}>
      <Link href={to}>
        <Text fontWeight={isActive ? "semibold" : "normal"}>{children}</Text>
      </Link>
    </Box>
  )
}

export default SidebarLink
