import { Box, Button, Input, Text } from "@chakra-ui/react"
import { useKeycloak } from "@react-keycloak/web"
import { navigate } from "gatsby"
import Footer from "~/components/Footer"
import Layout from "~/components/Layout"
import Navbar from "~/components/Navbar"
import Sidebar from "~/components/Sidebar"
import { OCFKeycloakToken } from "~/utils/keycloak"
import { SEO } from "~/components/SEO"

const AccountDashboardPage = () => {
  const { initialized, keycloak } = useKeycloak()

  if (!keycloak.authenticated) {
    if (initialized) navigate("/")?.catch(console.error)
    return null
  }

  const profile = keycloak.tokenParsed as OCFKeycloakToken

  return (
    <Layout>
      <Navbar />
      <Box>
        <Sidebar />
        <Box>
          <Box h="20" />
          <Text color="gray.500" fontSize="1.5rem" fontWeight="medium">
            ACCOUNT
          </Text>
          <br />
          <Box>
            <Text fontWeight="medium">Name</Text>
            <Input value={profile.given_name} maxWidth="500" disabled={true} />
          </Box>
          <br />
          <Box>
            <Text fontWeight="medium">OCF Username</Text>
            <Input
              value={profile.preferred_username}
              maxWidth="500"
              disabled={true}
            />
          </Box>
          <br />
          <Box>
            <Text fontWeight="medium">Account Type</Text>
            <Input value="Personal Account" maxWidth="500" disabled={true} />
          </Box>
          <br />
          <Box>
            <Text fontWeight="medium">Email</Text>
            <Input value={profile.email} maxWidth="500" marginRight="10" />
            <Button bgColor="blue.200">Save</Button>
          </Box>
          <br />
          <Box>
            <Text fontWeight="medium">Password</Text>
            <Input type="password" maxWidth="500" marginRight="10" />
            <Button bgColor="blue.200">Save</Button>
          </Box>
          <Box h="16" />
        </Box>
      </Box>
      <Footer />
    </Layout>
  )
}

export default AccountDashboardPage

export const Head = () => <SEO />
