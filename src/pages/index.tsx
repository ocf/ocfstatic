import Navbar from "~/components/Navbar"
import Footer from "~/components/Footer"
import { useApiRoute } from "~/utils/api"
import {
  Box,
  type BoxProps,
  Button,
  Flex,
  Grid,
  List,
  ListItem,
  Text,
  Heading,
} from "@chakra-ui/react"
import Layout from "~/components/Layout"
import FullWidthBox from "~/components/FullWidthBox"
import Link from "~/components/InternalLink"
import { useRef, type ReactNode } from "react"

const IndexPage = () => {
  const heroRef = useRef<HTMLDivElement>(null)
  const { data: staffInLab } = useApiRoute("/lab/staff")

  return (
    <Layout>
      <Navbar intersectionElement={heroRef} />
      <FullWidthBox
        bgImage="/assets/img/hero.jpg"
        bgSize="cover"
        bgPosition="center"
        bgRepeat="no-repeat"
        ref={heroRef}
        pt="16" // allocate space for navbar
      >
        <Box py={12}>
          <Text fontSize="3xl" fontWeight="semibold">
            Welcome to the Open Computing Facility!
          </Text>
          <Text maxWidth={{ base: "auto", md: "50%" }} mt={6}>
            The Open Computing Facility (OCF) is an all-volunteer student
            organization dedicated to free computing for all University of
            California, Berkeley students, faculty, and staff.
          </Text>
          <Flex gap={4} direction={{ base: "column", md: "row" }} mt={12}>
            <Link to="/account/create">
              <Button bg="white" w="100%">
                Create Account
              </Button>
            </Link>
            <Link to="/account/hosting">
              <Button bg="white" w="100%">
                Request Hosting
              </Button>
            </Link>
            <Link to="/docs/printing">
              <Button bg="white" w="100%">
                How to Print
              </Button>
            </Link>
            <Link to="/staff-hours">
              <Button bg="white" w="100%">
                Get Help
              </Button>
            </Link>
          </Flex>
        </Box>
      </FullWidthBox>
      <Grid
        py={8}
        templateColumns={{ md: "repeat(3, 1fr)" }}
        templateRows={{ md: "repeat(4, 1fr)" }}
        gap={4}
      >
        <HomeCard
          gridArea="1 / 1 / 2 / 2"
          title={
            <>
              Currently{" "}
              <Text color="green.500" as="span">
                Open
              </Text>
            </>
          }
        >
          <List>
            {staffInLab &&
              staffInLab.staff_in_lab.map((s) => (
                <ListItem key={s.host}>
                  {s.user} on {s.host} since {s.start}
                </ListItem>
              ))}
          </List>
        </HomeCard>
        <HomeCard gridArea="2 / 1 / 3 / 2" title="Staff News"></HomeCard>
        <HomeCard gridArea="1 / 2 / 3 / 3" title="The Lab"></HomeCard>
        <HomeCard gridArea="1 / 3 / 4 / 4" title="About Us"></HomeCard>
        <HomeCard gridArea="3 / 1 / 4 / 3" title="Join Staff"></HomeCard>
        <HomeCard gridArea="4 / 1 / 5 / 2" title="Stats"></HomeCard>
        <HomeCard
          gridArea="4 / 2 / 5 / 4"
          title="Linux Sysadmin DeCal"
        ></HomeCard>
      </Grid>
      <Footer />
    </Layout>
  )
}

export default IndexPage

const HomeCard = ({
  title,
  gridArea,
  children,
  ...rest
}: { title: ReactNode; gridArea: string } & Omit<BoxProps, "title">) => {
  return (
    <Box
      bg="white"
      boxShadow="0px 4px 20px 0px #0000000D"
      p={4}
      borderRadius={4}
      gridArea={{ md: gridArea }}
      {...rest}
    >
      {title && (
        <Heading as="h3" fontSize="xl" fontWeight="semibold" mb={3}>
          {title}
        </Heading>
      )}
      {children}
    </Box>
  )
}
