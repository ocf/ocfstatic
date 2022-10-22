import Navbar from "~/components/Navbar"
import Footer from "~/components/Footer"
import { useApiRoute } from "~/utils/api"
import { Box, Button, Flex, Text } from "@chakra-ui/react"
import Layout from "~/components/Layout"
import FullWidthBox from "~/components/FullWidthBox"

const IndexPage = () => {
  const { data: staffInLab } = useApiRoute("/lab/staff")
  return (
    <Layout>
      <FullWidthBox
        bgImage="/assets/img/hero.jpg"
        bgSize="cover"
        bgPosition="center"
        bgRepeat="no-repeat"
      >
        <Navbar />
        <Box py={12}>
          <Text>Welcome to the Open Computing Facility!</Text>
          <Text maxWidth={{ base: "auto", md: "50%" }}>
            The Open Computing Facility (OCF) is an all-volunteer student
            organization dedicated to free computing for all University of
            California, Berkeley students, faculty, and staff.
          </Text>
          <Flex gap={4} direction={{ base: "column", md: "row" }}>
            <Button bg="white">Create Account</Button>
            <Button bg="white">Request Hosting</Button>
            <Button bg="white">How to Print</Button>
            <Button bg="white">Get Help</Button>
          </Flex>
        </Box>
      </FullWidthBox>
      <div>
        {staffInLab && (
          <>
            <h2>Staff in Lab:</h2>
            <ul>
              {staffInLab.staff_in_lab.map((s) => (
                <li key={s.host}>
                  {s.user} on {s.host} since {s.start}
                </li>
              ))}
            </ul>
          </>
        )}
      </div>
      <Footer />
    </Layout>
  )
}

export default IndexPage
