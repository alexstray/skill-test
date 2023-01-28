import React from 'react';
import './Team.css';
import Head from '../Head/Head';
import Tabs from '../Tabs/Tabs';

const Team = () => {
  return (
    <div className='app__team section__padding' id='team'>
      <div className="app__team-head">
        <Head title='Climb' num='02.' />
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et deleniti iusto dolor, fugiat dicta doloribus sequi? Dicta ex atque accusamus laboriosam. Aperiam rem, commodi necessitatibus nostrum assumenda hic eveniet ipsum.</p>
      </div>
      <div className="app__team-tabs">
        <div className="app__team-tabs_container section__padding">
            <Tabs />
        </div>
      </div>
    </div>
  )
}

export default Team
