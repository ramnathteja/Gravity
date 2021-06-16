function hasSingleCylic(array) {

    let numberOfVists = 0;
    let position = 0;
    while (numberOfVists <= array.length) {
        if (typeof (array[position]) != "number") break;
        let nextRotation = (position + array[position]) % array.length;
        array[position] = "visited"
        numberOfVists++;
        position = nextRotation < 0 ? array.length + nextRotation : nextRotation;
    }
    if (position != 0) return false;
    if (numberOfVists != array.length) return false;
    return true;
}


let list  = [
    [2, 3, 1, -4, -4, 2],
    [2, 2, -1],
    [2, 2, 2],
    [1, 1, 1, 1, 1],
    [-1, 2, 2],
    [0, 1, 1, 1, 1],
    [1, 1, 0, 1, 1],
    [1, 1, 1, 1, 2],
    [3, 5, 6, -5, -2, -5, -12, -2, -1, 2, -6, 1, 1, 2, -5, 2],
    [3, 5, 5, -5, -2, -5, -12, -2, -1, 2, -6, 1, 1, 2, -5, 2],
    [1, 2, 3, 4, -2, 3, 7, 8, 1],
    [1, 2, 3, 4, -2, 3, 7, 8, -8],
    [1, 2, 3, 4, -2, 3, 7, 8, -26],
    [10, 11, -6, -23, -2, 3, 88, 908, -26],
    [10, 11, -6, -23, -2, 3, 88, 909, -26],
    [1, -1, 1, -1]
];

let testCase = 1;
for(const item of list) {
    console.log("Result of testcase ", testCase," is ",hasSingleCylic(item));
    testCase++;
}

//1 3 -5
//3 3 1