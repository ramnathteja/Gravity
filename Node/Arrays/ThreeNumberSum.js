//!this program assume that the array contains unique values

function threeNumberSum(array, targetSum) {
    array.sort((a, b) => a - b);
    console.log(array);
    let result = [];
    for (let i = 0; i < array.length - 2; i++) {
        const currentTarget = targetSum - array[i];
        console.log("current Target ", currentTarget);
        findTheTwoNumbers(i, currentTarget, array, result);
    }
    return result;
}

function findTheTwoNumbers(position, currentTarget, array, result) {
    const elementOne = array[position];
    let lowerBound = position + 1;
    let upperBound = array.length - 1;

    while (lowerBound < upperBound) {
        let lowerValue = array[lowerBound];
        let upperValue = array[upperBound];
        let currentSum = lowerValue + upperValue;
        if (currentSum === currentTarget) {
            console.log(elementOne, lowerValue, upperValue);
            result.push([elementOne, lowerValue, upperValue]);
            lowerBound++;
            upperBound--;
        } else if (currentSum < currentTarget) {
            lowerBound++;
        } else {
            upperBound--;
        }
    }
}


const array = [12, 3, 1, 2, -6, 5, 0, -8, -1];
const targetSum = 0;
console.log(threeNumberSum(array, targetSum));
