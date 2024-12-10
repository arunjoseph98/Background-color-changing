import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [bgColor, setBgColor] = useState("#000000");
  
  const bgChange=(col)=>{
    if(col=='red')
    {
      setBgColor('#9e1b32');
    }
    else if(col == 'green')
    {
      setBgColor('#17B169');
    }
    else if(col == 'blue')
      {
        setBgColor('#0047AB');
      }
      else
        {
          setBgColor('#FFC72C');
        }
  }
 

  return (
    <>
      
    <div className='bg' style={{background: bgColor == "#000000" ? "#000000" : bgColor}}>
      
        <div className='btnGrp'>
          <button id='red' onClick={(e)=> bgChange('red')}>Red</button>
          <button id='green' onClick={(e)=> bgChange('green')}>Green</button>
          <button id='blue' onClick={(e)=> bgChange('blue')}>Blue</button>
          <button id='yellow' onClick={(e)=> bgChange('yellow')}>Yellow</button>
        </div>
      </div>
    </>
  )
}

export default App
