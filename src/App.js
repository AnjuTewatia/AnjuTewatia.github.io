import logo from './logo.svg';
import './index.css';
import React from "react";
import{Route,Routes}  from "react-router-dom"
import Home from "./routes/Home" 
import About from "./routes/About"
import Contact from './routes/Contact'
import Project from './routes/Project'
import Footer from './components/Footer';



function App() {
  return (
   <>
   <Routes>
    <Route path="/" element={ < Home/> }/>
    <Route path="/project" element={ < Project/> }/> 
    <Route path="/about" element={ < About/> }/>
    <Route path="/contact" element={ < Contact/> }/>
   </Routes>
   {/* <About />  */}
    {/* <Project />
   <Footer/>  */}
   </>
  );
}

export default App;
