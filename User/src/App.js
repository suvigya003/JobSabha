import logo from './logo.svg';
import './App.css';
import { ThemeProvider } from '@mui/material';
// import theme from './theme.js'
import Banner from './components/home/Banner';
import Navbar from './components/home/Navbar';
import Blocks from './components/home/Blocs';
import Tables from './components/home/Table';

function App() {
  return (
    <>
    {/* <ThemeProvider theme={theme}> */}
    <Banner/>
    <Navbar/>
    <Blocks/>
    <Tables/>
    {/* </ThemeProvider> */}
    
    </>
  );
}

export default App;
