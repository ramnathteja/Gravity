function generateDocument(characters, document) {
    // Write your code here.
    let available = {};
    for (const character of characters) {
        if (character in available) {
            available[character]++;
        } else {
            available[character] = 1;
        }
    }
    for (const letter of document) {
        if (letter in available) {
            available[letter]--;
            if (available[letter] < 0) return false;
        } else {
            return false;
        }
    }
    return true;
}