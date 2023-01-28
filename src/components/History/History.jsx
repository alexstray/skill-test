import React from 'react';
import Carousel from '../Carousel/Carousel';
import Head from '../Head/Head';
import './History.css';


const History = () => {
  return (
    <div id='history' className='app__history section__padding'>
      <div className="app__history-head">
        <Head num='01.' title='History' />
        <div className="app__history-head_text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, nisi! Pariatur omnis ipsam dolorem dolores, maxime porro explicabo vitae sapiente deleniti voluptate fugiat eveniet fugit excepturi nihil voluptas ullam? Qui quae magnam voluptatibus odio voluptates?
        </div>

        <div className="app__history-carousel">
          <Carousel />
        </div>

      </div>
    </div>
  )
}

export default History
