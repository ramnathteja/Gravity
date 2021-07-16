/** 
*   ! failed some important test cases.
*   Todo need to redo or make some changes
*/

/**
 * @param {number} n
 * @param {number[][]} paths
 * @return {number}
 */
 var longestCommonSubpath = function(n, paths) {
    let theSmallestPath = 0;
    let currentPath = n;
    
    for(let i = 0; i < paths.length; i++) {
            if(currentPath > paths[i].length) {
                currentPath = paths[i].length;
                theSmallestPath = i;
            }
    }
    let longest = paths[theSmallestPath].length;    
    const tries = new SuffixTries(paths[theSmallestPath]);
    
    console.log(tries);
    for(let i = 0; i < paths.length; i++) {
        let maxValue =  tries.contains(paths[i]);
        longest = Math.min(longest, maxValue);
    }
    
    return longest;
};

class SuffixTries {
    constructor(list) {
        this.root = {};
        this.endSymbol = '*';
        this.constructTrie(list);
    }
    
    constructTrie(list) {
        for(let i = 0; i < list.length; i++) {
            this.subArrayStartingAt(i, list);
        }
    }
    
    subArrayStartingAt(i, list) {
        let node = this.root;
        for(let j = i; j < list.length; j++) {
            let value = list[j];
            if(!(value in node))
                node[value] = {};
            node = node[value];
        }
        node[this.endSymbol] = true;
    }
    
    contains(list) {
        let node = this.root;
        let max = 0;
        let longest = 0;
        for(let i = 0; i < list.length ; i++) {
            let value = list[i];
            if(!(value in node)) {
                max = Math.max(max, longest);
                console.log(max, value);
                node = this.root;
                longest = 0;
                continue;
            }
            longest++;
            max = Math.max(max, longest);
            node = node[value];
        }
        return max;
    }
}

const n = 10;
const paths = [[1,7,0,6,9,0,7,4,3,9,1,5,0,8,0,6,3,6,0,8,3,7,8,3,5,3,7,4,0,6,8,1,4],[1,7,0,6,9,0,7,4,3,9,1,5,0,8,0,6,3,6,0,8,3,7,8,3,5,3,7,4,0,6,8,1,5],[8,1,7,0,6,9,0,7,4,3,9,1,5,0,8,0,6,3,6,0,8,3,7,8,3,5,3,7,4,0,6,8,1]];

console.log(longestCommonSubpath(n, paths)); 