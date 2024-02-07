import { useState } from 'react'
import './App.css'
import { useEffect } from 'react'

function App() {
  const [todos, setTodos] = useState([])

  useEffect(() => {
    setInterval(() => {
      fetch("https://sum-server.100xdevs.com/todos")
      .then(async (res) => {
        const json = await res.json();
        setTodos(json.todos);
      })
    },1000)
  }, [])


  return (
    <div>
      {todos.map(todo =>
         <Todos key={todo.id} title={todo.title} description={todo.description} />)}
    </div>
  )
}

function Todos({title,description}) {
  return <div>
    <h1>
      {title}
    </h1>
    <h4>
      {description}
    </h4>
  </div>
}

export default App
