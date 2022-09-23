import React from "react";
import { Component } from 'react';
import { useNavigate, Link } from "react-router-dom";
import { BrowserRouter as Router,Routes, Outlet,Route } from 'react-router-dom';
import {
  Box,
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
import PostPage from "../post/PostPage";

const Blocks = () => {
  const navigate = useNavigate();
  return (
    <>
    
    <Box mt={'0.7vw'} 
    // ml={20} mr={20}
    ml={'1vw'} mr={'1vw'}
       sx={{
display:'flex',
alignItems:'center',
justifyContent:'center'
       }}
       
       >
            <Typography fontWeight='700' variant='h6'
            sx={{
                fontWeight:theme.typography.fontWeightBold,
                color:theme.palette.text.main,
                textAlign:'center'
               }}
            >
            Sarkari Result : SarkariResult.Com Sarkari Naukri Latest Jobs Online Form at Sarkari Results 2022
            </Typography>
       </Box>
       <Box m={'4vw'} ml={'1vw'} mr={'1vw'} mt={'3vw'}>
        <Grid container spacing={'1.2vw'}>
          <Grid item maxWidth={'24.7vw'}>
            <Box
              p={'0.8vw'}
              sx={{
                bgcolor:theme.palette.background.one,
                borderRadius: "1.5vw",
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent:'center',
                border:'0.3vw solid #B0BDFF',
                overflow:'hidden'
              }}
            >            
              <Link htmlFor="#" color="inherit" underline="none">
                <Typography
                  variant="h5"
                  fontWeight="600"
                  sx={{
                    // color: "white",
                    fontFamily:theme.typography.fontFamily,
                    textAlign:'center',
                    color:theme.palette.text.main,
                    //subtitle1
                  }}
                >
                  UPSC OTR 2022 REGISTRATION
                </Typography>
              </Link>
            </Box>
          </Grid>
          <Grid item maxWidth={'24.7vw'}>
            <Box
              p={'0.8vw'}
              sx={{
                bgcolor:theme.palette.background.one,
                borderRadius: "1.5vw",
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent:'center',
                border:'0.3vw solid #B0BDFF',
                overflow:'hidden'
              }}
            >            
              <Link href="#" color="inherit" underline="none">
                <Typography
                  variant="h5"
                  fontWeight="600"
                  sx={{
                    // color: "white",
                    fontFamily:theme.typography.fontFamily,
                    textAlign:'center',
                    color:theme.palette.text.main,
                    //subtitle1
                  }}
                >
                  UPSC OTR 2022 REGISTRATION
                </Typography>
              </Link>
            </Box>
          </Grid>
          <Grid item maxWidth={'24.7vw'}>
            <Box
              p={'0.8vw'}
              sx={{
                bgcolor:theme.palette.background.two,
                // bgcolor: "red",
                borderRadius: "1.5vw",
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent:'center',
                border:'0.3vw solid #FFC093'
              }}
            >            
              <Link href="#" color="inherit" underline="none">
                <Typography
                  variant="h5"
                  fontWeight="600"
                  sx={{
                    // color: "white",
                    textAlign:'center',
                    color:theme.palette.text.main,
                    //subtitle1
                  }}
                >
                  UPSC OTR 2022 REGISTRATION
                </Typography>
              </Link>
            </Box>
          </Grid>
          <Grid item maxWidth={'24.7vw'}>
            <Box
              p={'0.8vw'}
              sx={{
                bgcolor:theme.palette.background.three,
                // bgcolor: "red",
                borderRadius: "1.5vw",
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent:'center',
                border:'0.3vw solid #F6BCFF'
               
              }}
            >            
              <Link href="#" color="inherit" underline="none">
                <Typography
                  variant="h5"
                  fontWeight="600"
                  sx={{
                    // color: "white",
                    textAlign:'center',
                    color:theme.palette.text.main,
                    //subtitle1
                  }}
                >
                  UPSC OTR 2022 REGISTRATION
                </Typography>
              </Link>
            </Box>
          </Grid>
          <Grid item maxWidth={'24.7vw'}>
            <Box
              p={'0.8vw'}
              sx={{
                bgcolor:theme.palette.background.four,
                // bgcolor: "red",
                borderRadius: "1.5vw",
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent:'center',
                border:'0.3vw solid #B0BDFF'
              }}
            >            
              <Link href="#" color="inherit" underline="none">
                <Typography
                  variant="h5"
                  fontWeight="600"
                  sx={{
                    // color: "white",
                    textAlign:'center',
                    color:theme.palette.text.main,
                    //subtitle1
                  }}
                >
                  UPSC OTR 2022 REGISTRATION
                </Typography>
              </Link>
            </Box>
          </Grid>
          <Grid item  maxWidth={'24.7vw'} >
            <Box
              p={'0.8vw'}
              sx={{
                bgcolor:theme.palette.background.five,
                // bgcolor: "red",
                borderRadius: "1.5vw",
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent:'center',
                border:'0.3vw solid #F6BCFF'
              }}
            >            
              <Link href="#" color="inherit" underline="none">
                <Typography
                  variant="h5"
                  fontWeight="600"
                  sx={{
                    // color: "white",
                    textAlign:'center',
                    color:theme.palette.text.main,
                    //subtitle1
                  }}
                >
                  UPSC OTR 2022 REGISTRATION
                </Typography>
              </Link>
            </Box>
          </Grid>
          <Grid item  maxWidth={'24.7vw'} >
            <Box
              p={'0.8vw'}
              sx={{
                bgcolor:theme.palette.background.six,
                // bgcolor: "red",
                borderRadius: "1.5vw",
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent:'center',
                border:'0.3vw solid #9FF3FF'
              }}
            >            
              <Link href="#" color="inherit" underline="none">
                <Typography
                  variant="h5"
                  fontWeight="600"
                  sx={{
                    // color: "white",
                    textAlign:'center',
                    color:theme.palette.text.main,
                    //subtitle1
                  }}
                >
              UPSC OTR 2022 REGISTRATION 
                </Typography>
              </Link>
            </Box>
          </Grid>
          <Grid item  maxWidth={'24.7vw'} >
            <Box
              p={'0.8vw'}
              sx={{
                bgcolor:theme.palette.background.seven,
                // bgcolor: "red",
                borderRadius: "1.5vw",
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent:'center',
                border:'0.3vw solid #FFC093'
              }}
            >            
              <Link href="#" color="inherit" underline="none">
                <Typography
                  variant="h5"
                  fontWeight="600"
                  sx={{
                    textAlign:'center',
                    color:theme.palette.text.main,
                    //subtitle1
                  }}
                >
                  UPSC OTR 2022 REGISTRATION
                </Typography>
              </Link>
            </Box>
          </Grid>
       
        </Grid>
      </Box>
      <Outlet />
    
     
    </>
  );
};

export default Blocks;
