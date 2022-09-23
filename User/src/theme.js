import { createTheme, responsiveFontSizes } from "@mui/material";

export const theme = createTheme({
    palette: {
        primary: {
          main: "#0d47a1",
          light: "#2196f3",
          dark: "#424242",
        },
        secondary: {
          main: "#fff",
          // dark: "#fff",
        },
        text: {
          main: "#1C1A55", //banner and navbar content
          light: "#d2d2d2", 
          dark: "#050748", //navbar below content
          default: "#fff",
        },
        background: {
          //  default: "#7EC4CF",
          default: "#537186", // for banner bg
          main: "#FFE9DC", // for table's box bg color
          card1: "#FFDADB", // for post 1's bgcolor
          card2: "#FFEDE1", // for post 2's bgcolor
          card3: "#D4C2B4", // for post 3's bgcolor
          card4: "#D8D8D8", // for post 4's bgcolor 
          card5: "#F6F1EE", // for post 4's bgcolor 
          dark:"#F2B9A2", //for navbar box
          one:"#F3F5FF", //bloc 1 bg color
          two:"#FFF3E6", //bloc 2 bg color
          three:"#FBEEFD", //bloc 3 bg color
          four:"#F3F5FF", //bloc 4 bg color
          five:"#FBEEFD", //bloc 5 bg color
          six:"#EFFDFF", //bloc 6 bg color
          seven:"#FFF3E6", //bloc 7 bg color
          eight:"#FBEEFD", //bloc 8 bg color
        },
        error: {
          main: "#ffa726", //for table's box border color
          bg: "#ffebeb", // for footer's bg
           
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
        // lineSpacing:'20px',
        fontWeightDark: 600,
        fontWeightBold: 700,
        fontWeightBolder: 800,
        fontWeightBoldest: 900,
        h1: {
          fontSize: "46px",
          fontWeight: 400,
          lineHeight: "50px",
          margin: "0 0 0 0",
        },
        h2: {
          fontSize: "26px",
          fontWeight: 400,
          lineHeight: "30px",
          margin: "0 0 0 0",
        },
        h3: {
          fontSize: '4.5vw',
          fontWeight: 600,
          lineHeight: "6vw",
          margin: "0 0 0 0",
          // ...responsiveFontSizes({md:'46px'}),
        },
        h4: {
          fontSize: "1.5vw",
          fontWeight: 600,
          lineHeight: "32px",
          margin: "0 0 0 0",
        },
        h5: {
          fontSize: '1.7vw',
          fontWeight: 600,
          lineHeight: "1.8vw",
          margin: "0 0 0 0",
        },
        h6: {
            fontSize: "1.5vw",
            fontWeight: 600,
            lineHeight: "28px",
            margin: "0 0 0 0",
        },
        body1: {
          fontSize: "1.2vw",
          fontWeight: 400,
          lineHeight: "2.2vw",
          margin: "0 0 0 0",
      },
      subtitle1: {
        fontSize: "1.3vw",
        fontWeight: 600,
        // lineHeight: "28px",
        margin: "0 0 0 0",
    },
      },
      // breakpoints: {
      //   values: {
      //     xs: 0,
      //     sm: 600,
      //     md: 900,
      //     lg: 1200,
      //     xl: 1536,
      //   },
      // },
});