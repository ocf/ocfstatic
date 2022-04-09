import {
  Button,
  Popover,
  PopoverBody,
  PopoverContent,
  PopoverTrigger,
} from "@chakra-ui/react"
import React, { useState } from "react"

export type NavbarDropdownProps = {
  title: string
  width?: number
  children: any
}

const NavbarDropdown = ({ title, width, children }: NavbarDropdownProps) => {
  let [isHovered, setIsHovered] = useState<boolean>(false)

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
          _hover={{ color: "#68b4d3", bg: "#fafafa" }}
          fontWeight="light"
          bg={isHovered ? "#fafafa" : ""}
        >
          {title}
        </Button>
      </PopoverTrigger>
      <PopoverContent w={width ? width : 200}>
        <PopoverBody paddingLeft={0} paddingRight={0}>
          {children}
        </PopoverBody>
      </PopoverContent>
    </Popover>
  )
}

export default NavbarDropdown
