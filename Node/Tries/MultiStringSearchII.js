class SuffixTries {
    constructor(list) {
        this.root = {};
        this.endString = '*';
        this.constructTrie(list);
    }

    constructTrie(list) {
        for (const item of list) {
            this.assist(item);
        }
    }

    assist(string) {
        let node = this.root;
        for (let i = 0; i < string.length; i++) {
            let letter = string.charAt(i);
            if (!(letter in node))
                node[letter] = {};
            node = node[letter];
        }
        node[this.endString] = string;
    }

    contains(startIdx, string, hashSet) {
        let node = this.root;
        for (let i = startIdx; i < string.length; i++) {
            let letter = string.charAt(i);
            if (!(letter in node)) {
                break;
            }
            else
                node = node[letter];
            if (this.endString in node)
                hashSet.add(node[this.endString]);
        }
        return;
    }
}

function multiStringSearch(bigString, smallStrings) {
    let results = [];
    const example = new SuffixTries(smallStrings);
    let hashSet = new Set();
    for(let i = 0; i < bigString.length; i++) {
        example.contains(i, bigString, hashSet);
    }
    for (const strings of smallStrings) {
        if (hashSet.has(strings)) {
            results.push(true);
        } else {
            results.push(false);
        }
    }
    return results;
}

const bigString = "abcdefghijklmnopqrstuvwxyz";
const smallStrings = ["abc", "mnopqr", "wyz", "no", "e", "tuuv"];
console.log(smallStrings);
console.log(multiStringSearch(bigString, smallStrings));
console.log([true, true, false, true, true, false]);