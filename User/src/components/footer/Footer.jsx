import React from "react";
// import "./Footer.css";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
// import WifiCalling3OutlinedIcon from '@mui/icons-material/WifiCalling3Outlined';
import PhoneInTalkOutlinedIcon from "@mui/icons-material/PhoneInTalkOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import { useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material";
import { fontSize } from "@mui/system";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AddIcon from "@mui/icons-material/Add";
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
const Footer = () => {
  const theme = useTheme();
  // const matches = useMediaQuery(theme.breakpoints.down('md'));
  return (
    <>
      <Box
      p={5}
        className="_footer"
        m={5}
        ml={20}
        mr={20}
        sx={{
          borderRadius: "16px",
          background:theme.palette.error.bg,
          
        }}
      >
        <Grid container spacing={3}>
<Grid item xs={12} sm={12} md={6} lg={2}>
<Typography variant='h6' fontWeight='600' mb={1}>
Quick Search
</Typography>
<Box sx={{display:'flex', flexDirection:'column'}}>
<Link href="#" underline="none" color="inherit">All Members </Link>
<Link href="#" underline="none" color="inherit">Premium Members </Link>
<Link href="#" underline="none" color="inherit">Free Members </Link>
<Link href="#" underline="none" color="inherit">Search </Link>
</Box>
</Grid>
<Grid item xs={12} sm={12} md={6} lg={2}>
<Typography variant='h6' fontWeight='600' mb={1}>
Useful Links
</Typography>
<Box sx={{display:'flex', flexDirection:'column'}}>

<Link href="#" underline="none" color="inherit">All Members </Link>
<Link href="#" underline="none" color="inherit">Premium Members </Link>
<Link href="#" underline="none" color="inherit">Free Members </Link>
<Link href="#" underline="none" color="inherit">Search </Link>
</Box>
</Grid>
<Grid item xs={12} sm={12} md={6} lg={4}>
<Typography variant='h6' fontWeight='600' mb={1}>
Share Your Feedback
</Typography>
<Typography sx={{ textAlign:'justify'}}>
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus tempore assumenda ducimus nisi minima veritatis odio cupiditate, ratione explicabo molestiae.
</Typography>
</Grid>
<Grid item xs={12} sm={12} md={6} lg={4}>
<Typography variant='h6' fontWeight='600' mb={1}>
Contact Us
</Typography>
<Box sx={{display:'flex'}}>
<LocationOnOutlinedIcon/>
<Typography sx={{textAlign:'justify'}}>
3rd & 4th Floor, SCO 54-55-56, Sector 17 A, Chandigarh
</Typography>
</Box>
<Box sx={{display:'flex'}}>
<PhoneInTalkOutlinedIcon/>
<Typography sx={{textAlign:'justify'}}>
+91888888888, +912222222222
</Typography>
</Box>
<Box sx={{display:'flex'}}>
<EmailOutlinedIcon/>
<Typography sx={{textAlign:'justify'}}>
abc@xyz.com
</Typography>
</Box>
</Grid>
<Grid item xs={12}>
<Box fullWidth mt={3} mb={1} sx={{bgcolor:'black',opacity:'0.3', height:'1px'}}/>
</Grid>

<Grid item xs={12}>
  <Typography sx={{textAlign:'center'}}>
  &copy; 2021 Indian Matrimonial | Trademarks and brands are the
          property of their respective owners.
  </Typography>
</Grid>
        </Grid>
      </Box>
      
      <center>
        <Box className="__copy">
          &copy; 2021 Indian Matrimonial | Trademarks and brands are the
          property of their respective owners.
        </Box>
      </center>
    </>
  );
};

export default Footer;
