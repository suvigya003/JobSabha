import React from 'react'
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

const Tables = () => {
  return (
    <>
        <Box m={'4vw'} mb={'1.6vw'} 
        ml={'8vw'} mr={'6vw'}
        // ml={25}mr={25}
        >
            <Grid container spacing={'1.2vw'}>
              <Grid  item minWidth={'29vw'}>
<Box 
sx={{
  border:'0.3vw solid'+ theme.palette.error.main,
  borderRadius:'1.5vw'
}}
>
<Box p={'0.5vw'}
sx={{
  bgcolor:theme.palette.background.main,
  borderRadius:'1.5vw 1.5vw 0vw 0vw'
}}
>
<Typography
 variant="h5"
 fontWeight="600"
 sx={{
  color:theme.palette.text.main,
   textAlign:'center',
 }}
>
  Result
</Typography>
</Box>
<ul>
  <li><Link href="#"><Typography variant='body1'>UP ITI ROUND 3 RESULT</Typography> </Link></li>
  <li><Link href="#"><Typography variant='body1'>JHARKHAND ITI ROUND 3 COMPARTMENT</Typography> </Link></li>
  <li><Link href="#"><Typography variant='body1'>UP ITI ROUND 3 COMPARTMENT</Typography> </Link></li>
  <li><Link href="#"><Typography variant='body1'>MP ITI ROUND 3 COMPARTMENT</Typography> </Link></li>
  <li><Link href="#"><Typography variant='body1'>MP ITI ROUND 3 MENT</Typography> </Link></li>
  <li><Link href="#"><Typography variant='body1'>MP ITI ROUND 3 MENT RESULT</Typography> </Link></li>
  <li><Link href="#"><Typography variant='body1'>MP ITI 3 MENT RESULT</Typography> </Link></li>
  <li><Link href="#"><Typography variant='body1'>DFASP ITI 3 MENT RESULT</Typography> </Link></li>
</ul>
<Box mr='0.2vw' mb='0.6vw' 
sx={{
  right:0,
  display:'flex',
  justifyContent:'end'
}}
>
<Button 
sx={{
  color:theme.palette.text.main,
  textTransform: 'none',
}}
>
  <Typography fontWeight="700">
    View More
  </Typography>
</Button>
</Box>

</Box>
              </Grid>
              <Grid  item minWidth={'29vw'}>
<Box 
sx={{
  border:'0.3vw solid'+ theme.palette.error.main,
  borderRadius:'1.5vw'
}}
>
<Box p={'0.5vw'}
sx={{
  bgcolor:theme.palette.background.main,
  borderRadius:'1.5vw 1.5vw 0vw 0vw'
}}
>
<Typography
 variant="h5"
 fontWeight="600"
 sx={{
  color:theme.palette.text.main,
   textAlign:'center',
 }}
>
  Admit Card
</Typography>
</Box>
<ul>
  <li><Link href="#"><Typography variant='body1'>UP ITI ROUND 3 RESULT</Typography> </Link></li>
  <li><Link href="#"><Typography variant='body1'>JHARKHAND ITI ROUND 3 COMPARTMENT</Typography> </Link></li>
  <li><Link href="#"><Typography variant='body1'>UP ITI ROUND 3 COMPARTMENT</Typography> </Link></li>
  <li><Link href="#"><Typography variant='body1'>MP ITI ROUND 3 COMPARTMENT</Typography> </Link></li>
  <li><Link href="#"><Typography variant='body1'>MP ITI ROUND 3 MENT</Typography> </Link></li>
  <li><Link href="#"><Typography variant='body1'>MP ITI ROUND 3 MENT RESULT</Typography> </Link></li>
  <li><Link href="#"><Typography variant='body1'>MP ITI 3 MENT RESULT</Typography> </Link></li>
  <li><Link href="#"><Typography variant='body1'>DFASP ITI 3 MENT RESULT</Typography> </Link></li>
</ul>
<Box  mr='0.2vw' mb='0.6vw'
sx={{
  right:0,
  display:'flex',
  justifyContent:'end'
}}
>
<Button 
sx={{
  color:theme.palette.text.main,
  textTransform: 'none',
}}
>
  <Typography fontWeight="700">
    View More
  </Typography>
</Button>
</Box>
</Box>
              </Grid>
              <Grid  item minWidth={'29vw'}>
<Box 
sx={{
  border:'0.3vw solid'+ theme.palette.error.main,
  borderRadius:'1.5vw'
}}
>
<Box p={'0.5vw'}
sx={{
  bgcolor:theme.palette.background.main,
  borderRadius:'1.5vw 1.5vw 0vw 0vw'
}}
>
<Typography
 variant="h5"
 fontWeight="600"
 sx={{
  color:theme.palette.text.main,
   textAlign:'center',
 }}
>
  Latest Jobs
</Typography>
</Box>
<ul>
  <li><Link href="#"><Typography variant='body1'>UP ITI ROUND 3 RESULT</Typography> </Link></li>
  <li><Link href="#"><Typography variant='body1'>JHARKHAND ITI ROUND 3 COMPARTMENT</Typography> </Link></li>
  <li><Link href="#"><Typography variant='body1'>UP ITI ROUND 3 COMPARTMENT</Typography> </Link></li>
  <li><Link href="#"><Typography variant='body1'>MP ITI ROUND 3 COMPARTMENT</Typography> </Link></li>
  <li><Link href="#"><Typography variant='body1'>MP ITI ROUND 3 MENT</Typography> </Link></li>
  <li><Link href="#"><Typography variant='body1'>MP ITI ROUND 3 MENT RESULT</Typography> </Link></li>
  <li><Link href="#"><Typography variant='body1'>MP ITI 3 MENT RESULT</Typography> </Link></li>
  <li><Link href="#"><Typography variant='body1'>DFASP ITI 3 MENT RESULT</Typography> </Link></li>
</ul>
<Box mr='0.2vw' mb='0.6vw'
sx={{
  right:0,
  display:'flex',
  justifyContent:'end'
}}
>
<Button 
sx={{
  color:theme.palette.text.main,
  textTransform: 'none',
}}
>
  <Typography fontWeight="700">
    View More
  </Typography>
</Button>
</Box>
</Box>
              </Grid>
            </Grid>            
        </Box>
        <Box m={'1.2vw'} 
        ml={'8vw'} mr={'6vw'}
        // ml={25}mr={25}
         mb={'4vw'}>
<Grid container spacing={'1.2vw'}>
<Grid  item maxWidth={'58vw'}>
<Grid container spacing={'0.8vw'}  >
<Grid  item minWidth={'28.5vw'}>
<Box 
sx={{
  border:'0.3vw solid'+ theme.palette.error.main,
  borderRadius:'1.5vw'
}}
>
<Box p={'0.5vw'}
sx={{
  bgcolor:theme.palette.background.main,
  borderRadius:'1.5vw 1.5vw 0vw 0vw'
}}
>
<Typography
 variant="h5"
 fontWeight="600"
 sx={{
  color:theme.palette.text.main,
   textAlign:'center',
 }}
>
  Answer Key
</Typography>
</Box>
<ul>
  <li><Link href="#"><Typography variant='body1'>UP ITI ROUND 3 RESULT</Typography> </Link></li>
  <li><Link href="#"><Typography variant='body1'>JHARKHAND ITI ROUND 3 COMPARTMENT</Typography> </Link></li>
  <li><Link href="#"><Typography variant='body1'>UP ITI ROUND 3 COMPARTMENT</Typography> </Link></li>
  <li><Link href="#"><Typography variant='body1'>MP ITI ROUND 3 COMPARTMENT</Typography> </Link></li>
  <li><Link href="#"><Typography variant='body1'>MP ITI ROUND 3 MENT</Typography> </Link></li>
  <li><Link href="#"><Typography variant='body1'>MP ITI ROUND 3 MENT RESULT</Typography> </Link></li>
  <li><Link href="#"><Typography variant='body1'>MP ITI 3 MENT RESULT</Typography> </Link></li>
  <li><Link href="#"><Typography variant='body1'>DFASP ITI 3 MENT RESULT</Typography> </Link></li>
</ul>
<Box mr='0.2vw' mb='0.6vw'
sx={{
  right:0,
  display:'flex',
  justifyContent:'end'
}}
>
<Button 
sx={{
  color:theme.palette.text.main,
  textTransform: 'none',
}}
>
  <Typography fontWeight="700">
    View More
  </Typography>
</Button>
</Box>

</Box>
</Grid>
<Grid  item minWidth={'28.5vw'}>
<Box ml={'0.5vw'} mr={'-0.5vw'}
sx={{
  border:'0.3vw solid'+ theme.palette.error.main,
  borderRadius:'1.5vw'
}}
>
<Box p={'0.5vw'}
sx={{
  bgcolor:theme.palette.background.main,
  borderRadius:'1.5vw 1.5vw 0vw 0vw'
}}
>
<Typography
 variant="h5"
 fontWeight="600"
 sx={{
  color:theme.palette.text.main,
   textAlign:'center',
 }}
>
  Syllabus
</Typography>
</Box>
<ul>
  <li><Link href="#"><Typography variant='body1'>UP ITI ROUND 3 RESULT</Typography> </Link></li>
  <li><Link href="#"><Typography variant='body1'>JHARKHAND ITI ROUND 3 COMPARTMENT</Typography> </Link></li>
  <li><Link href="#"><Typography variant='body1'>UP ITI ROUND 3 COMPARTMENT</Typography> </Link></li>
  <li><Link href="#"><Typography variant='body1'>MP ITI ROUND 3 COMPARTMENT</Typography> </Link></li>
  <li><Link href="#"><Typography variant='body1'>MP ITI ROUND 3 MENT</Typography> </Link></li>
  <li><Link href="#"><Typography variant='body1'>MP ITI ROUND 3 MENT RESULT</Typography> </Link></li>
  <li><Link href="#"><Typography variant='body1'>MP ITI 3 MENT RESULT</Typography> </Link></li>
  <li><Link href="#"><Typography variant='body1'>DFASP ITI 3 MENT RESULT</Typography> </Link></li>
</ul>
<Box mr='0.2vw' mb='0.6vw'
sx={{
  // right:0,
  display:'flex',
  justifyContent:'end'
}}
>
<Button 
sx={{
  color:theme.palette.text.main,
  textTransform: 'none',
}}
>
  <Typography fontWeight="700">
    View More
  </Typography>
</Button>
</Box>

</Box>
</Grid>

<Grid  item minWidth={'28.5vw'}>
<Box mt={'1vw'} 
sx={{
  border:'0.3vw solid'+ theme.palette.error.main,
  borderRadius:'1.5vw'
}}
>
<Box p={'0.5vw'}
sx={{
  bgcolor:theme.palette.background.main,
  borderRadius:'1.5vw 1.5vw 0vw 0vw',
  // minHeight:'auto'
}}
>
<Typography
 variant="h5"
 fontWeight="600"
 sx={{
  color:theme.palette.text.main,
   textAlign:'center',
  //  fontSize:'1em',
 }}
>
  Certificate Verification
</Typography>
</Box>
<ul>
  <li><Link href="#"><Typography variant='body1'>UP ITI ROUND 3 RESULT</Typography> </Link></li>
  <li><Link href="#"><Typography variant='body1'>JHARKHAND ITI ROUND 3 COMPARTMENT</Typography> </Link></li>
  <li><Link href="#"><Typography variant='body1'>UP ITI ROUND 3 COMPARTMENT</Typography> </Link></li>
  <li><Link href="#"><Typography variant='body1'>MP ITI ROUND 3 COMPARTMENT</Typography> </Link></li>
  <li><Link href="#"><Typography variant='body1'>MP ITI ROUND 3 MENT</Typography> </Link></li>
  <li><Link href="#"><Typography variant='body1'>MP ITI ROUND 3 MENT RESULT</Typography> </Link></li>
  <li><Link href="#"><Typography variant='body1'>MP ITI 3 MENT RESULT</Typography> </Link></li>
  <li><Link href="#"><Typography variant='body1'>DFASP ITI 3 MENT RESULT</Typography> </Link></li>
</ul>
<Box mr='0.2vw' mb='0.6vw'
sx={{
  right:0,
  display:'flex',
  justifyContent:'end'
}}
>
<Button 
sx={{
  color:theme.palette.text.main,
  textTransform: 'none',
}}
>
  <Typography fontWeight="700">
    View More
  </Typography>
</Button>
</Box>

</Box>
</Grid>
<Grid  item minWidth={'28.5vw'}>
<Box ml={'0.5vw'} mr={'-0.5vw'} mt={'1vw'}
sx={{
  border:'0.3vw solid'+ theme.palette.error.main,
  borderRadius:'1.5vw'
}}
>
<Box p={'0.5vw'}
sx={{
  bgcolor:theme.palette.background.main,
  borderRadius:'1.5vw 1.5vw 0vw 0vw'
}}
>
<Typography
 variant="h5"
 fontWeight="600"
 sx={{
  color:theme.palette.text.main,
   textAlign:'center',
 }}
>
  Important
</Typography>
</Box>
<ul>
  <li><Link href="#"><Typography variant='body1'>UP ITI ROUND 3 RESULT</Typography> </Link></li>
  <li><Link href="#"><Typography variant='body1'>JHARKHAND ITI ROUND 3 COMPARTMENT</Typography> </Link></li>
  <li><Link href="#"><Typography variant='body1'>UP ITI ROUND 3 COMPARTMENT</Typography> </Link></li>
  <li><Link href="#"><Typography variant='body1'>MP ITI ROUND 3 COMPARTMENT</Typography> </Link></li>
  <li><Link href="#"><Typography variant='body1'>MP ITI ROUND 3 MENT</Typography> </Link></li>
  <li><Link href="#"><Typography variant='body1'>MP ITI ROUND 3 MENT RESULT</Typography> </Link></li>
  <li><Link href="#"><Typography variant='body1'>MP ITI 3 MENT RESULT</Typography> </Link></li>
  <li><Link href="#"><Typography variant='body1'>DFASP ITI 3 MENT RESULT</Typography> </Link></li>
</ul>
<Box mr='0.2vw' mb='0.6vw'
sx={{
  right:0,
  display:'flex',
  justifyContent:'end'
}}
>
<Button
sx={{
  color:theme.palette.text.main,
  textTransform: 'none',
}}
>
  <Typography fontWeight="700">
    View More
  </Typography>
</Button>
</Box>

</Box>
</Grid>
</Grid>
</Grid>
<Grid  item minWidth={'29vw'} >
<Box 
sx={{
  border:'0.3vw solid'+ theme.palette.error.main,
  borderRadius:'1.5vw'
}}
>
<Box p={'0.5vw'}
sx={{
  bgcolor:theme.palette.background.main,
  borderRadius:'1.5vw 1.5vw 0vw 0vw'
}}
>
<Typography
 variant="h5"
 fontWeight="600"
 sx={{
  color:theme.palette.text.main,
   textAlign:'center',
 }}
>
  Admission
</Typography>
</Box>
<ul>
  <li><Link href="#"><Typography variant='body1'>UP ITI Round 3 Result</Typography> </Link></li>
  <li><Link href="#"><Typography variant='body1'>JHARKHAND ITI ROUND 3 COMPARTMENT</Typography> </Link></li>
  <li><Link href="#"><Typography variant='body1'>UP ITI ROUND 3 COMPARTMENT</Typography> </Link></li>
  <li><Link href="#"><Typography variant='body1'>MP ITI ROUND 3 COMPARTMENT</Typography> </Link></li>
  <li><Link href="#"><Typography variant='body1'>MP ITI ROUND 3 MENT</Typography> </Link></li>
  <li><Link href="#"><Typography variant='body1'>MP ITI ROUND 3 MENT RESULT</Typography> </Link></li>
  <li><Link href="#"><Typography variant='body1'>DFASP ITI 3 MENT RESULT</Typography> </Link></li>
  <li><Link href="#"><Typography variant='body1'>UP ITI Round 3 Result</Typography> </Link></li>
  <li><Link href="#"><Typography variant='body1'>JHARKHAND ITI ROUND 3 COMPARTMENT</Typography> </Link></li>
  <li><Link href="#"><Typography variant='body1'>UP ITI ROUND 3 COMPARTMENT</Typography> </Link></li>
  <li><Link href="#"><Typography variant='body1'>MP ITI ROUND 3 COMPARTMENT</Typography> </Link></li>
  <li><Link href="#"><Typography variant='body1'>MP ITI ROUND 3 MENT</Typography> </Link></li>
  <li><Link href="#"><Typography variant='body1'>MP ITI ROUND 3 MENT RESULT</Typography> </Link></li>
  <li><Link href="#"><Typography variant='body1'>MP ITI 3 MENT RESULT</Typography> </Link></li>
  <li><Link href="#"><Typography variant='body1'>DFASP ITI 3 MENT RESULT</Typography> </Link></li>
  <li><Link href="#"><Typography variant='body1'>MP ITI ROUND 3 MENT</Typography> </Link></li>
  <li><Link href="#"><Typography variant='body1'>MP ITI ROUND 3 MENT RESULT</Typography> </Link></li>
  <li><Link href="#"><Typography variant='body1'>MP ITI 3 MENT RESULT</Typography> </Link></li>
  <li><Link href="#"><Typography variant='body1'>DFASP ITI 3 MENT RESULT</Typography> </Link></li>
</ul>
<Box mr='0.2vw' mb='0.6vw'
sx={{
  right:0,
  display:'flex',
  justifyContent:'end'
}}
>
<Button 
sx={{
  color:theme.palette.text.main,
  textTransform: 'none',
}}
>
  <Typography fontWeight="700">
    View More
  </Typography>
</Button>
</Box>

</Box>
</Grid>
</Grid>
        </Box>
       
      
    </>
  )
}

export default Tables