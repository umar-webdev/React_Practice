import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [text ,setText] = useState('')
  const [todos,setTodos] = useState([])
  const handleAdd=()=>{
    if(text.trim()!== ''){
      setTodos([...todos,text])
      setText('')
    }
  }
  const handleRemove = (index)=>{
    const updateTodos = todos.filter((_,i)=> i!== index);
    setTodos(updateTodos)
  }
  return (
    <>
      <div>
        <input type='text' onChange={(e)=>setText(e.target.value)} />
        <button onClick={handleAdd}>Add</button>
        <ul>
          <li>
            {todos.map((todo,index)=><p key={index}>{todo} <button onClick={()=>handleRemove(index)}>delete</button> </p>)}
            </li>
        </ul>
      </div>
    </>
  )
}

export default App
