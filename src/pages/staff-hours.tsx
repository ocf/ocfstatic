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
function giveEvent(event: Event) {
  window.alert(
    event.title?.toString() +
      "\n" +
      event.start?.toString() +
      " - " +
      event.end?.toString(),
  )
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

const StaffHoursPage = () => {
  function ocfHours(i: number, data: typeof hours) {
    const day = moment().startOf("isoWeek").add(i, "days")
    if (data?.open != undefined && data?.close != undefined) {
      return {
        title: "OCF Open",
        allDay: false,
        start: new Date(
          day.year(),
          day.month(),
          day.date(),
          parseInt(data.open.split(":")[0]),
          parseInt(data.open.split(":")[1]),
          0,
          0,
        ),
        end: new Date(
          day.year(),
          day.month(),
          day.date(),
          parseInt(data.close.split(":")[0]),
          parseInt(data.close.split(":")[1]),
          0,
          0,
        ),
      }
    } else {
      return {
        title: "OCF Closed All Day",
        allDay: false,
        start: new Date(day.year(), day.month(), day.date(), 0, 0, 0, 0),
        end: new Date(day.year(), day.month(), day.date(), 23, 59, 0, 0),
      }
    }
  }
  const weeks_Data = []
  const isoDate = moment()
    .startOf("isoWeek")
    .add(0, "days")
    .format("YYYY-MM-DD")
  const { data: hours } = useApiRoute("/lab/hours/{date}", {
    path: { date: isoDate.toString() },
  })
  weeks_Data.push(ocfHours(0, hours))
  const isoDate1 = moment()
    .startOf("isoWeek")
    .add(1, "days")
    .format("YYYY-MM-DD")
  const { data: hours1 } = useApiRoute("/lab/hours/{date}", {
    path: { date: isoDate1.toString() },
  })
  weeks_Data.push(ocfHours(1, hours1))
  const isoDate2 = moment()
    .startOf("isoWeek")
    .add(2, "days")
    .format("YYYY-MM-DD")
  const { data: hours2 } = useApiRoute("/lab/hours/{date}", {
    path: { date: isoDate2.toString() },
  })
  weeks_Data.push(ocfHours(2, hours2))
  const isoDate3 = moment()
    .startOf("isoWeek")
    .add(3, "days")
    .format("YYYY-MM-DD")
  const { data: hours3 } = useApiRoute("/lab/hours/{date}", {
    path: { date: isoDate3.toString() },
  })
  weeks_Data.push(ocfHours(3, hours3))
  const isoDate4 = moment()
    .startOf("isoWeek")
    .add(4, "days")
    .format("YYYY-MM-DD")
  const { data: hours4 } = useApiRoute("/lab/hours/{date}", {
    path: { date: isoDate4.toString() },
  })
  weeks_Data.push(ocfHours(4, hours4))
  const isoDate5 = moment()
    .startOf("isoWeek")
    .add(5, "days")
    .format("YYYY-MM-DD")
  const { data: hours5 } = useApiRoute("/lab/hours/{date}", {
    path: { date: isoDate5.toString() },
  })
  weeks_Data.push(ocfHours(5, hours5))
  const isoDate6 = moment()
    .startOf("isoWeek")
    .add(6, "days")
    .format("YYYY-MM-DD")
  const { data: hours6 } = useApiRoute("/lab/hours/{date}", {
    path: { date: isoDate6.toString() },
  })
  weeks_Data.push(ocfHours(6, hours6))
  const isoDate7 = moment()
    .startOf("isoWeek")
    .add(7, "days")
    .format("YYYY-MM-DD")
  const { data: hours7 } = useApiRoute("/lab/hours/{date}", {
    path: { date: isoDate7.toString() },
  })
  weeks_Data.push(ocfHours(7, hours7))
  /* let isoDate8 = moment().startOf("isoWeek").add(8, "days").format("YYYY-MM-DD")
  const { data: hours8 } = useApiRoute("/lab/hours/{date}", {path : {date : isoDate8.toString()}});
  weeks_Data.push(hours8)
  let isoDate9 = moment().startOf("isoWeek").add(9, "days").format("YYYY-MM-DD")
  const { data: hours9 } = useApiRoute("/lab/hours/{date}", {path : {date : isoDate9.toString()}});
  weeks_Data.push(hours9)
  let isoDate10 = moment().startOf("isoWeek").add(10, "days").format("YYYY-MM-DD")
  const { data: hours10 } = useApiRoute("/lab/hours/{date}", {path : {date : isoDate10.toString()}});
  weeks_Data.push(hours10)
  let isoDate11 = moment().startOf("isoWeek").add(11, "days").format("YYYY-MM-DD")
  const { data: hours11 } = useApiRoute("/lab/hours/{date}", {path : {date : isoDate11.toString()}});
  weeks_Data.push(hours11)
  let isoDate12 = moment().startOf("isoWeek").add(12, "days").format("YYYY-MM-DD")
  const { data: hours12 } = useApiRoute("/lab/hours/{date}", {path : {date : isoDate12.toString()}});
  weeks_Data.push(hours12) */

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
            times[1],
            0,
            0,
          ),
          end: new Date(
            newDay.year(),
            newDay.month(),
            newDay.date(),
            times[2],
            times[3],
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
            times[1],
            0,
            0,
          ),
          end: new Date(
            newDay.year(),
            newDay.month(),
            newDay.date(),
            times[2],
            times[3],
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
      ...(event.title?.toString().includes("OCF Closed") && {
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
            min={new Date(0, 0, 0, 7, 0, 0)}
            max={new Date(0, 0, 0, 23, 0, 0)}
            dayLayoutAlgorithm={"no-overlap"}
            defaultDate={defaultDate}
            defaultView={Views.WEEK}
            eventPropGetter={eventPropGetter}
            events={staffHours}
            backgroundEvents={weeks_Data}
            localizer={localizer}
            onSelectEvent={giveEvent}
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
