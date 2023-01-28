import React, { useState, useEffect } from 'react';
import './Navbar.css';
import { images } from '../../constants';

const Navbar = () => {
    const [navbar, setNavbar] = useState(false);

    const changeBackground = () => {
        if (window.scrollY > 0) {
          setNavbar(true)
        } else {
          setNavbar(false)
        }
      }
    
      useEffect(() => {
        changeBackground()
        window.addEventListener("scroll", changeBackground)
      })



    function handleClick() {
        const navLinks = document.getElementById('navLinks');

        if (navLinks.style.display === 'block') {
            navLinks.style.display = 'none';
        } else {
            navLinks.style.display = 'block';
        }
    }



  return (
    <div className={navbar ? 'app__navbar section__padding window-scroll' : 'app__navbar section__padding'}>
        <div className="app__navbar-container">
            <div className="app__navbar-logo">
                <img src={images.Logo} alt="Logo" />
                <div className={navbar ? 'app__navbar-title' : 'app__navbar-title--hidden'}>
                    <span>LOSANGELES</span>
                    <span>MOUTAINS</span>
                </div>
            </div>
            <ul className={navbar ? 'app__navbar-links--scroll' : 'app__navbar-links'}>
                <li><a href="#history">01. History</a></li>
                <li><a href="#team">02. Team</a></li>
            </ul>
            <a href="javascript:void(0);" className="icon" onClick={handleClick}>
                <i className={navbar ? 'fa fa-bars fa--scroll' : 'fa fa-bars'}></i>
                <ul className="app__navbar-menu_links" id='navLinks'>
                    <li><a href="#history">01. History</a></li>
                    <li><a href="#team">02. Team</a></li>
                </ul>
            </a>
        </div>
    </div>
  )
}

export default Navbar
