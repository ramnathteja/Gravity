function firstNonRepeatingCharacter(string) {
    // Write your code here.
    let uniqueSet = {}
    let letters = string.split('');
    for (const letter of letters) {
        if (letter in uniqueSet) {
            uniqueSet[letter]++;
        } else {
            uniqueSet[letter] = 1;
        }
    }
    for (let i = 0; i < letters.length; i++) {
        if (uniqueSet[letters[i]] === 1) return i;
    }
    return -1;
}