import React from 'react'
import './Footer.css'
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
// import WifiCalling3OutlinedIcon from '@mui/icons-material/WifiCalling3Outlined';
import PhoneInTalkOutlinedIcon from '@mui/icons-material/PhoneInTalkOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import { useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material';
import { fontSize } from '@mui/system';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AddIcon from '@mui/icons-material/Add';
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
      <Box className='_footer' m={5} ml={20}
      mr={20} 
      sx={{
        borderRadius:'16px'
      }}
      >
          {/* {matches? <h1>Mobile</h1>: <h1>Desktop</h1> } */}
          <Box className="_footerIn" >
                <Box className="explore one">
              {/* <ul> */}
                  <Box className="hdng"><strong><li>QUICK SEARCH</li></strong> </Box>
                  <li><a href="#">All Members</a ></li>
                  <li><a href="#">Premium Members</a ></li>
                  <li><a href="#">Free MEmbers</a ></li>
                  <li><a href="#">Search</a ></li>
              {/* </ul>   */}
          </Box>
          <Box className="explore five">
              {/* <ul> */}
                 <li><Box className="hdng"><strong>USEFUL LINKS</strong></Box></li>  
                  <li><a href="#">How it Works</a ></li>
                  <li><a href="#">Premium Members</a ></li>
                  <li><a href="#">Packages</a ></li>
                  <li><a href="#">Real Reviews</a ></li>
                  <li><a href="#">Terms & Conditions</a ></li>
                  <li><a href="#">Privacy Policy</a ></li>
                  <li><a href="#">Contact Us</a ></li>
                  <li><a href="#">About Us</a ></li>
              {/* </ul>   */}
          </Box>
          <Box className="explore three">
              <Box className="hdng"><strong>SHARE YOUR FEEDBACK  <br /></strong>  </Box>
              <p4>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam similique debitis asperiores. perspiciatis?</p4>
              
                  <Button variant="outlined" color="secondary"
                        sx={{minWidth:"100%",  fontSize:{xs:'10px',md:'9px',lg:'13px'}}}
                  >
                    Share your Feedback
              </Button>
          </Box> 
          <Box className="explore four">
              <Box>
                <Box>
                      <Box className="hdng"><strong>CONTACT US  </strong></Box>
                      
                      <Box className='u'>
                          <LocationOnOutlinedIcon 
                              sx={{
                                    color:'#ff5722',
                                }}
                          />&nbsp;
                            <p4>3rd & 4th Floor, SCO 54-55-56, Sector 17 A, Chandigarh</p4>
                      </Box>                      
                      <Box className='u'>
                          <PhoneInTalkOutlinedIcon 
                              sx={{
                                    color:'#ff5722'
                                }}
                          />&nbsp;
                          <p4>+91888888888, +912222222222</p4>                          
                      </Box>
                      <Box className='u'>
                          <EmailOutlinedIcon  
                              sx={{
                                    color:'#ff5722'
                                }}
                          /> &nbsp;
                          <p4>abc@xyz.com</p4>
                      </Box>
                </Box>
              </Box>
              
              <Box className='connect'>
                  <Box className="hdng"><strong>CONNECT WITH US</strong>  </Box>
                 
                  <Box className="icons ">
                      <Box><a href="#">< img className="icons_img" src="https://cdn-icons-png.flaticon.com/128/145/145802.png" /></a></Box>
                      <Box><a href="#"><img className="icons_img" src="https://cdn-icons.flaticon.com/png/128/3670/premium/3670151.png?token=exp=1660111752~hmac=3f280f56bdf74704b53734f64361bea7" /></a ></Box>
                      <Box><a href="#"><img className="icons_img" src="https://cdn-icons.flaticon.com/png/128/3670/premium/3670147.png?token=exp=1660111813~hmac=6b5a1a794546a0ec514513235bfefe89" /></a ></Box>
                      <Box><a href="#"><img className="icons_img" src="https://cdn-icons.flaticon.com/png/128/3955/premium/3955024.png?token=exp=1660112219~hmac=077bcaddb3e8dc054a1c61af6db8a086" /></a ></Box>
                  </Box>
              </Box>
          </Box>
          </Box>

          <Box>
              
              <Box className="acc">
                   <Accordion>
        <AccordionSummary
          expandIcon={<AddIcon/>}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Quick Search</Typography>
        </AccordionSummary>
        <AccordionDetails>
                      <p>All Members</p>
                      <p>Premium Members</p>
                      <p>Free Members</p>
                      <p>Search</p>
        </AccordionDetails>
                   </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<AddIcon/>}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Useful Links</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <p>How it Works</p>
          <p>Premium Members</p>
          <p>Packages</p>
          <p>Real Reviews</p>
          <p>Terms & Conditions</p>
          <p>Privacy Policy</p>
          <p>Contact Us</p>
          <p>About Us</p>
        </AccordionDetails>
      </Accordion>
     <Accordion>
        <AccordionSummary
          expandIcon={<AddIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Share your Feedback</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{fontSize:{xs:'13px',md:'9px',lg:'13px'}}}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
                          </Typography>
                          <br />
                      <Button variant="outlined" color="secondary" 
                        sx={{minWidth:"100%",  fontSize:{xs:'10px',md:'9px',lg:'13px'}}}
                  >
                    Share your Feedback
              </Button>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<AddIcon/>}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Contact Us</Typography>
        </AccordionSummary>
        <AccordionDetails>
          
                      <Box className='u'>
                          <LocationOnOutlinedIcon 
                              sx={{
                                    color:'#ff5722',
                                }}
                          />&nbsp;
                            <p>3rd & 4th Floor, SCO 54-55-56, Sector 17 A, Chandigarh</p>
                      </Box>                      
                      <Box className='u'>
                          <PhoneInTalkOutlinedIcon 
                              sx={{
                                    color:'#ff5722'
                                }}
                          />&nbsp;
                          <p>+91888888888, +912222222222</p>                          
                      </Box>
                      <Box className='u'>
                          <EmailOutlinedIcon  
                              sx={{
                                    color:'#ff5722'
                                }}
                          /> &nbsp;
                          <p>abc@xyz.com</p>
                      </Box>
        </AccordionDetails>
      </Accordion> 
              </Box>
<br />
            
    </Box>
               <Box className='connect1'>
             <center><Box className="hdng"><strong>CONNECT WITH US</strong>  </Box></center>     
                  
                       <Box className="icons1">
                      <Box><a href="#">< img className="icons_img" src="https://cdn-icons-png.flaticon.com/128/145/145802.png" /></a></Box>
                      <Box><a href="#"><img className="icons_img" src="https://cdn-icons.flaticon.com/png/128/3670/premium/3670151.png?token=exp=1660111752~hmac=3f280f56bdf74704b53734f64361bea7" /></a ></Box>
                      <Box><a href="#"><img className="icons_img" src="https://cdn-icons.flaticon.com/png/128/3670/premium/3670147.png?token=exp=1660111813~hmac=6b5a1a794546a0ec514513235bfefe89" /></a ></Box>
                      <Box><a href="#"><img className="icons_img" src="https://cdn-icons.flaticon.com/png/128/3955/premium/3955024.png?token=exp=1660112219~hmac=077bcaddb3e8dc054a1c61af6db8a086" /></a ></Box>
                  </Box>
                 
                 
              </Box>
            
          

          <Divider variant="middle"
              sx={{
                  mt: 5,
                //   width:"5px",
                }}
          />
          <center>
              <Box className='__copy' >
             &copy; 2021 Indian Matrimonial | Trademarks and brands are the property of their respective owners.
          </Box>
          </center>
          
    </Box>
  )
}

export default Footer