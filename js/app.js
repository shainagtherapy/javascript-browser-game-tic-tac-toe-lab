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

const winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [6, 4, 2]
];

// console.log(squareEls)
// console.log(messageEls)
/*---------------------------- Variables (state) ----------------------------*/

// board;
// turn;
// winner;
// tie;

/*------------------------ Cached Element References ------------------------*/

const squareEls = document.querySelectorAll('.sqr');
const messageEl = document.querySelector('#message');
const resetBtnEl = document.querySelector('#reset');


/*-------------------------------- Functions --------------------------------*/

function init() {
    board = [
     "", "", "",
     "", "", "",
     "", "", "",
    ];
    turn = "X";
    winner = false;
    tie = false;
    render();
}
init();
// function play(event) {
//     player1(event);
//     player2(event);
//     render();
// }
// Step 4:
// Basic loop:
// function updateBoard() {
//       for (let i = 0; i < board.length; i++) 
//       squareEls[i].textContent = board[squareEls[i].id];
// }
function updateBoard() {
    board.forEach((value, index) => {
        const square = squareEls[index];
        square.textContent = value; // connects to matching div
    
        if (value === 'X') 
            square.style.color = "magenta";
        else if (value === 'O')
            square.style.color = "cyan";
    })
}

function updateMessage() {
    if (winner === false && tie === false) {
        messageEl.textContent = `It's ${turn}'s turn`;
    } else if (winner === false && tie === true) {
        messageEl.textContent = "It's a tie!";
    } else {
        messageEl.textContent = `Player ${turn} won!`;
    }
}

function render() {
  updateBoard();
  updateMessage();
}

// Step 6 a


// Step 6.1
function placePiece(index) {
    board[index] = turn;
}

// Step 6.2 ********** a bit stuck
// function checkForWinner () {
//     for (let i = 0; i < winningCombos.length; i++) {
//         const [a, b, c] = winningCombos[i];
//     if ([a] !== "" && [a] === [b] && [a] === [c]) {
//         winner = true;
//         return;
//     }
//     }
// }

function checkForWinner() { //chat gpt suggestion, is it not the same?
  for (let i = 0; i < winningCombos.length; i++) {
    const [a, b, c] = winningCombos[i];
    if (
      board[a] !== '' &&
      board[a] === board[b] &&
      board[a] === board[c]
    ) {
      winner = true;
      return;
    }
  }
}


// Step 6.3
function checkForTie () {
    if (winner === false && (!board.includes(""))) {
      tie = true;
    }
  }

// rewrite call a friend: if (winner === false && (!board.includes(""))) tie = true;
// rewrite: chatgpt suggestion
// function checkForTie() {
//   if (winner === true) return;
//   if (!board.includes('')) { 
//     tie = true;
//   }
// }


// Step 6.4
function switchPlayerTurn() {
    if (winner === true) {
        return;
}   else if (winner === false && turn === 'X') {
        turn = 'O';
}   else if (winner === false && turn === 'O') {
        turn = 'X';
}    else {
        return;
}
}

/*----------------------------- Event Listeners -----------------------------*/

// Step 6 a.b.c.
// function handleClick(event) {
//     const clickedSquare = event.target;
//     let squareIndex;
//     for (i = 0; i < squareEls; i++) {
//         if (squareIndex[i] === clickedSquare) {
//             squareIndex = i;
//         }
//     }
//     if (winner === true) {
//         return;
//     }
//     if (board[squareIndex] === 'X' || board[squareIndex] === 'O'){
//         return;
//     }
// }

// ORIGINAL LOOP KEEP ME!
for (let i = 0; i < squareEls.length; i++) {
  squareEls[i].addEventListener("click", handleClick);
}

function handleClick(event) {
  const squareIndex = event.target.id;
//  const clickedSquare = event.target.id;


  // Find the square index
  // let squareIndex;
  // for (let i = 0; i < squareEls.length; i++) {
  //   if (squareEls[i] === clickedSquare) {
  //     squareIndex = i;
  //     break;
  //   }
  // }

  if (winner === true) return;
  if (board[squareIndex] === 'X' || board[squareIndex] === 'O') return;

  placePiece(squareIndex);   // Step 6.1
  checkForWinner();          // Step 6.2
  checkForTie();             // Step 6.3
  switchPlayerTurn();        // Step 6.4
  render();                  
}

resetBtnEl.addEventListener('click', init);