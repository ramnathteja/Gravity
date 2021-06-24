    class suffixTrie {
        constructor(string) {
            this.root = {};
            this.endSymbol = '*';
            this.constructTheSufficTrie(string);
        }

        constructTheSufficTrie(string) {
            for (let i = 0; i < string.length; i++) {
                this.assist(i,string);
            }
        }

        assist(i, string) {
            let node = this.root;
            for(let j = i; j < string.length; j++) {
                let letter = string.charAt(j);
                if(!(letter in node))
                    node[letter] = {};
                node = node[letter];
            }
            node[this.endSymbol] = true;
        }

        containsLoosely(string) {
            let node = this.root;
            for(let i = 0; i < string.length; i++) {
                let letter = string.charAt(i);
                if(!(letter in node))
                    return false;
                node = node[letter];
            }
            return true;
        }
    }


    function multiStringSearch(bigString, smallStrings) {
        let results = [];
        const example = new suffixTrie(bigString);
        for(const string of smallStrings) {
            results.push(example.containsLoosely(string));
        }
        return results;
    }

const bigString = "this is a big string";
const smallStrings = ["this", "yo", "is", "a", "bigger", "string", "kappa"];
console.log(multiStringSearch(bigString,smallStrings));

