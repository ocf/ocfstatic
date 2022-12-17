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
  const [passwordChangeMessage, setPasswordChangeMessage] = useState("")
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
      <Box display="flex" alignItems="start">
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
            {window.location.hash.indexOf("ocfapi_calnet_token") >= 0 ? (
              <div>
                <Input
                  type="password"
                  maxWidth="500"
                  marginRight={10}
                  marginBottom={5}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <Button
                  bgColor="blue.200"
                  onClick={() => {
                    if (password.length == 0) return

                    const start = window.location.hash.indexOf(
                      "ocfapi_calnet_token="
                    )
                    const end =
                      window.location.hash.indexOf("&", start) >= 0
                        ? window.location.hash.indexOf("&", start)
                        : window.location.hash.length
                    const token = window.location.hash.substring(
                      start + 20,
                      end
                    )

                    console.log(token)

                    fetch("/api/account/reset_password", {
                      method: "POST",
                      headers: {
                        Authorization: "Bearer " + token,
                        "Content-Type": "application/json",
                        accept: "application/json",
                      },
                      body: JSON.stringify({
                        account: profile.preferred_username,
                        new_password: password,
                      }),
                    })
                      .then((res) => {
                        switch (res.status) {
                          case 204:
                            setPasswordChangeMessage(
                              "Password changed successfully! You will have to log in again to use your account."
                            )
                            break
                          case 500:
                            res
                              .json()
                              .then((body: { detail: string }) => {
                                setPasswordChangeMessage(body.detail)
                              })
                              .catch(() => {
                                setPasswordChangeMessage(
                                  "Error; please try again"
                                )
                              })
                            break
                          default:
                            setPasswordChangeMessage("Error; please try again")
                            break
                        }
                      })
                      .catch((err) => {
                        console.error("Could not change password; error:")
                        console.error(err)
                        setPasswordChangeMessage("Error; please try again")
                      })
                  }}
                >
                  Save
                </Button>
                <p>{passwordChangeMessage}</p>
              </div>
            ) : (
              <div>
                <Text marginBottom={2}>
                  <i>
                    To change your password, you first need to login with
                    CalNet.
                  </i>
                </Text>
                <Button
                  bgColor="blue.200"
                  onClick={() => {
                    window.location.href = `https://api.ocf.berkeley.edu/auth/calnet?next=${window.location.href}`
                  }}
                >
                  Login with CalNet
                </Button>
              </div>
            )}
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
