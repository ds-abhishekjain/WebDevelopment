import { useEffect, useState } from 'react'

import './App.css'

function App() {

  const [id,setId] = useState(1);

  return (
    <div>
      <button onClick={function () {
        setId(1)
      }}>1</button>
      <button onClick={function () {
        setId(2)
      }}>2</button>
      <button onClick={function () {
        setId(3)
      }}>3</button>
      <Todo id = {id} />
    </div>
  )
}

function Todo({id}) {
  const [todo, setTodo] = useState([])

  useEffect(() => {
    fetch("https://sum-server.100xdevs.com/todo?id="+ id)
    .then( async (res)=> {
      const json = await res.json();
      setTodo(json.todo)
    })
  },[id])

  return(
    <div>
      <h1>
        {todo.title}
      </h1>
      <h4>
        {todo.description}
      </h4>
    </div>
  )
}

export default App
