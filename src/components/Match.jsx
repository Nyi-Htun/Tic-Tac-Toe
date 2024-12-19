import { useState } from 'react';
import React from 'react'
import Board from './Board';

function Match() {
    const [history, setHistory] = useState([Array(9).fill(null)]);
    const [currentMove, setCurrentMove] = useState(0);
    const isXTurn = currentMove % 2 === 0;
    const currentSquare = history[currentMove];

    function handleMove(nextSquares) {
        console.log("currentmove > "+ currentMove);
        const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
        setHistory(nextHistory);
        setCurrentMove(nextHistory.length - 1);
    }

    function restart(){
        setCurrentMove(0);
        setHistory([Array(9).fill(null)]);
    }

    function jumpTo(move) {
        if(currentMove > 0){
            setCurrentMove(move);
        }
    }

    function revertFoward(){
        if(currentMove + 1 !== history.length){
            jumpTo(currentMove + 1);
        }
    }

  return (
    <>
        <div>Tic-Tac-Toe Game</div>
        <Board isXTurn={isXTurn} square={currentSquare} handleMove={handleMove} restart={restart}/>
        <div>
            <button onClick={() => {jumpTo(currentMove - 1)}}>
                &larr;
            </button>
            {currentMove + 1 !== history.length && 
                <button onClick={revertFoward}>
                    &rarr;
                </button>
            }
            
        </div>
        <button onClick={restart}>Restart</button>
    </>
  )
}

export default Match