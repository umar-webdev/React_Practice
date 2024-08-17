import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [backgroundColor, setbackgroundColor] = useState('yellow')
  const handleClick = ()=>{
  const newcolor = backgroundColor === 'white' ? 'red' : 'blue';
  setbackgroundColor(newcolor);
  console.log('clicked')
  }
  return (
    <>
      <div onClick={handleClick} style={{backgroundColor}}>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
    </>
  )
}

export default App
