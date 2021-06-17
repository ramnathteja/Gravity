/*
    *Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]]
    *such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.
    !Notice that the solution set must not contain duplicate triplets.
    
    *Input: nums = [-1,0,1,2,-1,-4]
    *Output: [[-1,-1,2],[-1,0,1]]

    *Input: nums = []
    *Output: []

    *Input: nums = [0]
    *Output: []

    ! constrains 0 <= nums.length <= 3000  &&  -105 <= nums[i] <= 105
*/

function solution(array) {
    array.sort((a, b) => a - b);
    let result = [];
    let hashMap = new Map();
    for (let i = 0; i < array.length; i++) {
        findTheTwoNumbers(i, array, result, hashMap);
    }
    return result;
}

function findTheTwoNumbers(position, array, result, hashMap) {
    const currentSum = array[position];
    let lowerBound = position + 1;
    let upperBound = array.length - 1;
    while (lowerBound < upperBound) {
        let lowerValue = array[lowerBound];
        let upperValue = array[upperBound];
        let sectionSum = lowerValue + upperValue;
        if (currentSum + sectionSum === 0) {
            if (hashMap.has(currentSum)) {
                let hashSet = hashMap.get(currentSum);
                if (hashSet.has(lowerValue) && hashSet.has(upperValue)) {
                } else {
                    hashSet.add(lowerValue);
                    hashSet.add(upperValue);
                    hashMap.set(currentSum, hashSet);
                    result.push([currentSum, lowerValue, upperValue]);
                }
            }
            else {
                let hashSet = new Set();
                hashSet.add(lowerValue);
                hashSet.add(upperValue);
                hashMap.set(currentSum, hashSet);
                result.push([currentSum, lowerValue, upperValue]);

            }
            lowerBound++;
            upperBound--;
        } else if (currentSum + sectionSum < 0) {
            lowerBound++;
        } else {
            upperBound--;
        }
    }
}


const INPUT = [[-1, 0, 1, 2, -1, -4], [], [0], [0, 0, 0], [-1, 1, -1]];
INPUT.forEach(input => console.log(solution(input)));