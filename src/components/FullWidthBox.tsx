import { Box, BoxProps } from "@chakra-ui/react"

const FullWidthBox = ({ children, ...rest }: BoxProps) => {
  return (
    <Box
      position="relative"
      w="100vw"
      mx={{ base: "-2rem", md: "-50vw" }}
      insetX={{ md: "50%" }}
      {...rest}
    >
      <Box maxW="72rem" width="100%" mx="auto" px="2rem">
        {children}
      </Box>
    </Box>
  )
}

export default FullWidthBox
