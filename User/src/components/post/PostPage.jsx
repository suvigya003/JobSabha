import React from "react";
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
import Navbar from "../home/Navbar";
import Banner from "../home/Banner";
import { theme } from "../../theme";

const PostPage = () => {
  return (
    <>
      <Banner />
      <Navbar />
      <Box m={5} sx={{display:{xs:'none', md:'flex'}}}
      // ml={25} mr={25}
      ml={{lg:20,md:15,sm:10, xs:7}} mr={{lg:20,md:15,sm:10, xs:7}} 
       mb={5}>
        <Grid container spacing={3}>
          <Grid item md={4}>
            <Box
              sx={{
                border: "2px solid" + theme.palette.error.main,
                borderRadius: "16px",
              }}
            >
              <Box
                p={0.5}
                sx={{
                  bgcolor: theme.palette.background.main,
                  borderRadius: "16px 16px 0px 0px",
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
                  <Link href="#">UP ITI Round 3 Result</Link>
                </li>
                <li>
                  <Link href="#">JHARKHAND ITI ROUND 3 COMPARTMENT</Link>
                </li>
                <li>
                  <Link href="#">UP ITI ROUND 3 COMPARTMENT</Link>
                </li>
                <li>
                  <Link href="#">MP ITI ROUND 3 COMPARTMENT</Link>
                </li>
                <li>
                  <Link href="#">MP ITI ROUND 3 MENT</Link>
                </li>
                <li>
                  <Link href="#">MP ITI ROUND 3 MENT RESULT</Link>
                </li>
                <li>
                  <Link href="#">MP ITI 3 MENT RESULT</Link>
                </li>
                <li>
                  <Link href="#">DFASP ITI 3 MENT RESULT</Link>
                </li>
                <li>
                  <Link href="#">UP ITI ROUND 3 RESULT</Link>
                </li>
                <li>
                  <Link href="#">JHARKHAND ITI ROUND 3 COMPARTMENT</Link>
                </li>
                <li>
                  <Link href="#">UP ITI ROUND 3 COMPARTMENT</Link>
                </li>
                <li>
                  <Link href="#">MP ITI ROUND 3 COMPARTMENT</Link>
                </li>
                <li>
                  <Link href="#">MP ITI ROUND 3 MENT</Link>
                </li>
                <li>
                  <Link href="#">MP ITI ROUND 3 MENT RESULT</Link>
                </li>
                <li>
                  <Link href="#">MP ITI 3 MENT RESULT</Link>
                </li>
                <li>
                  <Link href="#">DFASP ITI 3 MENT RESULT</Link>
                </li>
                <li>
                  <Link href="#">UP ITI ROUND 3 RESULT</Link>
                </li>
                <li>
                  <Link href="#">JHARKHAND ITI ROUND 3 COMPARTMENT</Link>
                </li>
                <li>
                  <Link href="#">UP ITI ROUND 3 COMPARTMENT</Link>
                </li>
                <li>
                  <Link href="#">JHARKHAND ITI ROUND 3 COMPARTMENT</Link>
                </li>
                <li>
                  <Link href="#">UP ITI ROUND 3 COMPARTMENT</Link>
                </li>
                <li>
                  <Link href="#">MP ITI ROUND 3 COMPARTMENT</Link>
                </li>
                <li>
                  <Link href="#">MP ITI ROUND 3 MENT</Link>
                </li>
                <li>
                  <Link href="#">MP ITI ROUND 3 MENT RESULT</Link>
                </li>
                <li>
                  <Link href="#">JHARKHAND ITI ROUND 3 COMPARTMENT</Link>
                </li>
                <li>
                  <Link href="#">UP ITI ROUND 3 COMPARTMENT</Link>
                </li>
                <li>
                  <Link href="#">MP ITI ROUND 3 COMPARTMENT</Link>
                </li>
                <li>
                  <Link href="#">MP ITI ROUND 3 MENT</Link>
                </li>
                <li>
                  <Link href="#">MP ITI ROUND 3 MENT RESULT</Link>
                </li>
                <li>
                  <Link href="#">MP ITI ROUND 3 COMPARTMENT</Link>
                </li>
                <li>
                  <Link href="#">MP ITI ROUND 3 MENT</Link>
                </li>
                <li>
                  <Link href="#">MP ITI ROUND 3 MENT RESULT</Link>
                </li>
                <li>
                  <Link href="#">MP ITI ROUND 3 MENT RESULT</Link>
                </li>
              </ul>
              <Box
                mr="10px"
                mb="10px"
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
          <Grid item md={8}>
            <Grid container spacing={3}>
              <Grid item xs={12} md={12}>
                <Box
                fullWidth
                  p={2}
                  sx={{
                    // border: "2px solid" + theme.palette.error.main,
                    bgcolor: theme.palette.background.card5,
                    borderRadius: "16px",
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
              <Grid item xs={12} md={12}>
                <Box
                fullWidth
                  p={0.5}
                  pt={1}
                  sx={{
                    // border: "2px solid" + theme.palette.error.main,
                    bgcolor: theme.palette.background.card1,
                    borderRadius: "16px",
                  }}
                >
                  <Typography
                    m={2}
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
                    <li>Application Begin : 14/09/2022</li>
                    <li>
                      Last Date for Apply Online : 04/10/2022 upto 06 PM Only.
                    </li>
                    <li>Pay Exam Fee Last Date : 04/10/2022</li>
                    <li>Date Pre : 19/02/2023</li>
                    <li>Admit Card Available Pre : Before Exam</li>
                    <li>Mains Exam Date : Notified Soon</li>
                  </ul>
                </Box>
              </Grid>
              <Grid item xs={12} md={12}>
                <Box
                // width='100%'
                fullWidth
                  p={0.5}
                  pt={1}
                  sx={{
                    // border: "2px solid" + theme.palette.error.main,
                    bgcolor: theme.palette.background.card2,
                    borderRadius: "16px",
                  }}
                >
                  <Typography
                    m={2}
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
                    <li>General / OBC : 200/-</li>
                    <li>SC / ST : 0/-</li>
                    <li>PH : 0/-</li>
                    <li>All Category Female : 0/-</li>
                  </ul>
                </Box>
              </Grid>
              <Grid item xs={12} md={12}>
                <Box
                fullWidth
                  p={0.5}
                  pt={1}
                  sx={{
                    // border: "2px solid" + theme.palette.error.main,
                    bgcolor: theme.palette.background.card3,
                    borderRadius: "16px",
                  }}
                >
                  <Typography
                    m={2}
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
                    <li>Age Limit : 21-30 Year As on 01/01/2023</li>
                    <li>Total Post : 327</li>
                    <li>Apply Link : https://web.abc.com/</li>
                  </ul>
                </Box>
              </Grid>
              <Grid item xs={12} md={12}>
                <Box
                fullWidth
                  p={0.5}
                  pt={1}
                  sx={{
                    // border: "2px solid" + theme.palette.error.main,
                    bgcolor: theme.palette.background.card4,
                    borderRadius: "16px",
                  }}
                >
                  <Typography
                    m={2}
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
                    <li>
                      Union Public Service Commission UPSC Engineering Services
                      2023 Examination. Candidate Can Apply Between 14/09/2022
                      to 04/10/2022
                    </li>
                    <li>
                      Candidate Read the Notification Before Apply the
                      Recruitment Jobs Application Form in UPSC Engineering
                      Services Latest UPSC Job Recruitment 2023.
                    </li>
                    <li>
                      If Candidate Are Required to Paying the Application Fee
                      Must Pay and Complete Your Form
                    </li>
                    <li>Take A Print Out of Final Submitted Form.</li>
                  </ul>
                </Box>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
      <Box m={5} sx={{display:{ md:'none'}}}
      // ml={25} mr={25}
      ml={{lg:20,md:15,sm:10, xs:7}} mr={{lg:20,md:15,sm:10, xs:7}} 
       mb={5}>
        <Grid container spacing={3}>
          
          <Grid item md={8}>
            <Grid container spacing={3}>
              <Grid item xs={12} md={12}>
                <Box
                fullWidth
                  p={2}
                  sx={{
                    // border: "2px solid" + theme.palette.error.main,
                    bgcolor: theme.palette.background.card5,
                    borderRadius: "16px",
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
              <Grid item xs={12} md={12}>
                <Box
                fullWidth
                  p={0.5}
                  pt={1}
                  sx={{
                    // border: "2px solid" + theme.palette.error.main,
                    bgcolor: theme.palette.background.card1,
                    borderRadius: "16px",
                  }}
                >
                  <Typography
                    m={2}
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
                    <li>Application Begin : 14/09/2022</li>
                    <li>
                      Last Date for Apply Online : 04/10/2022 upto 06 PM Only.
                    </li>
                    <li>Pay Exam Fee Last Date : 04/10/2022</li>
                    <li>Date Pre : 19/02/2023</li>
                    <li>Admit Card Available Pre : Before Exam</li>
                    <li>Mains Exam Date : Notified Soon</li>
                  </ul>
                </Box>
              </Grid>
              <Grid item xs={12} md={12}>
                <Box
                // width='100%'
                fullWidth
                  p={0.5}
                  pt={1}
                  sx={{
                    // border: "2px solid" + theme.palette.error.main,
                    bgcolor: theme.palette.background.card2,
                    borderRadius: "16px",
                  }}
                >
                  <Typography
                    m={2}
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
                    <li>General / OBC : 200/-</li>
                    <li>SC / ST : 0/-</li>
                    <li>PH : 0/-</li>
                    <li>All Category Female : 0/-</li>
                  </ul>
                </Box>
              </Grid>
              <Grid item xs={12} md={12}>
                <Box
                fullWidth
                  p={0.5}
                  pt={1}
                  sx={{
                    // border: "2px solid" + theme.palette.error.main,
                    bgcolor: theme.palette.background.card3,
                    borderRadius: "16px",
                  }}
                >
                  <Typography
                    m={2}
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
                    <li>Age Limit : 21-30 Year As on 01/01/2023</li>
                    <li>Total Post : 327</li>
                    <li>Apply Link : https://web.abc.com/</li>
                  </ul>
                </Box>
              </Grid>
              <Grid item xs={12} md={12}>
                <Box
                fullWidth
                  p={0.5}
                  pt={1}
                  sx={{
                    // border: "2px solid" + theme.palette.error.main,
                    bgcolor: theme.palette.background.card4,
                    borderRadius: "16px",
                  }}
                >
                  <Typography
                    m={2}
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
                    <li>
                      Union Public Service Commission UPSC Engineering Services
                      2023 Examination. Candidate Can Apply Between 14/09/2022
                      to 04/10/2022
                    </li>
                    <li>
                      Candidate Read the Notification Before Apply the
                      Recruitment Jobs Application Form in UPSC Engineering
                      Services Latest UPSC Job Recruitment 2023.
                    </li>
                    <li>
                      If Candidate Are Required to Paying the Application Fee
                      Must Pay and Complete Your Form
                    </li>
                    <li>Take A Print Out of Final Submitted Form.</li>
                  </ul>
                </Box>
              </Grid>
            </Grid>
          </Grid>
          <Grid margin={'auto'} item md={4}>
            <Box 
              sx={{
                border: "2px solid" + theme.palette.error.main,
                borderRadius: "16px",
              }}
            >
              <Box
                p={0.5}
                sx={{
                  bgcolor: theme.palette.background.main,
                  borderRadius: "16px 16px 0px 0px",
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
                  <Link href="#">UP ITI Round 3 Result</Link>
                </li>
                <li>
                  <Link href="#">JHARKHAND ITI ROUND 3 COMPARTMENT</Link>
                </li>
                <li>
                  <Link href="#">UP ITI ROUND 3 COMPARTMENT</Link>
                </li>
                <li>
                  <Link href="#">MP ITI ROUND 3 COMPARTMENT</Link>
                </li>
                <li>
                  <Link href="#">MP ITI ROUND 3 MENT</Link>
                </li>
                <li>
                  <Link href="#">MP ITI ROUND 3 MENT RESULT</Link>
                </li>
                <li>
                  <Link href="#">MP ITI 3 MENT RESULT</Link>
                </li>
                <li>
                  <Link href="#">DFASP ITI 3 MENT RESULT</Link>
                </li>
                <li>
                  <Link href="#">UP ITI ROUND 3 RESULT</Link>
                </li>
                <li>
                  <Link href="#">JHARKHAND ITI ROUND 3 COMPARTMENT</Link>
                </li>
                <li>
                  <Link href="#">UP ITI ROUND 3 COMPARTMENT</Link>
                </li>
                <li>
                  <Link href="#">MP ITI ROUND 3 COMPARTMENT</Link>
                </li>
                <li>
                  <Link href="#">MP ITI ROUND 3 MENT</Link>
                </li>
                <li>
                  <Link href="#">MP ITI ROUND 3 MENT RESULT</Link>
                </li>
                <li>
                  <Link href="#">MP ITI 3 MENT RESULT</Link>
                </li>
                <li>
                  <Link href="#">DFASP ITI 3 MENT RESULT</Link>
                </li>
                <li>
                  <Link href="#">UP ITI ROUND 3 RESULT</Link>
                </li>
                <li>
                  <Link href="#">JHARKHAND ITI ROUND 3 COMPARTMENT</Link>
                </li>
                <li>
                  <Link href="#">UP ITI ROUND 3 COMPARTMENT</Link>
                </li>
                <li>
                  <Link href="#">JHARKHAND ITI ROUND 3 COMPARTMENT</Link>
                </li>
                <li>
                  <Link href="#">UP ITI ROUND 3 COMPARTMENT</Link>
                </li>
                <li>
                  <Link href="#">MP ITI ROUND 3 COMPARTMENT</Link>
                </li>
                <li>
                  <Link href="#">MP ITI ROUND 3 MENT</Link>
                </li>
                <li>
                  <Link href="#">MP ITI ROUND 3 MENT RESULT</Link>
                </li>
                <li>
                  <Link href="#">JHARKHAND ITI ROUND 3 COMPARTMENT</Link>
                </li>
                <li>
                  <Link href="#">UP ITI ROUND 3 COMPARTMENT</Link>
                </li>
                <li>
                  <Link href="#">MP ITI ROUND 3 COMPARTMENT</Link>
                </li>
                <li>
                  <Link href="#">MP ITI ROUND 3 MENT</Link>
                </li>
                <li>
                  <Link href="#">MP ITI ROUND 3 MENT RESULT</Link>
                </li>
                <li>
                  <Link href="#">MP ITI ROUND 3 COMPARTMENT</Link>
                </li>
                <li>
                  <Link href="#">MP ITI ROUND 3 MENT</Link>
                </li>
                <li>
                  <Link href="#">MP ITI ROUND 3 MENT RESULT</Link>
                </li>
                <li>
                  <Link href="#">MP ITI ROUND 3 MENT RESULT</Link>
                </li>
              </ul>
              <Box
                mr="10px"
                mb="10px"
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
        </Grid>
      </Box>
    </>
  );
};

export default PostPage;
