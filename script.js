const button = document.querySelector('.play-again'),
    cells = document.querySelectorAll('.row div'),
    message = document.querySelector('.message'),
    pXDiv = document.querySelector('.pxscore'),
    pODiv = document.querySelector('.poscore');

let previous = '',
    clickCount = 0,
    pXScore = 0,
    pOScore = 0;

for (let i = 0; i < cells.length; i++) {
    cells[i].addEventListener('click', e => {
        if (e.target.textContent === '') {
            switch (previous) {
                case '':
                case 'O':
                    e.target.textContent = 'X';
                    previous = 'X';
                    clickCount++;
                    break;
                case 'X':
                    e.target.textContent = 'O';
                    previous = 'O';
                    clickCount++;
                    break;
            }
        }
        if (checkWinner() || clickCount === 9) {
            message.textContent = clickCount === 9 && !checkWinner() ? 'It\'s A Draw!' : `Player "${e.target.textContent}" Wins!`;
            button.style.display = 'flex';
            button.addEventListener('click', () => {
                for (let i = 0; i < cells.length; i++) {
                    cells[i].textContent = '';
                }
                message.textContent = '';
                button.style.display = 'none';
                previous = '';
                clickCount = 0;
            });
            if (clickCount !== 9 || checkWinner()) {
                e.target.textContent === 'X' ? pXScore++ : pOScore++;
            }
            pXDiv.textContent = `Player "X": ${pXScore}`;
            pODiv.textContent = `Player "O": ${pOScore}`;
        }
    });
}

function checkWinner() {
    if (// check horizontal
        cells[0].textContent === 'X' && cells[1].textContent === 'X' & cells[2].textContent === 'X' ||
        cells[0].textContent === 'O' && cells[1].textContent === 'O' & cells[2].textContent === 'O' ||
        cells[3].textContent === 'X' && cells[4].textContent === 'X' & cells[5].textContent === 'X' ||
        cells[3].textContent === 'O' && cells[4].textContent === 'O' & cells[5].textContent === 'O' ||
        cells[6].textContent === 'X' && cells[7].textContent === 'X' & cells[8].textContent === 'X' ||
        cells[6].textContent === 'O' && cells[7].textContent === 'O' & cells[8].textContent === 'O' ||
        // check vertical
        cells[0].textContent === 'X' && cells[3].textContent === 'X' & cells[6].textContent === 'X' ||
        cells[0].textContent === 'O' && cells[3].textContent === 'O' & cells[6].textContent === 'O' ||
        cells[1].textContent === 'X' && cells[4].textContent === 'X' & cells[7].textContent === 'X' ||
        cells[1].textContent === 'O' && cells[4].textContent === 'O' & cells[7].textContent === 'O' ||
        cells[2].textContent === 'X' && cells[5].textContent === 'X' & cells[8].textContent === 'X' ||
        cells[2].textContent === 'O' && cells[5].textContent === 'O' & cells[8].textContent === 'O' ||
        // check diagonal
        cells[0].textContent === 'X' && cells[4].textContent === 'X' & cells[8].textContent === 'X' ||
        cells[0].textContent === 'O' && cells[4].textContent === 'O' & cells[8].textContent === 'O' ||
        cells[2].textContent === 'X' && cells[4].textContent === 'X' & cells[6].textContent === 'X' ||
        cells[2].textContent === 'O' && cells[4].textContent === 'O' & cells[6].textContent === 'O'
        ) {
        return true;
    }
}
