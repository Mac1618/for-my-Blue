import './App.css';
import { useState } from 'react';

//Images
import FrontCover from './Images/front-cover.jpg';
import Happy from './Images/happy.jpg'
import Angry from './Images/angry.jpg'
import Sad from './Images/sad.jpg'
import Serious from './Images/serious.jpg'
import Hungry from './Images/hungry.jpg'

function App() {
  // class
  const [ open, setOpen ] = useState(false);

  //buttons
  const [happy, setHappy] = useState(true)
  const [angry, setAngry] = useState(false)
  const [sad, setSad] = useState(false)
  const [serious, setSerious] = useState(false)

  // class function
  const handleClick = () => {
    setOpen(!open)
  }

  return (
    <div 
      // className='card'
      className={open ? 'card open' : 'card'}>
      <div className='left-card' >
        <div className='card-front' onClick={handleClick}>
          <img src={FrontCover} alt="Merry Christmas Image"/>
        </div>
        <div className='card-back'>
          {/* optional text goes here  */}
          {happy ? <img src={Happy} alt="Merry Christmas Image"/> : null}
          {angry ? <img src={Angry} alt="Merry Christmas Image"/> : null}
          {sad ? <img src={Sad} alt="Merry Christmas Image"/> : null}
          {serious ? <img src={Serious} alt="Merry Christmas Image"/> : null}
          <div className='btn-data'>
            <button onClick={() => {
              setHappy(true);
              setAngry(false);
              setSad(false);
              setSerious(false);
            }}>Happy</button>
            <button onClick={() => {
              setHappy(false);
              setAngry(true);
              setSad(false);
              setSerious(false);
            }}>Angry</button>
            <button onClick={() => {
              setHappy(false);
              setAngry(false);
              setSad(true);
              setSerious(false);
            }}>Sad</button>
            <button onClick={() => {
              setHappy(false);
              setAngry(false);
              setSad(false);
              setSerious(true);
            }}>Serious</button>
          </div>
          
        </div>
      </div>

      <div className='right-card' onClick={handleClick}>
        <h2>Merry Christmas</h2>
        <p>Merry Christmas blue sorry na late kong isend ginawa ko pa kasii HAHAHAHA!</p>
        <p>I'm very thankful na dumating ka sa buhay ko blue. I love you so much 😘💙</p>
      </div>

    </div>
  );
}

export default App;
