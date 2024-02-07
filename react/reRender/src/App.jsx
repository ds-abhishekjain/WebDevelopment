import React from 'react'
import { useState } from 'react'


function App() {
  return(
    <div>
      <CardWrapper >
        <div>
          Hi There!
        </div>
      </CardWrapper>
      <CardWrapper >
        <div>
          Hi there 2!
        </div>
      </CardWrapper>
    </div>
  )
}


function CardWrapper({children}) {
  console.log(children);
  return <div style={{border: "2px solid black"}}>
    {children}
  </div>
}

export default App
