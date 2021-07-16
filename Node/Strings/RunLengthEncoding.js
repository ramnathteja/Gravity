function runLengthEncoding(string) {
    // Write your code here.
    let letters = string.split('');
    let previous = letters[0];
    let count = 0;
    let newString = [];
    for (const letter of letters) {
        if (letter === previous) {
            if (count < 9)
                count++;
            else {
                newString.push(count);
                newString.push(letter);
                count = 1;
            }
        } else {
            newString.push(count);
            newString.push(previous);
            count = 1;
            previous = letter;
        }
    }

    newString.push(count);
    newString.push(previous);
    return newString.join('');
}


