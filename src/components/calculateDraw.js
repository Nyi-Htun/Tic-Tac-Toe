export function calculateDraw(squares) {
    for(let i = 0; i < squares.length; i++){
        console.log()
        if(squares[i] == null){
            console.log("not over yet");
            return "Not Over Yet!";
        }
    }
    return null;
}