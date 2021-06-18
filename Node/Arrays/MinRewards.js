function minRewards(scores) {
    const lowestScore = findtheLowestScore(scores) //*position of the lowest score
    const sumOfrewards = findSumOfRewards(lowestScore, scores);
    return sumOfrewards;
}

function findtheLowestScore(scores) {
    let lSP = 0;
    for (let i = 1; i < scores.length; i++) {
        if (scores[i] < scores[lSP]) {
            lSP = i;
        }
    }
    return lSP;
}

function findSumOfRewards(lsp, scores) {
    let leftSide = lsp - 1;
    let rightSide = lsp + 1;
    let current = lsp;
    let assign = 1;
    let sum = 0;

    while (leftSide >= 0) {
        if (scores[leftSide] < scores[current]) {
            assign = 1;
        } else {
            assign = assign + 1;
        }
        current = leftSide;
        leftSide--;
        sum = sum + assign;
    }
    assign = 1;
    current = lsp;
    while (rightSide < scores.length) {
        if (scores[rightSide] < scores[current]) {
            assign = 1;
        } else {
            assign = assign + 1;
        }
        current = rightSide;
        rightSide++;
        sum = sum + assign;
    }
    return sum;
}


const Input = [8, 4, 2, 1, 3, 6, 7, 9, 5];
//[4,3,2,1,2,3,4,5,1]
console.log(minRewards(Input));