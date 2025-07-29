import logo from './logo.svg';
import './App.css';
// import { Route } from 'react-router-dom';

import { Route, Routes } from 'react-router-dom';
import HOME from './component/Home/home';
import About_big from './component/ABOUT_US/Aboutpage';
function App() {
  return <>
  <Routes>
    
    <Route path='/' element={<HOME/>}/>
    <Route path='About_us' element={<About_big/>}/>

  </Routes>
  </>;
   
}

export default App;
