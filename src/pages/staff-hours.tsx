import { Box } from "@chakra-ui/react"
import { useApiRoute } from "~/utils/api"

const StaffHoursPage = () => {
  const { data: staffHours } = useApiRoute("/hours/staff")
  console.log(staffHours)
  return <Box>page content</Box>
}

export default StaffHoursPage
