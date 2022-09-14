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
        <Box m={5} mb={3} ml={25}mr={25}>
            <Grid container spacing={3}>
              <Grid item md={4}>
<Box 
sx={{
  border:'2px solid'+ theme.palette.error.main,
  borderRadius:'16px'
}}
>
<Box p={0.5}
sx={{
  bgcolor:theme.palette.background.main,
  borderRadius:'16px 16px 0px 0px'
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
  <li><Link href="#">UP ITI ROUND 3 RESULT</Link></li>
  <li><Link href="#">JHARKHAND ITI ROUND 3 COMPARTMENT</Link></li>
  <li><Link href="#">UP ITI ROUND 3 COMPARTMENT</Link></li>
  <li><Link href="#">MP ITI ROUND 3 COMPARTMENT</Link></li>
  <li><Link href="#">MP ITI ROUND 3 MENT</Link></li>
  <li><Link href="#">MP ITI ROUND 3 MENT RESULT</Link></li>
  <li><Link href="#">MP ITI 3 MENT RESULT</Link></li>
  <li><Link href="#">DFASP ITI 3 MENT RESULT</Link></li>
</ul>
<Box mr='10px' mb='10px' 
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
              <Grid item md={4}>
<Box 
sx={{
  border:'2px solid'+ theme.palette.error.main,
  borderRadius:'16px'
}}
>
<Box p={0.5}
sx={{
  bgcolor:theme.palette.background.main,
  borderRadius:'16px 16px 0px 0px'
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
  <li><Link href="#">UP ITI ROUND 3 RESULT</Link></li>
  <li><Link href="#">JHARKHAND ITI ROUND 3 COMPARTMENT</Link></li>
  <li><Link href="#">UP ITI ROUND 3 COMPARTMENT</Link></li>
  <li><Link href="#">MP ITI ROUND 3 COMPARTMENT</Link></li>
  <li><Link href="#">MP ITI ROUND 3 MENT</Link></li>
  <li><Link href="#">MP ITI ROUND 3 MENT RESULT</Link></li>
  <li><Link href="#">MP ITI 3 MENT RESULT</Link></li>
  <li><Link href="#">DFASP ITI 3 MENT RESULT</Link></li>
</ul>
<Box  mr='10px' mb='10px'
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
              <Grid item md={4}>
<Box 
sx={{
  border:'2px solid'+ theme.palette.error.main,
  borderRadius:'16px'
}}
>
<Box p={0.5}
sx={{
  bgcolor:theme.palette.background.main,
  borderRadius:'16px 16px 0px 0px'
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
  <li><Link href="#">UP ITI ROUND 3 RESULT</Link></li>
  <li><Link href="#">JHARKHAND ITI ROUND 3 COMPARTMENT</Link></li>
  <li><Link href="#">UP ITI ROUND 3 COMPARTMENT</Link></li>
  <li><Link href="#">MP ITI ROUND 3 COMPARTMENT</Link></li>
  <li><Link href="#">MP ITI ROUND 3 MENT</Link></li>
  <li><Link href="#">MP ITI ROUND 3 MENT RESULT</Link></li>
  <li><Link href="#">MP ITI 3 MENT RESULT</Link></li>
  <li><Link href="#">DFASP ITI 3 MENT RESULT</Link></li>
</ul>
<Box mr='10px' mb='10px'
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
        <Box m={1} ml={25}mr={25} mb={5}>
<Grid container spacing={3}>
<Grid item md={8}>
<Grid container spacing={3}>
<Grid item md={6}>
<Box 
sx={{
  border:'2px solid'+ theme.palette.error.main,
  borderRadius:'16px'
}}
>
<Box p={0.5}
sx={{
  bgcolor:theme.palette.background.main,
  borderRadius:'16px 16px 0px 0px'
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
  <li><Link href="#">UP ITI ROUND 3 RESULT</Link></li>
  <li><Link href="#">JHARKHAND ITI ROUND 3 COMPARTMENT</Link></li>
  <li><Link href="#">UP ITI ROUND 3 COMPARTMENT</Link></li>
  <li><Link href="#">MP ITI ROUND 3 COMPARTMENT</Link></li>
  <li><Link href="#">MP ITI ROUND 3 MENT</Link></li>
  <li><Link href="#">MP ITI ROUND 3 MENT RESULT</Link></li>
  <li><Link href="#">MP ITI 3 MENT RESULT</Link></li>
  <li><Link href="#">DFASP ITI 3 MENT RESULT</Link></li>
</ul>
<Box mr='10px' mb='10px'
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
<Grid item md={6}>
<Box 
sx={{
  border:'2px solid'+ theme.palette.error.main,
  borderRadius:'16px'
}}
>
<Box p={0.5}
sx={{
  bgcolor:theme.palette.background.main,
  borderRadius:'16px 16px 0px 0px'
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
  <li><Link href="#">UP ITI ROUND 3 RESULT</Link></li>
  <li><Link href="#">JHARKHAND ITI ROUND 3 COMPARTMENT</Link></li>
  <li><Link href="#">UP ITI ROUND 3 COMPARTMENT</Link></li>
  <li><Link href="#">MP ITI ROUND 3 COMPARTMENT</Link></li>
  <li><Link href="#">MP ITI ROUND 3 MENT</Link></li>
  <li><Link href="#">MP ITI ROUND 3 MENT RESULT</Link></li>
  <li><Link href="#">MP ITI 3 MENT RESULT</Link></li>
  <li><Link href="#">DFASP ITI 3 MENT RESULT</Link></li>
</ul>
<Box mr='10px' mb='10px'
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
<Grid item md={6}>
<Box 
sx={{
  border:'2px solid'+ theme.palette.error.main,
  borderRadius:'16px'
}}
>
<Box p={0.5}
sx={{
  bgcolor:theme.palette.background.main,
  borderRadius:'16px 16px 0px 0px'
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
  Certificate Verification
</Typography>
</Box>
<ul>
  <li><Link href="#">UP ITI ROUND 3 RESULT</Link></li>
  <li><Link href="#">JHARKHAND ITI ROUND 3 COMPARTMENT</Link></li>
  <li><Link href="#">UP ITI ROUND 3 COMPARTMENT</Link></li>
  <li><Link href="#">MP ITI ROUND 3 COMPARTMENT</Link></li>
  <li><Link href="#">MP ITI ROUND 3 MENT</Link></li>
  <li><Link href="#">MP ITI ROUND 3 MENT RESULT</Link></li>
  <li><Link href="#">MP ITI 3 MENT RESULT</Link></li>
  <li><Link href="#">DFASP ITI 3 MENT RESULT</Link></li>
</ul>
<Box mr='10px' mb='10px'
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
<Grid item md={6}>
<Box 
sx={{
  border:'2px solid'+ theme.palette.error.main,
  borderRadius:'16px'
}}
>
<Box p={0.5}
sx={{
  bgcolor:theme.palette.background.main,
  borderRadius:'16px 16px 0px 0px'
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
  <li><Link href="#">UP ITI ROUND 3 RESULT</Link></li>
  <li><Link href="#">JHARKHAND ITI ROUND 3 COMPARTMENT</Link></li>
  <li><Link href="#">UP ITI ROUND 3 COMPARTMENT</Link></li>
  <li><Link href="#">MP ITI ROUND 3 COMPARTMENT</Link></li>
  <li><Link href="#">MP ITI ROUND 3 MENT</Link></li>
  <li><Link href="#">MP ITI ROUND 3 MENT RESULT</Link></li>
  <li><Link href="#">MP ITI 3 MENT RESULT</Link></li>
  <li><Link href="#">DFASP ITI 3 MENT RESULT</Link></li>
</ul>
<Box mr='10px' mb='10px'
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
<Grid item md={4}>
<Box 
sx={{
  border:'2px solid'+ theme.palette.error.main,
  borderRadius:'16px'
}}
>
<Box p={0.5}
sx={{
  bgcolor:theme.palette.background.main,
  borderRadius:'16px 16px 0px 0px'
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
  <li><Link href="#">UP ITI Round 3 Result</Link></li>
  <li><Link href="#">JHARKHAND ITI ROUND 3 COMPARTMENT</Link></li>
  <li><Link href="#">UP ITI ROUND 3 COMPARTMENT</Link></li>
  <li><Link href="#">MP ITI ROUND 3 COMPARTMENT</Link></li>
  <li><Link href="#">MP ITI ROUND 3 MENT</Link></li>
  <li><Link href="#">MP ITI ROUND 3 MENT RESULT</Link></li>
  <li><Link href="#">MP ITI 3 MENT RESULT</Link></li>
  <li><Link href="#">DFASP ITI 3 MENT RESULT</Link></li>
  <li><Link href="#">UP ITI ROUND 3 RESULT</Link></li>
  <li><Link href="#">JHARKHAND ITI ROUND 3 COMPARTMENT</Link></li>
  <li><Link href="#">UP ITI ROUND 3 COMPARTMENT</Link></li>
  <li><Link href="#">MP ITI ROUND 3 COMPARTMENT</Link></li>
  <li><Link href="#">MP ITI ROUND 3 MENT</Link></li>
  <li><Link href="#">MP ITI ROUND 3 MENT RESULT</Link></li>
  <li><Link href="#">MP ITI 3 MENT RESULT</Link></li>
  <li><Link href="#">DFASP ITI 3 MENT RESULT</Link></li>
  <li><Link href="#">UP ITI ROUND 3 RESULT</Link></li>
  <li><Link href="#">JHARKHAND ITI ROUND 3 COMPARTMENT</Link></li>
  <li><Link href="#">UP ITI ROUND 3 COMPARTMENT</Link></li>
</ul>
<Box mr='10px' mb='10px'
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