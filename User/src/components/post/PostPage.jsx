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
      <Box m={5} ml={25} mr={25} mb={5}>
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
              <Grid item md={12}>
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
                      Answer Key
                    </Typography>
                  </Box>
                  <ul>
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
              <Grid item md={6}>
                <Box p={0.5} pt={1}
                  sx={{
                    // border: "2px solid" + theme.palette.error.main,
                    bgcolor:theme.palette.background.card1,
                    borderRadius: "16px",
                  }}
                >
                  
                    <Typography 
                    mt={2}
                      mb={2}
                      variant="h5"
                      fontWeight="600"
                      sx={{
                        color: theme.palette.text.main,
                        textAlign: "center",
                      }}
                    >
                      Important Dates
                    </Typography>
                    <ul style={{
                        textDecoration:'none'
                    }}>
                <li>Application Begin : 14/09/2022</li>
                <li>Last Date for Apply Online : 04/10/2022 upto 06 PM Only.</li>
                <li>Pay Exam Fee Last Date : 04/10/2022</li>
                <li>Date Pre : 19/02/2023</li>
                <li>Admit Card Available Pre : Before Exam</li>
                <li>Mains Exam Date : Notified Soon</li>
                </ul>
                </Box>
              </Grid>
              <Grid item md={6}>
                <Box
                  p={0.5} pt={1}
                  sx={{
                    // border: "2px solid" + theme.palette.error.main,
                    bgcolor:theme.palette.background.card2,
                    borderRadius: "16px",
                  }}
                >
                  
                    <Typography
                    mt={2}
                    mb={2}
                      variant="h5"
                      fontWeight="600"
                      sx={{
                        color: theme.palette.text.main,
                        textAlign: "center",
                      }}
                    >
                      Application Fee
                    </Typography>  
                    <ul style={{
                        textDecoration:'none'
                    }}>
                <li>General / OBC : 200/-</li>
                <li>SC / ST : 0/-</li>
                <li>PH : 0/-</li>
                <li>All Category Female : 0/-</li>
                               
                </ul>
                </Box>
              </Grid>
              <Grid item md={12}>
                <Box 
                  p={0.5} pt={1}
                  sx={{
                    // border: "2px solid" + theme.palette.error.main,
                    bgcolor:theme.palette.background.card3,
                    borderRadius: "16px",
                  }}
                >
                  
                    <Typography
                    mt={2}
                      mb={2}
                      variant="h5"
                      fontWeight="600"
                      sx={{
                        color: theme.palette.text.main,
                        textAlign: "center",
                      }}
                    >
                      Other Details
                    </Typography>
                    <ul style={{
                        textDecoration:'none'
                    }}>
                <li>Application Begin : 14/09/2022</li>
                <li>Application Begin : 14/09/2022</li>
                <li>Application Begin : 14/09/2022</li>
                <li>Application Begin : 14/09/2022</li>
                <li>Application Begin : 14/09/2022</li>
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
