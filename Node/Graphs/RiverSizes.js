function solution(matrix) {
    let visited = new Array(matrix.length);
    visited = matrix.map((row) => row.map((col) => false));
    return findRiverSizes(matrix, visited);
}

function findRiverSizes(matrix, visited) {
    let sizes = [];
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[0].length; j++) {
            if (matrix[i][j] === 1 && visited[i][j] === false) {
                sizes.push(countRiver(i, j, matrix, visited));
            }
        }
    }
    return sizes
}

function countRiver(i, j, matrix, visited) {
    let size = 0;
    let neighbours = [[i, j]];
    while (neighbours.length > 0) {
        let current = neighbours.pop();
        i = current[0];
        j = current[1];
        if (visited[i][j] === true)
            continue;
        if (matrix[i][j] === 0)
            continue;
        visited[i][j] = true;
        size++;
        getNewNeighbours(i, j, matrix, neighbours);
    }
    return size;
}

//! for every i and j we need to get top, bottom, right and left that is
//! i+1,j ---> top ; is not possible for the 0th set
//! i-1, j ---> bottom; is not possible for the last set
//! i, j-1 ---> left; is not possible for the 0th element
//! i, j+1 ----> right; is not possible for the last element 

function getNewNeighbours(i, j, matrix, neighbours) {
    if (i > 0) neighbours.push([i - 1, j]);
    if (i < matrix.length - 1) neighbours.push([i + 1, j]);
    if (j > 0) neighbours.push([i, j - 1]);
    if (j < matrix[0].length - 1) neighbours.push([i, j + 1]);
    return;
}





let matrix = [
    [1, 0, 0, 1, 0],
    [1, 0, 1, 0, 0],
    [0, 0, 1, 0, 1],
    [1, 0, 1, 0, 1],
    [1, 0, 1, 1, 0]
];


console.log(solution(matrix));