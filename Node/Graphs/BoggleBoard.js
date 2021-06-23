function boggleBoard(board, words) {
    let found = [];
    for (const word of words) {
        if (findThisWord(word, board))
            found.push(word);
    }
    return found;
}

function findThisWord(word, board) {
    let visited = new Array(board.length);
    visited = board.map(row => (row).map(col => false));
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[0].length; j++) {
            if (visited[i][j] === false && word.charAt(0) === (board[i][j]))
                if (assist(i, j, word, visited, board)) return true;
        }
    }
    return false;
}

function assist(i, j, word, visited, board) {
    let neighbours = [{ i: i, j: j }];
    while (neighbours.length > 0) {
        let current = neighbours.pop();
        i = current.i;
        j = current.j;
        if (visited[i][j])
            continue;
        if (board[i][j] === word.charAt(0)) {
            word = ''.concat(word.substring(1, word.length));
        } else continue;
        visited[i][j] = true;
        if (word.length === 0) return true;
        getNewNeighbours(i, j, neighbours, visited, board);
    }
    if (word.length === 0) return true;
    return false;
}

function getNewNeighbours(i, j, neighbours, visited, board) {
    //top
    if (i > 0 && visited[i - 1][j] === false) neighbours.push({ i: i - 1, j: j });
    //bottom
    if (i < board.length - 1 && visited[i + 1][j] === false) neighbours.push({ i: i + 1, j: j });
    //left
    if (j > 0 && visited[i][j - 1] === false) neighbours.push({ i: i, j: j - 1 });
    //right
    if (j < board[0].length - 1 && visited[i][j + 1] === false) neighbours.push({ i: i, j: j + 1 });
    //topLeft and topRight
    if (i > 0) {
        if (j > 0) {
            if (visited[i - 1][j - 1] === false)
                neighbours.push({ i: i - 1, j: j - 1 })
        }
        if (j < board[0].length - 1) {
            if (visited[i - 1][j + 1] === false)
                neighbours.push({ i: i - 1, j: j + 1 });
        }
    }
    //bottomLeft and bottomRight
    if (i < board.length - 1) {
        if (j > 0) {
            if (visited[i + 1][j - 1] === false)
                neighbours.push({ i: i + 1, j: j - 1 });
        }
        if (j < board[0].length - 1) {
            if (visited[i + 1][j + 1] === false)
                neighbours.push({ i: i + 1, j: j + 1 });
        }
    }
    return;
}



let board = [
    ["t", "h", "i", "s", "i", "s", "a"],
    ["s", "i", "m", "p", "l", "e", "x"],
    ["b", "x", "x", "x", "x", "e", "b"],
    ["x", "o", "g", "g", "l", "x", "o"],
    ["x", "x", "x", "D", "T", "r", "a"],
    ["R", "E", "P", "E", "A", "d", "x"],
    ["x", "x", "x", "x", "x", "x", "x"],
    ["N", "O", "T", "R", "E", "-", "P"],
    ["x", "x", "D", "E", "T", "A", "E"]
];

// let words = ["REPEATED"];

let words = ["this", "is", "not", "a", "simple", "boggle", "board", "test", "REPEATED", "NOTRE-PEATED"];

console.log(boggleBoard(board, words));
// Do not edit the line below.
// exports.boggleBoard = boggleBoard;