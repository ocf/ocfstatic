import { Button } from "@chakra-ui/react"
import React from "react"
import OCFColors from "~/definitions/OCFColors"

export type NavbarButtonProps = {
  href?: string
  children: any
}

const NavbarButton = ({ href, children }: NavbarButtonProps) => {
  return (
    <a href={href}>
      <Button
        variant="ghost"
        h="100%"
        _hover={{ color: OCFColors.primary, bg: "#fafafa" }}
        fontWeight="light"
      >
        {children}
      </Button>
    </a>
  )
}

export default NavbarButton
