import React from "react";
import {
  Box,
  Link,
  Card,
  Table,
  Stack,
  Avatar,
  Button,
  Checkbox,
  TableRow,
  TableBody,
  TableCell,
  Container,
  Typography,
  TableContainer,
  TablePagination,
  CardHeader,
  Divider,
  Grid,
} from "@mui/material";
import TextField from "@mui/material/TextField";
const Navbar = () => {
  return (
    <>
      {/* <Box
        ml={3}
        mr={3}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-evenly",
        }}
      >       
        <Box
        pt={1} pb={1} pl={2}pr={2}
          fullWidth
          margin="auto"
          sx={{
            backgroundColor: "black",
            // backgroundColor:theme.palette.background.dark
          }}
        >
          <Typography
            sx={{
              // color:theme.palette.text.main,
              color: "white",
            }}
          >
            Home
          </Typography>
        </Box>
        <Box
        pt={1} pb={1} pl={2}pr={2}
          fullWidth
          margin="auto"
          sx={{
            backgroundColor: "black",
            // backgroundColor:theme.palette.background.dark
          }}
        >
          <Typography
            sx={{
              // color:theme.palette.text.main,
              color: "white",
            }}
          >
            Latest Jobs
          </Typography>
        </Box>
        <Box
        pt={1} pb={1} pl={2}pr={2}
          fullWidth
          margin="auto"
          sx={{
            backgroundColor: "black",
            // backgroundColor:theme.palette.background.dark
          }}
        >
          <Typography
            sx={{
              // color:theme.palette.text.main,
              color: "white",
            }}
          >
            Results
          </Typography>
        </Box>
        <Box
        pt={1} pb={1} pl={2}pr={2}
          fullWidth
          margin="auto"
          sx={{
            backgroundColor: "black",
            // backgroundColor:theme.palette.background.dark
          }}
        >
          <Typography
            sx={{
              // color:theme.palette.text.main,
              color: "white",
            }}
          >
            Admit Card
          </Typography>
        </Box>
        <Box
        pt={1} pb={1} pl={2}pr={2}
          fullWidth
          margin="auto"
          sx={{
            backgroundColor: "black",
            // backgroundColor:theme.palette.background.dark
          }}
        >
          <Typography
            sx={{
              // color:theme.palette.text.main,
              color: "white",
            }}
          >
            Answer Key
          </Typography>
        </Box>
        <Box
        pt={1} pb={1} pl={2}pr={2}
          fullWidth
          margin="auto"
          sx={{
            backgroundColor: "black",
            // backgroundColor:theme.palette.background.dark
          }}
        >
          <Typography
            sx={{
              // color:theme.palette.text.main,
              color: "white",
            }}
          >
            Syllabus
          </Typography>
        </Box>
        <Box
        pt={1} pb={1} pl={2}pr={2}
          fullWidth
          margin="auto"
          sx={{
            backgroundColor: "black",
            // backgroundColor:theme.palette.background.dark
          }}
        >
          <Typography
            sx={{
              // color:theme.palette.text.main,
              color: "white",
            }}
          >
            Search
          </Typography>
        </Box>
        <Box
        pt={1} pb={1} pl={2}pr={2}
          fullWidth
          margin="auto"
          sx={{
            // backgroundColor: "black",
            // backgroundColor:theme.palette.background.dark
          }}
        >
          <Typography
            sx={{
              // color:theme.palette.text.main,
              color: "white",
            }}
          >
            Contact Us
          </Typography>
          
        </Box>
      </Box> */}
      <Box
      // mt={1}
    //   p={3}
        ml={20}
        mr={20}
        sx={{
            color:'white',
            // color:theme.palette.text.main,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-evenly",
          bgcolor:'black',
        //   backgroundColor:theme.palette.background.dark,
        fontWeight:600,
        borderRadius:'0px 0px 16px 16px'
        }}
      >   
      <Link href="#" underline="none" color="inherit">Home </Link>
      
      <Box sx={{
        height:'50px',
        backgroundColor:'white',
        // backgroundColor:theme.palette.text.main,
        width:'1px'
      }}/>
      <Link href="#" underline="none" color="inherit">Latest Jobs </Link>
       
       <Box sx={{
        height:'50px',
        backgroundColor:'white',
        // backgroundColor:theme.palette.text.main,
        width:'1px'
      }}/>
      <Link href="#" underline="none" color="inherit"> Results</Link>
     
      <Box sx={{
        height:'50px',
        backgroundColor:'white',
        // backgroundColor:theme.palette.text.main,
        width:'1px'
      }}/>
      <Link href="#" underline="none" color="inherit">Admit Card </Link>
      
      <Box sx={{
        height:'50px',
        backgroundColor:'white',
        // backgroundColor:theme.palette.text.main,
        width:'1px'
      }}/>
      <Link href="#" underline="none" color="inherit">Answer Key</Link>
      
      <Box sx={{
        height:'50px',
        backgroundColor:'white',
        // backgroundColor:theme.palette.text.main,
        width:'1px'
      }}/>
      <Link href="#" underline="none" color="inherit">  Syllabus </Link>
    
      <Box sx={{
        height:'50px',
        backgroundColor:'white',
        // backgroundColor:theme.palette.text.main,
        width:'1px'
      }}/>
      <Link href="#" underline="none" color="inherit">   Search </Link>
   
      <Box sx={{
        height:'50px',
        backgroundColor:'white',
        // backgroundColor:theme.palette.text.main,
        width:'1px'
      }}/>
      <Link href="#" underline="none" color="inherit"> Contact Us</Link>
     
       </Box>
       <Box mt={1} ml={20} mr={20} 
       sx={{
display:'flex',
alignItems:'center',
justifyContent:'center'
       }}
       
       >
            <Typography fontWeight='700' variant='h6'
            sx={{
                // fontWeight:theme.typography.fontWeightBold
               }}
            >
            Sarkari Result : SarkariResult.Com Sarkari Naukri Latest Jobs Online Form at Sarkari Results 2022
            </Typography>
       </Box>
    </>
  );
};

export default Navbar;
