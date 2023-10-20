import { Box } from "@chakra-ui/react"
import { SEO } from "~/components/SEO"
import Layout from "~/components/Layout"
import Navbar from "~/components/Navbar"
import FullWidthBox from "~/components/FullWidthBox"
import { useRef, useCallback, useMemo } from "react"
import Footer from "~/components/Footer"
import { Calendar, Views, momentLocalizer, Event } from "react-big-calendar"
import moment from "moment"
import "react-big-calendar/lib/css/react-big-calendar.css"
import { useApiRoute } from "~/utils/api"
const localizer = momentLocalizer(moment)

function mapDays(weekDay: string) {
  switch (weekDay) {
    case "Saturday":
      return 6

    case "Monday":
      return 1

    case "Tuesday":
      return 2

    case "Wednesday":
      return 3

    case "Thursday":
      return 4
    case "Friday":
      return 5
    default:
      return 7
  }
}

function parseTime(time: string) {
  const hour = time.match(/\d+/g)
  if (hour?.length != 4) {
    return [0, 0, 23, 0]
  }
  let sHour = parseInt(hour[0])
  if (sHour == 12) {
    sHour = 0
  }
  const sMin = parseInt(hour[1])

  let eHour = parseInt(hour[2])
  if (eHour == 12) {
    eHour = 0
  }
  const eMin = parseInt(hour[3])

  const zones = time.split("-")
  if (zones[0].match(/PM/)) {
    sHour = sHour + 12
  }
  if (zones[1].match(/PM/)) {
    eHour = eHour + 12
  }

  return [sHour, sMin, eHour, eMin]
}

const holidays = [
  {
    title: "Holiday",
    allDay: false,
    start: new Date(2023, 9, 12, 0, 0, 0, 0),
    end: new Date(2023, 9, 12, 23, 0, 0, 0),
  },
]

const StaffHoursPage = () => {
  const { data: staff } = useApiRoute("/staff_hours")
  const staffHours =
    staff &&
    staff.staff_hours.map(function (staff) {
      const newDay = moment().startOf("isoWeek").add(mapDays(staff.day), "days")
      const times = parseTime(staff.time)
      if (!staff.cancelled) {
        return {
          title: staff.staff[0].real_name,
          allDay: false,
          start: new Date(
            newDay.year(),
            newDay.month(),
            newDay.date(),
            times[0],
            parseInt(staff.time.split(":")[1]),
            0,
            0,
          ),
          end: new Date(
            newDay.year(),
            newDay.month(),
            newDay.date(),
            times[2],
            0,
            0,
            0,
          ),
        }
      } else {
        return {
          title: staff.staff[0].real_name + " CANCELED",
          allDay: false,
          start: new Date(
            newDay.year(),
            newDay.month(),
            newDay.date(),
            times[0],
            parseInt(staff.time.split(":")[1]),
            0,
            0,
          ),
          end: new Date(
            newDay.year(),
            newDay.month(),
            newDay.date(),
            times[2],
            0,
            0,
            0,
          ),
        }
      }
    })
  const eventPropGetter = useCallback(
    (event: Event) => ({
      ...(event.title?.toString().includes("CANCELED") && {
        style: {
          backgroundColor: "#000",
        },
      }),
    }),
    [],
  )

  const { defaultDate, scrollToTime } = useMemo(
    () => ({
      defaultDate: new Date(),
      scrollToTime: new Date(1970, 1, 1, 6),
    }),
    [],
  )
  const heroRef = useRef<HTMLDivElement>(null)
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
        <Box
          bg="white"
          boxShadow="0px 4px 20px 0px #0000000D"
          p={4}
          borderRadius={4}
        >
          <Calendar
            backgroundEvents={holidays}
            dayLayoutAlgorithm={"no-overlap"}
            defaultDate={defaultDate}
            defaultView={Views.WEEK}
            eventPropGetter={eventPropGetter}
            events={staffHours}
            localizer={localizer}
            views={[Views.WEEK, Views.DAY]}
            selectable
            scrollToTime={scrollToTime}
          />
        </Box>
      </FullWidthBox>
      <Footer />
    </Layout>
  )
}

export default StaffHoursPage

export const Head = () => <SEO />
