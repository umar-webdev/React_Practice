import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [data, setData] = useState(null)
  const fetchApi = async () =>{
    const url = 'https://jsonplaceholder.typicode.com/posts/1'
    const response = await fetch(url)
    const data = await response.json()
    setData(data)
  }
  useEffect(()=>{
    fetchApi()
  },[])
  return (
    <>
      <p className="read-the-docs">
          {
            data ?(<div>
              <h1>{data.userId}</h1>
              <h1>{data.title}</h1>
              <p>{data.body}</p>
            </div>              
              ): (
                <div>Loading...</div>
            )
          }
      </p>
    </>
  )
}

export default App
