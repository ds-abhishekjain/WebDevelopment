
import './App.css'

import { useState } from 'react';

// Code to update the counter simontaneously
// function App() {
//   const [count,setCount] = useState(0);

//   function onCLickHandler(params) {
//     setCount(count+1);
//   }

//   return (
//     <div>
//       <button onClick={onCLickHandler}>Counter {count}</button>

//       <button onClick={onCLickHandler}>Counter {count}</button>
//     </div>
//   )
// }


// code to update the counter individually
function App() {

  return(
    <div>
      <Mybutton />
      <Mybutton />
    </div>
  )
}

function Mybutton() {
  const [count,setCount] = useState(0)
  
  function onClickHandler() {
    setCount(count+1)
  }

  return(
    <div>
      <button onClick={onClickHandler}>Count {count}</button>
    </div>
  )
}

export default App
