import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [checked, setChecked] = useState(true)
  const [text , setText] = useState('OFF')
  const handleClicked =( )=>{
    setChecked(!checked)
    if(!checked){
      setText('OFF')
    }else{
      setText('ON')
    }
  }
  return (
    <>
      <div>
        <input onClick={handleClicked} type="checkbox" name="toggle"/>
        <label>Toggle: {text}</label>
      </div>
    </>
  )
}

export default App
