function zigzagTraverse(array) {
    let i = 1;
    let j = 0;
    results = [array[0][0]];
    goUp(i, j, array, results);
    return results;
}

function goDown(i, j, array, results) {
    while (i < array.length && j >= 0) {
        results.push(array[i][j]);
        i++;
        j--;
    }
    if (i < array.length && j < 0) {
        j = 0;
        goUp(i, j, array, results);
    } else if (i >= array.length && j >= 0) {
        if (j === array[0].length - 1) {
            return;
        }
        i = array.length - 1;
        j = j + 2;
        goUp(i, j, array, results);
    }
}

function goUp(i, j, array, results) {
    while (i >= 0 && j < array[0].length) {
        results.push(array[i][j]);
        i--;
        j++;
    }
    if (j < array[0].length) {
        i = 0;
        goDown(i, j, array, results);
    } else if (i >= 0 && j >= array[0].length) {
        i = i + 2;
        j = array[0].length - 1;
        goDown(i, j, array, results);
    } else if (i < 0 && j >= array[0].length) {
        i = i + 2;
        j = array[0].length - 1;
        goDown(i, j, array, results);
    }
}

let Input = [
    [1, 3, 4, 10],
    [2, 5, 9, 11],
    [6, 8, 12, 15],
    [7, 13, 14, 16]
]
let testCase = [[1,2,3,4,5],[6,7,8,9,10]];
let testCase2 = [[1],[2]];
console.log(zigzagTraverse(testCase2));