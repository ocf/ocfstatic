import { Box, Button, Input, Text } from "@chakra-ui/react"
import { useKeycloak } from "@react-keycloak/web"
import { navigate } from "gatsby"
import Footer from "~/components/Footer"
import Layout from "~/components/Layout"
import Navbar from "~/components/Navbar"
import Sidebar from "~/components/Sidebar"
import { OCFKeycloakToken } from "~/utils/keycloak"
import { SEO } from "~/components/SEO"
import { useState } from "react"
import { useApiRoute } from "~/utils/api"

const AccountDashboardPage = () => {
  const { initialized, keycloak } = useKeycloak()
  const [password, setPassword] = useState("")

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
        <Box display="inline-block" marginLeft={5}>
          <Box h="20" />
          <Text color="gray.500" fontSize="1.5rem" fontWeight="medium">
            ACCOUNT
          </Text>
          <br />
          <Box id="name">
            <Text fontWeight="medium">Name</Text>
            <Input value={profile.given_name} maxWidth="500" disabled={true} />
          </Box>
          <br />
          <Box id="username">
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
          <Box id="email">
            <Text fontWeight="medium">Email</Text>
            <Input value={profile.email} maxWidth="500" disabled={true} />
          </Box>
          <br />
          <Box id="password">
            <Text fontWeight="medium">Password</Text>
            <Input
              type="password"
              maxWidth="500"
              marginRight="10px"
              marginBottom="5px"
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button
              bgColor="blue.200"
              onClick={() => {
                if (password.length == 0) return

                console.log(keycloak)
                console.log(profile)

                // window.location.href =
                // "https://api.ocf.berkeley.edu/login/calnet?next=http://localhost:8000"

                /*
                fetch("/api/login/calnet?next=http://localhost:8000").then(
                  (res) => {
                    console.log(res)
                    res.body
                      ?.getReader()
                      .read()
                      .then((body) => {
                        console.log(new TextDecoder("utf-8").decode(body.value))
                      })
                      .catch((err) => {
                        console.error(err)
                      })
                  }
                )

                fetch("/api/account/change-password", {
                  method: "POST",
                  headers: {
                    Authorization: "Bearer " + keycloak.token,
                  },
                  body: JSON.stringify({
                    account: profile.preferred_username,
                    new_password: password,
                  }),
                }).then((res) => {
                  // console.log(res)
                })
                */
              }}
            >
              Save
            </Button>
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
