import Navbar from "~/components/Navbar"
import Footer from "~/components/Footer"
import { useApiRoute } from "~/utils/api"
import {
  Box,
  type BoxProps,
  Button,
  Center,
  Flex,
  Grid,
  Image,
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
import { SEO } from "~/components/SEO"

const IndexPage = () => {
  const heroRef = useRef<HTMLDivElement>(null)
  const { data: staffInLab } = useApiRoute("/lab/staff")

  return (
    <Layout>
      <Navbar intersectionElement={heroRef} />
      <FullWidthBox
        bgColor="gray.200"
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
            <Button
              to="/account/create"
              bg="white"
              textDecoration="none"
              _hover={{ textDecoration: "none" }}
              as={Link}
            >
              Create Account
            </Button>
            <Button
              to="/account/hosting"
              bg="white"
              textDecoration="none"
              _hover={{ textDecoration: "none" }}
              as={Link}
            >
              Request Hosting
            </Button>
            <Button
              to="/docs/printing"
              bg="white"
              textDecoration="none"
              _hover={{ textDecoration: "none" }}
              as={Link}
            >
              How to Print
            </Button>
            <Button
              to="/staff-hours"
              bg="white"
              textDecoration="none"
              _hover={{ textDecoration: "none" }}
              as={Link}
            >
              Get Help
            </Button>
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
        <HomeCard gridArea="3 / 1 / 4 / 3" title="Join Staff!">
          <Flex>
            <Box flex={6}>
              <Text>
                Meetings 8pm every Wednesday at the lab and at{" "}
                <Link to="https://ocf.io/meet">https://ocf.io/meet</Link>.
              </Text>
              <br />
              <Text>
                We meet every week to talk tech and work on cool projects. All
                are welcome to join OCF staff, at any point in the semester!
              </Text>
              <br />
              <Text>
                <b>Sound interesting?</b>
              </Text>
              <br />
              <UnorderedList>
                <ListItem>
                  Subscribe to our{" "}
                  <Link to="https://ocf.io/announce">mailing list</Link> for
                  meeting recaps
                </ListItem>
                <ListItem>
                  Chat with us on <Link to="https://fco.slack.com/">Slack</Link>
                  , <Link to="https://ocf.io/discord">Discord</Link>,{" "}
                  <Link to="https://chat.ocf.berkeley.edu/">Matrix</Link>, or{" "}
                  <Link to="https://new.ocf.berkeley.edu/docs/internal/contact/irc/">
                    IRC
                  </Link>
                </ListItem>
                <ListItem>
                  Drop by and say hello, or{" "}
                  <Link to="/docs/internal/contact">email the staff team</Link>
                </ListItem>
                <ListItem>
                  See more ways to{" "}
                  <Link to="/docs/staff/getinvolved">
                    contribute and get involved
                  </Link>
                </ListItem>
              </UnorderedList>
            </Box>
            <Center flex={2}>
              <Image
                src="/assets/img/penguin-sticker.png"
                alt="Penguin next to server graphic"
              />
            </Center>
          </Flex>
        </HomeCard>
        <HomeCard gridArea="4 / 1 / 5 / 2" title="Stats"></HomeCard>
        <LinuxSysadminDecalCard />
      </Grid>
      <Footer />
    </Layout>
  )
}

export default IndexPage

export const Head = () => <SEO />

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
  // Maximum number of posts to show
  postCount,
}: {
  gridArea: string
  postCount: number
}) => {
  // function dateDifference(date1: Date, date2: Date): string {
  //  const difference = date1.to - date2;
  // }

  function dateDuration(currentDate: Date, otherDate: Date): string {
    const currentUnixTime: number = Date.parse(currentDate.toDateString())
    const otherUnixTime: number = Date.parse(otherDate.toDateString())
    const differenceUnixTime: number = currentUnixTime - otherUnixTime

    let differenceMilliseconds: number = Date.parse(
      new Date(differenceUnixTime).toDateString()
    )
    if (differenceMilliseconds < 0) {
      console.error("otherDate newer than current date")
    }

    interface DateDuration {
      durationString: string
      durationMilliseconds: number
    }

    const MINUTE_MILLISECONDS = 60 * 1000
    const HOUR_MILLISECONDS = 60 * MINUTE_MILLISECONDS
    const DAY_MILLISECONDS = 24 * HOUR_MILLISECONDS
    const WEEK_MILLISECONDS = 7 * DAY_MILLISECONDS
    const MONTH_MILLISECONDS = 30 * DAY_MILLISECONDS
    const YEAR_MILLISECONDS = 365 * DAY_MILLISECONDS

    const DURATIONS: DateDuration[] = [
      {
        durationString: "year",
        durationMilliseconds: YEAR_MILLISECONDS,
      },
      {
        durationString: "month",
        durationMilliseconds: MONTH_MILLISECONDS,
      },
      {
        durationString: "week",
        durationMilliseconds: WEEK_MILLISECONDS,
      },
      {
        durationString: "day",
        durationMilliseconds: DAY_MILLISECONDS,
      },
    ]

    let datePartsAdded = 2
    const durationParts: string[] = []
    let dateDifferentIndex: number = 0
    while (dateDifferentIndex < DURATIONS.length && datePartsAdded > 0) {
      const currentDateDifference = DURATIONS[dateDifferentIndex]
      const durationCount: number = Math.floor(
        differenceMilliseconds / currentDateDifference.durationMilliseconds
      )
      if (durationCount > 0) {
        differenceMilliseconds -=
          durationCount * currentDateDifference.durationMilliseconds
        durationParts.push(
          `${durationCount} ${currentDateDifference.durationString}${
            durationCount > 1 ? "s" : ""
          }`
        )
        --datePartsAdded
      }
      ++dateDifferentIndex
    }
    return durationParts.join(", ") || "less than 1 day"
  }

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
    const currentDate = new Date()
    return (
      <List spacing={3}>
        {blogPosts.slice(0, postCount).map((post: BlogPost) => {
          return (
            <ListItem key={post.id}>
              <Link color="teal.500" to={post.link}>
                {post.title}
              </Link>
              <Text>
                Last updated {dateDuration(currentDate, new Date(post.updated))}{" "}
                ago
              </Text>
            </ListItem>
          )
        })}
      </List>
    )
  }

  const { data: blogPosts } = useApiRoute("/announce/blog") as {
    data?: BlogPost[]
  }
  return (
    <HomeCard gridArea={gridArea} title="Staff News">
      <Text fontSize="lg">More updates</Text>
      <br />
      {generateBlogPosts(blogPosts, postCount)}
    </HomeCard>
  )
}
