import React from 'react'
import { useState, useEffect } from 'react'

const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const res = await fetch('https://jsonplaceholder.typicode.com/todos');  
      const data = await res.json();

      if (data && data.length) setData(data);
    }

    getData();

  }, [])

  return (

    <ul>
      {
        data.map(todo => (
          <li key={todo.id}>{todo.title}</li>
        ))
      }
    </ul>
    
  )
}

export default App