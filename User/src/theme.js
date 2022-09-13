import { createTheme } from "@mui/material";

export const theme = createTheme({
    palette: {
        primary: {
          main: "#ae1555",
          light: "#2196f3",
          dark: "#424242",
        },
        secondary: {
          main: "#fff",
          // dark: "#fff",
        },
        text: {
          main: "#000", //banner and navbar content
          light: "#d2d2d2", 
          dark: "#6C757D", //navbar below content
          default: "#fff",
        },
        background: {
          default: "#fff", // for banner bg
          main: "#ae1555", // for table's box bg color
          light: "#faf6f2",
          dark:"#000", //for navbar box
          one:"#000", //bloc 1 bg color
          two:"#000", //bloc 2 bg color
          three:"#000", //bloc 3 bg color
          four:"#000", //bloc 4 bg color
          five:"#000", //bloc 5 bg color
          six:"#000", //bloc 6 bg color
          seven:"#000", //bloc 7 bg color
          eight:"#000", //bloc 8 bg color
        },
        error: {
          main: "#ff0000", //for table's box border color
          bg: "#ffebeb",
           
        },
        warning: {
          main: "#e5a200", 
          bg: "#fdede1", 
        },
        cancel: {
          main: "#8a8d93",
          dark: "#e03546",
          bg: "#fff",
        },
        active: {
          main: "#56ca00",
          bg: "#eaf5ea"
        },
        login: {
          main: "#1554f6",
        },
      },
      typography: {
        fontFamily: "Poppins, sans-serif",
        fontWeightDark: 600,
        fontWeightBold: 700,
        fontWeightBolder: 800,
        fontWeightBoldest: 900,
      }
});