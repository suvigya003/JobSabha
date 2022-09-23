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
        ml={'1vw'} mr={'1vw'} 
        sx={{
          
            // color:'white',
            color:theme.palette.text.main,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-evenly",
          // bgcolor:'black',
          backgroundColor:theme.palette.background.dark,
        fontWeight:600,
        borderRadius:'0vw 0vw 1.5vw 1.5vw',
       
        }}
      >   
      <Link href="#" underline="none" color="inherit"><Typography variant='subtitle1' >Home </Typography> </Link>
      
      <Box sx={{
        height:'3.7vw',
        // backgroundColor:'white',
        backgroundColor:theme.palette.text.main,
        width:'0.1vw'
      }}/>
      <Link href="#" underline="none" color="inherit"><Typography variant='subtitle1'>Latest Jobs </Typography> </Link>
       
       <Box sx={{
        height:'3.7vw',
        // backgroundColor:'white',
        backgroundColor:theme.palette.text.main,
        width:'0.1vw'
      }}/>
      <Link href="#" underline="none" color="inherit"><Typography variant='subtitle1'> Results</Typography> </Link>
     
      <Box sx={{
        height:'3.7vw',
        // backgroundColor:'white',
        backgroundColor:theme.palette.text.main,
        width:'0.1vw'
      }}/>
      <Link href="#" underline="none" color="inherit"><Typography variant='subtitle1'>Admit Card </Typography> </Link>
      
      <Box sx={{
        height:'3.7vw',
        // backgroundColor:'white',
        backgroundColor:theme.palette.text.main,
        width:'0.1vw'
      }}/>
      <Link href="#" underline="none" color="inherit"><Typography variant='subtitle1'>Answer Key</Typography> </Link>
      
      <Box sx={{
        height:'3.7vw',
        // backgroundColor:'white',
        backgroundColor:theme.palette.text.main,
        width:'0.1vw'
      }}/>
      <Link href="#" underline="none" color="inherit"><Typography variant='subtitle1'>  Syllabus </Typography> </Link>
    
      <Box sx={{
        height:'3.7vw',
        // backgroundColor:'white',
        backgroundColor:theme.palette.text.main,
        width:'0.1vw'
      }}/>
      <Link href="#" underline="none" color="inherit"><Typography variant='subtitle1'>   Search </Typography> </Link>
   
      <Box sx={{
        height:'3.7vw',
        // backgroundColor:'white',
        backgroundColor:theme.palette.text.main,
        width:'0.1vw'
      }}/>
      <Link href="#" underline="none" color="inherit"><Typography variant='subtitle1'> Contact Us</Typography> </Link>
     
       </Box>
       
    </>
  );
};

export default Navbar;
