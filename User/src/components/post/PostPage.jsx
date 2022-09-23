import React from "react";
import { useNavigate, Link } from "react-router-dom";
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
import Navbar from "../home/Navbar";
import Banner from "../home/Banner";
import { theme } from "../../theme";

const PostPage = () => {
  return (
    <>
      <Banner />
      <Navbar />
      <Box m={'4vw'} 
      // ml={25} mr={25}
      ml={'1vw'} mr={'1vw'} 
       mb={'4vw'}>
        <Grid container spacing={'2vw'}>
          <Grid item minWidth={'35vw'} maxWidth={'75vw'}>
            <Box
              sx={{
                border: "0.3vw solid" + theme.palette.error.main,
                borderRadius: "1.5vw",
              }}
            >
              <Box
                p={'0.5vw'}
                sx={{
                  bgcolor: theme.palette.background.main,
                  borderRadius: "1.5vw 1.5vw 0px 0px",
                }}
              >
                <Typography
                  variant="h5"
                  fontWeight="600"
                  sx={{
                    color: theme.palette.text.main,
                    textAlign: "center",
                  }}
                >
                  Admission
                </Typography>
              </Box>
              <ul>
                <li>
                  <Link href="#"><Typography variant='body1'>UP ITI Round 3 Result</Typography> </Link>
                </li>
                <li>
                  <Link href="#"><Typography variant='body1'>JHARKHAND ITI ROUND 3 COMPARTMENT</Typography> </Link>
                </li>
                <li>
                  <Link href="#"><Typography variant='body1'>UP ITI ROUND 3 COMPARTMENT</Typography> </Link>
                </li>
                <li>
                  <Link href="#"><Typography variant='body1'>MP ITI ROUND 3 COMPARTMENT</Typography> </Link>
                </li>
                <li>
                  <Link href="#"><Typography variant='body1'>MP ITI ROUND 3 COMPARTMENT</Typography> </Link>
                </li>
                <li>
                  <Link href="#"><Typography variant='body1'>MP ITI ROUND 3 MENT</Typography> </Link>
                </li>
                <li>
                  <Link href="#"><Typography variant='body1'>MP ITI ROUND 3 MENT RESULT</Typography> </Link>
                </li>
                <li>
                  <Link href="#"><Typography variant='body1'>MP ITI 3 MENT RESULT</Typography> </Link>
                </li>
                <li>
                  <Link href="#"><Typography variant='body1'>DFASP ITI 3 MENT RESULT</Typography> </Link>
                </li>
                <li>
                  <Link href="#"><Typography variant='body1'>UP ITI ROUND 3 RESULT</Typography> </Link>
                </li>
                <li>
                  <Link href="#"><Typography variant='body1'>JHARKHAND ITI ROUND 3 COMPARTMENT</Typography> </Link>
                </li>
                <li>
                  <Link href="#"><Typography variant='body1'>UP ITI ROUND 3 COMPARTMENT</Typography> </Link>
                </li>
                <li>
                  <Link href="#"><Typography variant='body1'>MP ITI ROUND 3 COMPARTMENT</Typography> </Link>
                </li>
                <li>
                  <Link href="#"><Typography variant='body1'>MP ITI ROUND 3 MENT</Typography> </Link>
                </li>
                <li>
                  <Link href="#"><Typography variant='body1'>MP ITI ROUND 3 MENT RESULT</Typography> </Link>
                </li>
                <li>
                  <Link href="#"><Typography variant='body1'>MP ITI 3 MENT RESULT</Typography> </Link>
                </li>
                <li>
                  <Link href="#"><Typography variant='body1'>DFASP ITI 3 MENT RESULT</Typography> </Link>
                </li>
                <li>
                  <Link href="#"><Typography variant='body1'>UP ITI ROUND 3 RESULT</Typography> </Link>
                </li>
                <li>
                  <Link href="#"><Typography variant='body1'>JHARKHAND ITI ROUND 3 COMPARTMENT</Typography> </Link>
                </li>
                <li>
                  <Link href="#"><Typography variant='body1'>UP ITI ROUND 3 COMPARTMENT</Typography> </Link>
                </li>
                <li>
                  <Link href="#"><Typography variant='body1'>JHARKHAND ITI ROUND 3 COMPARTMENT</Typography> </Link>
                </li>
                <li>
                  <Link href="#"><Typography variant='body1'>UP ITI ROUND 3 COMPARTMENT</Typography> </Link>
                </li>
                <li>
                  <Link href="#"><Typography variant='body1'>MP ITI ROUND 3 COMPARTMENT</Typography> </Link>
                </li>
                <li>
                  <Link href="#"><Typography variant='body1'>MP ITI ROUND 3 MENT</Typography> </Link>
                </li>
                <li>
                  <Link href="#"><Typography variant='body1'>MP ITI ROUND 3 MENT RESULT</Typography> </Link>
                </li>
                <li>
                  <Link href="#"><Typography variant='body1'>JHARKHAND ITI ROUND 3 COMPARTMENT</Typography> </Link>
                </li>
                <li>
                  <Link href="#"><Typography variant='body1'>UP ITI ROUND 3 COMPARTMENT</Typography> </Link>
                </li>
                <li>
                  <Link href="#"><Typography variant='body1'>MP ITI ROUND 3 COMPARTMENT</Typography> </Link>
                </li>
                <li>
                  <Link href="#"><Typography variant='body1'>MP ITI ROUND 3 MENT</Typography> </Link>
                </li>
                <li>
                  <Link href="#"><Typography variant='body1'>MP ITI ROUND 3 MENT RESULT</Typography> </Link>
                </li>
                <li>
                  <Link href="#"><Typography variant='body1'>MP ITI ROUND 3 COMPARTMENT</Typography> </Link>
                </li>
                <li>
                  <Link href="#"><Typography variant='body1'>MP ITI ROUND 3 MENT</Typography> </Link>
                </li>
                <li>
                  <Link href="#"><Typography variant='body1'>MP ITI ROUND 3 MENT RESULT</Typography> </Link>
                </li>
                <li>
                  <Link href="#"><Typography variant='body1'>MP ITI ROUND 3 MENT RESULT</Typography> </Link>
                </li>
              </ul>
              <Box mr='0.2vw' mb='0.6vw' 
                sx={{
                  right: 0,
                  display: "flex",
                  justifyContent: "end",
                }}
              >
                <Button
                  sx={{
                    color: theme.palette.text.main,
                    textTransform: "none",
                  }}
                >
                  <Typography fontWeight="700">View More</Typography>
                </Button>
              </Box>
            </Box>
          </Grid>
          <Grid item maxWidth={'65vw'}>
            <Grid container spacing={'1.9vw'}>
              <Grid item minWidth={'57vw'}>
                <Box
                fullWidth
                  p={'2vw'}
                  sx={{
                    // border: "0.3vw solid" + theme.palette.error.main,
                    bgcolor: theme.palette.background.card5,
                    borderRadius: "1.5vw",
                  }}
                >
                  <Box mt={1} sx={{ display: "flex", alignItems: "center" }}>
                    <Typography
                      variant="body1"
                      fontWeight="600"
                      sx={{
                        color: theme.palette.text.main,
                      }}
                    >
                      Name of Post: &nbsp;
                    </Typography>
                    <Typography variant="body1">
                      UPSC Engineering Services Online Form 2023
                    </Typography>
                  </Box>
                  <Box mt={1} sx={{ display: "flex", alignItems: "center" }}>
                    <Typography
                      variant="body1"
                      fontWeight="600"
                      sx={{
                        color: theme.palette.text.main,
                      }}
                    >
                      Post Date / Update: &nbsp;
                    </Typography>
                    <Typography variant="body1">
                      14 September 2022 | 04:57 PM
                    </Typography>
                  </Box>
                  <Box mt={1} sx={{ display: "flex", alignItems: "center" }}>
                    <Typography
                      variant="body1"
                      fontWeight="600"
                      mr={1.5}
                      sx={{
                        color: theme.palette.text.main,
                      }}
                    >
                      Short Information: &nbsp; &nbsp; &nbsp;
                    </Typography>
                    <Typography variant="body1" textAlign="justify">
                      UPSC has issued the notification of Engineering Services
                      2023, all the candidates who are interested in this
                      recruitment exam and fulfill the eligibility can apply
                      online from 14 September 2022 to 04 October 2022.
                    </Typography>
                  </Box>
                </Box>
              </Grid>
              <Grid item minWidth={'65vw'}>
                <Box
                fullWidth
                  p={'0.5vw'}
                  pt={'0.6vw'}
                  sx={{
                    // border: "0.3vw solid" + theme.palette.error.main,
                    bgcolor: theme.palette.background.card1,
                    borderRadius: "1.5vw",
                  }}
                >
                  <Typography
                    m={'1.5vw'}
                    variant="h5"
                    fontWeight="600"
                    sx={{
                      color: theme.palette.text.main,
                      textAlign: "center",
                    }}
                  >
                    Important Dates
                  </Typography>
                  <ul
                    style={{
                      textDecoration: "none",
                    }}
                  >
                    <li><Typography variant='body1'>Application Begin : 14/09/2022</Typography></li>
                    <li><Typography variant='body1'>
                      Last Date for Apply Online : 04/10/2022 upto 06 PM Only.
                    </Typography></li>
                    <li><Typography variant='body1'>Pay Exam Fee Last Date : 04/10/2022</Typography></li>
                    <li><Typography variant='body1'>Date Pre : 19/02/2023</Typography></li>
                    <li><Typography variant='body1'>Admit Card Available Pre : Before Exam</Typography></li>
                    <li><Typography variant='body1'>Mains Exam Date : Notified Soon</Typography></li>
                  </ul>
                </Box>
              </Grid>
              <Grid item minWidth={'65vw'}>
                <Box
                // width='100%'
                fullWidth
                  p={'0.5vw'}
                  pt={'0.6vw'}
                  sx={{
                    // border: "0.3vw solid" + theme.palette.error.main,
                    bgcolor: theme.palette.background.card2,
                    borderRadius: "1.5vw",
                  }}
                >
                  <Typography
                     m={'1.5vw'}
                    variant="h5"
                    fontWeight="600"
                    sx={{
                      color: theme.palette.text.main,
                      textAlign: "center",
                    }}
                  >
                    Application Fee
                  </Typography>
                  <ul
                    style={{
                      textDecoration: "none",
                    }}
                  >
                    <li><Typography variant='body1'>General / OBC : 200/-</Typography></li>
                    <li><Typography variant='body1'>SC / ST : 0/-</Typography></li>
                    <li><Typography variant='body1'>PH : 0/-</Typography></li>
                    <li><Typography variant='body1'>All Category Female : 0/-</Typography></li>
                  </ul>
                </Box>
              </Grid>
              <Grid item minWidth={'65vw'}>
                <Box
                fullWidth
                  p={'0.5vw'}
                  pt={'0.6vw'}
                  sx={{
                    // border: "0.3vw solid" + theme.palette.error.main,
                    bgcolor: theme.palette.background.card3,
                    borderRadius: "1.5vw",
                  }}
                >
                  <Typography
                     m={'1.5vw'}
                    variant="h5"
                    fontWeight="600"
                    sx={{
                      color: theme.palette.text.main,
                      textAlign: "center",
                    }}
                  >
                    Other Details
                  </Typography>
                  <ul
                    style={{
                      textDecoration: "none",
                    }}
                  >
                    <li><Typography variant='body1'>Age Limit : 21-30 Year As on 01/01/2023</Typography></li>
                    <li><Typography variant='body1'>Total Post : 327</Typography></li>
                    <li><Typography variant='body1'>Apply Link : https://web.abc.com/</Typography></li>
                  </ul>
                </Box>
              </Grid>
              <Grid item minWidth={'65vw'}>
                <Box
                fullWidth
                  p={'0.5vw'}
                  pt={'0.6vw'}
                  sx={{
                    // border: "0.3vw solid" + theme.palette.error.main,
                    bgcolor: theme.palette.background.card4,
                    borderRadius: "1.5vw",
                  }}
                >
                  <Typography
                     m={'1.5vw'}
                    variant="h5"
                    fontWeight="600"
                    sx={{
                      color: theme.palette.text.main,
                      textAlign: "center",
                    }}
                  >
                    How to Fill UPSC Engineering Services 2023 Online Form
                  </Typography>
                  <ul
                    style={{
                      textDecoration: "none",
                    }}
                  >
                    <li><Typography variant='body1'>
                      Union Public Service Commission UPSC Engineering Services
                      2023 Examination. Candidate Can Apply Between 14/09/2022
                      to 04/10/2022
                    </Typography></li>
                    <li><Typography variant='body1'>
                      Candidate Read the Notification Before Apply the
                      Recruitment Jobs Application Form in UPSC Engineering
                      Services Latest UPSC Job Recruitment 2023.
                    </Typography></li>
                    <li><Typography variant='body1'>
                      If Candidate Are Required to Paying the Application Fee
                      Must Pay and Complete Your Form
                    </Typography></li>
                    <li><Typography variant='body1'>Take A Print Out of Final Submitted Form.</Typography></li>
                  </ul>
                </Box>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
     
    </>
  );
};

export default PostPage;
