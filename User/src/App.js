import React, { Component } from 'react';
import { BrowserRouter as Router,Routes, Outlet,Route } from 'react-router-dom';
import './App.css';
import { ThemeProvider } from '@mui/material';
import {theme} from './theme.js'
import Banner from './components/home/Banner';
import Navbar from './components/home/Navbar';
import Blocks from './components/home/Blocs';
import Tables from './components/home/Table';
import Footer from './components/footer/Footer';
import PostPage from './components/post/PostPage';

function App() {
  return (
    <>
    <Router>
    <ThemeProvider theme={theme}>
    <Banner/>
    <Navbar/>
    <Blocks/>
    <Tables/>
    <Footer/>
    {/* <PostPage/> */}
    </ThemeProvider>
    
    <Routes>
      <Route exact path='/postPage' element={<PostPage  />}/>
      </Routes>
    </Router>
    
    </>
  );
}

export default App;
