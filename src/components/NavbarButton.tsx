import { Button } from "@chakra-ui/react"
import { MouseEventHandler, ReactNode } from "react"

export type NavbarButtonProps = {
  href?: string
  children: ReactNode
  onClick?: MouseEventHandler
}

const NavbarButton = ({ href, children, onClick }: NavbarButtonProps) => {
  return (
    <a href={href}>
      <Button
        variant="ghost"
        h="100%"
        _hover={{ color: "primary", bg: "gray.100" }}
        fontWeight="light"
        onClick={onClick}
      >
        {children}
      </Button>
    </a>
  )
}

export default NavbarButton
