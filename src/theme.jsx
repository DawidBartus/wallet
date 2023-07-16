import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: "#24CCA7",
    },
    secondary: {
      main: "#FF6596",
    },
    info: {
      main: "#4A56E2",
    },
    blur: {
      main: "rgba(255, 255, 255, 0.40)",
    },
    icon: {
      main: "#E0E0E0",
      gray: "#BDBDBD",
    },
  },
  typography: {
    header: {
      fontSize: 30,
      fontWeight: 700,
      lineHeight: "normal",
    },
    balance: {
      fontSize: 30,
      fontWeight: 400,
    },
    current: {
      fontSize: 18,
      color: "#000000",
      fontWeight: 700,
    },
    available: {
      fontSize: 18,
      color: "#000000",
      fontWeight: 400,
    },
  },
});

export default theme;
