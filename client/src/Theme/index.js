import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      light: "#aeffaf",
      main: "#7aea7e",
      dark: "#44b74f",
      contrastText: "#ffd",
    },
    secondary: {
      light: "#5ce54c",
      main: "#07b212",
      dark: "#008100",
      contrastText: "#000000",
    },
  },
  typography: {
    fontFamily: "Roboto",
    fontWeightLight: 400,
    fontWeightRegular: 500,
    fontWeightMedium: 600,
    fontWeightBold: 700,
  },
  
});

export default theme;
