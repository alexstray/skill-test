import React from 'react';
import './Tabs.css';

const Tabs = () => {
    const mtn1 = document.getElementById('mtn1');
    const mtn2 = document.getElementById('mtn2');
    const scheduleImg = document.getElementById('scheduleImg');
    const scheduleMtn1 = document.getElementById('scheduleMtn1');
    const scheduleMtn2 = document.getElementById('scheduleMtn2');

    function clickMtn1() {
        if (mtn2.className === 'active') {
            mtn1.className = 'active';
            mtn2.className = 'unactive';
            scheduleImg.className = 'app__tabs-schedule_img1';
            scheduleMtn1.style.display = 'flex';
            scheduleMtn2.style.display = 'none';
        }
    } 

    function clickMtn2() {
        if (mtn1.className === 'active') {
            mtn2.className = 'active';
            mtn1.className = 'unactive';
            scheduleImg.className = 'app__tabs-schedule_img2';
            scheduleMtn1.style.display = 'none';
            scheduleMtn2.style.display = 'flex';
        }
    }

  return (
    <div className='app__tabs'>
      <div className="app__tabs-btns">
        <button id='mtn1' className='active' onClick={clickMtn1}>Mountain 1</button>
        <button id='mtn2' className='unactive' onClick={clickMtn2}>Mountain 2</button>
      </div>
      <div id='scheduleImg' className="app__tabs-schedule_img1">
        <div className="app__tabs-schedule_container">
            <div id='scheduleMtn1' className="app__tabs-schedule_date1">
                <span>SCHEDULE</span>
                <div className='app__tabs-scehdule'>
                    <div>
                        <p>25 Nov 2016</p>
                        <p>28 Nov 2016</p>
                        <br/>
                        <p>18 Dec 2016</p>
                        <br/>
                        <p>7 Jan 2017</p>
                    </div>
                    <div>
                        <p>Vestibulum viverra</p>
                        <p>Vestibulum viverra</p>
                        <br/>
                        <p>Vestibulum viverra</p>
                        <br/>
                        <p>Vestibulum viverra</p>
                    </div>
                </div>
            </div>

            <div id='scheduleMtn2' className="app__tabs-schedule_date2">
                <span>SCHEDULE</span>
                <div className='app__tabs-scehdule'>
                    <div>
                        <p>17 Nov 2016</p>
                        <br/>
                        <p>13 Dec 2016</p>
                        <p>28 Dec 2016</p>
                        <br/>
                        <p>9 Feb 2017</p>
                    </div>
                    <div>
                        <p>Vestibulum viverra</p>
                        <p>Vestibulum viverra</p>
                        <br/>
                        <p>Vestibulum viverra</p>
                        <br/>
                        <p>Vestibulum viverra</p>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Tabs
