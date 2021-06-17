/*
* Write a function that takes in a non-empty array of distinct integers and an integer
* representing a target sum. The function should find all quadruplets in the array that
* sum up to the target sum and return a two- dimensional array of all these quadruplets
* in no particular order
*/

//! [0,1,1,1,1,1]


function solution(array, targetSum) {

    array.sort((a, b) => a - b);
    let result = [];
    for (let i = 0; i < array.length; i++) {
        for (let j = array.length - 1; j >= 0 && j - 2 > i; j--) {
            let currentRequiredSum = targetSum - (array[i] + array[j]);
            findTwoMore(i, j, result, array, currentRequiredSum);
        }
    }
}


function findTwoElements(lowerBound, upperBound, result, array, target) {
    const i = array[lowerBound];
    const j = array[upperBound];
    lowerBound++;
    upperBound--;
    while (lowerBound < upperBound) {
        let lowerValue = array[lowerBound];
        let upperValue = array[upperBound];
        let currentSum = array[lowerBound] + array[upperBound];
        if (target === currentSum) {
            if (array[lowerBound] === array[upperBound]) {
                addAllElementsInBetween(i, j, lowerBound, upperBound, result);
            }
            else {
                result.push([i, j, upperBound, lowerBound]);
                lowerBound++;
            }
        }
        if (target < currentSum) {
            upperBound--;
        }
        if (target > currentSum) {
            lowerBound++
        }
    }
    return;
}

function addAllElementsInBetween(i, j, lowerBound, upperBound, result) {
    for (let k = lowerBound; k < upperBound; k++) {
        for (let l = upperBound; l > lowerBound; l--) {
            result.push([i, j, k, l]);
        }
    }
}



let array = [1, 2, 3, 4, 5, 6, 3, 232, 7];
solution(array, 3);