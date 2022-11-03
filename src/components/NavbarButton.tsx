import {
  Button,
  ButtonProps,
  forwardRef,
  Link as ChakraLink,
} from "@chakra-ui/react"
import InternalLink from "./InternalLink"

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
        as={
          href ? (href.startsWith("/") ? InternalLink : ChakraLink) : undefined
        }
        to={href}
        href={href}
        {...rest}
      />
    )
  }
)

export default NavbarButton
