import { Button, ButtonProps, forwardRef } from "@chakra-ui/react"

export type NavbarButtonProps = {
  href?: string
}

const NavbarButton = forwardRef<NavbarButtonProps & ButtonProps, "button">(
  ({ href, ...rest }, ref) => {
    const button = (
      <Button
        variant="ghost"
        _hover={{ bg: "gray.100" }}
        fontWeight="normal"
        ref={ref}
        {...rest}
      />
    )

    if (href) {
      return <a href={href}>{button}</a>
    }

    return button
  }
)

export default NavbarButton
