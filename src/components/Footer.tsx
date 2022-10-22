import { Grid, Box, Text, Flex, Link } from "@chakra-ui/react"

const Footer = () => {
  return (
    <Grid
      w="100%"
      py={8}
      fontWeight="light"
      templateColumns={["1fr", null, "3fr 9fr"]}
      gap={6}
    >
      <Flex flexDirection="column">
        <Text fontSize="large" fontWeight="semibold">
          Quick Links
        </Text>
        <Link>Home</Link>
        <Link>FAQ</Link>
        <Link>Stats</Link>
        <Link>Short URLs</Link>
        <Link>Board Meeting Minutes</Link>
        <Link>Manage my Account</Link>
      </Flex>
      <Flex
        flexDirection="column"
        textAlign="center"
        justifyContent="end"
        fontSize="small"
        gap={2}
      >
        <Box>
          <Text>
            The Open Computing Facility is run entirely by student volunteers.
          </Text>
          <Text>
            Copyright &copy; 1989–2022 Board of Directors of the Open Computing
            Facility.
          </Text>
          <Text>
            The Open Computing Facility is a Chartered Program of the ASUC.
          </Text>
        </Box>
        <Box>
          <Text>
            View the source code on <Link color="primary">GitHub</Link>
          </Text>
        </Box>
      </Flex>
    </Grid>
  )
}

export default Footer
