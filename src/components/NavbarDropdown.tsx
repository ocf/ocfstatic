import {
  Button,
  Popover,
  PopoverBody,
  PopoverContent,
  PopoverTrigger,
  Text,
} from "@chakra-ui/react"
import { ChevronDownIcon } from "@chakra-ui/icons"
import { ReactNode } from "react"

export type NavbarDropdownProps = {
  title: string
  width?: number
  children: ReactNode
}

const NavbarDropdown = ({ title, width, children }: NavbarDropdownProps) => {
  return (
    <Popover trigger="hover">
      <PopoverTrigger>
        <Button
          variant="ghost"
          h="100%"
          _hover={{ color: "primary", bg: "gray.100" }}
          fontWeight="light"
        >
          <Text>{title}</Text>
          <ChevronDownIcon ml={1} />
        </Button>
      </PopoverTrigger>
      <PopoverContent w={width ?? 200}>
        <PopoverBody px={0}>{children}</PopoverBody>
      </PopoverContent>
    </Popover>
  )
}

export default NavbarDropdown
