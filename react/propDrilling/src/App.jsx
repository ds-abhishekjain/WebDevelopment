// prop drilling and Context API
import { useContext, useState } from 'react'

import './App.css'
import { CountContext } from './context'

function App() {
  const [count, setCount] = useState(0)
  // wrap anyone that wants to use teleported value inside a provider 
  return (
    <div>
      <CountContext.Provider value={count}>
        <Count setCount = {setCount}/>
      </CountContext.Provider>
      
    </div>
  )
}

function Count({setCount}) {
  return <div>
    <CountRender/>
    <Buttons setCount = {setCount}/>
  </div>
}

function CountRender() {
  const count = useContext(CountContext);
  return <div>
    {count}
  </div>
}

function Buttons({setCount}) {
  const count = useContext(CountContext);
  return <div>
    <button onClick={() => {
      setCount(count+1)
    }}>Increase</button>
    <button onClick={()=>{
      setCount(count-1)
    }}>Decrease</button>
  </div>
}

export default App
