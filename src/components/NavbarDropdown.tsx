import {
  Button,
  Popover,
  PopoverBody,
  PopoverContent,
  PopoverTrigger,
} from "@chakra-ui/react"
import { ReactNode, useState } from "react"
import OCFColors from "~/definitions/OCFColors"

export type NavbarDropdownProps = {
  title: string
  width?: number
  children: ReactNode
}

const NavbarDropdown = ({ title, width, children }: NavbarDropdownProps) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <Popover
      trigger="hover"
      onOpen={() => setIsHovered(true)}
      onClose={() => setIsHovered(false)}
    >
      <PopoverTrigger>
        <Button
          variant="ghost"
          h="100%"
          _hover={{ color: OCFColors.primary, bg: "#fafafa" }}
          fontWeight="light"
          bg={isHovered ? "#fafafa" : ""}
        >
          {title}
        </Button>
      </PopoverTrigger>
      <PopoverContent w={width ? width : 200}>
        <PopoverBody px={0}>{children}</PopoverBody>
      </PopoverContent>
    </Popover>
  )
}

export default NavbarDropdown
