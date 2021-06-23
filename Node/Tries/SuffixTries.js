class suffixTrie {
    constructor(string) {
        this.root = {};
        this.endSymbol = '*';
        this.populateTheSuffixTrie(string);
    }

    populateTheSuffixTrie(string) {
        for (let i = 0; i < string.length; i++) {
            this.insertSubstringStartingAt(i, string);
        }
    }

    insertSubstringStartingAt(i, string) {
        let node = this.root;
        for (let j = i; j < string.length; j++) {
            const letter = string.charAt(j);
            if (!(letter in node))
                node[letter] = {};
            node = node[letter];
        }
        node[this.endSymbol] = true;
    }

    contains(string) {
        let node = this.root;
        for (const letter of string) {
            if (!(letter in node)) return false;
            node = node[letter];
        }
        return this.endSymbol in node;
    }
}


function solution(string, list) {
    const trie = new suffixTrie(string);
    for (const item of list) {
        console.log(trie.contains(item));
    }
}

solution("babc", ['abc', 'c', 'ad', 'b']);