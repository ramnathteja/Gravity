//* Time O(P^2 * N) {construction} + O(S * N) {Search}
//* P -> longest phone number // N -> number of contacts // S -> longest substring

class SufficTrie {
    constructor(names, phoneNumbers) {
        this.root = {};
        this.endString = '*';
        this.constructThePhoneBook(names, phoneNumbers);
    }

    constructThePhoneBook(names, phoneNumbers) {
        for (let i = 0; i < names.length; i++) {
            for (let j = 0; j < phoneNumbers[i].length; j++) {
                this.assist(j, names[i], phoneNumbers[i]);
            }
        }
    }


    assist(startIdx, name, number) {
        let node = this.root;
        for (let i = startIdx; i < number.length; i++) {
            let letter = number.charAt(i);
            if (!(letter in node))
                node[letter] = {};
            node = node[letter];
            if ((this.endString in node)) {
                if (node[this.endString] > name) {
                    node[this.endString] = name;
                } else {
                    //*do nothing
                }
            } else
                node[this.endString] = name;
        }
    }


    contains(string) {
        let node = this.root;
        for (const char of string) {
            if (!(char in node))
                return "No CONTACT";
            node = node[char];
        }
        if (!(this.endString in node)) return "NO CONTACT";
        return node[this.endString];
    }


}


function solution(A, B, P) {
    const example = new SufficTrie(A, B);
    return example.contains(P);
}

const A = [["sender", "amy", "ann", "michael"], ["adam", "eva", "leo"]];
const B = [["123456789", "234567890", "789123456", "123123123"], ["121212121", "111111111", "444555666"]];
// A = ["pin", "pom"]
// B = ["998999999", "998998999"]
P = ["1", "112"];
for (let i = 0; i < P.length; i++) {
    console.log(solution(A[i], B[i], P[i]));
}