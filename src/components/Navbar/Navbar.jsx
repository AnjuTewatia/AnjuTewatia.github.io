
import React, { useState } from 'react'
import './Navbar.css'
import {AiFillCloseCircle} from 'react-icons/ai'
import {TbGridDots} from 'react-icons/tb'
const Navbar = () => {
    const [active, setActive] = useState('navBar');
    const showNavBar = () => {
        console.log("hello")
        setActive('activeNavbar')
        
    }
    
    const removeNavBar = () => {
        setActive('navBar')
    }
    const [activeHeader, setactiveHeader] = useState('header');
    const addBg = () =>{
        if(window.scrollY >=10){
            setactiveHeader('header activeHeader');
            console.log("cclicked")
        }else{
            setactiveHeader('header');
        }
    }

    window.addEventListener('scroll',addBg)
  return (
    
       <header className={activeHeader}>
     <div className="logoDiv">
        <h1 className='logo'>
        <a href='#home'>"Anju"</a>
        </h1>
     </div>
     <div className={active}>
        <ul onClick={removeNavBar} className="navLists">
            <li className="navItem">
                <a href="#header" className="navLink"><span className='headerNumber'></span>Home</a>
            </li>
            <li className="navItem">
                <a href="#intro" className="navLink"><span className='headerNumber'></span> About</a>
            </li>
            <li className="navItem">
                <a href="#experience" className="navLink"><span className='headerNumber'></span> Skills</a>
            </li>
            <li className="navItem">
                <a href="#portfolio" className="navLink"><span className='headerNumber'></span> Projects</a>
            </li>
            <li className="navItem">
                <a href="#contact" className="navLink"><span className='headerNumber'></span> Contact</a>
            </li>
           
        </ul>
        <div onClick={removeNavBar} className="closeNavBar">
        <AiFillCloseCircle className='icon'/>
        </div>
     </div>
     <div onClick={showNavBar}className="toggleNavBar">
            <TbGridDots className='icon'/>
        </div>
    </header>
    
  )
}

export default Navbar
