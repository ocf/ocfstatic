import { Button, ButtonProps, forwardRef } from "@chakra-ui/react"
import Link from "./InternalLink"

export type NavbarButtonProps = {
  href?: string
}

const NavbarButton = forwardRef<NavbarButtonProps & ButtonProps, "button">(
  ({ href, ...rest }, ref) => {
    return (
      <Button
        variant="ghost"
        color="gray.700"
        textDecoration="none"
        _hover={{ color: "gray.900", textDecoration: "none", opacity: "100%" }}
        fontWeight="normal"
        px={3}
        ref={ref}
        as={href ? Link : undefined}
        to={href}
        {...rest}
      />
    )
  }
)

export default NavbarButton
