/*
* Write a function that takes in an array of integers and returns an array of
* length 2 representing the largest range of integers contained in that array.

* The first number in the input array should be the first number in the range,
* with the second number should be the last number in the range.
* A range of numbers is defined as a set of numbers that comes right after each
* other in the set of real integers. For instance, the output array [2,6] represents the
* range {2,3,4,5,6} which is a range of length 5. Note that numbers don't need to be sorted
* or adjacent in the input array in order to form a range.
*/

function largestRange(array) {
    let counter = 0
    let maxCounter = -Infinity;
    let prime;
    let lastOfUs;

    let hashMap = new Map();
    for (const ele of array) {
        hashMap.set(ele, true);
    }
    for (const ele of array) {
        if (hashMap.get(ele)) {
            let currentprime = ele;
            let currentlastOfUs = ele;
            let num = ele;
            while (hashMap.has(num)) {
                counter++;
                hashMap.set(num, false);
                currentlastOfUs = num;
                num++;
            }
            num = ele - 1;
            while (hashMap.has(num)) {
                counter++;
                hashMap.set(num, false);
                currentprime = num;
                num--;
            }
            if (maxCounter < counter) {
                prime = currentprime;
                lastOfUs = currentlastOfUs;
                maxCounter = counter;
            }
            counter = 0;
        }
    }
    return [prime, lastOfUs];
}



let Input = [8, 4, 2, 10, 3, 6, 7, 9, 1];
console.log(largestRange(Input));