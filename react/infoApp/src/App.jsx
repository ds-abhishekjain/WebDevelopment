import { useState } from 'react'
import './App.css'
import { sculptureList } from './assets/data'

function App() {
  const [index, setIndex] = useState(0);
  const [showMore,setShowMore] = useState(false)

  const hasNext = index < sculptureList.length-1;

  function clickHandler() { 
    if (hasNext) {
     setIndex(index+1); 
    } else{
      setIndex(0);
    }

  }

  function detailClickHandler() {
    setShowMore(!showMore)
  }

  function backClickHandler() {
    setIndex(index-1);
  }

  return (
    <div>
      <button onClick={backClickHandler}>Back</button>
      <button onClick={clickHandler}>Next</button>
      <InfoCard index={index}/>
      <p>({index +1} of {sculptureList.length})</p>
      <button onClick={detailClickHandler}>{showMore ? 'Hide' : 'Show'} Details</button>
      {showMore && <p>{sculptureList[index].description}</p>}
      <br /><br />
      <img src= {sculptureList[index].url} />
    </div>
  )
}

function InfoCard({index}) {
  return(
    <h4>{sculptureList[index].name} by {sculptureList[index].artist}</h4>
  )
}

export default App
