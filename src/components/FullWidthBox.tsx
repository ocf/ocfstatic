import { Box, forwardRef, type BoxProps } from "@chakra-ui/react"

const FullWidthBox = forwardRef<BoxProps, "div">(
  ({ children, maxW = "7xl", ...rest }, ref) => {
    return (
      <Box
        position="relative"
        w="100vw"
        mx={{ base: "-2rem", md: "-50vw" }}
        insetX={{ md: "50%" }}
        {...rest}
      >
        <Box maxW={maxW} width="100%" mx="auto" px="2rem" ref={ref}>
          {children}
        </Box>
      </Box>
    )
  }
)

export default FullWidthBox
