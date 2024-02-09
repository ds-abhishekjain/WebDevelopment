import { useMemo } from 'react';
import { useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0);
  const [inp,setInp] = useState(1);

  // when the counter is updated this expensive operation is 
  // running and rendering again, thats why we can use the concept of memoisation
  // and save the value in cache
  let sum = useMemo(() => {
    console.log("memo got called");
    let sum = 0;
    for (let i = 1; i <= inp; i++) {
      sum = sum+i;
    }
    return sum
  },[inp])


  return (
    <div>
      <input type="text" onChange={(e) => {
        setInp(e.target.value)
      }}/>
      <p>Sum is {sum} </p>
      <button onClick={function () {
        setCount(count+1)
      }}>Counter({count})</button>
    </div>
  )
}

export default App
