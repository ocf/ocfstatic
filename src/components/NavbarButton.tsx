import { Button } from "@chakra-ui/react"
import { ReactNode } from "react"
import OCFColors from "~/definitions/OCFColors"

export type NavbarButtonProps = {
  href?: string
  children: ReactNode
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
