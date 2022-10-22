import { extendTheme } from "@chakra-ui/react"
const theme = {
  colors: {
    primary: "#68b4d3",
    gray: {
      50: "#fafafa",
      100: "#f5f5f5",
      200: "#e5e5e5",
      300: "#d4d4d4",
      400: "#a3a3a3",
      500: "#737373",
      600: "#525252",
      700: "#404040",
      800: "#262626",
      900: "#171717",
    },
  },
  fonts: {
    heading: `'Inter var', sans-serif`,
    body: `'Inter var', sans-serif`,
  },
}

export default extendTheme(theme)
