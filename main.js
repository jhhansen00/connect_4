/*----- constants -----*/
const yellowCircle = "https://i.dlpng.com/static/png/4064602-yellow-circle-transparent-background-logo-image-free-logo-png-yellow-circle-png-2000_1902_preview.webp"
const greenCircle = "https://lh3.googleusercontent.com/proxy/XHr5m53dbY9tLCJv0tZFcN3C8XWWwdPXboA1FIFED06dEM-4Pt8ndBMpaf7E67fmW1yks9LCv7PMMZigbWK5x0AlkDzNlMU7xc0uXU_jJxSXkx4j"
const lookup = {
    "1": yellowCircle,
    "-1": greenCircle,
    null: "",
};

/*----- app's state (variables) -----*/
let board, turn;

/*----- cached element references -----*/
const spaceEls = document.querySelectorAll('td');
const imgEl = document.querySelector('img');

/*----- event listeners -----*/
document.querySelector('table').addEventListener('click', handleMove);
document.querySelector('button').addEventListener('click', init);

/*----- functions -----*/
init();

function init() {
    board = [null, null, null, null, null, null, null, null, null, null,
    null, null, null, null, null, null, null, null, null, null, null, null,
    null, null, null, null, null, null, null, null, null, null, null, null,
    null, null, null, null, null, null, null, null, null, null, null, null,
    null, null];
    turn = 1;
    render();
}

function render() {
    board.forEach(function(sq, idx) {
        spaceEls[idx].style.backgroundImage = `url(${lookup[sq]})`;
    });
    imgEl.src = lookup [turn];
};

function handleMove(evt) {
    const idx = parseInt(evt.target.id.replace('s', ''));
    if (board[idx]) return;
    board[idx] = turn;
    turn *= -1;
    render();
}
