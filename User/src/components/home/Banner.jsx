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

const options = [
  'Home',
  'Latest Jobs',
  'Results',
  'Admit Card',
  'Answer Key',
  'Syllabus',
  'Search',
  'Contact Us',
];
const ITEM_HEIGHT = 48;
const Banner = () => {
  const [anchorEl, setAnchorEl] = useState();
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
    <Box p={3} pt={10} pb={10} mt={1} ml={{lg:20,md:15,sm:10, xs:7}} mr={{lg:20,md:15,sm:10, xs:7}} 
     fullWidth  sx={{ borderRadius:{xs:'16px',md:'16px 16px 0px 0px'}, background:theme.palette.background.default,display:'flex',alignItems:'center',justifyContent:'center'}}>
<Grid container spacing={3}>
<Grid item md={2}>
    <Box alignItems='center'>
<img height='100px' width='100px' borderRadius='16px' border='1px solid black' src="" alt="Logo" srcset="" />
    </Box>
</Grid>
<Grid item md={10}>
  <Box sx={{display:{md:'none'}, right:0}}>
  <IconButton
        aria-label="more"
        id="long-button"
        aria-controls={open ? 'long-menu' : undefined}
        aria-expanded={open ? 'true' : undefined}
        aria-haspopup="true"
        onClick={handleClick}
      >
        <MoreVertIcon />
      </IconButton>
      <Menu
        id="long-menu"
        MenuListProps={{
          'aria-labelledby': 'long-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            maxHeight: ITEM_HEIGHT * 4.5,
            width: '20ch',
          },
        }}
      >
        {options.map((option) => (
          <MenuItem key={option} selected={option === 'Pyxis'} onClick={handleClose}>
            {option}
          </MenuItem>
        ))}
      </Menu>
  </Box>

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