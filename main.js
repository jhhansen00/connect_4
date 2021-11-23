/*----- constants -----*/
const yellowCircle = "https://i.dlpng.com/static/png/4064602-yellow-circle-transparent-background-logo-image-free-logo-png-yellow-circle-png-2000_1902_preview.webp"
const greenCircle = "https://www.pngkey.com/png/full/417-4174990_how-to-set-use-small-green-dot-icon.png"
const lookup = {
    "1": yellowCircle,
    "-1": greenCircle,
    null: "",
};

const winningCombos = [
    // horizontal
    [0,1,2,3], [1,2,3,4], [2,3,4,5], [3,4,5,6],
    [7,8,9,10], [8,9,10,11], [9,10,11,12], [10,11,12,13],
    [14,15,16,17], [15,16,17,18], [16,17,18,19], [17,18,19,20],
    [21,22,23,24], [22,23,24,25], [23,24,25,26], [24,25,26,27],
    [28,29,30,31], [29,30,31,32], [30,31,32,33], [31,32,33,34],
    [35,36,37,38], [36,37,38,39], [37,38,39,40], [38,39,40,41],
    // vertical
    [0,7,14,21], [7,14,21,28], [14,21,28,35],
    [1,8,15,22], [8,15,22,29], [15,22,29,36],
    [2,9,16,23], [9,16,23,30], [16,23,30,37],
    [3,10,17,24], [10,17,24,31], [17,24,31,38],
    [4,11,18,25], [11,18,25,32], [18,25,32,39],
    [5,12,19,26], [12,19,26,33], [19,26,33,40],
    [6,13,20,27], [13,20,27,34], [20,27,34,41],
    // Diagonal
    [0,8,16,24], [1,9,17,25], [2,10,18,26], [3,11,19,27],
    [6,12,18,24], [5,11,17,23], [4,10,16,22], [3,9,15,21],
    [7,15,24,31], [8,16,25,32], [9,17,26,33], [10,18,27,34],
    [13,19,25,31], [12,18,24,30], [11,17,23,29], [10,16,22,28],
    [14,22,30,38], [15,23,31,39], [16,24,32,40], [17,25,33,41],
    [20,26,32,38], [19,25,31,37], [18,24,30,36], [17,23,29,35],
];
/*----- app's state (variables) -----*/
let board, turn, winner;

/*----- cached element references -----*/
const spaceEls = document.querySelectorAll('td');
const imgEl = document.querySelector('img');
const winnerEl = document.querySelector('h2');

/*----- event listeners -----*/
document.querySelector('table').addEventListener('click', handleMove);
document.querySelector('button').addEventListener('click', init);

/*----- functions -----*/
init();

function init() {
    board = [null, null, null, null, null, null, null, null, null, null,
    null, null, null, null, null, null, null, null, null, null, null, null,
    null, null, null, null, null, null, null, null, null, null, null, null,
    null, null, null, null, null, null, null, null];
    turn = 1;
    winner = null;
    render();
}

function render() {
    board.forEach(function(sq, idx) {
        spaceEls[idx].style.backgroundImage = `url(${lookup[sq]})`;
    });
    imgEl.src = lookup [turn];
    if (winner === 1) {
        winnerEl.textContent = "Yellow Wins!"
    } else if (winner === -1) {
        winnerEl.textContent = "Green Wins!"
    } else if (winner === "T") {
        winnerEl.textContent = "It's a tie!"
    } else {
        winnerEl.textContent = ""
    };
};

function handleMove(evt) {
    if (evt.target.tagName !== "TD") return;
    const idx = parseInt(evt.target.id.replace('s', ''));
    if (board[idx] || winner) return;
    board[idx] = turn;
    turn *= -1;
    winner = getWinner();
    render();
    console.log(board);
};

function getWinner() {
    for (let i = 0; i < winningCombos.length; i++) {
        console.log(board[winningCombos[i][0]]);
        console.log(Math.abs(null));
        if (Math.abs(board[winningCombos[i][0]] + board[winningCombos[i][1]] + board[winningCombos[i][2]] + board[winningCombos[i][3]]) === 4) {
            return board[winningCombos[i][0]];
        };
    };
    if (board.includes(null)) return null;
    return "T";
};