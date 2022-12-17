import { Box, List, ListItem, Text } from "@chakra-ui/react"
import { useKeycloak } from "@react-keycloak/web"
import { OCFKeycloakToken } from "~/utils/keycloak"
import SidebarLink from "./SidebarLink"

const Sidebar = () => {
  const { initialized, keycloak } = useKeycloak()
  if (!initialized) return null
  const profile = keycloak.tokenParsed as OCFKeycloakToken
  return (
    <Box
      w="60"
      h="100vh"
      bgColor="white"
      display="inline-block"
      paddingTop={16}
    >
      <Box w="100%" px="2rem" mx="auto" h="100%" alignItems="center">
        <Box>
          <Text padding={1}>
            <b>{profile.name}</b>
          </Text>
          <Text padding={1}>{profile.preferred_username}</Text>
        </Box>
        <br />
        <Box>
          <Text color="gray.400">
            <b>ACCOUNT</b>
          </Text>
          <List>
            <ListItem>
              <SidebarLink linkGroup="account" to="/account#name">
                Name
              </SidebarLink>
            </ListItem>
            <ListItem>
              <SidebarLink linkGroup="account" to="/account#username">
                Username
              </SidebarLink>
            </ListItem>
            <ListItem>
              <SidebarLink linkGroup="account" to="/account#email">
                Email
              </SidebarLink>
            </ListItem>
            <ListItem>
              <SidebarLink linkGroup="account" to="/account#password">
                Password
              </SidebarLink>
            </ListItem>
            <ListItem>
              <SidebarLink linkGroup="account" to="/account#printing-quota">
                Printing Quota
              </SidebarLink>
            </ListItem>
          </List>
        </Box>
        <br />
        <Box>
          <Text color="gray.400">
            <b>HOSTING</b>
          </Text>
          <List>
            <ListItem>
              <SidebarLink
                linkGroup="hosting"
                to="/account/hosting#web-hosting"
              >
                Web Hosting
              </SidebarLink>
            </ListItem>
            <ListItem>
              <SidebarLink
                linkGroup="hosting"
                to="/account/hosting#app-hosting"
              >
                App Hosting
              </SidebarLink>
            </ListItem>
            <ListItem>
              <SidebarLink
                linkGroup="hosting"
                to="/account/hosting#automatic-deployments"
              >
                Automatic Deployments
              </SidebarLink>
            </ListItem>
            <ListItem>
              <SidebarLink
                linkGroup="hosting"
                to="/account/hosting#mail-hosting"
              >
                Mail Hosting
              </SidebarLink>
            </ListItem>
          </List>
        </Box>
        <br />
        <Box>
          <Text color="gray.400">
            <b>STAFF TOOLS</b>
          </Text>
          <List>
            <ListItem>
              <SidebarLink
                linkGroup="staff-tools"
                to="/staff-tools#support-tickets"
              >
                Support Tickets
              </SidebarLink>
            </ListItem>
            <ListItem>
              <SidebarLink
                linkGroup="staff-tools"
                to="/staff-tools#print-queue"
              >
                Print Queue
              </SidebarLink>
            </ListItem>
            <ListItem>
              <SidebarLink
                linkGroup="staff-tools"
                to="/account/staff-tools#monitoring"
              >
                Monitoring
              </SidebarLink>
            </ListItem>
            <ListItem>
              <SidebarLink
                linkGroup="staff-tools"
                to="/account/staff-tools#short-urls"
              >
                Short URLs
              </SidebarLink>
            </ListItem>
            <ListItem>
              <SidebarLink
                linkGroup="staff-tools"
                to="/staff-tools#hosting-requests"
              >
                Hosting Requests
              </SidebarLink>
            </ListItem>
            <ListItem>
              <SidebarLink
                linkGroup="staff-tools"
                to="/account/staff-tools#hpc-requests"
              >
                HPC Requests
              </SidebarLink>
            </ListItem>
            <ListItem>
              <SidebarLink
                linkGroup="staff-tools"
                to="/account/staff-tools#lab-map"
              >
                Lab Map
              </SidebarLink>
            </ListItem>
          </List>
        </Box>
      </Box>
    </Box>
  )
}

export default Sidebar
