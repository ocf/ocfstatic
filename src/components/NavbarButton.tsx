import { Button } from "@chakra-ui/react"
import { MouseEventHandler, ReactNode } from "react"
import OCFColors from "~/definitions/OCFColors"

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
        _hover={{ color: OCFColors.primary, bg: "#fafafa" }}
        fontWeight="light"
        onClick={onClick}
      >
        {children}
      </Button>
    </a>
  )
}

export default NavbarButton
