import { useState } from 'react'
import './App.css'
import Squares from '/components/Squares'

function App() {

  const [xIsNext,setXisNext] = useState(true);
  const [square,setSquare] = useState(Array(9).fill(null));
  
  function handleClick(i) {
    if (square[i] || calculateWinner(square)) {
      return;
    }
    const nextSquare =square.slice();
    
    xIsNext ? nextSquare[i] = "X": nextSquare[i] = "O";

    setSquare(nextSquare);
    setXisNext(!xIsNext);
  }
  
  const winner = calculateWinner(square);
  let status;
  if (winner) {
    status = 'Winner: ' + winner;
  } else {
    status = 'Next player: ' + (xIsNext ? 'X' : 'O');
  }

  return (
    <>
      <div className='status'>{status}</div>
      <div className='board-row'>
        <Squares value={square[0]} onSquareClick = {()=>handleClick(0)}/>
        <Squares value={square[1]} onSquareClick = {()=>handleClick(1)}/>
        <Squares value={square[2]} onSquareClick = {()=>handleClick(2)}/>
      </div>
      <div className='board-row'>
        <Squares value={square[3]} onSquareClick = {()=>handleClick(3)}/>
        <Squares value={square[4]} onSquareClick = {()=>handleClick(4)}/>
        <Squares value={square[5]} onSquareClick = {()=>handleClick(5)}/>
      </div>
      <div className='board-row'>
        <Squares value={square[6]} onSquareClick = {()=>handleClick(6)}/>
        <Squares value={square[7]} onSquareClick = {()=>handleClick(7)}/>
        <Squares value={square[8]} onSquareClick = {()=>handleClick(8)}/>
      </div>
        
    </>
  )
}


function calculateWinner(square) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (square[a] && square[a] === square[b] && square[a] === square[c]) {
      return square[a];
    }
  }
  return null;
}

export default App
