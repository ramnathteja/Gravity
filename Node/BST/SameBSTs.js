function sameBsts(arrayOne, arrayTwo) {

    if (arrayOne.length != arrayTwo.length) return false;
    if (arrayOne.length === 0) return true;
    if (arrayOne[0] != arrayTwo[0]) return false;

    let smallerOne = getLessThanRoot(arrayOne);
    let smallerTwo = getLessThanRoot(arrayTwo);

    let largerOne = getGreaterOrEqualToRoot(arrayOne);
    let largerTwo = getGreaterOrEqualToRoot(arrayTwo);

    return sameBsts(smallerOne, smallerTwo) && sameBsts(largerOne, largerTwo);
}

function getLessThanRoot(array) {
    let root = array[0];
    let subArray = [];
    for (const item of array) {
        if (item < root) {
            subArray.push(item);
        }
    }
    return subArray;
}

function getGreaterOrEqualToRoot(array) {
    let root = array[0];
    let subArray = [];
    for (let i = 1; i < array.length; i++) {
        if (array[i] >= root) {
            subArray.push(array[i]);
        }
    }
    return subArray;
}