import { useState } from "react"

function Squares({value,onSquareClick}){
    
    return(
        <button 
        className="square" 
        onClick={onSquareClick}
        > 
        {value} 
        </button>
    )
}

export default Squares