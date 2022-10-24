import { Box } from "@chakra-ui/react"
import { useKeycloak } from "@react-keycloak/web"
import { navigate } from "gatsby"
import Footer from "~/components/Footer"
import Layout from "~/components/Layout"
import Navbar from "~/components/Navbar"
import Sidebar from "~/components/Sidebar"

const AccountDashboardPage = () => {
  const { initialized, keycloak } = useKeycloak()

  if (initialized && !keycloak.authenticated) {
    navigate("/")?.catch(console.error)
    return null
  }

  return (
    <Layout>
      <Navbar />
      <Box>
        <Sidebar />
      </Box>
      <Footer />
    </Layout>
  )
}

export default AccountDashboardPage
