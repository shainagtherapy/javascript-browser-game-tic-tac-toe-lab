// Display an empty tic-tac-toe board when the page is initially displayed.
// A player can click on the nine cells to make a move.
// Every click will alternate between marking an X and O.
// Display whose turn it is (X or O).
// The cell cannot be played again once occupied with an X or O.
// Provide win logic and display a winning message.
// Provide logic for a cat’s game (tie), also displaying a message.
// Provide a Reset Game button that will clear the contents of the board.

// PSEUDOCODE:
//1) Define the required variables used to track the state of the game.

//2) Store cached element references.

//3) Upon loading, the game state should be initialized, and a function should 
//   be called to render this game state.

//4) The state of the game should be rendered to the user.

//5) Define the required constants.

//6) Handle a player clicking a square with a `handleClick` function.

//7) Create Reset functionality.

/*-------------------------------- Constants --------------------------------*/
const squareEls = document.querySelectorAll('.sqr');
const messageEls = document.querySelector('#message');
const winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [6, 4, 2]
]

// console.log(squareEls)
// console.log(messageEls)
/*---------------------------- Variables (state) ----------------------------*/
let board;
let turn;
let winner;
let tie;
/*------------------------ Cached Element References ------------------------*/



/*-------------------------------- Functions --------------------------------*/
function init() {
    board = [
        '', '', '',
        '', '', '',
        '', '', ''];
    turn = "X";
    winner = false;
    tie = false;
    render();
}
init()

function play(event) {
    player1(event);
    player2(event);
    render();
}
// STUCK Step 3g. Call a function named render() at the end of the init() function.
//Resolved at line 60
function render() {
    updateBoard();
    updateMessage();
}

function updateBoard() {
    for (let i = 0; i < board.length; i++) {
        squareEls[i].textContent = board[i];
        // if (turn === "X") {
        //     squareEls[i].textContent = board[i]
        // } else if (turn != "X") {
        //     squareEls[i].textContent = "O"
        // } else
        //     squareEls[i].textContent = " "
    }
}

function updateMessage() {
    if (winner === false && tie === false) {
        messageEls.textContent = "It's X turn!"
    } else if (winner === false && tie === true) {
        messageEls.textContent = "It's a tie!"
    } else {
        messageEls.textContent = "You've won!"
    }
}
render()

checkForWinner.forEach((winningCombos) => {
    
})
//WILL NEED A STEP OF IF/ELSE TRUE STATEMENT TO READ:
//IF CLICK IS "X", MESSAGE SAYS "IT'S O TURN" ETC


/*----------------------------- Event Listeners -----------------------------*/


// Step 6 a.b.c.
const handleClick = (event) => {
    const squareIndex = event.target.id;
    console.log(squareIndex)
}

squareEls.forEach((banana) => {
    banana.addEventListener('click', (event) => {
        handleClick(event)
    })
})
console.log(handleClick)
//document.querySelectorAll('.sqr').addEventListener('click', play)




// function handleClick(event) {
//     squareEls.forEach(addEventListener.'click')
// }
// function handleClick(event) {

// }

// squareEls.addEventListener('click', handleClick)
// turn X
// updates message to "it's O turn"
