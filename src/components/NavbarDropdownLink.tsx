import { Button } from "@chakra-ui/react"
import { ReactNode } from "react"

export type NavbarDropdownLinkProps = {
  href?: string
  children: ReactNode
}

const NavbarDropdownLink = ({ href, children }: NavbarDropdownLinkProps) => {
  return (
    <a href={href}>
      <Button
        w="100%"
        p={0}
        variant="ghost"
        fontWeight="light"
        color="gray.800"
        _hover={{ color: "black", bg: "gray.100" }}
        textAlign="left"
        borderRadius={0}
      >
        {children}
      </Button>
    </a>
  )
}

export default NavbarDropdownLink
