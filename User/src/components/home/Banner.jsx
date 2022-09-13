import React from 'react'
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
  } from '@mui/material';
  import TextField from '@mui/material/TextField';
// import theme from '../theme';

const Banner = () => {
  return (
    <>
    <Box p={3} mt={1} ml={20} fullWidth mr={20} sx={{ borderRadius:'16px 16px 0px 0px', background:'red',display:'flex',alignItems:'center',justifyContent:'center'}}>
<Grid container spacing={3}>
<Grid item md={2}>
    <Box alignItems='center'>
<img height='100px' width='100px' borderRadius='16px' border='1px solid black' src="" alt="Logo" srcset="" />
    </Box>
</Grid>
<Grid item md={8}>
    <Box  sx={{display:'flex',flexDirection:'column', justifyContent:'center', alignItems:'center', 
// color: theme.palette.text.main,
color:'white'
}}>
        <Typography variant='h3' fontWeight='600'>JOB SABHA</Typography>
        <Typography variant='h6' fontWeight='600'> WWW.JOBSABHA.COM</Typography>
    </Box>
</Grid>
</Grid>
    </Box>    
    
    </>
  )
}

export default Banner