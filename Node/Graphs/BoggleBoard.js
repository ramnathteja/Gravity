class SuffixTries {
    constructor(words) {
        this.root = {};
        this.endSymbol = '*';
        this.constructTrie(words);
    }

    constructTrie(words) {
        for (const word of words) {
            this.assist(word);
        }
    }

    assist(word) {
        let node = this.root;
        for (let i = 0; i < word.length; i++) {
            let letter = word.charAt(i);
            if (!(letter in node))
                node[letter] = {};
            node = node[letter];
        }
        node[this.endSymbol] = word;
    }
}



function boggleBoard(board, words) {
    let visited = new Array(board.length);
    visited = board.map(row => row.map(col => false));
    let results = new Set();
    const trie = new SuffixTries(words);
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[0].length; j++) {
            searchTheBoard(i, j, trie.root, board, visited, results);
        }
    }
    return [...results];
}

function searchTheBoard(i, j, node, board, visited, results) {
    let neighbours = [];
    if (visited[i][j]) return;
    let letter = board[i][j];
    if (!(letter in node)) return;
    node = node[letter];
    visited[i][j] = true;
    if('*' in node) results.add(node['*']);
    getNewNeighbours(i,j,neighbours,board);
    while(neighbours.length > 0) {
        let current = neighbours.pop();
        searchTheBoard(current.i, current.j, node, board, visited, results);
    }
    visited[i][j] = false;
    return;
}



function getNewNeighbours(i, j, neighbours, board) {
    //top
    if (i > 0) neighbours.push({ i: i - 1, j: j });
    //bottom
    if (i < board.length - 1) neighbours.push({ i: i + 1, j: j });
    //left
    if (j > 0) neighbours.push({ i: i, j: j - 1 });
    //right
    if (j < board[0].length - 1) neighbours.push({ i: i, j: j + 1 });
    //topLeft and topRight
    if (i > 0) {
        if (j > 0) {
            neighbours.push({ i: i - 1, j: j - 1 });
        }
        if (j < board[0].length - 1) {
            neighbours.push({ i: i - 1, j: j + 1 });
        }
    }
    //bottomLeft and bottomRight
    if (i < board.length - 1) {
        if (j > 0) {
            neighbours.push({ i: i + 1, j: j - 1 });
        }
        if (j < board[0].length - 1) {
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