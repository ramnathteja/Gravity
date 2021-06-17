//!should return numbers not positions
//* take hasMap in case we want position; this will return all pairs of elements [[1,4][3,2]]
function solution(array, targetSum) {
    let result;
    let hasSet = new Set();
    for (let i = 0; i < array.length; i++) {
        let counterPart = targetSum - array[i];
        if (hasSet.has(counterPart))
            result.push([counterPart, array[i]]);
        hasSet.add(array[i]);
    }
    return result;
}
