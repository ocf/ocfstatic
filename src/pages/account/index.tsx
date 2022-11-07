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

interface OCFQuotaPaperAPIResponse {
  user: string | undefined
  daily: number | undefined
  semesterly: number | undefined
}

const AccountDashboardPage = () => {
  const { initialized, keycloak } = useKeycloak()
  const [password, setPassword] = useState("")
  const [pagesDaily, setPagesDaily] = useState("Loading...")
  const [pagesSemesterly, setPagesSemesterly] = useState("Loading...")

  fetch("/api/account/quota/paper", {
    headers: {
      Authorization: "Bearer " + (keycloak.token || ""),
    },
  })
    .then((res) => {
      res
        .json()
        .then((body: OCFQuotaPaperAPIResponse) => {
          if (body.daily !== undefined) {
            setPagesDaily(`${body.daily} pages remaining today`)
          } else {
            setPagesDaily("Error; please try again")
          }
          if (body.semesterly !== undefined) {
            setPagesSemesterly(
              `${body.semesterly} pages remaining this semester`
            )
          } else {
            setPagesSemesterly("Error; please try again")
          }
        })
        .catch((err) => {
          console.error("Could not parse paper response; error:")
          console.error(err)
          setPagesDaily("Error; please try again")
          setPagesSemesterly("Error; please try again")
        })
    })
    .catch((err) => {
      console.error("Could not get paper information; error:")
      console.error(err)
      setPagesDaily("Error; please try again")
      setPagesSemesterly("Error; please try again")
    })

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
          <br />
          <Box id="printing-quota">
            <Text fontWeight="medium">Printing Quota</Text>
            <Input
              value={pagesDaily}
              maxWidth="500"
              disabled={true}
              marginBottom={2}
            />
            <Input value={pagesSemesterly} maxWidth="500" disabled={true} />
          </Box>
          <br />
          <Box>
            <p>Does anything not look right or do you have questions? </p>
            <p>
              Contact{" "}
              <a href="mailto:help@ocf.berkeley.edu">help@ocf.berkeley.edu</a>{" "}
              for support.
            </p>
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
