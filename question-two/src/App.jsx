import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const handleIncrement= ()=>{
    setCount(count + 1)
  }
  const handleDecrement = ()=>{
    setCount(count - 1)
  }

  return (
    <>
      <h1>Counter</h1>
      <div className="card">
        <button onClick={handleIncrement}>
          +
        </button>
        <p>Count: {count}</p>
        <button onClick={handleDecrement}>
          -
        </button>
      </div>
    </>
  )
}

export default App
