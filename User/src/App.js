import logo from './logo.svg';
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
    <ThemeProvider theme={theme}>
    <Banner/>
    <Navbar/>
    <Blocks/>
    <Tables/>
    <Footer/>
    <PostPage/>
    </ThemeProvider>
    
    </>
  );
}

export default App;
