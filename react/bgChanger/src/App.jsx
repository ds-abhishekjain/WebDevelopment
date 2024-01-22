import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState("#808000");
  
  const clickHandler = (newColor) => {
    console.log(color,newColor);
    setColor(newColor);
  }

  return ( 

    <div className="w-full h-screen duration-200" style={{backgroundColor: color}}>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-slate-50 px-3 py-2 rounded-3xl">
          <button onClick={() => clickHandler("red")} className="outline-none px- py-1 text-white shadow-lg rounded-sm" style={{backgroundColor: "red"}}> Red</button>
          <button onClick={() => clickHandler("green")} className="outline-none px- py-1 text-white shadow-lg rounded-sm" style={{backgroundColor: "green"}}> Green</button>
          <button onClick={() => clickHandler("blue")} className="outline-none px- py-1 text-white shadow-lg rounded-sm" style={{backgroundColor: "blue"}}> Blue</button>
          <button onClick={() => clickHandler("orange")} className="outline-none px- py-1 text-white shadow-lg rounded-sm" style={{backgroundColor: "orange"}}> Orange</button>
        </div>
      </div>
    </div>
    
  )
}

export default App
