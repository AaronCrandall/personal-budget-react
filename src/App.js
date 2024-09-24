import React from 'react';
import './App.css';
import {Route, Routes, BrowserRouter} from "react-router-dom";
import Menu from './Menu/Menu';
import Hero from './Hero/Hero';
import HomePage from './HomePage/HomePage';
import Footer from './Footer/Footer';
import AboutPage from './AboutPage/AboutPage';
import LoginPage from './LoginPage/LoginPage';


function App() {
  return (
    <BrowserRouter>
       <Menu/>
       <Hero/>
       {/*<div className="mainContainer">*/}
        <Routes>
          <Route path="/about" element={<AboutPage/>}/>
          <Route path="/Login" element={<LoginPage/>}/>
          <Route path="/" element={<HomePage/>}/>
        </Routes>
       {/*</div> */}
       <Footer/>  
    </BrowserRouter>
  );
}

export default App;
