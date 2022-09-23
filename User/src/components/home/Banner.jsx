import React,{useState} from 'react'
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
  import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import {theme} from '../../theme';



const Banner = () => {
  
  return (
    <>
    <Box p={'3vw'} pt={'7vw'} pb={'7vw'} mt={'1vw'} ml={'1vw'} mr={'1vw'} 
     fullWidth  sx={{ borderRadius:'1.5vw 1.5vw 0vw 0vw', background:theme.palette.background.default,display:'flex',alignItems:'center',justifyContent:'center'}}>
<Grid container spacing={'2vw'}>
<Grid item md={'10vw'}>
    <Box alignItems='center'>
<img height='2vw' width='2vw' borderRadius='16px'  src="" alt="Logo" srcset="" />
    </Box>
</Grid>
<Grid item md={'30vw'} >
  

    <Box  sx={{display:'flex',flexDirection:'column', justifyContent:'center', alignItems:'center', 
// color: theme.palette.text.main,
// color:'#D4AFB9'
color:'white'
}}>
        <Typography variant='h3' fontWeight='600' textAlign={'center'}>SARKARI-ROJGAR</Typography>
        <Typography variant='h6' fontWeight='600' textAlign={'center'}> WWW.SARKARIROJGAR.COM</Typography>
    </Box>
</Grid>
</Grid>
    </Box>    
    
    </>
  )
}

export default Banner