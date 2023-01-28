import React from 'react';
import './Head.css';

const Head = ({ num, title }) => {
  return (
    <div className='app__head'>
      <div className="app__head-num">{num}</div>
      <div className="app__head-title">{title}</div>
    </div>
  )
}

export default Head
