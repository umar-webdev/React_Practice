import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const lists = ['list-1','list-2','list-3','list-4','list-5']

  return (
    <>
      <div>
        <ul>
          {
            lists.map((li,i)=>{
              return <li key={i}>{li}</li>
            })
          }
        </ul>
      </div>
    </>
  )
}

export default App
