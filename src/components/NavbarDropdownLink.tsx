import NavbarButton from "./NavbarButton"

const NavbarDropdownLink: typeof NavbarButton = (props) => {
  return (
    <NavbarButton
      display="flex"
      alignItems="center"
      justifyContent="center"
      borderRadius={0}
      w="100%"
      _hover={{ bg: "gray.100", textDecoration: "none" }}
      {...props}
    />
  )
}

export default NavbarDropdownLink
