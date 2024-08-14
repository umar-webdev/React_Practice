import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [input, setInput] = useState('')
  const handleChange = (e)=>{
    const value = e.target.value
    setInput(value)
  }
  return (
    <>
      <div className="card">
       <input value={input} onChange={handleChange} placeholder='Enter Something....'/>
        <p>
          User input : {input}
        </p>
      </div>
    </>
  )
}

export default App
