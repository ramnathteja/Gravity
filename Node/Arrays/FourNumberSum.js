/*
* Write a function that takes in a non-empty array of distinct integers and an integer
* representing a target sum. The function should find all quadruplets in the array that
* sum up to the target sum and return a two- dimensional array of all these quadruplets
* in no particular order
! value of array are unique
*/


function solution(array, targetSum) {
    array.sort((a, b) => a - b);
    let result = [];
    for (let i = 0; i < array.length - 3; i++) {
        for (let j = i + 1; j < array.length - 2; j++) {
            findTwoMore(i, j, targetSum, array, result);
        }
    }
}

function findTwoMore(i, j, targetSum, array, result) {
    const currentSum = array[i] + array[j];
    let lowerBound = j + 1;
    let upperBound = array.length - 1;
    while (lowerBound < upperBound) {
        let lowerValue = array[lowerBound];
        let upperValue = array[upperBound];
        let sectionSum = lowerValue + upperValue;
        if (targetSum === currentSum + sectionSum) {
            result.push([array[i], array[j], lowerValue, upperValue]);
            lowerBound++;
            upperBound--;
        } else if (targetSum < currentSum + sectionSum) {
            upperBound--;
        } else {
            lowerBound++;
        }
    }
}



let array = [1, 2, 3, 4, 5, 6, 3, 232, 7];
solution(array, 3);