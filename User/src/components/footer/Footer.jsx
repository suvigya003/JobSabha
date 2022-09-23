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
      p={'3vw'}
        className="_footer"
        m={'4vw'}
        ml={'1vw'} mr={'1vw'} 
        // ml={20}
        // mr={20}
        sx={{
          borderRadius: "1.5vw",
          background:theme.palette.error.bg,
          
        }}
      >
        <Grid container spacing={'6vw'}>
<Grid item  maxWidth={'20vw'}>
<Typography variant='h6' fontWeight='600' mb={1}>
Quick Search
</Typography>
<Box sx={{display:'flex', flexDirection:'column'}}>
<Link href="#" underline="none" color="inherit"><Typography variant='body1'>All Members</Typography> </Link>
<Link href="#" underline="none" color="inherit"><Typography variant='body1'>Premium Members</Typography> </Link>
<Link href="#" underline="none" color="inherit"><Typography variant='body1'>Free Members</Typography> </Link>
<Link href="#" underline="none" color="inherit"><Typography variant='body1'>Search</Typography> </Link>
</Box>
</Grid>
<Grid item maxWidth={'20vw'}>
<Typography variant='h6' fontWeight='600' mb={1}>
Useful Links
</Typography>
<Box sx={{display:'flex', flexDirection:'column'}}>

<Link href="#" underline="none" color="inherit"><Typography variant='body1'>All Members </Typography> </Link>
<Link href="#" underline="none" color="inherit"><Typography variant='body1'>Premium Members </Typography> </Link>
<Link href="#" underline="none" color="inherit"><Typography variant='body1'>Free Members </Typography> </Link>
<Link href="#" underline="none" color="inherit"><Typography variant='body1'>Search </Typography> </Link>
</Box>
</Grid>
<Grid item maxWidth={'31vw'}>
<Typography variant='h6' fontWeight='600' mb={1}>
Share Your Feedback
</Typography>
<Typography variant='body1'sx={{ textAlign:'left',}}>
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus tempore assumenda ducimus nisi minima veritatis odio cupiditate, ratione explicabo molestiae.
</Typography>
</Grid>
<Grid item maxWidth={'28vw'}>
<Typography variant='h6' fontWeight='600' mb={1}>
Contact Us
</Typography>
<Box sx={{display:'flex'}}>
<LocationOnOutlinedIcon/>
<Typography variant='body1'sx={{textAlign:'justify'}}>
3rd & 4th Floor, SCO 54-55-56, Sector 17 A, Chandigarh
</Typography>
</Box>
<Box sx={{display:'flex'}}>
<PhoneInTalkOutlinedIcon maxWidth={'1vw'}/>
<Typography variant='body1'sx={{textAlign:'justify'}}>
+91888888888, +912222222222
</Typography>
</Box>
<Box sx={{display:'flex'}}>
<EmailOutlinedIcon/>
<Typography variant='body1'sx={{textAlign:'justify'}}>
abc@xyz.com
</Typography>
</Box>
</Grid>
<Grid item xs={12}>
<Box fullWidth sx={{bgcolor:'black',opacity:'0.3', height:'1px'}}/>
</Grid>
        </Grid>
        <Typography variant='body1' mt={'1vw'} sx={{textAlign:'center'}}>
  &copy; 2021 Indian Matrimonial | Trademarks and brands are the
          property of their respective owners.
  </Typography>
      </Box>
    </>
  );
};

export default Footer;
