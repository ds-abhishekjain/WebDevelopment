
import './App.css'

import { useState } from 'react';

function App() {
  const [count,setCount] = useState(0);

  function onCLickHandler(params) {
    setCount(count+1);
  }

  return (
    <div>
      <button onClick={onCLickHandler}>Counter {count}</button>
    </div>
  )
}

export default App
