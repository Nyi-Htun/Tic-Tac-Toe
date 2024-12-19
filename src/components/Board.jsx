import Square from './Square'
import { calculateDraw } from './calculateDraw.js';
import { calculateWinner } from './calculateWinner.js'
import Swal from 'sweetalert2';

function Board({ isXTurn, square, handleMove, restart }) {
    function handleClick(squareNo) {
        if(square[squareNo] == null){
            const nextSquare = square.slice();
            isXTurn ? nextSquare[squareNo] = "X" : nextSquare[squareNo] = "O";
            handleMove(nextSquare);
            if(calculateWinner(nextSquare) !== null){
                console.log("winner >> " + calculateWinner(nextSquare));
                const winner =isXTurn ? "X" : "O";
                Swal.fire({
                    title: "Good job!",
                    text: "Winner is " + winner + "!",
                    icon: "success",
                    confirmButtonText: "Start again",
                    allowOutsideClick: false,
                    allowEscapeKey: false,
                }).then((result) => {
                    if (result.isConfirmed) {
                        restart();
                    }
                });
            } else if(calculateDraw(nextSquare) == null){
                
                console.log("Game is over!");
                Swal.fire({
                    title: "Draw!",
                    text: "That's a great plays!",
                    icon: "question",
                    confirmButtonText: "Start again",
                    allowOutsideClick: false,
                    allowEscapeKey: false,
                }).then((result) => {
                    if (result.isConfirmed) {
                        restart();
                    }
                });
            } else{
                console.log(nextSquare);
            }
        }
    }

  return (
    <div className='w-36 grid grid-cols-3 gap-0 bg-red-50'>
        <Square value={square[0]} handleClick={() => {handleClick(0)}}/>
        <Square value={square[1]} handleClick={() => {handleClick(1)}}/>
        <Square value={square[2]} handleClick={() => {handleClick(2)}}/>
        <Square value={square[3]} handleClick={() => {handleClick(3)}}/>
        <Square value={square[4]} handleClick={() => {handleClick(4)}}/>
        <Square value={square[5]} handleClick={() => {handleClick(5)}}/>
        <Square value={square[6]} handleClick={() => {handleClick(6)}}/>
        <Square value={square[7]} handleClick={() => {handleClick(7)}}/>
        <Square value={square[8]} handleClick={() => {handleClick(8)}}/>
    </div>
  )
}

export default Board