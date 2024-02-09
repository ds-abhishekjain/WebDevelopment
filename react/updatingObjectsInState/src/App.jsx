import { useState } from 'react'
import {useImmer} from 'use-immer'

import './App.css'

function App() {
  const [details, setDetails] = useImmer({
    title : "Blue Nana",
    artist : {
      name: "Abhishek",
      city : "New Delhi",
      imgUrl: "https://i.imgur.com/Sd1AgUOm.jpg"
    }
  })

  function nameHandler(e) {
    setDetails(draft => {
      draft.artist.name = e.target.value;
    })
  }

  // function nameHandler(e) {
  //   setDetails({
  //     ...details,
  //       artist :{
  //       ...details.artist,
  //       name : e.target.value
  //     }
  //   })
  // }

  return (
    <div>
      <label>Name: </label><input type="text" onChange={nameHandler}/>
      <br /><br />
      <label>Tittle: </label><input type="text" />
      <br /><br />
      <label>City: </label><input type="text" />
      <br /><br />
      <label>Image: </label><input type="text" />
      <br /><br />
      <DisplayCard title = {details.title} 
      
        name = {details.artist.name}
        city = {details.artist.city}
        imgUrl = {details.artist.imgUrl} >
      
       </DisplayCard>

    </div>
  )
}

function DisplayCard({title,name,city,imgUrl}) {
  return <div>
    <p>{title} by {name}</p>
    <p>(located in {city})</p>
    <img src={imgUrl} alt="" />
  </div>
}

export default App
