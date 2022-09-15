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
import {theme} from '../../theme';

const Navbar = () => {
  return (
    <>
     
      <Box
        // ml={20}
        // mr={20}
        ml={{lg:20,md:15,sm:10, xs:7}} mr={{lg:20,md:15,sm:10, xs:7}} 
        sx={{
          
            // color:'white',
            color:theme.palette.text.main,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-evenly",
          // bgcolor:'black',
          backgroundColor:theme.palette.background.dark,
        fontWeight:600,
        borderRadius:'0px 0px 16px 16px',
        display:{xs:'none', md:'flex'}
        }}
      >   
      <Link href="#" underline="none" color="inherit">Home </Link>
      
      <Box sx={{
        height:'50px',
        // backgroundColor:'white',
        backgroundColor:theme.palette.text.main,
        width:'1px'
      }}/>
      <Link href="#" underline="none" color="inherit">Latest Jobs </Link>
       
       <Box sx={{
        height:'50px',
        // backgroundColor:'white',
        backgroundColor:theme.palette.text.main,
        width:'1px'
      }}/>
      <Link href="#" underline="none" color="inherit"> Results</Link>
     
      <Box sx={{
        height:'50px',
        // backgroundColor:'white',
        backgroundColor:theme.palette.text.main,
        width:'1px'
      }}/>
      <Link href="#" underline="none" color="inherit">Admit Card </Link>
      
      <Box sx={{
        height:'50px',
        // backgroundColor:'white',
        backgroundColor:theme.palette.text.main,
        width:'1px'
      }}/>
      <Link href="#" underline="none" color="inherit">Answer Key</Link>
      
      <Box sx={{
        height:'50px',
        // backgroundColor:'white',
        backgroundColor:theme.palette.text.main,
        width:'1px'
      }}/>
      <Link href="#" underline="none" color="inherit">  Syllabus </Link>
    
      <Box sx={{
        height:'50px',
        // backgroundColor:'white',
        backgroundColor:theme.palette.text.main,
        width:'1px'
      }}/>
      <Link href="#" underline="none" color="inherit">   Search </Link>
   
      <Box sx={{
        height:'50px',
        // backgroundColor:'white',
        backgroundColor:theme.palette.text.main,
        width:'1px'
      }}/>
      <Link href="#" underline="none" color="inherit"> Contact Us</Link>
     
       </Box>
       
    </>
  );
};

export default Navbar;
