import React from 'react';
import './Footer.css';
import { images } from '../../constants';


const Footer = () => {
  return (
    <div className='app__footer section__padding'>
      <div className="app__footer-logo">
        <img src={images.Logo} alt="logo" />
        <div className="app__footer-title">
            <span>LOSANGELES</span>
            <span>MOUNTAINS</span>
        </div>
      </div>
      <p className='footer-copyright'>Copyright 2016. All Rights Reserved</p>
    </div>
  )
}

export default Footer
