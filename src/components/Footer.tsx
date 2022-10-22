import { Text, Flex } from "@chakra-ui/react"
import FullWidthBox from "~/components/FullWidthBox"
import Link from "~/components/InternalLink"

const Footer = () => {
  return (
    <FullWidthBox bg="gray.800" color="gray.100" py={12} fontSize="sm">
      <Flex alignItems="center" justifyContent="space-between">
        <Flex flexDirection="column" gap={1}>
          <Link to="https://ocf.io/donate">Donate to the OCF</Link>
          <Link to="https://www.ocf.berkeley.edu/~staff/bod/">
            Board Meeting Minutes
          </Link>
          <Link to="https://www.ocf.berkeley.edu/docs/docs/">
            Official Documents
          </Link>
          <Link to="https://www.ocf.berkeley.edu/docs/privacy/">
            Privacy Policy
          </Link>
        </Flex>
        <Flex direction="column" textAlign="right" gap={1} color="gray.300">
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
