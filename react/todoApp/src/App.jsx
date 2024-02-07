import { useState } from 'react'
import './App.css'

const initialTodo = [];

for (let i = 0; i < 5; i++) {
  
  initialTodo.push({
    id : i,
    text : 'Item' + (i+1)
  });

}


function App() {
  
  const [todo,setTodo] = useState(initialTodo)  
  const [text,setText] = useState('')  
  
  return(
    <>
      <input type="text" value={text} onChange = {e => setText(e.target.value)} />
      {console.log(text)}
      <button onClick={() => {
        setText('');
        setTodo([
          ...todo,{
            id: todo.length,
            text: text
          }
        ])
      }}>
        Add
      </button>
      <ul>
        {
          todo.map(
            item => (
              <li key={item.id}>
                {item.text}
              </li>
            )
          )
        }
      </ul>
    </>
  )
}


export default App
