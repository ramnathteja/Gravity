/*
* Write a function that takes in an array of at least
* two integers and that returns an array of the starting
* and ending indices of the smallest subarray in the input
* array that needs to to be sorted in place in order for the
* entire input array to be sorted (in ascending order)
* If the input array is already sorted, the function should return
* [-1, -1]
*/

function subarraySort(array) {
    let orderOne = array[0];
    let startOfCaos = -1;
    let lastPositionOfCaos = -1;
    let leastMinimal = Infinity;
    for (let i = 0; i < array.length; i++) { //*O(N)
        if (array[i] >= orderOne) {
            orderOne = array[i];
        } else {
            leastMinimal = Math.min(leastMinimal, array[i]);
            lastPositionOfCaos = i;
        }
    }
    startOfCaos = getPositionOfListMinimal(leastMinimal, array);
    return [startOfCaos, lastPositionOfCaos];
}

function getPositionOfListMinimal(leastMinimal, array) { //*O(N)
    for (let i = 0; i < array.length; i++) {
        if (leastMinimal < array[i]) {
            return i;
        }
    }
    return -1;
}


/*
* Time complexity => O(N) + O(N) = O(2N) => O(N)
* Space complexity => O(1);
*/

const INPUT = [1, 2, 4, 7, 10, 11, 7, 12, 6, 7, 16, 18, 19];
console.log(subarraySort(INPUT));