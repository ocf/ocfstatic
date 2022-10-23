import { Button, ButtonProps, forwardRef } from "@chakra-ui/react"
import Link from "./InternalLink"

export type NavbarButtonProps = {
  href?: string
}

const NavbarButton = forwardRef<NavbarButtonProps & ButtonProps, "button">(
  ({ href, ...rest }, ref) => {
    const button = (
      <Button
        variant="ghost"
        color="gray.700"
        _hover={{ color: "gray.900" }}
        fontWeight="normal"
        px={3}
        ref={ref}
        {...rest}
      />
    )

    if (href) {
      return <Link to={href}>{button}</Link>
    }

    return button
  }
)

export default NavbarButton
