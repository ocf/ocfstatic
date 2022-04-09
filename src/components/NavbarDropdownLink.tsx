import {
  Button,
  Popover,
  PopoverBody,
  PopoverContent,
  PopoverTrigger,
} from "@chakra-ui/react";
import React from "react";

export type NavbarDropdownLinkProps = {
  href?: string;
  children: any;
};

const NavbarDropdownLink = ({ href, children }: NavbarDropdownLinkProps) => {
  return (
    <a href={href}>
      <Button
        w="100%"
        p={0}
        variant="ghost"
        fontWeight="light"
        color="#222222"
        _hover={{ color: "#000000", bg: "#f0f0f0" }}
        textAlign="left"
      >
        {children}
      </Button>
    </a>
  );
};

export default NavbarDropdownLink;
