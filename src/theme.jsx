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
    white: {
      main: "#FFF",
    },
    icon: {
      main: "#E0E0E0",
    },
  },
  typography: {
    header: {
      fontSize: 30,
      fontWeight: 700,
      lineHeight: "normal",
    },
  },
});

export default theme;
