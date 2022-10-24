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
  UnorderedList,
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
        <StaffNewsCard gridArea="2 / 1 / 3 / 2" postCount={5}></StaffNewsCard>
        <HomeCard gridArea="1 / 2 / 3 / 3" title="The Lab"></HomeCard>
        <HomeCard gridArea="1 / 3 / 4 / 4" title="About Us">
          <Text fontSize="xl">Learn more about what we do!</Text>
          <br></br>
          <Text>
            {" "}
            The Open Computing Facility is an all-volunteer student organization
            located at the University of California, Berkeley. We&apos;re
            passionate about open source and free software.{" "}
          </Text>
          <br></br>
          <Text>
            {" "}
            Our volunteers maintain services for the Berkeley community. Among
            others, we offer:{" "}
          </Text>
          <br></br>
          <UnorderedList>
            <ListItem>A spiffy computer lab in 171 MLK Student Union</ListItem>
            <ListItem>
              Web & email hosting for thousands of student groups and
              individuals
            </ListItem>
            <ListItem>Free printing for all UC Berkeley students</ListItem>
            <ListItem>
              Shell accounts on our powerful on-campus servers
            </ListItem>
            <ListItem> High-performance computing on our GPU server</ListItem>
            <ListItem> ...and lots more!</ListItem>
          </UnorderedList>{" "}
          <br></br>
          <Text>
            {" "}
            We hold <Link to="/staff-hours/"> weekly staff hours </Link> to
            provide assistance with account issues or with OCF services. Drop by
            to ask questions or just to hang out!{" "}
          </Text>
        </HomeCard>
        <HomeCard gridArea="3 / 1 / 4 / 3" title="Join Staff"></HomeCard>
        <HomeCard gridArea="4 / 1 / 5 / 2" title="Stats"></HomeCard>
        <LinuxSysadminDecalCard />
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

const LinuxSysadminDecalCard = () => (
  <HomeCard gridArea="4 / 2 / 5 / 4" title="Linux Sysadmin DeCal">
    <Link to="https://decal.ocf.berkeley.edu/">
      <Text fontSize="lg">See more</Text>
    </Link>
    <br />
    <Text>
      Whether you are looking to improve your Bash wizardry, just plain GNU, or
      everything Unix and Unix-like, this is the perfect class for you. We offer
      a beginner section for those new to Unix and an advanced section for those
      who have some experience but want to learn more. Both sections are 2 units
      and be held from 8-9pm, the beginner section on Tuesdays and the advanced
      section on Thursdays, right in the OCF lab.
    </Text>
  </HomeCard>
)

interface BlogPost {
  id: string
  published: string
  updated: string
  title: string
  content: string
  author_name: string
  author_email: string
  link: string
}

const StaffNewsCard = ({
  gridArea,
  postCount,
}: {
  gridArea: string
  postCount: number
}) => {
  // function dateDifference(date1: Date, date2: Date): string {
  //  const difference = date1.to - date2;
  // }

  function generateBlogPosts(
    blogPosts?: BlogPost[],
    postCount?: number
  ): ReactNode {
    if (!blogPosts) {
      return <Text>Error loading posts</Text>
    }
    if (!postCount) {
      postCount = 5
    }
    return (
      <List spacing={3}>
        {blogPosts.slice(0, postCount).map((post: BlogPost) => {
          return (
            <ListItem key={post.id}>
              <Link color="teal.500" to={post.link}>
                {post.title}
              </Link>
              <Text>Last updated {post.updated}</Text>
            </ListItem>
          )
        })}
      </List>
    )
  }

  const { data: blogPosts } = useApiRoute("/announce/blog") as {
    data?: BlogPost[]
  }
  console.log(blogPosts)
  return (
    <HomeCard gridArea={gridArea} title="Staff News">
      <Text fontSize="lg">More updates</Text>
      <br />
      {generateBlogPosts(blogPosts, postCount)}
    </HomeCard>
  )
}
