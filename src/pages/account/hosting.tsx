import { Box, Button, Image, Input, Select, Text } from "@chakra-ui/react"
import Footer from "~/components/Footer"
import Layout from "~/components/Layout"
import Navbar from "~/components/Navbar"
import Sidebar from "~/components/Sidebar"
import { SEO } from "~/components/SEO"
import CheckCircle from "~/images/check-circle.svg"
import XCircle from "~/images/x-circle.svg"
import GithubIcon from "~/images/github.svg"

const HostingDashboardPage = () => {
  return (
    <Layout>
      <Navbar />
      <Box display="flex" alignItems="start">
        <Sidebar />
        <Box display="inline-block" marginLeft={5} w="60%">
          <Box h="20" />
          <Text color="gray.500" fontSize="1.5rem" fontWeight="medium">
            HOSTING
          </Text>
          <br />
          <Box id="web-hosting">
            <Text fontWeight="medium">Web Hosting</Text>
            <Box display="flex" alignItems="center">
              <Image src={CheckCircle} />
              <Text marginLeft={2}>
                Virtual Hosting is enabled for your account
              </Text>
            </Box>
            <br />
            <Text fontWeight="medium">Domain</Text>
            <Input
              value="https://oski.berkeley.edu"
              maxWidth="500"
              disabled={true}
              marginBottom={5}
            />
            <Text fontWeight="medium">Once-Click Install</Text>
            <Text>
              If you are just getting started with our web hosting offering, we
              offer some easy installation options to get you up and running!
            </Text>
            <Box display="flex" flexWrap="wrap">
              <Button bgColor="blue.200" marginTop={3} marginRight={3}>
                Install WordPress (recommended)
              </Button>
              <Button bgColor="blue.200" marginTop={3} marginRight={3}>
                Setup MySQL Database
              </Button>
              <Button bgColor="blue.200" marginTop={3} marginRight={3}>
                Install Jekyll
              </Button>
              <Button bgColor="blue.200" marginTop={3} marginRight={3}>
                Install Flask
              </Button>
              <Button bgColor="blue.200" marginTop={3} marginRight={3}>
                Install Django
              </Button>
            </Box>
          </Box>
          <br />
          <br />
          <Box id="app-hosting">
            <Text fontWeight="medium">App Hosting</Text>
            <Box display="flex" alignItems="center">
              <Image src={XCircle} />
              <Text marginLeft={2}>
                App Hosting is not enabled for your account
              </Text>
            </Box>
            <br />
            <Button bgColor="blue.200" marginBottom={2}>
              Request App Hosting
            </Button>
            <Input
              value="ssh oski@apphost.ocf.berkeley.edu"
              maxWidth="500"
              disabled={true}
            />
          </Box>
          <br />
          <br />
          <Box id="automatic-deployments">
            <Text fontWeight="medium">Automatic Deployments</Text>
            <Text>
              If you link your GitHub repository, the OCF can automatically
              deploy your website when you push new changes
            </Text>
            <br />
            <Button bgColor="black" marginBottom={5} color="white">
              <Image src={GithubIcon} marginRight={2} />
              Install GitHub App
            </Button>
            <Text fontWeight="medium">Repository</Text>
            <Box display="flex">
              <Select placeholder="Select repository" marginBottom={5}>
                <option value="option1">oski/club-website</option>
                <option value="option2">oski/gitlet</option>
                <option value="option3">oski/ocfstatic</option>
              </Select>
              <Button
                borderWidth={1}
                borderStyle="solid"
                borderColor="red.400"
                backgroundColor="white"
                color="red.400"
                marginLeft={2}
              >
                Disconnect
              </Button>
            </Box>
            <Text fontWeight="medium">Build Settings</Text>
            <Box
              display="grid"
              gridTemplateColumns="auto auto"
              alignItems="end"
            >
              <Box marginTop={3} marginRight={3}>
                <Text fontWeight="medium">Framework Preset</Text>
                <Select placeholder="Select...">
                  <option value="option1">NodeJS</option>
                  <option value="option2">Python</option>
                  <option value="option3">Ruby</option>
                </Select>
              </Box>
              <Box marginTop={3} marginRight={3}>
                <Text fontWeight="medium">Build Command</Text>
                <Input value="npm run build" maxWidth="500" />
              </Box>
              <Box marginTop={3} marginRight={3}>
                <Text fontWeight="medium">Source Directory</Text>
                <Input value="/" maxWidth="500" />
              </Box>
              <Box marginTop={3} marginRight={3}>
                <Text fontWeight="medium">Output Directory</Text>
                <Input value="/out" maxWidth="500" />
              </Box>
              <Box marginTop={3} marginRight={3}>
                <Text fontWeight="medium">Destination Directory</Text>
                <Input value="~/public_html" maxWidth="500" />
              </Box>
              <Box marginTop={3} marginRight={3}>
                <Button bgColor="blue.200">Trigger Deployment</Button>
              </Box>
            </Box>
          </Box>
          <Box h="16" />
        </Box>
      </Box>
      <Footer />
    </Layout>
  )
}

export default HostingDashboardPage

export const Head = () => <SEO />
