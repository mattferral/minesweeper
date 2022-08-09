class Minesweeper {
    constructor() {
        this.height = 25;
        this.width = 25;
        this.board = [];
        this.isPlaying = false;
        this.mineCount = 0;
        this.init();
    }

    // Initialization function
    init() {
        this.makeBoard();
        this.makeHtmlBoard();

    }

    // creates 2d array for storing cell values
    makeBoard() {
        for (let y = 0; y < this.height; y++) {
            const row = [];
            // Randomly populate each row with a mine (-1) or undefined
            for (let x = 0; x < this.width; x++) {
                // Give mines 30% spawn rate
                if(Math.random() > .3) {
                    row.push(undefined);
                } else {
                    row.push(-1);
                    this.mineCount++;
                }
            }
            this.board.push(row);
        }
    }

    // creates game board in dom
    makeHtmlBoard() {
        const board = document.getElementById('board');
        board.addEventListener('click', this.revealCell);
        board.addEventListener('rightclick', (e) => {
            e.preventDefault();
            console.log(e);
        });

        for (let y = 0; y < this.height; y++) {
            const row = document.createElement('tr');
            
            for (let x = 0; x < this.width; x++) {
                const cell = document.createElement('td');
                cell.setAttribute('id', `${y}-${x}`);
                row.append(cell);
            }
            board.append(row);
        }
    }

    // Reveals value of the cell clicked
    // if zero calls reveal on surrounding cells
    // if greater than 0, show number of surrounding mines
    // if less than 0, lose game
    revealCell(evt) {
        let adjMines = 0;
        console.log(evt.target.id);
    }
}

const game = new Minesweeper();
console.log(game.board);
console.log(game.mineCount);