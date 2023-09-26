import { Text, Flex } from "@chakra-ui/react"
import FullWidthBox from "~/components/FullWidthBox"

const Footer = () => {
  return (
    <FullWidthBox bg="gray.800" color="gray.100" py={8} fontSize="sm">
      <Flex
        alignItems={{ md: "center" }}
        justifyContent="space-between"
        flexDirection={{ base: "column", md: "row" }}
        gap={8}
      >
        <Flex flexDirection="column" gap={2}>
          <a href="https://ocf.io/donate">Donate to the OCF</a>
          <a href="https://www.ocf.berkeley.edu/~staff/bod/">
            Board Meeting Minutes
          </a>
          <a href="/docs/">Official Documents</a>
          <a href="https://ocf.berkeley.edu/docs/privacy/">Privacy Policy</a>
        </Flex>
        <Flex
          direction="column"
          textAlign={{ md: "right" }}
          gap={1}
          color="gray.300"
        >
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
        </Flex>
      </Flex>
    </FullWidthBox>
  )
}

export default Footer
